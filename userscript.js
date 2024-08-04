// ==UserScript==
// @name         GeoFS ATC Mod
// @namespace    http://tampermonkey.net/
// @version      2024-08-04
// @description  geofs ATC mod
// @author       You
// @match        https://geo-fs.com/geofs.php?v=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function atc() {
    let message = prompt("What is your message?");
    let parts = message.split(" ");

    // Phonetic alphabet mapping
    const phoneticAlphabet = {
        A: 'Alpha', B: 'Bravo', C: 'Charlie', D: 'Delta', E: 'Echo', F: 'Foxtrot',
        G: 'Golf', H: 'Hotel', I: 'India', J: 'Juliett', K: 'Kilo', L: 'Lima',
        M: 'Mike', N: 'November', O: 'Oscar', P: 'Papa', Q: 'Quebec', R: 'Romeo',
        S: 'Sierra', T: 'Tango', U: 'Uniform', V: 'Victor', W: 'Whiskey', X: 'X-ray',
        Y: 'Yankee', Z: 'Zulu'
    };

    // Ensure we have enough parts
    if (parts.length < 2) {
        console.log("Invalid input. Please provide a callsign and command.");
    } else {
        let callsign = parts[0].toUpperCase(); // Capitalize the callsign
        let command = parts[1];
        let parameters = parts.slice(2); // Collect all parameters after the command

        if (command === 'cl') {
            // Handle climb command
            let altitude = parseInt(parameters[0], 10) * 1000;
            console.log(`${callsign}, climb to ${altitude} feet.`);
        } else if (command === 'ds') {
            // Handle descend command
            let altitude = parseInt(parameters[0], 10) * 1000;
            console.log(`${callsign}, descend to ${altitude} feet.`);
        } else if (command === 'hd') {
            // Handle heading command
            console.log(`${callsign}, set heading to ${parameters[0]} degrees.`);
        } else if (command === 'hl') {
            // Handle hold short command
            console.log(`${callsign}, hold short of runway ${parameters[0]}.`);
        } else if (command === 'ln') {
            // Handle landing command
            console.log(`${callsign}, cleared to land runway ${parameters[0]}.`);
        } else if (command === 'tk') {
            // Handle takeoff command
            console.log(`${callsign}, cleared to take off runway ${parameters[0]}.`);
        } else if (command === 'tx') {
            // Handle taxi command
            let phoneticRoute = parameters.slice(1).map(point =>
                point.split('').map(letter => phoneticAlphabet[letter] || letter).join(' ')
            ).join(", ");
            console.log(`${callsign}, cleared to taxi to runway ${parameters[0]} via ${phoneticRoute}.`);
        } else if (command === 'rs') {
            // Handle reduce speed command
            console.log(`${callsign}, reduce speed to ${parameters[0]} knots.`);
        } else if (command === 'is') {
            // Handle increase speed command
            console.log(`${callsign}, increase speed to ${parameters[0]} knots.`);
        } else if (command === 'ma') {
            // Handle maintain altitude command
            let altitude = parseInt(parameters[0], 10) * 1000;
            console.log(`${callsign}, maintain ${altitude} feet.`);
        } else if (command === 'ga') {
            // Handle go around command
            console.log(`${callsign}, go around.`);
        } else if (command === 'ps') {
            // Handle push and start command
            console.log(`${callsign}, cleared for push and start.`);
        } else if (command === 'cr') {
            // Handle cross runway command
            console.log(`${callsign}, cleared to cross runway ${parameters[0]}.`);
        } else if (command === 'em') {
            // Handle emergency command
            if (parameters.length < 4) {
                console.log("Invalid input for emergency command. Please provide all required parameters.");
            } else {
                let heading = parameters[0].substring(1);
                let descendAltitude = parseInt(parameters[1].substring(1), 10);
                let maintainSpeed = parameters[2].substring(1);
                let runway = parameters[3].toUpperCase();

                console.log(`${callsign} understood. Turn left heading ${heading}, descend to ${descendAltitude}ft, and maintain ${maintainSpeed}kt. I will clear you to runway ${runway}.`);
            }
        } else {
            console.log("Unknown command. Please use 'c' for climb, 'd' for descend, 'h' for heading, 'hl' for hold short, 'l' for landing, 'tk' for takeoff, 'tx' for taxi, 'rs' for reduce speed, 'is' for increase speed, 'ma' for maintain altitude, 'ga' for go around, 'ps' for push and start, 'cr' for cross runway, 'em' for emergency.");
        }
    }
}
})();
