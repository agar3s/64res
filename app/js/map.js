var oReq = new XMLHttpRequest();


var Map = function(source){
  console.log(source);
  drawing = new Image();
  drawing.src = source; // can also be a remote URL e.g. http://
  console.log(drawing);
  this.map = [];
  var self = this;
  drawing.onload = function() {
    ctx.drawImage(drawing, 0, 0);
    var imgd = ctx.getImageData(0, 0, drawing.width, drawing.height);
    var pix = imgd.data;

    // Loop over each pixel and invert the color.
    var row = -1;
    console.log(self);
    for (var i = 0, n = pix.length; i < n; i += 4) {
      if(i%drawing.width==0){
        self.map.push([]);
        row++;
      }
      self.map[row].push(Math.floor(pix[i]/64)); // red
    }
    console.log(self.map[0].length, self.map.length);
  };

  this.draw = function(x, y, width, height){
    x = x+width>=this.map[0].length?this.map[0].length-1-width:x;
    y = y+height>=this.map.length?this.map.length-1-height:y;
    console.log(y);

    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        var color = this.map[i+y][j+x];
        if(color!=3){
          ctx.fillStyle = colors['MNO'[color]];
          ctx.fillRect(j*pixelSize, i*pixelSize, pixelSize, pixelSize);
        }
      };
    };
  }
}