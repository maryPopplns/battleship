/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/game/GAME_LOOP.js":
/*!******************************************!*\
  !*** ./src/components/game/GAME_LOOP.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameloop)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/components/game/gameboard.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/components/game/player.js");


function gameloop() {
  var PLAYER1 = new _player_js__WEBPACK_IMPORTED_MODULE_1__.default('human');
  var PLAYER2 = new _player_js__WEBPACK_IMPORTED_MODULE_1__.default('ai');
  var PLAYER1_GAMEBOARD = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.default();
  var PLAYER2_GAMEBOARD = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.default(); //todo remove boilerplate so ships can be manually placed

  [PLAYER1_GAMEBOARD, PLAYER2_GAMEBOARD].map(function (board) {
    board.place_ship('carrier', ['a0', 'a1', 'a2', 'a3', 'a4']);
    board.place_ship('battleship', ['b0', 'b1', 'b2', 'b3']);
    board.place_ship('destroyer', ['c0', 'c1', 'c2']);
    board.place_ship('sub', ['d0', 'd1', 'd2']);
    board.place_ship('patrolBoat', ['e0', 'e1']);
  }); //todo remove boilerplate so ships can be manually placed

  return {
    PLAYER1: PLAYER1,
    PLAYER2: PLAYER2
  };
}

/***/ }),

/***/ "./src/components/game/gameboard.js":
/*!******************************************!*\
  !*** ./src/components/game/gameboard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/components/game/ship.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



var _miss_reducer = /*#__PURE__*/new WeakSet();

var _hit_reducer = /*#__PURE__*/new WeakSet();

var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    _classCallCheck(this, Gameboard);

    _hit_reducer.add(this);

    _miss_reducer.add(this);

    _defineProperty(this, "ships", {
      carrier: {
        position: [],
        ship: new _ship_js__WEBPACK_IMPORTED_MODULE_0__.default(5)
      },
      battleship: {
        position: [],
        ship: new _ship_js__WEBPACK_IMPORTED_MODULE_0__.default(4)
      },
      destroyer: {
        position: [],
        ship: new _ship_js__WEBPACK_IMPORTED_MODULE_0__.default(3)
      },
      sub: {
        position: [],
        ship: new _ship_js__WEBPACK_IMPORTED_MODULE_0__.default(3)
      },
      patrolBoat: {
        position: [],
        ship: new _ship_js__WEBPACK_IMPORTED_MODULE_0__.default(2)
      }
    });

    _defineProperty(this, "hits", []);

    _defineProperty(this, "misses", []);
  }

  _createClass(Gameboard, [{
    key: "place_ship",
    value: function place_ship(ship, input_coordinates) {
      this.ships[ship].position = input_coordinates;
    }
  }, {
    key: "receive_attack",
    value: function receive_attack(input_coordinate) {
      var miss = true;

      for (var ship in this.ships) {
        var WAS_HIT = this.ships[ship].position.includes(input_coordinate);

        if (WAS_HIT) {
          this.hits = _classPrivateMethodGet(this, _hit_reducer, _hit_reducer2).call(this, input_coordinate);
          var HIT_INDEX = this.ships[ship].position.indexOf(input_coordinate);
          this.ships[ship].ship.hit(HIT_INDEX);
          miss = false;
        }
      }

      if (miss) {
        this.misses = _classPrivateMethodGet(this, _miss_reducer, _miss_reducer2).call(this, input_coordinate);
      }
    }
  }, {
    key: "all_sunk",
    value: function all_sunk() {
      var is_all_sunk = true;

      for (var ship in this.ships) {
        var all_sunk_call = this.ships[ship].ship.is_sunk();

        if (all_sunk_call === false) {
          is_all_sunk = false;
          break;
        }
      }

      return is_all_sunk;
    }
  }]);

  return Gameboard;
}();

function _miss_reducer2(input_coordinate) {
  return [].concat(_toConsumableArray(this.misses), [input_coordinate]).sort();
}

function _hit_reducer2(input_coordinate) {
  return [].concat(_toConsumableArray(this.hits), [input_coordinate]).sort();
}



/***/ }),

/***/ "./src/components/game/player.js":
/*!***************************************!*\
  !*** ./src/components/game/player.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _remaining_moves_reducer = /*#__PURE__*/new WeakSet();

var _fill_remaining_moves = /*#__PURE__*/new WeakMap();

var _ai_move = /*#__PURE__*/new WeakSet();

var _filter_remaining_moves = /*#__PURE__*/new WeakSet();

