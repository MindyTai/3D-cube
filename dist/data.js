"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      y: -1,
      z: 0
    },
    right: {
      x: 0,
      y: 1,
      z: 0
    },
    up: {
      x: 1,
      y: 0,
      z: 0
    },
    down: {
      x: -1,
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
      y: 1,
      z: 0
    },
    right: {
      x: 0,
      y: -1,
      z: 0
    },
    up: {
      x: 1,
      y: 0,
      z: 0
    },
    down: {
      x: -1,
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
      y: 1,
      z: 0
    },
    right: {
      x: 0,
      y: -1,
      z: 0
    },
    up: {
      x: -1,
      y: 0,
      z: 0
    },
    down: {
      x: 1,
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
      x: -1,
      y: 0,
      z: 0
    },
    right: {
      x: 1,
      y: 0,
      z: 0
    },
    up: {
      x: 0,
      y: -1,
      z: 0
    },
    down: {
      x: 0,
      y: 1,
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
      z: -1
    },
    right: {
      x: 0,
      y: 0,
      z: 1
    },
    up: {
      x: 1,
      y: 0,
      z: 0
    },
    down: {
      x: -1,
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
      x: 1,
      y: 0,
      z: 0
    },
    right: {
      x: -1,
      y: 0,
      z: 0
    },
    up: {
      x: 0,
      y: 0,
      z: 1
    },
    down: {
      x: 0,
      y: 0,
      z: -1
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
      z: 1
    },
    right: {
      x: 0,
      y: 0,
      z: -1
    },
    up: {
      x: -1,
      y: 0,
      z: 0
    },
    down: {
      x: 1,
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
      x: -1,
      y: 0,
      z: 0
    },
    right: {
      x: 1,
      y: 0,
      z: 0
    },
    up: {
      x: 0,
      y: 0,
      z: -1
    },
    down: {
      x: 0,
      y: 0,
      z: 1
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
      x: -1,
      y: 0,
      z: 0
    },
    right: {
      x: 1,
      y: 0,
      z: 0
    },
    up: {
      x: 0,
      y: -1,
      z: 0
    },
    down: {
      x: 0,
      y: 1,
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
      y: -1,
      z: 0
    },
    right: {
      x: 0,
      y: 1,
      z: 0
    },
    up: {
      x: -1,
      y: 0,
      z: 0
    },
    down: {
      x: 1,
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
      x: 1,
      y: 0,
      z: 0
    },
    right: {
      x: -1,
      y: 0,
      z: 0
    },
    up: {
      x: 0,
      y: 1,
      z: 0
    },
    down: {
      x: 0,
      y: -1,
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
      y: 1,
      z: 0
    },
    right: {
      x: 0,
      y: -1,
      z: 0
    },
    up: {
      x: 1,
      y: 0,
      z: 0
    },
    down: {
      x: -1,
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
      z: 1
    },
    right: {
      x: 0,
      y: 0,
      z: -1
    },
    up: {
      x: 1,
      y: 0,
      z: 0
    },
    down: {
      x: -1,
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
      x: 1,
      y: 0,
      z: 0
    },
    right: {
      x: -1,
      y: 0,
      z: 0
    },
    up: {
      x: 0,
      y: 0,
      z: -1
    },
    down: {
      x: 0,
      y: 0,
      z: 1
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
      z: -1
    },
    right: {
      x: 0,
      y: 0,
      z: 1
    },
    up: {
      x: -1,
      y: 0,
      z: 0
    },
    down: {
      x: 1,
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
      x: -1,
      y: 0,
      z: 0
    },
    right: {
      x: 1,
      y: 0,
      z: 0
    },
    up: {
      x: 0,
      y: 0,
      z: 1
    },
    down: {
      x: 0,
      y: 0,
      z: -1
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
      y: -1,
      z: 0
    },
    right: {
      x: 0,
      y: 1,
      z: 0
    },
    up: {
      x: 0,
      y: 0,
      z: -1
    },
    down: {
      x: 0,
      y: 0,
      z: 1
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
      z: -1
    },
    right: {
      x: 0,
      y: 0,
      z: 1
    },
    up: {
      x: 0,
      y: -1,
      z: 0
    },
    down: {
      x: 0,
      y: 1,
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
      y: 1,
      z: 0
    },
    right: {
      x: 0,
      y: -1,
      z: 0
    },
    up: {
      x: 0,
      y: 0,
      z: 1
    },
    down: {
      x: 0,
      y: 0,
      z: -1
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
      z: 1
    },
    right: {
      x: 0,
      y: 0,
      z: -1
    },
    up: {
      x: 0,
      y: 1,
      z: 0
    },
    down: {
      x: 0,
      y: -1,
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
      y: -1,
      z: 0
    },
    right: {
      x: 0,
      y: 1,
      z: 0
    },
    up: {
      x: 0,
      y: 0,
      z: 1
    },
    down: {
      x: 0,
      y: 0,
      z: -1
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
      z: 1
    },
    right: {
      x: 0,
      y: 0,
      z: -1
    },
    up: {
      x: 0,
      y: -1,
      z: 0
    },
    down: {
      x: 0,
      y: 1,
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
      y: 1,
      z: 0
    },
    right: {
      x: 0,
      y: -1,
      z: 0
    },
    up: {
      x: 0,
      y: 0,
      z: -1
    },
    down: {
      x: 0,
      y: 0,
      z: 1
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
      z: -1
    },
    right: {
      x: 0,
      y: 0,
      z: 1
    },
    up: {
      x: 0,
      y: -1,
      z: 0
    },
    down: {
      x: 0,
      y: 1,
      z: 0
    }
  }
}];
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

