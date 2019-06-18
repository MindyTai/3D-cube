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

var STATE = {
  INIT: 'INIT',
  ACTIVE: 'ACTIVE'
};

function Cube(dom) {
  this.stateIdx = 0;
  this.side = 'A';
  this.lastSide = undefined;
  this.lastRotation = undefined;
  this.dom = dom;
  this.state = STATE.INIT;
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

  // animation
  this.topLeftSteps = this.topLeftSteps.bind(this);
  // this.vertHoriLoop = this.vertHoriLoop.bind(this);
  this.dom.addEventListener('transitionend', this.topLeftSteps);
  this.dom.addEventListener('transitionend', this.vertHoriLoop);

  // choose event
  this.startEvent = this.isTouchEventSupported ? 'touchstart' : 'mousedown';
  this.moveEvent = this.isTouchEventSupported ? 'touchmove' : 'mousemove';
  this.endEvent = this.isTouchEventSupported ? 'touchend' : 'mouseup';

  // mouseup, touchend event
  this.topLeftStepsEndHandler = this.topLeftStepsEndHandler.bind(this);
  this.vertHoriLoopEndHandler = this.vertHoriLoopEndHandler.bind(this);
  if (this.endEvent === 'mouseup') {
    document.addEventListener('mouseup', this.topLeftStepsEndHandler);
    // document.addEventListener('mouseup', this.vertHoriLoopEndHandler);
  } else {
    this.dom.addEventListener('touchend', this.topLeftStepsEndHandler);
    // this.dom.addEventListener('touchend', this.vertHoriLoopEndHandler);
  }

  // mousedown, touchstart event
  this.startHandler = this.startHandler.bind(this);
  this.dom.addEventListener(this.startEvent, this.startHandler);

  // mousemove, touchmove event
  this.moveHandler = this.moveHandler.bind(this);
  this.dom.addEventListener(this.moveEvent, this.moveHandler);

  // mouseenter, mouseleave event
  this.mouseLeave = this.mouseLeave.bind(this);
  this.mouseEnter = this.mouseEnter.bind(this);
  if (!this.isTouchEventSupported) {
    this.dom.addEventListener('mouseleave', this.mouseLeave);
    this.dom.addEventListener('mouseenter', this.mouseEnter);
  }

  // 第二次互動後
  this.activeStateEndHandler = this.activeStateEndHandler.bind(this);
}

