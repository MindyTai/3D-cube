var States = [
  {
    // A
    side: {
      front: 'A',
      top: 'B',
      bottom: 'D',
      left: 'F',
      right: 'E',
      back: 'C'
    },
    action: {
      left: { x: 0, y: -90, z: 0 },
      right: { x: 0, y: 90, z: 0 },
      top: { x: 90, y: 0, z: 0 },
      down: { x: -90, y: 0, z: 0 }
    }
  },
  {
    side: {
      front: 'A',
      left: 'B',
      right: 'D',
      back: 'C',
      top: 'E',
      bottom: 'F'
    },
    action: {
      left: { x: 90, y: 0, z: 0 },
      right: { x: -90, y: 0, z: 0 },
      top: { x: 0, y: -90, z: 0 },
      down: { x: 0, y: 90, z: 0 }
    }
  },
  {
    side: {
      front: 'A',
      left: 'E',
      right: 'F',
      back: 'C',
      top: 'D',
      bottom: 'B'
    },
    action: {
      left: { x: 0, y: 90, z: 0 },
      right: { x: 0, y: -90, z: 0 },
      top: { x: -90, y: 0, z: 0 },
      down: { x: 90, y: 0, z: 0 }
    }
  },
  {
    side: {
      front: 'A',
      left: 'D',
      right: 'B',
      back: 'C',
      top: 'F',
      bottom: 'E'
    },
    action: {
      left: { x: -90, y: 0, z: 0 },
      right: { x: 90, y: 0, z: 0 },
      top: { x: 0, y: -90, z: 0 },
      down: { x: 0, y: 90, z: 0 }
    }
  }, // B
  {
    side: {
      front: 'B',
      left: 'F',
      right: 'E',
      back: 'D',
      top: 'C',
      bottom: 'A'
    },
    action: {
      left: { x: 0, y: 90, z: 0 },
      right: { x: 0, y: -90, z: 0 },
      top: { x: 90, y: 0, z: 0 },
      down: { x: -90, y: 0, z: 0 }
    }
  },
  {
    side: {
      front: 'B',
      left: 'C',
      right: 'A',
      back: 'D',
      top: 'E',
      bottom: 'F'
    },
    action: {
      left: { x: -90, y: 0, z: 0 },
      right: { x: 90, y: -90, z: 0 },
      top: { x: 0, y: -90, z: 0 },
      down: { x: 0, y: 90, z: 0 }
    }
  },
  {
    side: {
      front: 'B',
      left: 'E',
      right: 'F',
      back: 'D',
      top: 'A',
      bottom: 'C'
    },
    action: {
      left: { x: 0, y: -90, z: 0 },
      right: { x: 0, y: 90, z: 0 },
      top: { x: 90, y: 0, z: 0 },
      down: { x: -90, y: 0, z: 0 }
    }
  },
  {
    side: {
      front: 'B',
      left: 'A',
      right: 'C',
      back: 'D',
      top: 'F',
      bottom: 'E'
    },
    action: {
      left: { x: 90, y: 0, z: 0 },
      right: { x: -90, y: 0, z: 0 },
      top: { x: 0, y: 90, z: 0 },
      down: { x: 0, y: -90, z: 0 }
    }
  }, // C
  {
    side: {
      front: 'C',
      left: 'B',
      right: 'D',
      back: 'A',
      top: 'F',
      bottom: 'E'
    },
    action: {
      left: { x: 90, y: 0, z: 0 },
      right: { x: -90, y: 0, z: 0 },
      top: { x: 0, y: 0, z: -90 },
      down: { x: 0, y: 0, z: 90 }
    }
  },
  {
    side: {
      front: 'C',
      left: 'E',
      right: 'F',
      back: 'A',
      top: 'B',
      bottom: 'D'
    },
    action: {
      left: { x: 0, y: 0, z: 90 },
      right: { x: 0, y: 0, z: -90 },
      top: { x: 90, y: 0, z: 0 },
      down: { x: -90, y: 0, z: 0 }
    }
  },
  {
    side: {
      front: 'C',
      left: 'D',
      right: 'B',
      back: 'A',
      top: 'E',
      bottom: 'F'
    },
    action: {
      left: { x: -90, y: 0, z: 0 },
      right: { x: 90, y: 0, z: 0 },
      top: { x: 0, y: 0, z: 90 },
      down: { x: 0, y: 0, z: -90 }
    }
  },
  {
    side: {
      front: 'C',
      left: 'F',
      right: 'E',
      back: 'A',
      top: 'D',
      bottom: 'B'
    },
    action: {
      left: { x: 0, y: 0, z: -90 },
      right: { x: 0, y: 0, z: 90 },
      top: { x: -90, y: 0, z: 0 },
      down: { x: 90, y: 0, z: 0 }
    }
  },
  // D
  {
    side: {
      front: 'D',
      left: 'F',
      right: 'E',
      back: 'B',
      top: 'A',
      bottom: 'C'
    },
    action: {
      left: { x: 0, y: -90, z: 0 },
      right: { x: 0, y: 90, z: 0 },
      top: { x: -90, y: 0, z: 0 },
      down: { x: 90, y: 0, z: 0 }
    }
  },
  {
    side: {
      front: 'D',
      left: 'A',
      right: 'C',
      back: 'B',
      top: 'E',
      bottom: 'F'
    },
    action: {
      left: { x: -90, y: 0, z: 0 },
      right: { x: 90, y: 0, z: 0 },
      top: { x: 0, y: 90, z: 0 },
      down: { x: 0, y: -90, z: 0 }
    }
  },
  {
    side: {
      front: 'D',
      left: 'E',
      right: 'F',
      back: 'B',
      top: 'C',
      bottom: 'A'
    },
    action: {
      left: { x: 0, y: 90, z: 0 },
      right: { x: 0, y: -90, z: 0 },
      top: { x: 90, y: 0, z: 0 },
      down: { x: -90, y: 0, z: 0 }
    }
  },
  {
    side: {
      front: 'D',
      left: 'C',
      right: 'A',
      back: 'B',
      top: 'F',
      bottom: 'E'
    },
    action: {
      left: { x: 90, y: 0, z: 0 },
      right: { x: -90, y: 0, z: 0 },
      top: { x: 0, y: -90, z: 0 },
      down: { x: 0, y: 90, z: 0 }
    }
  }, // E
  {
    side: {
      front: 'E',
      left: 'A',
      right: 'C',
      back: 'F',
      top: 'B',
      bottom: 'D'
    },
    action: {
      left: { x: 0, y: 0, z: 90 },
      right: { x: 0, y: 0, z: -90 },
      top: { x: 0, y: 90, z: 0 },
      down: { x: 0, y: -90, z: 0 }
    }
  },
  {
    side: {
      front: 'E',
      left: 'B',
      right: 'D',
      back: 'F',
      top: 'C',
      bottom: 'A'
    },
    action: {
      left: { x: 0, y: 90, z: 0 },
      right: { x: 0, y: -90, z: 0 },
      top: { x: 0, y: 0, z: -90 },
      down: { x: 0, y: 0, z: 90 }
    }
  },
  {
    side: {
      front: 'E',
      left: 'C',
      right: 'A',
      back: 'F',
      top: 'D',
      bottom: 'B'
    },
    action: {
      left: { x: 0, y: 0, z: -90 },
      right: { x: 0, y: 0, z: 90 },
      top: { x: 0, y: -90, z: 0 },
      down: { x: 0, y: 90, z: 0 }
    }
  },
  {
    side: {
      front: 'E',
      left: 'D',
      right: 'B',
      back: 'F',
      top: 'A',
      bottom: 'C'
    },
    action: {
      left: { x: 0, y: -90, z: 0 },
      right: { x: 0, y: 90, z: 0 },
      top: { x: 0, y: 0, z: 90 },
      down: { x: 0, y: 0, z: -90 }
    }
  }, // F
  {
    side: {
      front: 'F',
      left: 'C',
      right: 'A',
      back: 'E',
      top: 'B',
      bottom: 'D'
    },
    action: {
      left: { x: 0, y: 0, z: 90 },
      right: { x: 0, y: 0, z: -90 },
      top: { x: 0, y: -90, z: 0 },
      down: { x: 0, y: 90, z: 0 }
    }
  },
  {
    side: {
      front: 'F',
      left: 'B',
      right: 'D',
      back: 'E',
      top: 'A',
      bottom: 'C'
    },
    action: {
      left: { x: 0, y: -90, z: 0 },
      right: { x: 0, y: 90, z: 0 },
      top: { x: 0, y: 0, z: -90 },
      down: { x: 0, y: 0, z: 90 }
    }
  },
  {
    side: {
      front: 'F',
      left: 'A',
      right: 'C',
      back: 'E',
      top: 'D',
      bottom: 'B'
    },
    action: {
      left: { x: 0, y: 0, z: -90 },
      right: { x: 0, y: 0, z: 90 },
      top: { x: 0, y: 90, z: 0 },
      down: { x: 0, y: -90, z: 0 }
    }
  },
  {
    side: {
      front: 'F',
      left: 'D',
      right: 'B',
      back: 'E',
      top: 'C',
      bottom: 'A'
    },
    action: {
      left: { x: 0, y: 90, z: 0 },
      right: { x: 0, y: -90, z: 0 },
      top: { x: 0, y: 0, z: 90 },
      down: { x: 0, y: 0, z: -90 }
    }
  }
];

