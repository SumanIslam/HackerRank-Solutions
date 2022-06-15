'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    const n = arr.length;
    let pos = 0, neg = 0, zero = 0;
    // Write your code here
    for(let i=0; i<n; i++) {
        if(arr[i] > 0) {
            pos++;
        } else if(arr[i] < 0) {
            neg++;
        } else {
            zero++;
        }
    }
    let positiveRatio = pos/n.toFixed(6);
    let negativeRatio = neg/n.toFixed(6);
    let zeroRatio = zero/n.toFixed(6);
    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio)

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
