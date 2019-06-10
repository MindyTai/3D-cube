"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var States = [{
  // A
  side: {
    front: 'A',
    up: 'B',
    down: 'D',
    left: 'F',
    right: 'E',
    back: 'C'
  },
  action: {
    left: {
      x: 0,
      y: -90,
      z: 0
    },
    right: {
      x: 0,
      y: 90,
      z: 0
    },
    up: {
      x: 90,
      y: 0,
      z: 0
    },
    down: {
      x: -90,
      y: 0,
      z: 0
    }
  }
}, {
  side: {
    front: 'A',
    left: 'B',
    right: 'D',
    back: 'C',
    up: 'E',
    down: 'F'
  },
  action: {
    left: {
      x: 0,
      y: -90,
      z: 0
    },
    right: {
      x: 0,
      y: 90,
      z: 0
    },
    up: {
      x: 90,
      y: 0,
      z: 0
    },
    down: {
      x: -90,
      y: 0,
      z: 0
    }
  }
}, {
  side: {
    front: 'A',
    left: 'E',
    right: 'F',
    back: 'C',
    up: 'D',
    down: 'B'
  },
  action: {
    left: {
      x: 0,
      y: 90,
      z: 0
    },
    right: {
      x: 0,
      y: -90,
      z: 0
    },
    up: {
      x: -90,
      y: 0,
      z: 0
    },
    down: {
      x: 90,
      y: 0,
      z: 0
    }
  }
}, {
  side: {
    front: 'A',
    left: 'D',
    right: 'B',
    back: 'C',
    up: 'F',
    down: 'E'
  },
  action: {
    left: {
      x: -90,
      y: 0,
      z: 0
    },
    right: {
      x: 90,
      y: 0,
      z: 0
    },
    up: {
      x: 0,
      y: -90,
      z: 0
    },
    down: {
      x: 0,
      y: 90,
      z: 0
    }
  }
}, // B
{
  side: {
    front: 'B',
    left: 'F',
    right: 'E',
    back: 'D',
    up: 'C',
    down: 'A'
  },
  action: {
    left: {
      x: 0,
      y: 0,
      z: -90
    },
    right: {
      x: 0,
      y: 0,
      z: 90
    },
    up: {
      x: 90,
      y: 0,
      z: 0
    },
    down: {
      x: -90,
      y: 0,
      z: 0
    }
  }
}, {
  side: {
    front: 'B',
    left: 'C',
    right: 'A',
    back: 'D',
    up: 'E',
    down: 'F'
  },
  action: {
    left: {
      x: 0,
      y: -90,
      z: 0
    },
    right: {
      x: 0,
      y: 90,
      z: 0
    },
    up: {
      x: 0,
      y: 0,
      z: 90
    },
    down: {
      x: 0,
      y: 0,
      z: -90
    }
  }
}, {
  side: {
    front: 'B',
    left: 'E',
    right: 'F',
    back: 'D',
    up: 'A',
    down: 'C'
  },
  action: {
    left: {
      x: 0,
      y: 0,
      z: 90
    },
    right: {
      x: 0,
      y: 0,
      z: -90
    },
    up: {
      x: 90,
      y: 0,
      z: 0
    },
    down: {
      x: -90,
      y: 0,
      z: 0
    }
  }
}, {
  side: {
    front: 'B',
    left: 'A',
    right: 'C',
    back: 'D',
    up: 'F',
    down: 'E'
  },
  action: {
    left: {
      x: 90,
      y: 0,
      z: 0
    },
    right: {
      x: -90,
      y: 0,
      z: 0
    },
    up: {
      x: 0,
      y: 0,
      z: -90
    },
    down: {
      x: 0,
      y: 0,
      z: 90
    }
  }
}, // C
{
  side: {
    front: 'C',
    left: 'B',
    right: 'D',
    back: 'A',
    up: 'F',
    down: 'E'
  },
  action: {
    left: {
      x: 90,
      y: 0,
      z: 0
    },
    right: {
      x: -90,
      y: 0,
      z: 0
    },
    up: {
      x: 0,
      y: -90,
      z: 0
    },
    down: {
      x: 0,
      y: 90,
      z: 0
    }
  }
}, {
  side: {
    front: 'C',
    left: 'E',
    right: 'F',
    back: 'A',
    up: 'B',
    down: 'D'
  },
  action: {
    left: {
      x: 0,
      y: -90,
      z: 0
    },
    right: {
      x: 0,
      y: 90,
      z: 0
    },
    up: {
      x: 90,
      y: 0,
      z: 0
    },
    down: {
      x: -90,
      y: 0,
      z: 0
    }
  }
}, {
  side: {
    front: 'C',
    left: 'D',
    right: 'B',
    back: 'A',
    up: 'E',
    down: 'F'
  },
  action: {
    left: {
      x: 0,
      y: 90,
      z: 0
    },
    right: {
      x: 0,
      y: -90,
      z: 0
    },
    up: {
      x: 90,
      y: 0,
      z: 0
    },
    down: {
      x: -90,
      y: 0,
      z: 0
    }
  }
}, {
  side: {
    front: 'C',
    left: 'F',
    right: 'E',
    back: 'A',
    up: 'D',
    down: 'B'
  },
  action: {
    left: {
      x: 0,
      y: -90,
      z: 0
    },
    right: {
      x: 0,
      y: 90,
      z: 0
    },
    up: {
      x: 90,
      y: 0,
      z: 0
    },
    down: {
      x: -90,
      y: 0,
      z: 0
    }
  }
}, // D
{
  side: {
    front: 'D',
    left: 'F',
    right: 'E',
    back: 'B',
    up: 'A',
    down: 'C'
  },
  action: {
    left: {
      x: 0,
      y: 0,
      z: 90
    },
    right: {
      x: 0,
      y: 0,
      z: -90
    },
    up: {
      x: 90,
      y: 0,
      z: 0
    },
    down: {
      x: -90,
      y: 0,
      z: 0
    }
  }
}, {
  side: {
    front: 'D',
    left: 'A',
    right: 'C',
    back: 'B',
    up: 'E',
    down: 'F'
  },
  action: {
    left: {
      x: 0,
      y: 90,
      z: 0
    },
    right: {
      x: 0,
      y: -90,
      z: 0
    },
    up: {
      x: 90,
      y: 0,
      z: 0
    },
    down: {
      x: -90,
      y: 0,
      z: 0
    }
  }
}, {
  side: {
    front: 'D',
    left: 'E',
    right: 'F',
    back: 'B',
    up: 'C',
    down: 'A'
  },
  action: {
    left: {
      x: 0,
      y: 0,
      z: -90
    },
    right: {
      x: 0,
      y: 0,
      z: 90
    },
    up: {
      x: 90,
      y: 0,
      z: 0
    },
    down: {
      x: -90,
      y: 0,
      z: 0
    }
  }
}, {
  side: {
    front: 'D',
    left: 'C',
    right: 'A',
    back: 'B',
    up: 'F',
    down: 'E'
  },
  action: {
    left: {
      x: 90,
      y: 0,
      z: 0
    },
    right: {
      x: -90,
      y: 0,
      z: 0
    },
    up: {
      x: 0,
      y: 0,
      z: 90
    },
    down: {
      x: 0,
      y: 0,
      z: -90
    }
  }
}, // E
{
  side: {
    front: 'E',
    left: 'A',
    right: 'C',
    back: 'F',
    up: 'B',
    down: 'D'
  },
  action: {
    left: {
      x: 0,
      y: -90,
      z: 0
    },
    right: {
      x: 0,
      y: 90,
      z: 0
    },
    up: {
      x: 0,
      y: 0,
      z: 90
    },
    down: {
      x: 0,
      y: 0,
      z: -90
    }
  }
}, {
  side: {
    front: 'E',
    left: 'B',
    right: 'D',
    back: 'F',
    up: 'C',
    down: 'A'
  },
  action: {
    left: {
      x: 0,
      y: -90,
      z: 0
    },
    right: {
      x: 0,
      y: 90,
      z: 0
    },
    up: {
      x: -90,
      y: 0,
      z: 0
    },
    down: {
      x: 90,
      y: 0,
      z: 0
    }
  }
}, {
  side: {
    front: 'E',
    left: 'C',
    right: 'A',
    back: 'F',
    up: 'D',
    down: 'B'
  },
  action: {
    left: {
      x: -90,
      y: 0,
      z: 0
    },
    right: {
      x: 90,
      y: 0,
      z: 0
    },
    up: {
      x: 0,
      y: 0,
      z: 90
    },
    down: {
      x: 0,
      y: 0,
      z: -90
    }
  }
}, {
  side: {
    front: 'E',
    left: 'D',
    right: 'B',
    back: 'F',
    up: 'A',
    down: 'C'
  },
  action: {
    left: {
      x: 0,
      y: 0,
      z: 90
    },
    right: {
      x: 0,
      y: 0,
      z: -90
    },
    up: {
      x: 0,
      y: 90,
      z: 0
    },
    down: {
      x: 0,
      y: -90,
      z: 0
    }
  }
}, // F
{
  side: {
    front: 'F',
    left: 'C',
    right: 'A',
    back: 'E',
    up: 'B',
    down: 'D'
  },
  action: {
    left: {
      x: 0,
      y: -90,
      z: 0
    },
    right: {
      x: 0,
      y: 90,
      z: 0
    },
    up: {
      x: 0,
      y: 0,
      z: 90
    },
    down: {
      x: 0,
      y: 0,
      z: -90
    }
  }
}, {
  side: {
    front: 'F',
    left: 'B',
    right: 'D',
    back: 'E',
    up: 'A',
    down: 'C'
  },
  action: {
    left: {
      x: 0,
      y: 0,
      z: 90
    },
    right: {
      x: 0,
      y: 0,
      z: -90
    },
    up: {
      x: 0,
      y: -90,
      z: 0
    },
    down: {
      x: 0,
      y: 90,
      z: 0
    }
  }
}, {
  side: {
    front: 'F',
    left: 'A',
    right: 'C',
    back: 'E',
    up: 'D',
    down: 'B'
  },
  action: {
    left: {
      x: 0,
      y: -90,
      z: 0
    },
    right: {
      x: 0,
      y: 90,
      z: 0
    },
    up: {
      x: 0,
      y: 0,
      z: -90
    },
    down: {
      x: 0,
      y: 0,
      z: 90
    }
  }
}, {
  side: {
    front: 'F',
    left: 'D',
    right: 'B',
    back: 'E',
    up: 'C',
    down: 'A'
  },
  action: {
    left: {
      x: 0,
      y: 0,
      z: -90
    },
    right: {
      x: 0,
      y: 0,
      z: 90
    },
    up: {
      x: 90,
      y: 0,
      z: 0
    },
    down: {
      x: -90,
      y: 0,
      z: 0
    }
  }
}];
var startX;
var startY;
var swipeDirection;
var DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up',
  DOWN: 'down'
};
var STATE = {
  INIT: 'INIT',
  ACTIVE: 'ACTIVE'
};

