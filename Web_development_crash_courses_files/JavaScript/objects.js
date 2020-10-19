const s = "technologi, it, data, hr";

//console.log(s.split(","));

const person = {
  firstName: "Andres",
  lastName: "Parra",
  age: 39,
  hobbies: ["kung-fu", "movies", "anime"],
  adress: {
    street: "50 Main st",
    city: "Boston",
    state: "MA",
  },
};

//console.log("first pull");
//console.log(person.hobbies[2], person.adress); //get multiple values from the dictionary

const {
  firstName,
  lastName,
  adress: { city },
} = person; //pull the actual variables from the object person so can be used like stand alone const
//console.log(firstName, lastName);

person.firstName = "Keny";
//console.log(firstName, lastName);

// ADD new props to  the object person
person.email = "andres.parrab@gmail.com";

//console.log(person);
