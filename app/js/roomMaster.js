
var world = {
  '0': {
    r:'1'
  },
  '1': {
    l:'0',
    u:'A'
  },
  '2': {
    l:'3',
    r:'4',
    d:'1'
  },
  '3': {
    r:'2',
    l:'A',
    u:'B'
  },
  '4': {
    l:'2',
    r:'C',
    d:'D'
  },
  'A': {
    t:'p',
    r:'B'
  },
  'B': {
    t:'p',
    d:'3'
  },
  'C': {
    t:'p',
    l:'3'
  },
  'D': {
    t:'p',
    u:'3'
  }
};

var currentRoom = world['0'];
var zone = 0;

function Room(){
  var m = this;
}

function getNextRoom(direction){
  var next = currentRoom[direction];
  currentRoom = world[next];
  return {
    name: next,
    data: currentRoom
  };
}

