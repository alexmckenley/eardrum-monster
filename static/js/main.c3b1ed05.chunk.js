(this["webpackJsonpeardrum-monster"]=this["webpackJsonpeardrum-monster"]||[]).push([[0],{18:function(e,t,n){e.exports=n.p+"static/media/logo.86828523.png"},21:function(e,t,n){e.exports=n(33)},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(15),c=n.n(r),i=(n(26),n(9)),l=(n(27),n(16)),s=n(17),u=function(){function e(t){Object(l.a)(this,e),this.accessToken=t,this.freshAccessToken=!0,this.player=null}return Object(s.a)(e,[{key:"fetchState",value:function(){return this.player?this.player.getCurrentState():(console.error("Player not initialized"),Promise.reject("player not initialized"))}},{key:"handleNewState",value:function(t){var n=this;if(t)if(t.paused)this.pause();else{var a=e.getUriFromState(t);null!=a?this.player?this.fetchState().then((function(o){null!=o?e.isAd(o)||(e.getUriFromState(o)!==a||!1!==o.paused?n.play(a):Math.abs(t.position-o.position)>1e4&&n.seek(t.position)):n.play(a)})):this.play(a):console.error("new uri is null",t)}}},{key:"pause",value:function(){return this.player.pause()}},{key:"seek",value:function(e){return this.player.seek(e)}},{key:"play",value:function(e){return fetch("https://api.spotify.com/v1/me/player/play?device_id=".concat(this.deviceId),{method:"PUT",body:JSON.stringify({uris:[e]}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.accessToken)}}).then((function(e){e.ok||console.error("error playing uri")}))}},{key:"onPlayerStateChanged",value:function(t){var n=this;this.player.addListener("player_state_changed",(function(a){var o=e.getTrackFromState(a),r=e.getUriFromState(a);r===n.currentSongUri&&(o=null),n.currentSongUri=r,t({newState:a,newSong:o})}))}},{key:"prepareSpotifyClient",value:function(){var e=this;return new Promise((function(t){window.onSpotifyWebPlaybackSDKReady=function(){e.initializePlayer().then(t)};var n=document.createElement("script");n.src="https://sdk.scdn.co/spotify-player.js",document.body.appendChild(n)}))}},{key:"initializePlayer",value:function(){var e=this;return new Promise((function(t){e.player=new window.Spotify.Player({name:"eardrum.monster",getOAuthToken:e.fetchOauthToken.bind(e),volume:.1}),e.player.on("initialization_error",(function(e){var t=e.message;console.error("Failed to initialize",t)})),e.player.on("authentication_error",(function(e){var t=e.message;console.error("Failed to authenticate",t)})),e.player.on("account_error",(function(e){var t=e.message;console.error("Failed to validate Spotify account",t)})),e.player.on("playback_error",(function(e){var t=e.message;console.error("Failed to perform playback",t)})),e.player.on("ready",(function(n){var a=n.device_id;e.deviceId=a,fetch("https://api.spotify.com/v1/me/player",{method:"PUT",body:JSON.stringify({device_ids:[e.deviceId]}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.accessToken)}}).then((function(e){e.ok?t():console.error("unable to transfer playback to web player")}))})),e.player.connect().then((function(e){e||console.error("Failed to connect to the web player")}))}))}},{key:"fetchOauthToken",value:function(e){this.freshAccessToken||console.error("fetchOauthToken called more than once"),e(this.accessToken)}},{key:"fetchCurrentDeviceId",value:function(){return fetch("https://api.spotify.com/v1/me/player",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.accessToken)}}).then((function(e){return e.ok||console.error("error fetching device id"),e.body.device&&e.body.device.id?(console.log("fetched device ID"),e.body.device.id):null}))}},{key:"fetchUserInfo",value:function(){return fetch("https://api.spotify.com/v1/me",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.accessToken)}}).then((function(e){return e.json()}))}},{key:"setDeviceId",value:function(e){this.deviceId=e}}],[{key:"getTrackFromState",value:function(e){return e&&e.track_window&&e.track_window.current_track?e.track_window.current_track:null}},{key:"getUriFromState",value:function(e){return e&&e.track_window&&e.track_window.current_track?e.track_window.current_track.uri:null}},{key:"isAd",value:function(e){return!!(e&&e.track_window&&e.track_window.current_track)&&"ad"===e.track_window.current_track.type}}]),e}(),p=n(18),f=n.n(p),d=n(4);var m=function(e){var t=e.accessToken,n=e.clearAccessToken,a=e.username,r=encodeURIComponent("https://eardrum.monster/"),c="https://accounts.spotify.com/authorize?response_type=token&client_id=".concat("d73f9dfa97c44b57ac7cefcc031c4df9","&scope=").concat("streaming+user-read-email+user-read-private+user-read-playback-state+user-modify-playback-state+user-read-currently-playing","&redirect_uri=").concat(r);return o.a.createElement("header",{className:"App-header"},o.a.createElement(d.b,{className:"App-title",to:"/"},o.a.createElement("h1",null,"EARDRUM MONSTER")),o.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),null!=t?o.a.createElement(o.a.Fragment,null,o.a.createElement(d.b,{className:"App-link",to:"/u/".concat(a)},"/u/",a),o.a.createElement("a",{className:"App-link",href:"#",onClick:function(e){e.preventDefault(),n()}},"Logout")):o.a.createElement("a",{className:"App-link",href:c},"Login with Spotify"))};var h=function(e){var t=e.setAccessToken;return o.a.useEffect((function(){if(window.location.hash){var e={};window.location.hash.slice(1).split("&").map((function(e){return e.split("=")})).forEach((function(t){e[t[0]]=t[1]}));var n=e.access_token;window.location.hash="",t(n)}})),null},y=n(6);var k=function(e){var t=e.channelID;return e.spotify,o.a.createElement("div",null,"Listening to ",t,"'s channel!")};var v=function(e){e.username;var t=e.spotify;return o.a.useEffect((function(){t&&t.prepareSpotifyClient().then((function(){return t.fetchState()})).then((function(e){console.log("fetched state",e),t.play("spotify:track:727LbE4pV6RtLK5FnH1WIe")}))}),[t]),console.log(t),t?o.a.createElement("div",null,"broadcasting los master PLUS. "):o.a.createElement("div",null,"Connecting to spotify")};var w=function(e){var t=e.username,n=e.spotify,a=Object(y.f)().id;return t===a?o.a.createElement(v,{username:t,spotify:n}):o.a.createElement(k,{channelID:a,spotify:n})};var g=function(e){var t=e.username;return o.a.createElement("div",null,o.a.createElement("h2",null,"Currently broadcasting:"),o.a.createElement("ul",null,null!=t?o.a.createElement("li",null,o.a.createElement(d.b,{className:"App-link",to:"/u/".concat(t)},"/u/",t)):null,o.a.createElement("li",null,o.a.createElement(d.b,{to:"/u/alta"},"/u/alta")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/u/hajkowicz"},"/u/hajkowicz")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/u/cilo"},"/u/cilo"))))};var E=function(){var e=window.localStorage.getItem("spotifyAccessToken"),t=window.localStorage.getItem("spotifyUsername"),n=o.a.useState(e),a=Object(i.a)(n,2),r=a[0],c=a[1],l=o.a.useState(t),s=Object(i.a)(l,2),p=s[0],f=s[1],k=o.a.useState(null),v=Object(i.a)(k,2),E=v[0],S=v[1];return o.a.useEffect((function(){if(r){var e=new u(r);console.log(e),S(e),e.fetchUserInfo().then((function(e){!function(e){window.localStorage.setItem("spotifyUsername",e),f(e)}(e.id)}))}}),[r]),o.a.createElement("div",{className:"App"},o.a.createElement(d.a,null,o.a.createElement(h,{setAccessToken:function(e){window.localStorage.setItem("spotifyAccessToken",e),c(e)}}),o.a.createElement(m,{clearAccessToken:function(){console.log("clearing"),window.localStorage.removeItem("spotifyAccessToken"),window.localStorage.removeItem("spotifyUsername"),c(null),f(null)},accessToken:r,username:p}),o.a.createElement(y.c,null,o.a.createElement(y.a,{exact:!0,path:"/"},o.a.createElement(g,{username:p})),o.a.createElement(y.a,{path:"/u/:id"},o.a.createElement(w,{username:p,spotify:E})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.c3b1ed05.chunk.js.map