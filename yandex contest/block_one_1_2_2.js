let inputStr = '25';
const inputArr = inputStr.trim().split(/\s+/);

console.log(inputArr);

let tempArr = [inputArr[0], inputArr[1]];
let modeTemp = inputArr[2];

switch(modeTemp) {
    case 'heat':
        if (tempArr[0] < tempArr[1]) {
            console.log(tempArr[1]);
        } else {
            console.log(tempArr[0]);
        }                    
        break;
    case 'freeze':
        if (tempArr[0] > tempArr[1]) {
            console.log(tempArr[1]);
        } else {
            console.log(tempArr[0]);
        }
        break;
    case 'auto':
        console.log(tempArr[1]);
        break;
    case 'fan':
        console.log(tempArr[0]);
        break;
    default:              
        break;  
}