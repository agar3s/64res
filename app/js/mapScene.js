
var MapScene = function(){
  var m = this;
  m.map = new Map('assets/a.png');

  m.cont=0;
  m.coords = {
    x:0,
    y:0
  };
  m.enter = false;

  m.readInputs = function(){
    var values = {
      x: 0,
      y: 0,
      heroCollides: m.map.checkCollision(hero, ROWS_TO_CHECK_FLOOR_COLLISION)
    }
    
    if(isKeyPressed('37')){
      values.x = -hero.speed;
      hero.setDirection(1);
      if(hero.jumpPower==0&&hero.currentAnimation!='jump4') hero.setAnimation('run');
    }else if(isKeyPressed('39')){
      values.x = hero.speed;
      hero.setDirection(0);
      if(hero.jumpPower==0&&hero.currentAnimation!='jump4') hero.setAnimation('run');
    }

    if(isKeyPressed('38')&&(values.heroCollides!=-1)){
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

    if(isKeyPressed('13')){
      m.enter = true;
    }else if(m.enter){
      values.enter = true;
      m.enter = false;
    }

    return values;
  };


  m.update = function(values){
    if(values.enter && m.map.puzzle){
      puzzleScene.puzzle = m.map.puzzle;
      puzzleScene.x = m.coords.x;
      puzzleScene.y = m.coords.y;
      hero.setAnimation('idle1');
      changeScene(puzzleScene);
    };

    if((hero.x<=-5&&values.x==-hero.speed)||(hero.x>=m.map.width-11&&values.x==hero.speed)){
      values.x = 0;
    }
    if(values.x==0&&hero.jumpPower==0&&hero.currentAnimation!='jump4'&&hero.currentAnimation!='jump3'){
      hero.setAnimation(idleAnimation);
    }
    hero.move(values.x);

    hero.animate();
    m.cont++;
    if(m.cont==400){
      idleAnimation = 'idle'+(1+Math.round(Math.random()));
      hero.onEndAnimationLoop = function(){
        idleAnimation = 'idle0';
        hero.setAnimation(idleAnimation);
        hero.onEndAnimationLoop = undefined;
      }
    };

    if(m.cont>1000) m.cont=0;

    // set animations
    if(hero.acelerationY<0&&hero.acelerationY>-0.1){
      hero.setAnimation('jump2');

    }

    if((values.heroCollides!=-1)&&hero.acelerationY>0){
      if(values.heroCollides-hero.y!=16&&hero.speedY>0.3){
        hero.setAnimation('jump4');
        hero.onEndAnimationLoop = function(){
          idleAnimation = 'idle0';
          m.cont=0;
          hero.setAnimation(idleAnimation);
          hero.onEndAnimationLoop = undefined;
        }
      }

      hero.acelerationY = 0;
      hero.setPos(hero.x, values.heroCollides-16);
      hero.jumpPower = 0;
    };

    if(hero.speedY>0&&hero.acelerationY>0&&hero.jumpPower==0){
      hero.setAnimation('jump3');
    }

    // camera follows
    m.coords.x = hero.x-24;
    m.coords.y = hero.y-24;
    if(m.coords.x < 0){
      m.coords.x = 0;
    }else if(m.coords.x > (m.map.width-screenSize)){
      m.coords.x = m.map.width-screenSize;
    }
    if(m.coords.y<0){
      m.coords.y = 0;
    }else if(m.coords.y>(m.map.height-screenSize)){
      m.coords.y = m.map.height-screenSize;
    }
  };

  m.draw = function(){
    ctx.fillStyle = colors.D;
    ctx.fillRect(0, 0, pixelSize*screenSize, pixelSize*screenSize);
    m.map.draw(Math.floor(m.coords.x), Math.floor(m.coords.y), screenSize, screenSize);
  };

  m.changeMap = function(mapName){
    m.map = new Map('assets/level01.png');
  };

  m.isReady = function(){
    return m.map.loaded;
  }

};