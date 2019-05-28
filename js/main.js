'use strict'
var startX = null;
var flag = 0;
var TURN_LEFT = 0;
var TURN_RIGHT = 1;
var swipeDirection = TURN_LEFT;
var currentIndex;
var count = 0;

var counter = function(){
  count = count + 1;
  console.log(count);
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
  touchStop: function(dom, e){
    // console.log(document.styleSheets[0].cssRules[3]);
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
    document.styleSheets[0].cssRules[2].style.setProperty('--angle', tr);
    var a = document.styleSheets[0].cssRules[count % 6 + 7].style.transform
    console.log(a);
    document.styleSheets[0].cssRules[count % 6 + 7].style.setProperty('--final', a);

    dom.classList.add('space-rotate');
    // dom.classList.add(`rotate-${count % 6 + 1}`);

    // if(count%6 === 1){
    //   dom.classList.add('rotate-2');
    // }else if(count%6 === 2){
    //   dom.classList.add('rotate-3');
      
    // }else if(count%6 === 3){
    //   dom.classList.add('rotate-4');
      
    // }else if(count%6 === 4){
    //   dom.classList.add('rotate-5');
      
    // }else if(count%6 === 5){
    //   dom.classList.add('rotate-6');
      
    // }else if(count%6 === 0){
    //   dom.classList.add('rotate-1'); 
    // }

    // console.log(dom);
    // console.log(dom.hasAttribute('width'));
    // console.log(e.target.id);
    
    // dom.classList.add("space-rotate");
    // dom.classList.add("rotate-2");
    // setTimeout(() => dom.classList.add("rotate-3"), 500);

    // dom.classList.add("rotate-2");
    // dom.classList.remove("rotateStart");
    
  },
  touchStart: function(dom){
    // dom.classList.add("rotateStart");  
    // dom.classList.remove("rotateStop");
  }
}

function Buttons(button){
  this.buttomDom = button;
}

Buttons.prototype = {
  pressStart: function(dom){
    this.buttomDom.addEventListener('click',function(){
      dom.classList.add("rotateStart");
      dom.classList.remove("rotateStop");
    })
  },
  pressStop: function(dom){
    this.buttomDom.addEventListener('click',function(){
      dom.classList.remove("rotateStart");
      dom.classList.add("rotateStop");
    })
  }
}
// touch
function _touchStartHandler(e) {
  var cube = document.getElementsByClassName("space")[0];
  var Cubie = new Cube(cube);
  var touchobj = e.changedTouches[0];
  startX      = touchobj.pageX;

  if(flag === 0){
    Cubie.touchStop(cube, e);
    stop();
   
    flag = 1;
  } else {
    Cubie.touchStart(cube);
    flag = 0;
  }
}

function _touchMoveHandler(e) {
  e.stopPropagation();
if (e.cancelable) {
  e.preventDefault();
} else
  return false;
}

function _touchEndHandler(e) {
  var touchobj = e.changedTouches[0];
  if ( startX !== null && startX !== touchobj.pageX ) {
    swipeDirection = touchobj.pageX < startX ? TURN_LEFT : TURN_RIGHT;
    currentIndex = swipeDirection === TURN_LEFT ? _nextIndex(currentIndex, -1) : _nextIndex(currentIndex, 1);
    startX = null;
  }
}

//next box
function _nextIndex(currentIndex, number) {
  var GroupCnt = document.getElementsByClassName("box").length;
  var remainder = (currentIndex - number) % GroupCnt;

  return remainder < 0 ? remainder + GroupCnt : remainder;
}

function _init(){
  var cube = document.getElementsByClassName("space")[0];
  var start_button = document.getElementsByClassName("start")[0];
  var stop_button = document.getElementsByClassName("stop")[0];

  var Startbutton = new Buttons(start_button);
  var StopButton = new Buttons(stop_button);
 
  Startbutton.pressStart(cube);
  StopButton.pressStop(cube);
 

  cube.addEventListener('touchstart', _touchStartHandler);
  cube.addEventListener('touchmove', function(e){ e.preventDefault() });
  cube.addEventListener('touchend', _touchEndHandler);
}

_init();

