"use strict";

let admin;
let name = "Джон";

let ourPlanetName;
let nameCurrentUser;

admin = name;

// alert(admin);

// let nameUser = prompt("Введите имя");

// alert("Ваше имя: " + nameUser);

// confirm("Добро пожаловать");

// let ageUser = prompt("Введите возраст");

// ageUser > 18 ? alert("Доступ разрешён"): alert("Доступ запрещён");

// let inputUser = prompt("Какое «официальное» название JavaScript?");

// inputUser == "ECMAScript" ? alert("Верно!") : alert("Не знаете? ECMAScript!");

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// result = (a + b < 4) ? "Мало" : "Много";

let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Зравствуйте' :
//     (login == '') ? 'Нет логина' :
//     '';

let num1 = 10,
    num2 = 20,
    result;

result ??= num1 ?? num2;

let countAlert = 0;

// outer:for (let i = 1; i < 4; i++) {
//     for (let j = 1; i <10; i++) {
//         if (j > 10) break outer;
//     }
//     alert('Error');
// }

// for (let i = 2; i < 10; i++) {

//     if (i % 2) continue

//     alert(i)
// }



// let inputNumUser = prompt('Введите число большее 100');

// while (inputNumUser < 100) {
//     inputNumUser = prompt('Попробуй ещё раз');
//     if (inputNumUser == null || inputNumUser == '') break
// } 

// best practice

// do {
//     inputNumUser = prompt('Введите число большее 100');
//     // от себя
//     if (inputNumUser == null || inputNumUser == '') break
// } while (inputNumUser < 100 ?? inputNumUser)


let n = 10;

nextPrime:for (let i = 2; i <= n; i++) {    
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    alert(i);
}

