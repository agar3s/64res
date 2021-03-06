
var MapScene = function(){
  var m = this;
  m.map = new Map('assets/'+START+'.png');

  m.cont=0;
  m.coords = {
    x:0,
    y:0
  };
  m.enter = false;
  m.down = false;
  m.space = false;
  m.coldown = 0;
  m.monsters = [];
  m.powers = [];

  m.readInputs = function(){
    var values = {
      x: 0,
      y: 0,
      canMove: true,
      landed: -1
    }

    if(isKeyPressed('40')){
      m.down = true;
    }else if(m.down){
      values.down = true;
      m.down = false;
      hero.y += 4;
      values.landed = m.map.checkLandCollision(hero, ROWS_TO_CHECK_FLOOR_COLLISION);
      if(values.landed!=-1){
        hero.y -=4;
      }
    }
    values.landed = m.map.checkLandCollision(hero, ROWS_TO_CHECK_FLOOR_COLLISION);
    
      
    
    if(isKeyPressed('37')){
      values.x = -hero.speed;
      hero.setDirection(1);
    }else if(isKeyPressed('39')){
      values.x = hero.speed;
      hero.setDirection(0);
    }

    if(isKeyPressed('38')&&(values.landed!=-1)){
      hero.collides = false;
      hero.acelerationY = Y_ACELERATION;
      hero.jumpPower = 0;
      hero.lockJump=false;
      hero.setAnimation('jump1');
      jump_sfx.play();
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

    if(isKeyPressed('32')){
      m.space = true;
    }else if(m.space){
      values.space = true;
      m.space = false;
    }


    values.canMove = !m.map.checkLateralCollision(hero);

    return values;
  };


  m.update = function(values){
    if(values.enter && m.map.puzzle){
      puzzleScene.puzzle = m.map.puzzle;
      puzzleScene.x = m.coords.x;
      puzzleScene.y = m.coords.y;
      hero.setAnimation('idle2');
      starFlashing(11, 30);
      changeScene(puzzleScene);
    };

    if(m.coldown>0)m.coldown--;

    if(hero.x<=-10 && isNextRoom('l')){
      return m.changeMap('l');
    }
    if(hero.x>=m.map.width-5 && isNextRoom('r')){
      return m.changeMap('r');
    }

    if(hero.y<=-15 && isNextRoom('u')){
      return m.changeMap('u');
    }
    if(hero.y>=m.map.height-1 && isNextRoom('d')){
      return m.changeMap('d');
    }

    if(values.x==0&&hero.jumpPower==0&&hero.currentAnimation!='jump4'&&hero.currentAnimation!='jump3'){
      hero.setAnimation(idleAnimation);
    }
    
    if(values.canMove&&values.x!=0){
      if(hero.jumpPower==0&&hero.currentAnimation!='jump4') {
        hero.setAnimation('run');
        if (--run_sfx_wait === 0) {
          run_sfx.play();
          run_sfx_wait = RUN_SOUND_SOUNDRATE;
        }
      }else{
        run_sfx_wait = RUN_SOUND_SOUNDRATE;
      }
      hero.move(values.x);
    }
    hero.fall();

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

    if((values.landed!=-1)&&hero.acelerationY>0){
      if(values.landed-hero.y!=16&&hero.speedY>0.3){
        hero.setAnimation('jump4');
        hero.onEndAnimationLoop = function(){
          idleAnimation = 'idle0';
          m.cont=0;
          hero.setAnimation(idleAnimation);
          hero.onEndAnimationLoop = undefined;
        }
      }

      hero.acelerationY = 0;
      hero.setPos(hero.x, values.landed-16);
      hero.jumpPower = 0;
    };

    if(hero.speedY>0&&hero.acelerationY>0&&hero.jumpPower==0){
      hero.setAnimation('jump3');
    }

    if(values.space&&m.coldown==0){
      m.powers.push(new Power(hero.x, hero.y, (hero.direction==0)?1.1:-1.1, 0, 1));
      m.coldown = 35;
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

    //monster1.fall();
    for (var i = 0; i < m.monsters.length; i++) {
      var monster = m.monsters[i];
      monster.update();
      monster.sprite.animate();
    }

    for (var i = 0; i < m.powers.length; i++) {
      var power = m.powers[i];
      power.update();
      power.sprite.animate();
      attack_sfx.play();
    }

    // animate da zombie

  };

  m.draw = function(){
    ctx.fillStyle = colors.D;
    ctx.fillRect(0, 0, pixelSize*screenSize, pixelSize*screenSize);
    m.map.draw(Math.floor(m.coords.x), Math.floor(m.coords.y), screenSize, screenSize);

    for (var i = 0; i < m.monsters.length; i++) {
      var monster = m.monsters[i];
      monster.sprite.draw(m.coords.x*pixelSize, m.coords.y*pixelSize);
    }
    for (var i = 0; i < m.powers.length; i++) {
      m.powers[i].draw(m.coords.x*pixelSize, m.coords.y*pixelSize);
    }
  };

  m.changeMap = function(direction){
    var newMap = getNextRoom(direction);
    if(newMap.scheme){
      changeColorSchema(schemas[newMap.scheme]);
    }
    m.map = new Map('assets/'+newMap.name+'.png');
    m.map.onReady = function(monsterData){
      var pos = m.map.enterPos(direction);
      hero.setPos(pos.i, pos.j);
      m.coords.x = hero.x-24;
      m.coords.y = hero.y-24;
      m.monsters = generateMonsters(monsterData);
    };
  };

  m.isReady = function(){
    return m.map.loaded;
  }

};