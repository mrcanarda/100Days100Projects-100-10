const confirm = document.querySelector(".confirm");
const txt1 = document.getElementById("username");
const txt2 = document.getElementById("pwd");
const txt3 = document.getElementById("monat");
const txt4 = document.getElementById("year");
const txt5 = document.getElementById("cvc");
const card__name = document.getElementById("card__name");
const card__number = document.getElementById("card__number");
const day__code = document.getElementById("day__code");
const cvc__code = document.getElementById("cvc__code");
/*
let input = document.querySelector('input');
console.log(input.value);
// Displays: Muffin
And we can display data from the input field directly on the page. Imagine that we have a paragraph on the page that we found and saved to the paragraph variable. We can do the following:

paragraph.textContent = input.value;

*/

//confirm.addEventListener("click", function (e) {
//  e.preventDefault();
//let input = document.querySelector("username");
// console.log(input.value);
//});

function fun1() {
  card__name.innerHTML = txt1.value;
  card__number.innerHTML = txt2.value;
  day__code.innerHTML = txt3.value;
  cvc__code.innerHTML = txt5.value;
}

confirm.addEventListener("click", fun1);