var startX;
var startY;
var swipeDirection;

var DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up',
  DOWN: 'down'
};

function Cube(dom) {
  this.stateIdx = 0;
  this.side = 'A';
  this.lastSide = undefined;
  this.lastRotation = undefined;
  this.dom = dom;
  this.dom.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
  this.transform = {
    x: 0,
    y: 0,
    z: 0
  };
}

Cube.prototype = {
  getDegree(index, rotation) {
    this.transform.x = States[index].action[rotation].x + this.transform.x;
    this.transform.y = States[index].action[rotation].y + this.transform.y;
    this.transform.z = States[index].action[rotation].z + this.transform.z;
    return `rotateX(${this.transform.x}) rotateY(${
      this.transform.y
    }deg) rotateZ(${this.transform.z}deg)`;
  },
  findIndex() {
    for (var i = 0; i < 24; i += 1) {
      if (
        this.side === States[i].side.front &&
        this.lastSide === States[i].side[this.lastRotation]
      ) {
        this.stateIdx = i;
        break;
      }
    }
  },
  rotate(direction) {
    if (direction === DIRECTION.LEFT) {
      var x = this.dom.clientHeight;
      this.dom.classList.add('transition');
      // 現在是哪一面
      this.lastSide = this.side;
      // 轉幾度過去
      this.dom.style.transform = this.getDegree(this.stateIdx, 'left');
      // 下一面是誰
      this.side = States[this.stateIdx].side.right;
      // 更新 stateIdx/side/lastrotation/lastside
      this.lastRotation = 'left';
      this.findIndex();
    }
    if (direction === DIRECTION.RIGHT) {
      var x = this.dom.clientHeight;
      this.dom.classList.add('transition');
      // 現在是哪一面
      this.lastSide = this.side;
      // 轉幾度過去
      this.dom.style.transform = this.getDegree(this.stateIdx, 'right');
      // 下一面是誰
      this.side = States[this.stateIdx].side.right;
      // 更新 stateIdx/side/lastrotation/lastside
      this.lastRotation = 'right';
      this.findIndex();
    }
  }
};

