var enemyBible = {
  'dog': {
    hp: 3,
    power: 2,
    sequence: 'aw20',
    size:1,
    startAnimation: 'idle'
    // animations> attack, idle
  },
  'zombie': {
    hp: 3,
    power: 2,
    sequence: 'aw20',
    size:1,
    startAnimation: 'wake'
    // animations> wake, attack, walk
  },
  'air': {
    hp: 3,
    power: 2,
    sequence: 'aw20',
    size:2,
    startAnimation: 'idle'
    // animations> attack, idle, walk
  },
  'earth': {
    hp: 3,
    power: 2,
    sequence: 'aw20',
    size:2,
    startAnimation: 'idle'
    // animations> attack, idle, move
  },
  'fire': {
    hp: 3,
    power: 2,
    sequence: 'aw20',
    size:2,
    startAnimation: 'idle'
    // animations> attack, idle, walk
  },
  'water': {
    hp: 3,
    power: 2,
    sequence: 'aw20',
    size:2,
    startAnimation: 'idle'
    // animations> attack, idle, walk
  },
};

var generate = function(type, x, y, direction){
  var data = enemyBible[type];
  var monster = new Monster({
    type: type,
    nameCode: type+'_'+data.startAnimation,
    hp: data.hp,
    x: x-data.size*8,
    y: y-data.size*8
  });
  monster.sprite.setDirection(direction||0);
  monster.sprite.setPixelSize(pixelSize*data.size);
  monster.sprite.setAnimation(type+'_'+data.startAnimation);
  return monster;
}

var types = ['dog', 'zombie', 'air', 'earth', 'fire', 'water'];

var generateMonsters = function(dataArray){
  var monsters = [];
  for (var i = 0; i < dataArray.length; i++) {
    var data = dataArray[i];
    monsters.push(generate(types[data.type], data.i, data.j, data.direction));
  };
  return monsters;
}