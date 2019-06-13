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
    this.downFuc = this.isTouchEventSupported
      ? this.touchStartFunc
      : this.mouseDown;
    this.moveFunc = this.isTouchEventSupported
      ? this.touchMoveFunc
      : this.mouseMoveFuc;
    this.upFunc = this.isTouchEventSupported
      ? this.touchEndFunc
      : this.mouseUpFuc;

    // this.dom.addEventListener('transitionend', this.vertHoriLoop);
    this.dom.addEventListener('transitionend', this.topLeftSteps);

    this.dom.addEventListener(this.downEvent, this.downFuc);
    this.dom.addEventListener(this.moveEvent, this.moveFunc);
    this.dom.addEventListener('touchend', this.topLeftStepsTouchEndHandler);

    document.addEventListener('mouseup', this.topLeftStepsMouseUpHandler);
    this.dom.addEventListener('mouseleave', this.mouseLeave);
    this.dom.addEventListener('mouseenter', this.mouseEnter);
  }

  getDegree = (index, rotation) => {
    const { x, y, z } = States[index].action[rotation];
    return `rotate3d(${x},${y},${z},90deg)`;
  };

  findIndex = () => {
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
  };

  forceRender = () => {
    return this.dom.clientHeight;
  };

  nextSide = (direction, lastDirection) => {
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
  };

  rotate = (direction) => {
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
  };

  topLeftSteps = () => {
    console.log(this.transformValArray);
    if (this.side === 'A') {
      this.rotate('down');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      this.turn += 1;
      console.log(this.transformValArray);
      console.log(this.transformVal);
      console.log(this.turn);
      console.log('appppppppppplw');
    } else if (this.side === 'B') {
      this.rotate('right');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      console.log(this.transformValArray);
      console.log(this.transformVal);
      this.turn += 1;
      console.log(this.turn);
    } else if (this.side === 'F') {
      this.rotate('down');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      console.log(this.transformVal);
      console.log(this.transformValArray);
      this.turn += 1;
      console.log(this.turn);
    } else if (this.side === 'C') {
      this.rotate('right');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      console.log(this.transformVal);
      console.log(this.transformValArray);
      this.turn += 1;
      console.log(this.turn);
    } else if (this.side === 'D') {
      this.rotate('down');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      console.log(this.transformVal);
      console.log(this.transformValArray);
      this.turn += 1;
      console.log(this.turn);
    } else if (this.side === 'E') {
      this.rotate('right');
      this.transformVal = this.dom.style.transform;
      this.transformValArray.push(this.transformVal);
      console.log(this.transformVal);
      console.log(this.transformValArray);
      this.turn += 1;
      console.log(this.turn);
    }
  };

  vertHoriLoop = () => {
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
  };

  topLeftStepsMouseUpHandler = (e) => {
    if (
      this.startX != null &&
      this.startX !== e.clientX &&
      this.startY != null &&
      this.startY !== e.clientY
    ) {
      if (
        Math.abs(e.clientY - this.startY) > Math.abs(e.clientX - this.startX) &&
        e.clientY > this.startY
      ) {
        this.swipeDirection = DIRECTION.DOWN;
      } else if (
        Math.abs(e.clientY - this.startY) > Math.abs(e.clientX - this.startX) &&
        e.clientY < this.startY
      ) {
        this.swipeDirection = DIRECTION.UP;
      } else if (
        Math.abs(e.clientY - this.startY) < Math.abs(e.clientX - this.startX) &&
        e.clientX > this.startX
      ) {
        this.swipeDirection = DIRECTION.RIGHT;
      } else if (
        Math.abs(e.clientY - this.startY) < Math.abs(e.clientX - this.startX) &&
        e.clientX < this.startX
      ) {
        this.swipeDirection = DIRECTION.LEFT;
      }
    }

    if (this.lastRotation === 'down') {
      console.log(this.nextVal);
      if (this.swipeDirection === DIRECTION.UP) {
        this.state = 'ACTIVE';
        this.dom.style.transform = this.transformValArray[this.turn - 1];
        this.dom.classList.add('transition');

        console.log(this.turn);
        // this.rotate('up');
        this.dom.removeEventListener('transitionend', this.topLeftSteps);
      } else if (
        [DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(
          this.swipeDirection
        )
      ) {
        this.dom.style.transform = this.nextVal;
        this.dom.classList.add('transition');
        console.log(this.swipeDirection);
        this.state = 'ACTIVE';
        // this.rotate('down');
        this.dom.removeEventListener('transitionend', this.topLeftSteps); // STOP ANIMATION
      }
    } else if (this.lastRotation === 'right') {
      if (this.swipeDirection === DIRECTION.LEFT) {
        this.state = 'ACTIVE';
        // this.rotate('left');
        this.dom.style.transform = this.transformValArray[this.turn - 2];
        this.dom.classList.add('transition');
        console.log(`right${this.turn}`);
        console.log(this.transformValArray[this.turn]);
        this.dom.removeEventListener('transitionend', this.topLeftSteps);
      } else if (
        [DIRECTION.RIGHT, DIRECTION.DOWN, DIRECTION.UP].includes(
          this.swipeDirection
        )
      ) {
        this.state = 'ACTIVE';
        this.dom.style.transform = this.nextVal;
        this.dom.classList.add('transition');
        // this.rotate('right');
        this.dom.removeEventListener('transitionend', this.topLeftSteps); // STOP ANIMATION
      }
    }

    if (this.state === 'ACTIVE') {
      this.dom.removeEventListener('transitionend', this.topLeftSteps);
      document.removeEventListener('mouseup', this.topLeftStepsMouseUpHandler);
      document.addEventListener('mouseup', this.activeStateMouseUpHandler);
    }
  };

  activeStateMouseUpHandler = (e) => {
    console.log('mouseup');
    if (
      this.startX != null &&
      this.startX !== e.clientX &&
      this.startY != null &&
      this.startY !== e.clientY
    ) {
      if (
        Math.abs(e.clientY - this.startY) > Math.abs(e.clientX - this.startX) &&
        e.clientY > this.startY
      ) {
        this.swipeDirection = DIRECTION.DOWN;
        this.rotate(DIRECTION.DOWN);
      } else if (
        Math.abs(e.clientY - this.startY) > Math.abs(e.clientX - this.startX) &&
        e.clientY < this.startY
      ) {
        this.swipeDirection = DIRECTION.UP;
        this.rotate(DIRECTION.UP);
      } else if (
        Math.abs(e.clientY - this.startY) < Math.abs(e.clientX - this.startX) &&
        e.clientX > this.startX
      ) {
        this.swipeDirection = DIRECTION.RIGHT;
        this.rotate(DIRECTION.RIGHT);
      } else if (
        Math.abs(e.clientY - this.startY) < Math.abs(e.clientX - this.startX) &&
        e.clientX < this.startX
      ) {
        this.swipeDirection = DIRECTION.LEFT;
        this.rotate(DIRECTION.LEFT);
      }
    }
  };

  mouseLeave = () => {
    if (this.mouseFlag === 0) {
      this.dom.classList.add('transition');
      this.dom.style.transform = this.nextVal;
      // 因為transitionend,所以動畫繼續
    }
  };

  mouseEnter = () => {
    if (this.mouseFlag === 0) {
      this.nextVal = this.dom.style.transform;
      console.log(this.nextVal);
      const transformValue = window
        .getComputedStyle(this.dom)
        .getPropertyValue('transform');

      this.dom.style.transform = transformValue;
      this.dom.classList.remove('transition');
    }
  };

  mouseDown = (e) => {
    this.dom.removeEventListener('mouseenter', this.mouseEnter);
    this.dom.removeEventListener('mouseleave', this.mouseLeave);
    this.startX = e.clientX;
    this.startY = e.clientY;

    console.log(this.nextVal);
    const transformValue = window
      .getComputedStyle(this.dom)
      .getPropertyValue('transform');

    this.dom.style.transform = transformValue;
  };

  mouseMove = (e) => {
    e.stopPropagation();
    if (e.cancelable) {
      e.preventDefault();
    } else return false;
  };

  touchStartHandler = (e) => {
    const touchobj = e.changedTouches[0];
    this.startX = touchobj.pageX;
    this.startY = touchobj.pageY;
  };

  touchMoveHandler = (e) => {
    e.stopPropagation();
    if (e.cancelable) {
      e.preventDefault();
    } else return false;
  };

  activeStateTouchEndHandler = (e) => {
    const touchobj = e.changedTouches[0];
    if (
      this.startX != null &&
      this.startX !== touchobj.pageX &&
      this.startY != null &&
      this.startY !== touchobj.pageY
    ) {
      // swipe down
      if (
        Math.abs(touchobj.pageY - this.startY) >
          Math.abs(touchobj.pageX - this.startX) &&
        touchobj.pageY > this.startY
      ) {
        this.swipeDirection = DIRECTION.DOWN;
        this.rotate(DIRECTION.DOWN);
      } else if (
        Math.abs(touchobj.pageY - this.startY) >
          Math.abs(touchobj.pageX - this.startX) &&
        touchobj.pageY < this.startY
      ) {
        this.swipeDirection = DIRECTION.UP;
        this.rotate(DIRECTION.UP);
      } else if (
        Math.abs(touchobj.pageY - this.startY) <
          Math.abs(touchobj.pageX - this.startX) &&
        touchobj.pageX > this.startX
      ) {
        this.swipeDirection = DIRECTION.RIGHT;
        this.rotate(DIRECTION.RIGHT);
      } else if (
        Math.abs(touchobj.pageY - this.startY) <
          Math.abs(touchobj.pageX - this.startX) &&
        touchobj.pageX < this.startX
      ) {
        this.swipeDirection = DIRECTION.LEFT;
        this.rotate(DIRECTION.LEFT);
      }
    }
  };

  topLeftStepsTouchEndHandler = (e) => {
    const touchobj = e.changedTouches[0];
    if (
      this.startX != null &&
      this.startX !== touchobj.pageX &&
      this.startY != null &&
      this.startY !== touchobj.pageY
    ) {
      if (
        Math.abs(touchobj.pageY - this.startY) >
          Math.abs(touchobj.pageX - this.startX) &&
        touchobj.pageY > this.startY
      ) {
        this.swipeDirection = DIRECTION.DOWN;
        // cube.rotate(DIRECTION.DOWN);
      } else if (
        Math.abs(touchobj.pageY - this.startY) >
          Math.abs(touchobj.pageX - this.startX) &&
        touchobj.pageY < this.startY
      ) {
        this.swipeDirection = DIRECTION.UP;
        // cube.rotate(DIRECTION.UP);
      } else if (
        Math.abs(touchobj.pageY - this.startY) <
          Math.abs(touchobj.pageX - this.startX) &&
        touchobj.pageX > this.startX
      ) {
        this.swipeDirection = DIRECTION.RIGHT;
        // cube.rotate(DIRECTION.RIGHT);
      } else if (
        Math.abs(touchobj.pageY - this.startY) <
          Math.abs(touchobj.pageX - this.startX) &&
        touchobj.pageX < this.startX
      ) {
        this.swipeDirection = DIRECTION.LEFT;
        // cube.rotate(DIRECTION.LEFT);
      }
    }
    console.log(this);
    // INIT
    if (this.lastRotation === 'down') {
      if (this.swipeDirection === DIRECTION.UP) {
        this.state = 'ACTIVE';
        this.rotate('up');
        console.log(this.swipeDirection);
        this.dom.removeEventListener('transitionend', this.topLeftSteps);
      } else if (
        [DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(
          this.swipeDirection
        )
      ) {
        this.state = 'ACTIVE';
        this.dom.removeEventListener('transitionend', this.topLeftSteps); // STOP ANIMATION
      }
    } else if (this.lastRotation === 'right') {
      if (this.swipeDirection === DIRECTION.LEFT) {
        this.state = 'ACTIVE';
        this.rotate('left');
        this.dom.removeEventListener('transitionend', this.topLeftSteps);
      } else if (
        [DIRECTION.RIGHT, DIRECTION.DOWN, DIRECTION.UP].includes(
          this.swipeDirection
        )
      ) {
        this.state = 'ACTIVE';
        this.dom.removeEventListener('transitionend', this.topLeftSteps); // STOP ANIMATION
      }
    }

    if (this.state === 'ACTIVE') {
      this.dom.removeEventListener('transitionend', this.topLeftSteps);
      this.dom.addEventListener('touchend', this.activeStateTouchEndHandler);
    }
  };

  vertHoriLoopTouchEndHandler = (e) => {
    const touchobj = e.changedTouches[0];
    if (
      this.startX != null &&
      this.startX !== touchobj.pageX &&
      this.startY != null &&
      this.startY !== touchobj.pageY
    ) {
      // swipe down
      if (
        Math.abs(touchobj.pageY - this.startY) >
          Math.abs(touchobj.pageX - this.startX) &&
        touchobj.pageY > this.startY
      ) {
        this.swipeDirection = DIRECTION.DOWN;
      } else if (
        Math.abs(touchobj.pageY - this.startY) >
          Math.abs(touchobj.pageX - this.startX) &&
        touchobj.pageY < this.startY
      ) {
        this.swipeDirection = DIRECTION.UP;
      } else if (
        Math.abs(touchobj.pageY - this.startY) <
          Math.abs(touchobj.pageX - this.startX) &&
        touchobj.pageX > this.startX
      ) {
        this.swipeDirection = DIRECTION.RIGHT;
      } else if (
        Math.abs(touchobj.pageY - this.startY) <
          Math.abs(touchobj.pageX - this.startX) &&
        touchobj.pageX < this.startX
      ) {
        this.swipeDirection = DIRECTION.LEFT;
      }
    }
    // INIT
    if (this.lastRotation === 'down') {
      if (this.swipeDirection === DIRECTION.UP) {
        this.state = 'ACTIVE';
        this.rotate('up');
        this.dom.removeEventListener('transitionend', this.vertHoriLoop);
      } else if (
        [DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.RIGHT].includes(
          this.swipeDirection
        )
      ) {
        this.state = 'ACTIVE';
        this.dom.removeEventListener('transitionend', this.vertHoriLoop); // STOP ANIMATION
      }
    } else if (this.lastRotation === 'left') {
      if (this.swipeDirection === DIRECTION.RIGHT) {
        this.state = 'ACTIVE';
        this.rotate('right');
        this.dom.removeEventListener('transitionend', this.vertHoriLoop);
      } else if (
        [DIRECTION.LEFT, DIRECTION.DOWN, DIRECTION.UP].includes(
          this.swipeDirection
        )
      ) {
        this.state = 'ACTIVE';
        this.dom.removeEventListener('transitionend', this.vertHoriLoop); // STOP ANIMATION
      }
    }
    if (this.state === 'ACTIVE') {
      // cube.dom.removeEventListener('transitionend', cube.topLeftSteps);
      this.dom.removeEventListener('transitionend', this.vertHoriLoop);
      this.dom.addEventListener('touchend', this.activeStateTouchEndHandler);
    }
  };
}

const cubeDom = document.getElementsByClassName('space')[0];
const cube = new Cube(cubeDom);

cube.topLeftSteps();