var Cube =
/*#__PURE__*/
function () {
  function Cube(dom) {
    _classCallCheck(this, Cube);

    this.stateIdx = 0;
    this.side = 'A';
    this.lastSide = undefined;
    this.lastRotation = undefined;
    this.dom = dom;
    this.state = STATE.INIT;
    this.vertHoriLoop = this.vertHoriLoop.bind(this); // this.topLeftSteps = this.topLeftSteps.bind(this);

    this.dom.addEventListener('transitionend', this.vertHoriLoop); // this.dom.addEventListener('transitionend', this.topLeftSteps);

    this.flag = 0;
    this.transform = {
      x: 0,
      y: 0,
      z: 0
    };
  }

  _createClass(Cube, [{
    key: "getDegree",
    value: function getDegree(index, rotation) {
      this.transform.x = States[index].action[rotation].x + this.transform.x;
      this.transform.y = States[index].action[rotation].y + this.transform.y;
      this.transform.z = States[index].action[rotation].z + this.transform.z;
      return "rotateX(".concat(this.transform.x, "deg) rotateY(").concat(this.transform.y, "deg) rotateZ(").concat(this.transform.z, "deg)");
    }
  }, {
    key: "findIndex",
    value: function findIndex() {
      console.log(this.lastSide, this.side);

      for (var i = 0; i < 24; i += 1) {
        if (this.side === States[i].side.front && this.lastSide === States[i].side[this.lastRotation]) {
          this.stateIdx = i;
          console.log(this.stateIdx);
          return;
        }
      }

      console.log('gg');
    }
  }, {
    key: "forceRender",
    value: function forceRender() {
      return this.dom.clientHeight;
    }
  }, {
    key: "nextSide",
    value: function nextSide(direction, lastDirection) {
      this.forceRender();
      this.dom.classList.add('transition'); // 現在是哪一面

      this.lastSide = this.side; // 轉幾度過去

      this.dom.style.transform = this.getDegree(this.stateIdx, direction); // 下一面是誰

      this.side = States[this.stateIdx].side[lastDirection]; // 更新 stateIdx/side/lastrotation/lastside

      this.lastRotation = direction;
      console.log("lastRoation".concat(direction));
      this.findIndex();
    }
  }, {
    key: "rotate",
    value: function rotate(direction) {
      if (direction === DIRECTION.LEFT) {
        this.nextSide('left', 'right');
      }

      if (direction === DIRECTION.RIGHT) {
        this.nextSide('right', 'left');
      }

      if (direction === DIRECTION.UP) {
        this.nextSide('up', 'down');
      }

      if (direction === DIRECTION.DOWN) {
        this.nextSide('down', 'up');
      }
    }
  }, {
    key: "topLeftSteps",
    value: function topLeftSteps() {
      if (this.side === 'A') {
        this.rotate('down');
      } else if (this.side === 'B') {
        this.rotate('right');
      } else if (this.side === 'F') {
        this.rotate('down');
      } else if (this.side === 'C') {
        this.rotate('right');
      } else if (this.side === 'D') {
        this.rotate('down');
      } // else if (this.side === 'E') {
      //   self.rotate('right');
      // }

    }
  }, {
    key: "vertHoriLoop",
    value: function vertHoriLoop() {
      if (this.side === 'A' && this.flag === 0) {
        this.rotate('down');
      } else if (this.side === 'B' && this.flag === 0) {
        this.rotate('down');
      } else if (this.side === 'C' && this.flag === 0) {
        this.rotate('down');
      } else if (this.side === 'D' && this.flag === 0) {
        this.rotate('down');
        this.flag = 1;
      } else if (this.side === 'A' && this.flag === 1) {
        this.rotate('left');
      } else if (this.side === 'E' && this.flag === 1) {
        this.rotate('left');
      } else if (this.side === 'C' && this.flag === 1) {
        this.rotate('left');
      } else if (this.side === 'F' && this.flag === 1) {
        this.rotate('left');
        this.flag = 0;
      }
    }
  }]);

  return Cube;
}();

