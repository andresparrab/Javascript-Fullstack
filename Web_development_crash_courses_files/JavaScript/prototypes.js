let user = {
  active: false,
  sayHello: function () {
    return this.name + " says hello!";
  },
};

let student = {
  name: "Andres",
  major: "English",
};

let teacher = {
  name: "caleb",
  teaching: ["Math", "Science"],
  sayHello: function () {
    let message = this.name + " teaches : ";
    this.teaching.forEach(function (subject) {
      message += subject + " ";
    });
    return message;
  },
};

Object.setPrototypeOf(student, user);
Object.setPrototypeOf(teacher, user);

console.log("The student avtive status is  : " + student.active);
student.active = true;

console.log("The student: " + student.sayHello());
console.log("The teacher: " + teacher.sayHello());
console.log("The student name is : " + student.name);
console.log("The student avtive status is  : " + student.active);
console.log("The teachers avtive status is : " + teacher.active);
console.log(student);

//Polymorphism

let newMembers = [teacher, student];

newMembers.forEach(function (person) {
  console.log(person.sayHello());
});

// find a props in an object. 2 ways to do it

console.log("Has teacher a name?  ", "name" in teacher);

console.log("Has teacher a name?  ", teacher.name !== undefined);

// check if an boject has own property, it will now look unto the subprototype and it will be false
console.log(
  "Has teacher a own prop call active?  ",
  teacher.hasOwnProperty("active")
);

// how to list the props of an object

let properties = [];

// this for loop will list every item in the teacher object, check if is a part of the own property, if so then add it to the list properties[]
for (let prop in teacher) {
  if (teacher.hasOwnProperty(prop)) {
    properties.push(prop);
  }
}

console.log("This is teachers props  ", properties);
