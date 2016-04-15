
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
    l:'A',
    r:'A',
    p:'2',
    code:'A'
  },
  'AZ': {
    l:'p',
    code:'AZ'
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

var currentRoom = world['A'];
var zone = 0;

function Room(){
  var m = this;
}

function isNextRoom(direction){
  var next = currentRoom[direction];
  return !!next;
}

function getNextRoom(direction){
  var next = currentRoom[direction];
  currentRoom = world[next];
  return {
    name: currentRoom.code || next,
    data: currentRoom
  };
}

function insertRoom(i, j, value, zone){
  var room = {
    code: zone+value.toString(16), // to load the image
    value: value      // to know boundaries
  };

  var toLeft = zone+(i-1)+''+j;
  var toTop = zone+i+''+(j-1);

  // connect this room with the left adjacent room if there is a way
  if(i!=0&&(value&8)&&(world[toLeft].value&2)){
    room.l = toLeft;
    world[toLeft].r = zone+i+''+j;
  }

  // connect this room with the top adjacent room if there is a way
  if(j!=0&&(value&1)&&(world[toTop].value&4)){
    room.u = toTop;
    world[toTop].d = zone+i+''+j;
  }
  return room;
}

function generateRooms(zone, code){
  console.log('going to generate rooms');
  var enter = world[zone];
  var exit = world[zone+'Z'];
  for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 4; i++) {
      var value = parseInt(code[j*4+i+2], 16);
      
      var room = insertRoom(i, j, value, zone);
      
      //temp solution
      if(i==0&&j==0){
        room.l = enter.code;
        enter.r = zone+i+''+j;
      }
      if(i==3&&j==3){
        room.r = exit.code
        exit.l = zone+i+''+j;
      }
      world[zone+i+''+j]=room;
    }
  }
}

generateRooms("A", puzzleBible['2'].current);