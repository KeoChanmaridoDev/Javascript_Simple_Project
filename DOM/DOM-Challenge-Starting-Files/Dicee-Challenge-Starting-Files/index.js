var Num = [1,2,3,4,5,6];

//Random Number in the Array
var RNum = Math.floor(Math.random() * Num.length) + 1;

// Dice Changing Image
var RDiceImg = "images/dice" + RNum + ".png";


var RNum1 = Math.floor(Math.random() * Num.length) + 1;

// Dice Changing Image
var RDiceImg1 = "images/dice" + RNum1 + ".png";

// Select img from img and set attribute
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", RDiceImg);


var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", RDiceImg1);