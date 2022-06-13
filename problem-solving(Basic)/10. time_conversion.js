'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// 12:00:00AM to 12:59:59AM in military 00:00:00 - 00:59:59 *hr replce with 0
// 1:00:00AM - 11:59:59AM in military 1:00:00 - 12:59:59 *same
// 12:00:00PM - 12:59:59PM in military 12:00:00PM - 12:59:59PM *same
// 1:00:00PM - 11:59:59PM in military 13:00:00 - 23:59:59 *add 12 hr

function timeConversion(s) {
    // Write your code here
    let ampm = s.charAt(8);
    
    let militaryHour = '0';
    
    if(ampm === 'A') {
        if(s.substring(0,2) === '12') {
            militaryHour = '00';
        } else {
            militaryHour = s.substring(0,2);
        }
    } else {
        if(s.substring(0,2) == '12') {
            militaryHour = s.substring(0,2);
        } else {
            militaryHour = (parseInt(s.substring(0,2)) + 12) + '';
        }
    }
    
    let newArray = s.split(':');
    newArray[0] = militaryHour;
    let newArray2 = newArray.join(':')
    let finalArray = newArray2.substring(0,8);
    
    return finalArray;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
