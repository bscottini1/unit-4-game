let ComputerScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
let UserScore = 0;
let Wins = 0;
let Losses = 0;

let ruby = Math.floor(Math.random() * 12) + 1;
let diamond = Math.floor(Math.random() * 12) + 1;
let emerald = Math.floor(Math.random() * 12) + 1;
let topaz = Math.floor(Math.random() * 12) + 1;

const crystals = {
    ruby: {
        value: Math.floor(Math.random() * 12) + 1
    },
    diamond: {
        value: Math.floor(Math.random() * 12) + 1
    },
    emerald: {
        value: Math.floor(Math.random() * 12) + 1
    },
    topaz: {
        value: Math.floor(Math.random() * 12) + 1
    },
}




$(document).ready(function () {

    $("#ComputerScore").append(ComputerScore);
    $(".crystalButton").on("click", function () {
        const crystalValue = $(this).val();
        console.log(crystalValue);
        const crystalNum = crystals[crystalValue].value;
        console.log(crystalNum);
        UserScore += crystalNum;
        $("#UserScore").text(UserScore);
        if (UserScore === ComputerScore) {
            Wins += 1;
            alert("You Win!");
            $("#Wins").html(`<p>Wins: ${Wins}</p>`);
        
        };

        if (UserScore > ComputerScore) {
            Losses += 1;
            alert("You Lose!");
            $("#Losses").html(`<p>Losses: ${Losses}</p>`);
        };

        function reset (){
            $("#UserScore").text(0);
            UserScore = 0;
            ComputerScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            $("#ComputerScore").text(ComputerScore);
            }

        $("#reset").on("click",reset);

    });
    






});