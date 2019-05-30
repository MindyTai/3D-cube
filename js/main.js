'use strict'

var startX = null;
var startY = null;
var flag = 0;
var TURN_LEFT = 0;
var TURN_RIGHT = 1;
var swipeDirection = TURN_LEFT;
var currentIndex;
var count = 0;

var keyframeA = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
var keyframeB = 'rotateX(-90deg) rotateY(0deg) rotateZ(0deg)';
var keyframeC = 'rotateX(-90deg) rotateY(0deg) rotateZ(90deg)';
var keyframeD = 'rotateX(-180deg) rotateY(0deg) rotateZ(90deg)';
var keyframeE = 'rotateX(-180deg) rotateY(-90deg) rotateZ(90deg)';
var keyframeF = 'rotateX(-180deg) rotateY(-90deg) rotateZ(180deg)';

var counter = function(){
  count = count + 1;
}

var detect = setInterval(counter, 1000);

function stop(){
  clearInterval(detect);
  console.log("now is" + count);
}

function Cube(cube){
  this.cubeDom = cube;
}

Cube.prototype = {
  turnRight: function(dom, e){
    console.log(document.styleSheets[0].cssRules[2].style.animation);
    var el = document.getElementsByClassName("space")[0];
    var st = getComputedStyle(el);
    var tr = st.getPropertyValue("-webkit-transform") ||
         st.getPropertyValue("-moz-transform") ||
         st.getPropertyValue("-ms-transform") ||
         st.getPropertyValue("-o-transform") ||
         st.getPropertyValue("transform") ||
         "Either no transform set, or browser doesn't do getComputedStyle";

    console.log(tr);
    console.log(e.target.id);
    var id = e.target.id;
    var keyframe;

    if(id === '1'){
      keyframe = keyframeF;
    }else if(id === '2'){
      keyframe = keyframeA;
    }else if(id === '3'){
      keyframe = keyframeB;
    }else if(id === '4'){
      keyframe = 'rotateX(-90deg) rotateY(0deg) rotateZ(-270deg)';
    }else if(id === '5'){
      keyframe = 'rotateX(-180deg) rotateY(0deg) rotateZ(-270deg)';
    }else if(id === '6'){
      keyframe = keyframeA;
    }
    
    var root = document.documentElement.style;
    root.setProperty('--angle', tr);
    root.setProperty('--final', keyframe);
    
    dom.classList.add('space-rotate');
 
  },
 turnLeft: function(dom,e){

  var el = document.getElementsByClassName("space")[0];
  var st = getComputedStyle(el);
  var tr = st.getPropertyValue("-webkit-transform") ||
       st.getPropertyValue("-moz-transform") ||
       st.getPropertyValue("-ms-transform") ||
       st.getPropertyValue("-o-transform") ||
       st.getPropertyValue("transform") ||
       "Either no transform set, or browser doesn't do getComputedStyle";

  console.log(tr);
  var id = e.target.id;
  var keyframe;

  if(id === '1'){
    keyframe = keyframeB;
  }else if(id === '2'){
    keyframe = keyframeC;
  }else if(id === '3'){
    keyframe = keyframeD;
  }else if(id === '4'){
    keyframe = keyframeE;
  }else if(id === '5'){
    keyframe = keyframeF;
  }else if(id === '6'){
    keyframe = keyframeA;
  }

  var root = document.documentElement.style;
  root.setProperty('--angle', tr);
  root.setProperty('--final', keyframe);
  
  dom.classList.add('space-rotate');
 }
}

// touch
function _touchStartHandler(e) {
  var touchobj = e.changedTouches[0];
  startX      = touchobj.pageX;
  startY      = touchobj.pageY;
}

function _touchMoveHandler(e) {
  e.stopPropagation();
if (e.cancelable) {
  e.preventDefault();
} else
  return false;
}

function _touchEndHandler(e) {
  console.log(startY);
  var cube = document.getElementsByClassName("space")[0];
  var Cubie = new Cube(cube);
  var touchobj = e.changedTouches[0];
  if ( startX !== null && startX !== touchobj.pageX ) {
    swipeDirection = touchobj.pageX > startX ? TURN_RIGHT : TURN_LEFT;
    swipeDirection === TURN_LEFT ? Cubie.turnLeft(cube,e) : Cubie.turnRight(cube,e);
    startX = null;
  }
  // else if( startY !== null && startY !== touchobj.pageY ){
  //   swipeDirection = touchobj.pageY > startY ? TURN_RIGHT : TURN_RIGHT;
  //   swipeDirection == TURN_RIGHT ? Cubie.turnRight(cube,e) : Cubie.turnRight(cube,e);
  //   startY = null;
  // }
 
}


function _init(){
  var cube = document.getElementsByClassName("space")[0];
 
  cube.addEventListener('touchstart', _touchStartHandler);
  cube.addEventListener('touchmove', function(e){ e.preventDefault() });
  cube.addEventListener('touchend', _touchEndHandler);
}

_init();

