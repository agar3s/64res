
var world = {
  '0': {
    r:'1'
  },
  '1': {
    l:'0',
    u:'2'
  },
  '2': {
    l:'3',
    r:'4',
    d:'1'
  },
  '3': {
    r:'2',
    l:'B',
    u:'C',
    scheme: 'base'
  },
  '4': {
    l:'2',
    r:'A',
    d:'D',
    scheme: 'base'
  },
  'A': {
    l:'4',
    r:'A',
    p:'2',
    code:'A',
    scheme: 'gboy2'
  },
  'AZ': {
    l:'p',
    code:'AZ'
  },
  'B': {
    r:'3',
    l:'3',
    code:'B',
    scheme: 'gboy'
  },
  'BZ': {
    r:'3',
    l:'B',
    code:'BZ'
  },
  'C': {
    t:'p',
    d:'3',
    code:'C',
    scheme: 'gboy3'
  },
  'CZ': {
    code:'CZ'
  },
  'D': {
    t:'p',
    u:'4',
    code:'D',
    scheme: 'exp2'
  },
  'DZ': {
    code:'DZ'
  }
};

var currentRoom = world[START];
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
    data: currentRoom,
    scheme: currentRoom.scheme
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


function getIposition(code){
  if(code==1||code==10) return 1;
  if(code==2||code==9) return 2;
  if(code>=3&&code<=8) return 3;
  return 0;
}

function getJposition(code){
  if(code==5||code==14) return 1;
  if(code==6||code==13) return 2;
  code = parseInt(code, 16);
  if(code>=7&&code<=12) return 3;
  return 0;
}


function generateRooms(zone, code){
  var enter = world[zone];
  var exit = world[zone+'Z'];

  var enterCode = parseInt(code[0], 16);
  var enterRoom = {
    i: getIposition(enterCode),
    j: getJposition(enterCode),
    side: 'urdl'[Math.floor(enterCode/4)],
    counterSide: 'dlur'[Math.floor(enterCode/4)]
  };

  var exitCode = parseInt(code[1], 16);
  var exitRoom = {
    i: getIposition(exitCode),
    j: getJposition(exitCode),
    side: 'urdl'[Math.floor(exitCode/4)],
    counterSide: 'dlur'[Math.floor(exitCode/4)]
  };


  for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 4; i++) {
      var value = parseInt(code[j*4+i+2], 16);
      
      var room = insertRoom(i, j, value, zone);
      
      //temp solution
      if(i==enterRoom.i&&j==enterRoom.j){
        room[enterRoom.side] = enter.code;
        enter[enterRoom.counterSide] = zone+i+''+j;
      }
      if(i==exitRoom.i&&j==exitRoom.j){
        room[exitRoom.side] = exit.code
        exit[exitRoom.counterSide] = zone+i+''+j;
      }
      world[zone+i+''+j]=room;
    }
  }
}

generateRooms("A", puzzleBible['2'].current);
generateRooms("B", puzzleBible['4'].current);
generateRooms("C", puzzleBible['6'].current);
generateRooms("D", puzzleBible['8'].current);