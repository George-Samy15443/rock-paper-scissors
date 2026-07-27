let humanScore = 0
let computerScore = 0

let humanSelection = getHumanChoice()
let computerSelection = getComputerChoice()

//get computer choice logic
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1
    // console.log(randomNumber);
    
    let guess = ''
    if(randomNumber === 1)
        guess = 'rock'
    else if(randomNumber === 2)
        guess = 'paper'
    else
        guess = 'scissors'
    return guess
}

// console.log(getComputerChoice());


//get human choice logic
function getHumanChoice(){
    let userChoice = prompt('Enter rock, paper or scissors');
    return userChoice.toLowerCase()
}

// console.log(getHumanChoice());

//play a single round logic
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log(`It's a tie! you and the computer chose ${humanChoice}.`);
        return
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++
        console.log("You won ! paper beats rock.");
        return
    } else if (humanChoice === 'rock' && computerChoice === 'paper'){
        computerScore++
        console.log("You lost! paper beats rock.");
        return
    } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
        computerScore++
        console.log("You lost! scissors beats paper.");
        return
    } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++
        console.log("You won! scissors beats paper.");
        return
    } else if (humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++
        console.log("You won! rock beats scissors.");
        return
    } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        computerScore++
        console.log("You lost! rock beats scissors.");
        return
    }
}



playRound(humanSelection, computerSelection)

// console.log(humanSelection);
// console.log(computerSelection);
// console.log(humanScore);
// console.log(computerScore);



