// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateSongEvent = /* GraphQL */ `
  subscription OnCreateSongEvent($userID: String!) {
    onCreateSongEvent(userID: $userID) {
      id
      spotifyURI
      timestamp
      position
      track {
        uri
        trackID
        name
        durationMs
        albumName
        artistName
        albumImg
      }
      userID
      user {
        userID
        latestSongEvent
        latestListenPing
        listeningTo
        songEvents {
          items {
            id
            spotifyURI
            timestamp
            position
            userID
            type
          }
          nextToken
        }
        listeners {
          items {
            userID
            latestSongEvent
            latestListenPing
            listeningTo
            displayName
            userImg
            phEnabled
            phCount
            type
          }
          nextToken
        }
        displayName
        userImg
        phEnabled
        currentSongEvent {
          id
          spotifyURI
          timestamp
          position
          track {
            uri
            trackID
            name
            durationMs
            albumName
            artistName
            albumImg
          }
          userID
          user {
            userID
            latestSongEvent
            latestListenPing
            listeningTo
            displayName
            userImg
            phEnabled
            phCount
            type
          }
          type
        }
        phCount
        type
      }
      type
    }
  }
`;
export const onUpdateUserByListeningTo = /* GraphQL */ `
  subscription OnUpdateUserByListeningTo($listeningTo: String) {
    onUpdateUserByListeningTo(listeningTo: $listeningTo) {
      userID
      latestSongEvent
      latestListenPing
      listeningTo
      songEvents {
        items {
          id
          spotifyURI
          timestamp
          position
          track {
            uri
            trackID
            name
            durationMs
            albumName
            artistName
            albumImg
          }
          userID
          user {
            userID
            latestSongEvent
            latestListenPing
            listeningTo
            displayName
            userImg
            phEnabled
            phCount
            type
          }
          type
        }
        nextToken
      }
      listeners {
        items {
          userID
          latestSongEvent
          latestListenPing
          listeningTo
          songEvents {
            nextToken
          }
          listeners {
            nextToken
          }
          displayName
          userImg
          phEnabled
          currentSongEvent {
            id
            spotifyURI
            timestamp
            position
            userID
            type
          }
          phCount
          type
        }
        nextToken
      }
      displayName
      userImg
      phEnabled
      currentSongEvent {
        id
        spotifyURI
        timestamp
        position
        track {
          uri
          trackID
          name
          durationMs
          albumName
          artistName
          albumImg
        }
        userID
        user {
          userID
          latestSongEvent
          latestListenPing
          listeningTo
          songEvents {
            nextToken
          }
          listeners {
            nextToken
          }
          displayName
          userImg
          phEnabled
          currentSongEvent {
            id
            spotifyURI
            timestamp
            position
            userID
            type
          }
          phCount
          type
        }
        type
      }
      phCount
      type
    }
  }
`;
export const onUpdateUserByUserId = /* GraphQL */ `
  subscription OnUpdateUserByUserId($userID: String) {
    onUpdateUserByUserID(userID: $userID) {
      userID
      latestSongEvent
      latestListenPing
      listeningTo
      songEvents {
        items {
          id
          spotifyURI
          timestamp
          position
          track {
            uri
            trackID
            name
            durationMs
            albumName
            artistName
            albumImg
          }
          userID
          user {
            userID
            latestSongEvent
            latestListenPing
            listeningTo
            displayName
            userImg
            phEnabled
            phCount
            type
          }
          type
        }
        nextToken
      }
      listeners {
        items {
          userID
          latestSongEvent
          latestListenPing
          listeningTo
          songEvents {
            nextToken
          }
          listeners {
            nextToken
          }
          displayName
          userImg
          phEnabled
          currentSongEvent {
            id
            spotifyURI
            timestamp
            position
            userID
            type
          }
          phCount
          type
        }
        nextToken
      }
      displayName
      userImg
      phEnabled
      currentSongEvent {
        id
        spotifyURI
        timestamp
        position
        track {
          uri
          trackID
          name
          durationMs
          albumName
          artistName
          albumImg
        }
        userID
        user {
          userID
          latestSongEvent
          latestListenPing
          listeningTo
          songEvents {
            nextToken
          }
          listeners {
            nextToken
          }
          displayName
          userImg
          phEnabled
          currentSongEvent {
            id
            spotifyURI
            timestamp
            position
            userID
            type
          }
          phCount
          type
        }
        type
      }
      phCount
      type
    }
  }
`;
export const onCreateTrack = /* GraphQL */ `
  subscription OnCreateTrack {
    onCreateTrack {
      uri
      trackID
      name
      durationMs
      albumName
      artistName
      albumImg
    }
  }
`;
export const onUpdateTrack = /* GraphQL */ `
  subscription OnUpdateTrack {
    onUpdateTrack {
      uri
      trackID
      name
      durationMs
      albumName
      artistName
      albumImg
    }
  }
`;
export const onDeleteTrack = /* GraphQL */ `
  subscription OnDeleteTrack {
    onDeleteTrack {
      uri
      trackID
      name
      durationMs
      albumName
      artistName
      albumImg
    }
  }
`;
