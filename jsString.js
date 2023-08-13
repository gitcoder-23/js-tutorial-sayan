// String Methods

// Trim
const nameString = ' Sayan Dutta      ';
// console.log('nameString->', nameString);

const trString = nameString.trim(' ');
console.log('trString->', trString);

// TrimStart & TrimEnd
const nameString1 = '     Sayan Dutta      ';
console.log('nameString1->', nameString1);

const trStringStart = nameString1.trimStart(' ');
console.log('trStringStart->', trStringStart);

const trStringEnd = nameString1.trimEnd(' ');
console.log('trStringStart->', trStringEnd);

// Substring
let describe = 'In this tutorial, you’ll learn how to use the JavaScript';
let subStringData = describe.substring(0, 40);
console.log('subStringData->', subStringData);

// Slice slice(start, end)
let describe1 = 'In this tutorial, you’ll learn how to use the JavaScript';
let sliceStringData1 = describe1.slice(0, 40);
console.log('sliceStringData1->', sliceStringData1);

// Concat
const newStr = 'hello';
const concatData = newStr.concat(' ', 'Mina');
console.log('concatData>', concatData);

// template litaral
const newStr1 = 'Hi john';
const newStr2 = 'are you';

const joinedStr = `${newStr1} how ${newStr2}?`;
console.log('joinedStr>', joinedStr);

// Upper & Lower
const newStr3 = 'Hi john';
const upperData = newStr3.toUpperCase();
console.log('upperData>', upperData);
const lowerData = newStr3.toLowerCase();
console.log('lowerData>', lowerData);

// Number to string convert
let numData = 40;
console.log('numData>', typeof numData);
let numToString = numData.toString();
console.log('numToString>', typeof numToString, numToString);

// String to number
let strData = '100';
console.log('strData>', typeof strData);
let strToNum = parseInt(strData);
console.log('strToNum>', typeof strToNum, strToNum);

// operators
