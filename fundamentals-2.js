'use strict';
//Activating Strict Mode



/*
//////////////////////////////////////
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio'; 'interface' reserved as defined variables and can't be used
// const private = 345;      'private' reserved as defined variables and can't be used
// const if;            'if' reserved as defined variables and can't be used



/////////////////////////////////////////////////////
// FUNCTIONS

function logger() { // logger is a name of function
    console.log('My name is Jonas');
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProccesor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProccesor(5, 0);   // this is one
console.log(appleJuice);                   // possibility;
console.log(fruitProccesor(5, 0));    //this is another posibility

const appleOrangeJuice = fruitProccesor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');



// declarations vs. experssions

// Fuction declaration
function calcAge1(birthYeah) {
    // const age = 2037 - birthYeah;
    // return age;
    return 2037 - birthYeah; // easier "shorter" way
}
const age1 = calcAge1(1991);


// Function expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}

const age2 = calcAge2(1991);
console.log(age1, age2);
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}



// Arrow Function!!
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1988, 'Bob'));



// function calling other functions
const cutPieces = function (fruit) {
    return fruit * 4;
}
const fruitProccesor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProccesor(2, 3));



const calcAge = function (year) {
    return 2037 - year;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`); // .log before return works!!!!
        return retirement; // .log after return is not possible
    } else {
        return `${firstName} is retired already`;
    }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));




// Coding Challenge #1
const calcAverage = score => score;
// const scoreD = (44 + 23 + 71) / 3;
// const scoreK = (65 + 54 + 49) / 3;
const scoreD = (85 + 54 + 41) / 3;
const scoreK = (23 + 34 + 27) / 3;

console.log(calcAverage(scoreD));
console.log(calcAverage(scoreK));

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= (2 * avgDolphins)) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
    } else {
        return `Nobody wins`;
    }
}
checkWinner(scoreD, scoreK);
checkWinner(524, 111);



//right solution
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
let scoreDolphins = calcAverage(44, 23, 71); // !!const changed to let
let scoreKoalas = calcAverage(65, 54, 49);   // !!const changed to let
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`Nobody wins`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(541, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41); // !!const changed to let but not overwrite (let) only change value
scoreKoalas = calcAverage(23, 34, 27);   // !!const changed to let but not overwrite (let) only change value
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



///////////////////////////////////////////
// Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['MIchael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1992, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']   this is not valid!!!!!!!
friends[0] = 'john';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


// Exercise
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const years = [1992, 1984, 2008, 2020];

// console.log(calcAge2(years));   wrong!!!!!
const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years.length - 1);
console.log(age1, age2, age3);

const ages = [calcAge2(years[0]), calcAge2(years[1]), calcAge2(years.length - 1)];
console.log(ages);



// Basic Array Operations (Methods)
const friends = ['MIchael', 'Steven', 'Peter'];

// Add elements
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last will be removed
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // moving second to first position (removing unshift from before)
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); //string is not included
console.log(friends.includes(23));  // number is included

if (friends.includes('Steven')) {
    console.log('You have friend called Steven');
}


// Coding Challenge #2
// my solution
// let bill = 100;
// const calcTip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const totalValue = calcTip + bill;
// console.log(totalValue);


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);



////////////////////////////////////////////////
// Objects

// // this is array
// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['MIchael', 'Steven', 'Peter']
// ];

// this is object!!!!!!!
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter']
}
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas[`lastName`]);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey); // !!wrong, it works only with bracket!

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
};
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// "Jonas has 3 friends and his best friend is called Michael."

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);


*/

// Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function () {             //here () represents 'this' which is used instead of 'objects name'
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {                 //here also () represents 'this' which is used instead of 'objects name'
        this.age = 2037 - this.birthYear;   // here we set new property 'age' like normally in objects( just now in the function) using 'this' method!
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);



// Challenge
// 'Jonas is a 46-years old teacher, and he has a/no driver's license'
console.log(jonas.getSummary());