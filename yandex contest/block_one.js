/*
Вася и Маша участвуют в субботнике и красят стволы деревьев в белый цвет. Деревья растут вдоль улицы через равные промежутки в 1 метр. Одно из деревьев обозначено числом ноль, деревья по одну сторону занумерованы положительными числами 
1
,
2
1,2 и т.д., а в другую — отрицательными
−
1
,
−
2
−1,−2 и т.д.

Ведро с краской для Васи установили возле дерева 
P
P, а для Маши — возле дерева 
Q
Q. Ведра с краской очень тяжелые и Вася с Машей не могут их переставить, поэтому они окунают кисть в ведро и уже с этой кистью идут красить дерево. Краска на кисти из ведра Васи засыхает, когда он удаляется от ведра более чем на 
V
V метров, а из ведра Маши — на 
M
M метров. Определите, сколько деревьев может быть покрашено.


*/

// const inpt = '0 10 3 4';
// const inpt = '0 5 2 3';
// // const inpt = '0 7 12 5';

// const treeArr = inpt.trim().split(/\s+/).map(Number);
// let p = treeArr[0], v = treeArr[1];
// let q = treeArr[2], m = treeArr[3];

// let minv = p - v, maxv = p + v;
// let minm = q - m, maxm = q + m;

// if (Math.max(minv, minm) <= Math.min(maxv, maxm) ) {
//     console.log(Math.max(maxv, maxm) - Math.min(minv, minm) + 1);
// } else {
//     console.log((maxv - minv + 1) + (maxm - minm + 1));
// }


// (2)

// const inputTwo = '89 20 41 1 11';
const inputTwo = '11 1 1 1 1';

const inputStrArr = inputTwo.trim().split(/\s+/).map(Number);
let k1 = inputStrArr[0], m = inputStrArr[1], k2 = inputStrArr[2], p2 = inputStrArr[3], n2 = inputStrArr[4];
let countK = Math.round(k2 / n2);
let countKP = countK * m;
let p1 = 1, n1 = 1;

if (countK >= countKP) {
    p1 = 0;    
} else if (n2 >= m) {
    n1 = 0;
} else if (k1 > countKP) { 
    p1 += 1;
    n1 = Math.ceil((k1 - countKP) / countK);
} else {
    p1 = -1;
    n1 = -1;
}

    




console.log(p1 + ' ' + n1);

console.log(countK);
console.log(countKP);
console.log(k1);
