let button = document.getElementById("start");
button.addEventListener("click", function(){
  document.getElementById("gamePage").style.display = "block";
  document.getElementById("landingPage").style.display = "none";

  document.getElementById("restart").style.display = "block";
  }
);

let button2 = document.getElementById("restart");
button2.addEventListener("click", function(){
  document.getElementById("gamePage").style.display = "none";
  document.getElementById("landingPage").style.display = "block";

  document.getElementById("restart").style.display = "none";
  }
);

let playerOne = document.getElementById("link");
let playerTwo = document.getElementById("kirby");
let moveVarOne = 0;
let moveVarTwo = 0;

function movePlayers(event) {
  console.log(event)
  console.log(playerOne.style.left);
  if(event.keyCode == 90){
    moveVarOne = moveVarOne + 4;
    playerOne.style.left = moveVarOne + "%";
  }
  if(event.keyCode == 39){
    moveVarTwo = moveVarTwo + 4;
    playerTwo.style.left = moveVarTwo + "%";
  }
}


document.addEventListener("keydown", movePlayers);
