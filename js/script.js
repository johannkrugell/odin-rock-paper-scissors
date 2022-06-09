// event listeners
const playerClicks = document.querySelectorAll('button'); //button event listeners
playerClicks.forEach(click => {click.addEventListener('click', playerClick, true)});

// variables update case
let computerSelectionRightCaseOutput;

// capture player selection value
function playerClick(e) {
    e.target.innerText; //playerslection valuerock, paper or scissors
    playerSelection = e.target.innerText;
    computerPlay(); //call function to capture computer selection  
    playRound();
    return playerSelection
}   

function computerPlay() {
    let optionsRPS = ["rock","paper", "scissors"]; //rock,paper,scissors array
    let arrayIndexNumber = Math.floor(Math.random() * 3); //random number == array index 
    computerSelection = optionsRPS[arrayIndexNumber].toString(); 
    return computerSelection;
}

function RightCase(selection){
  selection = selection.charAt(0).toUpperCase().concat(computerSelection.slice(1));
  return selection;
}

function playRound() { //play round Rock, paper, scissors
   

    const outputPlayerSelection = document.createElement("p");
    outputPlayerSelection.innerText = `You have selected ${playerSelection}`;
    document.body.appendChild(outputPlayerSelection);

    
    playerSelection = playerSelection.toString().toLowerCase(); // downcase the players selection
   
    /* create correct case for player and computer selection to return on winning
       or losing message */
    let playerSelectionRightCase = RightCase(playerSelection);
        
    let computerSelectionRightCase = RightCase(computerSelection);
        
    const outputComputerSelection = document.createElement("p");
        outputComputerSelection.innerText = `I have selected ${computerSelectionRightCase}`;
        document.body.appendChild(outputComputerSelection);    
        console.log(playerSelection);
        console.log(computerSelection);
        
    /* compare user vs. computer selection and determine winner */
    
    if (playerSelection === computerSelection){
        alert("It is a draw"); // player and computer selection match; display draw
        result = 2;  
        return result;
    }
    /* Player wins */
    else if (playerSelectionRightCase === "rock" && computerSelection === "scissors" || 
             playerSelection === "paper" && computerSelection === "rock" || 
             playerSelection === "scissors" && computerSelection === "paper"){
            alert(`You win! ${playerSelectionRightCase} beats ${computerSelectionRightCase}`);
            result = 1; 
            return result;
        }     
    /* Computer wins */
    else if (computerSelection === "rock" && playerSelection === "scissors" || 
             computerSelection === "paper" && playerSelection === "rock" || 
             computerSelection === "scissors" && playerSelection === "paper"){
            alert(`You lose! ${computerSelectionRightCase} beats ${playerSelectionRightCase}`);
            result = 0; 
            return result;
        } 
}

/* Function to play a game */
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

    };

    /* after 5 rounds determine the winner */ 
    if (playerScore > computerScore ){
        alert(`Player wins. Player score: ${playerScore} Computer score: ${computerScore}`);
    } else if (computerScore > playerScore){
        alert(`Computer wins. Player score: ${playerScore} Computer score: ${computerScore}`);
    } else if (playerScore === computerScore){
        alert(`It is a draw. Player score: ${playerScore} Computer score: ${computerScore}`);
    }       
}
    