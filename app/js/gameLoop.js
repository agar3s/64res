var mixed = new LayeredSprite([
  { key:catM, color:'#272727', layer:'M'},
  { key:catO, color:'#f9b0cc', layer:'O'},
  { key:catP, color:'#3c3c3c', layer:'P'},
  { key:catQ, color:'#E12B26', layer:'Q'},
  { key:catS, color:'#151515', layer:'S'},
]);
mixed.setAnimation('cat');
mixed.setPixelSize(2);

var skull = new LayeredSprite([
  { key:monsterM, color:'#000', layer:'M'},
]);
skull.setAnimation('monster');
skull.setPixelSize(2);
skull.setPos(32,32);
/*
var triggers = {
  '0': function(){
    mixed.setPixelSize(8);
  },
  '10': function(){
    mixed.setPixelSize(20);
  },
  '20': function(){
    mixed.setPos(50,60);
  },
  '60': function(){
    mixed.setPos(0,0);
    mixed.setPixelSize(2);
  },
  '80': function(){
    mixed.setPixelSize(5);
  },
}
*/
var cont=0;
function gameloop(){
  ctx.fillStyle = '#fff';
  ctx.fillRect(0,0,580,580);
  cont++;
  if(cont%3==0){
    mixed.animate();
    skull.animate();
  }/*
  var trigger = triggers[cont];
  if(trigger) trigger();
  if(cont>100) cont=0;*/
  mixed.draw();
  skull.draw();

  ra(gameloop);
}
ra(gameloop);
