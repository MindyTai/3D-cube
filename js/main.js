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
  }
};

var CORRECT_SIDE = {
  A: {
    B: {
      t_x: 450,
      t_y: 150,
      t_z: 150,
      r_x: 0,
      r_y: 90,
      r_z: 0
    },
    C: {
      t_x: -150,
      t_y: 150,
      t_z: 150,
      r_x: -90,
      r_y: -90,
      r_z: -90
    },
    E: {
      t_x: 150,
      t_y: 450,
      t_z: 150,
      r_x: -90,
      r_y: 0,
      r_z: 0
    },
    F: {
      t_x: 450,
      t_y: 150,
      t_z: -150,
      r_x: 0,
      r_y: 180,
      r_z: 270
    }
  },
  B: {}
};

function nextSide(side, degreeX, degreeY, degreeZ) {
  return `rotateX(${DEGREE[side].X + degreeX}deg) rotateY(${DEGREE[side].Y +
    degreeY}deg) rotateZ(${DEGREE[side].Z + degreeZ}deg)`;
}

function correctSide(side) {
  return `translateX(${CORRECT_SIDE[side].t_x}px) translateY(${
    CORRECT_SIDE[side].t_y
  }px) translateZ(${CORRECT_SIDE[side].t_z}px) rotateX(${
    CORRECT_SIDE[side].r_x
  }deg) rotateY(${CORRECT_SIDE[side].r_y}deg) rotateZ(${
    CORRECT_SIDE[side].r_z
  }deg)`;
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
  this.detect = this.detect.bind(this);
  this.dom.addEventListener('transitionend', this.detect);
}

