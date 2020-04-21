import React from "react";
import { Link } from "react-router-dom";
import { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import "./Home.css";
import { AuthContext } from "./Auth.js";
import * as queries from "./graphql/queries";
import * as subscriptions from "./graphql/subscriptions";

const UserList = ({ users }) => (
  <div className="Home-userList">
    {users.map((user) => (
      <Link key={user.userID} className="Home-link" to={`/u/${user.userID}`}>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        👂 /u/{user.userID}
      </Link>
    ))}
  </div>
);

function Home() {
  const authInfo = React.useContext(AuthContext);
  /* eslint-disable jsx-a11y/accessible-emoji */
  return (
    <div className="Home">
      <div className="Home-list">
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <h2 className="Home-title">
          😈{"\u00a0"}MONSTER{"\u00a0"}LIST{"\u00a0"}😈
        </h2>
        <Connect
          query={graphqlOperation(queries.songEventsByType, {
            type: "NEW_SONG",
            sortDirection: "DESC",
            limit: 100,
          })}
          subscription={graphqlOperation(subscriptions.onCreateSongEvent)}
          onSubscriptionMsg={(prev, { onCreateSongEvent }) => {
            if (prev?.songEventsByUserID?.items == null) {
              console.error("bad state in home", prev);
              return prev;
            }
            prev.songEventsByUserID.items.unshift(onCreateSongEvent);
            return prev;
          }}
        >
          {({ data, loading, error }) => {
            if (error) return <h3>Error</h3>;
            if (loading || !data) return <h3>Loading...</h3>;
            console.log(data);
            const songs =
              (data.songEventsByType && data.songEventsByType.items) ?? [];
            const seen = new Set();
            const onlineUsers = songs.filter((songEvent) => {
              if (!seen.has(songEvent.userID)) {
                seen.add(songEvent.userID);
                return true;
              } else {
                return false;
              }
            });
            if (onlineUsers.length === 0) {
              return <div>No recent users</div>;
            }
            console.log(seen);
            return <UserList users={onlineUsers} />;
          }}
        </Connect>
      </div>
      <div className="Home-content">
        <div>
          <em>
            eardrum.monster allows you to sync your spotify client with friends
          </em>
        </div>
        <h1>How do I use it?</h1>
        {authInfo != null ? (
          <>
            <div>1. Click "Broadcast" at the top ☝️</div>
            <div>2. Share the URL with your friends️</div>
          </>
        ) : (
          <>
            <div>1. Click "Login" at the top ☝️</div>
            <div>2. Click "Broadcast" at the top ☝️</div>
            <div>3. Share the URL with your friends️</div>
          </>
        )}

        <h1>Its great for:</h1>
        <div>
          ✅ Streamers who want to let their viewers sync up their music with
          high quality spotify audio
        </div>
        <div>✅ Online gamers who want listen together while gaming</div>
        <div>
          ✅ People who are quarantined and want to have virtual power hours
          together
        </div>

        <h1>Did you say power hour?</h1>
        <div>
          ✅ Yes! eardrum.monster now features <em>Power hour mode™️</em> that
          will automatically change the song every 60s. Everybody must drink
          when the song changes.
        </div>

        <h1>Can I play century club?</h1>
        <div>
          ✅ We've got you covered! <em>Power hour mode™️</em> will keep em'
          coming well beyond the traditional 60 minutes so you can attempt to
          join the century club as many times as you want!
        </div>
      </div>
    </div>
  );
}

export default Home;
