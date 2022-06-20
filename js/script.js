// add event listeners to the options Rock, Paper or Scissors
const playerClicks = document.querySelectorAll('button'); 
playerClicks.forEach(click => {click.addEventListener('click', playerClick, true)});

// set rounds and player and computer scores to zero
let countRounds = 0; 
let playerScore = 0;  
let computerScore = 0;

/* The DOM elements will display the score during 
   the round the element values are updating using 
   updateScoreElement()
*/
const playerScoreElement = document.createElement("p");
playerScoreElement.setAttribute("id","playerScoreNumber");
const computerScoreElement = document.createElement("p");
computerScoreElement.setAttribute("id","computerScoreNumber");

const calcWinner = document.createElement("p");
calcWinner.setAttribute("id", "calcWinner");

const roundNumber = document.createElement("p");
roundNumber.setAttribute("id","roundNumber");

/* Set the number of seconds before the selection, round results or game results
   are displayed
*/
const outputTimeWinner = 5000;
const outputPlayerSelectionTime = 1000;
const outputComputerSelectionTime = 4000;
const outputRoundResultTime = 12000;
const outputScoreTime = 14000;


/* When a player selects an options
   the number of rounds are incremented by 1
   previous elements in the DOM are removed
   the players selection value is recorded and assigned to playerSelection
   the computers selection value is recored
   both computerSelection and playerSelection values are passed to playRound
*/
function playerClick(e) {
  
  countRounds += 1; 
  if (countRounds <= 5) {  
    removeElement(); 
    removeRoundResult(); 
    console.log(e);
    e.currentTarget.className;  
    playerSelection = e.currentTarget.className; 
   
    computerPlay(); 
    playRound(); 
    return playerSelection
  }
}   

/* The computers selection is created by randomly 
   selecting a number between 1 and 3
   the number is matched to the array index number to return that
   value in the array
*/
function computerPlay() { 
  let optionsRPS = ["rock","paper", "scissors"]; 
  let arrayIndexNumber = Math.floor(Math.random() * 3);  
  computerSelection = optionsRPS[arrayIndexNumber].toString(); 
  return computerSelection;
}

// Update the case to show correctly in the DOM element
function rightCase(selection) { 
  selection = selection.charAt(0).toUpperCase().concat(selection.slice(1));
  return selection;
}

/* Downcase the selection to be able to compare 
   the player and computer selections
*/
function lowerCase(selection) { 
  selection = selection.toString().toLowerCase();
  return selection;
}

/* Each time a player/computer makes a selection the selection
   div is found and updated with the player/computers selection   
*/
function createElement(selection, selectionType) {
  const outputPlayerSelection = document.getElementById("playerSelection"); 
  const outputComputerSelection = document.getElementById("computerSelection");
  const audioPlayerSelection = document.getElementById(`audioPlayer${selection}`) 
  const audioComputerSelection = document.getElementById(`audioComputer${selection}`) 
  const audioComputerBuildUp = document.getElementById("audioSelectionBuildUp") 
  const updateSelection = document.createElement("p");
  updateSelection.setAttribute("id","roundSelection");
  if (selectionType == "player") {
    updateSelection.innerText = `${selection}`;
    audioPlayerSelection.play();
    setTimeout(() => {outputPlayerSelection.appendChild(updateSelection)},
                      outputPlayerSelectionTime);
    
  }
  else {
    updateSelection.innerText = `${selection}`;
    audioComputerBuildUp.play();
        
    setTimeout(()=> {audioComputerSelection.play()  }, outputComputerSelectionTime);
   
    setTimeout(() => {outputComputerSelection.appendChild(updateSelection)},
                      outputComputerSelectionTime);
  }
}

/* Removes the elements create in prior rounds that displayed 
   the players/computers selections 
*/
function removeElement() { 
  const element = document.querySelectorAll("#roundSelection");
  for (i = 0; i < element.length; i++) {
    element[i].remove();  
  }
}

/* If it is the first round add the score element to the DOM tree
   subsequent rounds update the score element value. If the last
   round has been played calculate who the winner is
*/
function updateScoreElement() {
  if (countRounds == 1){
    document.getElementById("playerScores").appendChild(playerScoreElement);
    document.getElementById("computerScores").appendChild(computerScoreElement);
    updateScoreElementValue();
  } 
  else if (countRounds < 5 ) {
    updateScoreElementValue();
  } 
  else if (countRounds === 5) {
    updateScoreElementValue();
    setTimeout(function() { createElementWinner() }, outputTimeWinner); 
    removeRoundResult(); 
  }
}