var cubeDom = document.getElementsByClassName('space')[0];
var cube = new Cube(cubeDom);
cube.vertHoriLoop(); // cube.topLeftSteps();
// touch

function _touchStartHandler(e) {
  var touchobj = e.changedTouches[0];
  startX = touchobj.pageX;
  startY = touchobj.pageY;
}

function _touchMoveHandler(e) {
  e.stopPropagation();

  if (e.cancelable) {
    e.preventDefault();
  } else return false;
}

function _activeStateTouchEndHandler(e) {
  var touchobj = e.changedTouches[0];

  if (startX != null && startX !== touchobj.pageX && startY != null && startY !== touchobj.pageY) {
    // swipe down
    if (Math.abs(touchobj.pageY - startY) > Math.abs(touchobj.pageX - startX) && touchobj.pageY > startY) {
      swipeDirection = DIRECTION.DOWN;
      cube.rotate(DIRECTION.DOWN);
    } else if (Math.abs(touchobj.pageY - startY) > Math.abs(touchobj.pageX - startX) && touchobj.pageY < startY) {
      swipeDirection = DIRECTION.UP;
      cube.rotate(DIRECTION.UP);
    } else if (Math.abs(touchobj.pageY - startY) < Math.abs(touchobj.pageX - startX) && touchobj.pageX > startX) {
      swipeDirection = DIRECTION.RIGHT;
      cube.rotate(DIRECTION.RIGHT);
    } else if (Math.abs(touchobj.pageY - startY) < Math.abs(touchobj.pageX - startX) && touchobj.pageX < startX) {
      swipeDirection = DIRECTION.LEFT;
      cube.rotate(DIRECTION.LEFT);
    }
  }
}

