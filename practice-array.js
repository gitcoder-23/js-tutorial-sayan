// Splice --> replace
let fruit = ['mango', 'banana', 'lichi','cucumber','chiku'];
//let spliceRArr1 = fruit.splice(1, 2, 'jackfruit');
//console.log('splice-replace-array->', fruit);
// Concat using spread operator
let pSa = ['r', 2, 34];
let rSa = [6, 88, 74];
let concatNew = [...pSa, ...rSa];
//console.log('concatNew->', concatNew);

// Array
let say1 = ['b', 'rr', 'yug', 'bom', 55, 10];

console.log('say-array1->', say1.length);

let mess = [74];
let ron = [true, false];
let messron = mess.push(21, 35, 48, ...ron);
console.log('pushed-messron->', mess);
// console.log('pushed-pushArr1->', pushArr1);

// Unshift add one or more elements to the beginning of an array.


let uArr10 = [6, 88, 66];
let arr40 = [true, false];
let unshiftArr10 = uArr10.unshift(1, 2, ...arr40);
console.log('unshift-Array', uArr10);
