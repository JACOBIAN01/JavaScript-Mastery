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

console.log(names);
// Add Element 
names.push("Rohit")
names.push("Rahul")

console.log(names)

// Remove Element from end
names.pop()
console.log(names)

//remove element from shift
names.shift()
console.log(names)

// Array Methods

let UpperName = names.map(name=>name.toUpperCase())
console.log(UpperName)

let LowerName = names.map(name=>name.toLowerCase())
console.log(LowerName)

let longName = names.filter(name=>name.length>5)
console.log(longName)

let shortName = names.filter(name=>name.length<5)
console.log(shortName)

