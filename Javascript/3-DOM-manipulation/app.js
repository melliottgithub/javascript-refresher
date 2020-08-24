//Dice Game
//declarations
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//getting 1 to 6 number
//dice = Math.floor(Math.random() * 6) + 1;

//changing number on this id
//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML = <em>dice</em>;

//var x = document.querySelector("#score-0").textContent;

//console.log(x);

//more DOM manipulation changing inline css
document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

function btn() {
  var dice = Math.floor(Math.random() * 6) + 1;
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  if (dice !== 1) {
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
      document.getElementById("current-1").textContent = "0";
      
      document.querySelector('.player-0-panel').classList.toggle('active')
      document.querySelector('.player-1-panel').classList.toggle('active')

  }
}
document.querySelector(".btn-roll").addEventListener("click", btn);
