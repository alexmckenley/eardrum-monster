import React from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { AuthContext, getAuthorizeURI } from "./Auth.js";
import ChangeUsername from "./ChangeUsername";
import "./Header.css";

function Header() {
  const authInfo = React.useContext(AuthContext);
  const authorizeURI = getAuthorizeURI("/broadcast");
  const broadcastMatch = useRouteMatch("/u/" + authInfo?.displayName);
  const [editing, setEditing] = React.useState(false);
  const match = useRouteMatch("/u/:id");
  const history = useHistory();

  function handleLogout(e) {
    e.preventDefault();
    authInfo.logout();
  }
  const updateName = (name) => {
    setEditing(false);
    if (
      match?.params &&
      authInfo.displayName &&
      decodeURIComponent(match.params.id).includes(authInfo.displayName)
    ) {
      history.replace(`/u/${encodeURIComponent(name)}`);
    }
  };

  return (
    <header className="Header">
      <Link className="Header-title" to="/">
        <span className="Header-titlePrimary">eardrum</span>
        <span className="Header-titleSecondary">monster</span>
      </Link>
      <div className="Header-controls">
        {authInfo != null ? (
          <>
            {broadcastMatch == null ? (
              <Link
                className="App-link"
                to={`/u/${encodeURIComponent(authInfo.displayName)}`}
              >
                Host a channel
              </Link>
            ) : (
              /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
              <a className="App-link" href="#" onClick={handleLogout}>
                Logout
              </a>
            )}
            <div className="App-headerPhoto">
              {editing ? (
                <ChangeUsername
                  initialVal={authInfo.displayName}
                  onSuccess={(name) => updateName(name)}
                  onCancel={() => setEditing(false)}
                />
              ) : (
                <span className="App-smallLink">
                  {authInfo.displayName}{" "}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    className="App-smallLink"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setEditing(true);
                    }}
                  >
                    edit
                  </a>
                </span>
              )}
              {authInfo.userImg ? (
                <img
                  className="App-headerImg"
                  src={authInfo.userImg}
                  alt="profile pic"
                />
              ) : (
                authInfo.displayName
              )}
            </div>
          </>
        ) : (
          <a className="App-link" href={authorizeURI}>
            Host a channel
          </a>
        )}
      </div>
    </header>
  );
}

export default Header;
