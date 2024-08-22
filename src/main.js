let shortHandCommands;
let phoneticAlphabet;
let airlines;

async function main() {
    try {
        const phoneticAlphabetUrl = "https://waco54.github.io/geofs-atc-mod/src/JSON/phoneticAlphabet.json";
        const shorthandCommandsUrl = "https://waco54.github.io/geofs-atc-mod/src/JSON/shortHandCommands.json";
        const airlinesUrl = "https://waco54.github.io/geofs-atc-mod/src/JSON/airlines.json";
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

    // Extract the callsign (first word) and convert it to the full airline name and flight number
    let callsign = words[0];
    let match = callsign.match(/^([a-zA-Z]+)(\d+)$/);
    if (match) {
        let airlineCode = match[1].toLowerCase();
        let flightNumber = match[2];
        if (airlines[airlineCode]) {
            callsign = `${airlines[airlineCode]} ${flightNumber}`;
        }
    }

    // Check for 'tkf' or 'lnd'
    if (words.includes('tkf') || words.includes('lnd')) {
        let command = words.includes('tkf') ? 'tkf' : 'lnd';
        let runwayIndex = words.indexOf(command) + 2;
        let runway = words[runwayIndex] || 'unknown';

        // wind data 
        let windDegrees = ;
        let windSpeed = ;

        let clearance = command === 'tkf' ? 'cleared for take off' : 'cleared to land';
        let formattedMessage = `${callsign}, winds ${windDegrees} degrees, ${windSpeed} knots, ${clearance} runway ${runway}.`;
        console.log(formattedMessage);
        document.querySelector("#chatInput").value = formattedMessage;
        return;
    }

    // Replace airline abbreviation with full airline name in the rest of the message
    let replacedMessage = words.map(word => {
        // Skip the first word (callsign) since it's already processed
        if (word === words[0]) return callsign;

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
    document.querySelector("#chatInput").value = replacedMessage; // set the chat input value
}

function initializeAtc(phoneticAlphabet, shorthandCommands, airlines) {
    coolMessage("ATC Initialized:");
    console.log("Phonetic Alphabet:", phoneticAlphabet);
    console.log("Shorthand Commands:", shorthandCommands);
    console.log("Airlines:", airlines);
}

function coolMessage(message, size) {
    console.log("%c" + message, "color: lime; -webkit-text-stroke: 1px black; font-size: 30px; font-weight: bold;");
}

main();
