"use strict";
var firstFunction;
firstFunction = function () {
    console.log('hello typescript');
};
// ? c-a-d cet arg est optionnel
var add = function (a, b, c, d) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
    console.log(d);
};
add(5, 20);
var minus = function (a, b) {
    return a - b;
};
var result = minus(20, 16);
console.log(result);
