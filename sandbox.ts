//Explicit Types
let character: string;
let age: number;
let isLoggedIn: boolean;

//Array
let arr: string[] = [];
arr.push("hello");

//union types
let mixed: (string|number)[] = [];
mixed.push("world");
mixed.push(10);
console.log(mixed);

let uid: string|number;
uid = '10';
uid = 10;

//Objects
let obj: object;
obj = {name:'zak', age:10};

let obj2: {
  name: string,
  age: number
};

obj2 = {
  name: 'tutu',
  age: 20
};

