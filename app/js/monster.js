
var Monster = function(props){
  var m = this;
  m.name = props.nameCode;
  m.landed = false;

  //load sprite depending on nameCode and type
  var layers = [];
  for (var i = 0; i < 4; i++) {
    var layer = 'MNOP'[i];
    layers.push({
      key: m.name + layer,
      layer: layer
    });
  };
  m.sprite = new LayeredSprite(layers);

  m.sprite.setPixelSize(pixelSize);

  m.sprite.maxVx = props.vx||m.pixelSize*2;
  m.sprite.setPos(props.x, props.y)

  m.maxhp = props.hp;
  m.coldown = props.coldown;
  m.maxColdown = m.coldown;
  
  m.setActionPipe = function(actionpipe){
    var newPipe = '';
    for (var i = 0; i < actionpipe.length; i++) {
      var action = actionpipe[i];
      var times = parseInt(actionpipe.substring(i+1,i+4));
      if(!times){
        newPipe+=action;
        continue;
      }
      i+= (''+times).length;
      for (var j = 0; j < times; j++) {
        newPipe+=(action);
      }
    }
    m.actionpipe = newPipe;
  }

  m.setActionPipe(props.actionpipe||'f60taw20');
  m.actionIndex = 0;

  m.attack1 = function(){
    if(m.coldown<=0){
      m.sprite.setAnimation('p');
      var vx = -(m.sprite.x - hero.x);
      var vy = -(m.sprite.y - hero.y);
      var h = Math.sqrt(vx*vx+vy*vy);
      vx/=h;
      vy/=h;
      //var power = new Power(m.skills.current, m.sprite.pixelSize/3, m.damage, m.sprite.x+8*3, m.sprite.y, 3*vx, 3*vy);

      //enemypowers.push(power);
      m.coldown = m.maxColdown;
    }
  }

  //follow the hero
  m.follow = function(){
    m.sprite.direction = m.sprite.x<hero.x;
    m.sprite.forward();
  }

  //run away from the hero
  m.away = function(){
    m.sprite.direction = m.sprite.x>hero.x;
    m.sprite.forward();
  }

  m.fall = function(){
    if(!m.landed){
      m.sprite.fall();
      m.landed = mapScene.map.checkCollision(m.sprite, ROWS_TO_CHECK_FLOOR_COLLISION)!=-1;
      console.log('LANDED!!!!');
    }
  }

  m.actions = {
    f: m.sprite.forward,
    t: m.sprite.turn,
    j: m.sprite.jump,
    m: function(){},
    a: m.attack1,
    b: m.attack2,
    c: m.attack3,
    s: m.sprite.stopX,
    w: function(){},
    l: function(){  // lock until land, do nothing
      if(!mapScene.map.checkCollision(m.sprite, ROWS_TO_CHECK_FLOOR_COLLISION))
        m.actionIndex--;
    },
    d: function(){  // move forward until land
      if(!mapScene.map.checkCollision(m.sprite, ROWS_TO_CHECK_FLOOR_COLLISION)){
        m.actionIndex--;
        m.sprite.forward();
      }else{
        m.sprite.stopX();
      }
    },
    g: m.follow,
    r: m.away,
    h: function(){  // fly
      m.sprite.fall =function(){};
    },
    x: function(){  // restore gravity
    },
    u: function(){  // up
      m.sprite.y-=3;
    },
    n: function(){  // down
      m.sprite.y+=3;
    },
    k: function(){  // diagonal
      m.actions.u();
      m.sprite.forward();
    },
    m: function(){  // transversal
      m.actions.n();
      m.sprite.forward();
    }
  } 

  //do the next action in the pipe
  m.nextAction = function(){
    var action = m.actionpipe[m.actionIndex];
    m.actions[action]();
    if(++m.actionIndex>=m.actionpipe.length) m.actionIndex = 0;
  }

  m.update = function(){
    m.nextAction();
    //m.sprite.update();
    if(--m.coldown<0) m.coldown=0;
  }

  //triggers coded in an array
  // m.trigger[0] = hummm
  m.triggers = [
    function(){
      console.log('do something after dead');
    }
  ];

  m.trigger = function(event){
    m.triggers[m.triggerType]();
  }

  m.hit = function(type, damage, direction){
    var totalDamage = getTotalDamage(type, m.skills.current, damage);
    m.sprite.x+=(direction?1:-1)*totalDamage*(10-m.damage);
    if(m.sprite.hit(totalDamage)&&!m.del){
      m.del = 1;
      m.trigger('death');
    }
  }

}