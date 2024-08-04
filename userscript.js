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

// // add atc button (closed for testing purposes)
// let atcButton = document.createElement("button");
// atcButton.textContent = "ATC";

// // Attach the click event listener to the button
// atcButton.addEventListener("click", atc);

// // Find the target element where the button should be inserted
// let targetElement = document.querySelector("body > div.geofs-ui-bottom");

// // Insert the button before the specified child element
// let referenceElement = document.querySelector("body > div.geofs-ui-bottom > div.geofs-ui-bottom-box.geofs-f-standard-ui");
// if (targetElement && referenceElement) {
//     targetElement.insertBefore(atcButton, referenceElement);
// }

function atc() {
    const shorthandCommands = {
        rg: 'roger',
        c: 'cleared',
        pb: 'pushback',
        ps: 'push and start',
        l: 'left',
        r: 'right',
        ctr: 'center',
        n: 'north',
        e: 'east',
        s: 'south',
        w: 'west',
        ne: 'northeast',
        nw: 'northwest',
        se: 'southeast',
        sw: 'southwest',
        af: 'affirmative',
        ng: 'negative',
        tx: 'taxi',
        hld: 'hold',
        hls: 'hold short',
        hcp: 'hold current position',
        lup: 'line up',
        luw: 'line up and wait',
        rwy: 'runway',
        m: 'maintain',
        cm: 'climb maintain',
        dm: 'descend maintain',
        ifr: 'ifr',
        vfr: 'vfr',
        trf: 'traffic',
        tn: 'turn',
        fnl: 'final',
        nm: 'mile',
        nms: 'miles',
        dpg: 'departing',
        dpt: 'departure',
        arg: 'arriving',
        arr: 'arrival',
        tkf: 'for take off',
        lnd: 'to land',
        f: "face",
        ga: "go around",
        xp: "expect",
        cl: "cancel",
        hlp: "enter holding pattern",
    };

    const phoneticAlphabet = {
        A: 'Alpha',
        B: 'Bravo',
        C: 'Charlie',
        D: 'Delta',
        E: 'Echo',
        F: 'Foxtrot',
        G: 'Golf',
        H: 'Hotel',
        I: 'India',
        J: 'Juliett',
        K: 'Kilo',
        L: 'Lima',
        M: 'Mike',
        N: 'November',
        O: 'Oscar',
        P: 'Papa',
        Q: 'Quebec',
        R: 'Romeo',
        S: 'Sierra',
        T: 'Tango',
        U: 'Uniform',
        V: 'Victor',
        W: 'Whiskey',
        X: 'X-ray',
        Y: 'Yankee',
        Z: 'Zulu',
    };

    function replaceShorthand() {
        let message = prompt('What is your message?');
        if (!message) return;

        let words = message.split(' ');
        let replacedMessage = words.map(word => {

            let replacedWord = shorthandCommands[word] || word;

            replacedWord = replacedWord.split('').map(char => {
                return phoneticAlphabet[char] || char;
            }).join('');

            return replacedWord;
        }).join(' ');

        console.log(replacedMessage);
    }

    replaceShorthand();
}
