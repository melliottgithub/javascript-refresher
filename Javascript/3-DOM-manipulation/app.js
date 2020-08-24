//Dice Game
//declarations
var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//getting 1 to 6 number
dice = Math.floor(Math.random() * 6) + 1;

//changing number on this id
document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML = <em>dice</em>;

var x = document.querySelector("#score-0").textContent;

console.log(x);

//more DOm manipulation
document.querySelector(".dice").style.display = "none";
