"use strict";
//example1
var greet;
greet = function (name, greeting) {
    console.log(name + ' says ' + greeting);
};
greet('zak', 'hell');
//example2
var calc;
calc = function (num1, num2, action) {
    if (action === 'add')
        return num1 + num2;
    else
        return num1 - num2;
};
console.log(calc(2, 1, 'ad'));
//example3
var presonDetails;
presonDetails = function (person) {
    console.log(person.name + ' is ' + person.age + ' old years');
};
presonDetails({ name: 'zak', age: 16 });
