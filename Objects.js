var OurDog = 
{
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "Friends": ["everything!"]
};

OurDog.name = "Happy Camper"

var myDog = 
{
    "name": "Doggy",
    "legs": 3,
    "tails": 2,
    "Friends": []
};

console.log(myDog.Friends);
var dogNameValue = myDog.name;
console.log(dogNameValue);
console.log(OurDog.name);
myDog["Bark"] = "Woof!!";
myDog.Friends = "All in the world";
console.log(myDog.Bark)
console.log(myDog.Friends);

console.log(myDog.hasOwnProperty("Bark"));