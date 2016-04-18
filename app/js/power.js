
var Power = function(x, y, vx, vy, force){
  var m = this;
  m.x = x;
  m.tempX = x;
  m.y = x;
  m.tempY = y;
  m.vx = vx;
  m.vy = vy;
  m.force = force;
  m.sprite  = new LayeredSprite([
    { key:powerM, layer:'M'},
    { key:powerN, layer:'N'},
    { key:powerO, layer:'O'}
  ]);

  m.sprite.setAnimation('power');
  m.sprite.setPixelSize(pixelSize);
  m.sprite.setPos(x, y);


  m.update = function(){
    m.tempX += m.vx;
    m.tempY += m.vy;
    m.x = Math.round(m.tempX);
    m.y = Math.round(m.tempY);
    m.sprite.setPos(m.x, m.y);
  };

  m.draw = function(relX, relY){
    m.sprite.draw(relX, relY);
  }

}