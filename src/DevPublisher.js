import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "./graphql/mutations";

export default function DevPublisher({ hostUserID }) {
  React.useEffect(() => {
    const timeoutID = setInterval(() => {
      const tracks = [
        "spotify:track:08KMh61hPslT7sEf2tEgtT",
        "spotify:track:4mFDsq9pt9msJ9ywYvBzHo",
        "spotify:track:59nNxS2V7M4UDH058BU5qJ",
        "spotify:track:1CkrhTdtRhUzPmA8qtr6y6",
        "spotify:track:4mFDsq9pt9msJ9ywYvBzHo",
        "spotify:track:6AynxUt8LJy9S6bovDdFLr",
        "spotify:track:000PzErbB04ALQCv9iYiQm",
        "spotify:track:6AynxUt8LJy9S6bovDdFLr",
        "spotify:track:7JGepQzDnQDYeGxLCTBSsG",
        "spotify:track:4PPrsYpzuRqe4QoCDGAG4b",
      ];
      const songEvent = {
        userID: hostUserID,
        timestamp: Math.floor(Date.now() / 1000),
        position: 0,
        spotifyURI: tracks[(Math.random() * 100).toString()[0]],
        type: "NEW_SONG",
      };
      API.graphql(
        graphqlOperation(mutations.updateUser, {
          input: {
            userID: hostUserID,
            latestSongEvent: Math.floor(Date.now() / 1000),
          },
        })
      );
      API.graphql(
        graphqlOperation(mutations.createSongEvent, { input: songEvent })
      ).then((data) => console.log("Publishing: ", data));
    }, 60000);

    return () => {
      clearInterval(timeoutID);
    };
  }, [hostUserID]);

  return <h1>DevPublisher enabled</h1>;
}
