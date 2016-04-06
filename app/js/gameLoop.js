var hero = new LayeredSprite([
  { key:heroM, color:'#330500', layer:'M'},
  { key:heroN, color:'#606060', layer:'N'},
  { key:heroO, color:'#383838', layer:'O'}
]);

hero.setAnimation('hero');
hero.setPixelSize(4);
hero.setPos(0,0);
/*
var triggers = {
  '0': function(){
    mixed.setPixelSize(8);
  },
  '10': function(){
    mixed.setPixelSize(20);
  },
  '20': function(){
    mixed.setPos(50,60);
  },
  '60': function(){
    mixed.setPos(0,0);
    mixed.setPixelSize(2);
  },
  '80': function(){
    mixed.setPixelSize(5);
  },
}
*/
var cont=0;
function gameloop(){
  if(isKeyPressed('37')){
    hero.move(-1*4, 0);
    hero.setDirection(1);
  }
  if(isKeyPressed('38')){
    hero.move(0, -1*4);
  }
  if(isKeyPressed('39')){
    hero.move(1*4, 0);
    hero.setDirection(0);
  }
  if(isKeyPressed('40')){
    hero.move(0, 1*4);
  }

  ctx.fillStyle = 'rgba(255,'+Math.floor(Math.random()*122+122)+','+Math.floor(Math.random()*122+122)+',0.4)';
  ctx.fillRect(0, 0, 256, 256);

  cont++;
  if(cont%3==0){
    hero.animate();
  }/*
  var trigger = triggers[cont];
  if(trigger) trigger();
  if(cont>100) cont=0;*/
  hero.draw();

  ra(gameloop);
}
ra(gameloop);
