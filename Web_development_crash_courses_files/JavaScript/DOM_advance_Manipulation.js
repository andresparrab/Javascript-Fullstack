const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (e) => {
  e.preventDefault();
  //console.log(e);
  document.querySelector("#my-form").style.background = "#ccc"; //this change the backgound color on click
  document.querySelector("body").classList.add("bg-dark");
});
