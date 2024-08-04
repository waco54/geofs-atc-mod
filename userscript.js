// ==UserScript==
// @name         GeoFS ATC Mod
// @namespace    http://tampermonkey.net/
// @version      2024-08-04
// @description  geofs ATC mod
// @author       mk158
// @match        https://geo-fs.com/geofs.php?v=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

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
    ifr: 'instrument flight rules',
    vfr: 'visual flight rules',
    trf: 'traffic',
    tn: 'turn',
    fnl: 'final',
    nm: 'mile',
    nms: 'miles',
    dpg: 'departing',
    dpt: 'departure',
    arg: 'arriving',
    arr: 'arrival',
    tkf: 'take off',
    lnd: 'land',
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
    Z: 'Zulu'
};

function replaceShorthand() {
    const message = prompt('What is your message?');
    if (!message) return;
    
    let words = message.split(' ');
    let replacedMessage = words.map(word => {
        
        let replacedWord = shorthandCommands[word] || word;
        
        replacedWord = replacedWord.split('').map(char => {
            return phoneticAlphabet[char] || char;
        }).join('');
        
        return replacedWord;
    }).join(' ');
    
    alert(replacedMessage);
}

replaceShorthand();
})();
