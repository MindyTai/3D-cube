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
  VH: 'VH',
  TL: 'TL'
};

function _Cube(dom) {
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
      this.dom.addEventListener('mouseleave', this.mouseLeaveHandler);
      this.dom.addEventListener('mouseenter', this.mouseEnterHandler);
    }

    // 第二次互動後
    this.activeStateEndHandler = this.activeStateEndHandler.bind(this);
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
    // 因為transitionend,所以動畫繼續
  },

  mouseEnterHandler() {
    this.nextTransformVal = this.dom.style.transform;
    var currentTransformVal = window
      .getComputedStyle(this.dom)
      .getPropertyValue('transform');

    this.dom.style.transform = currentTransformVal;
    this.dom.classList.remove('transition');
  },

  startHandler(e) {
    this.startX = this.isTouchEventSupported
      ? e.changedTouches[0].pageX
      : e.clientX;
    this.startY = this.isTouchEventSupported
      ? e.changedTouches[0].pageY
      : e.clientY;

    if (!this.isTouchEventSupported) {
      this.dom.removeEventListener('mouseenter', this.mouseEnterHandler);
      this.dom.removeEventListener('mouseleave', this.mouseLeaveHandler);
    }
  },

  moveHandler(e) {
    e.stopPropagation();
    if (e.cancelable) {
      e.preventDefault();
    } else return false;
  },

  activeStateEndHandler(e) {
    var endX = this.isTouchEventSupported
      ? e.changedTouches[0].pageX
      : e.clientX;
    var endY = this.isTouchEventSupported
      ? e.changedTouches[0].pageY
      : e.clientY;
    var deltaX = Math.abs(endX - this.startX);
    var deltaY = Math.abs(endY - this.startY);
    if (
      this.startX != null &&
      this.startX !== endX &&
      this.startY != null &&
      this.startY !== endY
    ) {
      if (deltaY > deltaX && endY > this.startY) {
        this.swipeDirection = DIRECTION.DOWN;
        this.rotate(DIRECTION.DOWN);
      } else if (deltaY > deltaX && endY < this.startY) {
        this.swipeDirection = DIRECTION.UP;
        this.rotate(DIRECTION.UP);
      } else if (deltaY < deltaX && endX > this.startX) {
        this.swipeDirection = DIRECTION.RIGHT;
        this.rotate(DIRECTION.RIGHT);
      } else if (deltaY < deltaX && endX < this.startX) {
        this.swipeDirection = DIRECTION.LEFT;
        this.rotate(DIRECTION.LEFT);
      }
    }
  }
};

function VertHoriCube(dom) {
  _Cube.call(this, dom);
  this.isDirectionChanged = false;
  this.animation = this.animation.bind(this);
  this.dom.addEventListener('transitionend', this.animation);

  this.initStateEndHandler = this.initStateEndHandler.bind(this);
  if (!this.isTouchEventSupported) {
    document.addEventListener('mouseup', this.initStateEndHandler);
  } else {
    this.dom.addEventListener('touchend', this.initStateEndHandler);
  }
}

VertHoriCube.prototype = Object.create(_Cube.prototype);
VertHoriCube.prototype.constructor = VertHoriCube;

