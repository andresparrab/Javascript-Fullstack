function Person(name, age) {
  const greeting = () => {
    console.log(`My name is : ${name} and I am  this age: ${age}`);
  };
  return {
    name,
    age,
    greeting,
  };
}

module.exports = Person;



// const Person = (name, age) => {
    

    
//     const greeting = () => {
//      console.log(`My name is : ${name} and I am  this age: ${age}`)}
//    const newPerson = {
//      name: name,
//      age: age,
//      greeting: greeting
  
//    }
//    return newPerson
//  }
 
//  module.exports = Person;