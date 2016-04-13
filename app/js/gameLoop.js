var hero = new LayeredSprite([
  { key:attackM, layer:'M'},
  { key:attackN, layer:'N'},
  { key:attackO, layer:'O'},
  { key:attackP, layer:'P'}
]);

hero.setAnimation('idle0');
hero.setPixelSize(pixelSize);
hero.setPos(0,0);
var idleAnimation = 'idle0';

//var scene = new MapScene();
var scene = new PuzzleScene();

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



function gameloop(){
  if(!scene.isReady()){
    console.log('no ready', scene.map);
    return ra(gameloop);
  }
  // read
  var values = scene.readInputs();
  // update
  scene.update(values);
  // draw
  scene.draw();
  ra(gameloop);
}
ra(gameloop);
