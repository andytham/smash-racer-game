function newPlayer(name,character,image,pos,keyCode){
  this.name = name;
  this.character = character;
  this.image = image;
  this.pos = pos;
  this.keyCode = keyCode;
  this.move = function(dist){
    dist += 2;
  }
}

let andy = new newPlayer('andy','link','link_0.gif',0,90);
 let joe = new newPlayer('joe','kirby','kirby_0.gif',0,39);
