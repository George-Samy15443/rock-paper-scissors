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

function getHumanChoice(){
    let userChoice = prompt('Enter rock, paper or scissors');
    return userChoice
}

// console.log(getHumanChoice());
