var startX = null;
var startY = null;
var TURN_LEFT = 0;
var TURN_RIGHT = 1;
var swipeDirection = TURN_LEFT;

var keyframeA = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
var keyframeB = 'rotateX(-90deg) rotateY(0deg) rotateZ(0deg)';
var keyframeC = 'rotateX(-90deg) rotateY(0deg) rotateZ(90deg)';
var keyframeD = 'rotateX(-180deg) rotateY(0deg) rotateZ(90deg)';
var keyframeE = 'rotateX(-180deg) rotateY(-90deg) rotateZ(90deg)';
var keyframeF = 'rotateX(-180deg) rotateY(-90deg) rotateZ(180deg)';

var cubeDom = document.getElementsByClassName('space')[0];

// function firstRotation() {
//   cube.rotateA(cubeDom);
// }

function Cube(dom) {
  this.cubeDom = dom;
}

Cube.prototype = {
  turnRight(dom, e) {
    console.log(document.styleSheets[0].cssRules[2].style.animation);
    var el = document.getElementsByClassName('space')[0];
    var st = getComputedStyle(el);
    var tr =
      st.getPropertyValue('-webkit-transform') ||
      st.getPropertyValue('-moz-transform') ||
      st.getPropertyValue('-ms-transform') ||
      st.getPropertyValue('-o-transform') ||
      st.getPropertyValue('transform') ||
      "Either no transform set, or browser doesn't do getComputedStyle";

    console.log(tr);
    console.log(e.target.id);
    var { id } = e.target;
    var keyframe;

    if (id === '1') {
      keyframe = keyframeF;
    } else if (id === '2') {
      keyframe = keyframeA;
    } else if (id === '3') {
      keyframe = keyframeB;
    } else if (id === '4') {
      keyframe = 'rotateX(-90deg) rotateY(0deg) rotateZ(-270deg)';
    } else if (id === '5') {
      keyframe = 'rotateX(-180deg) rotateY(0deg) rotateZ(-270deg)';
    } else if (id === '6') {
      keyframe = keyframeA;
    }

    var root = document.documentElement.style;
    root.setProperty('--angle', tr);
    root.setProperty('--final', keyframe);

    dom.classList.add('space-rotate');
  },
  turnLeft(dom, e) {
    var el = document.getElementsByClassName('space')[0];
    var st = getComputedStyle(el);
    var tr =
      st.getPropertyValue('-webkit-transform') ||
      st.getPropertyValue('-moz-transform') ||
      st.getPropertyValue('-ms-transform') ||
      st.getPropertyValue('-o-transform') ||
      st.getPropertyValue('transform') ||
      "Either no transform set, or browser doesn't do getComputedStyle";

    console.log(tr);
    var { id } = e.target;
    var keyframe;

    if (id === '1') {
      keyframe = keyframeB;
    } else if (id === '2') {
      keyframe = keyframeC;
    } else if (id === '3') {
      keyframe = keyframeD;
    } else if (id === '4') {
      keyframe = keyframeE;
    } else if (id === '5') {
      keyframe = keyframeF;
    } else if (id === '6') {
      keyframe = keyframeA;
    }

    var root = document.documentElement.style;
    root.setProperty('--angle', tr);
    root.setProperty('--final', keyframe);

    dom.classList.add('space-rotate');
  },
  rotateA(dom) {
    var x = dom.clientHeight;
    dom.classList.remove('rotate-a');
    dom.classList.add('rotate-b');
  },
  firstRotation(dom) {
    this.rotateA(dom);
  },
  rotateB(dom) {
    var x = dom.clientHeight;
    dom.classList.remove('rotate-b');
    dom.classList.add('rotate-c');
  },
  rotateC(dom) {
    var x = dom.clientHeight;
    dom.classList.remove('rotate-c');
    dom.classList.add('rotate-d');
  },
  rotateD(dom) {
    var x = dom.clientHeight;
    dom.classList.remove('rotate-d');
    dom.classList.add('rotate-e');
  },
  rotateE(dom) {
    var x = dom.clientHeight;
    dom.classList.remove('rotate-e');
    dom.classList.add('rotate-f');
  },
  rotateF(dom) {
    var x = dom.clientHeight;
    dom.classList.remove('rotate-f');
    dom.classList.add('rotate-a-1');
  },
  rotateX(dom) {
    dom.classList.remove('rotate-a-1');
    dom.classList.add('rotate-a');
    var x = dom.clientHeight;
    this.firstRotation(dom);
  },
};

var cube = new Cube(cubeDom);
cube.firstRotation(cubeDom);
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
  console.log(startY);
  var touchobj = e.changedTouches[0];
  if (startX !== null && startX !== touchobj.pageX) {
    swipeDirection = touchobj.pageX > startX ? TURN_RIGHT : TURN_LEFT;
    if (swipeDirection === TURN_LEFT) {
      cube.turnLeft(cubeDom, e);
    } else {
      cube.turnRight(cubeDom, e);
    }
    startX = null;
  }
  // else if( startY !== null && startY !== touchobj.pageY ){
  //   swipeDirection = touchobj.pageY > startY ? TURN_RIGHT : TURN_RIGHT;
  //   swipeDirection == TURN_RIGHT ? cube.turnRight(cube,e) : cube.turnRight(cube,e);
  //   startY = null;
  // }
}

cubeDom.addEventListener('transitionend', function() {
  console.log(cubeDom.classList);
  if (cubeDom.classList.contains('rotate-b')) {
    cube.rotateB(cubeDom);
  } else if (cubeDom.classList.contains('rotate-c')) {
    cube.rotateC(cubeDom);
  } else if (cubeDom.classList.contains('rotate-d')) {
    cube.rotateD(cubeDom);
  } else if (cubeDom.classList.contains('rotate-e')) {
    cube.rotateE(cubeDom);
  } else if (cubeDom.classList.contains('rotate-f')) {
    cube.rotateF(cubeDom);
  } else if (cubeDom.classList.contains('rotate-a-1')) {
    cube.rotateX(cubeDom);
  }
});

function _init() {
  cubeDom.addEventListener('touchstart', _touchStartHandler);
  cubeDom.addEventListener('touchmove', _touchMoveHandler);
  cubeDom.addEventListener('touchend', _touchEndHandler);
}

_init();
