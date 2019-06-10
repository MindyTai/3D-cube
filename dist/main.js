"use strict";

var DIRECTION = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  UP: 'UP',
  DOWN: 'DOWN'
};
var SIDE = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F'
};
var ROTATION = {
  AtoB: 'AtoB',
  BtoC: 'BtoC',
  CtoD: 'CtoD',
  DtoE: 'DtoE',
  EtoF: 'EtoF',
  FtoX: 'FtoX'
};
var STATE = {
  INIT: 'INIT',
  ACTIVE: 'ACTIVE'
};
var DEGREE = {
  A: {
    X: 0,
    Y: 0,
    Z: 0
  },
  B: {
    X: -90,
    Y: 0,
    Z: 0
  },
  C: {
    X: -90,
    Y: 0,
    Z: 90
  },
  D: {
    X: -180,
    Y: 0,
    Z: 90
  },
  E: {
    X: -180,
    Y: -90,
    Z: 90
  },
  F: {
    X: -180,
    Y: -90,
    Z: 180
  },
  G: {
    X: -180,
    Y: 0,
    Z: 0
  },
  H: {}
};

function nextSide(side, degreeX, degreeY, degreeZ) {
  return "rotateX(".concat(DEGREE[side].X + degreeX, "deg) rotateY(").concat(DEGREE[side].Y + degreeY, "deg) rotateZ(").concat(DEGREE[side].Z + degreeZ, "deg)");
}

var startX;
var startY;
var swipeDirection;

function Cube(dom) {
  this.dom = dom;
  this.side = SIDE.A;
  this.state = STATE.INIT;
  this.degree = DEGREE.SIDE_A;
  this.rotation = ROTATION.AtoB;
  this.topLeftSteps = this.topLeftSteps.bind(this);
  this.dom.addEventListener('transitionend', this.topLeftSteps); // this.vertHoriLoop = this.vertHoriLoop.bind(this);
  // this.dom.addEventListener('transitionend', this.vertHoriLoop);
}

Cube.prototype = {
  topLeftSteps: function topLeftSteps() {
    if (this.dom.classList.contains('rotate-b')) {
      this.rotate('B', 'C');
    } else if (this.dom.classList.contains('rotate-c')) {
      this.rotate('C', 'D');
    } else if (this.dom.classList.contains('rotate-d')) {
      this.rotate('D', 'E');
    } else if (this.dom.classList.contains('rotate-e')) {
      this.rotate('E', 'F');
    } else if (this.dom.classList.contains('rotate-f')) {
      this.rotate('F', 'A-1');
      this.rotation = ROTATION.FtoX;
    } else if (this.dom.classList.contains('rotate-a-1')) {
      this.rotate('A-1', 'A');
      this.rotation = ROTATION.FtoX;
      this.dom.classList.remove('transition');
      this.rotate('A', 'B');
    }

    console.log(this.rotation);
  },
  vertHoriLoop: function vertHoriLoop() {
    if (this.dom.classList.contains('rotate-b')) {
      this.rotate('B', 'G');
    } else if (this.dom.classList.contains('rotate-g')) {
      this.rotate('G', 'H');
    }
  },
  rotate: function rotate(from, to) {
    var x = this.dom.clientHeight;
    this.rotation = ROTATION["".concat(from, "to").concat(to)];
    this.dom.classList.add('transition');
    this.dom.classList.remove("rotate-".concat(from).toLowerCase());
    this.dom.classList.add("rotate-".concat(to).toLowerCase());
    console.log("from".concat(from));
    console.log("to".concat(to));
  }
};
var cubeDom = document.getElementsByClassName('space')[0];
var cube = new Cube(cubeDom);
cube.rotate('A', 'B');

function swipe(from, to) {
  cube.rotate(from, to);
  cube.state = 'ACTIVE';
  cube.side = to;
  cube.dom.removeEventListener('transitionend', cube.topLeftSteps);
}

