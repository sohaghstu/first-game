let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".message");
let userWin = document.querySelector(".userScore");
let comWin = document.querySelector(".compScore");


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
       let userChoice = choice.getAttribute("id");
       playGame(userChoice);
})
})
const genComputerChoice= ()=>{
    let options = ["rock", "paper", "scissors"];
    let Index = Math.floor(Math.random()*3)
    return options[Index];
}
let draw = ()=>{
    msg.innerHTML = "Game was draw. Try again"
    msg.style.backgroundColor= "rgb(1, 1, 36)" ;

}
const playGame = (userChoice)=>{
const compChoice = genComputerChoice();
if(userChoice === compChoice){
    draw();
}
else if (userChoice==="paper"){
    if(compChoice ==="rock"){
        msg.innerHTML = "You beat computer"
        msg.style.backgroundColor= "green" ;
        userScore++;
        userWin.innerHTML = userScore;
    }
    else if (compChoice === "scissors"){
        msg.innerHTML = "Computer beats your choice"
        msg.style.backgroundColor= "red" ;
        compScore++;
        comWin.innerHTML= compScore;
    }
    
}
else if (userChoice==="rock"){
    if(compChoice==="paper"){
        msg.innerHTML = "Computer beats your choice"
        msg.style.backgroundColor= "red" ;
        compScore++;
        comWin.innerHTML= compScore;
    }
    else if (compChoice==="scissors"){
        msg.innerHTML = "You beat computer"
        msg.style.backgroundColor= "green" ;
        userScore++;
        userWin.innerHTML = userScore;
    }
}
else{
    if(compChoice==="rock"){
        msg.innerHTML = "Computer beats your choice"
        msg.style.backgroundColor= "red" ;
        compScore++;
        comWin.innerHTML= compScore;
    }
    else if (compChoice==="paper"){
        msg.innerHTML = "You beat computer"
        msg.style.backgroundColor= "green" ;
        userScore++;
        userWin.innerHTML = userScore;
    }
}
}