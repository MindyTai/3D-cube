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

var STATE = {
  INIT: 'INIT',
  ACTIVE: 'ACTIVE'
};

var startX;
var startY;
var swipeDirection;

function Cube(dom) {
  this.dom = dom;
  this.side = SIDE.A;
  this.state = STATE.INIT;
  this.detect = this.detect.bind(this);
  this.dom.addEventListener('transitionend', this.detect);
}

Cube.prototype = {
  detect() {
    if (this.dom.classList.contains('rotate-b')) {
      this.rotateBtoC(this.dom);
    } else if (this.dom.classList.contains('rotate-c')) {
      this.rotateCtoD(this.dom);
    } else if (this.dom.classList.contains('rotate-d')) {
      this.rotateDtoE(this.dom);
    } else if (this.dom.classList.contains('rotate-e')) {
      this.rotateEtoF(this.dom);
    } else if (this.dom.classList.contains('rotate-f')) {
      this.rotateFtoX(this.dom);
    } else if (this.dom.classList.contains('rotate-a-1')) {
      this.rotateXtoA(this.dom);
      this.rotateAtoB(this.dom);
    }
  },
  rotate(from, to, doTrans) {},
  rotateAtoB() {
    var x = this.dom.clientHeight;
    this.dom.classList.add('transition');
    this.dom.classList.remove('rotate-a');
    this.dom.classList.add('rotate-b');
    this.side = 'A';
  },
  rotateBtoA() {
    var x = this.dom.clientHeight;
    this.dom.classList.add('transition');
    this.dom.classList.remove('rotate-b');
    this.dom.classList.add('rotate-a');
    this.side = 'B';
  },
  rotateBtoC() {
    var x = this.dom.clientHeight;
    this.dom.classList.add('transition');
    this.dom.classList.remove('rotate-b');
    this.dom.classList.add('rotate-c');
    this.side = 'B';
  },
  rotateCtoB() {
    var x = this.dom.clientHeight;
    this.dom.classList.add('transition');
    this.dom.classList.remove('rotate-c');
    this.dom.classList.add('rotate-b');
    this.side = 'C';
  },
  rotateCtoD() {
    var x = this.dom.clientHeight;
    this.dom.classList.add('transition');
    this.dom.classList.remove('rotate-c');
    this.dom.classList.add('rotate-d');
    this.side = 'C';
  },
  rotateDtoC() {
    var x = this.dom.clientHeight;
    this.dom.classList.add('transition');
    this.dom.classList.remove('rotate-d');
    this.dom.classList.add('rotate-c');
    this.side = 'D';
  },
  rotateDtoE() {
    var x = this.dom.clientHeight;
    this.dom.classList.add('transition');
    this.dom.classList.remove('rotate-d');
    this.dom.classList.add('rotate-e');
    this.side = 'D';
  },
  rotateEtoD() {
    var x = this.dom.clientHeight;
    this.dom.classList.add('transition');
    this.dom.classList.remove('rotate-e');
    this.dom.classList.add('rotate-d');
    this.side = 'E';
  },
  rotateEtoF() {
    var x = this.dom.clientHeight;
    this.dom.classList.add('transition');
    this.dom.classList.remove('rotate-e');
    this.dom.classList.add('rotate-f');
    this.side = 'E';
  },
  rotateFtoE() {
    var x = this.dom.clientHeight;
    this.dom.classList.add('transition');
    this.dom.classList.remove('rotate-f');
    this.dom.classList.add('rotate-e');
    this.side = 'F';
  },
  rotateFtoX() {
    var x = this.dom.clientHeight;
    this.dom.classList.add('transition');
    this.dom.classList.remove('rotate-f');
    this.dom.classList.add('rotate-a-1');
    this.side = 'F';
  },
  rotateXtoF() {
    var x = this.dom.clientHeight;
    this.dom.classList.add('transition');
    this.dom.classList.remove('rotate-a-1');
    this.dom.classList.add('rotate-f');
    this.side = 'X';
  },
  rotateXtoA() {
    var x = this.dom.clientHeight;
    this.dom.classList.remove('transition');
    this.dom.classList.remove('rotate-a-1');
    this.dom.classList.add('rotate-a');
    this.side = 'X';
  },
  rotateAtoX() {
    var x = this.dom.clientHeight;
    this.dom.classList.add('transition');
    this.dom.classList.remove('rotate-reverse-a');
    this.dom.classList.add('rotate-reverse-a-1');
    this.side = 'A';
  }
};

