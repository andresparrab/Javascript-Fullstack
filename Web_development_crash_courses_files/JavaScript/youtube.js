//alert("hello");
// document.getElementById("button").onclick = function () {
//   document.getElementById("confirm").innerHTML =
//     "Order placed. Check email  for comfirmation";
//   document.getElementById("button").style.display = "none";
// };

// var username = prompt();
// console.log(username);

var age = 49;

function mongo() {
  var age = 5;
}

let y = 11.4563456;
y.toFixed(2);
// this will copy the value of y and return a the number with do decimals 11.46 but it will now show in the console.loge until we reasign te y or another varaible

console.log(`you own me $${y}`);

// This will asign the return value to the y variable as a new copy
y = y.toFixed(2);

console.log(`you own me $${y}`);

let person = {
  name: "Caleb",
  age: 93,
  favFood: "pizza obviosly",
  fun: function () {
    console.log("yay");
  },
};

//let newPerson = new person(); // wont work becase is not a contructor. Only constructors functions can create object

let now = new Date();

let x = new Number(10);

//object are mutable and can change the value instead of copy the value
//because the object points to the same variable x variable

let position = {
  x: 10,
  y: 20,
};

let myPosition = position;

console.log(position);
console.log(myPosition);

myPosition.x = 15;

//  Both x in the object changed to 15

console.log(position);
console.log(myPosition);

let myString = "Search fdkfjid mgfgf c fijdk c do kc";
let vowsToSearch = ["a", "e", "i", "o", "u"];
for (let i = 0; i < myString.length; i++) {
  for (let v = 0; v < vowsToSearch.length; v++) {
    if (vowsToSearch[v] === myString[i]) {
      console.log(myString[i] + " IS a vow" + i);
      break;
    }
  }
  // console.log("vow " + myString[i] + " was found at index" + i);
}

let d = document.getElementById("dest");
for (let i = 0; i < 10; i++) {
  for (let k = i; k >= 0; k--) {
    d.append(k + " ");
    console.log(k + "\n");
  }
  var br = document.createElement("br"); //creates an html element <br> and asing to br
  d.appendChild(br); //appends child element <br> to parent element <d> that is <div id='dest'> .... the result is <div id='dest'>   k   <br/><div/>
}

let grades = [15, 4, 4, 66, 7, 9, 33, 5, 6, 43, 43, 43];
grades.length[30];
grades[34] = 40;

console.log(grades);
let largest = grades[0];
let indexposition = 0;
for (let i = 0; i < grades.length; i++) {
  if (grades[i] !== undefined && grades[i] > largest) {
    largest = grades[i];
    indexposition = i;
  }
}
console.log(largest + "  indexposition is : " + indexposition);

let anotherGrade = [];

while (true) {
  let input = prompt("Add a grade: ");

  if (input === null) {
    break;
  }
  anotherGrade.push(Number(input));
  console.log(anotherGrade);
}
