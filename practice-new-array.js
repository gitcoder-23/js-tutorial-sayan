// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//The Array.find function returns only one object. If we want to get all red cars, we need to use Array.filter.

let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "cycle",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },

    {
        "color": "green",
        "type": "station bike",
        "registration": new Date('2018-05-03'),
        "capacity": 2
    },

    {
        "color": "red",
        "type": "station scooty",
        "registration": new Date('2018-05-11'),
        "capacity": 10
    },
    {
        "color": "ass",
        "type": "cabrios",
        "registration": new Date('2018-05-02'),
        "capacity": 20
      }
  

  ]
//   let car = {
//     "color": "ass",
//     "type": "cabrios",
//     "registration": new Date('2018-05-02'),
//     "capacity": 20
//   }
 //let newCar = cars.unshift(car);
 //let newCars = cars.splice(2,0,car)

 //let car1 = cars.find(car => car.color === "red");

//  console.log('newCars->',cars)

//  for( let i =0;i<= cars.length;i++){
//     console.log(cars[i])
//  }
//for each with normal function
 cars.forEach(function(car,index){
   // console.log(car.color)
 })
//for each with arrow function
cars.forEach((car,index)=>{
    //console.log(car.type)
})

// above code is written in one line 
cars.forEach((car,index)=> (console.log(car.type)))

const ages=[56,85,98,75,30,64,25,79,63];
//  for(i =0;i<=ages.length;i++){
//     if(ages[i] >=50){
//         console.log(ages[i])
//     }
//  }

//filter 
let age= ages.filter(function(age){
    if(age>=50){
        return true
    }
})
console.log(age)
// filter with arrow function
let age1 =ages.filter((age,index)=>{
    if (age>=60){
        return true
    }
})
console.log(age1)

//short method
let finalAge= age.filter((age)=>(age>=70))
console.log(finalAge)
//more short
let finalAge1= age.filter(age=>age>=80)
console.log(finalAge1)

let peoPle = cars.filter(function(car,index){
    if(car.color === "red"){
        return true
    }
})
console.log('people=>',peoPle)

let peoPle1 = cars.filter((car,index)=>{
    if(car.color === "ass"){
        return true
    }
})
console.log('people1=>',peoPle1)

let peoPle2 = cars.filter(car=>car.color === "green" )

console.log('people2=>',peoPle2)

