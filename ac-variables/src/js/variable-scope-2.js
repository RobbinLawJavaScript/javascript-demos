export function demo() {
// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Block Scope: ', a, b, c);
// }
// test();

// if(true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Block Scope: ', a, b, c);
// }

// for(var a = 0; a < 10; a++) {
//   console.log(`Loop Block Scope: ${a}`);
// }

// for(let a = 0; a < 10; a++) {
//     console.log(`Loop Block Scope: ${a}`);
// }

// for(var b = 0; b < 10; b++) {
//     console.log(`Loop Block Scope: ${b}`);
// }

// for(let b = 0; b < 10; b++) {
//     console.log(`Loop Block Scope: ${b}`);
// }

console.log('Global Scope: ', a, b, c);

}