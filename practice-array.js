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

// map()
let mapArr = [
    {
      fName: 'sayan',
      class: '10',
      age: '15',
    },
  
    {
      fName: 'roni',
      class: '9',
      age: '14',
    },
  
    {
      fName: 'Rbittuina',
      class: '10',
      age: '15',
    },
  ];
  console.log ('newmap->',mapArr[2].age) 
  mapArr.map((mData,index)=>{
    console.log('checkMap->',mData.fName,index)
  })

  // filter
  mapArr.filter((fData1, fIndex1) => {
    console.log('filter-->', fData1, fIndex1);
  });

  // Reduce
const reduceArr1 = [1, 2, 3, 4,50];
let reduceSum1 = reduceArr1.reduce((prev,current)=>{
    return prev+current;
})
console.log('reduceSumLeft=>',reduceSum1)

const reduceRightArr1 = [9,5,6,7,10];
let reduceSumRight = reduceRightArr1.reduceRight((prev,current)=>{
    return prev+current;
}
)
console.log('reduceSumRight=>',reduceSumRight)


// const reduceRightArr = [1, 2, 3, 4];
// let reduceRightSum = reduceArr.reduceRight((prev, current) => {
//   return prev + current;
// });
// console.log('reduceRightSum->', reduceRightSum);
//

//shorting
// Sort
let players = [
    { name: 'virat', salary: 500000, debutDate: 'July 1, 2010' },
    { name: 'Dravid', salary: 405000, hireDate: 'August 15, 2009' },
    { name: 'Anil', salary: 900000, hireDate: 'December 12, 2011' },
  ];
  let mapPly = players.map((data) =>{
    return data.salary;

  })
  console.log('mapPly=>',mapPly);

  let sortedSalIncrement1 = mapPly.sort((a, b) => a - b);
console.log('sortedSalIncrement1->', sortedSalIncrement1);

let sortDecremented1 = mapPly.sort

//saturday study
// Concat old
const nArray1 = [1, 2, 3, 4,5,6];
const nArray2 = [41, 42];
const nArray3 = [50, 60,78];

let concatArray = nArray1.concat(nArray2).concat(nArray3);
console.log('concatArray->', concatArray);

// flat eta use hy array er moddhe array thakle setake ekta array convert krte use hy
const flArr1 = [1, 2, 3, [4, 5, 6,7,8]];

// console.log('flArr->', flArr);
let oneFlArr1 = flArr1.flat();
console.log('oneFlArr1->', oneFlArr1);

/// Customize of flat method ekhane 119 no line flat er 1 lekha mne eta ek number depth tai 1 theke 6 obdhi print hbe ekta array te
const flArr2 = [1, 2, 3, [4, 5, 6, 7, 8, [40, 41, 42]]];
// console.log('flArr->', flArr);
let oneFlArr2 = flArr2.flat(1);
console.log('oneFlArr2->', oneFlArr2);

/// Infinite jokhn ekta array te infinite array thake tokhn flat method e bhetore infinity likhte hy
const flArr3 = [1, 2, 3, [4, 5, 6, [40, 41, 42, [80, 90, 100, [500, 600,[1000,5000]]]]]];
// console.log('flArr->', flArr);
let oneInFlArr3 = flArr3.flat(Infinity);
console.log('oneInFlArr3->', oneInFlArr3);

// // Array Join()
// const cssClasses = ['btn', 'btn-primary', 'btn-active'];

// const joinedArrData = cssClasses.join('_');
// console.log('joinedArrData->', joinedArrData, typeof joinedArrData);

// // name & join
// const nameArr = ['Sayan', 'Dutta'];
// const nameArrJoin = nameArr.join(' ');
// console.log('nameArrJoin->', nameArrJoin);

// // remove " "/ "-" add "_"
 const title = 'JavaScrip-Python-Java-Php';
const reData1 = title.split('-');
console.log('reData1->', reData1);
const reData2 = reData1.join('*');
console.log('reData2->',reData2);

const reData = title.split('-');
console.log('reData->', reData);
let joinedData = reData.join('_');
console.log('joinedData->', joinedData);

// // remove " "/ "-" add "_"
// const title1 = 'JavaScript-array-join-example';
// const replaceData = title1.replace(/[_-]/g, '_');
// const replaceAllData = title1.replaceAll('-', '_');
// console.log('replaceData-->', replaceData, replaceAllData);

// // Destructuring
// function desFun() {
//   let x = [1, 2, 3];
//   const y = [40, 45, 46];

//   return x, y;
// }


// let { x, y } = desFun();
// console.log('desData->', y);
// console.log('joinedData->', joinedData);


function getProfile() {
  return [
      'John',
      'Doe',
      ['Red', 'Green', 'Blue']
  ];
}
let [name,surname,[color1,color2,color3]]=getProfile();
console.log('deStruc->',color2)

//search string methods
//egulo sb case sensitive search 
// it returns 3 // eta str er moddhe check krbe first capital letter koto number index ache
//tai ekhane Capital T 3 no index e ache tai eta 3 return krbe ekhane - 1 asle bujhte hbe kono capital number nei
let re = /[A-Z]/;
let str = 'hi There! How are you?';
let index = str.search(re);

console.log('1st capital index position->',index);

//index of method
// eta return krbe 1 karon str1 er moddhe check krbe "in" er i er index koto mane orthat first
//word er index position 
let str1 = 'finding substring in string';
let inDex1 = str1.indexOf('in');

console.log(inDex1);

//JavaScript String lastIndexOf()
//eta check krbe last Capital J er last e koto index e ache
let lastIndstr = 'JavaScriptJ';
let lastIndstrvar = lastIndstr.lastIndexOf('J');

console.log(lastIndstrvar);

//JavaScript String includes() method
//eta check kre string er moddhe substring ache kina r boolean value return krbe
let inClude = 'JavaScript String';
console.log(inClude.includes('Script'));

//JavaScript String startsWith() examples
//ekhane check krlo jill er j ta 9 no. index ache kina
const subJect = 'Jack and Jill Went Up the Hill';
console.log(subJect.startsWith('Jill',9));

//JavaScript String endsWith()() examples
//The following example uses the endsWith() method to check if the title ends with the string 'Hill':
const subJect1 = 'Jack and Jill Went Up the Hill';
console.log(subJect1.endsWith('Hill',21));

// Number to string convert toString method diye 
let numData1 = 75;
console.log('numData1->', typeof numData1);
let numToString1 = numData1.toString();
console.log('numToString1->', typeof numToString1, numToString1);

// String to number convet parseInt() method diye
let strData1 = '524';
console.log('strData1->', typeof strData1);
let strToNum1 = parseInt(strData1);
console.log('strToNum1->', typeof strToNum1, strToNum1);

//slice(start, end) ei slice amra string kotota thke starting e nbo r kotota obdhi nbo seta set krte prbo 
//bracket moddhe tr index diye
let describe1 = 'In this tutorial, you’ll learn how to use the JavaScript';
let sliceStringData1 = describe1.slice(2, 40);
console.log('sliceStringData1->', sliceStringData1);

// Concat
const newStr = 'hello';
const concatData = newStr.concat(' ', 'Sam');
console.log('concatData>', concatData);