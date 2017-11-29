let runAnim = 0;
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

  moveVarOne = 0;
  moveVarTwo = 0;
  kirby.style.left = 0;
  standingLink();
  runAnim = 0;
  document.getElementById("kirbyWin").style.display = "none";
  document.getElementById("linkWin").style.display = "none";
  }
);

let link = document.getElementById("link");
let kirby = document.getElementById("kirby");
let moveVarOne = 0;
let moveVarTwo = 0;

function runningLink(){
  link.src = "images/link_1.gif";
  link.style.left = "2%";
  link.style.width = "22%";
}
function standingLink(){
  link.src = "images/link_0.gif";
  link.style.left = "2%";
  link.style.width = "14%";
}

function runningKirby(){
  kirby.src = "images/kirby_1.gif";
  kirby.style.left= "0%";
  kirby.style.width= "18%";
  kirby.style.bottom= "-2%";
}

function standingKirby(){
  kirby.src = "images/kirby_0.png";
  kirby.style.left= "3%";
  kirby.style.width= "10%";
  kirby.style.bottom= "11%";
}

function movePlayers(event) {
  if (runAnim == 0) {
    runningKirby();
    runningLink();
    runAnim = 1;
  }
  if(moveVarOne > 83 || moveVarTwo > 80){
      if(moveVarOne > 83){
        document.getElementById("linkWin").style.display = "block";
      }
      if(moveVarTwo > 80){
        document.getElementById("kirbyWin").style.display = "block";
      }
      return;

    }

  if(event.keyCode == 90){

    moveVarOne = moveVarOne + 2;
    link.style.left = moveVarOne + "%";
  }
  if(event.keyCode == 39){
    moveVarTwo = moveVarTwo + 2;
    kirby.style.left = moveVarTwo + "%";
  }
  if(moveVarOne > 80 || moveVarTwo > 80){
    console.log('win');
  }
}


document.addEventListener("keydown", movePlayers);
