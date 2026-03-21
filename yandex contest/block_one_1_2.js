// let inputStr = '10 20 heat';


// 4 3 5 2 5 - 5 5
// -4 3 -5 2 5 - -5 -4
// 29710 29793
let inputStr = '0 1';

let arrNum = inputStr.split(' ');

let currentMaxNumFirst = 0;
let currentMaxNumSecond = 0;

for (let i = 0; i < arrNum.length; i++) {
    if ((Math.abs(arrNum[i]) >= Math.abs(currentMaxNumSecond)) && ((arrNum[i] * -1) != currentMaxNumSecond) && ((arrNum[i] * -1) != currentMaxNumFirst)) {        
        if ((Math.abs(arrNum[i]) >= Math.abs(currentMaxNumFirst))) {
            currentMaxNumSecond = currentMaxNumFirst
            currentMaxNumFirst = arrNum[i];
        } else {
            currentMaxNumSecond = arrNum[i];
        }
    }
}

if (currentMaxNumFirst == 0 || currentMaxNumSecond == 0) {
    console.log('');
} else if (currentMaxNumSecond - currentMaxNumFirst < 0) {
    console.log(`${currentMaxNumSecond} ${currentMaxNumFirst}`);
} else {
    console.log(`${currentMaxNumFirst} ${currentMaxNumSecond}`);
}