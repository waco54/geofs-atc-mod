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

let shortHandCommands;
let phoneticAlphabet;
let airlines;

async function main() {

    try {
        const phoneticAlphabetUrl = "https://mk158.github.io/geofs-atc-mod/JSON/phoneticAlphabet.json";
        const shorthandCommandsUrl = "https://mk158.github.io/geofs-atc-mod/JSON/shortHandCommands.json";
        const airlinesUrl = "https://mk158.github.io/geofs-atc-mod/JSON/airlines.json";
        phoneticAlphabet = await (await fetch(phoneticAlphabetUrl)).json();
        shorthandCommands = await (await fetch(shorthandCommandsUrl)).json();
        airlines = await (await fetch(airlinesUrl)).json();
        initializeAtc(phoneticAlphabet, shorthandCommands, airlines);
    } catch (error) {
        console.error('Error:', error);
    }
}

function atc() {
    let message = prompt('What is your message?');
    if (!message) return;

    // Split the message into words
    let words = message.split(' ');

    // Replace airline abbreviation with full airline name
    let replacedMessage = words.map(word => {
        // Use regex to check for abbreviation followed by numbers
        let match = word.match(/^([a-zA-Z]+)(\d*)$/);
        if (match) {
            let abbreviation = match[1].toLowerCase();
            let number = match[2];
            if (airlines[abbreviation]) {
                return airlines[abbreviation] + (number ? ' ' + number : '');
            }
        }

        // Replace shorthand commands
        let replacedWord = shorthandCommands[word.toLowerCase()] || word;

        // Replace phonetic alphabet
        replacedWord = replacedWord.split('').map(char => {
            // Check for uppercase letter
            if (char === char.toUpperCase() && char !== char.toLowerCase()) {
                return phoneticAlphabet[char] || char;
            }
            return char;
        }).join('');

        return replacedWord;
    }).join(' ');

    console.log(replacedMessage);
}

function initializeAtc(phoneticAlphabet, shorthandCommands, airlines) {
    console.log("ATC Initialized:");
    console.log("Phonetic Alphabet:", phoneticAlphabet);
    console.log("Shorthand Commands:", shorthandCommands);
    console.log("Airlines:", airlines);
}

main();