function updateScoreElementValue() {
  playerScoreElement.innerText = `${playerScore}`;
  computerScoreElement.innerText = `${computerScore}`;
}

/* updates the round number on the screen */
function updateRound() {
  document.getElementById("roundCounter").appendChild(roundNumber);
  roundNumber.innerText = `ROUND: ${countRounds}`;
}

function removeScoreElement() {
  document.getElementById("playerScore").remove();
  document.getElementById("computerScore").remove();
}

/* Function is called from the playRound to display the message if the player 
   or computer has won or if it is a draw. after displaying the result if the 
   player clicks for another round the result is removed and a new roundResult is displayed
*/
function displayRoundResult(computerSelectionRightCase,         
                            playerSelectionRightCase, roundResult) {
  let result = document.createElement("p");
  result.setAttribute("id","result");
  const audioRoundResult = document.getElementById(`audioRoundResult${roundResult}`) 
  switch (roundResult) {
    case "draw":
      result.innerText = `It is a draw`;
      audioRoundResult.play();
      break;
    case "playerWins":
      result.innerText = `You win! ${playerSelectionRightCase} beats ${computerSelectionRightCase}`;  
      audioRoundResult.play();
      break;
      break;
    case "computerWins":
      result.innerText = `You lose! ${computerSelectionRightCase} beats ${playerSelectionRightCase}`;
      audioRoundResult.play();
      break;
  }
  document.getElementById("roundResult").appendChild(result);
}

function removeRoundResult() { 
  if (countRounds > 1) {
    document.getElementById("result").remove();
  }
}

/* The function is called to calculate the winner and update the DOM tree
   with the result. The function is called when the number of rounds played
   equals five rounds
*/
function createElementWinner(){
  if (playerScore > computerScore ){
    calcWinner.innerText =`You win! ${playerScore} : ${computerScore}`;
  } else if (computerScore > playerScore){
    calcWinner.innerText = `You lose! ${playerScore} : ${computerScore}`;
  } else if (playerScore === computerScore){
    calcWinner.innerText = `It is a draw! ${playerScore} : ${computerScore}`;
  }
  document.getElementById("winner").appendChild(calcWinner) 
}

function playRound() { 
  console.log(`Rounds:${countRounds}`);
 
  // set case
  playerSelection = lowerCase(playerSelection) 
  let playerSelectionRightCase = rightCase(playerSelection); 
  let computerSelectionRightCase = rightCase(computerSelection);  
  
  // create elements to output player and computer selections
  setTimeout(function() {
    createElement(playerSelectionRightCase,"player");
  },outputPlayerSelectionTime);
 
  setTimeout(function() {
    createElement(computerSelectionRightCase,"computer");
  }, outputComputerSelectionTime);
  
  updateRound(countRounds);
  console.log(playerSelection);
  console.log(computerSelection);
        
  /* compare user vs. computer selection and determine winner */
    
  if (playerSelection === computerSelection) {
    playerScore +=0;
    computerScore += 0;
    roundResult = "draw";
    setTimeout(() => { displayRoundResult(computerSelectionRightCase,       
                                      playerSelectionRightCase,roundResult);  
    }, outputRoundResultTime);
    setTimeout(() => { updateScoreElement() }, outputScoreTime);   
  }
  else if (playerSelection === "rock" && computerSelection === "scissors" || 
           playerSelection === "paper" && computerSelection === "rock" || 
           playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1; 
    roundResult = "playerWins"
    setTimeout(() => { displayRoundResult(computerSelectionRightCase,     
                                        playerSelectionRightCase, roundResult);
    }, outputRoundResultTime)      
    setTimeout(() => { updateScoreElement() }, outputScoreTime)
    console.log(`Player Score update: ${playerScore}`);
  }     

  else if (computerSelection === "rock" && playerSelection === "scissors" || 
          computerSelection === "paper" && playerSelection === "rock" || 
          computerSelection === "scissors" && playerSelection === "paper") {               
    computerScore += 1; 
    roundResult = "computerWins";
    setTimeout(() => { displayRoundResult(computerSelectionRightCase, 
                                        playerSelectionRightCase, roundResult);
    }, outputRoundResultTime);
    setTimeout(() => { updateScoreElement() }, outputScoreTime);    
        console.log(`Computer Score update: ${computerScore}`);
  }     
}