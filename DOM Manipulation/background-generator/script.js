const _ = require('lodash');

let arr = [1,2,3,4,5,6,7,8,9,];
console.log(_.without(arr, 5));

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var css = document.querySelector("h3");

function colorCode() {
    body.style.background = 
    "linear-gradient(to right," 
    + color1.value
    +","
    + color2.value
    +")";

    css.textContent = body.style.background;
}

color1.addEventListener("input", colorCode)
color2.addEventListener("input", colorCode)