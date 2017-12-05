$(document).ready(() => {

//standing aniamtion
let runAnim = 0;
//makes sure no one cheats before starting
let startCheck = 0;

let winCondition = 0;
let kirbyWinCount = 0;
let linkWinCount = 0;

//start button to initialize game page
let button = $("#start");
button.click( function(){
  $("#gamePage").css('display',"block");
  $("#landingPage").css('display', "none");

  $("#restart").css('display', "block");
  startCheck = 1;
  }

);

//resets to landing page and resets game page back to initial values
let button2 = $("#restart");
button2.click(function(){
  $("#gamePage").css('display',"none");
  $("#landingPage").css('display' , "block");
  $("#restart").css('display' , "none");

  moveVarOne = 0;
  moveVarTwo = 0;
  kirby.css('left', '0');
  standingLink();
  standingKirby();
  runAnim = 0;
  $("#kirbyWin").css('display' , "none");
  $("#linkWin").css('display' , "none");
  startCheck = 0;
  winCondition = 0;
  }
);


let link = $("#link");
let kirby = $("#kirby");
let moveVarOne = 0;
let moveVarTwo = 0;

//running and standing animations
function runningLink(){
  link.attr('src', "images/link_1.gif");
  link.css('left' , "2%");
  link.css('width' , "22%");
}
function standingLink(){
  link.attr('src', "images/link_0.gif");
  link.css('left' , "2%");
  link.css('width' , "14%");
}

function runningKirby(){
  kirby.attr('src',"images/kirby_1.gif");
  kirby.css('left', "0%");
  kirby.css('width', "18%");
  kirby.css('bottom', "3%");
}

function standingKirby(){
  kirby.attr('src',"images/kirby_0.png");
  kirby.css('left', "3%");
  kirby.css('width', "10%");
  kirby.css('bottom', "11%");
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
    //stops infinite wins by accident
    //increase win counter
      if(moveVarOne > 83){

        if(winCondition == 0){
          linkWinCount = linkWinCount + 1;
        }
        console.log(linkWinCount);
        let linkCount = $('.linkCount');
        let kirbyCount = $('.kirbyCount');
        $(linkCount[0]).text(linkWinCount);
        $(kirbyCount[0]).text(kirbyWinCount);
        $("#linkWin").css('display', 'block');
        winCondition = 1;
      }
      if(moveVarTwo > 80){
        if(winCondition == 0){
          kirbyWinCount = kirbyWinCount + 1;
        }
        let linkCount = $('.linkCount');
        let kirbyCount = $('.kirbyCount');
        $(linkCount[1]).text(linkWinCount);
        $(kirbyCount[1]).text(kirbyWinCount);
        $("#kirbyWin").css('display' ,"block");
        winCondition = 1;
      }
      return;

    }
  //checks if z is pressed
  if(event.keyCode == 90){

    moveVarOne = moveVarOne + 2;
    link.css('left', moveVarOne + "%");
  }
  //checks if right arrow is pressed
  if(event.keyCode == 39){
    moveVarTwo = moveVarTwo + 2;
    kirby.css('left', moveVarTwo + "%");
  }
}

//checks for player input
$(document).keydown(movePlayers);

}); //end
