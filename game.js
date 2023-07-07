function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    let randIndex = Math.floor(Math.random() * 3)
    return choices[randIndex];
}

function playRound(playerSelection, computerSelection){
  //make player selection lower-case
  playerSelection = playerSelection.toLowerCase();

  //IF player selection and computer selection is equal then return "Tie!"
  if(playerSelection == computerSelection){
    for(let i = 0; i < 2; i++) {
        score[i] = score[i] + 1;
    }
    return "Tie!"
  }
  switch (playerSelection) {
  //Other wise IF player selection "rock" and computer selection "scissors" then return "Win! rock beats scissors" else "Lose! Paper beats rock"
    case 'rock':
        if(computerSelection == 'scissors'){
            score[0] = score[0] + 1;
            return "Win! Rock beats scissors."
        }
        else {
            score[1] = score[1] + 1;
            return "Lose! Paper beats rock.";
        }
  //IF player selection "paper" and computer selection "rock" ther return "Win! paper beats rock" else "Lose! Scissors beats paper"
    case 'paper':
        if(computerSelection == 'rock'){
            score[0] = score[0] + 1;
            return "Win! Paper beats rock."
        }
        else {
            score[1] = score[1] + 1;
            return "Lose! Scissors beats paper.";
        }
  //IF player selection "scissors" and computer selection "paper" ther return "Win! scissors beats paper" else "Lose! Rock beats scissors"
    case 'scissors':
        if(computerSelection == 'paper'){
            score[0] = score[0] + 1;
            return "Win! Scissor beats paper."
        }
        else {
            score[1] = score[1] + 1;
            return "Lose! Rock beats scissors.";
        }
    }
}

function getWinner() {
     if (score[0] < score[1]) {
       return "COMPUTER";
     } else if (score[0] > score[1]) {
       return "PLAYER";
     } else {
       return "TIE";
     }
}

function game(playerSelection) {
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      display.innerHTML = `Computer selection: ${computerSelection} <br> ${result}`;
      if(score[0] == 3 || score[1] == 3) {
        display.innerHTML += `<br>Player: ${score[0]} - Computer: ${score[1]}<br>`;
        display.innerText += "Winner : " + getWinner();
        score = [0, 0];
      }
}

let score = [0, 0];
const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', () => game(btn.getAttribute('choice'))))

 