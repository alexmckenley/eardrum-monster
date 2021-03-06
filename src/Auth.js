import React, { createContext } from "react";
import { useLocalStorage } from "@rehooks/local-storage";
import SpotifyAPI from "./SpotifyAPI.js";
import { useHistory, useLocation } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";
import { inIframe } from "./Utils";

export const AuthContext = createContext();

export function AuthRedirect() {
  return <div style={{ textAlign: "center" }}>Logging in...</div>;
}

export function getAuthorizeURI(pathname) {
  const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const scopes = process.env.REACT_APP_SPOTIFY_SCOPES;
  const redirectURI = encodeURIComponent(
    process.env.REACT_APP_SPOTIFY_REDIRECT_URI
  );
  const currentPath = encodeURIComponent(pathname);
  return `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientID}&scope=${scopes}&redirect_uri=${redirectURI}&state=${currentPath}`;
}

function handleAuthRedirect(setAuthInfo, history, location) {
  if (location.hash) {
    const params = {};
    location.hash
      .slice(1)
      .split("&")
      .map((param) => param.split("="))
      .forEach((tup) => {
        params[tup[0]] = tup[1];
      });
    const accessToken = params.access_token;
    if (accessToken == null) {
      return;
    }
    location.hash = "";
    new SpotifyAPI(accessToken).fetchUserInfo().then((user) => {
      const spotifyIdentifier = user.id;
      const userImg = user.images?.[0]?.url ?? null;
      // Ensure the user is created upon login
      API.graphql(
        graphqlOperation(queries.getUser, {
          userID: spotifyIdentifier,
        })
      )
        .then((data) => {
          if (data.data.getUser == null) {
            return API.graphql(
              graphqlOperation(mutations.createUser, {
                input: {
                  userID: spotifyIdentifier,
                  displayName: spotifyIdentifier,
                  userImg: userImg,
                  type: "USER",
                },
              })
            ).then((data) => {
              return data.data.createUser.dislayName;
            });
          } else {
            const oldImg = data?.data?.getUser?.userImg;
            if (userImg != null && userImg !== oldImg) {
              API.graphql(
                graphqlOperation(mutations.updateUser, {
                  input: {
                    userID: spotifyIdentifier,
                    userImg: userImg,
                  },
                })
              );
            }
          }
          return data.data.getUser.displayName;
        })
        .then((displayName) => {
          setAuthInfo({
            accessToken,
            username: spotifyIdentifier,
            displayName,
            userImg,
            expiresAt: Math.floor(Date.now() / 1000) + (3600 - 30),
          });
          history.push(decodeURIComponent(params.state));
        })
        .catch(() => {
          history.push("/");
          console.error("user creation failed");
        });
    });
  }
  return null;
}

export function AuthProvider({ children }) {
  const [authInfo, setAuthInfo] = useLocalStorage("EMAuthInfo");
  const location = useLocation();
  const history = useHistory();
  const username = authInfo?.username;
  const accessToken = authInfo?.accessToken;
  const userImg = authInfo?.userImg;
  const displayName = authInfo?.displayName || username;
  const expiresAt = authInfo?.expiresAt;

  React.useEffect(() => {
    handleAuthRedirect(setAuthInfo, history, location);
  }, [setAuthInfo, history, location]);

  React.useEffect(() => {
    if (expiresAt == null || inIframe()) {
      return;
    }

    let iframe = null;
    let timeoutID = null;
    const refreshAuth = () => {
      iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = getAuthorizeURI("/auth");
      document.body.appendChild(iframe);
    };
    const timeUntilExpiry = (expiresAt ?? 0) - Math.floor(Date.now() / 1000);
    if (timeUntilExpiry > 0) {
      timeoutID = setTimeout(() => {
        refreshAuth();
      }, timeUntilExpiry * 1000);
    } else {
      refreshAuth();
    }
    return () => {
      if (timeoutID != null) {
        clearTimeout(timeoutID);
      }
      if (iframe != null) {
        iframe.parentNode.removeChild(iframe);
      }
    };
  }, [expiresAt, location]);

  const authContext = React.useMemo(() => {
    return accessToken != null && username != null
      ? {
          accessToken: accessToken,
          username: username,
          userImg: userImg,
          displayName: displayName,
          logout: () => setAuthInfo(null),
          retryAuth: () => {
            setAuthInfo(null);
            window.location.href = getAuthorizeURI(window.location.pathname);
          },
          setAuthInfo: setAuthInfo,
        }
      : null;
  }, [username, accessToken, setAuthInfo, userImg, displayName]);

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
}
