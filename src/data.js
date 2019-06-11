const States = [
  {
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
      left: { x: 0, y: -1, z: 0 },
      right: { x: 0, y: 1, z: 0 },
      up: { x: 1, y: 0, z: 0 },
      down: { x: -1, y: 0, z: 0 }
    }
  },
  {
    side: {
      front: 'A',
      left: 'B',
      right: 'D',
      back: 'C',
      up: 'E',
      down: 'F'
    },
    action: {
      left: { x: 0, y: 1, z: 0 },
      right: { x: 0, y: -1, z: 0 },
      up: { x: 1, y: 0, z: 0 },
      down: { x: -1, y: 0, z: 0 }
    }
  },
  {
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
      up: { x: 0, y: -1, z: 0 },
      down: { x: 0, y: 1, z: 0 }
    }
  },
  {
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
      up: { x: 0, y: 1, z: 0 },
      down: { x: 0, y: -1, z: 0 }
    }
  },
  {
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
      up: { x: 0, y: -1, z: 0 },
      down: { x: 0, y: 1, z: 0 }
    }
  },
  {
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
      up: { x: 0, y: 1, z: 0 },
      down: { x: 0, y: -1, z: 0 }
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
      left: { x: 0, y: -1, z: 0 },
      right: { x: 0, y: 1, z: 0 },
      up: { x: 0, y: 0, z: 1 },
      down: { x: 0, y: 0, z: -1 }
    }
  },
  {
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
      up: { x: 0, y: -1, z: 0 },
      down: { x: 0, y: 1, z: 0 }
    }
  },
  {
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

let startX;
let startY;
let swipeDirection;

const DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up',
  DOWN: 'down'
};

const STATE = {
  INIT: 'INIT',
  ACTIVE: 'ACTIVE'
};

class Cube {
  constructor(dom) {
    this.stateIdx = 0;
    this.side = 'A';
    this.lastSide = undefined;
    this.lastRotation = undefined;
    this.dom = dom;
    this.state = STATE.INIT;
    // this.vertHoriLoop = this.vertHoriLoop.bind(this);
    this.topLeftSteps = this.topLeftSteps.bind(this);
    this.dom.style.transform = '';
    // this.dom.addEventListener('transitionend', this.vertHoriLoop);
    this.dom.addEventListener('transitionend', this.topLeftSteps);
    this.flag = 0;
  }

  getDegree(index, rotation) {
    const { x, y, z } = States[index].action[rotation];
    return `rotate3d(${x},${y},${z},90deg)`;
  }

  findIndex() {
    // console.log(this.lastSide, this.side);
    for (let i = 0; i < 24; i += 1) {
      if (
        this.side === States[i].side.front &&
        this.lastSide === States[i].side[this.lastRotation]
      ) {
        this.stateIdx = i;
        // console.log(this.stateIdx);
        return;
      }
    }
    console.log('gg');
  }

  forceRender() {
    return this.dom.clientHeight;
  }

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
  }

  rotate(direction) {
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

  topLeftSteps() {
    console.log(this.side);
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
    } else if (this.side === 'E') {
      this.rotate('right');
    }
  }

  vertHoriLoop() {
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
}

const cubeDom = document.getElementsByClassName('space')[0];
const cube = new Cube(cubeDom);

cube.vertHoriLoop();
// cube.topLeftSteps();

// mouse event
let mouseFlag = 0;
let nextVal;

// mouse enter

// mouse leave
const mouseLeave = () => {
  if (mouseFlag === 0) {
    cubeDom.classList.add('transition');
    cubeDom.style.transform = nextVal;
    // 因為transitionend,所以動畫繼續
  }
};
const mouseEnter = () => {
  if (mouseFlag === 0) {
    nextVal = cubeDom.style.transform;
    console.log(nextVal);
    const transformValue = window
      .getComputedStyle(cubeDom)
      .getPropertyValue('transform');
    cubeDom.style.transform = transformValue;
    cubeDom.classList.remove('transition');
  }
};
cubeDom.addEventListener('mouseleave', mouseLeave);
cubeDom.addEventListener('mouseenter', mouseEnter);
function _activeStateMouseMoveEndHandler(e) {
  if (
    startX != null &&
    startX !== e.movementX &&
    startY != null &&
    startY !== e.movementY
  ) {
    if (
      Math.abs(e.movementY - startY) > Math.abs(e.movementX - startX) &&
      e.movementY > startY
    ) {
      swipeDirection = DIRECTION.DOWN;
      cube.rotate(DIRECTION.DOWN);
    } else if (
      Math.abs(e.movementY - startY) > Math.abs(e.movementX - startX) &&
      e.movementY < startY
    ) {
      swipeDirection = DIRECTION.UP;
      cube.rotate(DIRECTION.UP);
    } else if (
      Math.abs(e.movementY - startY) < Math.abs(e.movementX - startX) &&
      e.movementX > startX
    ) {
      swipeDirection = DIRECTION.RIGHT;
      cube.rotate(DIRECTION.RIGHT);
    } else if (
      Math.abs(e.movementY - startY) < Math.abs(e.movementX - startX) &&
      e.movementX < startX
    ) {
      swipeDirection = DIRECTION.LEFT;
      cube.rotate(DIRECTION.LEFT);
    }
  }
}
function _topLeftStepsMouseEndHandler(e) {}

