{
  function pow(x, y) {
    let total = 1;
    for (let i = 0; i < y; i++) {
      total *= x;
    }
    return total;
  }

  let coolFunction = [pow]; // Adding function to an array

  let mathFunction = {
    // Adding a function to an object AS a props even called methods,, a function inside a function
    power: pow,
  };

  console.log(mathFunction.power(2, 3));
}

//Adding a prop to a function
pow.description = "This will raise to the power : ";

console.log(pow.description);

// calback function, is a function that takes a function as parameter, call the function inside the parent funtion  then return something, in this case 2^5= 32
function callbackExample(callback) {
  return callback(2, 5);
}
console.log(callbackExample(pow));

// A function that return a function
function returnAFunction() {
  return pow;
}

console.log(returnAFunction()(2, 5));
