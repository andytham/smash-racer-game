//standing aniamtion
let runAnim = 0;
//makes sure no one cheats before starting
let startCheck = 0;

let winCondition = 0;
let kirbyWinCount = 0;
let linkWinCount = 0;

//start button to initialize game page
let button = document.getElementById("start");
button.addEventListener("click", function(){
  document.getElementById("gamePage").style.display = "block";
  document.getElementById("landingPage").style.display = "none";

  document.getElementById("restart").style.display = "block";
  startCheck = 1;
  }

);

//resets to landing page and resets game page back to initial values
let button2 = document.getElementById("restart");
button2.addEventListener("click", function(){
  document.getElementById("gamePage").style.display = "none";
  document.getElementById("landingPage").style.display = "block";
  document.getElementById("restart").style.display = "none";

  moveVarOne = 0;
  moveVarTwo = 0;
  kirby.style.left = 0;
  standingLink();
  standingKirby();
  runAnim = 0;
  document.getElementById("kirbyWin").style.display = "none";
  document.getElementById("linkWin").style.display = "none";
  startCheck = 0;
  winCondition = 0;
  }
);


let link = document.getElementById("link");
let kirby = document.getElementById("kirby");
let moveVarOne = 0;
let moveVarTwo = 0;

//running and standing animations
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
  kirby.style.bottom= "3%";
}

function standingKirby(){
  kirby.src = "images/kirby_0.png";
  kirby.style.left= "3%";
  kirby.style.width= "10%";
  kirby.style.bottom= "11%";
}

// the whole game function, checks for standing animation and changes it, then moves the players

function movePlayers(event) {
  //only do something if z or right arrow pressed
  if(event.keyCode !== 90 && event.keyCode !== 39){
    return;
  }
  if( startCheck == 0){
    return;
  }
  if (runAnim == 0) {
    runningKirby();
    runningLink();
    runAnim = 1;
  }
  if(moveVarOne > 83 || moveVarTwo > 80){
      if(moveVarOne > 83){
        if(winCondition == 0){
          linkWinCount = linkWinCount + 1;
        }
        console.log(linkWinCount);
        document.getElementsByClassName('linkCount')[0].innerHTML = linkWinCount;
        document.getElementsByClassName('kirbyCount')[0].innerHTML = kirbyWinCount;
        document.getElementById("linkWin").style.display = "block";
        winCondition = 1;

      }
      if(moveVarTwo > 80){
        if(winCondition == 0){
          kirbyWinCount = kirbyWinCount + 1;
        }
        document.getElementsByClassName('linkCount')[1].innerHTML = linkWinCount;
        document.getElementsByClassName('kirbyCount')[1].innerHTML = kirbyWinCount;
        document.getElementById("kirbyWin").style.display = "block";
        winCondition = 1;
      }
      return;

    }
  //checks if z is pressed
  if(event.keyCode == 90){

    moveVarOne = moveVarOne + 2;
    link.style.left = moveVarOne + "%";
  }
  //checks if right arrow is pressed
  if(event.keyCode == 39){
    moveVarTwo = moveVarTwo + 2;
    kirby.style.left = moveVarTwo + "%";
  }
}

//checks for player input
document.addEventListener("keydown", movePlayers);
