
var PuzzleScene = function(){
  var m = this;
  m.puzzle = new Puzzle('F7AC2C69053C6D0393');
  //m.puzzle = new Puzzle('F712483596AC78DEF0');
  hero.setAnimation('idle2');
  m.up = false;
  m.down = false;
  m.left = false;
  m.right = false;

  m.readInputs = function(){
    var values = {
      up: false,
      down: false,
      left: false,
      right: false
    }
    if(isKeyPressed('37')){
      m.left = true;
    }else if(m.left){
      values.left = true;
      m.left = false;
    }

    if(isKeyPressed('39')){
      m.right = true;
    }else if(m.right){
      values.right = true;
      m.right = false;
    }

    if(isKeyPressed('38')){
      m.up = true;
    }else if(m.up){
      values.up = true;
      m.up = false;
    }

    if(isKeyPressed('40')){
      m.down = true;
    }else if(m.down){
      values.down = true;
      m.down = false;
    }

    return values;
  }

  m.update = function(values){
    if(values.right) m.puzzle.toRight();
    if(values.left) m.puzzle.toLeft();
    if(values.up) m.puzzle.toTop();
    if(values.down) m.puzzle.toBottom();
    hero.animate();
  }

  m.draw = function(){
    ctx.fillStyle = colors.P;
    ctx.fillRect(0, 0, pixelSize*screenSize, pixelSize*screenSize);
    m.puzzle.draw();
    hero.draw(-40*pixelSize, -40*pixelSize);
  }

  m.isReady = function(){
    return m.puzzle.loaded;
  }

};