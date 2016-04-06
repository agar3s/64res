
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
  m.setPixelSize = function(pixelSize){
    m.pixelSize = pixelSize;
    m.sprites.map(function(sprite){sprite.setPixelSize(pixelSize)});
  };
  m.animate = function(){
    m.sprites.map(function(sprite){sprite.animate()});
  };
  m.draw = function(){
    m.sprites.map(function(sprite){sprite.draw()});
  };
  m.setPos = function(x, y){
    m.sprites.map(function(sprite){sprite.x=x; sprite.y=y;});
  };
  m.move = function(disx, disy){
    m.sprites.map(function(sprite){sprite.x+=disx; sprite.y+=disy;});
  }
  m.setAnimation = function(name){
    m.sprites.map(function(sprite){sprite.setAnimation(name+sprite.layer)});
  }
  m.setDirection = function(direction){
    m.sprites.map(function(sprite){sprite.direction=direction});
  }
}