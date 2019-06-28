var States = [
  {
    // A
    id: '1',
    side: {
      front: 'A',
      up: 'B',
      down: 'D',
      left: 'F',
      right: 'E',
      back: 'C'
    },
    action: {
      left: { x: 0, y: -1, z: 0 },
      right: { x: 0, y: 1, z: 0 },
      up: { x: 1, y: 0, z: 0 },
      down: { x: -1, y: 0, z: 0 }
    }
  },
  {
    id: '2',
    side: {
      front: 'A',
      left: 'B',
      right: 'D',
      back: 'C',
      up: 'E',
      down: 'F'
    },
    action: {
      left: { x: 1, y: 0, z: 0 },
      right: { x: -1, y: 0, z: 0 },
      up: { x: 0, y: 1, z: 0 },
      down: { x: 0, y: -1, z: 0 }
    }
  },
  {
    id: '3',
    side: {
      front: 'A',
      left: 'E',
      right: 'F',
      back: 'C',
      up: 'D',
      down: 'B'
    },
    action: {
      left: { x: 0, y: 1, z: 0 },
      right: { x: 0, y: -1, z: 0 },
      up: { x: -1, y: 0, z: 0 },
      down: { x: 1, y: 0, z: 0 }
    }
  },
  {
    id: '4',
    side: {
      front: 'A',
      left: 'D',
      right: 'B',
      back: 'C',
      up: 'F',
      down: 'E'
    },
    action: {
      left: { x: -1, y: 0, z: 0 },
      right: { x: 1, y: 0, z: 0 },
      up: { x: 0, y: -1, z: 0 },
      down: { x: 0, y: 1, z: 0 }
    }
  }, // B
  {
    id: '5',
    side: {
      front: 'B',
      left: 'F',
      right: 'E',
      back: 'D',
      up: 'C',
      down: 'A'
    },
    action: {
      left: { x: 0, y: 0, z: -1 },
      right: { x: 0, y: 0, z: 1 },
      up: { x: 1, y: 0, z: 0 },
      down: { x: -1, y: 0, z: 0 }
    }
  },
  {
    id: '6',
    side: {
      front: 'B',
      left: 'C',
      right: 'A',
      back: 'D',
      up: 'E',
      down: 'F'
    },
    action: {
      left: { x: 1, y: 0, z: 0 },
      right: { x: -1, y: 0, z: 0 },
      up: { x: 0, y: 0, z: 1 },
      down: { x: 0, y: 0, z: -1 }
    }
  },
  {
    id: '7',
    side: {
      front: 'B',
      left: 'E',
      right: 'F',
      back: 'D',
      up: 'A',
      down: 'C'
    },
    action: {
      left: { x: 0, y: 0, z: 1 },
      right: { x: 0, y: 0, z: -1 },
      up: { x: -1, y: 0, z: 0 },
      down: { x: 1, y: 0, z: 0 }
    }
  },
  {
    id: '8',
    side: {
      front: 'B',
      left: 'A',
      right: 'C',
      back: 'D',
      up: 'F',
      down: 'E'
    },
    action: {
      left: { x: -1, y: 0, z: 0 },
      right: { x: 1, y: 0, z: 0 },
      up: { x: 0, y: 0, z: -1 },
      down: { x: 0, y: 0, z: 1 }
    }
  }, // C
  {
    id: '9',
    side: {
      front: 'C',
      left: 'B',
      right: 'D',
      back: 'A',
      up: 'F',
      down: 'E'
    },
    action: {
      left: { x: -1, y: 0, z: 0 },
      right: { x: 1, y: 0, z: 0 },
      up: { x: 0, y: 1, z: 0 },
      down: { x: 0, y: -1, z: 0 }
    }
  },
  {
    id: '10',
    side: {
      front: 'C',
      left: 'E',
      right: 'F',
      back: 'A',
      up: 'B',
      down: 'D'
    },
    action: {
      left: { x: 0, y: -1, z: 0 },
      right: { x: 0, y: 1, z: 0 },
      up: { x: -1, y: 0, z: 0 },
      down: { x: 1, y: 0, z: 0 }
    }
  },
  {
    id: '11',
    side: {
      front: 'C',
      left: 'D',
      right: 'B',
      back: 'A',
      up: 'E',
      down: 'F'
    },
    action: {
      left: { x: 1, y: 0, z: 0 },
      right: { x: -1, y: 0, z: 0 },
      up: { x: 0, y: -1, z: 0 },
      down: { x: 0, y: 1, z: 0 }
    }
  },
  {
    id: '12',
    side: {
      front: 'C',
      left: 'F',
      right: 'E',
      back: 'A',
      up: 'D',
      down: 'B'
    },
    action: {
      left: { x: 0, y: 1, z: 0 },
      right: { x: 0, y: -1, z: 0 },
      up: { x: 1, y: 0, z: 0 },
      down: { x: -1, y: 0, z: 0 }
    }
  },
  // D
  {
    id: '13',
    side: {
      front: 'D',
      left: 'F',
      right: 'E',
      back: 'B',
      up: 'A',
      down: 'C'
    },
    action: {
      left: { x: 0, y: 0, z: 1 },
      right: { x: 0, y: 0, z: -1 },
      up: { x: 1, y: 0, z: 0 },
      down: { x: -1, y: 0, z: 0 }
    }
  },
  {
    id: '14',
    side: {
      front: 'D',
      left: 'A',
      right: 'C',
      back: 'B',
      up: 'E',
      down: 'F'
    },
    action: {
      left: { x: 1, y: 0, z: 0 },
      right: { x: -1, y: 0, z: 0 },
      up: { x: 0, y: 0, z: -1 },
      down: { x: 0, y: 0, z: 1 }
    }
  },
  {
    id: '15',
    side: {
      front: 'D',
      left: 'E',
      right: 'F',
      back: 'B',
      up: 'C',
      down: 'A'
    },
    action: {
      left: { x: 0, y: 0, z: -1 },
      right: { x: 0, y: 0, z: 1 },
      up: { x: -1, y: 0, z: 0 },
      down: { x: 1, y: 0, z: 0 }
    }
  },
  {
    id: '16',
    side: {
      front: 'D',
      left: 'C',
      right: 'A',
      back: 'B',
      up: 'F',
      down: 'E'
    },
    action: {
      left: { x: -1, y: 0, z: 0 },
      right: { x: 1, y: 0, z: 0 },
      up: { x: 0, y: 0, z: 1 },
      down: { x: 0, y: 0, z: -1 }
    }
  }, // E
  {
    id: '17',
    side: {
      front: 'E',
      left: 'A',
      right: 'C',
      back: 'F',
      up: 'B',
      down: 'D'
    },
    action: {
      left: { x: 0, y: -1, z: 0 },
      right: { x: 0, y: 1, z: 0 },
      up: { x: 0, y: 0, z: -1 },
      down: { x: 0, y: 0, z: 1 }
    }
  },
  {
    id: '18',
    side: {
      front: 'E',
      left: 'B',
      right: 'D',
      back: 'F',
      up: 'C',
      down: 'A'
    },
    action: {
      left: { x: 0, y: 0, z: -1 },
      right: { x: 0, y: 0, z: 1 },
      up: { x: 0, y: 1, z: 0 },
      down: { x: 0, y: -1, z: 0 }
    }
  },
  {
    id: '19',
    side: {
      front: 'E',
      left: 'C',
      right: 'A',
      back: 'F',
      up: 'D',
      down: 'B'
    },
    action: {
      left: { x: 0, y: 1, z: 0 },
      right: { x: 0, y: -1, z: 0 },
      up: { x: 0, y: 0, z: 1 },
      down: { x: 0, y: 0, z: -1 }
    }
  },
  {
    id: '20',
    side: {
      front: 'E',
      left: 'D',
      right: 'B',
      back: 'F',
      up: 'A',
      down: 'C'
    },
    action: {
      left: { x: 0, y: 0, z: 1 },
      right: { x: 0, y: 0, z: -1 },
      up: { x: 0, y: -1, z: 0 },
      down: { x: 0, y: 1, z: 0 }
    }
  }, // F
  {
    id: '21',
    side: {
      front: 'F',
      left: 'C',
      right: 'A',
      back: 'E',
      up: 'B',
      down: 'D'
    },
    action: {
      left: { x: 0, y: -1, z: 0 },
      right: { x: 0, y: 1, z: 0 },
      up: { x: 0, y: 0, z: 1 },
      down: { x: 0, y: 0, z: -1 }
    }
  },
  {
    id: '22',
    side: {
      front: 'F',
      left: 'B',
      right: 'D',
      back: 'E',
      up: 'A',
      down: 'C'
    },
    action: {
      left: { x: 0, y: 0, z: 1 },
      right: { x: 0, y: 0, z: -1 },
      up: { x: 0, y: 1, z: 0 },
      down: { x: 0, y: -1, z: 0 }
    }
  },
  {
    id: '23',
    side: {
      front: 'F',
      left: 'A',
      right: 'C',
      back: 'E',
      up: 'D',
      down: 'B'
    },
    action: {
      left: { x: 0, y: 1, z: 0 },
      right: { x: 0, y: -1, z: 0 },
      up: { x: 0, y: 0, z: -1 },
      down: { x: 0, y: 0, z: 1 }
    }
  },
  {
    id: '24',
    side: {
      front: 'F',
      left: 'D',
      right: 'B',
      back: 'E',
      up: 'C',
      down: 'A'
    },
    action: {
      left: { x: 0, y: 0, z: -1 },
      right: { x: 0, y: 0, z: 1 },
      up: { x: 0, y: -1, z: 0 },
      down: { x: 0, y: 1, z: 0 }
    }
  }
];

var DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up',
  DOWN: 'down'
};

var ANIMATION_TYPE = {
  VH: 'VH', // vert-hori-loop
  TL: 'TL' // top-left-steps
};

function _Cube(dom, delayTime) {
  this.dom = dom;
  this.stateIdx = 0;
  this.side = 'A';
  this.lastSide = undefined;
  this.lastRotation = undefined;
  this.dom.style.transform = '';
  this.nextTransformVal = '';
  this.startX = undefined;
  this.startY = undefined;
  this.swipeDirection = undefined;
  this.turn = 0;
  this.isTouchEventSupported = 'ontouchstart' in window;
  this.timers = [];
  this.interacted = false;
  this.lastTime = new Date().getTime();
  this.delayTime = delayTime;
  this.endX = undefined;
  this.endY = undefined;

  this.init();
}

_Cube.prototype = {
  init() {
    // choose event
    this.startEvent = this.isTouchEventSupported ? 'touchstart' : 'mousedown';
    this.moveEvent = this.isTouchEventSupported ? 'touchmove' : 'mousemove';
    this.endEvent = this.isTouchEventSupported ? 'touchend' : 'mouseup';

    // mousedown, touchstart event
    this.startHandler = this.startHandler.bind(this);
    this.dom.addEventListener(this.startEvent, this.startHandler);

    // mousemove, touchmove event
    this.moveHandler = this.moveHandler.bind(this);
    this.dom.addEventListener(this.moveEvent, this.moveHandler);

    // mouseenter, mouseleave event
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    if (!this.isTouchEventSupported) {
      // this.dom.addEventListener('mouseleave', this.mouseLeaveHandler);
      // this.dom.addEventListener('mouseenter', this.mouseEnterHandler);
    }
    this.preventClick = this.preventClick.bind(this);
  },

  getLastTransform(transform) {
    const pos = transform.lastIndexOf('rotate3d');
    if (pos === -1) return '';
    return transform.substr(0, pos - 1);
  },

  getDegree(index, rotation) {
    var x = States[index].action[rotation].x;
    var y = States[index].action[rotation].y;
    var z = States[index].action[rotation].z;
    return 'rotate3d(' + x + ',' + y + ',' + z + ', 90deg)';
  },

  findIndex() {
    for (let i = 0; i < 24; i += 1) {
      if (
        this.side === States[i].side.front &&
        this.lastSide === States[i].side[this.lastRotation]
      ) {
        this.stateIdx = i;
        return;
      }
    }
  },

  forceRender() {
    return this.dom.clientHeight;
  },

  nextSide(direction, lastDirection) {
    this.forceRender();
    this.dom.classList.add('transition');
    // 現在是哪一面
    this.lastSide = this.side;
    // 轉幾度過去
    this.dom.style.transform = this.dom.style.transform.concat(
      ' ',
      this.getDegree(this.stateIdx, direction)
    );
    // 下一面是誰
    this.side = States[this.stateIdx].side[lastDirection];
    // 更新 stateIdx/side/lastrotation/lastside
    this.lastRotation = direction;
    this.findIndex();
  },

  rotate(direction) {
    if (direction === DIRECTION.LEFT) {
      this.nextSide(direction, DIRECTION.RIGHT);
    }
    if (direction === DIRECTION.RIGHT) {
      this.nextSide(direction, DIRECTION.LEFT);
    }
    if (direction === DIRECTION.UP) {
      this.nextSide(direction, DIRECTION.DOWN);
    }
    if (direction === DIRECTION.DOWN) {
      this.nextSide(direction, DIRECTION.UP);
    }
  },

  mouseLeaveHandler() {
    this.dom.classList.add('transition');
    this.dom.style.transform = this.nextTransformVal;
  },

  mouseEnterHandler() {
    this.nextTransformVal = this.dom.style.transform;
    var currentTransformVal = window
      .getComputedStyle(this.dom)
      .getPropertyValue('transform');

    if (this.side === 'C' && this.lastSide === 'F') {
      var postVal = currentTransformVal
        .split('(')[1]
        .match(/-?[\d.]+(e-\d+)?/g);
      var angle = Math.round(
        Math.atan2(postVal[9], postVal[10]) * (180 / Math.PI)
      );
      angle -= 90;

      var lastTransform = this.getLastTransform(this.nextTransformVal);
      var realTransform =
        lastTransform + 'rotate3d(0 , 1 ,0 ,' + angle + 'deg)';
      this.dom.style.transform = realTransform;
    } else {
      this.dom.style.transform = currentTransformVal;
    }

    this.dom.classList.remove('transition');
  },

  startHandler(e) {
    if (!this.isTouchEventSupported) {
      e.preventDefault();
    }
    this.startX = this.isTouchEventSupported
      ? e.changedTouches[0].pageX
      : e.clientX;
    this.startY = this.isTouchEventSupported
      ? e.changedTouches[0].pageY
      : e.clientY;

    if (!this.isTouchEventSupported) {
      // this.dom.removeEventListener('mouseenter', this.mouseEnterHandler);
      // this.dom.removeEventListener('mouseleave', this.mouseLeaveHandler);
    }
  },

  moveHandler(e) {
    e.stopPropagation();
    if (e.cancelable) {
      e.preventDefault();
    } else return false;
  },

  preventClick(e) {
    var distance = Math.sqrt(
      Math.pow(this.startX - this.endX, 2) +
        Math.pow(this.startY - this.endY, 2)
    );
    var assets = document.querySelectorAll('.asset');

    if (distance > 5) {
      e.preventDefault();
      e.stopPropagation();
      this.startX = undefined;
      this.startY = undefined;
      return;
    }
    this.startX = undefined;
    this.startY = undefined;
  }
};