Cube.prototype = {
  getDegree(index, rotation) {
    console.log(index + 1, rotation);
    console.log(States[index].action[rotation]);
    var x = States[index].action[rotation].x;
    var y = States[index].action[rotation].y;
    var z = States[index].action[rotation].z;
    return 'rotate3d(' + x + ',' + y + ',' + z + ',90deg)';
  },

  findIndex() {
    for (let i = 0; i < 24; i += 1) {
      if (
        this.side === States[i].side.front &&
        this.lastSide === States[i].side[this.lastRotation]
      ) {
        this.stateIdx = i;
        console.log(this.stateIdx + 1);
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
  },

  topLeftSteps() {
    if (this.side === 'A') {
      this.rotate('down');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      this.turn += 1;
    } else if (this.side === 'B') {
      this.rotate('right');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      this.turn += 1;
    } else if (this.side === 'F') {
      this.rotate('down');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      this.turn += 1;
    } else if (this.side === 'C') {
      this.rotate('right');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      this.turn += 1;
    } else if (this.side === 'D') {
      this.rotate('down');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      this.turn += 1;
    } else if (this.side === 'E') {
      this.rotate('right');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      this.turn += 1;
    }
  },

  vertHoriLoop() {
    if (this.side === 'A' && this.flag === 0) {
      this.rotate('down');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      this.turn += 1;
    } else if (this.side === 'B' && this.flag === 0) {
      this.rotate('down');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      this.turn += 1;
    } else if (this.side === 'C' && this.flag === 0) {
      this.rotate('down');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      this.turn += 1;
    } else if (this.side === 'D' && this.flag === 0) {
      this.rotate('down');
      this.flag = 1;
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      this.turn += 1;
    } else if (this.side === 'A' && this.flag === 1) {
      this.rotate('left');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      this.turn += 1;
    } else if (this.side === 'E' && this.flag === 1) {
      this.rotate('left');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      this.turn += 1;
    } else if (this.side === 'C' && this.flag === 1) {
      this.rotate('left');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      this.turn += 1;
    } else if (this.side === 'F' && this.flag === 1) {
      this.rotate('left');
      this.flag = 0;
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      this.turn += 1;
    }
  },

  mouseLeave() {
    if (this.mouseFlag === 0) {
      this.dom.classList.add('transition');
      this.dom.style.transform = this.nextVal;
      // 因為transitionend,所以動畫繼續
    }
  },

  mouseEnter() {
    if (this.mouseFlag === 0) {
      this.nextVal = this.dom.style.transform;
      var transformValue = window
        .getComputedStyle(this.dom)
        .getPropertyValue('transform');

      this.dom.style.transform = transformValue;
      this.dom.classList.remove('transition');
    }
  },

  startHandler(e) {
    var touchobj = e.changedTouches ? e.changedTouches[0] : undefined;
    var endX = touchobj ? touchobj.pageX : e.clientX;
    var endY = touchobj ? touchobj.pageY : e.clientY;

    this.startX = endX;
    this.startY = endY;
    if (!touchobj) {
      this.dom.removeEventListener('mouseenter', this.mouseEnter);
      this.dom.removeEventListener('mouseleave', this.mouseLeave);
      var transformValue = window
        .getComputedStyle(this.dom)
        .getPropertyValue('transform');
      this.dom.style.transform = transformValue;
    }
  },

  moveHandler(e) {
    e.stopPropagation();
    if (e.cancelable) {
      e.preventDefault();
    } else return false;
  },

  topLeftStepsEndHandler(e) {
    var touchobj = e.changedTouches ? e.changedTouches[0] : undefined;
    var endX = touchobj ? touchobj.pageX : e.clientX;
    var endY = touchobj ? touchobj.pageY : e.clientY;
    if (
      this.startX != null &&
      this.startX !== endX &&
      this.startY != null &&
      this.startY !== endY
    ) {
      if (
        Math.abs(endY - this.startY) > Math.abs(endX - this.startX) &&
        endY > this.startY
      ) {
        this.swipeDirection = DIRECTION.DOWN;
      } else if (
        Math.abs(endY - this.startY) > Math.abs(endX - this.startX) &&
        endY < this.startY
      ) {
        this.swipeDirection = DIRECTION.UP;
      } else if (
        Math.abs(endY - this.startY) < Math.abs(endX - this.startX) &&
        endX > this.startX
      ) {
        this.swipeDirection = DIRECTION.RIGHT;
      } else if (
        Math.abs(endY - this.startY) < Math.abs(endX - this.startX) &&
        endX < this.startX
      ) {
        this.swipeDirection = DIRECTION.LEFT;
      }
    }
    // INIT
    if (this.lastRotation === 'down') {
      if (this.swipeDirection === DIRECTION.UP) {
        this.state = STATE.ACTIVE;
        this.dom.removeEventListener('transitionend', this.topLeftSteps);
        if (touchobj) {
          this.rotate('up');
        } else {
          this.dom.style.transform = this.transformValArray[this.turn - 1];
          this.dom.classList.add('transition');
        }
      } else if (
        [DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(
          this.swipeDirection
        )
      ) {
        this.state = STATE.ACTIVE;
        this.dom.removeEventListener('transitionend', this.topLeftSteps); // STOP ANIMATION
        if (!touchobj) {
          this.dom.style.transform = this.nextVal;
          this.dom.classList.add('transition');
        }
      }
    } else if (this.lastRotation === 'right') {
      if (this.swipeDirection === DIRECTION.LEFT) {
        this.state = STATE.ACTIVE;
        this.dom.removeEventListener('transitionend', this.topLeftSteps);
        if (touchobj) {
          this.rotate('left');
        } else {
          this.dom.style.transform = this.transformValArray[this.turn - 2];
          this.dom.classList.add('transition');
        }
      } else if (
        [DIRECTION.RIGHT, DIRECTION.DOWN, DIRECTION.UP].includes(
          this.swipeDirection
        )
      ) {
        this.state = STATE.ACTIVE;
        this.dom.removeEventListener('transitionend', this.topLeftSteps); // STOP ANIMATION
        if (!touchobj) {
          this.dom.style.transform = this.nextVal;
          this.dom.classList.add('transition');
        }
      }
    }

    if (this.state === STATE.ACTIVE) {
      this.dom.removeEventListener('transitionend', this.topLeftSteps);
      this.dom.removeEventListener(this.endEvent, this.topLeftStepsEndHandler);
      this.dom.addEventListener(this.endEvent, this.activeStateEndHandler);
    }
  },

  vertHoriLoopEndHandler(e) {
    var touchobj = e.changedTouches ? e.changedTouches[0] : undefined;
    var endX = touchobj ? touchobj.pageX : e.clientX;
    var endY = touchobj ? touchobj.pageY : e.clientY;

    if (
      this.startX != null &&
      this.startX !== endX &&
      this.startY != null &&
      this.startY !== endY
    ) {
      // swipe down
      if (
        Math.abs(endY - this.startY) > Math.abs(endX - this.startX) &&
        endY > this.startY
      ) {
        this.swipeDirection = DIRECTION.DOWN;
      } else if (
        Math.abs(endY - this.startY) > Math.abs(endX - this.startX) &&
        endY < this.startY
      ) {
        this.swipeDirection = DIRECTION.UP;
      } else if (
        Math.abs(endY - this.startY) < Math.abs(endX - this.startX) &&
        endX > this.startX
      ) {
        this.swipeDirection = DIRECTION.RIGHT;
      } else if (
        Math.abs(endY - this.startY) < Math.abs(endX - this.startX) &&
        endX < this.startX
      ) {
        this.swipeDirection = DIRECTION.LEFT;
      }
    }
    // INIT
    if (this.lastRotation === 'down') {
      if (this.swipeDirection === DIRECTION.UP) {
        this.state = STATE.ACTIVE;
        this.dom.removeEventListener('transitionend', this.vertHoriLoop);
        if (touchobj) {
          this.rotate('up');
        } else {
          this.dom.style.transform = this.transformValArray[this.turn - 1];
          this.dom.classList.add('transition');
        }
      } else if (
        [DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(
          this.swipeDirection
        )
      ) {
        this.state = STATE.ACTIVE;
        this.dom.removeEventListener('transitionend', this.vertHoriLoop); // STOP ANIMATION
        if (!touchobj) {
          this.dom.style.transform = this.nextVal;
          this.dom.classList.add('transition');
        }
      }
    } else if (this.lastRotation === 'left') {
      if (this.swipeDirection === DIRECTION.RIGHT) {
        this.state = STATE.ACTIVE;
        this.dom.removeEventListener('transitionend', this.vertHoriLoop);
        if (touchobj) {
          this.rotate('right');
        } else {
          this.dom.style.transform = this.transformValArray[this.turn - 2];
          this.dom.classList.add('transition');
        }
      } else if (
        [DIRECTION.LEFT, DIRECTION.DOWN, DIRECTION.UP].includes(
          this.swipeDirection
        )
      ) {
        this.state = STATE.ACTIVE;
        this.dom.removeEventListener('transitionend', this.vertHoriLoop); // STOP ANIMATION
        if (!touchobj) {
          this.dom.style.transform = this.nextVal;
          this.dom.classList.add('transition');
        }
      }
    }
    if (this.state === STATE.ACTIVE) {
      this.dom.removeEventListener('transitionend', this.vertHoriLoop);
      this.dom.removeEventListener(this.endEvent, this.vertHoriLoopEndHandler);
      this.dom.addEventListener(this.endEvent, this.activeStateEndHandler);
    }
  },

  activeStateEndHandler(e) {
    var touchobj = e.changedTouches ? e.changedTouches[0] : undefined;
    var endX = touchobj ? touchobj.pageX : e.clientX;
    var endY = touchobj ? touchobj.pageY : e.clientY;
    if (
      this.startX != null &&
      this.startX !== endX &&
      this.startY != null &&
      this.startY !== endY
    ) {
      // swipe down
      if (
        Math.abs(endY - this.startY) > Math.abs(endX - this.startX) &&
        endY > this.startY
      ) {
        this.swipeDirection = DIRECTION.DOWN;
        this.rotate(DIRECTION.DOWN);
      } else if (
        Math.abs(endY - this.startY) > Math.abs(endX - this.startX) &&
        endY < this.startY
      ) {
        this.swipeDirection = DIRECTION.UP;
        this.rotate(DIRECTION.UP);
      } else if (
        Math.abs(endY - this.startY) < Math.abs(endX - this.startX) &&
        endX > this.startX
      ) {
        this.swipeDirection = DIRECTION.RIGHT;
        this.rotate(DIRECTION.RIGHT);
      } else if (
        Math.abs(endY - this.startY) < Math.abs(endX - this.startX) &&
        endX < this.startX
      ) {
        this.swipeDirection = DIRECTION.LEFT;
        this.rotate(DIRECTION.LEFT);
      }
    }
  }
};

var cubeDom = document.getElementsByClassName('space')[0];
var cube = new Cube(cubeDom);

cube.topLeftSteps();
// cube.vertHoriLoop();
