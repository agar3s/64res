var hero = new LayeredSprite([
  { key:cocoM, layer:'M'},
  { key:cocoN, layer:'N'},
  { key:cocoO, layer:'O'}
]);

hero.setAnimation('coco');
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
  hero.move(x*pixelSize, y*pixelSize);

  // draw
  ctx.fillStyle = colors.d;
  ctx.fillRect(0, 0, pixelSize*64, pixelSize*64);

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
