var coords = {
  x: 0,
  y:0
}

var names = ['gboy','gboy2','gboy3'];
var schemaCont = 0;
canvas.addEventListener('click', function(e){
  coords.x = e.offsetX;
  coords.y = e.offsetY;
  schemaCont+=1;
  if(schemaCont==3) schemaCont=0;
  changeColorSchema(schemas[names[schemaCont]]);
  e.preventDefault();
});