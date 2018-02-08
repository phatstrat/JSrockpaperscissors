var weapons = ["rock", "paper", "scissors"];
var player;
var computer;

var playerScore = 0;
var computerScore = 0;

function game(){
	if (player == "rock" && computer == "paper"){
	  console.log("you lose!");
    computerScore += 1
	} else if (player == computer) {
	  console.log("its a tie!");
	} else if (player == "paper" && computer == "scissors"){
	  console.log("you lose");
    computerScore += 1
	} else if (player == "scissors" && computer == "rock"){
	  console.log("You lose");
    computerScore += 1
	} else {
    console.log("you win!")
	  playerScore += 1;
	}
}

while ((playerScore < 3) && (computerScore < 3)) {

  player = weapons[parseInt(Math.random() * weapons.length) % 3];
  computer = weapons[parseInt(Math.random() * weapons.length) % 3];
  game();
  console.log("computer has chosen " + computer + ", while " + player + " has chosen " + player);

};

if (playerScore == 3) {
  console.log("Jason Wins!")
} else {
  console.log("Computer Wins")
}
