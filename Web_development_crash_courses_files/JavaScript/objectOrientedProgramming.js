//ES5 Contructor function, Start always the function name with a CAPITAL letter this is preClasses
function Person(firstName, lastName, DoB) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.DoB = new Date(DoB);
}

Person.prototype.getBirthYear = function () {
  return this.DoB.getFullYear();
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

//------------------------ES6 NEW WAY OF WRITING CLASSES , MORE LIKE PYTHON RECOMMEND TO USE THIS WAY!!!!!!-------------

class Person {
  constructor(firstName, lastName, DoB) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.DoB = new Date(DoB);
  }
  getBirthYear() {
    return this.DoB.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Initiate object

const person1 = new Person("Andres", "Parra", "1981-04-08");
const person2 = new Person("Jonatan", "Jaramillo", "1984-01-12");

console.log(person1.getBirthYear());
console.log(person2.getFullName());
