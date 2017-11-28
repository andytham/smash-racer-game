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

// const playerOne = document.get elementById('playerOne');
// console.log(playerOne.style.left = "100px");