function VertHoriCube(dom, delayTime, roundTime) {
  _Cube.call(this, dom, delayTime);
  this.isDirectionChanged = false;
  this.animation = this.animation.bind(this);

  this.initStateEndHandler = this.initStateEndHandler.bind(this);
  if (!this.isTouchEventSupported) {
    var assets = document.querySelectorAll('.asset');
    for (var i = 0; i < assets.length; i += 1) {
      assets[i].addEventListener('click', this.preventClick);
    }
    document.addEventListener('mouseup', this.initStateEndHandler);
  } else {
    this.dom.addEventListener('touchend', this.initStateEndHandler);
  }

  this.toRightSide = this.toRightSide.bind(this);
  this.toUpSide = this.toUpSide.bind(this);

  this.activeStateEndHandler = this.activeStateEndHandler.bind(this);
  this.roundTime = roundTime;
}

VertHoriCube.prototype = Object.create(_Cube.prototype);
VertHoriCube.prototype.constructor = VertHoriCube;

VertHoriCube.prototype.animation = function() {
  var self = this;
  var currentTime = new Date().getTime();
  var deltaTime = currentTime - this.lastTime;

  if (deltaTime >= this.delayTime * 1000 && !this.interacted) {
    if (!this.isDirectionChanged) {
      if (this.side === 'A') {
        self.rotate(DIRECTION.DOWN);
      } else if (this.side === 'B') {
        self.rotate(DIRECTION.DOWN);
      } else if (this.side === 'C') {
        self.rotate(DIRECTION.DOWN);
      } else if (this.side === 'D') {
        self.rotate(DIRECTION.DOWN);
        this.isDirectionChanged = true;
      }
    } else if (this.isDirectionChanged) {
      if (this.side === 'A') {
        self.rotate(DIRECTION.LEFT);
      } else if (this.side === 'E') {
        self.rotate(DIRECTION.LEFT);
      } else if (this.side === 'C') {
        self.rotate(DIRECTION.LEFT);
      } else if (this.side === 'F') {
        self.rotate(DIRECTION.LEFT);
        this.isDirectionChanged = false;
      }
    }
    this.lastTime = currentTime;
  }
  setTimeout(this.animation, this.roundTime * 1000);
};

