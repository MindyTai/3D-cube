"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cube =
/*#__PURE__*/
function () {
  function Cube() {
    _classCallCheck(this, Cube);

    console.log('hi');
  }

  _createClass(Cube, [{
    key: "gg",
    value: function gg() {
      var a = {
        b: 10
      };
      var b = a.b;
      console.log(b);
    }
  }]);

  return Cube;
}();

var cube = new Cube();
cube.gg();