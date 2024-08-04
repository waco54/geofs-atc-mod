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

let shortHandCommands;
let phoneticAlphabet;

async function main() {

    try {
        const phoneticAlphabetUrl = "https://mk158.github.io/geofs-atc-mod/JSON/phoneticAlphabet.json";
        const shorthandCommandsUrl = "https://mk158.github.io/geofs-atc-mod/JSON/shortHandCommands.json";
        phoneticAlphabet = await (await fetch(phoneticAlphabetUrl)).json();
        shorthandCommands = await (await fetch(shorthandCommandsUrl)).json();
        initializeAtc(phoneticAlphabet, shorthandCommands);
    } catch (error) {
        console.error('Error:', error);
    }
}

function atc() {
    let message = prompt('What is your message?');
    if (!message) return;

    let words = message.split(' ');
    let replacedMessage = words.map(word => {
        // Replace shorthand commands
        let replacedWord = shorthandCommands[word] || word;
        replacedWord = replacedWord.split('').map(char => {
            // Check if the character is an uppercase letter
            if (char === char.toUpperCase() && char !== char.toLowerCase()) {
                return phoneticAlphabet[char] || char;
            }
            return char;
        }).join('');

        return replacedWord;
    }).join(' ');

    console.log(replacedMessage);
}

main();
