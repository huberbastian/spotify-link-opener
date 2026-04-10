// ==UserScript==
// @name         Open Spotify links in Desktop App
// @description  Automatically open Spotify album, track, playlist or artist links in the Spotify Desktop App.
// @version      1.0.0
// @author       Bastian Huber
// @license      MIT
// @namespace    https://github.com/huberbastian/spotify-link-opener
// @match        https://open.spotify.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const path = window.location.pathname;

  const match = path.match(/^\/(album|track|playlist|artist)\/([a-zA-Z0-9]+)/);
  if (!match) return;

  const [, type, id] = match;
  const uri = `spotify:${type}:${id}`;

  // Simulate click
  const link = document.createElement("a");
  link.href = uri;
  document.documentElement.style.display = "none";
  document.documentElement.appendChild(link);
  link.click();

  setTimeout(() => {
    window.close();
  }, 100);
})();