var Cube = function Cube(dom) {
  var _this = this;

  _classCallCheck(this, Cube);

  _defineProperty(this, "getDegree", function (index, rotation) {
    var _States$index$action$ = States[index].action[rotation],
        x = _States$index$action$.x,
        y = _States$index$action$.y,
        z = _States$index$action$.z;
    return "rotate3d(".concat(x, ",").concat(y, ",").concat(z, ",90deg)");
  });

  _defineProperty(this, "findIndex", function () {
    // console.log(this.lastSide, this.side);
    for (var i = 0; i < 24; i += 1) {
      if (_this.side === States[i].side.front && _this.lastSide === States[i].side[_this.lastRotation]) {
        _this.stateIdx = i; // console.log(this.stateIdx);

        return;
      }
    }

    console.log('gg');
  });

  _defineProperty(this, "forceRender", function () {
    return _this.dom.clientHeight;
  });

  _defineProperty(this, "nextSide", function (direction, lastDirection) {
    _this.forceRender();

    _this.dom.classList.add('transition'); // 現在是哪一面


    _this.lastSide = _this.side; // 轉幾度過去

    _this.dom.style.transform = _this.dom.style.transform.concat(' ', _this.getDegree(_this.stateIdx, direction)); // 下一面是誰

    _this.side = States[_this.stateIdx].side[lastDirection]; // 更新 stateIdx/side/lastrotation/lastside

    _this.lastRotation = direction;

    _this.findIndex();
  });

  _defineProperty(this, "rotate", function (direction) {
    if (direction === DIRECTION.LEFT) {
      _this.nextSide('left', 'right');
    }

    if (direction === DIRECTION.RIGHT) {
      _this.nextSide('right', 'left');
    }

    if (direction === DIRECTION.UP) {
      _this.nextSide('up', 'down');
    }

    if (direction === DIRECTION.DOWN) {
      _this.nextSide('down', 'up');
    }
  });

  _defineProperty(this, "topLeftSteps", function () {
    console.log(_this.transformValArray);

    if (_this.side === 'A') {
      _this.rotate('down');

      _this.transformVal = _this.dom.style.transform;

      _this.transformValArray.push(_this.transformVal);

      _this.turn += 1;
      console.log(_this.transformValArray);
      console.log(_this.transformVal);
      console.log(_this.turn);
      console.log('appppppppppplw');
    } else if (_this.side === 'B') {
      _this.rotate('right');

      _this.transformVal = _this.dom.style.transform;

      _this.transformValArray.push(_this.transformVal);

      console.log(_this.transformValArray);
      console.log(_this.transformVal);
      _this.turn += 1;
      console.log(_this.turn);
    } else if (_this.side === 'F') {
      _this.rotate('down');

      _this.transformVal = _this.dom.style.transform;

      _this.transformValArray.push(_this.transformVal);

      console.log(_this.transformVal);
      console.log(_this.transformValArray);
      _this.turn += 1;
      console.log(_this.turn);
    } else if (_this.side === 'C') {
      _this.rotate('right');

      _this.transformVal = _this.dom.style.transform;

      _this.transformValArray.push(_this.transformVal);

      console.log(_this.transformVal);
      console.log(_this.transformValArray);
      _this.turn += 1;
      console.log(_this.turn);
    } else if (_this.side === 'D') {
      _this.rotate('down');

      _this.transformVal = _this.dom.style.transform;

      _this.transformValArray.push(_this.transformVal);

      console.log(_this.transformVal);
      console.log(_this.transformValArray);
      _this.turn += 1;
      console.log(_this.turn);
    } else if (_this.side === 'E') {
      _this.rotate('right');

      _this.transformVal = _this.dom.style.transform;

      _this.transformValArray.push(_this.transformVal);

      console.log(_this.transformVal);
      console.log(_this.transformValArray);
      _this.turn += 1;
      console.log(_this.turn);
    }
  });

  _defineProperty(this, "vertHoriLoop", function () {
    if (_this.side === 'A' && _this.flag === 0) {
      _this.rotate('down');
    } else if (_this.side === 'B' && _this.flag === 0) {
      _this.rotate('down');
    } else if (_this.side === 'C' && _this.flag === 0) {
      _this.rotate('down');
    } else if (_this.side === 'D' && _this.flag === 0) {
      _this.rotate('down');

      _this.flag = 1;
    } else if (_this.side === 'A' && _this.flag === 1) {
      _this.rotate('left');
    } else if (_this.side === 'E' && _this.flag === 1) {
      _this.rotate('left');
    } else if (_this.side === 'C' && _this.flag === 1) {
      _this.rotate('left');
    } else if (_this.side === 'F' && _this.flag === 1) {
      _this.rotate('left');

      _this.flag = 0;
    }
  });

  _defineProperty(this, "topLeftStepsMouseUpHandler", function (e) {
    if (_this.startX != null && _this.startX !== e.clientX && _this.startY != null && _this.startY !== e.clientY) {
      if (Math.abs(e.clientY - _this.startY) > Math.abs(e.clientX - _this.startX) && e.clientY > _this.startY) {
        _this.swipeDirection = DIRECTION.DOWN;
      } else if (Math.abs(e.clientY - _this.startY) > Math.abs(e.clientX - _this.startX) && e.clientY < _this.startY) {
        _this.swipeDirection = DIRECTION.UP;
      } else if (Math.abs(e.clientY - _this.startY) < Math.abs(e.clientX - _this.startX) && e.clientX > _this.startX) {
        _this.swipeDirection = DIRECTION.RIGHT;
      } else if (Math.abs(e.clientY - _this.startY) < Math.abs(e.clientX - _this.startX) && e.clientX < _this.startX) {
        _this.swipeDirection = DIRECTION.LEFT;
      }
    }

    if (_this.lastRotation === 'down') {
      console.log(_this.nextVal);

      if (_this.swipeDirection === DIRECTION.UP) {
        _this.state = 'ACTIVE';
        _this.dom.style.transform = _this.transformValArray[_this.turn - 1];

        _this.dom.classList.add('transition');

        console.log(_this.turn); // this.rotate('up');

        _this.dom.removeEventListener('transitionend', _this.topLeftSteps);
      } else if ([DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(_this.swipeDirection)) {
        _this.dom.style.transform = _this.nextVal;

        _this.dom.classList.add('transition');

        console.log(_this.swipeDirection);
        _this.state = 'ACTIVE'; // this.rotate('down');

        _this.dom.removeEventListener('transitionend', _this.topLeftSteps); // STOP ANIMATION

      }
    } else if (_this.lastRotation === 'right') {
      if (_this.swipeDirection === DIRECTION.LEFT) {
        _this.state = 'ACTIVE'; // this.rotate('left');

        _this.dom.style.transform = _this.transformValArray[_this.turn - 2];

        _this.dom.classList.add('transition');

        console.log("right".concat(_this.turn));
        console.log(_this.transformValArray[_this.turn]);

        _this.dom.removeEventListener('transitionend', _this.topLeftSteps);
      } else if ([DIRECTION.RIGHT, DIRECTION.DOWN, DIRECTION.UP].includes(_this.swipeDirection)) {
        _this.state = 'ACTIVE';
        _this.dom.style.transform = _this.nextVal;

        _this.dom.classList.add('transition'); // this.rotate('right');


        _this.dom.removeEventListener('transitionend', _this.topLeftSteps); // STOP ANIMATION

      }
    }

    if (_this.state === 'ACTIVE') {
      _this.dom.removeEventListener('transitionend', _this.topLeftSteps);

      document.removeEventListener('mouseup', _this.topLeftStepsMouseUpHandler);
      document.addEventListener('mouseup', _this.activeStateMouseUpHandler);
    }
  });

  _defineProperty(this, "activeStateMouseUpHandler", function (e) {
    console.log('mouseup');

    if (_this.startX != null && _this.startX !== e.clientX && _this.startY != null && _this.startY !== e.clientY) {
      if (Math.abs(e.clientY - _this.startY) > Math.abs(e.clientX - _this.startX) && e.clientY > _this.startY) {
        _this.swipeDirection = DIRECTION.DOWN;

        _this.rotate(DIRECTION.DOWN);
      } else if (Math.abs(e.clientY - _this.startY) > Math.abs(e.clientX - _this.startX) && e.clientY < _this.startY) {
        _this.swipeDirection = DIRECTION.UP;

        _this.rotate(DIRECTION.UP);
      } else if (Math.abs(e.clientY - _this.startY) < Math.abs(e.clientX - _this.startX) && e.clientX > _this.startX) {
        _this.swipeDirection = DIRECTION.RIGHT;

        _this.rotate(DIRECTION.RIGHT);
      } else if (Math.abs(e.clientY - _this.startY) < Math.abs(e.clientX - _this.startX) && e.clientX < _this.startX) {
        _this.swipeDirection = DIRECTION.LEFT;

        _this.rotate(DIRECTION.LEFT);
      }
    }
  });

  _defineProperty(this, "mouseLeave", function () {
    if (_this.mouseFlag === 0) {
      _this.dom.classList.add('transition');

      _this.dom.style.transform = _this.nextVal; // 因為transitionend,所以動畫繼續
    }
  });

  _defineProperty(this, "mouseEnter", function () {
    if (_this.mouseFlag === 0) {
      _this.nextVal = _this.dom.style.transform;
      console.log(_this.nextVal);
      var transformValue = window.getComputedStyle(_this.dom).getPropertyValue('transform');
      _this.dom.style.transform = transformValue;

      _this.dom.classList.remove('transition');
    }
  });

  _defineProperty(this, "mouseDown", function (e) {
    _this.dom.removeEventListener('mouseenter', _this.mouseEnter);

    _this.dom.removeEventListener('mouseleave', _this.mouseLeave);

    _this.startX = e.clientX;
    _this.startY = e.clientY;
    console.log(_this.nextVal);
    var transformValue = window.getComputedStyle(_this.dom).getPropertyValue('transform');
    _this.dom.style.transform = transformValue;
  });

  _defineProperty(this, "mouseMove", function (e) {
    e.stopPropagation();

    if (e.cancelable) {
      e.preventDefault();
    } else return false;
  });

  _defineProperty(this, "touchStartHandler", function (e) {
    var touchobj = e.changedTouches[0];
    _this.startX = touchobj.pageX;
    _this.startY = touchobj.pageY;
  });

  _defineProperty(this, "touchMoveHandler", function (e) {
    e.stopPropagation();

    if (e.cancelable) {
      e.preventDefault();
    } else return false;
  });

  _defineProperty(this, "activeStateTouchEndHandler", function (e) {
    var touchobj = e.changedTouches[0];

    if (_this.startX != null && _this.startX !== touchobj.pageX && _this.startY != null && _this.startY !== touchobj.pageY) {
      // swipe down
      if (Math.abs(touchobj.pageY - _this.startY) > Math.abs(touchobj.pageX - _this.startX) && touchobj.pageY > _this.startY) {
        _this.swipeDirection = DIRECTION.DOWN;

        _this.rotate(DIRECTION.DOWN);
      } else if (Math.abs(touchobj.pageY - _this.startY) > Math.abs(touchobj.pageX - _this.startX) && touchobj.pageY < _this.startY) {
        _this.swipeDirection = DIRECTION.UP;

        _this.rotate(DIRECTION.UP);
      } else if (Math.abs(touchobj.pageY - _this.startY) < Math.abs(touchobj.pageX - _this.startX) && touchobj.pageX > _this.startX) {
        _this.swipeDirection = DIRECTION.RIGHT;

        _this.rotate(DIRECTION.RIGHT);
      } else if (Math.abs(touchobj.pageY - _this.startY) < Math.abs(touchobj.pageX - _this.startX) && touchobj.pageX < _this.startX) {
        _this.swipeDirection = DIRECTION.LEFT;

        _this.rotate(DIRECTION.LEFT);
      }
    }
  });

  _defineProperty(this, "topLeftStepsTouchEndHandler", function (e) {
    var touchobj = e.changedTouches[0];

    if (_this.startX != null && _this.startX !== touchobj.pageX && _this.startY != null && _this.startY !== touchobj.pageY) {
      if (Math.abs(touchobj.pageY - _this.startY) > Math.abs(touchobj.pageX - _this.startX) && touchobj.pageY > _this.startY) {
        _this.swipeDirection = DIRECTION.DOWN; // cube.rotate(DIRECTION.DOWN);
      } else if (Math.abs(touchobj.pageY - _this.startY) > Math.abs(touchobj.pageX - _this.startX) && touchobj.pageY < _this.startY) {
        _this.swipeDirection = DIRECTION.UP; // cube.rotate(DIRECTION.UP);
      } else if (Math.abs(touchobj.pageY - _this.startY) < Math.abs(touchobj.pageX - _this.startX) && touchobj.pageX > _this.startX) {
        _this.swipeDirection = DIRECTION.RIGHT; // cube.rotate(DIRECTION.RIGHT);
      } else if (Math.abs(touchobj.pageY - _this.startY) < Math.abs(touchobj.pageX - _this.startX) && touchobj.pageX < _this.startX) {
        _this.swipeDirection = DIRECTION.LEFT; // cube.rotate(DIRECTION.LEFT);
      }
    }

    console.log(_this); // INIT

    if (_this.lastRotation === 'down') {
      if (_this.swipeDirection === DIRECTION.UP) {
        _this.state = 'ACTIVE';

        _this.rotate('up');

        console.log(_this.swipeDirection);

        _this.dom.removeEventListener('transitionend', _this.topLeftSteps);
      } else if ([DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(_this.swipeDirection)) {
        _this.state = 'ACTIVE';

        _this.dom.removeEventListener('transitionend', _this.topLeftSteps); // STOP ANIMATION

      }
    } else if (_this.lastRotation === 'right') {
      if (_this.swipeDirection === DIRECTION.LEFT) {
        _this.state = 'ACTIVE';

        _this.rotate('left');

        _this.dom.removeEventListener('transitionend', _this.topLeftSteps);
      } else if ([DIRECTION.RIGHT, DIRECTION.DOWN, DIRECTION.UP].includes(_this.swipeDirection)) {
        _this.state = 'ACTIVE';

        _this.dom.removeEventListener('transitionend', _this.topLeftSteps); // STOP ANIMATION

      }
    }

    if (_this.state === 'ACTIVE') {
      _this.dom.removeEventListener('transitionend', _this.topLeftSteps);

      _this.dom.addEventListener('touchend', _this.activeStateTouchEndHandler);
    }
  });

  _defineProperty(this, "vertHoriLoopTouchEndHandler", function (e) {
    var touchobj = e.changedTouches[0];

    if (_this.startX != null && _this.startX !== touchobj.pageX && _this.startY != null && _this.startY !== touchobj.pageY) {
      // swipe down
      if (Math.abs(touchobj.pageY - _this.startY) > Math.abs(touchobj.pageX - _this.startX) && touchobj.pageY > _this.startY) {
        _this.swipeDirection = DIRECTION.DOWN;
      } else if (Math.abs(touchobj.pageY - _this.startY) > Math.abs(touchobj.pageX - _this.startX) && touchobj.pageY < _this.startY) {
        _this.swipeDirection = DIRECTION.UP;
      } else if (Math.abs(touchobj.pageY - _this.startY) < Math.abs(touchobj.pageX - _this.startX) && touchobj.pageX > _this.startX) {
        _this.swipeDirection = DIRECTION.RIGHT;
      } else if (Math.abs(touchobj.pageY - _this.startY) < Math.abs(touchobj.pageX - _this.startX) && touchobj.pageX < _this.startX) {
        _this.swipeDirection = DIRECTION.LEFT;
      }
    } // INIT


    if (_this.lastRotation === 'down') {
      if (_this.swipeDirection === DIRECTION.UP) {
        _this.state = 'ACTIVE';

        _this.rotate('up');

        _this.dom.removeEventListener('transitionend', _this.vertHoriLoop);
      } else if ([DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(_this.swipeDirection)) {
        _this.state = 'ACTIVE';

        _this.dom.removeEventListener('transitionend', _this.vertHoriLoop); // STOP ANIMATION

      }
    } else if (_this.lastRotation === 'left') {
      if (_this.swipeDirection === DIRECTION.RIGHT) {
        _this.state = 'ACTIVE';

        _this.rotate('right');

        _this.dom.removeEventListener('transitionend', _this.vertHoriLoop);
      } else if ([DIRECTION.LEFT, DIRECTION.DOWN, DIRECTION.UP].includes(_this.swipeDirection)) {
        _this.state = 'ACTIVE';

        _this.dom.removeEventListener('transitionend', _this.vertHoriLoop); // STOP ANIMATION

      }
    }

    if (_this.state === 'ACTIVE') {
      // cube.dom.removeEventListener('transitionend', cube.topLeftSteps);
      _this.dom.removeEventListener('transitionend', _this.vertHoriLoop);

      _this.dom.addEventListener('touchend', _this.activeStateTouchEndHandler);
    }
  });

  this.stateIdx = 0;
  this.side = 'A';
  this.lastSide = undefined;
  this.lastRotation = undefined;
  this.dom = dom;
  this.state = STATE.INIT;
  this.topLeftSteps = this.topLeftSteps.bind(this);
  this.dom.style.transform = '';
  this.flag = 0;
  this.mouseFlag = 0;
  this.nextVal = undefined;
  this.startX = undefined;
  this.startY = undefined;
  this.swipeDirection = undefined;
  this.transformValArray = ['rotate3d(0, 0, 0, 90deg)'];
  this.transformVal = 'rotate3d(0, 0, 0, 90deg)';
  this.turn = 0;
  this.isTouchEventSupported = 'ontouchstart' in window;
  this.downEvent = this.isTouchEventSupported ? 'touchstart' : 'mousedown';
  this.moveEvent = this.isTouchEventSupported ? 'touchmove' : 'mousemove';
  this.upEvent = this.isTouchEventSupported ? 'touchend' : 'mouseup';
  this.mouseDownFuc = this.mouseDown;
  this.mouseMoveFuc = this.mouseMove;
  this.mouseUpFuc = this.topLeftStepsMouseUpHandler;
  this.touchStartFunc = this.touchStartHandler;
  this.touchMoveFunc = this.touchMoveHandler;
  this.touchEndFunc = this.topLeftStepsTouchEndHandler;
  this.downFuc = this.isTouchEventSupported ? this.touchStartFunc : this.mouseDown;
  this.moveFunc = this.isTouchEventSupported ? this.touchMoveFunc : this.mouseMoveFuc;
  this.upFunc = this.isTouchEventSupported ? this.touchEndFunc : this.mouseUpFuc; // this.dom.addEventListener('transitionend', this.vertHoriLoop);

  this.dom.addEventListener('transitionend', this.topLeftSteps);
  this.dom.addEventListener(this.downEvent, this.downFuc);
  this.dom.addEventListener(this.moveEvent, this.moveFunc);
  this.dom.addEventListener('touchend', this.topLeftStepsTouchEndHandler);
  document.addEventListener('mouseup', this.topLeftStepsMouseUpHandler);
  this.dom.addEventListener('mouseleave', this.mouseLeave);
  this.dom.addEventListener('mouseenter', this.mouseEnter);
};

var cubeDom = document.getElementsByClassName('space')[0];
var cube = new Cube(cubeDom);
cube.topLeftSteps();