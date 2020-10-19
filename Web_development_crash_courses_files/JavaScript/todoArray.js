const todos = [
  {
    id: 1,
    text: "Take out the trash.",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meet with Boss.",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appoiment.",
    isCompleted: true,
  },
  {
    id: 4,
    text: "Eat hamburger.",
    isCompleted: false,
  },
];

const todoJSON = JSON.stringify(todos); //convert the list of object to JSON to get ready to send to a server for example

console.log(typeof todoJSON);

// for loops

for (let i = 0; i < 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

// while loop

let i = 0;
while (i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

//USE the for loot for iterate he todo list

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

//Prefered way of iterate the todos list

for (let todo of todos) {
  console.log(todo.text);
}

// HIGH ORDER  ARAY ITERATION VERY PREFERED
// forEach, map, filter

//forEACH
todos.forEach(function (todo) {
  console.log(todo.id);
});

//map
const todoIsCompleted = todos.map(function (todo) {
  return todo.isCompleted;
});

console.log(todoIsCompleted);

// filter

const todoIsCompletedOrNot = todos.filter(function (todo) {
  return todo.isCompleted === true;
});

console.log(todoIsCompletedOrNot);

// mix filter and map... this will filter only the ones that has isCompleted ===true and from there extract only the text with map
const todoIsCompletedOrNot2 = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoIsCompletedOrNot2);
