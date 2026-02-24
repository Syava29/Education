// объекты
// let user = {
//     name: "John",
//     age: 32,
//     "like birds": true
// };

// user.description = "Пользователь";

// delete user.age;

// console.log(user);

// console.log(user["like birds"]);

//console.log("names" in user);

// for (let key in user) {
//     console.log(key);
// }

// задание
// (1)
let user = {};

user.name = "John";

user.surname = "Smith";

user.name = "Pete";

// console.log(user);

delete user.name;

// (2)
let schedule = {};
schedule.one = 1;

function isEmpty(obj) {    
    for (let key in obj) {
        return true;
    }
    return false;
}

console.log(isEmpty(schedule));

// (3)

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumSalaries(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

console.log(sumSalaries(salaries));

// (4)

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) == 'number') {
            obj[key] *= 2;
        }
    }
    console.log(menu);
}

multiplyNumeric(menu);
