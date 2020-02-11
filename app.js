

window.onload = () => {
const result = document.querySelector(".answer");
const player = document.querySelectorAll(".player-choice button");
let computerScoreResult = 0;
let playerScoreResult = 0;
let computerScore = document.querySelector(".compScore");
let playerScore = document.querySelector(".userScore");


let playerMove;

for (let i = 0; i < player.length; i++) {
    player[i].addEventListener("click", () => {  
        playerMove = player[i].value
        const computer = Math.floor(Math.random() * 3); 
        const myArray = ["rock", "paper", "scissors"];
        const computerMove = myArray[computer];
        
        if (playerMove === "rock" && computerMove === "scissors" || 
            playerMove === "paper" && computerMove === "rock" ||
            playerMove === "scissors" && computerMove === "paper") {
            playerScoreResult++;
            result.innerHTML = "You Win!";
            playerScore.innerHTML = playerScoreResult; 
        } else if (computerMove === "rock" && playerMove === "scissors" || 
            computerMove === "paper" && playerMove === "rock" ||
            computerMove === "scissors" && playerMove === "paper") {
            computerScoreResult++;
            result.innerHTML = "You Lose!";
            computerScore.innerHTML = computerScoreResult;
        } else {
            result.innerHTML = "Its a Draw!";
        }
    })
}}
