
var Map = function(source){
  var m = this;
  m.loaded = false;
  var drawing = new Image();
  drawing.src = source; // can also be a remote URL e.g. http://
  m.map = [];
  m.puzzle = undefined;

  drawing.onload = function(){
    ctx.drawImage(drawing, 0, 0);
    m.width = drawing.width;
    m.height = drawing.height;
    var imgd = ctx.getImageData(0, 0, drawing.width, drawing.height);
    var pix = imgd.data;

    var row = -1;
    for (var i = 0, n = pix.length; i < n; i += 4) {
      if(i%(drawing.width*4)==0){
        m.map.push([]);
        row++;
      }
      m.map[row].push(Math.floor(pix[i]/64)); // red
      var info1 = Math.floor(pix[i+1]/10); // green
      var info2 = Math.floor(pix[i+2]/10); // blue
      m.processInfo(info1, info2, m.map[row].length-1, row);
    }
    m.loaded = true;
  }

  m.processInfo = function(a, b, i, j){
    if(a==1){ // puzzle room
      var code = puzzleBible[b].current;
      m.puzzle = new Puzzle(code, b);
      m.puzzle.x = i;
      m.puzzle.y = j;
    }
  }


  m.draw = function(x, y, width, height){
    if(!this.map||!this.map[0]) return;
    x = x+width>=m.width?m.width-width:x;
    y = y+height>=m.height?m.height-height:y;
    
    for (var j = 0; j < height; j++) {
      for (var i = 0; i < width; i++) {
        var color = this.map[j+y][i+x];
        if(color!=3){
          ctx.fillStyle = colors['MNO'[color]];
          ctx.fillRect(i*pixelSize, j*pixelSize, pixelSize, pixelSize);
        }
      };
    };
    if(m.puzzle){
      m.puzzle.draw(x-m.puzzle.x, y-m.puzzle.y);
    }
  }


  m.checkCollision = function(sprite, n){
    var lines = sprite.getLastLines(n);
    var x = sprite.x;
    var y = sprite.y+1;
    
    var limitY = (y+15)>(m.height-1)?(m.height-1):(y+15);
    limitY = limitY<n?n:limitY;

    for (var j = lines.length-1; j >= 0; j--) {
      var res = 0;
      for (var i = 0; i < 15; i++) {
        var b = m.map[limitY-j][x+i];
        res+=(b==0?(1<<(15-i)):0);
      }
      
      if((res&lines[j])>0){
        return limitY-j;
      }
    }
    return -1;
  }


}