var _attack_reducer = /*#__PURE__*/new WeakSet();

var Player = /*#__PURE__*/function () {
  function Player(player) {
    var _this = this;

    _classCallCheck(this, Player);

    _attack_reducer.add(this);

    _filter_remaining_moves.add(this);

    _ai_move.add(this);

    _remaining_moves_reducer.add(this);

    _defineProperty(this, "moves", []);

    _defineProperty(this, "remaining_moves", []);

    _fill_remaining_moves.set(this, {
      writable: true,
      value: function () {
        var LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        LETTERS.map(function (letter) {
          for (var i = 0; i < 10; i++) {
            _classPrivateMethodGet(_this, _remaining_moves_reducer, _remaining_moves_reducer2).call(_this, "".concat(letter).concat(i));
          }
        });
      }()
    });

    this.player = player;
  }

  _createClass(Player, [{
    key: "ai_attack",
    value: function ai_attack(board) {
      if (this.player !== 'ai') {
        throw new Error('Player needs to be AI');
      }

      var COORDINATE = _classPrivateMethodGet(this, _ai_move, _ai_move2).call(this);

      this.remaining_moves = _classPrivateMethodGet(this, _filter_remaining_moves, _filter_remaining_moves2).call(this, COORDINATE);
      this.moves = _classPrivateMethodGet(this, _attack_reducer, _attack_reducer2).call(this, COORDINATE);
      board.receive_attack(COORDINATE);
      return COORDINATE;
    }
  }, {
    key: "human_attack",
    value: function human_attack(board, coordinate) {
      if (this.player !== 'human') {
        throw new Error('Player needs to be a human');
      }

      var FILTERED_MOVES = _classPrivateMethodGet(this, _filter_remaining_moves, _filter_remaining_moves2).call(this, coordinate);

      this.remaining_moves = FILTERED_MOVES;
      this.moves = _classPrivateMethodGet(this, _attack_reducer, _attack_reducer2).call(this, coordinate);
      board.receive_attack(coordinate);
      return coordinate;
    }
  }]);

  return Player;
}();

function _remaining_moves_reducer2(coordinate) {
  this.remaining_moves = [].concat(_toConsumableArray(this.remaining_moves), [coordinate]);
}

function _ai_move2() {
  return this.remaining_moves[Math.floor(Math.random() * this.remaining_moves.length)];
}

function _filter_remaining_moves2(coordinate) {
  var REMAINING_MOVES_COPY = _toConsumableArray(this.remaining_moves);

  var REMAINING = REMAINING_MOVES_COPY.filter(function (remaining_move) {
    return remaining_move !== coordinate;
  });
  return REMAINING;
}

function _attack_reducer2(input_coordinate) {
  return [].concat(_toConsumableArray(this.moves), [input_coordinate]);
}



/***/ }),

/***/ "./src/components/game/ship.js":
/*!*************************************!*\
  !*** ./src/components/game/ship.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _hit_reducer = /*#__PURE__*/new WeakSet();

var Ship = /*#__PURE__*/function () {
  function Ship(length) {
    _classCallCheck(this, Ship);

    _hit_reducer.add(this);

    this.hits = new Array(length).fill(false);
  }

  _createClass(Ship, [{
    key: "hit",
    value: function hit(position_hit) {
      this.hits = _classPrivateMethodGet(this, _hit_reducer, _hit_reducer2).call(this, this.hits, position_hit);
    }
  }, {
    key: "is_sunk",
    value: function is_sunk() {
      return this.hits.every(function (position) {
        return position === true;
      });
    }
  }]);

  return Ship;
}();

function _hit_reducer2(hits_array, position_hit) {
  var HITS = _toConsumableArray(hits_array);

  HITS[position_hit] = true;
  return HITS;
}



/***/ }),

/***/ "./src/components/ui/homepage/color_start_tiles.js":
/*!*********************************************************!*\
  !*** ./src/components/ui/homepage/color_start_tiles.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ color_start_tiles)
/* harmony export */ });
/* harmony import */ var _start_tiles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start_tiles.js */ "./src/components/ui/homepage/start_tiles.js");

function color_start_tiles() {
  var ALL_TILES = Array.from(document.getElementsByClassName('start_background'));
  ALL_TILES.map(function (tile) {
    var ID = +tile.id.slice(6);
    var COLORED = _start_tiles_js__WEBPACK_IMPORTED_MODULE_0__.default.all;

    if (COLORED.includes(ID)) {
      tile.classList.add('start_text');
      tile.classList.remove('start_background');
    }
  });
}

