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
const nArray1 = [1, 2, 3, 4];
const nArray2 = [41, 42];
const nArray3 = [50, 60];

let concatArray = nArray1.concat(nArray2).concat(nArray3);
console.log('concatArray->', concatArray);

// // flat
// const flArr = [1, 2, 3, [4, 5, 6]];

// // console.log('flArr->', flArr);
// let oneFlArr = flArr.flat();
// console.log('oneFlArr->', oneFlArr);

// /// Customize
// const flArr1 = [1, 2, 3, [4, 5, 6, [40, 41, 42]]];
// // console.log('flArr->', flArr);
// let oneFlArr1 = flArr1.flat(1);
// console.log('oneFlArr1->', oneFlArr1);

// /// Infinite
// const flArr2 = [1, 2, 3, [4, 5, 6, [40, 41, 42, [80, 90, 100, [500, 600]]]]];
// // console.log('flArr->', flArr);
// let oneInFlArr2 = flArr2.flat(Infinity);
// console.log('oneInFlArr2->', oneInFlArr2);

// // Array Join()
// const cssClasses = ['btn', 'btn-primary', 'btn-active'];

// const joinedArrData = cssClasses.join('_');
// console.log('joinedArrData->', joinedArrData, typeof joinedArrData);

// // name & join
// const nameArr = ['Sayan', 'Dutta'];
// const nameArrJoin = nameArr.join(' ');
// console.log('nameArrJoin->', nameArrJoin);

// // remove " "/ "-" add "_"
// const title = 'JavaScrip-array-join-example';
// const reData = title.split('-');
// console.log('reData->', reData);
// let joinedData = reData.join('_');
// console.log('joinedData->', joinedData);

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