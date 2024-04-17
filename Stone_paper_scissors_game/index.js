var computerNum = 0;
var playerNum = 0;

function ourChoice(e) {
  let compChoice = ["paper", "rock", "scissors"];
  let compTurn = document.getElementById("compTurn")
  let random = Math.floor(Math.random() * compChoice.length);
  
  let ourChoice = e.getAttribute("value");
  compTurn.innerHTML = compChoice[random];
  
  
  if(ourChoice == "paper" && compChoice[random] == "rock" || ourChoice == "rock" && compChoice[random] == "scissors" || ourChoice == "scissors" && compChoice[random] == "paper"){
    playerNum += 1;
    your_point.innerHTML = playerNum;
  } else if(ourChoice == compChoice[random]){
    setTimeout(() => {
     alert("It's a tie!"); 
    }, 100);
  } else{
    computerNum += 1;
    document.getElementById("comp_point").innerHTML = computerNum;
  }
}
