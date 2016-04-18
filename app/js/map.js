
var Map = function(source){
  var m = this;
  m.loaded = false;
  var drawing = new Image();
  drawing.src = source; // can also be a remote URL e.g. http://
  m.map = [];
  m.puzzle = undefined;
  m.enterPoints = [];

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
      var info1 = Math.floor(pix[i+1]/16); // green
      var info2 = Math.floor(pix[i+2]/16); // blue
      m.processInfo(info1, info2, m.map[row].length-1, row);
    }
    m.loaded = true;
    if(m.onReady){
      m.onReady();
    }
  }

  m.processInfo = function(a, b, i, j){
    if(a==1){ // puzzle room
      var code = puzzleBible[b].current;
      m.puzzle = new Puzzle(code, b);
      m.puzzle.x = i;
      m.puzzle.y = j;
    }else if(a==6){ // enter point
      if(i-12<0) m.enterPoints.r={i:i, j:j-8};
      if(i+12>m.width) m.enterPoints.l={i:i-8, j:j-8};
      if(j-12<0) m.enterPoints.d={i:i-4, j:j};
      if(j+12>m.height) m.enterPoints.u={i:i-4, j:j-8};
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


  m.checkLandCollision = function(sprite, n){
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

  m.checkLateralCollision = function(sprite){
    var x = sprite.x+(sprite.direction==0?11:4);
    var y = sprite.y+3;
    var limitY = (y+10)>(m.height-1)?(m.height-1):(y+10);
    if(y<0) y=0;
    var simpleCollision = false;
    for (var j = y; j < limitY; j++) {
      if(m.map[j][x]==0){
        if(simpleCollision) return true;
        simpleCollision = true;
      } 
    }

    return false;
  }

  m.enterPos = function(direction){
    return m.enterPoints[direction];

  }


}