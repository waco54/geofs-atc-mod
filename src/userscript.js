// ==UserScript==
// @name         GeoFS ATC Mod
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  GeoFS ATC mod
// @author       mk158
// @match        https://geo-fs.com/geofs.php*
// @match        https://*.geo-fs.com/geofs.php*
// @icon         https://github.githubassets.com/favicons/favicon.svg
// @grant        none
// ==/UserScript==

let script = document.createElement('script');
script.src = "https://waco54.github.io/geofs-atc-mod/src/main.js";
document.head.appendChild(script);
