// This is the traditional way to write functions

function addNumns(num1 = 1, num2 = 1) {
  return num1 + num2;
}

console.log(addNumns(4, 5));

// This is a more modern way to do it and use it as a const

const addNumns2 = (num1 = 1, num2 = 1) => console.log(num1 + num2);

addNumns2(4, 6);

//can use it with the todos array of object to loop every todo, and return the console for every todo item.
// is the same as this:
//forEACH
//todos.forEach(function (todo) {
//    console.log(todo.id);
//  });
todos.forEach((todo) => console.log(todo));
