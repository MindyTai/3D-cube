"use strict";

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
    left: 'C',
    right: 'A',
    back: 'D',
    up: 'E',
    down: 'F'
  },
  action: {
    left: {
      x: -90,
      y: 0,
      z: 0
    },
    right: {
      x: 90,
      y: -90,
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
      z: 90
    },
    down: {
      x: 0,
      y: 0,
      z: -90
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
      y: 90,
      z: 0
    },
    down: {
      x: 0,
      y: -90,
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
    left: 'A',
    right: 'C',
    back: 'B',
    up: 'E',
    down: 'F'
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
      z: -90
    },
    down: {
      x: 0,
      y: 0,
      z: 90
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
    front: 'E',
    left: 'C',
    right: 'A',
    back: 'F',
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
      z: -90
    },
    right: {
      x: 0,
      y: 0,
      z: 90
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

function Cube(dom) {
  this.stateIdx = 0;
  this.side = 'A';
  this.lastSide = undefined;
  this.lastRotation = undefined;
  this.dom = dom;
  this.transform = {
    x: 0,
    y: 0,
    z: 0
  };
}

Cube.prototype = {
  getDegree: function getDegree(index, rotation) {
    this.transform.x = States[index].action[rotation].x + this.transform.x;
    this.transform.y = States[index].action[rotation].y + this.transform.y;
    this.transform.z = States[index].action[rotation].z + this.transform.z;
    return "rotateX(".concat(this.transform.x, "deg) rotateY(").concat(this.transform.y, "deg) rotateZ(").concat(this.transform.z, "deg)");
  },
  findIndex: function findIndex() {
    console.log(this.side, this.lastSide);

    for (var i = 0; i < 24; i += 1) {
      if (this.side === States[i].side.front && this.lastSide === States[i].side[this.lastRotation]) {
        this.stateIdx = i;
        return;
      }
    }

    console.log('gg');
  },
  forceRender: function forceRender() {
    return this.dom.clientHeight;
  },
  rotate: function rotate(direction) {
    if (direction === DIRECTION.LEFT) {
      this.forceRender();
      this.dom.classList.add('transition'); // 現在是哪一面

      this.lastSide = this.side; // 轉幾度過去

      this.dom.style.transform = this.getDegree(this.stateIdx, 'left'); // 下一面是誰

      this.side = States[this.stateIdx].side.right; // 更新 stateIdx/side/lastrotation/lastside

      this.lastRotation = 'left';
      this.findIndex();
    }

    if (direction === DIRECTION.RIGHT) {
      this.forceRender();
      this.dom.classList.add('transition'); // 現在是哪一面

      this.lastSide = this.side; // 轉幾度過去

      this.dom.style.transform = this.getDegree(this.stateIdx, 'right'); // 下一面是誰

      this.side = States[this.stateIdx].side.left; // 更新 stateIdx/side/lastrotation/lastside

      this.lastRotation = 'right';
      this.findIndex();
    }

    if (direction === DIRECTION.UP) {
      this.forceRender();
      this.dom.classList.add('transition'); // 現在是哪一面

      this.lastSide = this.side; // 轉幾度過去

      this.dom.style.transform = this.getDegree(this.stateIdx, 'up'); // 下一面是誰

      this.side = States[this.stateIdx].side.down; // 更新 stateIdx/side/lastrotation/lastside

      this.lastRotation = 'up';
      this.findIndex();
    }

    if (direction === DIRECTION.DOWN) {
      this.forceRender();
      this.dom.classList.add('transition'); // 現在是哪一面

      this.lastSide = this.side; // 轉幾度過去

      this.dom.style.transform = this.getDegree(this.stateIdx, 'down'); // 下一面是誰

      this.side = States[this.stateIdx].side.top; // 更新 stateIdx/side/lastrotation/lastside

      this.lastRotation = 'down';
      this.findIndex();
    }
  }
};
var cubeDom = document.getElementsByClassName('space')[0];
var cube = new Cube(cubeDom); // touch

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

function _init() {
  cubeDom.addEventListener('touchstart', _touchStartHandler);
  cubeDom.addEventListener('touchmove', _touchMoveHandler);
  cubeDom.addEventListener('touchend', _touchEndHandler);
}

_init();