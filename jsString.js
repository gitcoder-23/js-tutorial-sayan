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
