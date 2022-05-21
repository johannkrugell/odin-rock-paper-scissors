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
        console.log(playerSelection);
        console.log(computerSelection)

    /* compare user vs. computer selection and determine winner */
    if (playerSelection === computerSelection){
    /* if the player and computer have selected the same item display draw */
        alert("It is a draw");
        result = 2;  
        return result;

    /* Player wins */  
        } else if (playerSelection === "rock" && computerSelection === "scissors"){
            alert(`You win! ${playerSelectionRightCase} beats ${computerSelectionRightCase}`);
            result = 1; 
            return result;
        } else if (playerSelection === "paper" && computerSelection === "rock"){
            alert(`You win! ${playerSelectionRightCase} beats ${computerSelectionRightCase}`);
            result = 1; 
            return result;
        } else if (playerSelection === "scissors" && computerSelection === "paper"){
            alert(`You win! ${playerSelectionRightCase} beats ${computerSelectionRightCase}`);
            result = 1; 
            return result;
        
        /* Computer wins */  
        } else if (computerSelection === "rock" && playerSelection === "scissors"){
            alert(`You lose! ${computerSelectionRightCase} beats ${playerSelectionRightCase}`);
            result = 0; 
            return result;
        } else if (computerSelection === "paper" && playerSelection === "rock"){
            alert(`You lose! ${computerSelectionRightCase} beats ${playerSelectionRightCase}`);
            result = 0; 
            return result;
        } else if (computerSelection === "scissors" && playerSelection === "paper"){
            alert(`You lose! ${computerSelectionRightCase} beats ${playerSelectionRightCase}`);
            result = parseInt(0); 
            return result; 
        } 
}

/* Function to play a game */
function game(){
    /* set the score variable to zero */
    playerScore = parseInt(0);
    computerScore =parseInt(0);

    /* play 5 rounds of the game Rock, Paper Scissors */
    for (let i = 0; i <5; i++){ 
        /* call playRound function */
        playRound(prompt("Please enter selection"),computerPlay());
        /* Check the result of the round and adjust the score */
        if (result === 1) {
            playerScore += 1;
        }else if (result === 0){
            computerScore += 1;
        }else if (result === 2){
            playerScore +=0;
            computerScore += 0;
        }  
    }  
    
    /* after 5 rounds determine the winner */
    if (playerScore > computerScore ){
        alert(`Player wins. Player score: ${playerScore} Computer score: ${computerScore}`);
    } else if (computerScore > playerScore){
        alert(`Computer wins. Player score: ${playerScore} Computer score: ${computerScore}`);
    } else if (playerScore === computerScore){
        alert(`It is a draw. Player score: ${playerScore} Computer score: ${computerScore}`);
    }       
}
    
/* call the game function to play a game of Rock Paper Scissors */
game();