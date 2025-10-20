// const { use } = require("react");
let uscore=document.getElementById("user-score")
let compcore=document.getElementById("computer-score")
let userScore=0
let compscore=0
const choice = document.querySelectorAll(".choice");
let msg= document.querySelector("#msg")
choice.forEach((choice) => {
   choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id")
        console.log(userChoice)
        playGame(userChoice)
   }) 
});
const genCompchoice = () =>{
    let option=["rock","paper","scissors"]
    let index = Math.random()*3
    index=Math.floor(index,1)
    return option[index];
}
const playGame = (userChoice)=>{
    console.log("user choice",userChoice)
    const compChoice=genCompchoice();
    console.log(compChoice)

    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice === "scissor" ?false :true
        }
        else{
            userWin=compChoice === "rock" ? false:true;
        }
        shwoWinner(userWin)
    }

}
const shwoWinner = (userWin) =>{
    if(userWin){
        console.log("you win")
        msg.innerText = "You winn bro"
        msg.style.backgroundColor = "green"
        userScore+=1
        uscore.innerText=`${userScore}`
    }
    else{
        console.log("you lost")
        msg.innerText = "You lost bro"
        msg.style.backgroundColor = "red"
        compscore+=1
        compcore.innerText=`${compscore}`
    }
}

const drawGame = () =>{
    console.log("game was draw...")
    msg.innerText = "You draw bro"
    msg.style.backgroundColor = "cyan"

}