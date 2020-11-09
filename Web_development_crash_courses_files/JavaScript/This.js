{
  //   let me = {
  //     name: "Andres",
  //     outputMe: function () {
  //       console.log(this);
  //     },
  //   };

  let me = {
    name: "Andres",
    outputMe: outputMe,
  };

  function outputMe() {
    console.log(this);
  }

  function outputMeStrict() {
    "use strict";
    console.log(this);
  }

  me.outputMe(); //method ...'this' is {name: Andres, outputMe: function}.. because this is attached to the object me{}
  outputMe(); //function ...'this' is from the object it is attached to. in this case Window object
  outputMeStrict(); // function strict ...'this' is undefined

  // building constructor for check 'this' ///////////////////////////

  function Person() {
    console.log(this);
    this.name = "Andres";
    console.log(this);
  }

  let person = new Person(); // contructor call. the "this" will refer to the Person object
  console.log(person); // this give same output becase they point to the same object

  //   in arrow Functions the "this" is laways the same

  let func = (x) => {
    return x * x * x;
  };

  console.log(func(5));
}
