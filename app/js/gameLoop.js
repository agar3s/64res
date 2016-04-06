var hero = new LayeredSprite([
  { key:heroM, color:colorA, layer:'M'},
  { key:heroN, color:colorB, layer:'N'},
  { key:heroO, color:colorC, layer:'O'}
]);

hero.setAnimation('hero');
hero.setPixelSize(pixelSize);
hero.setPos(0,0);


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


var cont=0;
function gameloop(){
  // read 
  // update
  // draw
  if(isKeyPressed('37')){
    hero.move(-1*pixelSize, 0);
    hero.setDirection(1);
  }
  if(isKeyPressed('38')){
    hero.move(0, -1*pixelSize);
  }
  if(isKeyPressed('39')){
    hero.move(1*pixelSize, 0);
    hero.setDirection(0);
  }
  if(isKeyPressed('40')){
    hero.move(0, 1*pixelSize);
  }

  ctx.fillStyle = colorD;
  ctx.fillRect(0, 0, pixelSize*64, pixelSize*64);

  cont++;
  if(cont%3==0){
    hero.animate();
  }
  /*
  var trigger = triggers[cont];
  if(trigger) trigger();
  if(cont>100) cont=0;
  */
  hero.draw();

  ra(gameloop);
}
ra(gameloop);
