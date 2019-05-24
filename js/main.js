'use strict'
var startY = null;
var flag = 0;

function Cube(cube){
  this.cubeDom = cube;
}

Cube.prototype = {
  touchStop: function(dom){
    dom.classList.add("rotateStop");
    dom.classList.remove("rotateStart");
  },
  touchStart: function(dom){
    dom.classList.add("rotateStart");
    dom.classList.remove("rotateStop");
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
  startY       = touchobj.pageY;

  if(flag === 0){
    Cubie.touchStop(cube);
    flag = 1;
  } else {
    Cubie.touchStart(cube);
    flag = 0;
  }
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
}

_init();