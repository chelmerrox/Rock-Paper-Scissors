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









/*This is the code for the game itself. 5 rounds of the game will be played against the computer  i.e player vs computer.*/
for (let gameRounds = 1; gameRounds <= 5; gameRounds++) {
           
     playerSelection = window.prompt("Let's play Rock, Paper, Scissors! Choose either one: ",);
       
     playerSelection = playerSelection.toLowerCase();         //makes the input (a string) to lower case and store in the playerSelection variable

     //If the value in the playerSelection variable is either 'rock or 'paper' or 'scissors', 
     //then execute the following code in order from top to bottom
     if ((playerSelection === 'rock') || (playerSelection === 'paper') || (playerSelection === 'scissors'))  {
               
         computerSelection = computerPlay();                

         let message = playRound(playerSelection, computerSelection);        

         console.log("My choice: " + computerSelection);      

         console.log(message);        //prints the winning/losing/tie message and the player's and computer's score on the console 

    } else {         //Otherwise, when value of playerSelection is either empty or when the string is not equal to 'rock/paper/scissors' or when value is not a string, then execute code below

         //keep repeating the code below  (asking for the correct input) until the right input is being entered - not finished yet with this part of the code
         while ((playerSelection !== 'rock') || (playerSelection !== 'paper') || (playerSelection !== 'scissors')); {
                   
             playerSelection = window.prompt("Please choose either Rock, Paper or Scissors: ",);

         } 
     }

     numberOfGameRounds = gameRounds;       
       
 }

 let totalPlayerScore = playerScore;           
 let totalComputerScore = computerScore;        

 alert("Good Game! Here are our scores. Your score: " + totalPlayerScore + " and My score: " +  totalComputerScore);   
