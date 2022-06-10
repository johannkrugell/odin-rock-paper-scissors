// event listeners
const playerClicks = document.querySelectorAll('button'); //button event listeners
playerClicks.forEach(click => {click.addEventListener('click', playerClick, true)});

// variables update case
let countRounds = 0; 
let playerScore = 0;  // set player score to zero 
let computerScore = 0;

// capture player selection value
function playerClick(e) {
  if (countRounds < 5){
      countRounds += 1;
      e.target.innerText; //playerslection valuerock, paper or scissors
      playerSelection = e.target.innerText;
      computerPlay(); //call function to capture computer selection  
      playRound();
      return playerSelection
    }
  calcWinner(); 
  playerScore = 0;
  computerScore = 0;
  countRounds = 0;  
}   

function computerPlay() {
  let optionsRPS = ["rock","paper", "scissors"]; //rock,paper,scissors array
  let arrayIndexNumber = Math.floor(Math.random() * 3); //random number == array index 
  computerSelection = optionsRPS[arrayIndexNumber].toString(); 
  return computerSelection;
}

function rightCase(selection) {
  selection = selection.charAt(0).toUpperCase().concat(selection.slice(1));
  return selection;
}

function lowerCase(selection) {
  selection = selection.toString().toLowerCase();
  return selection;
}

function createElement(selection){
  let outputSelection = document.createElement("p");
  outputSelection.innerText = `You have selected ${selection}`;
  document.body.appendChild(outputSelection);
}

function playRound() { //play round Rock, paper, scissors
  console.log(`Rounds:${countRounds}`);
  
  playerSelection = lowerCase(playerSelection) //downcase the players selection
  let playerSelectionRightCase = rightCase(playerSelection); //correct case
  let computerSelectionRightCase = rightCase(computerSelection); //correct case 

  createElement(playerSelectionRightCase);
  createElement(computerSelectionRightCase);

        console.log(playerSelection);
        console.log(computerSelection);
        
    /* compare user vs. computer selection and determine winner */
    
    if (playerSelection === computerSelection){
        alert("It is a draw"); // player and computer selection match; display draw
        result = 2; 
        playerScore +=0;
        computerScore += 0; 
        return result;
    }
    /* Player wins */
    else if (playerSelectionRightCase === "rock" && computerSelection === "scissors" || 
             playerSelection === "paper" && computerSelection === "rock" || 
             playerSelection === "scissors" && computerSelection === "paper"){
            alert(`You win! ${playerSelectionRightCase} beats ${computerSelectionRightCase}`);
            playerScore += 1; 
            console.log(`Player Score update: ${playerScore}`);
            return playerScore;
        }     
    /* Computer wins */
    else if (computerSelection === "rock" && playerSelection === "scissors" || 
             computerSelection === "paper" && playerSelection === "rock" || 
             computerSelection === "scissors" && playerSelection === "paper"){
            alert(`You lose! ${computerSelectionRightCase} beats ${playerSelectionRightCase}`);
            computerScore += 1; 
            console.log(`Computer Score update: ${computerScore}`);
            return computerScore;
        } 
        
}

/* Function to play a game 
function game(){
    console.log("call game function")
    playerScore = parseInt(0);  // set player score to zero 
    computerScore =parseInt(0); // set computer score to zero
       
    for (let i = 0; i < 5; i++){ // play 5 rounds 
        console.log("in loop");
        console.log(i);
        playRound();
        
        let result = 0;
               // call playRound function   
        if (result === 1) {     // Check the result of the round; calc the score
            playerScore += 1;
            console.log(result);
        }else if (result === 0){
            computerScore += 1;
        }else if (result === 2){
            playerScore +=0;
            computerScore += 0;
        }  
    console.log(playerScore);

    };*/

    /* after 5 rounds determine the winner */ 
function calcWinner() {
  if (playerScore > computerScore ){
    alert(`Player wins. Player score: ${playerScore} Computer score: ${computerScore}`);
  } else if (computerScore > playerScore){
    alert(`Computer wins. Player score: ${playerScore} Computer score: ${computerScore}`);
  } else if (playerScore === computerScore){
    alert(`It is a draw. Player score: ${playerScore} Computer score: ${computerScore}`);
    }       
} 
    