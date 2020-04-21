(this["webpackJsonpeardrum-monster"]=this["webpackJsonpeardrum-monster"]||[]).push([[0],{136:function(e,n,t){e.exports=t(238)},141:function(e,n,t){},142:function(e,n,t){},230:function(e,n,t){},231:function(e,n,t){},232:function(e,n,t){},235:function(e,n,t){},237:function(e,n,t){},238:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(109),i=t.n(o),l=(t(141),t(142),t(46)),c=t.n(l),s=t(24),u=t(17),m=t(7),d=t(26),v=t(47),f=t(48),p=function(){function e(n,t){if(Object(v.a)(this,e),null==n)throw new Error("Access token was null");this.accessToken=n,this.onUnauthorized=null!==t&&void 0!==t?t:function(){},this.maybeHandle401=this.maybeHandle401.bind(this)}return Object(f.a)(e,[{key:"maybeHandle401",value:function(e){if(401===e.status)throw this.onUnauthorized(),new Error("Unauthorized: ",e);return e}},{key:"fetchUserInfo",value:function(){return fetch("https://api.spotify.com/v1/me",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.accessToken)}}).then(this.maybeHandle401).then((function(e){if(!e.ok)throw e;return e.json()}))}},{key:"fetchCurrentDeviceID",value:function(){return fetch("https://api.spotify.com/v1/me/player",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.accessToken)}}).then(this.maybeHandle401).then((function(e){return e.ok||console.error("error fetching device id"),204===e.status?null:e.json()})).then((function(e){var n;return(null===e||void 0===e||null===(n=e.device)||void 0===n?void 0:n.id)?e.device.id:null}))}},{key:"play",value:function(e,n){var t=null!=n?"?device_id=".concat(n):"";return fetch("https://api.spotify.com/v1/me/player/play/".concat(t),{method:"PUT",body:JSON.stringify({uris:[e]}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.accessToken)}}).then(this.maybeHandle401).then((function(e){e.ok||console.error("Error playing uri",e)}))}},{key:"transferPlayback",value:function(e){return fetch("https://api.spotify.com/v1/me/player",{method:"PUT",body:JSON.stringify({device_ids:[e],play:!0}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.accessToken)}}).then(this.maybeHandle401).then((function(n){if(!n.ok)throw new Error("unable to transfer playback to device: "+e)}))}},{key:"fetchDevices",value:function(){return fetch("https://api.spotify.com/v1/me/player/devices",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.accessToken)}}).then(this.maybeHandle401).then((function(e){if(!e.ok)throw new Error("unable to fetch devices");return e.json()}))}}]),e}(),h=t(16),y=t(239),E="\n  mutation CreateSongEvent(\n    $input: CreateSongEventInput!\n    $condition: ModelSongEventConditionInput\n  ) {\n    createSongEvent(input: $input, condition: $condition) {\n      id\n      spotifyURI\n      timestamp\n      position\n      track {\n        uri\n        trackID\n        name\n        durationMs\n        albumName\n        artistName\n        albumImg\n      }\n      userID\n      user {\n        userID\n        latestEvent\n        songEvents {\n          nextToken\n        }\n      }\n      type\n    }\n  }\n",g=Object(a.createContext)();function k(){return null}function b(e){var n=encodeURIComponent("https://eardrum.monster/auth/"),t=encodeURIComponent(e);return"https://accounts.spotify.com/authorize?response_type=token&client_id=".concat("d73f9dfa97c44b57ac7cefcc031c4df9","&scope=").concat("streaming+user-read-email+user-read-private+user-read-playback-state+user-modify-playback-state+user-read-currently-playing","&redirect_uri=").concat(n,"&state=").concat(t)}function I(e){var n=e.children,t=Object(d.useLocalStorage)("EMAuthInfo"),a=Object(m.a)(t,2),o=a[0],i=a[1],l=Object(s.g)(),c=Object(s.f)(),u=null===o||void 0===o?void 0:o.username,v=null===o||void 0===o?void 0:o.accessToken;r.a.useEffect((function(){!function(e,n,t){if(t.hash){var a={};t.hash.slice(1).split("&").map((function(e){return e.split("=")})).forEach((function(e){a[e[0]]=e[1]}));var r=a.access_token;if(null==r)return;t.hash="",new p(r).fetchUserInfo().then((function(t){var o=t.display_name.split(" ")[0];e({accessToken:r,username:o}),n.push(decodeURIComponent(a.state)),h.a.graphql(Object(y.b)("\n  mutation CreateUser(\n    $input: CreateUserInput!\n    $condition: ModelUserConditionInput\n  ) {\n    createUser(input: $input, condition: $condition) {\n      userID\n      latestEvent\n      songEvents {\n        items {\n          id\n          spotifyURI\n          timestamp\n          position\n          userID\n          type\n        }\n        nextToken\n      }\n    }\n  }\n",{input:{userID:o}})).catch((function(){return console.error("user creation failed")}))}))}}(i,c,l)}),[i,c,l]);var f=r.a.useMemo((function(){return null!=v&&null!=u?{accessToken:v,username:u,logout:function(){return i(null)},retryAuth:function(){i(null),window.location.href=b(window.location.pathname)}}:null}),[u,v,i]);return r.a.createElement(g.Provider,{value:f},n)}var w=function(){var e=r.a.useContext(g),n=b(Object(s.g)().pathname),t=Object(s.i)("/u/"+(null===e||void 0===e?void 0:e.username));return r.a.createElement("header",{className:"App-header"},r.a.createElement(u.b,{className:"App-title",to:"/"},r.a.createElement("h1",null,"EARDRUM MONSTER")),r.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo"}),null!=e?r.a.createElement(r.a.Fragment,null,null==t?r.a.createElement(u.b,{className:"App-link",to:"/u/".concat(e.username)},"Broadcast"):r.a.createElement("a",{className:"App-link",href:"#",onClick:function(n){n.preventDefault(),e.logout()}},"Logout")):r.a.createElement("a",{className:"App-link",href:n},"Login"))},D=t(259);t(230);function N(e){var n=e.hostUsername;return r.a.useEffect((function(){var e=setInterval((function(){var e={userID:n,timestamp:Math.floor(Date.now()/1e3),position:0,spotifyURI:["spotify:track:08KMh61hPslT7sEf2tEgtT","spotify:track:4mFDsq9pt9msJ9ywYvBzHo","spotify:track:59nNxS2V7M4UDH058BU5qJ","spotify:track:1CkrhTdtRhUzPmA8qtr6y6","spotify:track:4mFDsq9pt9msJ9ywYvBzHo","spotify:track:6AynxUt8LJy9S6bovDdFLr","spotify:track:000PzErbB04ALQCv9iYiQm","spotify:track:6AynxUt8LJy9S6bovDdFLr","spotify:track:7JGepQzDnQDYeGxLCTBSsG","spotify:track:4PPrsYpzuRqe4QoCDGAG4b"][(100*Math.random()).toString()[0]],type:"NEW_SONG"};h.a.graphql(Object(y.b)(E,{input:e})).then((function(e){return console.log("Publishing: ",e)}))}),5e3);return function(){clearInterval(e)}}),[n]),r.a.createElement("h1",null,"DevPublisher enabled")}var S=function(){function e(n,t){Object(v.a)(this,e),this.player=n,this.spotifyAPI=t}return Object(f.a)(e,[{key:"fetchState",value:function(){return this.player.getCurrentState()}},{key:"pause",value:function(){return this.player.pause()}},{key:"seek",value:function(e){return this.player.seek(e)}},{key:"nextTrack",value:function(){return this.player.nextTrack()}},{key:"addStateChangeListener",value:function(e){this.player.addListener("player_state_changed",e)}},{key:"removeStateChangeListener",value:function(e){this.player.removeListener("player_state_changed",e)}},{key:"getDeviceID",value:function(){return this.player.deviceID}},{key:"transferPlayback",value:function(){return this.spotifyAPI.transferPlayback(this.player.deviceID)}}],[{key:"inject",value:function(){return new Promise((function(e){var n,t;if(null===(n=window)||void 0===n||null===(t=n.Spotify)||void 0===t?void 0:t.Player)e();else{window.onSpotifyWebPlaybackSDKReady=function(){e()};var a=document.createElement("script");a.src="https://sdk.scdn.co/spotify-player.js",document.body.appendChild(a)}}))}},{key:"initializePlayer",value:function(n,t,a){return e.__accessToken=t,e.__onUnauthorized=a,e.__spotifyAPI=n,new Promise((function(n){if(window.EMglobalPlayerInstance)n(window.EMGlobalPlayerInstance);else{var t=new window.Spotify.Player({name:"eardrum.monster",getOAuthToken:function(n){n(e.__accessToken),e.__spotifyAPI.fetchUserInfo()},volume:.1});t.on("initialization_error",(function(e){var n=e.message;console.error("Failed to initialize",n)})),t.on("authentication_error",(function(n){var t=n.message;console.error("Failed to authenticate",t),e.__onUnauthorized()})),t.on("account_error",(function(e){var n=e.message;console.error("Spotify premium required",n)})),t.on("playback_error",(function(e){var n=e.message;console.error("Failed to perform playback",n)})),t.on("ready",(function(e){var a=e.device_id;t.deviceID=a,window.EMGlobalPlayerInstance=t,n(t)})),t.connect().then((function(e){e||console.error("Failed to connect to the web player")}))}}))}},{key:"createInstance",value:function(n,t,a){return e.inject().then((function(){return e.initializePlayer(t,n,a)})).then((function(n){return new e(n,t)}))}},{key:"getTrackFromState",value:function(e){var n;return null===e||void 0===e||null===(n=e.track_window)||void 0===n?void 0:n.current_track}}]),e}(),C=Object(a.createContext)();function T(e){var n=e.children,t=r.a.useContext(g),a=r.a.useState(null),o=Object(m.a)(a,2),i=o[0],l=o[1],c=r.a.useState(null),s=Object(m.a)(c,2),u=s[0],d=s[1];r.a.useEffect((function(){if(null==t)l(null),d(null);else{var e=new p(t.accessToken,t.retryAuth);d(e),S.createInstance(t.accessToken,e,t.retryAuth).then((function(e){l(e)}))}}),[t]);var v=r.a.useMemo((function(){return{webPlayer:i,spotifyAPI:u}}),[i,u]);return r.a.createElement(C.Provider,{value:v},n)}function j(){var e=r.a.useContext(C);return null===e||void 0===e?void 0:e.webPlayer}function O(e){var n=e.song,t=function(){var e=r.a.useContext(C);return null===e||void 0===e?void 0:e.spotifyAPI}(),a=j(),o=r.a.useState(null),i=Object(m.a)(o,2),l=i[0],c=i[1],s=r.a.useState(null),u=Object(m.a)(s,2),d=u[0],v=u[1],f=r.a.useRef(null),p=r.a.useState(!1),h=Object(m.a)(p,2),y=h[0],E=h[1];f.current=d;var g=a&&{id:a.getDeviceID(),name:"eardrum.monster"},k=null!==l&&void 0!==l?l:[];null==g||k.find((function(e){return e.id===g.id}))||k.push(g),r.a.useEffect((function(){t&&t.fetchDevices().then((function(e){c(e.devices)}))}),[t]),r.a.useEffect((function(){if(t&&l){var e=l.find((function(e){return!0===e.is_active}));e?(v(e.id),E(!0)):a&&(v(a.getDeviceID()),E(!0))}}),[t,l,a]),r.a.useEffect((function(){f.current&&y&&t&&t.play(n.spotifyURI,f.current)}),[t,n,y]);return r.a.createElement("div",{className:"Listen-controls"},r.a.createElement("div",null,"Playing on device:"),r.a.createElement("select",{value:null!==d&&void 0!==d?d:"",onChange:function(e){var n=e.target.value;t.transferPlayback(n),v(n)}},null===k||void 0===k?void 0:k.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))))}t(231);var L=function(e){var n,t,a=e.track;return r.a.createElement("div",{className:"Track"},r.a.createElement("img",{className:"Track-albumImg",src:null!==(n=null===a||void 0===a?void 0:a.albumImg)&&void 0!==n?n:c.a,alt:"Album art"}),r.a.createElement("div",{className:"Track-details"},r.a.createElement("p",{className:"Track-name"},null!==(t=null===a||void 0===a?void 0:a.name)&&void 0!==t?t:"Unknown"),r.a.createElement("p",{className:"Track-artist"},null===a||void 0===a?void 0:a.artistName)))};function U(e){var n=e.songs;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Recently played tracks"),n.map((function(e){return null!=e&&r.a.createElement("div",{key:e.id,className:"Listen-track"},r.a.createElement(L,{track:e.track}))})))}t(232);function _(e){var n=e.className;return r.a.createElement("div",{className:n},r.a.createElement("div",{className:"EQBars-container"},r.a.createElement("ol",{className:"EQBars-column"},r.a.createElement("li",{className:"colour-bar"})),r.a.createElement("ol",{className:"EQBars-column"},r.a.createElement("li",{className:"colour-bar"})),r.a.createElement("ol",{className:"EQBars-column"},r.a.createElement("li",{className:"colour-bar"})),r.a.createElement("ol",{className:"EQBars-column"},r.a.createElement("li",{className:"colour-bar"})),r.a.createElement("ol",{className:"EQBars-column"},r.a.createElement("li",{className:"colour-bar"}))))}var P=t(125),M=t.n(P),B="\n  query SongEventsByUserId(\n    $userID: String\n    $timestamp: ModelIntKeyConditionInput\n    $sortDirection: ModelSortDirection\n    $filter: ModelSongEventFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    songEventsByUserID(\n      userID: $userID\n      timestamp: $timestamp\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        spotifyURI\n        timestamp\n        position\n        track {\n          uri\n          trackID\n          name\n          durationMs\n          albumName\n          artistName\n          albumImg\n        }\n        userID\n        user {\n          userID\n          latestEvent\n        }\n        type\n      }\n      nextToken\n    }\n  }\n";function $(e){var n=e.children,t=e.isListening,a=e.onClick,o=Object(s.g)(),i=r.a.useContext(g);return t?n:r.a.createElement("div",{className:"Listen-startListening"},r.a.createElement("div",{className:"Listen-startListeningMask"},n),r.a.createElement("div",{className:"Listen-startListeningContent"},r.a.createElement(_,{className:"Listen-EQ"})),r.a.createElement("div",{className:"Listen-startListeningContent"},r.a.createElement("a",{className:"Listen-play",href:o.pathname,onClick:a},"\ud83d\udc42",r.a.createElement("span",{className:"Listen-playLink"},null==i?"Login to join \u25b6":"Join \u25b6"),"\ud83d\ude08")))}function x(e){var n=e.isCurrentlyLive,t=e.songs,a=e.hostUsername,o=r.a.useContext(g),i=Object(s.g)(),l=Object(d.useLocalStorage)("EMisListeningUsername"),c=Object(m.a)(l,2),u=c[0],v=c[1],f=o&&a===u;r.a.useEffect((function(){if(f){var e=new M.a;return e.enable(),function(){return e.disable()}}}),[f]);var p=r.a.useCallback((function(e){e.preventDefault(),v(a),null==o&&(window.location.href=b(i.pathname))}),[v,o,i,a]);return n?r.a.createElement($,{isListening:f,onClick:p},f&&r.a.createElement("p",null,"Listening to ",a,"'s channel!"),f&&r.a.createElement(O,{song:t[0]}),r.a.createElement("div",null,"Now Playing:"),r.a.createElement(L,{track:t[0].track})):r.a.createElement("h1",null,a," is offline")}var A=function(e){var n=e.hostUsername,t=Object(s.g)().search.includes("DEV=1");return r.a.createElement("div",{className:"Listen"},r.a.createElement("div",{className:"Listen-header"},t&&r.a.createElement(N,{hostUsername:n})),r.a.createElement("div",{className:"Listen-trackList"},r.a.createElement(D.a,{query:Object(y.b)(B,{userID:n,sortDirection:"DESC",limit:50}),subscription:Object(y.b)("\n  subscription OnCreateSongEvent($userID: String!) {\n    onCreateSongEvent(userID: $userID) {\n      id\n      spotifyURI\n      timestamp\n      position\n      track {\n        uri\n        trackID\n        name\n        durationMs\n        albumName\n        artistName\n        albumImg\n      }\n      userID\n      user {\n        userID\n        latestEvent\n        songEvents {\n          nextToken\n        }\n      }\n      type\n    }\n  }\n",{userID:n}),onSubscriptionMsg:function(e,n){var t,a=n.onCreateSongEvent;return null==(null===e||void 0===e||null===(t=e.songEventsByUserID)||void 0===t?void 0:t.items)?(console.error("bad state in listen",e),e):(e.songEventsByUserID.items.unshift(a),e.songEventsByUserID.items.length>50&&e.songEventsByUserID.items.pop(),e)}},(function(e){var t,a,o,i=e.data,l=e.loading;if(e.error)return r.a.createElement("h3",null,"Error");if(l||!i)return r.a.createElement("h3",null,"Loading...");var c=null!==(t=i.songEventsByUserID&&i.songEventsByUserID.items)&&void 0!==t?t:[];if(0===c.length)return r.a.createElement("div",null,"No track history for ",n);var s=Math.floor(Date.now()/1e3)-(null!==(a=null===(o=c[0])||void 0===o?void 0:o.timestamp)&&void 0!==a?a:0)<600;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{isCurrentlyLive:s,songs:c,hostUsername:n}),r.a.createElement(U,{songs:s?c.slice(1):c}))}))))},z=(t(235),t(52));function R(e){var n=e.currentSongEvent,t=e.onSongEvent,a=r.a.useContext(g),o=j(),i=r.a.useRef(null),l=r.a.useRef(null);null==l.current&&null!=n&&(l.current=n);return i.current=function(e){var n,r,o,i,c,s=S.getTrackFromState(e),u=(null===s||void 0===s?void 0:s.uri)===(null===l||void 0===l||null===(n=l.current)||void 0===n?void 0:n.spotifyURI),m=Math.floor(Date.now()/1e3)-(null===l||void 0===l||null===(r=l.current)||void 0===r?void 0:r.timestamp)<(null===l||void 0===l||null===(o=l.current)||void 0===o||null===(i=o.track)||void 0===i?void 0:i.durationMs)/1e3+10;if(!(null==s||u&&m)){var d,v={userID:a.username,timestamp:Math.floor(Date.now()/1e3),position:Math.floor(null!==(c=e.position)&&void 0!==c?c:0),spotifyURI:s.uri,type:"NEW_SONG"},f={uri:s.uri,trackID:s.id,name:s.name,durationMs:s.duration_ms,albumName:s.album.name,artistName:s.artists[0].name,albumImg:s.album.images[0].url},p=Object(z.a)({},v,{track:f,id:Math.random()});l.current=p,t(p),(d=f,h.a.graphql(Object(y.b)("\n  mutation CreateTrack(\n    $input: CreateTrackInput!\n    $condition: ModelTrackConditionInput\n  ) {\n    createTrack(input: $input, condition: $condition) {\n      uri\n      trackID\n      name\n      durationMs\n      albumName\n      artistName\n      albumImg\n    }\n  }\n",{input:d}))).then((function(){return function(e){return h.a.graphql(Object(y.b)(E,{input:e}))}(v)}))}},r.a.useEffect((function(){if(o){var e=function(e){return i.current(e)},n={current:function(e){e===o.getDeviceID()?o.fetchState().then((function(e){i.current(e)})):o.transferPlayback()}};return o.addStateChangeListener(e),o.spotifyAPI.fetchCurrentDeviceID().then((function(e){n.current(e)})),function(){o.removeStateChangeListener(e),n.current=function(){}}}}),[o,i]),null}var q=t(126),F=t.n(q);function H(){var e=Object(d.useLocalStorage)("EMPhEnabled",!1),n=Object(m.a)(e,2),t=n[0],a=n[1],o=Object(d.useLocalStorage)("EMPhCount",1),i=Object(m.a)(o,2),l=i[0],c=i[1],s=j(),u=r.a.useRef();u.current=function(e){t?(s.nextTrack(),c(l+1)):clearInterval(e)};var v=r.a.useCallback((function(e){a(e),e&&(c(1),s&&s.nextTrack())}),[a,c,s]);return r.a.useEffect((function(){if(t&&s){var e=setInterval((function(){u.current(e)}),6e4);return function(){clearInterval(e)}}}),[t,s,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Broadcast-controls"},r.a.createElement("label",{htmlFor:"phToggle"},"Power hour mode"),r.a.createElement(F.a,{className:"Broadcast-switch",id:"phToggle",onChange:v,checked:t})),t&&r.a.createElement("h1",null,l))}var G=function(){var e,n=r.a.useContext(g),t=r.a.useState(null),a=Object(m.a)(t,2),o=a[0],i=a[1],l=j(),c=r.a.useCallback((function(e){i((function(n){return[e].concat(n)}))}),[i]);if(r.a.useEffect((function(){n&&h.a.graphql(Object(y.b)(B,{userID:n.username,sortDirection:"DESC",limit:10})).then((function(e){var n,t,a;i(null!==(n=null===(t=e.data)||void 0===t||null===(a=t.songEventsByUserID)||void 0===a?void 0:a.items)&&void 0!==n?n:[])}))}),[n]),null==n)return r.a.createElement("div",null,"Login to spotify to set the eardrum monster free");var s=null==o?null:r.a.createElement("div",{className:"Broadcast-history"},r.a.createElement(U,{songs:o.slice(1)})),u=null==l||null==o?r.a.createElement("div",null,"Initializing Spotify web player..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement("h1",null,"Connected."),r.a.createElement(_,{className:"Broadcast-streaming"}),r.a.createElement("p",null,"Now Playing:"),r.a.createElement("div",{className:"Broadcast-currentTrack"},r.a.createElement(R,{currentSongEvent:o[0],onSongEvent:c}),r.a.createElement(L,{track:null===(e=o[0])||void 0===e?void 0:e.track})));return r.a.createElement("div",{className:"Broadcast"},u,s)};var Q=function(){var e=r.a.useContext(g),n=Object(s.h)().id;return(null===e||void 0===e?void 0:e.username)===n?r.a.createElement(G,null):r.a.createElement(A,{hostUsername:n})},J=(t(237),function(e){var n=e.users;return r.a.createElement("div",{className:"Home-userList"},n.map((function(e){return r.a.createElement(u.b,{key:e.userID,className:"Home-link",to:"/u/".concat(e.userID)},r.a.createElement(_,{className:"Home-userOnlineIcon2"+(e.isOnline?"":" hidden")})," ","/u/",e.userID,r.a.createElement("span",{className:"Home-userOnlineIcon",style:{opacity:e.isOnline?1:0}},"\ud83d\udc42"))})))});var W=function(){var e=r.a.useContext(g);return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"Home-list"},r.a.createElement("h2",{className:"Home-title"},"\ud83d\ude08","\xa0","MONSTER","\xa0","LIST","\xa0","\ud83d\ude08"),r.a.createElement(D.a,{query:Object(y.b)("\n  query SongEventsByType(\n    $type: String\n    $timestamp: ModelIntKeyConditionInput\n    $sortDirection: ModelSortDirection\n    $filter: ModelSongEventFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    songEventsByType(\n      type: $type\n      timestamp: $timestamp\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        spotifyURI\n        timestamp\n        position\n        track {\n          uri\n          trackID\n          name\n          durationMs\n          albumName\n          artistName\n          albumImg\n        }\n        userID\n        user {\n          userID\n          latestEvent\n        }\n        type\n      }\n      nextToken\n    }\n  }\n",{type:"NEW_SONG",sortDirection:"DESC",limit:100})},(function(e){var n,t=e.data,a=e.loading;if(e.error)return r.a.createElement("h3",null,"Error");if(a||!t)return r.a.createElement("h3",null,"Loading...");var o=null!==(n=t.songEventsByType&&t.songEventsByType.items)&&void 0!==n?n:[],i=new Set,l=o.filter((function(e){return!i.has(e.userID)&&(i.add(e.userID),!0)})).map((function(e){var n,t;return Object(z.a)({isOnline:Math.floor(Date.now()/1e3)-(null!==(n=null===e||void 0===e?void 0:e.timestamp)&&void 0!==n?n:0)<(null===e||void 0===e||null===(t=e.track)||void 0===t?void 0:t.durationMs)/1e3},e.user)}));return 0===l.length?r.a.createElement("div",null,"No recent users"):r.a.createElement(J,{users:l})}))),r.a.createElement("div",{className:"Home-content"},r.a.createElement("div",null,r.a.createElement("em",null,"eardrum.monster allows you to sync your spotify client with friends")),r.a.createElement("h1",null,"How do I use it?"),null!=e?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,'1. Click "Broadcast" at the top \u261d\ufe0f'),r.a.createElement("div",null,"2. Share the URL with your friends\ufe0f")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,'1. Click "Login" at the top \u261d\ufe0f'),r.a.createElement("div",null,'2. Click "Broadcast" at the top \u261d\ufe0f'),r.a.createElement("div",null,"3. Share the URL with your friends\ufe0f")),r.a.createElement("h1",null,"Its great for:"),r.a.createElement("div",null,"\u2705 Streamers who want to let their viewers sync up their music with high quality spotify audio"),r.a.createElement("div",null,"\u2705 Online gamers who want listen together while gaming"),r.a.createElement("div",null,"\u2705 People who are quarantined and want to have virtual power hours together"),r.a.createElement("h1",null,"Did you say power hour?"),r.a.createElement("div",null,"\u2705 Yes! eardrum.monster now features ",r.a.createElement("em",null,"Power hour mode\u2122\ufe0f")," that will automatically change the song every 60s. Everybody must drink when the song changes."),r.a.createElement("h1",null,"Can I play century club?"),r.a.createElement("div",null,"\u2705 We've got you covered! ",r.a.createElement("em",null,"Power hour mode\u2122\ufe0f")," will keep em' coming well beyond the traditional 60 minutes so you can attempt to join the century club as many times as you want!")))};var Y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(I,null,r.a.createElement(T,null,r.a.createElement(w,null),r.a.createElement("div",{className:"App-content"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(W,null)),r.a.createElement(s.a,{path:"/auth/"},r.a.createElement(k,null)),r.a.createElement(s.a,{path:"/u/:id"},r.a.createElement(Q,null))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K={aws_project_region:"us-east-1",aws_appsync_graphqlEndpoint:"https://kponrlcw6jap7j62gb56h2abf4.appsync-api.us-east-1.amazonaws.com/graphql",aws_appsync_region:"us-east-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-jxgfvq7zzvacfozrt7vucdiipq"};t(21).default.configure(K),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,n,t){e.exports=t.p+"static/media/logo.86828523.png"}},[[136,1,2]]]);
//# sourceMappingURL=main.b60bac2d.chunk.js.map