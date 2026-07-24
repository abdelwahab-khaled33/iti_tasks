// Q1
const numbers = [1, 2, 3, 4];

numbers.map((num) => {
  console.log(num * 2);
});
// Q2
const nums = [10, 25, 5, 30, 15, 40];

const result = nums.filter((num) => {
  return num > 20;
});

console.log(result);
//  Q3
const users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 28 },
  { name: "Omar", age: 30 },
];

const user = users.find((item) => {
  return item.age > 25;
});

console.log(user);
// Q4
const names = ["ali", "mona", "ahmed"];

const result2 = names.map((name) => {
  return name.toUpperCase();
});

console.log(result2);

// part 4

const fruits = ["Apple", "Banana", "Orange"];

for (const element of fruits) {
  console.log(element);
}

for (const element in fruits) {
  console.log(element);
}

fruits.forEach((e) => {
  console.log(`${fruits.indexOf(e)} -> ${e}`);
});

// part 5

// Q1
let sum = (a, b) => a + b;
// Q2
const user2 = {
  name: "Mostafa",
  age: 25,
};
let { name, age } = user2;
// Q3
console.log(`Hello ${name}`);
// Q4
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
let newArray = [...arr1, ...arr2];
console.log(newArray);

// part 6

const students = [
  { name: "Ali", degree: 70 },
  { name: "Sara", degree: 95 },
  { name: "Ahmed", degree: 40 },
  { name: "Mona", degree: 85 },
  { name: "Omar", degree: 55 },
];

let studentsNames = students.map((student) => student.name);

let studentPass = students.filter((student) => student.degree > 60);

let over90 = students.find((student) => student.degree > 90);
console.log(over90);

students.forEach((e) => {
  console.log(e.name);
});
