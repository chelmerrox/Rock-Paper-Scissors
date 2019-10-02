 //JavaScript code for Rock, Paper, Scissors Game demo 
         
/*Play the Game on the console tab of the web browser's developer tools. The game is going to play against the computer.*/
        
 /*Variable Declarations and assignments*/

let playerSelection;
let possibleComputerChoices;
let computerSelection;
let playerScore = 0; 
let computerScore = 0;
let computerChoice;
let computerChoiceIndex;
let numberOfGameRounds = 0;

let message;

 let gameRoundsString = "";
 let playerScoreString = "";
 let computerScoreString = "";

 const rock_id = document.getElementById('rock');
 const paper_id = document.getElementById('paper');
 const scissors_id = document.getElementById('scissors');

 const rounds_span = document.getElementById('game-rounds');
 const playerScoreDisplay = document.getElementById('playerscoredisplay');
 const computerScoreDisplay = document.getElementById('computerscoredisplay');

 const displayMessage = document.getElementById('message');
 const finalMessage = document.getElementById('finalmessage');



 /*Function declarations*/



       
//A function that will randomly return either 'Rock', 'Paper' or 'Scissors'. 
//Using this function in the game makes the computer play
function computerPlay () {
           
     possibleComputerChoices = ["rock", "paper", "scissors"];
           
     computerChoiceIndex = Math.floor(Math.random() * possibleComputerChoices.length); 
           
     computerChoice = possibleComputerChoices[computerChoiceIndex];
     
     return computerChoice; //return the computerChoice as the value of this function

}

//A function that plays a single round of Rock Paper Scissors.
function playRound (playerSelection, computerSelection) {

     /*If player choice beats computer choice, increment player's score and return winning message on console.
    Or if player choice does not beat computer choice, increment computer's score and return losing message on console.
    Otherwise, do not increment player's score and computer's score and return a tie message on console*/

    if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'scissors' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'rock')) {
   
         //make playerScore increment and computerScore is still zero
         playerScore++;

         return ("You win! Your score: " + playerScore + " and Computer's score: " + computerScore) ;

    } else if ((playerSelection === 'scissors' && computerSelection === 'rock') ||
               (playerSelection === 'paper' && computerSelection === 'scissors') || 
               (playerSelection === 'rock' && computerSelection === 'paper')) {

         computerScore++;
       
         return ("You lose! " + computerSelection + " beats " + playerSelection + ". Your score: " + playerScore + " and Computer's score: " + computerScore);

    } else {

         computerScore;
         playerScore;

         return ("We're tied! Your score: " + playerScore + " and Computer's score: " + computerScore);

    }

}

//converts the numeric values of game rounds, player's score and computer's score to a numeric string
function convertNumberToString() {

     gameRoundsString = numberOfGameRounds.toString();

     playerScoreString = playerScore.toString();

     computerScoreString = computerScore.toString();
 }

 //prints the numeric strings of game rounds, player's score and computer's score onto the web page
 function printNumericText() {
    
     rounds_span.textContent = gameRoundsString;

     playerScoreDisplay.textContent = playerScoreString;

     computerScoreDisplay.textContent = computerScoreString;
 }

 //prints the message of a win/loss/tie in each round till the 5th and last round
 function printMessage() {

     displayMessage.textContent = message;

 }

 
 

/*A function that prints the player's and computer's score after the fifth and last round*/
function printFinalMessage () {

     let totalPlayerScore = playerScore;           //Store the total of the player's score from the 5 rounds into the variable
     let totalComputerScore = computerScore;         //Store the total of the player's score from the 5 rounds into the variable

    return "Good Game! Here are our scores. Your score: " + totalPlayerScore + " and My score: " +  totalComputerScore;

}




