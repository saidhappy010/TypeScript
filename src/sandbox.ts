let firstFunction: Function;

firstFunction = () => {
  console.log('hello typescript');
}
// ? c-a-d cet arg est optionnel
const add = (a: number, b: number, c: number | string = 10, d?: number | string): void => {
  console.log(a + b);
  console.log(c);
  console.log(d);
}
add(5,20)

const minus = (a:number, b:number): number => {
  return a - b
}
let result = minus(20, 16)
console.log(result);


