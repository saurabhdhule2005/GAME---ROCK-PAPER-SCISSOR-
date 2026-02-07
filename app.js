let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Draw");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#F4D03F";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generate computer choise
    const compChoice = generateCompChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoice == compChoice){
        // Draw game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            // Comp = scissor OR paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // Comp = rock OR scissor
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // Comp = rock OR paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})