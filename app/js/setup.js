var doc = document;
doc.get = doc.getElementById;
var canvas = doc.get('c');
var ctx = canvas.getContext('2d');

var pixelSize = 8;

var colors = {
  M: '#0E3A19',
  N: '#32623D',
  O: '#6D9F6B',
  P: '#96BA39'
};

var schemas = {
  gboy: {
    m:'#0E3A19',
    n:'#32623D',
    o:'#6D9F6B',
    p:'#96BA39'
  },
  gboy2: {
    m:'#0E1D24',
    n:'#2B6752',
    o:'#81BF76',
    p:'#DDF8D1'
  },
  gboy3: {
    m:'#000000',
    n:'#525252',
    o:'#929292',
    p:'#FFFFFF'
  },
};

function changeColorSchema(schema, inverse){
  console.log(schema);
  colors.M = inverse?schema.p:schema.m;
  colors.N = inverse?schema.o:schema.n;
  colors.O = inverse?schema.n:schema.o;
  colors.P = inverse?schema.m:schema.p;
};


//requestAnimationFrame
var lastTime = 0;
var vendors = ['ms', 'moz', 'webkit', 'o'];
for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
  requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
}

if (!requestAnimationFrame) {
  requestAnimationFrame = function(callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = setTimeout(function() { callback(currTime + timeToCall); },
      timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}
ra = requestAnimationFrame;