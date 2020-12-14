//example1
let greet: (a: string, b: string) => void
greet = (name: string, greeting: string) => {
  console.log(name + ' says ' + greeting);
}
greet('zak', 'hell')

//example2
let calc: (a: number, b: number, c: string) => number
calc = (num1: number, num2: number, action: string) => {
  if(action === 'add')
    return num1 + num2
  else 
    return num1 - num2
}
console.log(calc(2, 1, 'ad'));

//example3
let presonDetails: (obj: {name: string, age: number}) => void
type person = {name: string, age: number}
presonDetails = (person: person) => {
  console.log(person.name + ' is ' + person.age + ' old years');
}
presonDetails({name:'zak', age: 16})

