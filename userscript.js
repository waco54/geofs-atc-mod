// ==UserScript==
// @name         GeoFS ATC Mod
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  geofs ATC mod
// @author       mk158
// @match        https://geo-fs.com/geofs.php*
// @icon         https://github.githubassets.com/favicons/favicon.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let atcButton=document.createElement("button");atcButton.textContent="ATC",atcButton.addEventListener("click",atc);let targetElement=document.querySelector("body > div.geofs-ui-bottom"),referenceElement=document.querySelector("body > div.geofs-ui-bottom > div.geofs-ui-bottom-box.geofs-f-standard-ui");function atc(){let t={rg:"roger",c:"cleared",pb:"pushback",ps:"push and start",l:"left",r:"right",ctr:"center",n:"north",e:"east",s:"south",w:"west",ne:"northeast",nw:"northwest",se:"southeast",sw:"southwest",af:"affirmative",ng:"negative",tx:"taxi",hld:"hold",hls:"hold short",hcp:"hold current position",lup:"line up",luw:"line up and wait",rwy:"runway",m:"maintain",cm:"climb maintain",dm:"descend maintain",ifr:"instrument flight rules",vfr:"visual flight rules",trf:"traffic",tn:"turn",fnl:"final",nm:"mile",nms:"miles",dpg:"departing",dpt:"departure",arg:"arriving",arr:"arrival",tkf:"for take off",lnd:"to land",f:"face",},e={A:"Alpha",B:"Bravo",C:"Charlie",D:"Delta",E:"Echo",F:"Foxtrot",G:"Golf",H:"Hotel",I:"India",J:"Juliett",K:"Kilo",L:"Lima",M:"Mike",N:"November",O:"Oscar",P:"Papa",Q:"Quebec",R:"Romeo",S:"Sierra",T:"Tango",U:"Uniform",V:"Victor",W:"Whiskey",X:"X-ray",Y:"Yankee",Z:"Zulu"};!function r(){let n=prompt("What is your message?");if(!n)return;let a=n.split(" ").map(r=>{let n=t[r]||r;return n.split("").map(t=>e[t]||t).join("")}).join(" ");console.log(a)}()}targetElement&&referenceElement&&targetElement.insertBefore(atcButton,referenceElement);
})();
