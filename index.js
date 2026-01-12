const main = document.querySelector(".main");
const btn = document.querySelectorAll("#btn");
const choices = ["Rock", "Paper", "Scissors"];
let compChoice;
let playerChoice;
let playerScore = 0;
let compScore = 0;

const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const compScoreDisplay = document.querySelector("#compScoreDisplay");

// Generate computer choice
function getCompChoice() {
  compChoice = choices[Math.floor(Math.random() * 3)];
}

btn.forEach((b) => b.addEventListener("click", playRound));

function declareWinner(winner) {
  alert(`${winner} WON!!!`);
  playerScore = 0;
  compScore = 0;
  const logs = document.querySelectorAll(".log");
  logs.forEach((log)=>log.remove());
  playerScoreDisplay.textContent = 0;
  compScoreDisplay.textContent = 0;
}

function playRound(e) {
  getCompChoice();
  playerChoice = e.target.textContent;

  if (playerChoice == "Rock" && compChoice == "Scissors") {
    let p = document.createElement("p");
    p.textContent = `Computer chose ${compChoice}: Player wins!`;
    p.classList.add("log")
    main.append(p);

    playerScore += 1;
    playerScoreDisplay.textContent = playerScore;
    if (playerScore == 5) declareWinner("Player");
  } else if (playerChoice == "Paper" && compChoice == "Rock") {
    let p = document.createElement("p");
    p.textContent = `Computer chose ${compChoice}: Player wins!`;
    p.classList.add("log")
    main.append(p);

    playerScore += 1;
    playerScoreDisplay.textContent = playerScore;
    if (playerScore == 5) declareWinner("Player");
  } else if (playerChoice == "Scissors" && compChoice == "Paper") {
    let p = document.createElement("p");
    p.textContent = `Computer chose ${compChoice}: Player wins!`;
    p.classList.add("log")
    main.append(p);

    playerScore += 1;
    playerScoreDisplay.textContent = playerScore;
    if (playerScore == 5) declareWinner("Player");
  } else if (playerChoice == compChoice) {
    let p = document.createElement("p");
    p.textContent = "Its a tie!";
    p.classList.add("log")
    main.append(p);
  } else {
    let p = document.createElement("p");
    p.textContent = `Computer chose ${compChoice}: Computer wins!`;
    p.classList.add("log")
    main.append(p);
    compScore += 1;
    compScoreDisplay.textContent = compScore;
    if (compScore == 5) declareWinner("Computer");
  }
}
