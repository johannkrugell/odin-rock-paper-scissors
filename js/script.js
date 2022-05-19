/* Random select Rock, Paper or scissors */
function computerPlay() {
  /* create array with options rock, paper, scissors */
  let optionsRPS = ["rock","paper", "scissors"];

  /* randomly generate a number between 0 and 2 */
  let arrayIndexNumber = Math.floor(Math.random() * 3);
  
  /* select the element in the array where the array index number matches the 
  random number */
  console.log(optionsRPS[arrayIndexNumber].toString());
  return optionsRPS[arrayIndexNumber].toString();
}

/* Function to play a round of rock, paper, scissors */
 function playRound(playerSelection, computerSelection) {
    /* downcase the players selection */
    playerSelection = playerSelection.toString().toLowerCase();
   
    /* create correct case for player and computer selection to return on winning
       or losing message */
    let playerSelectionRightCase = 
        playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1));
    
    let computerSelectionRightCase = 
        computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1));
   
    /* compare user vs. computer selection and determine winner */
    if (playerSelection === computerSelection){
    /* if the player and computer have selected the same item display draw */
      return "It is a draw";

    /* Player wins */  
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return `You win! ${playerSelectionRightCase} beats ${computerSelectionRightCase}`;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return `You win! ${playerSelectionRightCase} beats ${computerSelectionRightCase}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return `You win! ${playerSelectionRightCase} beats ${computerSelectionRightCase}`;
    /* Computer wins */  
    } else if (computerSelection === "rock" && playerSelection === "scissors"){
        return `You lose! ${computerSelectionRightCase} beats ${playerSelectionRightCase}`;
    } else if (computerSelection === "paper" && playerSelection === "rock"){
        return `You lose! ${computerSelectionRightCase} beats ${playerSelectionRightCase}`;
    } else if (computerSelection === "scissors" && playerSelection === "paper"){
        return `You lose! ${computerSelectionRightCase} beats ${playerSelectionRightCase}`; 
  } 
}

 /* Call round of rock, paper, scissors */

 let game = playRound(prompt("Please enter selection"),computerPlay());

 alert(game);