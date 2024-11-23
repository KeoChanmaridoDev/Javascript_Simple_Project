var Num = [1,2,3,4,5,6];

// START DICES 1
//Random Number in the Array
var RNum = Math.floor(Math.random() * Num.length) + 1;

// Dice Changing Image
var RDiceImg = "images/dice" + RNum + ".png";
//END_DICES_1

// START DICES 2
var RNum1 = Math.floor(Math.random() * Num.length) + 1;

// Dice Changing Image
var RDiceImg1 = "images/dice" + RNum1 + ".png";
// END_DICES_2

// Select img from img and set attribute
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", RDiceImg);


var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", RDiceImg1); 

if (RNum > RNum1){
    document.querySelector("h1").innerHTML = "THE PLAYER 1 WIN"
}else if (RNum1 > RNum){
    document.querySelector("h1").innerHTML = "THE PLAYER 2 WIN"
}
else 
    document.querySelector("h1").innerHTML = "DRAW"

    document.getElementById("refreshButton").addEventListener("click", function() {
        location.reload();
    });
    