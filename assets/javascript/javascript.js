let ComputerScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
let UserScore = ""; //click value + click value
let Wins = "";
let Losses = "";

let ruby = Math.floor(Math.random()*12)+1;
let diamond = Math.floor(Math.random()*12)+1;
let emerald = Math.floor(Math.random()*12)+1;
let topaz = Math.floor(Math.random()*12)+1;

if (UserScore === ComputerScore) {
    Wins +=1 && alert("You Win!")
};

if (UserScore > ComputerScore) {
    Losses += 1 && alert("You Lose!")
};



$(document).ready(function() {

$("#ComputerScore").append(ComputerScore);
$("#UserScore").on("click", function() {
$("#ruby").on("click", function () {
    alert("You clicked ruby!");
    });
});


//console.log(ruby);
//console.log(diamond);
//console.log(emerald);
//console.log(topaz);






});