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
// let atcButton = document.createElement('button');
// atcButton.textContent = 'ATC';

// // Attach the click event listener to the button
// atcButton.addEventListener('click', atc);

// // Find the target element where the button should be inserted
// let targetElement = document.querySelector('body > div.geofs-ui-bottom');

// // Insert the button before the specified child element
// let referenceElement = document.querySelector('body > div.geofs-ui-bottom > div.geofs-ui-bottom-box.geofs-f-standard-ui');
// if (targetElement && referenceElement) {
//     targetElement.insertBefore(atcButton, referenceElement);
// }

const shorthandCommands = {
    af: 'affirmative',
    arg: 'arriving',
    arr: 'arrival',
    cf: 'confirm',
    c: 'cleared',
    cr: 'cross',
    cm: 'climb maintain',
    ds: 'decrease speed',
    dpg: 'departing',
    dpt: 'departure',
    dm: 'descend maintain',
    e: 'east',
    f: 'face',
    faf: 'final approach fix',
    fnl: 'final',
    ga: 'go around',
    hcp: 'hold current position',
    hld: 'hold',
    hlp: 'enter holding pattern',
    hls: 'hold short',
    ifr: 'ifr',
    is: 'increase speed',
    l: 'turn left',
    lup: 'line up',
    lnd: 'to land',
    luw: 'line up and wait',
    m: 'maintain',
    n: 'north',
    nm: 'mile',
    nms: 'miles',
    ne: 'northeast',
    ng: 'negative',
    nw: 'northwest',
    r: 'turn right',
    rc: 'readback correct',
    rg: 'roger',
    rwy: 'runway',
    s: 'south',
    se: 'southeast',
    sh: 'set heading',
    sq: 'squack',
    sw: 'southwest',
    tkf: 'for take off',
    trf: 'traffic',
    tn: 'turn',
    tx: 'taxi',
    vfr: 'vfr',
    xp: 'expect',
    w: 'west'
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

function atc() {
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
