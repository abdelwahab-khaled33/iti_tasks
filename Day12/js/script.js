/*
  * important
  !kfkf
  ?kfk
  TODO: 

*/

// basic func
function func1() {
  console.log(`i'm a function`);
}

// basic func with params

function func2(par1, par2) {
  console.log(`the sum of params is ${par1 + par2}`);
}

// exprision func

var func3 = function (par1, par2) {
  console.log(`the sum of params is ${par1 + par2}`);
};

// arrow func
var func4 = (par1, par2) =>
  console.log(`the sum of params is ${par1 + par2}`);

// objects
var ak = {
  name: "Abdelwahab",
  age: 21,
  title: "front-end",
  about: () => console.log("Abdelwahab is a 21 and a front-end dev"),
  skills: {
    front: ["html", "css", "js"],
    back: "node",
  },
};

ak.about();
console.log(ak.skills.back);