function swipeAfterAction(classname, side, x, y, z, sideNext) {
  cube.dom.classList.remove(classname);
  cube.dom.style.transform = nextSide(side, x, y, z);
  cube.dom.classList.add('transition');
  cube.side = sideNext;
} // touch


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
    } else if (Math.abs(touchobj.pageY - startY) > Math.abs(touchobj.pageX - startX) && touchobj.pageY < startY) {
      swipeDirection = DIRECTION.UP;
    } else if (Math.abs(touchobj.pageY - startY) < Math.abs(touchobj.pageX - startX) && touchobj.pageX > startX) {
      swipeDirection = DIRECTION.RIGHT;
    } else if (Math.abs(touchobj.pageY - startY) < Math.abs(touchobj.pageX - startX) && touchobj.pageX < startX) {
      swipeDirection = DIRECTION.LEFT;
    } // swipe down


    if (cube.state === 'INIT') {
      if (swipeDirection === DIRECTION.UP) {
        if (cube.rotation === 'AtoB') {
          swipe('B', 'A');
          return;
        }

        if (cube.rotation === 'CtoD') {
          swipe('D', 'C');
          return;
        }

        if (cube.rotation === 'EtoF') {
          swipe('F', 'E');
          return;
        }

        if (cube.rotation === 'BtoG') {
          swipe('G', 'B');
          cube.dom.removeEventListener('transitionend', cube.vertHoriLoop);
          return;
        }
      } // swipe up


      if (swipeDirection === DIRECTION.DOWN) {
        if (cube.rotation === 'AtoB') {
          swipe('A', 'B');
          return;
        }

        if (cube.rotation === 'CtoD') {
          swipe('C', 'D');
          return;
        }

        if (cube.rotation === 'EtoF') {
          swipe('E', 'F');
          return;
        }

        if (cube.rotation === 'BtoG') {
          swipe('B', 'G');
          cube.dom.removeEventListener('transitionend', cube.vertHoriLoop);
          return;
        }
      } // swipe right


      if (swipeDirection === DIRECTION.RIGHT) {
        if (cube.rotation === 'BtoC') {
          swipe('B', 'C');
          return;
        }

        if (cube.rotation === 'DtoE') {
          swipe('D', 'E');
          return;
        }

        if (cube.rotation === 'FtoX') {
          cube.rotate('F', 'A-1');
          swipe('A-1', 'A');
          cube.dom.classList.remove('transition');
          return;
        }
      } // swipe left


      if (swipeDirection === DIRECTION.LEFT) {
        if (cube.rotation === 'BtoC') {
          swipe('C', 'B');
          return;
        }

        if (cube.rotation === 'DtoE') {
          swipe('E', 'D');
          return;
        }

        if (cube.rotation === 'FtoX') {
          cube.rotate('A', 'A-1');
          swipe('A-1', 'F');
          cube.rotation = ROTATION.XtoF;
          return;
        }
      }
    }

    if (cube.state === 'ACTIVE') {
      console.log(cube.side);

      if (cube.side === 'A') {
        cube.dom.classList.remove('transition');
        cube.dom.style.transform = nextSide('A', 0, 0, 0);
        var x = cube.dom.clientHeight;

        if (swipeDirection === DIRECTION.UP) {
          swipeAfterAction('rotate-a', 'A', 90, 0, 0, 'E');
        } else if (swipeDirection === DIRECTION.DOWN) {
          swipeAfterAction('rotate-a', 'A', -90, 0, 0, 'B');
        } else if (swipeDirection === DIRECTION.LEFT) {
          swipeAfterAction('rotate-a', 'A', 0, -90, 0, 'F');
        } else if (swipeDirection === DIRECTION.RIGHT) {
          swipeAfterAction('rotate-a', 'A', 0, 90, 0, 'C');
        }
      } else if (cube.side === 'B') {
        cube.dom.classList.remove('transition');
        cube.dom.style.transform = nextSide('B', 0, 0, 0);
        var x = cube.dom.clientHeight;

        if (swipeDirection === DIRECTION.UP) {
          swipeAfterAction('rotate-b', 'B', 90, 0, 0, 'A');
        } else if (swipeDirection === DIRECTION.DOWN) {
          swipeAfterAction('rotate-b', 'B', -90, 0, 0, 'C');
        } else if (swipeDirection === DIRECTION.RIGHT) {
          swipeAfterAction('rotate-b', 'B', 0, 0, 90, 'C');
        } else if (swipeDirection === DIRECTION.LEFT) {
          swipeAfterAction('rotate-b', 'B', 0, 0, -90, 'F');
        }
      } else if (cube.side === 'C') {
        cube.dom.classList.remove('transition');
        cube.dom.style.transform = nextSide('C', 0, 0, 0);
        var x = cube.dom.clientHeight;

        if (swipeDirection === DIRECTION.UP) {
          swipeAfterAction('rotate-c', 'C', 90, 0, 0, 'A');
        } else if (swipeDirection === DIRECTION.DOWN) {
          swipeAfterAction('rotate-c', 'C', -90, 0, 0, 'D');
        } else if (swipeDirection === DIRECTION.LEFT) {
          swipeAfterAction('rotate-c', 'C', 0, 0, -90, 'B');
        } else if (swipeDirection === DIRECTION.RIGHT) {
          swipeAfterAction('rotate-c', 'C', 0, 0, 90, 'E');
        }
      } else if (cube.side === 'D') {
        cube.dom.classList.remove('transition');
        cube.dom.style.transform = nextSide('D', 0, 0, 0);
        var x = cube.dom.clientHeight;

        if (swipeDirection === DIRECTION.UP) {
          swipeAfterAction('rotate-d', 'D', 90, 0, 0, 'C');
        } else if (swipeDirection === DIRECTION.DOWN) {
          swipeAfterAction('rotate-d', 'D', -90, 0, 0, 'F');
        } else if (swipeDirection === DIRECTION.LEFT) {
          swipeAfterAction('rotate-d', 'D', 0, 90, 0, 'B');
        } else if (swipeDirection === DIRECTION.RIGHT) {
          swipeAfterAction('rotate-d', 'D', 0, -90, 0, 'E');
        }
      } else if (cube.side === 'E') {
        cube.dom.classList.remove('transition');
        cube.dom.style.transform = nextSide('E', 0, 0, 0);
        var x = cube.dom.clientHeight;

        if (swipeDirection === DIRECTION.UP) {
          swipeAfterAction('rotate-e', 'E', 90, 0, 0, 'C');
        } else if (swipeDirection === DIRECTION.DOWN) {
          swipeAfterAction('rotate-e', 'E', -90, 0, 0, 'F');
        } else if (swipeDirection === DIRECTION.LEFT) {
          swipeAfterAction('rotate-e', 'E', 0, 90, 0, 'D');
        } else if (swipeDirection === DIRECTION.RIGHT) {
          swipeAfterAction('rotate-e', 'E', 0, -90, 0, 'A');
        }
      } else if (cube.side === 'F') {
        cube.dom.classList.remove('transition');
        cube.dom.style.transform = nextSide('F', 0, 0, 0);
        var x = cube.dom.clientHeight;

        if (swipeDirection === DIRECTION.UP) {
          swipeAfterAction('rotate-f', 'F', 90, 0, 0, 'E');
        } else if (swipeDirection === DIRECTION.DOWN) {
          swipeAfterAction('rotate-f', 'F', -90, 0, 0, 'B');
        } else if (swipeDirection === DIRECTION.RIGHT) {
          swipeAfterAction('rotate-f', 'F', 0, -90, 0, 'A');
        } else if (swipeDirection === DIRECTION.LEFT) {
          swipeAfterAction('rotate-f', 'F', 0, 90, 0, 'D');
        }
      } else if (cube.side === 'G') {
        cube.dom.classList.remove('transition');
        cube.dom.style.transform = nextSide('G', 0, 0, 0);
        var x = cube.dom.clientHeight;

        if (swipeDirection === DIRECTION.UP) {
          swipeAfterAction('rotate-g', 'G', 90, 0, 0, 'B');
        } else if (swipeDirection === DIRECTION.DOWN) {
          swipeAfterAction('rotate-g', 'G', -90, 0, 0, 'H');
        } else if (swipeDirection === DIRECTION.LEFT) {
          swipeAfterAction('rotate-g', 'G', 0, 90, 0, 'F');
        } else if (swipeDirection === DIRECTION.RIGHT) {
          swipeAfterAction('rotate-g', 'G', 0, -90, 0, 'C');
        }
      }

      console.log("2:".concat(cube.side));
    }

    startX = null;
  }
}

function _init() {
  cubeDom.addEventListener('touchstart', _touchStartHandler);
  cubeDom.addEventListener('touchmove', _touchMoveHandler);
  cubeDom.addEventListener('touchend', _touchEndHandler);
}

_init();