var cubeDom = document.getElementsByClassName('space')[0];
var cube = new Cube(cubeDom);
cube.rotateAtoB();

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
    if (swipeDirection === DIRECTION.DOWN) {
      if (cube.side === 'A') {
        cube.rotateBtoA();
        cube.dom.removeEventListener('transitionend', cube.detect);
      } else if (cube.side === 'C') {
        cube.rotateDtoC();
        cube.dom.removeEventListener('transitionend', cube.detect);
      } else if (cube.side === 'E') {
        cube.rotateFtoE();
        cube.dom.removeEventListener('transitionend', cube.detect);
      }
    }
    // swipe up
    if (swipeDirection === DIRECTION.UP) {
      if (cube.side === 'A') {
        cube.rotateAtoB();
        cube.dom.removeEventListener('transitionend', cube.detect);
      } else if (cube.side === 'C') {
        cube.rotateCtoD();
        cube.dom.removeEventListener('transitionend', cube.detect);
      } else if (cube.side === 'E') {
        cube.rotateEtoF();
        cube.dom.removeEventListener('transitionend', cube.detect);
      }
    }
    // swipe right
    if (swipeDirection === DIRECTION.LEFT) {
      if (cube.side === 'B') {
        cube.rotateBtoC();
        cube.dom.removeEventListener('transitionend', cube.detect);
      } else if (cube.side === 'D') {
        cube.rotateDtoE();
        cube.dom.removeEventListener('transitionend', cube.detect);
      } else if (cube.side === 'F') {
        cube.rotateFtoX();
        cube.dom.removeEventListener('transitionend', cube.detect);
      }
    }
    // // side A
    // if (cube.side === 'A') {
    //   if (swipeDirection === DIRECTION.DOWN) {
    //     cube.rotateBtoA();
    //     cube.dom.removeEventListener('transitionend', cube.detect);
    //   } else {
    //     cube.rotateAtoB();
    //     cube.dom.removeEventListener('transitionend', cube.detect);
    //   }
    // }

    // // side B
    // if (cube.side === 'B') {
    //   if (swipeDirection === DIRECTION.LEFT) {
    //     cube.rotateCtoB();
    //     cube.dom.removeEventListener('transitionend', cube.detect);
    //   } else {
    //     cube.rotateBtoC();
    //     cube.dom.removeEventListener('transitionend', cube.detect);
    //   }
    // }

    // // side C
    // if (cube.side === 'C') {
    //   cube.rotateDtoC();
    //   cube.dom.removeEventListener('transitionend', cube.detect);
    // } else {
    //   cube.rotateCtoD();
    //   cube.dom.removeEventListener('transitionend', cube.detect);
    // }

    // // side D
    // if (cube.side === 'D') {
    //   cube.rotateEtoD();
    //   cube.dom.removeEventListener('transitionend', cube.detect);
    // } else {
    //   cube.rotateDtoE();
    //   cube.dom.removeEventListener('transitionend', cube.detect);
    // }

    // // side E
    // if (cube.side === 'E') {
    //   cube.rotateFtoE();
    //   cube.dom.removeEventListener('transitionend', cube.detect);
    // } else {
    //   cube.rotateEtoF();
    //   cube.dom.removeEventListener('transitionend', cube.detect);
    // }

    // // side F
    // if (cube.side === 'F') {
    //   cube.rotateXtoF();
    //   cube.dom.removeEventListener('transitionend', cube.detect);
    // } else {
    //   cube.rotateFtoX();
    //   cube.dom.removeEventListener('transitionend', cube.detect);
    // }

    // swipe left
    if (swipeDirection === DIRECTION.RIGHT) {
      if (cube.side === 'B') {
        cube.rotateCtoB();
        cube.dom.removeEventListener('transitionend', cube.detect);
      } else if (cube.side === 'D') {
        cube.rotateEtoD();
        cube.dom.removeEventListener('transitionend', cube.detect);
      } else if (cube.side === 'F') {
        cube.rotateXtoF();
        cube.dom.removeEventListener('transitionend', cube.detect);
      }
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
