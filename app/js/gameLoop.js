var hero = new LayeredSprite([
  { key:attackM, layer:'M'},
  { key:attackN, layer:'N'},
  { key:attackO, layer:'O'},
  { key:attackP, layer:'P'}
]);

hero.setAnimation('idle0');
hero.setPixelSize(pixelSize);
hero.setPos(0,0);

var map = new Map('assets/level01.png');

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
var idleAnimation = 'idle0';
function gameloop(){
  if(!map.loaded) ra(gameloop);
  // read

  // update
  var x = 0, y=0;
  var heroCollides = map.checkCollision(hero, ROWS_TO_CHECK_FLOOR_COLLISION);

  if(isKeyPressed('37')){
    x = -hero.speed;
    hero.setDirection(1);
    if(hero.jumpPower==0&&hero.currentAnimation!='jump4') hero.setAnimation('run');
  }else if(isKeyPressed('39')){
    x = hero.speed;
    hero.setDirection(0);
    if(hero.jumpPower==0&&hero.currentAnimation!='jump4') hero.setAnimation('run');
  }

  if(isKeyPressed('38')&&(heroCollides!=-1)){
    hero.collides = false;
    hero.acelerationY = Y_ACELERATION;
    hero.jumpPower = 0;
    hero.lockJump=false;
    hero.setAnimation('jump1');
  }

  if(isKeyPressed('38')&&hero.acelerationY<0&&!hero.lockJump){
    hero.jumpPower += 1;
    hero.acelerationY = Y_ACELERATION;
    hero.lockJump = hero.jumpPower>MAX_JUMP_POWER;
  }

  // test animations
  if(isKeyPressed('50')){
    hero.setAnimation('idle1');
  }else if(isKeyPressed('51')){
    hero.setAnimation('idle2');
  }else if(isKeyPressed('57')){
    hero.setAnimation('attack');
  }

  //var y = isKeyPressed('38')?-1:(isKeyPressed('40')?:1:0);

  
  if((hero.x<=-5&&x==-hero.speed)||(hero.x>=map.width-11&&x==hero.speed)){
    x = 0;
  }
  if(x==0&&hero.jumpPower==0&&hero.currentAnimation!='jump4'&&hero.currentAnimation!='jump3'){
    hero.setAnimation(idleAnimation);
  }
  hero.move(x);

  hero.animate();
  cont++;
  if(cont%2==0){
  }
  if(cont==400){
    idleAnimation = 'idle'+(1+Math.round(Math.random()));
    hero.onEndAnimationLoop = function(){
      idleAnimation = 'idle0';
      hero.setAnimation(idleAnimation);
      hero.onEndAnimationLoop = undefined;
    }
  }
  /*
  var trigger = triggers[cont];
  if(trigger) trigger();
  */

  if(cont>1000) cont=0;

  // set animations
  if(hero.acelerationY<0&&hero.acelerationY>-0.1){
    hero.setAnimation('jump2');

  }

  if((heroCollides!=-1)&&hero.acelerationY>0){
    if(heroCollides-hero.y!=16&&hero.speedY>0.3){
      hero.setAnimation('jump4');
      hero.onEndAnimationLoop = function(){
        idleAnimation = 'idle0';
        cont=0;
        hero.setAnimation(idleAnimation);
        hero.onEndAnimationLoop = undefined;
      }
    }

    hero.acelerationY = 0;
    hero.setPos(hero.x, heroCollides-16);
    hero.jumpPower = 0;
  };

  if(hero.speedY>0&&hero.acelerationY>0&&hero.jumpPower==0){
    hero.setAnimation('jump3');
  }

  // camera follows
  coords.x=hero.x-24;
  coords.y=hero.y-24;
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
  hero.draw(coords.x*pixelSize, coords.y*pixelSize);


  ra(gameloop);
}
ra(gameloop);
