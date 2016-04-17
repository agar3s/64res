
var LayeredSprite = function(sprites){
  var m = this;
  m.sprites = [];
  for (var i = 0; i < sprites.length; i++) {
    var sprite = new Sprite(sprites[i].key);
    sprite.color = sprites[i].layer;
    sprite.layer = sprites[i].layer;
    m.sprites.push(sprite);
  };
  m.pixelSize = 0;
  m.speed = 1;
  m.speedY = 0;
  m.acelerationY = 0;
  m.x = 0;
  m.y = 0;
  m.direction = 0;
  m.jumpPower = 0;
  m.onEndAnimationLoop = undefined;
  m.currentAnimation = '';

  m.setPixelSize = function(pixelSize){
    m.pixelSize = pixelSize;
    m.sprites.map(function(sprite){sprite.setPixelSize(pixelSize)});
  };

  m.animate = function(){
    for (var i = 0; i < m.sprites.length; i++) {
      var sprite = m.sprites[i];
      sprite.animate();
    }

    if(sprite.iFrame>=sprite.frames.length-1&&m.onEndAnimationLoop){
      m.onEndAnimationLoop();
    }
  };

  m.draw = function(x, y){
    for (var i = 0; i < m.sprites.length; i++) {
      m.sprites[i].draw(x, y);
    };
  };

  m.setPos = function(x, y){
    m.x = x;
    m.y = y;
    for (var i = 0; i < m.sprites.length; i++) {
      m.sprites[i].x = x;
      m.sprites[i].y = y;
    }
  };

  m.fall = function(){
    m.acelerationY += (0.1);
    if(m.acelerationY>2) m.acelerationY = 2;
    m.speedY = m.acelerationY;
    m.y = Math.round(m.y + m.speedY)
    m.setPos(m.x, m.y);
  }

  m.move = function(disx){
    m.x = Math.round(m.x + disx);
    m.setPos(m.x, m.y);
  };

  m.setAnimation = function(name){
    m.currentAnimation = name;
    for (var i = 0; i < m.sprites.length; i++) {
      var sprite =  m.sprites[i];
      sprite.setAnimation(name+sprite.layer);
    }
  };

  m.setDirection = function(direction){
    m.direction = direction;
    m.sprites.map(function(sprite){sprite.direction=direction});
  };

  //returns the lasts n lines in the sprite matrix that has a pixel
  m.getLastLines = function(n){
    var lines = [];
    for (var i = 0; i < n; i++) {
      lines.push(0);
    }
    return m.sprites.reduce(function(a, b){
      var l = [];
      for (var i = 0; i < n; i++) {
        l.push(a[n-i-1] | b.byteArray[15-i]);
      }
      return l;
    }, lines);
  }

  m.forward = function(){
    m.move(m.direction==0?1:-1);
  }

  m.turn = function(){
    m.direction = !m.direction;
    m.sprites.map(function(sprite){sprite.direction = m.direction});
  }
}