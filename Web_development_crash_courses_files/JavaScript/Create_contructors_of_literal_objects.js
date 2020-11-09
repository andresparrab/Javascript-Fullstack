function User() {
  this.active = false;
}

User.prototype.sayHello = function () {
  return this.name + " says hello!";
};

function Student(name, major) {
  this.name = name;
  this.major = major;
}

Student.prototype = new User();

function Teacher(name, subjects) {
  this.name = name;
  this.teaching = subjects;
  //   this.sayHello = function () {
  //   this.teaching.forEach(function (subject) {
  //       message += subject + " ";
  //     });
  //     return message;
  //   };
}

Teacher.prototype = new User();
Teacher.prototype.sayHello = function () {
  let message = this.name + " teaches : ";
  this.teaching.forEach(function (subject) {
    message += subject + " ";
  });
  return message;
};

student = new Student("Andres", "english");
teacher = new Teacher("jonte", ["math", "Sciense"]);

console.log(User);
console.log(student);
console.log(teacher);
console.log(student.sayHello());
console.log(teacher.sayHello());

console.log(teacher instanceof Teacher);
console.log(teacher instanceof User);
console.log(teacher instanceof Student);
