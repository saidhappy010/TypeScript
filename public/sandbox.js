"use strict";
var firstFunction = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
firstFunction(1, 'hello');
var secondFunction = function (user) {
    console.log(user.name + " says hello");
};
secondFunction({ name: 'hi', uid: 10 });
