var hero = new LayeredSprite([
  { key:idle0M, layer:'M'},
  { key:idle0N, layer:'N'},
  { key:idle0O, layer:'O'},
  { key:idle0P, layer:'P'}
]);

hero.setAnimation('idle0');
hero.setPixelSize(pixelSize);
hero.setPos(0,0);

var map = new Map('assets/level01-2.png');
//var map = new Map('assets/mapTest.png');

var triggers = {
  '0': function(){
    hero.setPixelSize(8*pixelSize);
  },
  '10': function(){
    hero.setPixelSize(20*pixelSize);
  },
  '20': function(){
    hero.setPos(20*pixelSize, 50*pixelSize);
  },
  '60': function(){
    hero.setPos(0, 0);
    hero.setPixelSize(2*pixelSize);
  },
  '80': function(){
    hero.setPixelSize(5*pixelSize);
  },
}



var names = ['exp2','gboy2','gboy3', 'exp1','gboy'];
var schemaCont = 0;
canvas.addEventListener('click', function(e){
  schemaCont+=1;
  if(schemaCont==4) schemaCont=0;
  changeColorSchema(schemas[names[schemaCont]], Math.random()>0.5);
  e.preventDefault();
});

var cont=0;
var coords = {
  x:0,
  y:0
}
function gameloop(){
  if(!map.loaded) ra(gameloop);
  // read

  // update
  var x = 0, y=0;
  y = 1;
  var heroCollides = map.checkCollision(hero, 2);
  if(isKeyPressed('37')){
    x = -hero.speed;
    hero.setDirection(1);
  }else if(isKeyPressed('39')){
    x = hero.speed;
    hero.setDirection(0);
  }

  if(isKeyPressed('38')){
    hero.collides = false;
    y = -hero.speed;
  }

  // test animations
  if(isKeyPressed('65')){
    console.log("A");
    hero.setAnimation('run');
  }else if(isKeyPressed('83')){
    console.log("S");
    hero.setAnimation('idle1');
  }else if(isKeyPressed('68')){
    console.log("D");
    hero.setAnimation('idle2');
  }

  //var y = isKeyPressed('38')?-1:(isKeyPressed('40')?:1:0);

  if(heroCollides) y =0;
  if((hero.x<=-5&&x==-hero.speed)||(hero.x>=map.width-10&&x==hero.speed)){
    x = 0;
  }
  hero.move(x, y);


  coords.x=hero.x-24;
  coords.y=hero.y-24;
  if(coords.x<0){
    coords.x = 0;
  }else if(coords.x>(map.width-screenSize)){
    coords.x = map.width-screenSize;
  }
  if(coords.y<0){
    coords.y = 0;
  }else if(coords.y>(map.height-screenSize)){
    coords.y = map.height-screenSize;
  }


  
    // draw
  ctx.fillStyle = colors.d;
  ctx.fillRect(0, 0, pixelSize*screenSize, pixelSize*screenSize);
  map.draw(Math.floor(coords.x), Math.floor(coords.y), screenSize, screenSize);

  hero.animate();
  cont++;
  if(cont%2==0){
  
  }
  /*
  var trigger = triggers[cont];
  if(trigger) trigger();
  */
  if(cont>100) cont=0;
  hero.draw(coords.x*pixelSize, coords.y*pixelSize);
  
  if(heroCollides) hero.move(0, -1);

  ra(gameloop);
}
ra(gameloop);
