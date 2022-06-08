// event listeners
const playerClicks = document.querySelectorAll('button'); //button event listeners
playerClicks.forEach(click => {click.addEventListener('click', playerClick)});

// capture player selection value
function playerClick(e) {
    e.target.innerText; //playerslection valuerock, paper or scissors
    playerSelection = e.target.innerText;
    computerPlay(); //call function to capture computer selection 
    playRound();  //play a round of rock, paper, scissors
}   

function computerPlay() {
    let optionsRPS = ["rock","paper", "scissors"]; //rock,paper,scissors array
    let arrayIndexNumber = Math.floor(Math.random() * 3); //random number == array index 
    computerSelection = optionsRPS[arrayIndexNumber].toString(); 
}

function playRound(playerClick, computerPlay) { //play round Rock, paper, scissors
      
    const outputPlayerSelection = document.createElement("p");
    outputPlayerSelection.innerText = `You have selected ${playerSelection}`;
    document.body.appendChild(outputPlayerSelection);

    
    playerSelection = playerSelection.toString().toLowerCase(); // downcase the players selection
   
    /* create correct case for player and computer selection to return on winning
       or losing message */
    let playerSelectionRightCase = 
        playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1));
    
    let computerSelectionRightCase = 
        computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1));
        
    const outputComputerSelection = document.createElement("p");
        outputComputerSelection.innerText = `I have selected ${computerSelectionRightCase}`;
        document.body.appendChild(outputComputerSelection);    
        console.log(playerSelection);
        console.log(computerSelection);
    /* compare user vs. computer selection and determine winner */
    let result = 0;
    if (playerSelection === computerSelection){
        alert("It is a draw"); // player and computer selection match; display draw
        result = 2;  
        return result;

    /* Player wins */
        } else if (playerSelectionRightCase === "rock" && computerSelection === "scissors"){
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
        console.log(result);
        return result;
}

/* Function to play a game 
function game(){
    playerScore = parseInt(0);  // set player score to zero 
    computerScore =parseInt(0); // set computer score to zero
 
    playRound(playerClick(),computerPlay());
    if (result === 1) {     // Check the result of the round; calc the score
        playerScore += 1;
    }else if (result === 0){
        computerScore += 1;
    }else if (result === 2){
        playerScore +=0;
        computerScore += 0;
    }

    /*
    for (let i = 0; i <5; i++){ // play 5 rounds
        playRound(playerClick(),computerPlay()); // call playRound function   
        if (result === 1) {     // Check the result of the round; calc the score
            playerScore += 1;
        }else if (result === 0){
            computerScore += 1;
        }else if (result === 2){
            playerScore +=0;
            computerScore += 0;
        }  
    };*/
    

    /* after 5 rounds determine the winner 
    if (playerScore > computerScore ){
        alert(`Player wins. Player score: ${playerScore} Computer score: ${computerScore}`);
    } else if (computerScore > playerScore){
        alert(`Computer wins. Player score: ${playerScore} Computer score: ${computerScore}`);
    } else if (playerScore === computerScore){
        alert(`It is a draw. Player score: ${playerScore} Computer score: ${computerScore}`);
    }       
}
    */
