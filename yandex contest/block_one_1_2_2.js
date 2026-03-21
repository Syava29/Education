let inputStr = '25 20 heat';
const inputArr = inputStr.trim().split(/\s+/);

console.log(inputArr);

let tempArr = [parseInt(inputArr[0]), parseInt(inputArr[1])];
let modeTemp = inputArr[2];

if (modeTemp == 'auto') {
    console.log(tempArr[1]);
}
if (modeTemp == 'fan') {
    console.log(tempArr[0]);
}
if (modeTemp == 'heat') {
    if (inputArr[1] > inputArr[0]) {
        console.log(inputArr[1])
    } else {
        console.log(inputArr[0])
    }
}
if (modeTemp == 'freeze') {
    if (inputArr[1] < inputArr[0]) {
        console.log(inputArr[1])
    } else {
        console.log(inputArr[0])
    }
}