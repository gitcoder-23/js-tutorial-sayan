// Array
let array1 = ['1', '2', '3', '4', 2, 3];

console.log('length-array1->', array1.length);

let arr2 = [5];
let arr3 = [true, false];
let pushArr1 = arr2.push(2, 3, 4, ...arr3);
console.log('pushed-arr2->', arr2);
console.log('pushed-pushArr1->', pushArr1);

// operator
// spread ...(copy, concat, expand)

// Concat using spread operator
let sArr1 = [1, 2, 34];
let sArr2 = [6, 88, 66];
let concatArr1 = [...sArr1, ...sArr2];
console.log('concatArr1->', concatArr1);

// Unshift

let uArr1 = [6, 88, 66];
let arr4 = [true, false];
let unshiftArr1 = uArr1.unshift(1, 2, ...arr4);
console.log('unshift-Array', uArr1);

// pop (remove from last element of an array)
let pArr1 = [20, 30, 40];
let popArr1 = pArr1.pop();
console.log('pop-Array->', popArr1, pArr1);

// Shift (remove from first element of an array)
let shArr1 = [50, 60, 70];
let shiftArr1 = shArr1.shift();
console.log('shift-Array->', shArr1, shiftArr1);

// Splice --> Array.splice(position,num); bound remove
let splArr1 = [5, 6, 7, 8, 9, 10];
let spliceArr1 = splArr1.splice(0, 3);
console.log('splice-array->', splArr1);

// Splice --> replace
let colors = ['red', 'green', 'blue'];
let spliceRArr1 = colors.splice(2, 0, 'purple');
console.log('splice-replace-array->', colors);