// mouse move
cubeDom.addEventListener('mousedown', (e) => {
  cubeDom.removeEventListener('mouseenter', mouseEnter);
  cubeDom.removeEventListener('mouseleave', mouseLeave);
  startX = e.clientX;
  startY = e.clientY;
});

cubeDom.addEventListener('mouseup', (e) => {
  console.log(startX);
  if (
    startX != null &&
    startX !== e.clientX &&
    startY != null &&
    startY !== e.clientY
  ) {
    if (
      Math.abs(e.clientY - startY) > Math.abs(e.clientX - startX) &&
      e.clientY > startY
    ) {
      swipeDirection = DIRECTION.DOWN;
      // cube.rotate(DIRECTION.DOWN);
    } else if (
      Math.abs(e.clientY - startY) > Math.abs(e.clientX - startX) &&
      e.clientY < startY
    ) {
      swipeDirection = DIRECTION.UP;
      // cube.rotate(DIRECTION.UP);
    } else if (
      Math.abs(e.clientY - startY) < Math.abs(e.clientX - startX) &&
      e.clientX > startX
    ) {
      swipeDirection = DIRECTION.RIGHT;
      // cube.rotate(DIRECTION.RIGHT);
    } else if (
      Math.abs(e.clientY - startY) < Math.abs(e.clientX - startX) &&
      e.clientX < startX
    ) {
      swipeDirection = DIRECTION.LEFT;
      // cube.rotate(DIRECTION.LEFT);
    }
    console.log(swipeDirection);
  }

  if (cube.lastRotation === 'down') {
    if (swipeDirection === DIRECTION.UP) {
      mouseFlag = 1;
      cube.state = 'ACTIVE';
      cube.rotate('up');
      cube.dom.removeEventListener('transitionend', cube.topLeftSteps);
    } else if (
      [DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(swipeDirection)
    ) {
      mouseFlag = 1;
      cube.state = 'ACTIVE';
      cube.dom.removeEventListener('transitionend', cube.topLeftSteps); // STOP ANIMATION
    }
  } else if (cube.lastRotation === 'right') {
    if (swipeDirection === DIRECTION.LEFT) {
      mouseFlag = 1;
      cube.state = 'ACTIVE';
      cube.rotate('left');
      cube.dom.removeEventListener('transitionend', cube.topLeftSteps);
    } else if (
      [DIRECTION.RIGHT, DIRECTION.DOWN, DIRECTION.UP].includes(swipeDirection)
    ) {
      mouseFlag = 1;
      cube.state = 'ACTIVE';
      cube.dom.removeEventListener('transitionend', cube.topLeftSteps); // STOP ANIMATION
    }
  }

  if (cube.state === 'ACTIVE') {
    cubeDom.removeEventListener('transitionend', cube.topLeftSteps);
    cubeDom.addEventListener('mouseup', _activeStateMouseMoveEndHandler);
  }
});

cubeDom.addEventListener('mousemove', (e) => {
  e.stopPropagation();
  if (e.cancelable) {
    e.preventDefault();
  } else return false;
});

// touch
function _touchStartHandler(e) {
  const touchobj = e.changedTouches[0];
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
  const touchobj = e.changedTouches[0];
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
      cube.rotate(DIRECTION.DOWN);
    } else if (
      Math.abs(touchobj.pageY - startY) > Math.abs(touchobj.pageX - startX) &&
      touchobj.pageY < startY
    ) {
      swipeDirection = DIRECTION.UP;
      cube.rotate(DIRECTION.UP);
    } else if (
      Math.abs(touchobj.pageY - startY) < Math.abs(touchobj.pageX - startX) &&
      touchobj.pageX > startX
    ) {
      swipeDirection = DIRECTION.RIGHT;
      cube.rotate(DIRECTION.RIGHT);
    } else if (
      Math.abs(touchobj.pageY - startY) < Math.abs(touchobj.pageX - startX) &&
      touchobj.pageX < startX
    ) {
      swipeDirection = DIRECTION.LEFT;
      cube.rotate(DIRECTION.LEFT);
    }
  }
}

