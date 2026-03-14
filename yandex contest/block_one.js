const inpt = '1 4 0 3';

let res = 1;
const treeArr = inpt.trim().split(/\s+/).map(Number);    
    
if (treeArr[1] < treeArr[2]) {
    res += treeArr.reduce((acc, num) => (acc + num), 0);
} else if (treeArr[1] > treeArr[2]) {
    res += treeArr.reduce((acc, num) => (acc + num), 0) - (treeArr[1] - treeArr[2]);
} else if (treeArr[2] >  treeArr[0] && treeArr[3] < treeArr[1]) {
    res += treeArr.reduce((acc, num) => (acc + num), 0) - (treeArr[2] + treeArr[3])
} else {
    res += treeArr.reduce((acc, num) => (acc + num), 0) - (treeArr[0] + treeArr[1])
}

console.log(res);
console.log(treeArr);

