
var PuzzleScene = function(){
  var m = this;
  m.puzzle = new Puzzle('F70101010101010101');
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
      right: false,
      enter: false
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

    if(isKeyPressed('13')){
      m.enter = true;
    }else if(m.enter){
      values.enter = true;
      m.enter = false;
    }

    return values;
  }

  m.update = function(values){
    if(values.enter){
      puzzleBible[m.puzzle.id].current = m.puzzle.encode();
      starFlashing(11,30);
      changeScene(mapScene);
    };

    if(values.right) m.puzzle.toRight();
    if(values.left) m.puzzle.toLeft();
    if(values.up) m.puzzle.toTop();
    if(values.down) m.puzzle.toBottom();
  }

  m.draw = function(){
    m.puzzle.draw(m.x-m.puzzle.x, m.y-m.puzzle.y);
    //hero.draw(-40*pixelSize, -40*pixelSize);
  }

  m.isReady = function(){
    return m.puzzle.loaded;
  }

};