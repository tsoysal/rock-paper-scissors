function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    let randIndex = Math.floor(Math.random() * 3)
    return choices[randIndex];
}

function playRound(playerSelection, computerSelection){
  //make player selection lower-case
  playerSelection = playerSelection.toLowerCase();
  //display selections
  console.log(`Player selection is ${playerSelection}`);
  console.log(`Computer selection is ${computerSelection}`);
  //IF player selection and computer selection is equal then return "Tie!"
  if(playerSelection == computerSelection){
    return "Tie!"
  }
  switch (playerSelection) {
  //Other wise IF player selection "rock" and computer selection "scissors" then return "Win! rock beats scissors" else "Lose! Paper beats rock"
    case 'rock':
        return (computerSelection == 'scissors' ? "Win! Rock beats scissors." : "Lose! Paper beats rock.");
  //IF player selection "paper" and computer selection "rock" ther return "Win! paper beats rock" else "Lose! Scissors beats paper"
    case 'paper':
        return (computerSelection == 'rock' ? "Win! Paper beats rock." : "Lose! Scissors beats paper.");
  //IF player selection "scissors" and computer selection "paper" ther return "Win! scissors beats paper" else "Lose! Rock beats scissors"
    case 'scissors':
        return (computerSelection == 'paper' ? "Win! Scissors beats paper" : "Lose! Rock beats scissors.");
    default:
        return ("Unexpected error!");
  }
}

function game() {

    for (let i = 0; i < 3; i++) {
      const playerSelection = prompt("Enter selection");
      const computerSelection = getComputerChoice();
      
      console.log(playRound(playerSelection, computerSelection));
    }
}

game();