VertHoriCube.prototype.animation = function() {
  if (!this.isDirectionChanged) {
    if (this.side === 'A') {
      this.rotate(DIRECTION.DOWN);
    } else if (this.side === 'B') {
      this.rotate(DIRECTION.DOWN);
    } else if (this.side === 'C') {
      this.rotate(DIRECTION.DOWN);
    } else if (this.side === 'D') {
      this.rotate(DIRECTION.DOWN);
      this.isDirectionChanged = true;
    }
  } else if (this.isDirectionChanged) {
    if (this.side === 'A') {
      this.rotate(DIRECTION.LEFT);
    } else if (this.side === 'E') {
      this.rotate(DIRECTION.LEFT);
    } else if (this.side === 'C') {
      this.rotate(DIRECTION.LEFT);
    } else if (this.side === 'F') {
      this.rotate(DIRECTION.LEFT);
      this.isDirectionChanged = false;
    }
  }
};
VertHoriCube.prototype.initStateEndHandler = function(e) {
  var endX = this.isTouchEventSupported ? e.changedTouches[0].pageX : e.clientX;
  var endY = this.isTouchEventSupported ? e.changedTouches[0].pageY : e.clientY;
  if (
    this.startX == null ||
    this.startX === endX ||
    this.startY == null ||
    this.startY === endY
  ) {
    return;
  }

  var deltaX = Math.abs(endX - this.startX);
  var deltaY = Math.abs(endY - this.startY);

  if (deltaY > deltaX && endY > this.startY) {
    this.swipeDirection = DIRECTION.DOWN;
  } else if (deltaY > deltaX && endY < this.startY) {
    this.swipeDirection = DIRECTION.UP;
  } else if (deltaY < deltaX && endX > this.startX) {
    this.swipeDirection = DIRECTION.RIGHT;
  } else if (deltaY < deltaX && endX < this.startX) {
    this.swipeDirection = DIRECTION.LEFT;
  }

  if (this.lastRotation === DIRECTION.DOWN) {
    if (this.swipeDirection === DIRECTION.UP) {
      if (this.isTouchEventSupported) {
        this.rotate(DIRECTION.UP);
      } else {
        this.dom.style.transform = this.getLastTransform(this.nextTransformVal);
        this.dom.classList.add('transition');

        var _tmpSide = this.side;
        this.side = this.lastSide;
        this.lastSide = _tmpSide;
        this.lastRotation = DIRECTION.UP;
        this.findIndex();
      }
    } else if (
      [DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(
        this.swipeDirection
      )
    ) {
      if (!this.isTouchEventSupported) {
        this.dom.style.transform = this.nextTransformVal;
        this.dom.classList.add('transition');
      }
    }
  } else if (this.lastRotation === DIRECTION.LEFT) {
    if (this.swipeDirection === DIRECTION.RIGHT) {
      if (this.isTouchEventSupported) {
        this.rotate(DIRECTION.RIGHT);
      } else {
        this.dom.style.transform = this.getLastTransform(this.nextTransformVal);
        this.dom.classList.add('transition');

        var __tmpSide = this.side;
        this.side = this.lastSide;
        this.lastSide = __tmpSide;
        this.lastRotation = DIRECTION.RIGHT;
        this.findIndex();
      }
    } else if (
      [DIRECTION.LEFT, DIRECTION.DOWN, DIRECTION.UP].includes(
        this.swipeDirection
      )
    ) {
      if (!this.isTouchEventSupported) {
        this.dom.style.transform = this.nextTransformVal;
        this.dom.classList.add('transition');
      }
    }
  }

  this.dom.removeEventListener('transitionend', this.animation);
  if (this.isTouchEventSupported) {
    this.dom.removeEventListener(this.endEvent, this.initStateEndHandler);
    this.dom.addEventListener(this.endEvent, this.activeStateEndHandler);
  } else {
    document.removeEventListener(this.endEvent, this.initStateEndHandler);
    document.addEventListener(this.endEvent, this.activeStateEndHandler);
  }
};

function TopLeftCube(dom) {
  _Cube.call(this, dom);
  this.animation = this.animation.bind(this);
  this.dom.addEventListener('transitionend', this.animation);

  this.initStateEndHandler = this.initStateEndHandler.bind(this);
  if (!this.isTouchEventSupported) {
    document.addEventListener('mouseup', this.initStateEndHandler);
  } else {
    this.dom.addEventListener('touchend', this.initStateEndHandler);
  }
}

TopLeftCube.prototype = Object.create(_Cube.prototype);
TopLeftCube.prototype.constructor = TopLeftCube;

TopLeftCube.prototype.animation = function() {
  if (this.side === 'A') {
    this.rotate(DIRECTION.DOWN);
  } else if (this.side === 'B') {
    this.rotate(DIRECTION.RIGHT);
  } else if (this.side === 'F') {
    this.rotate(DIRECTION.DOWN);
  } else if (this.side === 'C') {
    this.rotate(DIRECTION.RIGHT);
  } else if (this.side === 'D') {
    this.rotate(DIRECTION.DOWN);
  } else if (this.side === 'E') {
    this.rotate(DIRECTION.RIGHT);
  }
};

TopLeftCube.prototype.initStateEndHandler = function(e) {
  var endX = this.isTouchEventSupported ? e.changedTouches[0].pageX : e.clientX;
  var endY = this.isTouchEventSupported ? e.changedTouches[0].pageY : e.clientY;
  if (
    this.startX == null ||
    this.startX === endX ||
    this.startY == null ||
    this.startY === endY
  ) {
    return;
  }

  var deltaX = Math.abs(endX - this.startX);
  var deltaY = Math.abs(endY - this.startY);

  if (deltaY > deltaX && endY > this.startY) {
    this.swipeDirection = DIRECTION.DOWN;
  } else if (deltaY > deltaX && endY < this.startY) {
    this.swipeDirection = DIRECTION.UP;
  } else if (deltaY < deltaX && endX > this.startX) {
    this.swipeDirection = DIRECTION.RIGHT;
  } else if (deltaY < deltaX && endX < this.startX) {
    this.swipeDirection = DIRECTION.LEFT;
  }

  if (this.lastRotation === DIRECTION.DOWN) {
    if (this.swipeDirection === DIRECTION.UP) {
      if (this.isTouchEventSupported) {
        this.rotate(DIRECTION.UP);
      } else {
        this.dom.style.transform = this.getLastTransform(this.nextTransformVal);
        this.dom.classList.add('transition');

        var _tmpSide = this.side;
        this.side = this.lastSide;
        this.lastSide = _tmpSide;
        this.lastRotation = DIRECTION.UP;
        this.findIndex();
      }
    } else if (
      [DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(
        this.swipeDirection
      )
    ) {
      if (!this.isTouchEventSupported) {
        this.dom.style.transform = this.nextTransformVal;
        this.dom.classList.add('transition');
      }
    }
  } else if (this.lastRotation === DIRECTION.RIGHT) {
    if (this.swipeDirection === DIRECTION.LEFT) {
      if (this.isTouchEventSupported) {
        this.rotate(DIRECTION.LEFT);
      } else {
        this.dom.style.transform = this.getLastTransform(this.nextTransformVal);
        this.dom.classList.add('transition');

        var __tmpSide = this.side;
        this.side = this.lastSide;
        this.lastSide = __tmpSide;
        this.lastRotation = DIRECTION.LEFT;
        this.findIndex();
      }
    } else if (
      [DIRECTION.RIGHT, DIRECTION.DOWN, DIRECTION.UP].includes(
        this.swipeDirection
      )
    ) {
      if (!this.isTouchEventSupported) {
        this.dom.style.transform = this.nextTransformVal;
        this.dom.classList.add('transition');
      }
    }
  }

  this.dom.removeEventListener('transitionend', this.animation);
  if (this.isTouchEventSupported) {
    this.dom.removeEventListener(this.endEvent, this.initStateEndHandler);
    this.dom.addEventListener(this.endEvent, this.activeStateEndHandler);
  } else {
    document.removeEventListener(this.endEvent, this.initStateEndHandler);
    document.addEventListener(this.endEvent, this.activeStateEndHandler);
  }
};

function Cube(dom, animationType) {
  if (animationType === ANIMATION_TYPE.TL) {
    return new TopLeftCube(dom);
  }
  if (animationType === ANIMATION_TYPE.VH) {
    return new VertHoriCube(dom);
  }
  throw new Error('INVALID_TYPE');
}

var cubeDom = document.getElementsByClassName('space')[0];
var cube = new Cube(cubeDom, ANIMATION_TYPE.VH); // or ANIMATION_TYPE.TL
cube.animation();
