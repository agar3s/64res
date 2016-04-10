var hero = new LayeredSprite([
  { key:idle1M, layer:'M'},
  { key:idle1N, layer:'N'},
  { key:idle1O, layer:'O'},
  { key:idle1P, layer:'P'}
]);

hero.setAnimation('idle1');
hero.setPixelSize(pixelSize);
hero.setPos(4*pixelSize,4*pixelSize);

var map = new Map('assets/mapTest.png');

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



var names = ['gboy','gboy2','gboy3'];
var schemaCont = 0;
canvas.addEventListener('click', function(e){
  schemaCont+=1;
  if(schemaCont==3) schemaCont=0;
  changeColorSchema(schemas[names[schemaCont]], Math.random()>0.5);
  e.preventDefault();
});

var cont=0;
var coords = {
  x:0,
  y:0
}
function gameloop(){
  // read

  // update
  var x = 0, y=0;
  if(isKeyPressed('37')){
    x = -1;
    hero.setDirection(1);
  }else if(isKeyPressed('39')){
    x = 1;
    hero.setDirection(0);
  }

  if(isKeyPressed('38')){
    y = -1;
  }else if(isKeyPressed('40')){
    y = 1;
  }
  //var y = isKeyPressed('38')?-1:(isKeyPressed('40')?:1:0);
  //hero.move(x*pixelSize, y*pixelSize);
  //hero.move(x*pixelSize, y*pixelSize);
  coords.x+=x;
  coords.y+=y;
  if(coords.x<0){
    coords.x = 0;
  }
  if(coords.y<0){
    coords.y = 0;
  }
  // draw
  ctx.fillStyle = colors.d;
  ctx.fillRect(0, 0, pixelSize*64, pixelSize*64);
  // map.draw(coords.x, coords.y, 64, 64);

  cont++;
  hero.animate();
  if(cont%3==0){
  }
  /*
  var trigger = triggers[cont];
  if(trigger) trigger();
  */
  if(cont>100) cont=0;
  hero.draw();

  ra(gameloop);
}
ra(gameloop);
