// the first time the code scans it look for varaibles and declare them like so: var x;  tha means undefine
console.log(x);
//second time it scan it asign/initialize it ti x=10;
var x = 10;

console.log(x);

// this will work becase this function declaration scan/hoisted everyting inside the body. and the secont time it pass and se doStuff() it will already contain everyint in the function
doStuff();
function doStuff() {
  console.log("hej");
}

// this will not work because it will hoist the first scan the var doStuff: var doStuff; and the second scan it will asign it the function.
var doStuff = function () {
  console.log("hej");
};

//it have to be called after it is hoisted and asigned.
doStuff();

//FOR LET AND CONST it can be use until intialized,, it will give the error : "Cannot access 'x' before initialized"

console.log(x);

x = 10;