VertHoriCube.prototype.toRightSide = function() {
  this.dom.style.transform = this.getLastTransform(this.nextTransformVal);
  this.dom.classList.add('transition');
  var __tmpSide = this.side;
  this.side = this.lastSide;
  this.lastSide = __tmpSide;
  this.lastRotation = DIRECTION.RIGHT;
  this.findIndex();
};

VertHoriCube.prototype.toUpSide = function() {
  this.dom.style.transform = this.getLastTransform(this.nextTransformVal);
  this.dom.classList.add('transition');
  var _tmpSide = this.side;
  this.side = this.lastSide;
  this.lastSide = _tmpSide;
  this.lastRotation = DIRECTION.UP;
  this.findIndex();
};

VertHoriCube.prototype.activeStateEndHandler = function(e) {
  this.endX = this.isTouchEventSupported
    ? e.changedTouches[0].pageX
    : e.clientX;
  this.endY = this.isTouchEventSupported
    ? e.changedTouches[0].pageY
    : e.clientY;

  var deltaX = Math.abs(this.endX - this.startX);
  var deltaY = Math.abs(this.endY - this.startY);

  if (
    this.startX == null ||
    this.startX === this.endX ||
    this.startY == null ||
    this.startY === this.endY
  ) {
    return;
  }

  if (
    this.startX != null &&
    this.startX !== this.endX &&
    this.startY != null &&
    this.startY !== this.endY
  ) {
    if (deltaY > deltaX && this.endY > this.startY) {
      this.swipeDirection = DIRECTION.DOWN;
      this.rotate(DIRECTION.DOWN);
    } else if (deltaY > deltaX && this.endY < this.startY) {
      this.swipeDirection = DIRECTION.UP;
      this.rotate(DIRECTION.UP);
    } else if (deltaY < deltaX && this.endX > this.startX) {
      this.swipeDirection = DIRECTION.RIGHT;
      this.rotate(DIRECTION.RIGHT);
    } else if (deltaY < deltaX && this.endX < this.startX) {
      this.swipeDirection = DIRECTION.LEFT;
      this.rotate(DIRECTION.LEFT);
    }
  }
};

