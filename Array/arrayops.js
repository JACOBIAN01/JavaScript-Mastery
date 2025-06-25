const names = [
  "Aarav",
  "Saanvi",
  "Vivaan",
  "Diya",
  "Aditya",
  "Ananya",
  "Kabir",
  "Isha",
  "Aryan",
  "Meera",
];

// console.log(names);
// Add Element 
names.push("Rohit")
names.push("Rahul")

// console.log(names)

// Remove Element from end
names.pop()
// console.log(names)

//remove element from shift
names.shift()
// console.log(names)

// Array Methods

let UpperName = names.map(name=>name.toUpperCase())
// console.log(UpperName)

let LowerName = names.map(name=>name.toLowerCase())
// console.log(LowerName)

let longName = names.filter(name=>name.length>5)
// console.log(longName)

let shortName = names.filter(name=>name.length<5)
// console.log(shortName)

// Reduce Method
array = [1, 2, 3, 4, 5, 6];

const helperSum = (acc,curr) =>acc+curr

sum = array.reduce(helperSum,0)
// console.log(sum)

//Some - It is used to check whether some array values passes a test

array = [1, 2, 3, 4, 5, 6];

const lessthan4Check = (element)=>element>4
const lessThanFour = array.some(lessthan4Check)

// console.log(lessThanFour)


// Array Copy

// let arr1 =  [1,2,3]
// // let arr2 = arr1 //Shallow Copy

// arr2.push(4)
// console.log(arr1)
// console.log(arr2)

//spread Operator ...

let arr = [1,2,3]
let arr2 = [...arr]
arr2.push(4)
console.log(arr)
console.log(arr2)

// for (let i of arr){
//     console.log(i)
// }





