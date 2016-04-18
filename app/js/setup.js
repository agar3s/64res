var doc = document;
doc.get = doc.getElementById;
var canvas = doc.get('c');
var ctx = canvas.getContext('2d');

var pixelSize = 7;
var screenSize = 64;
var START = '2';


var schemas = {
  base: {
    M:'#92989B',
    N:'#7B7D7F',
    O:'#434147',
    P:'#000000'
  },
  gboy: {
    M:'#0E3A19',
    N:'#32623D',
    O:'#6D9F6B',
    P:'#96BA39'
  },
  gboy2: {
    M:'#0E1D24',
    N:'#2B6752',
    O:'#81BF76',
    P:'#DDF8D1'
  },
  gboy3: {
    M:'#000000',
    N:'#525252',
    O:'#929292',
    P:'#FFFFFF'
  },
  exp1: {
    M:'#A4155D',
    N:'#525252',
    O:'#F14D9F',
    P:'#E2FFE2'
  },
  exp2: {
    M:'#F21E12',
    N:'#890902',
    O:'#1C492D',
    P:'#000000'
  },
};

var colors = {
  M:'#92989B',
  N:'#7B7D7F',
  O:'#434147',
  P:'#000000'
};

function changeColorSchema(schema, inverse){
  colors.M = schema.M;
  colors.N = schema.N;
  colors.O = schema.O;
  colors.P = schema.P;
  if(inverse) inverseColors();
};


function inverseColors(){
  var m =  colors.M;
  var n =  colors.N;
  var o =  colors.O;
  var p =  colors.P;
  colors.M = p;
  colors.N = o;
  colors.O = n;
  colors.P = m;
};

// PARAMS 
//gravity config
var GRAVITY_FORCE = 1;
var Y_ACELERATION = -1;
var MAX_JUMP_POWER = 15;
var ROWS_TO_CHECK_FLOOR_COLLISION = 2;


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

var snd = new Audio("assets/main_theme.ogg");
snd.loop = true;
snd.play();