VertHoriCube.prototype.initStateEndHandler = function(e) {
  this.endX = this.isTouchEventSupported
    ? e.changedTouches[0].pageX
    : e.clientX;
  this.endY = this.isTouchEventSupported
    ? e.changedTouches[0].pageY
    : e.clientY;

  if (
    this.startX == null ||
    this.startX === this.endX ||
    this.startY == null ||
    this.startY === this.endY
  ) {
    return;
  }

  var deltaX = Math.abs(this.endX - this.startX);
  var deltaY = Math.abs(this.endY - this.startY);

  if (deltaY > deltaX && this.endY > this.startY) {
    this.swipeDirection = DIRECTION.DOWN;
  } else if (deltaY > deltaX && this.endY < this.startY) {
    this.swipeDirection = DIRECTION.UP;
  } else if (deltaY < deltaX && this.endX > this.startX) {
    this.swipeDirection = DIRECTION.RIGHT;
  } else if (deltaY < deltaX && this.endX < this.startX) {
    this.swipeDirection = DIRECTION.LEFT;
  }

  this.interacted = true;

  if (this.lastRotation === DIRECTION.DOWN) {
    if (this.swipeDirection === DIRECTION.UP) {
      if (this.isTouchEventSupported) {
        this.rotate(DIRECTION.UP);
      } else {
        this.rotate(DIRECTION.UP);
      }
    } else if (
      [DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(
        this.swipeDirection
      )
    ) {
      if (!this.isTouchEventSupported) {
        // this.dom.style.transform = this.nextTransformVal;
        // this.dom.classList.add('transition');
      }
    }
  } else if (this.lastRotation === DIRECTION.LEFT) {
    if (this.swipeDirection === DIRECTION.RIGHT) {
      if (this.isTouchEventSupported) {
        this.rotate(DIRECTION.RIGHT);
      } else {
        // this.toRightSide();
        this.rotate(DIRECTION.RIGHT);
      }
    } else if (
      [DIRECTION.LEFT, DIRECTION.DOWN, DIRECTION.UP].includes(
        this.swipeDirection
      )
    ) {
      if (!this.isTouchEventSupported) {
        // this.dom.style.transform = this.nextTransformVal;
        // this.dom.classList.add('transition');
      }
    }
  }

  if (this.isTouchEventSupported) {
    this.dom.removeEventListener(this.endEvent, this.initStateEndHandler);
    this.dom.addEventListener(this.endEvent, this.activeStateEndHandler);
  } else {
    document.removeEventListener(this.endEvent, this.initStateEndHandler);
    document.addEventListener(this.endEvent, this.activeStateEndHandler);
  }
};

function TopLeftCube(dom, delayTime, roundTime) {
  _Cube.call(this, dom, delayTime);
  this.animation = this.animation.bind(this);
  this.toUpSide = this.toUpSide.bind(this);
  this.toLeftSide = this.toLeftSide.bind(this);
  this.activeStateEndHandler = this.activeStateEndHandler.bind(this);
  this.roundTime = roundTime;

  this.initStateEndHandler = this.initStateEndHandler.bind(this);
  if (!this.isTouchEventSupported) {
    var assets = document.querySelectorAll('.asset');
    for (var i = 0; i < assets.length; i += 1) {
      assets[i].addEventListener('click', this.preventClick);
    }
    document.addEventListener('mouseup', this.initStateEndHandler);
  } else {
    this.dom.addEventListener('touchend', this.initStateEndHandler);
  }
}

TopLeftCube.prototype = Object.create(_Cube.prototype);
TopLeftCube.prototype.constructor = TopLeftCube;

TopLeftCube.prototype.animation = function() {
  var self = this;
  var currentTime = new Date().getTime();
  var deltaTime = currentTime - this.lastTime;

  if (deltaTime >= this.delayTime * 1000 && !this.interacted) {
    if (this.side === 'A') {
      self.rotate(DIRECTION.DOWN);
    } else if (this.side === 'B') {
      self.rotate(DIRECTION.RIGHT);
    } else if (this.side === 'F') {
      self.rotate(DIRECTION.DOWN);
    } else if (this.side === 'C') {
      self.rotate(DIRECTION.RIGHT);
    } else if (this.side === 'D') {
      self.rotate(DIRECTION.DOWN);
    } else if (this.side === 'E') {
      self.rotate(DIRECTION.RIGHT);
    }

    this.lastTime = currentTime;
  }
  setTimeout(this.animation, this.roundTime * 1000);
};

TopLeftCube.prototype.toUpSide = function() {
  this.dom.style.transform = this.getLastTransform(this.nextTransformVal);
  this.dom.classList.add('transition');
  var _tmpSide = this.side;
  this.side = this.lastSide;
  this.lastSide = _tmpSide;
  this.lastRotation = DIRECTION.UP;
  this.findIndex();
};

TopLeftCube.prototype.toLeftSide = function() {
  this.dom.style.transform = this.getLastTransform(this.nextTransformVal);
  this.dom.classList.add('transition');
  var __tmpSide = this.side;
  this.side = this.lastSide;
  this.lastSide = __tmpSide;
  this.lastRotation = DIRECTION.LEFT;
  this.findIndex();
};

TopLeftCube.prototype.activeStateEndHandler = function(e) {
  this.endX = this.isTouchEventSupported
    ? e.changedTouches[0].pageX
    : e.clientX;
  this.endY = this.isTouchEventSupported
    ? e.changedTouches[0].pageY
    : e.clientY;

  var deltaX = Math.abs(this.endX - this.startX);
  var deltaY = Math.abs(this.endY - this.startY);

  if (
    this.startX == null ||
    this.startX === this.endX ||
    this.startY == null ||
    this.startY === this.endY
  ) {
    return;
  }

  if (
    this.startX != null &&
    this.startX !== this.endX &&
    this.startY != null &&
    this.startY !== this.endY
  ) {
    if (deltaY > deltaX && this.endY > this.startY) {
      this.swipeDirection = DIRECTION.DOWN;
      this.rotate(DIRECTION.DOWN);
    } else if (deltaY > deltaX && this.endY < this.startY) {
      this.swipeDirection = DIRECTION.UP;
      this.rotate(DIRECTION.UP);
    } else if (deltaY < deltaX && this.endX > this.startX) {
      this.swipeDirection = DIRECTION.RIGHT;
      this.rotate(DIRECTION.RIGHT);
    } else if (deltaY < deltaX && this.endX < this.startX) {
      this.swipeDirection = DIRECTION.LEFT;
      this.rotate(DIRECTION.LEFT);
    }
  }
};

TopLeftCube.prototype.initStateEndHandler = function(e) {
  this.endX = this.isTouchEventSupported
    ? e.changedTouches[0].pageX
    : e.clientX;
  this.endY = this.isTouchEventSupported
    ? e.changedTouches[0].pageY
    : e.clientY;
  if (
    this.startX == null ||
    this.startX === this.endX ||
    this.startY == null ||
    this.startY === this.endY
  ) {
    return;
  }

  var deltaX = Math.abs(this.endX - this.startX);
  var deltaY = Math.abs(this.endY - this.startY);

  if (deltaY > deltaX && this.endY > this.startY) {
    this.swipeDirection = DIRECTION.DOWN;
  } else if (deltaY > deltaX && this.endY < this.startY) {
    this.swipeDirection = DIRECTION.UP;
  } else if (deltaY < deltaX && this.endX > this.startX) {
    this.swipeDirection = DIRECTION.RIGHT;
  } else if (deltaY < deltaX && this.endX < this.startX) {
    this.swipeDirection = DIRECTION.LEFT;
  }

  this.interacted = true;

  if (this.lastRotation === DIRECTION.DOWN) {
    if (this.swipeDirection === DIRECTION.UP) {
      if (this.isTouchEventSupported) {
        this.rotate(DIRECTION.UP);
      } else {
        // this.toUpSide();
        this.rotate(DIRECTION.UP);
      }
    } else if (
      [DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(
        this.swipeDirection
      )
    ) {
      if (!this.isTouchEventSupported) {
        // this.dom.style.transform = this.nextTransformVal;
        // this.dom.classList.add('transition');
      }
    }
  } else if (this.lastRotation === DIRECTION.RIGHT) {
    if (this.swipeDirection === DIRECTION.LEFT) {
      if (this.isTouchEventSupported) {
        this.rotate(DIRECTION.LEFT);
      } else {
        // this.toLeftSide();
        this.rotate(DIRECTION.LEFT);
      }
    } else if (
      [DIRECTION.RIGHT, DIRECTION.DOWN, DIRECTION.UP].includes(
        this.swipeDirection
      )
    ) {
      if (!this.isTouchEventSupported) {
        // this.dom.style.transform = this.nextTransformVal;
        // this.dom.classList.add('transition');
      }
    }
  }

  if (this.isTouchEventSupported) {
    this.dom.removeEventListener(this.endEvent, this.initStateEndHandler);
    this.dom.addEventListener(this.endEvent, this.activeStateEndHandler);
  } else {
    document.removeEventListener(this.endEvent, this.initStateEndHandler);
    document.addEventListener(this.endEvent, this.activeStateEndHandler);
  }
};

function Cube(dom, animationType, size, iconPosition, delayTime, roundTime) {
  this.dom = dom;
  this.size = size;
  this.adjustTLSize = this.adjustTLSize.bind(this);
  this.adjustVHSize = this.adjustVHSize.bind(this);

  this.roundTime = roundTime;
  this.playSpeed = this.playSpeed.bind(this);
  this.playSpeed();

  this.iconPosition = iconPosition;
  this.adjustIconPosition = this.adjustIconPosition.bind(this);
  this.adjustIconPosition();

  this.adjustSafeAreaSize();

  this.delayTime = delayTime;

  if (animationType === ANIMATION_TYPE.TL) {
    this.adjustTLSize();
    return new TopLeftCube(dom, delayTime, roundTime);
  }

  if (animationType === ANIMATION_TYPE.VH) {
    this.adjustVHSize();
    return new VertHoriCube(dom, delayTime, roundTime);
  }

  if (
    animationType !== ANIMATION_TYPE.TL ||
    animationType !== ANIMATION_TYPE.VH
  ) {
    this.adjustTLSize();
    return new TopLeftCube(dom, delayTime, roundTime);
  }
}

Cube.prototype = {
  adjustTLSize() {
    this.dom.style.width = parseInt(this.size, 10).toString() + 'px';
    this.dom.style.height = parseInt(this.size, 10).toString() + 'px';

    for (var i = 0; i < 6; i += 1) {
      document.getElementsByClassName('box')[i].style.width =
        parseInt(this.size, 10).toString() + 'px';
    }

    for (var y = 0; y < 6; y += 1) {
      document.getElementsByClassName('box')[y].style.height =
        parseInt(this.size, 10).toString() + 'px';
    }

    document.getElementsByClassName('box1')[0].style.transform =
      'translateX(0px) translateY(0px) translateZ(' +
      (parseInt(this.size, 10) / 2).toString() +
      'px)';

    document.getElementsByClassName('box2')[0].style.transform =
      'translateX(' +
      parseInt(this.size, 10).toString() +
      'px) translateY(0px) translateZ(' +
      (parseInt(this.size, 10) / 2).toString() +
      'px) rotateY(90deg)';

    document.getElementsByClassName('box3')[0].style.transform =
      'translateX(0px) translateY(0px) translateZ(' +
      -(parseInt(this.size, 10) / 2).toString() +
      'px) rotateY(180deg) rotateZ(270deg)';

    document.getElementsByClassName('box4')[0].style.transform =
      'translateX(' +
      -parseInt(this.size, 10).toString() +
      'px) translateY(0px) translateZ(' +
      -(parseInt(this.size, 10) / 2).toString() +
      'px) rotateX(0deg) rotateY(-90deg) rotateZ(-450deg)';

    document.getElementsByClassName('box5')[0].style.transform =
      'translateX(0px) translateY(' +
      -parseInt(this.size, 10).toString() +
      'px) translateZ(' +
      (parseInt(this.size, 10) / 2).toString() +
      'px) rotateX(90deg)';

    document.getElementsByClassName('box6')[0].style.transform =
      'translateX(' +
      parseInt(this.size, 10) * 0.5 +
      'px) translateY(' +
      parseInt(this.size, 10) +
      'px) translateZ(0px) rotateX(-90deg) rotateY(0deg) rotateZ(-270deg)';
  },
  adjustVHSize() {
    this.dom.style.width = parseInt(this.size, 10).toString() + 'px';
    this.dom.style.height = parseInt(this.size, 10).toString() + 'px';

    for (var i = 0; i < 6; i += 1) {
      document.getElementsByClassName('box')[i].style.width =
        parseInt(this.size, 10).toString() + 'px';
    }

    for (var y = 0; y < 6; y += 1) {
      document.getElementsByClassName('box')[y].style.height =
        parseInt(this.size, 10).toString() + 'px';
    }

    document.getElementsByClassName('box1')[0].style.transform =
      'translateX(0px) translateY(0px) translateZ(' +
      (parseInt(this.size, 10) / 2).toString() +
      'px)';

    document.getElementsByClassName('box2')[0].style.transform =
      'translateX(' +
      parseInt(this.size, 10).toString() +
      'px) translateY(0px) translateZ(' +
      (parseInt(this.size, 10) / 2).toString() +
      'px) rotateY(90deg)';

    document.getElementsByClassName('box3')[0].style.transform =
      'translateX(0px) translateY(0px) translateZ(' +
      -(parseInt(this.size, 10) / 2).toString() +
      'px) rotateY(180deg) rotateZ(180deg)';

    document.getElementsByClassName('box4')[0].style.transform =
      'translateX(' +
      -parseInt(this.size, 10).toString() +
      'px) translateY(0px) translateZ(' +
      (parseInt(this.size, 10) / 2).toString() +
      'px) rotateX(0deg) rotateY(-90deg) rotateZ(-360deg)';

    document.getElementsByClassName('box5')[0].style.transform =
      'translateX(0px) translateY(' +
      -parseInt(this.size, 10).toString() +
      'px) translateZ(' +
      (parseInt(this.size, 10) / 2).toString() +
      'px) rotateX(90deg)';

    document.getElementsByClassName('box6')[0].style.transform =
      'translateX(0px) translateY(' +
      parseInt(this.size, 10) +
      'px) translateZ(' +
      parseInt(this.size, 10) / 2 +
      'px) rotateX(-90deg) rotateY(0deg) rotateZ(-360deg)';
  },
  playSpeed() {
    document.styleSheets[1].cssRules[10].style.transition =
      'transform ' + this.roundTime + 's linear';
  },
  adjustIconPosition() {
    this.positions = ['leftDown', 'leftTop', 'rightDown', 'rightTop'];
    document.getElementById('box').style.transform =
      'translate3d(0px, 0px,' + -parseInt(this.size, 10).toString() / 2 + 'px)';
    document.getElementById('icon-space').style.width =
      parseInt(this.size, 10) + 'px';
    document.getElementById('icon-space').style.height =
      parseInt(this.size, 10) + 'px';
    if (this.iconPosition === this.positions[0]) {
      document.getElementsByClassName('icon')[0].style.bottom = '10px';
      document.getElementsByClassName('icon')[0].style.left = '10px';
    } else if (this.iconPosition === this.positions[1]) {
      document.getElementsByClassName('icon')[0].style.top = '10px';
      document.getElementsByClassName('icon')[0].style.left = '10px';
    } else if (this.iconPosition === this.positions[2]) {
      document.getElementsByClassName('icon')[0].style.right = '10px';
      document.getElementsByClassName('icon')[0].style.bottom = '10px';
    } else if (this.iconPosition === this.positions[3]) {
      document.getElementsByClassName('icon')[0].style.right = '10px';
      document.getElementsByClassName('icon')[0].style.top = '10px';
    } else {
      document.getElementsByClassName('icon')[0].style.right = '10px';
      document.getElementsByClassName('icon')[0].style.top = '10px';
    }
  },
  adjustSafeAreaSize() {
    document.getElementById('safe-area').style.width =
      parseInt(this.size, 10) + 90 + 'px';
    document.getElementById('safe-area').style.height =
      parseInt(this.size, 10) + 90 + 'px';
    document.getElementById('safe-area').style.top = '-45px';
    document.getElementById('safe-area').style.left = '-45px';
  }
};

module.exports = function(element, assets, helpers) {
  var cubeParam = {
    id: helpers.uuid.v4()
  };

  var templateAsset = assets.get('template');
  var stylesAsset = assets.get('styles');
  var parameters = assets.parameters;
  var creativeWidth = this.creative.width;
  var creativeHeight = this.creative.height;
  var size = Math.min(creativeHeight, creativeWidth);
  // 自動翻轉方式
  cubeParam.animationType = parameters.animationType
    ? parameters.animationType
    : 'TL';
  // 素材尺寸
  cubeParam.size = size ? size + 'px' : '400px';
  // 每一面旋轉的速度（秒）
  cubeParam.roundTime = parameters.roundTime ? parameters.roundTime : 1;
  // 停留時間(每頁)
  cubeParam.delayTime = parameters.delayTime ? parameters.delayTime : 1;
  // 提示icon位置（左上、左下、右上、右下，預設為右上）
  cubeParam.iconPosition = parameters.iconPosition
    ? parameters.iconPosition
    : 'rightTop';

  cubeParam.creativeInfo = {
    creativeId: this.creative.creativeId,
    width: creativeWidth,
    height: creativeHeight
  };

  element.style.width = creativeWidth + 'px';
  element.style.height = creativeHeight + 'px';
  element.style.backgroundColor = 'rgba(0,0,0,0)';

  helpers.space.fixedSpaceSize();

  var faceAssetArray = [];
  var landingPageArray = [];
  for (var i = 1; i <= 6; i++) {
    var faceAsset = assets.get('face' + i);
    faceAssetArray.push(faceAsset);
    var clickAsset = assets.get('landingPage' + i);
    landingPageArray.push(clickAsset);
  }
  landingPageArray = landingPageArray.reverse();

  return Promise.all([templateAsset.loaded$, stylesAsset.loaded$]).then(
    function() {
      var variables = {};
      var allAssetLoaded$ = [];
      for (var i = 1; i <= 6; i++) {
        var faceAsset = faceAssetArray[i - 1];
        var faceWidget = faceAsset.createDefaultWidget();
        faceWidget.events.pipe(helpers.events);
        if (i === 1) {
          cubeParam.videoPlayer = faceWidget;
        } else {
          faceWidget.element.style.width = creativeWidth + 'px';
          faceWidget.element.style.height = creativeHeight + 'px';
        }
        allAssetLoaded$.push(faceAsset.loaded$);
        var anchorAsset = landingPageArray[i - 1];
        var anchorWidget = anchorAsset.createDefaultWidget();
        anchorWidget.events.pipe(helpers.events);
        variables['content' + i] = faceWidget;
        variables['anchor' + i] = anchorWidget;
      }
      helpers.template.render(element, templateAsset, variables);
      var mainCube = element.querySelector('div.space');
      mainCube.setAttribute('id', cubeParam.id);
      helpers.space.setViewabilityTarget(element);
      return Promise.all(allAssetLoaded$)
        .then(function() {
          return new Cube(
            mainCube,
            cubeParam.animationType,
            cubeParam.size,
            cubeParam.iconPosition,
            cubeParam.delayTime,
            cubeParam.roundTime
          ); // or ANIMATION_TYPE.TL
        })
        .then(function(cubeElement) {
          var voOptions = {
            visibilityThreshold: 0.5,
            timeoutThreshold: 300
          };
          if (element.classList.contains('preview')) {
            // cubeElement.animation();
            cubeParam.videoPlayer.play();
          } else {
            var viewabilityObserver = new helpers.visibility.ViewabilityObserver(
              element,
              voOptions
            );
            viewabilityObserver.fulfilled$.then(function() {
              cubeElement.animation();
              cubeParam.videoPlayer.play();
              document.getElementsByClassName('ppstudio')[0].style.margin =
                '45px';
              var imgDOMs = document.getElementsByTagName('img');
              for (var j = 0; j < imgDOMs.length; j += 1) {
                imgDOMs[j].setAttribute('draggable', 'false');
              }
            });
          }
        });
    }
  );
};