/***/ }),

/***/ "./src/components/ui/homepage/homepage.js":
/*!************************************************!*\
  !*** ./src/components/ui/homepage/homepage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homepage)
/* harmony export */ });
/* harmony import */ var _render_tiles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render_tiles.js */ "./src/components/ui/homepage/render_tiles.js");
/* harmony import */ var _color_start_tiles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color_start_tiles.js */ "./src/components/ui/homepage/color_start_tiles.js");


function homepage() {
  (0,_render_tiles_js__WEBPACK_IMPORTED_MODULE_0__.default)();
  (0,_color_start_tiles_js__WEBPACK_IMPORTED_MODULE_1__.default)();
}

/***/ }),

/***/ "./src/components/ui/homepage/render_tiles.js":
/*!****************************************************!*\
  !*** ./src/components/ui/homepage/render_tiles.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render_tiles)
/* harmony export */ });
function render_tiles() {
  var MAIN = document.createElement('main');
  var HEADING = document.createElement('div');
  var START = document.createElement('div');
  HEADING.id = 'bs_heading';
  START.id = 'start_button';

  for (var i = 0; i < 2800; i++) {
    var TILE = document.createElement('div');
    TILE.addEventListener('click', function (e) {
      e.target.style.backgroundColor = 'red';
    });
    TILE.addEventListener('dblclick', function (e) {
      e.target.style.backgroundColor = 'rgb(60, 86, 150)';
    });
    TILE.id = i;
    TILE.classList = 'tile water';
    HEADING.append(TILE);
  }

  for (var _i = 0; _i < 700; _i++) {
    var _TILE = document.createElement('div');

    _TILE.id = "start_".concat(_i);
    _TILE.classList = 'tile start_background';
    START.append(_TILE);
  }

  MAIN.append(HEADING);
  MAIN.append(START);
  document.body.append(MAIN);
}

/***/ }),

/***/ "./src/components/ui/homepage/start_tiles.js":
/*!***************************************************!*\
  !*** ./src/components/ui/homepage/start_tiles.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var START = {
  s: [146, 147, 216, 217, 434, 435, 504, 505],
  t1: [162, 163, 232, 233, 302, 303, 372, 373, 442, 443, 512, 513, 582, 583, 652, 653],
  a: [170, 171, 178, 179, 240, 241, 248, 249, 450, 451, 458, 459, 520, 521, 528, 529, 590, 591, 598, 599, 660, 661, 668, 669],
  r: [182, 183, 190, 191, 252, 253, 260, 261, 462, 463, 470, 471, 532, 533, 540, 541, 602, 603, 610, 611, 672, 673, 680, 681],
  t2: [198, 199, 268, 269, 338, 339, 408, 409, 478, 479, 548, 549, 618, 619, 688, 689],
  all: []
};

var ITERATOR = function ITERATOR(min, max, target_array) {
  for (var i = min; i < max + 1; i++) {
    target_array.push(i);
  }
};

(function ez_loader() {
  var S = START.s;
  ITERATOR(6, 15, S);
  ITERATOR(76, 85, S);
  ITERATOR(76, 85, S);
  ITERATOR(286, 295, S);
  ITERATOR(356, 365, S);
  ITERATOR(566, 575, S);
  ITERATOR(636, 645, S);
  var T1 = START.t1;
  ITERATOR(18, 27, T1);
  ITERATOR(88, 97, T1);
  var A = START.a;
  ITERATOR(30, 39, A);
  ITERATOR(100, 109, A);
  ITERATOR(310, 319, A);
  ITERATOR(380, 389, A);
  var R = START.r;
  ITERATOR(42, 49, R);
  ITERATOR(112, 119, R);
  ITERATOR(322, 329, R);
  ITERATOR(392, 399, R);
  var T2 = START.t2;
  ITERATOR(54, 63, T2);
  ITERATOR(124, 133, T2);

  for (var letter in START) {
    if (letter === 'all') {
      break;
    }

    START[letter].map(function (number) {
      START.all.push(number);
    });
  }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (START);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/homepage.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/homepage.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  justify-content: center;\n  background-color: black;\n  cursor: none;\n}\n\n#bs_heading {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(40, 1fr);\n  height: 40em;\n  width: 70em;\n  background-color: rgb(60, 86, 150);\n}\n\n#start_button {\n  background-color: white;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 10em;\n  width: 70em;\n}\n\n.tile:hover {\n  background: rgb(132, 255, 23);\n}\n\n.tile {\n  border: 1px solid black;\n}\n\n.start_background {\n  background-color: black;\n}\n\n.start_text {\n  background-color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/homepage/homepage.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,WAAW;EACX,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["body {\n  display: flex;\n  justify-content: center;\n  background-color: black;\n  cursor: none;\n}\n\n#bs_heading {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(40, 1fr);\n  height: 40em;\n  width: 70em;\n  background-color: rgb(60, 86, 150);\n}\n\n#start_button {\n  background-color: white;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 10em;\n  width: 70em;\n}\n\n.tile:hover {\n  background: rgb(132, 255, 23);\n}\n\n.tile {\n  border: 1px solid black;\n}\n\n.start_background {\n  background-color: black;\n}\n\n.start_text {\n  background-color: red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_ui_homepage_homepage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./components/ui/homepage/homepage.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/homepage.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_ui_homepage_homepage_css__WEBPACK_IMPORTED_MODULE_2__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _components_game_GAME_LOOP_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/game/GAME_LOOP.js */ "./src/components/game/GAME_LOOP.js");
