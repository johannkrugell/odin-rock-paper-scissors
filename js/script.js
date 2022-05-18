/* Random select Rock, Paper or scissors */

function computerPlay() {
  /* create array with options rock, paper, scissors */
  let optionsRPS = ["rock","paper", "scissors"];

  /* randomly generate a number between 0 and 2 */
  let arrayIndexNumber = Math.floor(Math.random() * 3);
  
  /* select the element in the array where the array index number matches the 
  random number */
  console.log(optionsRPS[arrayIndexNumber]);
}

computerPlay();

