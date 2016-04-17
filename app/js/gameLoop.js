var hero = new LayeredSprite([
  { key:attackM, layer:'M'},
  { key:attackN, layer:'N'},
  { key:attackO, layer:'O'},
  { key:attackP, layer:'P'}
]);

hero.setAnimation('idle0');
hero.setPixelSize(pixelSize);
hero.setPos(32,32);

var power  = new LayeredSprite([
  { key:powerM, layer:'M'},
  { key:powerN, layer:'N'},
  { key:powerO, layer:'O'}
]);

power.setAnimation('power');
power.setPixelSize(pixelSize);
power.setPos(16, 16);

var monster1 = new Monster({
  nameCode:'zombie_attack',
  hp: 10,
  x:10,
  y:10
});
monster1.sprite.setAnimation('zombie_walk');

var idleAnimation = 'idle0';


var mapScene = new MapScene();
var puzzleScene = new PuzzleScene();
var scene = mapScene;

/** color schemes */
var names = ['exp2','gboy2','gboy3', 'exp1','gboy'];
var schemaCont = 0;
canvas.addEventListener('click', function(e){
  schemaCont+=1;
  if(schemaCont==4) schemaCont=0;
  changeColorSchema(schemas[names[schemaCont]], false);
  e.preventDefault();
});
/***/

function changeScene(newScene){
  scene = newScene;
}

var cont = 0;
var max = 20;
var miliseconds = 30;

function flashing(){
  if(cont>=max) return;
  setTimeout(function(){
    inverseColors();
    cont++;
    flashing();
  }, miliseconds);
}

function starFlashing(maximum, interval){
  cont=0;
  max = maximum||max;
  miliseconds = interval||miliseconds;
  flashing();
}

function gameloop(){
  if(!scene.isReady()){
    //console.log('no ready', scene.map);
    return ra(gameloop);
  }
  // read
  var values = scene.readInputs();
  // update
  scene.update(values);
  // draw
  ctx.fillStyle = colors.P;
  scene.draw();
  hero.draw(mapScene.coords.x*pixelSize, mapScene.coords.y*pixelSize);
  ctx.fillStyle = '#333';
  ctx.fillRect(0, 64*pixelSize, 900, 64*pixelSize);
  ctx.fillRect(64*pixelSize, 0, 900-64*pixelSize, 500);
  ra(gameloop);
}
ra(gameloop);