function _topLeftStepsTouchEndHandler(e) {
  var touchobj = e.changedTouches[0];

  if (startX != null && startX !== touchobj.pageX && startY != null && startY !== touchobj.pageY) {
    if (Math.abs(touchobj.pageY - startY) > Math.abs(touchobj.pageX - startX) && touchobj.pageY > startY) {
      swipeDirection = DIRECTION.DOWN; // cube.rotate(DIRECTION.DOWN);
    } else if (Math.abs(touchobj.pageY - startY) > Math.abs(touchobj.pageX - startX) && touchobj.pageY < startY) {
      swipeDirection = DIRECTION.UP; // cube.rotate(DIRECTION.UP);
    } else if (Math.abs(touchobj.pageY - startY) < Math.abs(touchobj.pageX - startX) && touchobj.pageX > startX) {
      swipeDirection = DIRECTION.RIGHT; // cube.rotate(DIRECTION.RIGHT);
    } else if (Math.abs(touchobj.pageY - startY) < Math.abs(touchobj.pageX - startX) && touchobj.pageX < startX) {
      swipeDirection = DIRECTION.LEFT; // cube.rotate(DIRECTION.LEFT);
    }
  }

  console.log(swipeDirection);
  console.log("aa".concat(cube.lastRotation)); // INIT

  if (cube.lastRotation === 'down') {
    if (swipeDirection === DIRECTION.UP) {
      cube.state = 'ACTIVE';
      cube.rotate('up');
      cube.dom.removeEventListener('transitionend', cube.topLeftSteps);
    } else if ([DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(swipeDirection)) {
      cube.state = 'ACTIVE';
      cube.dom.removeEventListener('transitionend', cube.topLeftSteps); // STOP ANIMATION
    }
  } else if (cube.lastRotation === 'right') {
    if (swipeDirection === DIRECTION.LEFT) {
      cube.state = 'ACTIVE';
      cube.rotate('left');
      cube.dom.removeEventListener('transitionend', cube.topLeftSteps);
    } else if ([DIRECTION.RIGHT, DIRECTION.DOWN, DIRECTION.UP].includes(swipeDirection)) {
      cube.state = 'ACTIVE';
      cube.dom.removeEventListener('transitionend', cube.topLeftSteps); // STOP ANIMATION
    }
  }

  if (cube.state === 'ACTIVE') {
    cubeDom.removeEventListener('transitionend', cube.topLeftSteps);
    cubeDom.addEventListener('touchend', _activeStateTouchEndHandler);
  }
}

function _vertHoriLoopTouchEndHandler(e) {
  var touchobj = e.changedTouches[0];

  if (startX != null && startX !== touchobj.pageX && startY != null && startY !== touchobj.pageY) {
    // swipe down
    if (Math.abs(touchobj.pageY - startY) > Math.abs(touchobj.pageX - startX) && touchobj.pageY > startY) {
      swipeDirection = DIRECTION.DOWN;
    } else if (Math.abs(touchobj.pageY - startY) > Math.abs(touchobj.pageX - startX) && touchobj.pageY < startY) {
      swipeDirection = DIRECTION.UP;
    } else if (Math.abs(touchobj.pageY - startY) < Math.abs(touchobj.pageX - startX) && touchobj.pageX > startX) {
      swipeDirection = DIRECTION.RIGHT;
    } else if (Math.abs(touchobj.pageY - startY) < Math.abs(touchobj.pageX - startX) && touchobj.pageX < startX) {
      swipeDirection = DIRECTION.LEFT;
    }
  } // INIT


  if (cube.lastRotation === 'down') {
    if (swipeDirection === DIRECTION.UP) {
      cube.state = 'ACTIVE';
      cube.rotate('up');
      cube.dom.removeEventListener('transitionend', cube.vertHoriLoop);
    } else if ([DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(swipeDirection)) {
      cube.state = 'ACTIVE';
      cube.dom.removeEventListener('transitionend', cube.vertHoriLoop); // STOP ANIMATION
    }
  } else if (cube.lastRotation === 'left') {
    if (swipeDirection === DIRECTION.RIGHT) {
      cube.state = 'ACTIVE';
      cube.rotate('right');
      cube.dom.removeEventListener('transitionend', cube.vertHoriLoop);
    } else if ([DIRECTION.LEFT, DIRECTION.DOWN, DIRECTION.UP].includes(swipeDirection)) {
      cube.state = 'ACTIVE';
      cube.dom.removeEventListener('transitionend', cube.vertHoriLoop); // STOP ANIMATION
    }
  }

  console.log(cube.state);

  if (cube.state === 'ACTIVE') {
    console.log(cube.state); // cube.dom.removeEventListener('transitionend', cube.topLeftSteps);

    cubeDom.removeEventListener('transitionend', cube.vertHoriLoop);
    cubeDom.addEventListener('touchend', _activeStateTouchEndHandler);
  }
}

function _init() {
  cubeDom.addEventListener('touchstart', _touchStartHandler);
  cubeDom.addEventListener('touchmove', _touchMoveHandler);

  if (cube.state === 'INIT') {
    // cubeDom.addEventListener('touchend', _topLeftStepsTouchEndHandler);
    cubeDom.addEventListener('touchend', _vertHoriLoopTouchEndHandler);
  }
}

_init();