Cube.prototype = {
  detect() {
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
  correctSide() {},
  rotate(from, to) {
    var x = this.dom.clientHeight;
    this.rotation = ROTATION[`${from}to${to}`];
    this.dom.classList.add('transition');
    this.dom.classList.remove(`rotate-${from}`.toLowerCase());
    this.dom.classList.add(`rotate-${to}`.toLowerCase());
    console.log(`from${from}`);
    console.log(`to${to}`);
  },
  rotateXtoF() {
    var x = this.dom.clientHeight;
    this.dom.classList.add('transition');
    this.dom.classList.remove('rotate-a-1');
    this.dom.classList.add('rotate-f');
  },
  rotateXtoA() {
    var x = this.dom.clientHeight;
    this.rotation = ROTATION.FtoX;
    this.dom.classList.remove('transition');
    this.dom.classList.remove('rotate-a-1');
    this.dom.classList.add('rotate-a');
  },
  rotateAtoX() {
    var x = this.dom.clientHeight;
    this.dom.classList.add('transition');
    this.dom.classList.remove('rotate-reverse-a');
    this.dom.classList.add('rotate-reverse-a-1');
  }
};

var cubeDom = document.getElementsByClassName('space')[0];
var cube = new Cube(cubeDom);
// cube.rotateAtoB();
cube.rotate('A', 'B');

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
    // swipe down
    if (cube.state === 'INIT') {
      if (swipeDirection === DIRECTION.UP) {
        if (cube.rotation === 'AtoB') {
          cube.rotate('B', 'A');
          cube.state = 'ACTIVE';
          cube.side = 'A';
          cube.dom.removeEventListener('transitionend', cube.detect);
          return;
        }
        if (cube.rotation === 'CtoD') {
          cube.rotate('D', 'C');
          cube.state = 'ACTIVE';
          cube.side = 'C';
          cube.dom.removeEventListener('transitionend', cube.detect);
          return;
        }
        if (cube.rotation === 'EtoF') {
          cube.rotate('F', 'E');
          cube.state = 'ACTIVE';
          cube.side = 'E';
          cube.dom.removeEventListener('transitionend', cube.detect);
          return;
        }
      }
      // swipe up
      if (swipeDirection === DIRECTION.DOWN) {
        if (cube.rotation === 'AtoB') {
          cube.rotateAtoB();
          cube.state = 'ACTIVE';
          cube.side = 'B';
          cube.dom.removeEventListener('transitionend', cube.detect);
          return;
        }
        if (cube.rotation === 'CtoD') {
          cube.rotate('C', 'D');
          cube.state = 'ACTIVE';
          cube.side = 'D';
          cube.dom.removeEventListener('transitionend', cube.detect);
          return;
        }
        if (cube.rotation === 'EtoF') {
          cube.rotate('E', 'F');
          cube.state = 'ACTIVE';
          cube.side = 'F';
          cube.dom.removeEventListener('transitionend', cube.detect);
          return;
        }
      }
      // swipe right
      if (swipeDirection === DIRECTION.RIGHT) {
        if (cube.rotation === 'BtoC') {
          // cube.rotateBtoC();
          cube.rotate('B', 'C');
          cube.state = 'ACTIVE';
          cube.side = 'C';
          cube.dom.removeEventListener('transitionend', cube.detect);
          return;
        }
        if (cube.rotation === 'DtoE') {
          cube.rotate('D', 'E');
          cube.state = 'ACTIVE';
          cube.side = 'E';
          cube.dom.removeEventListener('transitionend', cube.detect);
          return;
        }
        if (cube.rotation === 'FtoX') {
          // cube.rotateFtoX();
          cube.rotate('F', 'A-1');
          // cube.rotateXtoA();
          cube.rotate('A-1', 'A');
          cube.state = 'ACTIVE';
          cube.side = 'A';
          cube.dom.removeEventListener('transitionend', cube.detect);
          return;
        }
      }
      // swipe left
      if (swipeDirection === DIRECTION.LEFT) {
        if (cube.rotation === 'BtoC') {
          cube.rotate('C', 'B');
          cube.state = 'ACTIVE';
          cube.side = 'B';
          cube.dom.removeEventListener('transitionend', cube.detect);
          return;
        }
        if (cube.rotation === 'DtoE') {
          cube.rotate('E', 'D');
          cube.state = 'ACTIVE';
          cube.side = 'D';
          cube.dom.removeEventListener('transitionend', cube.detect);
          return;
        }
        if (cube.rotation === 'FtoX') {
          cube.rotateAtoX();
          cube.rotateXtoF();
          cube.side = 'F';
          cube.state = 'ACTIVE';
          cube.dom.removeEventListener('transitionend', cube.detect);
          return;
        }
      }
    }

    if (cube.state === 'ACTIVE') {
      console.log(cube.side);
      if (cube.side === 'A') {
        cube.dom.classList.remove('transition');
        console.log(cube.dom.style.transform);
        cube.dom.style.transform = nextSide('A', 0, 0, 0);
        console.log(cube.dom.style.transform);
        var x = cube.dom.clientHeight;
        if (swipeDirection === DIRECTION.UP) {
          cube.dom.classList.remove('rotate-a');
          cube.dom.style.transform = nextSide('A', 90, 0, 0);
          cube.dom.classList.add('transition');
          cube.side = 'E';
        } else if (swipeDirection === DIRECTION.DOWN) {
          cube.dom.classList.remove('rotate-a');
          cube.dom.style.transform = nextSide('A', -90, 0, 0);
          cube.dom.classList.add('transition');
          cube.side = 'B';
        } else if (swipeDirection === DIRECTION.LEFT) {
          cube.dom.classList.remove('rotate-a');
          cube.dom.style.transform = nextSide('A', 0, -90, 0);
          cube.dom.classList.add('transition');
          cube.side = 'F';
        } else if (swipeDirection === DIRECTION.RIGHT) {
          cube.dom.classList.remove('rotate-a');
          cube.dom.style.transform = nextSide('A', 0, 90, 0);
          cube.dom.classList.add('transition');
          cube.side = 'C';
        }
      } else if (cube.side === 'B') {
        cube.dom.classList.remove('transition');
        console.log(cube.dom.style.transform);
        cube.dom.style.transform = nextSide('B', 0, 0, 0);
        console.log(cube.dom.style.transform);
        var x = cube.dom.clientHeight;
        if (swipeDirection === DIRECTION.UP) {
          cube.dom.classList.remove('rotate-b');
          cube.dom.style.transform = nextSide('B', 90, 0, 0);
          cube.dom.classList.add('transition');
          cube.side = 'A';
        } else if (swipeDirection === DIRECTION.DOWN) {
          cube.dom.classList.remove('rotate-b');
          cube.dom.style.transform = nextSide('B', -90, 0, 0);
          cube.dom.classList.add('transition');
          cube.side = 'C';
        } else if (swipeDirection === DIRECTION.RIGHT) {
          cube.dom.classList.remove('rotate-b');
          cube.dom.style.transform = nextSide('B', 0, 0, 90);
          cube.dom.classList.add('transition');
          cube.side = 'C';
        } else if (swipeDirection === DIRECTION.LEFT) {
          cube.dom.classList.remove('rotate-b');
          cube.dom.style.transform = nextSide('B', 0, 0, -90);
          cube.dom.classList.add('transition');
          cube.side = 'F';
        }
      } else if (cube.side === 'C') {
        console.log('aaaaaaaaaaa');
        cube.dom.classList.remove('transition');
        console.log(cube.dom.style.transform);
        cube.dom.style.transform = nextSide('C', 0, 0, 0);
        console.log(cube.dom.style.transform);
        var x = cube.dom.clientHeight;
        if (swipeDirection === DIRECTION.UP) {
          cube.dom.classList.remove('rotate-c');
          cube.dom.style.transform = nextSide('C', 90, 0, 0);
          cube.dom.classList.add('transition');
          cube.side = 'A';
        } else if (swipeDirection === DIRECTION.DOWN) {
          cube.dom.classList.remove('rotate-c');
          cube.dom.style.transform = nextSide('C', -90, 0, 0);
          cube.dom.classList.add('transition');
          cube.side = 'D';
        } else if (swipeDirection === DIRECTION.LEFT) {
          cube.dom.classList.remove('rotate-c');
          cube.dom.classList.add('transition');
          cube.dom.style.transform = nextSide('C', 0, 0, -90);
          cube.side = 'B';
        } else if (swipeDirection === DIRECTION.RIGHT) {
          cube.dom.classList.remove('rotate-c');
          cube.dom.classList.add('transition');
          cube.dom.style.transform = nextSide('C', 0, 0, 90);
          cube.side = 'E';
        }
      } else if (cube.side === 'D') {
        console.log('ddddd');
        cube.dom.classList.remove('transition');
        console.log(cube.dom.style.transform);
        cube.dom.style.transform = nextSide('D', 0, 0, 0);
        console.log(cube.dom.style.transform);
        var x = cube.dom.clientHeight;
        if (swipeDirection === DIRECTION.UP) {
          cube.dom.classList.remove('rotate-d');
          cube.dom.classList.add('transition');
          cube.dom.style.transform = nextSide('D', 90, 0, 0);
          cube.side = 'C';
        } else if (swipeDirection === DIRECTION.DOWN) {
          cube.dom.classList.remove('rotate-d');
          cube.dom.classList.add('transition');
          cube.dom.style.transform = nextSide('D', -90, 0, 0);
          cube.side = 'F';
        } else if (swipeDirection === DIRECTION.LEFT) {
          cube.dom.classList.remove('rotate-d');
          cube.dom.classList.add('transition');
          cube.dom.style.transform = nextSide('D', 0, 90, 0);
          cube.side = 'B';
        } else if (swipeDirection === DIRECTION.RIGHT) {
          cube.dom.classList.remove('rotate-d');
          cube.dom.classList.add('transition');
          cube.dom.style.transform = nextSide('D', 0, -90, 0);
          cube.side = 'E';
        }
      } else if (cube.side === 'E') {
        console.log('eeee');
        cube.dom.classList.remove('transition');
        console.log(cube.dom.style.transform);
        cube.dom.style.transform = nextSide('E', 0, 0, 0);
        console.log(cube.dom.style.transform);
        var x = cube.dom.clientHeight;
        if (swipeDirection === DIRECTION.UP) {
          cube.dom.classList.remove('rotate-e');
          cube.dom.classList.add('transition');
          cube.dom.style.transform = nextSide('E', 90, 0, 0);
          cube.side = 'C';
        } else if (swipeDirection === DIRECTION.DOWN) {
          cube.dom.classList.remove('rotate-e');
          cube.dom.classList.add('transition');
          cube.dom.style.transform = nextSide('E', -90, 0, 0);
          cube.side = 'F';
        } else if (swipeDirection === DIRECTION.LEFT) {
          cube.dom.classList.remove('rotate-e');
          cube.dom.classList.add('transition');
          cube.dom.style.transform = nextSide('E', 0, 90, 0);
          cube.side = 'D';
        } else if (swipeDirection === DIRECTION.RIGHT) {
          cube.dom.classList.remove('rotate-e');
          cube.dom.classList.add('transition');
          cube.dom.style.transform = nextSide('E', 0, -90, 0);
          cube.side = 'A';
        }
      } else if (cube.side === 'F') {
        cube.dom.classList.remove('transition');
        console.log(cube.dom.style.transform);
        cube.dom.style.transform = nextSide('F', 0, 0, 0);
        console.log(cube.dom.style.transform);
        var x = cube.dom.clientHeight;
        if (swipeDirection === DIRECTION.UP) {
          cube.dom.classList.remove('rotate-f');
          cube.dom.classList.add('transition');
          cube.dom.style.transform = nextSide('F', 90, 0, 0);
          cube.side = 'E';
          console.log(cube.dom.style.transform);
        } else if (swipeDirection === DIRECTION.DOWN) {
          cube.dom.classList.remove('rotate-f');
          cube.dom.classList.add('transition');
          cube.dom.style.transform = nextSide('F', -90, 0, 0);
          cube.side = 'B';
          console.log(cube.dom.style.transform);
        } else if (swipeDirection === DIRECTION.RIGHT) {
          cube.dom.classList.remove('rotate-f');
          cube.dom.classList.add('transition');
          if (
            cube.dom.style.transform ===
            'rotateX(0deg) rotateY(-90deg) rotateZ(0deg)'
          ) {
            cube.dom.style.transform = nextSide('F', 180, 90, -180);
            cube.side = 'A';
          } else if (
            cube.dom.style.transform ===
            'rotateX(-90deg) rotateY(0deg) rotateZ(-90deg)'
          ) {
            cube.dom.style.transform = nextSide('F', 90, 90, -180);
            cube.side = 'B';
          } else {
            cube.dom.style.transform = nextSide('F', 0, -90, 0);
            cube.side = 'A';
          }
        } else if (swipeDirection === DIRECTION.LEFT) {
          cube.dom.classList.remove('rotate-f');
          cube.dom.classList.add('transition');

          if (
            cube.dom.style.transform ===
            'rotateX(-90deg) rotateY(0deg) rotateZ(-90deg)'
          ) {
            cube.dom.style.transform = nextSide('F', 90, 90, -360);
            cube.side = 'E';
          } else {
            cube.dom.style.transform = nextSide('F', 0, 90, 0);
            cube.side = 'D';
          }
        }
      }

      console.log(`2:${cube.side}`);
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
