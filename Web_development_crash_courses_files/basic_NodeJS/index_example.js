 const Person = require('./person')

//console.log( 'Hello Nodejs my name is : ', Person)

const person1 = Person('Andres', 49 )

console.log('this is my name ' ,  person1.name)
console.log('this is my age ' ,  person1.age)
person1.greeting()