//single element selector... it selects ONE item from the DOM (Document Object Model)

// Item windowd
console.log(window);
// Item Form
console.log(document.getElementById("my-form"));
const form = document.getElementById("my-form");
console.log(form);
// Item h1
console.log(document.querySelector("h1"));

//Multiple element selectors....it selects ONE several items from the DOM (Document Object Model)

//Selec all Items from the .item class and it gives us is a Nodelist...
//arry like object..collections of nodes with methots and props... USE THIS RECOMMENDED
console.log(document.querySelectorAll(".item"));

//Selec all Items from the item class and it gives us is a HTML COLLECTION...
//arry like object..collections of nodes with methots and props
console.log(document.getElementsByClassName("item"));

// get things from the DOM and loop trought them
const items = document.querySelectorAll(".items");

items.forEach((item) => console.log(item));

//Manipulate items from the DOM
// this will select the .item class
const ul = document.querySelector(".items");
//And remove the las element in the list
//ul.lastElementChild.remove();

//Edit the first element in the item
ul.firstElementChild.textContent = "Hello";

//Then grab the second item on the list
ul.children[1].innerText = "Brad";

//Manipulate the las element again to hello in h4 size by manipulating the HTML code
ul.lastElementChild.innerHTML = "<h4>Hello</h4>";

const btn = document.querySelector(".btn");
btn.style.background = "red";
