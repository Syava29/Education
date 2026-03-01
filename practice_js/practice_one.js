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
// let user = {};

// user.name = "John";

// user.surname = "Smith";

// user.name = "Pete";

// console.log(user);

// delete user.name;

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

// клонирование объектов
let infoUsers = {
    name: "Jonh",
    age: 32,
    city: "Moscow"
};

let cloneInfoUsers = {};

for (let key in infoUsers) {
    cloneInfoUsers[key] = infoUsers[key];
}

console.log(infoUsers);
console.log(cloneInfoUsers);

let infoAdmin = {
    id: 123
};

// с помощью метода Object.assign
Object.assign(infoAdmin, infoUsers);

console.log(infoAdmin);

// Методы объекта

let user = {
    name: 'Jonh',
    age: 32,
    sayHi() {
        console.log(this.name);
    }
};

// user.sayHi = function() {
//     console.log('Привет');
// }


user.sayHi();

// Задание
// (1)
let calculator = {
    numOne: 0,
    numTwo: 0,

    sum() {
        return this.numOne + this.numTwo;
    },

    mul() {
        return this.numOne * this.numTwo;
    }
};

calculator.numOne = 10;
calculator.numTwo = 20;

console.log(calculator.sum());
console.log(calculator.mul());

// (2)

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      console.log( this.step );
      return this;
    }
};

ladder.up().up().up().up().down().showStep();

// конструктор, оператор "new"

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let newUser = new User("Andrey");

console.log(newUser.name);

// Задание
// (1)

function Calculator() {
    this.readOne = 0;
    this.readTwo = 0;
    this.sum = function() {
        return this.readOne + this.readTwo;
    }
    this.mul = function() {
        return this.readOne * this.readTwo;
    }
}

let newCalculator = new Calculator();

newCalculator.readOne = 100;
newCalculator.readTwo = 20;
console.log(newCalculator.sum());
console.log(newCalculator.mul());

// опциональная цепочка

let newSecondUser = {
    address: 'Lenina st',
    id: Symbol("id")
};

console.log(newSecondUser.address?.street?.home);
