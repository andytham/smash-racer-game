$(document).ready(() => {

//standing aniamtion
let runAnim = 0;
//makes sure no one cheats before starting
let startCheck = 0;
let winCondition = 0;
let kirbyWinCount = 0;
let linkWinCount = 0;
let link = $('#link');
let kirby = $("#kirby");
let s1 = $('#start');
let rs1 = $('#restart');
let moveVarOne = 0;
let moveVarTwo = 0;

class Button{
  constructor(buttonId, showGame){
    this.buttonId = buttonId;
    this.showGame = showGame;
    }
  buttonClick(){
    let poop = this;
    if(poop.id == "start"){
      $("#gamePage").css('display',"block");
      $("#landingPage").css('display', "none");
      $("#restart").css('display', "block");
      startCheck = 1;
    }else{
      console.log('fuck3');
      $("#gamePage").css('display',"none");
      $("#landingPage").css('display' , "block");
      $("#restart").css('display' , "none");
      moveVarOne = 0;
      moveVarTwo = 0;
      linkPlayer.standing();
      kirbyPlayer.standing();
      $("#kirbyWin").css('display' , "none");
      $("#linkWin").css('display' , "none");
      startCheck = 0;
    }
  }
}

let startButton = new Button(s1,true);
let restartButton = new Button(rs1,false);
restartButton.buttonId.click(restartButton.buttonClick);
startButton.buttonId.click(startButton.buttonClick);

class Player{
  constructor(playerId, standImage, runningImage, standLeft, standWidth, standBottom, runningLeft, runningWidth, runningBottom){
    this.playerId = playerId;
    this.standImage = standImage;
    this.runningImage = runningImage;
    this.standLeft = standLeft;
    this.standWidth = standWidth;
    this.standBottom = standBottom
    this.runningLeft = runningLeft;
    this.runningWidth = runningWidth;
    this.runningBottom = runningBottom;
  }
  running(){
    console.log(this);
    $(this.playerId).attr('src', this.runningImage);
    $(this.playerId).css('left', this.runningLeft);
    $(this.playerId).css('width', this.runningWidth);
    $(this.playerId).css('bottom', this.runningBottom);
  }
  standing(){
    $(this.playerId).attr('src', this.standImage);
    $(this.playerId).css('left', this.standLeft);
    $(this.playerId).css('width', this.standWidth);
    $(this.playerId).css('bottom', this.standBottom);
  }
}

let linkPlayer = new Player(link, 'images/link_0.gif', 'images/link_1.gif', '2%', '14%', '','2%','22%','');
let kirbyPlayer = new Player(kirby, 'images/kirby_0.png', 'images/kirby_1.gif', '3%', '10%', '11%','0%','18%','3%');
//"images/link_1.gif"

//start button to initialize game page

//resets to landing page and resets game page back to initial values


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
      linkPlayer.running();
      kirbyPlayer.running();
    runAnim = 1;
  }
  if(moveVarOne > 83 || moveVarTwo > 80){
    //stops infinite wins by accident
    //increase win counter
      if(moveVarOne > 83){

        if(winCondition == 0){
          linkWinCount = linkWinCount + 1;
        }
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
    linkPlayer.playerId.css('left', moveVarOne + "%");
  }
  //checks if right arrow is pressed
  if(event.keyCode == 39){
    moveVarTwo = moveVarTwo + 2;
    kirbyPlayer.playerId.css('left', moveVarTwo + "%");
  }
}

//checks for player input
$(document).keydown(movePlayers);

}); //end
