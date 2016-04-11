
var LayeredSprite = function(sprites){
  var m = this;
  m.sprites = [];
  for (var i = 0; i < sprites.length; i++) {
    var sprite = new Sprite(sprites[i].key);
    sprite.color = sprites[i].layer;
    console.log(sprite.color, colors[this.color])
    sprite.layer = sprites[i].layer;
    m.sprites.push(sprite);
  };
  m.pixelSize = 0;
  m.speed = 1;
  m.x = 0;
  m.y = 0;
  m.setPixelSize = function(pixelSize){
    m.pixelSize = pixelSize;
    m.sprites.map(function(sprite){sprite.setPixelSize(pixelSize)});
  };
  m.animate = function(){
    m.sprites.map(function(sprite){sprite.animate()});
  };
  m.draw = function(x, y){
    m.sprites.map(function(sprite){sprite.draw(x, y)});
  };
  m.setPos = function(x, y){
    m.x = x;
    m.y = y;
    m.sprites.map(function(sprite){sprite.x=x; sprite.y=y;});
  };
  m.move = function(disx, disy){
    if(disy==-1)console.log('bum');
    m.x+=disx;
    m.y+=disy;
    m.sprites.map(function(sprite){sprite.x+=disx; sprite.y+=disy;});
  }
  m.setAnimation = function(name){
    m.sprites.map(function(sprite){sprite.setAnimation(name+sprite.layer)});
  }
  m.setDirection = function(direction){
    m.sprites.map(function(sprite){sprite.direction=direction});
  }
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
}