/* harmony import */ var _components_ui_homepage_homepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ui/homepage/homepage.js */ "./src/components/ui/homepage/homepage.js");



var GAME = (0,_components_game_GAME_LOOP_js__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_components_ui_homepage_homepage_js__WEBPACK_IMPORTED_MODULE_2__.default)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQSxJQUFNNkMsSUFBSSxHQUFHckcsc0VBQVEsRUFBckI7QUFDQXdFLDRFQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9HQU1FX0xPT1AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWUvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jb2xvcl9zdGFydF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL3JlbmRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2Uvc3RhcnRfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hvbWVwYWdlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZWxvb3AoKSB7XG4gIGNvbnN0IFBMQVlFUjEgPSBuZXcgUGxheWVyKCdodW1hbicpO1xuICBjb25zdCBQTEFZRVIyID0gbmV3IFBsYXllcignYWknKTtcbiAgY29uc3QgUExBWUVSMV9HQU1FQk9BUkQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGNvbnN0IFBMQVlFUjJfR0FNRUJPQVJEID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gIC8vdG9kbyByZW1vdmUgYm9pbGVycGxhdGUgc28gc2hpcHMgY2FuIGJlIG1hbnVhbGx5IHBsYWNlZFxuICBbUExBWUVSMV9HQU1FQk9BUkQsIFBMQVlFUjJfR0FNRUJPQVJEXS5tYXAoKGJvYXJkKSA9PiB7XG4gICAgYm9hcmQucGxhY2Vfc2hpcCgnY2FycmllcicsIFsnYTAnLCAnYTEnLCAnYTInLCAnYTMnLCAnYTQnXSk7XG4gICAgYm9hcmQucGxhY2Vfc2hpcCgnYmF0dGxlc2hpcCcsIFsnYjAnLCAnYjEnLCAnYjInLCAnYjMnXSk7XG4gICAgYm9hcmQucGxhY2Vfc2hpcCgnZGVzdHJveWVyJywgWydjMCcsICdjMScsICdjMiddKTtcbiAgICBib2FyZC5wbGFjZV9zaGlwKCdzdWInLCBbJ2QwJywgJ2QxJywgJ2QyJ10pO1xuICAgIGJvYXJkLnBsYWNlX3NoaXAoJ3BhdHJvbEJvYXQnLCBbJ2UwJywgJ2UxJ10pO1xuICB9KTtcbiAgLy90b2RvIHJlbW92ZSBib2lsZXJwbGF0ZSBzbyBzaGlwcyBjYW4gYmUgbWFudWFsbHkgcGxhY2VkXG5cbiAgcmV0dXJuIHsgUExBWUVSMSwgUExBWUVSMiB9O1xufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgc2hpcHMgPSB7XG4gICAgY2Fycmllcjoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoNSksXG4gICAgfSxcbiAgICBiYXR0bGVzaGlwOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCg0KSxcbiAgICB9LFxuICAgIGRlc3Ryb3llcjoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoMyksXG4gICAgfSxcbiAgICBzdWI6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDMpLFxuICAgIH0sXG4gICAgcGF0cm9sQm9hdDoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoMiksXG4gICAgfSxcbiAgfTtcbiAgaGl0cyA9IFtdO1xuICBtaXNzZXMgPSBbXTtcblxuICBwbGFjZV9zaGlwKHNoaXAsIGlucHV0X2Nvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5zaGlwc1tzaGlwXS5wb3NpdGlvbiA9IGlucHV0X2Nvb3JkaW5hdGVzO1xuICB9XG4gICNtaXNzX3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIHJldHVybiBbLi4udGhpcy5taXNzZXMsIGlucHV0X2Nvb3JkaW5hdGVdLnNvcnQoKTtcbiAgfVxuICAjaGl0X3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIHJldHVybiBbLi4udGhpcy5oaXRzLCBpbnB1dF9jb29yZGluYXRlXS5zb3J0KCk7XG4gIH1cbiAgcmVjZWl2ZV9hdHRhY2soaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIGxldCBtaXNzID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgIGNvbnN0IFdBU19ISVQgPSB0aGlzLnNoaXBzW3NoaXBdLnBvc2l0aW9uLmluY2x1ZGVzKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgICAgaWYgKFdBU19ISVQpIHtcbiAgICAgICAgdGhpcy5oaXRzID0gdGhpcy4jaGl0X3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSk7XG4gICAgICAgIGNvbnN0IEhJVF9JTkRFWCA9IHRoaXMuc2hpcHNbc2hpcF0ucG9zaXRpb24uaW5kZXhPZihpbnB1dF9jb29yZGluYXRlKTtcbiAgICAgICAgdGhpcy5zaGlwc1tzaGlwXS5zaGlwLmhpdChISVRfSU5ERVgpO1xuICAgICAgICBtaXNzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtaXNzKSB7XG4gICAgICB0aGlzLm1pc3NlcyA9IHRoaXMuI21pc3NfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKTtcbiAgICB9XG4gIH1cbiAgYWxsX3N1bmsoKSB7XG4gICAgbGV0IGlzX2FsbF9zdW5rID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgIGNvbnN0IGFsbF9zdW5rX2NhbGwgPSB0aGlzLnNoaXBzW3NoaXBdLnNoaXAuaXNfc3VuaygpO1xuICAgICAgaWYgKGFsbF9zdW5rX2NhbGwgPT09IGZhbHNlKSB7XG4gICAgICAgIGlzX2FsbF9zdW5rID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNfYWxsX3N1bms7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHBsYXllcikge1xuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICB9XG4gIG1vdmVzID0gW107XG4gIHJlbWFpbmluZ19tb3ZlcyA9IFtdO1xuXG4gICNyZW1haW5pbmdfbW92ZXNfcmVkdWNlcihjb29yZGluYXRlKSB7XG4gICAgdGhpcy5yZW1haW5pbmdfbW92ZXMgPSBbLi4udGhpcy5yZW1haW5pbmdfbW92ZXMsIGNvb3JkaW5hdGVdO1xuICB9XG4gICNmaWxsX3JlbWFpbmluZ19tb3ZlcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgTEVUVEVSUyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJywgJ2knLCAnaiddO1xuICAgIExFVFRFUlMubWFwKChsZXR0ZXIpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICB0aGlzLiNyZW1haW5pbmdfbW92ZXNfcmVkdWNlcihgJHtsZXR0ZXJ9JHtpfWApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSgpO1xuICAjYWlfbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdfbW92ZXNbXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJlbWFpbmluZ19tb3Zlcy5sZW5ndGgpXG4gICAgXTtcbiAgfVxuICAjZmlsdGVyX3JlbWFpbmluZ19tb3Zlcyhjb29yZGluYXRlKSB7XG4gICAgY29uc3QgUkVNQUlOSU5HX01PVkVTX0NPUFkgPSBbLi4udGhpcy5yZW1haW5pbmdfbW92ZXNdO1xuICAgIGNvbnN0IFJFTUFJTklORyA9IFJFTUFJTklOR19NT1ZFU19DT1BZLmZpbHRlcigocmVtYWluaW5nX21vdmUpID0+IHtcbiAgICAgIHJldHVybiByZW1haW5pbmdfbW92ZSAhPT0gY29vcmRpbmF0ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gUkVNQUlOSU5HO1xuICB9XG4gICNhdHRhY2tfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLm1vdmVzLCBpbnB1dF9jb29yZGluYXRlXTtcbiAgfVxuICBhaV9hdHRhY2soYm9hcmQpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXIgIT09ICdhaScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxheWVyIG5lZWRzIHRvIGJlIEFJJyk7XG4gICAgfVxuICAgIGNvbnN0IENPT1JESU5BVEUgPSB0aGlzLiNhaV9tb3ZlKCk7XG4gICAgdGhpcy5yZW1haW5pbmdfbW92ZXMgPSB0aGlzLiNmaWx0ZXJfcmVtYWluaW5nX21vdmVzKENPT1JESU5BVEUpO1xuICAgIHRoaXMubW92ZXMgPSB0aGlzLiNhdHRhY2tfcmVkdWNlcihDT09SRElOQVRFKTtcbiAgICBib2FyZC5yZWNlaXZlX2F0dGFjayhDT09SRElOQVRFKTtcbiAgICByZXR1cm4gQ09PUkRJTkFURTtcbiAgfVxuICBodW1hbl9hdHRhY2soYm9hcmQsIGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXIgIT09ICdodW1hbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxheWVyIG5lZWRzIHRvIGJlIGEgaHVtYW4nKTtcbiAgICB9XG4gICAgY29uc3QgRklMVEVSRURfTU9WRVMgPSB0aGlzLiNmaWx0ZXJfcmVtYWluaW5nX21vdmVzKGNvb3JkaW5hdGUpO1xuICAgIHRoaXMucmVtYWluaW5nX21vdmVzID0gRklMVEVSRURfTU9WRVM7XG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMuI2F0dGFja19yZWR1Y2VyKGNvb3JkaW5hdGUpO1xuICAgIGJvYXJkLnJlY2VpdmVfYXR0YWNrKGNvb3JkaW5hdGUpO1xuICAgIHJldHVybiBjb29yZGluYXRlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5oaXRzID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSk7XG4gIH1cblxuICAjaGl0X3JlZHVjZXIoaGl0c19hcnJheSwgcG9zaXRpb25faGl0KSB7XG4gICAgY29uc3QgSElUUyA9IFsuLi5oaXRzX2FycmF5XTtcbiAgICBISVRTW3Bvc2l0aW9uX2hpdF0gPSB0cnVlO1xuICAgIHJldHVybiBISVRTO1xuICB9XG4gIGhpdChwb3NpdGlvbl9oaXQpIHtcbiAgICB0aGlzLmhpdHMgPSB0aGlzLiNoaXRfcmVkdWNlcih0aGlzLmhpdHMsIHBvc2l0aW9uX2hpdCk7XG4gIH1cbiAgaXNfc3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRzLmV2ZXJ5KChwb3NpdGlvbikgPT4gcG9zaXRpb24gPT09IHRydWUpO1xuICB9XG59XG4iLCJpbXBvcnQgU1RBUlQgZnJvbSAnLi9zdGFydF90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX3N0YXJ0X3RpbGVzKCkge1xuICBjb25zdCBBTExfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0X2JhY2tncm91bmQnKVxuICApO1xuICBBTExfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgY29uc3QgSUQgPSArdGlsZS5pZC5zbGljZSg2KTtcbiAgICBjb25zdCBDT0xPUkVEID0gU1RBUlQuYWxsO1xuICAgIGlmIChDT0xPUkVELmluY2x1ZGVzKElEKSkge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdGFydF90ZXh0Jyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X2JhY2tncm91bmQnKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHJlbmRlcl90aWxlcyBmcm9tICcuL3JlbmRlcl90aWxlcy5qcyc7XG5pbXBvcnQgY29sb3Jfc3RhcnRfdGlsZXMgZnJvbSAnLi9jb2xvcl9zdGFydF90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVwYWdlKCkge1xuICByZW5kZXJfdGlsZXMoKTtcbiAgY29sb3Jfc3RhcnRfdGlsZXMoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl90aWxlcygpIHtcbiAgY29uc3QgTUFJTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3QgSEVBRElORyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBTVEFSVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBIRUFESU5HLmlkID0gJ2JzX2hlYWRpbmcnO1xuICBTVEFSVC5pZCA9ICdzdGFydF9idXR0b24nO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI4MDA7IGkrKykge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBUSUxFLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH0pO1xuICAgIFRJTEUuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYig2MCwgODYsIDE1MCknO1xuICAgIH0pO1xuICAgIFRJTEUuaWQgPSBpO1xuICAgIFRJTEUuY2xhc3NMaXN0ID0gJ3RpbGUgd2F0ZXInO1xuICAgIEhFQURJTkcuYXBwZW5kKFRJTEUpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IGBzdGFydF8ke2l9YDtcbiAgICBUSUxFLmNsYXNzTGlzdCA9ICd0aWxlIHN0YXJ0X2JhY2tncm91bmQnO1xuICAgIFNUQVJULmFwcGVuZChUSUxFKTtcbiAgfVxuICBNQUlOLmFwcGVuZChIRUFESU5HKTtcbiAgTUFJTi5hcHBlbmQoU1RBUlQpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChNQUlOKTtcbn1cbiIsImNvbnN0IFNUQVJUID0ge1xuICBzOiBbMTQ2LCAxNDcsIDIxNiwgMjE3LCA0MzQsIDQzNSwgNTA0LCA1MDVdLFxuICB0MTogW1xuICAgIDE2MiwgMTYzLCAyMzIsIDIzMywgMzAyLCAzMDMsIDM3MiwgMzczLCA0NDIsIDQ0MywgNTEyLCA1MTMsIDU4MiwgNTgzLCA2NTIsXG4gICAgNjUzLFxuICBdLFxuICBhOiBbXG4gICAgMTcwLCAxNzEsIDE3OCwgMTc5LCAyNDAsIDI0MSwgMjQ4LCAyNDksIDQ1MCwgNDUxLCA0NTgsIDQ1OSwgNTIwLCA1MjEsIDUyOCxcbiAgICA1MjksIDU5MCwgNTkxLCA1OTgsIDU5OSwgNjYwLCA2NjEsIDY2OCwgNjY5LFxuICBdLFxuICByOiBbXG4gICAgMTgyLCAxODMsIDE5MCwgMTkxLCAyNTIsIDI1MywgMjYwLCAyNjEsIDQ2MiwgNDYzLCA0NzAsIDQ3MSwgNTMyLCA1MzMsIDU0MCxcbiAgICA1NDEsIDYwMiwgNjAzLCA2MTAsIDYxMSwgNjcyLCA2NzMsIDY4MCwgNjgxLFxuICBdLFxuICB0MjogW1xuICAgIDE5OCwgMTk5LCAyNjgsIDI2OSwgMzM4LCAzMzksIDQwOCwgNDA5LCA0NzgsIDQ3OSwgNTQ4LCA1NDksIDYxOCwgNjE5LCA2ODgsXG4gICAgNjg5LFxuICBdLFxuICBhbGw6IFtdLFxufTtcblxuY29uc3QgSVRFUkFUT1IgPSAobWluLCBtYXgsIHRhcmdldF9hcnJheSkgPT4ge1xuICBmb3IgKGxldCBpID0gbWluOyBpIDwgbWF4ICsgMTsgaSsrKSB7XG4gICAgdGFyZ2V0X2FycmF5LnB1c2goaSk7XG4gIH1cbn07XG5cbihmdW5jdGlvbiBlel9sb2FkZXIoKSB7XG4gIGNvbnN0IFMgPSBTVEFSVC5zO1xuICBJVEVSQVRPUig2LCAxNSwgUyk7XG4gIElURVJBVE9SKDc2LCA4NSwgUyk7XG4gIElURVJBVE9SKDc2LCA4NSwgUyk7XG4gIElURVJBVE9SKDI4NiwgMjk1LCBTKTtcbiAgSVRFUkFUT1IoMzU2LCAzNjUsIFMpO1xuICBJVEVSQVRPUig1NjYsIDU3NSwgUyk7XG4gIElURVJBVE9SKDYzNiwgNjQ1LCBTKTtcblxuICBjb25zdCBUMSA9IFNUQVJULnQxO1xuICBJVEVSQVRPUigxOCwgMjcsIFQxKTtcbiAgSVRFUkFUT1IoODgsIDk3LCBUMSk7XG5cbiAgY29uc3QgQSA9IFNUQVJULmE7XG4gIElURVJBVE9SKDMwLCAzOSwgQSk7XG4gIElURVJBVE9SKDEwMCwgMTA5LCBBKTtcbiAgSVRFUkFUT1IoMzEwLCAzMTksIEEpO1xuICBJVEVSQVRPUigzODAsIDM4OSwgQSk7XG5cbiAgY29uc3QgUiA9IFNUQVJULnI7XG4gIElURVJBVE9SKDQyLCA0OSwgUik7XG4gIElURVJBVE9SKDExMiwgMTE5LCBSKTtcbiAgSVRFUkFUT1IoMzIyLCAzMjksIFIpO1xuICBJVEVSQVRPUigzOTIsIDM5OSwgUik7XG5cbiAgY29uc3QgVDIgPSBTVEFSVC50MjtcbiAgSVRFUkFUT1IoNTQsIDYzLCBUMik7XG4gIElURVJBVE9SKDEyNCwgMTMzLCBUMik7XG5cbiAgZm9yIChsZXQgbGV0dGVyIGluIFNUQVJUKSB7XG4gICAgaWYgKGxldHRlciA9PT0gJ2FsbCcpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBTVEFSVFtsZXR0ZXJdLm1hcCgobnVtYmVyKSA9PiB7XG4gICAgICBTVEFSVC5hbGwucHVzaChudW1iZXIpO1xuICAgIH0pO1xuICB9XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgU1RBUlQ7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbiNic19oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQwLCAxZnIpO1xcbiAgaGVpZ2h0OiA0MGVtO1xcbiAgd2lkdGg6IDcwZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDg2LCAxNTApO1xcbn1cXG5cXG4jc3RhcnRfYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDEwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuLnRpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDEzMiwgMjU1LCAyMyk7XFxufVxcblxcbi50aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnN0YXJ0X3RleHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9ob21lcGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbiNic19oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQwLCAxZnIpO1xcbiAgaGVpZ2h0OiA0MGVtO1xcbiAgd2lkdGg6IDcwZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDg2LCAxNTApO1xcbn1cXG5cXG4jc3RhcnRfYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDEwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuLnRpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDEzMiwgMjU1LCAyMyk7XFxufVxcblxcbi50aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnN0YXJ0X3RleHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy91aS9ob21lcGFnZS9ob21lcGFnZS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgZ2FtZWxvb3AgZnJvbSAnLi9jb21wb25lbnRzL2dhbWUvR0FNRV9MT09QLmpzJztcbmltcG9ydCBob21lcGFnZSBmcm9tICcuL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaG9tZXBhZ2UuanMnO1xuXG5jb25zdCBHQU1FID0gZ2FtZWxvb3AoKTtcbmhvbWVwYWdlKCk7XG4iXSwibmFtZXMiOlsiR2FtZWJvYXJkIiwiUGxheWVyIiwiZ2FtZWxvb3AiLCJQTEFZRVIxIiwiUExBWUVSMiIsIlBMQVlFUjFfR0FNRUJPQVJEIiwiUExBWUVSMl9HQU1FQk9BUkQiLCJtYXAiLCJib2FyZCIsInBsYWNlX3NoaXAiLCJTaGlwIiwiY2FycmllciIsInBvc2l0aW9uIiwic2hpcCIsImJhdHRsZXNoaXAiLCJkZXN0cm95ZXIiLCJzdWIiLCJwYXRyb2xCb2F0IiwiaW5wdXRfY29vcmRpbmF0ZXMiLCJzaGlwcyIsImlucHV0X2Nvb3JkaW5hdGUiLCJtaXNzIiwiV0FTX0hJVCIsImluY2x1ZGVzIiwiaGl0cyIsIkhJVF9JTkRFWCIsImluZGV4T2YiLCJoaXQiLCJtaXNzZXMiLCJpc19hbGxfc3VuayIsImFsbF9zdW5rX2NhbGwiLCJpc19zdW5rIiwic29ydCIsInBsYXllciIsIkxFVFRFUlMiLCJsZXR0ZXIiLCJpIiwiRXJyb3IiLCJDT09SRElOQVRFIiwicmVtYWluaW5nX21vdmVzIiwibW92ZXMiLCJyZWNlaXZlX2F0dGFjayIsImNvb3JkaW5hdGUiLCJGSUxURVJFRF9NT1ZFUyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIlJFTUFJTklOR19NT1ZFU19DT1BZIiwiUkVNQUlOSU5HIiwiZmlsdGVyIiwicmVtYWluaW5nX21vdmUiLCJBcnJheSIsImZpbGwiLCJwb3NpdGlvbl9oaXQiLCJldmVyeSIsImhpdHNfYXJyYXkiLCJISVRTIiwiU1RBUlQiLCJjb2xvcl9zdGFydF90aWxlcyIsIkFMTF9USUxFUyIsImZyb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0aWxlIiwiSUQiLCJpZCIsInNsaWNlIiwiQ09MT1JFRCIsImFsbCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlbmRlcl90aWxlcyIsImhvbWVwYWdlIiwiTUFJTiIsImNyZWF0ZUVsZW1lbnQiLCJIRUFESU5HIiwiVElMRSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhcHBlbmQiLCJib2R5IiwicyIsInQxIiwiYSIsInIiLCJ0MiIsIklURVJBVE9SIiwibWluIiwibWF4IiwidGFyZ2V0X2FycmF5IiwicHVzaCIsImV6X2xvYWRlciIsIlMiLCJUMSIsIkEiLCJSIiwiVDIiLCJudW1iZXIiLCJHQU1FIl0sInNvdXJjZVJvb3QiOiIifQ==