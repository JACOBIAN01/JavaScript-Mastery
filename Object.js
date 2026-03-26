//-----------------------------------------------------------------------------------------------------------
// Possible Ways to Create Objects in JS
// 1. Object Literals . Property-Value Pair
// let person = {
//     city:"Pune"
// }
// 2. Object Constructor
let person2 = new Object() // Object() is a built-in constructor function so new keyword is optional
let person3 = Object()

// 3.Object.create() Method
let parentObj = {
    prop1:"Value1",
    prop2:"Value2",
}
let ChildObj = Object.create(parentObj)
ChildObj.prop4 = "Value4"
// Enumarable Property prop1 and prop2 and Own Property prop4
// console.log(Object.getPrototypeOf(ChildObj)); //{ prop1: 'Value1', prop2: 'Value2' }
// console.log(ChildObj); // { prop4: 'Value4' }
// for(let prop in ChildObj){
//     console.log(prop);
// }
//prop4 prop1 prop2
// To establish prototype chaining Object.create is one of the methods

// 4. Funtion Constructor 

function Person4(name,age){
    this.name = name; 
    this.age = age;
}
const p4 = new Person4("Subhadeep",23)

// 5. Object.assign(child,parent)

let parent = {
    name:"Krish"
}

let child = Object.assign({
    age:20
},parent)

// console.log(child);
// console.log(child.__proto__);// Null prototype

// function p(){
// // Every Function automatically gets a prototype property
// // Heap Structure of Function Object // 4 Spaces 1.function name, 2.number of parameters 3. prototype 4.body
// }
// const p1 = new p()
// // console.log(p.prototype===Object.getPrototypeOf(p1));
// console.log(p.__proto__);


//6. Class Constructor Object OOP
//-----------------------------------------------------------------------------------------------------------

// Prototype Chaining

function Fun(prop){
this.prop = prop
Fun.prototype.sayHi = ()=>{
    console.log("Hi");
}
}

const f1 = new Fun("Value")
const f2 = new Fun("Value2")
// console.log(Object.getPrototypeOf());

//-----------------------------------------------------------------------------------------------------------
// What is the Difference Between call, apply, and bind
// bind return new function , call(parent,param1,param2) , apply(parent,[param1,param2])

// function Info(){
//     console.log(`${this.name} - ${this.city}`);
// }

// let emp = {
//     name:"Rahul",
//     city:"Pune"
// }

// let InfoEmp = Info.bind(emp)


// function BindTest(param){
//     console.log(`param value - ${param} || this value - ${this.value}`);
// }

// let Obj = {
//     value:"Obj Prop"
// }
// let Obj2 = {
//     value:"Obj2 Prop"
// }

// let BindObj = BindTest.bind(Obj)

// BindObj("Param Prop")
// BindTest("Param Prop")

// function ApplyTest(param){
//     console.log(`${this.value} - ${param}`);
// }
// let obj = {
//     value:"Obj Prop"
// }

// ApplyTest()
// ApplyTest.apply(obj)
// ApplyTest.apply(obj,["Param Prop"])

// function CallTest(param){
//     console.log(`${this.value} - ${param}`);
// }

// let obj = {
//     value:"Obj Prop"
// }

// CallTest()
// CallTest.call(obj)
// CallTest.call(obj,"Param Prop")