
var codes = {
  '1': {
    draw: function(x, y, proportion){
      ctx.fillRect(x+proportion*pixelSize, y, pixelSize, proportion*pixelSize);
    }
  },
  '2': {
    draw: function(x, y, proportion){
      ctx.fillRect(x+proportion*pixelSize, y+proportion*pixelSize, proportion*pixelSize, pixelSize);
    }
  },
  '4': {
    draw: function(x, y, proportion){
      ctx.fillRect(x+proportion*pixelSize, y+proportion*pixelSize, pixelSize, proportion*pixelSize);
    }
  },
  '8': {
    draw: function(x, y, proportion){
      ctx.fillRect(x, y+proportion*pixelSize, proportion*pixelSize, pixelSize);
    }
  },
}

var Puzzle = function(code, id){
  var m = this;
  m.pieces = [];
  m.loaded = false;
  m.enter = 15;
  m.exit = 7;
  m.proportion = 8;
  m.void = {i:0, j:0};
  m.id = id;


  m.decode = function(code){
    var zero = false;
    m.enter = parseInt(code[0], 16);
    m.exit = parseInt(code[1], 16);
    for (var j = 0; j < 4; j++) {
      m.pieces.push([]);
      for (var i = 0; i < 4; i++) {
        var value = parseInt(code[j*4+i+2], 16);
        m.pieces[j][i] = value;
        if(value==0&&!zero){
          m.pieces[j][i]=-1;
          m.void.i = i;
          m.void.j = j;
          zero = true;
        }
      }
    }
    m.loaded = true;
  };

  m.encode = function(){
    var code = '';
    code += m.enter.toString('16');
    code += m.exit.toString('16');
    m.pieces[m.void.j][m.void.i] = 0;
    for (var j = 0; j < 4; j++) {
      for (var i = 0; i < 4; i++) {
        code += m.pieces[j][i].toString('16')
      }
    }
    m.pieces[m.void.j][m.void.i] = -1;
    return code;
  }

  m.exchange = function(i, j){
    var temp = m.pieces[j][i];
    m.pieces[j][i] = -1;
    m.pieces[m.void.j][m.void.i] = temp;
  }

  m.toLeft = function(){
    if(m.void.i==0) return;
    m.exchange(m.void.i-1, m.void.j);
    m.void.i -=1;
  }

  m.toRight = function(){
    if(m.void.i==3) return;
    m.exchange(m.void.i+1, m.void.j);
    m.void.i +=1;
  }

  m.toTop = function(){
    if(m.void.j==0) return;
    m.exchange(m.void.i, m.void.j-1);
    m.void.j -=1;
  }

  m.toBottom = function(){
    if(m.void.j==3) return;
    m.exchange(m.void.i, m.void.j+1);
    m.void.j +=1;
  }

  m.draw = function(relx, rely){
    relx = relx || 0;
    rely = rely || 0;
    ctx.fillStyle = colors.P;
    ctx.fillRect(-relx*pixelSize, -rely*pixelSize, pixelSize*32, pixelSize*32);
    

    for (var j = 0; j < 4; j++) {
      for (var i = 0; i < 4; i++) {
        var code = m.pieces[j][i];
        var x = i*m.proportion*pixelSize-relx*pixelSize;
        var y = j*m.proportion*pixelSize-rely*pixelSize;
        var pp = m.proportion/2;
        ctx.fillStyle = colors.N;
        ctx.fillRect(x, y, m.proportion*pixelSize, pixelSize);
        ctx.fillRect(x, y + m.proportion*pixelSize, m.proportion*pixelSize, pixelSize);
        ctx.fillRect(x, y, pixelSize, m.proportion*pixelSize);
        ctx.fillRect(x+ m.proportion*pixelSize, y, pixelSize, m.proportion*pixelSize);

        if(code<=0){
          if(code==0) ctx.fillStyle = colors.P;
          ctx.fillRect(x+pixelSize, y+pixelSize, (m.proportion-1)*pixelSize, (m.proportion-1)*pixelSize);
          continue;
        }

        ctx.fillStyle = colors.M;
        if((code&1)>0) codes['1'].draw(x, y, pp);
        if((code&2)>0) codes['2'].draw(x, y, pp);
        if((code&4)>0) codes['4'].draw(x, y, pp);
        if((code&8)>0) codes['8'].draw(x, y, pp);
      }
    }
    
  };

  m.decode(code);

}