var playerOneChoice = window.prompt("player 1");
var playerTwoChoice = prompt("player 2");

var winner =
  playerOneChoice === "rock" && playerTwoChoice === "paper"
    ? "player 2"
    : playerOneChoice === "rock" && playerTwoChoice === "scissors"
      ? "player 1"
      : playerOneChoice === playerTwoChoice
        ? "it is a tie"
        : "";
console.log(winner);