function _topLeftStepsTouchEndHandler(e) {
  const touchobj = e.changedTouches[0];
  if (
    startX != null &&
    startX !== touchobj.pageX &&
    startY != null &&
    startY !== touchobj.pageY
  ) {
    if (
      Math.abs(touchobj.pageY - startY) > Math.abs(touchobj.pageX - startX) &&
      touchobj.pageY > startY
    ) {
      swipeDirection = DIRECTION.DOWN;
      // cube.rotate(DIRECTION.DOWN);
    } else if (
      Math.abs(touchobj.pageY - startY) > Math.abs(touchobj.pageX - startX) &&
      touchobj.pageY < startY
    ) {
      swipeDirection = DIRECTION.UP;
      // cube.rotate(DIRECTION.UP);
    } else if (
      Math.abs(touchobj.pageY - startY) < Math.abs(touchobj.pageX - startX) &&
      touchobj.pageX > startX
    ) {
      swipeDirection = DIRECTION.RIGHT;
      // cube.rotate(DIRECTION.RIGHT);
    } else if (
      Math.abs(touchobj.pageY - startY) < Math.abs(touchobj.pageX - startX) &&
      touchobj.pageX < startX
    ) {
      swipeDirection = DIRECTION.LEFT;
      // cube.rotate(DIRECTION.LEFT);
    }
  }
  // INIT
  if (cube.lastRotation === 'down') {
    if (swipeDirection === DIRECTION.UP) {
      cube.state = 'ACTIVE';
      cube.rotate('up');
      cube.dom.removeEventListener('transitionend', cube.topLeftSteps);
    } else if (
      [DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(swipeDirection)
    ) {
      cube.state = 'ACTIVE';
      cube.dom.removeEventListener('transitionend', cube.topLeftSteps); // STOP ANIMATION
    }
  } else if (cube.lastRotation === 'right') {
    if (swipeDirection === DIRECTION.LEFT) {
      cube.state = 'ACTIVE';
      cube.rotate('left');
      cube.dom.removeEventListener('transitionend', cube.topLeftSteps);
    } else if (
      [DIRECTION.RIGHT, DIRECTION.DOWN, DIRECTION.UP].includes(swipeDirection)
    ) {
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
  const touchobj = e.changedTouches[0];
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
  // INIT
  if (cube.lastRotation === 'down') {
    if (swipeDirection === DIRECTION.UP) {
      cube.state = 'ACTIVE';
      cube.rotate('up');
      cube.dom.removeEventListener('transitionend', cube.vertHoriLoop);
    } else if (
      [DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(swipeDirection)
    ) {
      cube.state = 'ACTIVE';
      cube.dom.removeEventListener('transitionend', cube.vertHoriLoop); // STOP ANIMATION
    }
  } else if (cube.lastRotation === 'left') {
    if (swipeDirection === DIRECTION.RIGHT) {
      cube.state = 'ACTIVE';
      cube.rotate('right');
      cube.dom.removeEventListener('transitionend', cube.vertHoriLoop);
    } else if (
      [DIRECTION.LEFT, DIRECTION.DOWN, DIRECTION.UP].includes(swipeDirection)
    ) {
      cube.state = 'ACTIVE';
      cube.dom.removeEventListener('transitionend', cube.vertHoriLoop); // STOP ANIMATION
    }
  }
  if (cube.state === 'ACTIVE') {
    // cube.dom.removeEventListener('transitionend', cube.topLeftSteps);
    cubeDom.removeEventListener('transitionend', cube.vertHoriLoop);
    cubeDom.addEventListener('touchend', _activeStateTouchEndHandler);
  }
}

function _init() {
  cubeDom.addEventListener('touchstart', _touchStartHandler);
  cubeDom.addEventListener('touchmove', _touchMoveHandler);

  if (cube.state === 'INIT') {
    cubeDom.addEventListener('touchend', _topLeftStepsTouchEndHandler);
    // cubeDom.addEventListener('touchend', _vertHoriLoopTouchEndHandler);
  }
}

_init();
