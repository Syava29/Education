// задачи на два указателя

let arr = [1, 4, 5, 6, 7, 8, 12];

function twoSum(arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        const sumTwo = arr[l] + arr[r];

        if (sumTwo === target) {
            return [l , r]
        } else if (sumTwo > target) {
            r--;
        } else {
            l++
        }    
    }
    return [-1, -1];
}

// console.log(twoSum(arr, 16));

let inputStr = 'комок';

function checkPalindrome(str) {
    let splitStr = str.split('');
    let l = 0;
    let r = splitStr.length - 1;

    while (l < r) {
        if (splitStr[l] != splitStr[r]) {
            return 'Не палиндром'
        } else {
            l++;
            r--;
        }
    }    
    return 'Это палиндром';
}

// console.log(checkPalindrome(inputStr));

// два указателя (каждому по указателю)

let arrNumOne = [1, 2, 2, 7, 8, 8, 8];
let arrNumTwo = [0, 2, 4, 8, 8];

function intersect(arrOne, arrTwo) {
    let result = [];
    let pos1 = 0;
    let pos2 = 0;

    while (pos1 < arrOne.length && pos2 < arrTwo.length) {
        if (arrOne[pos1] < arrTwo[pos2]) {            
            pos1++;
        } else if (arrOne[pos1] > arrTwo[pos2]) {
            pos2++;
        } else {
            result.push(arrOne[pos1]);
            pos1++;
            pos2++;
        }
    }

    return result;
}

// console.log(intersect(arrNumOne, arrNumTwo));

// объеденить два отсортированных масива в один

let nums1 = [1, 3, 5, 7];
let nums2 = [2, 4, 6, 8];

function combiningArrays(arrOne, arrTwo) {
    let result = [];
    let p1 = 0;
    let p2 = 0;

    while (p1 < arrOne.length && p2 < arrTwo.length) {
        if (arrOne[p1] < arrTwo[p2]) {
            result.push(arrOne[p1]);            
            p1++;
        } else {
            result.push(arrTwo[p2]);
            p2++;
        }
    }

    while (p1 < arrOne.length) {
        result.push(arrOne[p1]);
        p1++;
    }
    while (p2 < arrTwo.length) {
        result.push(arrTwo[p2]);
        p2++;
    }

    return result;
}

console.log(combiningArrays(nums1, nums2));