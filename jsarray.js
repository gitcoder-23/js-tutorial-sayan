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

// Assy Callback
function f1() {
  console.log('f1');
}

function f2() {
  console.log('f2');
}

function f3() {
  console.log('f3');
}

function main() {
  console.log('main-one');

  // setTimeout(f1, 0);
  setTimeout(() => {
    f1();
  }, 10);

  f2();
  f3();
}

main();

// Index of
const indexArr = [1, 2, 3, 41, 5];
const inDexOfArr1 = indexArr.indexOf(3);
console.log('inDexOfArr1->', inDexOfArr1);

// Includes
const includeArr = [1, 2, 3, 41, 20, 30];
const includeArr1 = includeArr.includes(90);
console.log('includeArr1-->', includeArr1);

// Find
const findArr = [1, 2, 3, 41, 20];
const findEven = findArr.find((data) => {
  console.log(data);
  return data % 2 === 0;
});
console.log('findEven-->', findEven);
const findOdd = findArr.find((data) => data % 2 === 1);
console.log('findOdd-->', findOdd);

// map()
let newArr1 = [
  {
    fName: 'Nila',
    class: '12',
    age: '18',
  },

  {
    fName: 'Mira',
    class: '9',
    age: '14',
  },

  {
    fName: 'Rina',
    class: '10',
    age: '15',
  },
];

console.log('newArr1->', newArr1[0].fName);
newArr1.map((eData, index) => {
  console.log('eData-->', eData.fName, index);
});

// filter
newArr1.filter((fData, fIndex) => {
  console.log('filter-->', fData, fIndex);
});

// Reduce
const reduceArr = [1, 2, 3, 4];
let reduceSum = reduceArr.reduce((prev, current) => {
  return prev + current;
});
console.log('reduceSum->', reduceSum);

const reduceRightArr = [1, 2, 3, 4];
let reduceRightSum = reduceArr.reduceRight((prev, current) => {
  return prev + current;
});
console.log('reduceRightSum->', reduceRightSum);

// Every

const evaryArr = [1, 2, 3, 4];

let evrData = evaryArr.every((eArg) => {
  // console.log('evaryArr->', evaryArr < 2);
  return eArg < 2;
});
console.log('evrData->', evrData);

// Sort
let employees = [
  { name: 'John', salary: 90000, hireDate: 'July 1, 2010' },
  { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
  { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
];
let mapData = employees.map((data) => {
  return data.salary;
});

console.log('mapData->', mapData);

let sortedSalIncrement = mapData.sort((a, b) => a - b);
console.log('sortedSalIncrement->', sortedSalIncrement);

let sortedSalDecrement = mapData.sort((a, b) => b - a);
console.log('sortedSalDecrement->', sortedSalDecrement);

let sortedSalDecrement1 = mapData.sort(function (a, b) {
  return b - a;
});
console.log('sortedSalDecrement1->', sortedSalDecrement1);

let scores = [9, 80, 10, 20, 5, 70];

// nmber sort
let numberSort = scores.sort();
console.log('numberSort->', numberSort);

let alphabet = ['zèbre', 'abeille', 'écureuil', 'chat'];
let alphabetSort = alphabet.sort();
console.log('alphabetSort->', alphabetSort);

// Concat old
const nArr1 = [1, 2, 3, 4];
const nArr2 = [41, 42];
const nArr3 = [50, 60];

let concatArr = nArr1.concat(nArr2).concat(nArr3);
console.log('concatArr->', concatArr);

// flat
const flArr = [1, 2, 3, [4, 5, 6]];
// console.log('flArr->', flArr);
let oneFlArr = flArr.flat();
console.log('oneFlArr->', oneFlArr);

/// Customize
const flArr1 = [1, 2, 3, [4, 5, 6, [40, 41, 42]]];
// console.log('flArr->', flArr);
let oneFlArr1 = flArr1.flat(1);
console.log('oneFlArr1->', oneFlArr1);

/// Infinite
const flArr2 = [1, 2, 3, [4, 5, 6, [40, 41, 42, [80, 90, 100, [500, 600]]]]];
// console.log('flArr->', flArr);
let oneInFlArr2 = flArr2.flat(Infinity);
console.log('oneInFlArr2->', oneInFlArr2);

// Array Join()
const cssClasses = ['btn', 'btn-primary', 'btn-active'];

const joinedArrData = cssClasses.join('_');
console.log('joinedArrData->', joinedArrData, typeof joinedArrData);

// name & join
const nameArr = ['Sayan', 'Dutta'];
const nameArrJoin = nameArr.join(' ');
console.log('nameArrJoin->', nameArrJoin);

// remove " "/ "-" add "_"
const title = 'JavaScrip-array-join-example';
const reData = title.split('-');
console.log('reData->', reData);
let joinedData = reData.join('_');
console.log('joinedData->', joinedData);

// remove " "/ "-" add "_"
const title1 = 'JavaScript-array-join-example';
const replaceData = title1.replace(/[_-]/g, '_');
const replaceAllData = title1.replaceAll('-', '_');
console.log('replaceData-->', replaceData, replaceAllData);