var cubeDom = document.getElementsByClassName('space')[0];
var cube = new Cube(cubeDom);
cube.rotate(DIRECTION.RIGHT);

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

function _touchEndHandler(e) {
  var touchobj = e.changedTouches[0];
  if (
    startX != null &&
    startX !== touchobj.pageX &&
    startY != null &&
    startY !== touchobj.pageY
  ) {
    // swipe down
    if (
      Math.abs(touchobj.pageY - startY) > Math.abs(touchobj.pageX - startX) &&
      touchobj.pageY > startY
    ) {
      swipeDirection = DIRECTION.DOWN;
    } else if (
      Math.abs(touchobj.pageY - startY) > Math.abs(touchobj.pageX - startX) &&
      touchobj.pageY < startY
    ) {
      swipeDirection = DIRECTION.UP;
    } else if (
      Math.abs(touchobj.pageY - startY) < Math.abs(touchobj.pageX - startX) &&
      touchobj.pageX > startX
    ) {
      swipeDirection = DIRECTION.RIGHT;
    } else if (
      Math.abs(touchobj.pageY - startY) < Math.abs(touchobj.pageX - startX) &&
      touchobj.pageX < startX
    ) {
      swipeDirection = DIRECTION.LEFT;
    }
  }
}

function _init() {
  cubeDom.addEventListener('touchstart', _touchStartHandler);
  cubeDom.addEventListener('touchmove', _touchMoveHandler);
  cubeDom.addEventListener('touchend', _touchEndHandler);
}

_init();
