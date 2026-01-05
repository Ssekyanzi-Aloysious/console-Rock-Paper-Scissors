const choices = ["Rock", "Paper", "Scissors"];
let compChoice;
let playerChoice;
let playerScore = 0;
let compScore = 0;

function getCompChoice() {
  compChoice = Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
  playerChoice =
    Number(prompt("Enter 1 for Rock, 2 for Paper, 3 for Scissors")) - 1;
}

for (i = 0; i < 5; i++) {
  console.log(`Round ${1}:`);
  getPlayerChoice();
  console.log(`You chose ${choices[playerChoice]}`);
  getCompChoice();
  console.log(`Computer chose ${choices[compChoice]}`);

  //----------------------------------------------------- Game logic-------------------------------------------------
  if (choices[playerChoice] == "Rock" && choices[compChoice] == "Scissors") {
    console.log("Player wins!");
    console.log(".............................................................");
    playerScore += 1;
  } else if (
    choices[playerChoice] == "Paper" &&
    choices[compChoice] == "Rock"
  ) {
    console.log("Player wins!");
    console.log(".............................................................");
    playerScore += 1;
  } else if (
    choices[playerChoice] == "Scissors" &&
    choices[compChoice] == "Paper"
  ) {
    console.log("Player wins!");
    console.log(".............................................................");
    playerScore += 1;
  } else if (choices[playerChoice] == choices[compChoice]) {
    console.log("Draw!");
    console.log(".............................................................");
  } else {
    console.log("Computer wins!");
    console.log(".............................................................");
    compScore += 1;
  }

  // else if(choices[playerChoice] == "Rock" && choices[compChoice] == "Scissors"){

  // }

  console.log(`Scores:Player ${playerScore}  || Computer ${compScore}`);
}

if(playerScore > compScore){
    alert("You win!!!")
}else if(playerScore == compScore){
    alert("Its a tie")
}else{
    alert("You lost!")
}