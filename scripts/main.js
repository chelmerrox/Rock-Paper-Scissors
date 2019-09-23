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
let choiceValid = false;
let finalMessage;


/*Function declarations*/

/*A function that asks for player's choice and changes string input to lower case*/
function askChoice () {
             
     //Asks question, player gives input and stores it in playerSelection variable
      let playerChoice= window.prompt("Let's play Rock, Paper, Scissors! Choose either one: ",);

      playerChoice= playerChoice.toLowerCase();         //makes the input (a string) to lower case and store in the playerSelection variable

      return playerChoice;
  }

/*A function that checks that the player's choice is rock/paper/scissors*/
function checkChoice(selection) {
     if ((playerSelection === 'rock') || (playerSelection === 'paper') || (playerSelection === 'scissors'))
         return true;
         return false;
 }

       
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

 /*A function that executes all code that plays the game and keeps count of the number of rounds played*/
 function game() {
     computerSelection = computerPlay();                //generate a random choice for the computer by executing the code in the computerPlay() function and store in computerSelection

     var message = playRound(playerSelection, computerSelection);        //executes the code in the playRound(playerSelection, computerSelection) function

     console.log("My choice: " + computerSelection);      //prints the computer's choice on console

     console.log(message);        //prints the winning/losing/tie message and the player's and computer's score on the console 

     numberOfGameRounds++;

     console.log("Round: " + numberOfGameRounds);  

}

/*A function that prints the player's and computer's score after the fifth and last round*/
function printFinalMessage () {

     let totalPlayerScore = playerScore;           //Store the total of the player's score from the 5 rounds into the variable
     let totalComputerScore = computerScore;         //Store the total of the player's score from the 5 rounds into the variable

    return "Good Game! Here are our scores. Your score: " + totalPlayerScore + " and My score: " +  totalComputerScore;

}

