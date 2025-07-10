let choices = document.querySelectorAll(".choice")
let you = document.querySelector(".you-div");
let computer = document.querySelector(".computer-div")
let result = document.querySelector(".result")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice =  choice.getAttribute("id")
  
        let options = ["stone","paper","scissor"]
        let compIndex = Math.floor(Math.random()*3)
        let computerChoice = options[compIndex]
       
        playGame(userChoice,computerChoice)
      })
})

function playGame(userChoice,computerChoice){

    if(userChoice === "stone"){
        you.innerText = "👊"
    }
else if(userChoice === "paper"){
    you.innerText = "✋"
}
else{
    you.innerText = "✌️"
}


if(computerChoice === "stone"){
    computer.innerText = "👊"
}
else if(computerChoice === "paper"){
computer.innerText = "✋"
}
else{
computer.innerText = "✌️"
}



    if(userChoice === computerChoice){
      result.innerText = " Draw"
      result.style.color = "white"
    }
    else if(userChoice === "stone" && computerChoice === "scissor" || userChoice === "paper" && computerChoice=== "stone" || userChoice ==="scissor" && computerChoice ==="paper"){
        result.innerText = "You Wine"
        result.style.color = "white"
    }
    else{
       result.innerText = "You Lose"
       result.style.color = "white"
    }
}