// ==UserScript==
// @name         GeoFS ATC Mod
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  geofs ATC mod
// @author       mk158
// @match        https://geo-fs.com/geofs.php*
// @match        https://*.geo-fs.com/geofs.php*
// @icon         https://github.githubassets.com/favicons/favicon.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function atc() {
    let t = {
        rg: "roger", c: "cleared", pb: "pushback", ps: "push and start", l: "left", r: "right", ctr: "center",
        n: "north", e: "east", s: "south", w: "west", ne: "northeast", nw: "northwest", se: "southeast", sw: "southwest",
        af: "affirmative", ng: "negative", tx: "taxi", hld: "hold", hls: "hold short", hcp: "hold current position",
        lup: "line up", luw: "line up and wait", rwy: "runway", m: "maintain", cm: "climb maintain", dm: "descend maintain",
        ifr: "IFR", vfr: "VFR", trf: "traffic", tn: "turn", fnl: "final", nm: "mile",
        nms: "miles", dpg: "departing", dpt: "departure", arg: "arriving", arr: "arrival", tkf: "for takeoff", lnd: "to land",
        f: "face", ga: "go around", xp: "expect", cl: "cancel", hlp: "holding pattern"
    };

    let e = {
        A: "Alpha", B: "Bravo", C: "Charlie", D: "Delta", E: "Echo", F: "Foxtrot", G: "Golf", H: "Hotel", I: "India",
        J: "Juliett", K: "Kilo", L: "Lima", M: "Mike", N: "November", O: "Oscar", P: "Papa", Q: "Quebec", R: "Romeo",
        S: "Sierra", T: "Tango", U: "Uniform", V: "Victor", W: "Whiskey", X: "X-ray", Y: "Yankee", Z: "Zulu"
    };

    (function r() {
        let n = prompt("What is your message?");
        if (!n) return;

        let a = n.split(" ").map(r => {
            // Check for a 2-digit number followed by 'l' or 'r' and capitalize
            r = r.replace(/(\d{2})([lr])/gi, (match, num, letter) => num + letter.toUpperCase());
            let n = t[r] || r;
            if (!/^\d{2}[LR]$/.test(r)) {
                return n.split("").map(t => e[t] || t).join("");
            }
            return n;
        }).join(" ");

        console.log(a);
    })();
}
atc();
})();
