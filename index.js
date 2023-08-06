// Synchronous
console.log('a');
console.log('b');
console.log('c');

// Asynchornous
console.log('x');
setTimeout(() => {
  console.log('y');
}, 100);

console.log('z');

// Variable
// (global Scope)
// var x = '2';
// // console.log('var-x-->', x);
// var x = '4';
// // console.log('var-x-->', x);

// function data() {
//   console.log('var-x-->', x);
// }
// data();

// Block scope

let y = 4;

function blockData() {
  let y = 5;

  console.log('let-y', y);
}
blockData();

function blockData1() {
  console.log('let-y', y);
}
blockData1();

// console.log('lety-y-->', y);
const z = true;

// =
var p = 2;

// == (compare)-> not checking types return boolean

let f = 2;
let g = '3';
var m = f == g;

console.log('== check->', m);

// === (compare)->  checking types return boolean

let h = 2;
let n = 2;
var c = h === n;

console.log('=== check->', c);

// function vannila
function nameFun() {}

// Arrow function
const arrowFunction = () => {};

//
// var d = document.getElementById('js');
// DOM
var d = document.querySelector('#js');
console.log(d);

// BOM
// window. (property)

/// Case
// camelCase
// PascalCase
// sAkecAse

// Js Types
// primitive -> String, Number, Boolean, Undefined, Null
// Non-primitive=> Object, Array, Regex,

// Object
const objData = {
  name: 'Raj',
  class: 'five',
};

const arrayData = ['1', '2', '3'];

// const regxData = $/#{0-1}/$/g
