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
  var PLAYER1 = new _player_js__WEBPACK_IMPORTED_MODULE_1__["default"]('human');
  var PLAYER2 = new _player_js__WEBPACK_IMPORTED_MODULE_1__["default"]('ai');
  var PLAYER1_GAMEBOARD = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var PLAYER2_GAMEBOARD = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  return {
    PLAYER1: PLAYER1,
    PLAYER2: PLAYER2,
    PLAYER1_GAMEBOARD: PLAYER1_GAMEBOARD,
    PLAYER2_GAMEBOARD: PLAYER2_GAMEBOARD
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

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



var _miss_reducer = /*#__PURE__*/new WeakSet();

var _hit_reducer = /*#__PURE__*/new WeakSet();

var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    _classCallCheck(this, Gameboard);

    _classPrivateMethodInitSpec(this, _hit_reducer);

    _classPrivateMethodInitSpec(this, _miss_reducer);

    _defineProperty(this, "ships", {
      carrier: {
        position: [],
        ship: new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](5)
      },
      battleship: {
        position: [],
        ship: new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](4)
      },
      destroyer: {
        position: [],
        ship: new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](3)
      },
      sub: {
        position: [],
        ship: new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](3)
      },
      patrolBoat: {
        position: [],
        ship: new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](2)
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

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

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

    _classPrivateMethodInitSpec(this, _attack_reducer);

    _classPrivateMethodInitSpec(this, _filter_remaining_moves);

    _classPrivateMethodInitSpec(this, _ai_move);

    _classPrivateMethodInitSpec(this, _remaining_moves_reducer);

    _defineProperty(this, "moves", []);

    _defineProperty(this, "remaining_moves", []);

    _classPrivateFieldInitSpec(this, _fill_remaining_moves, {
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

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _hit_reducer = /*#__PURE__*/new WeakSet();

var Ship = /*#__PURE__*/function () {
  function Ship(length) {
    _classCallCheck(this, Ship);

    _classPrivateMethodInitSpec(this, _hit_reducer);

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

/***/ "./src/components/ui/game_boards/helpers/render_background_tiles.js":
/*!**************************************************************************!*\
  !*** ./src/components/ui/game_boards/helpers/render_background_tiles.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render_background_tiles)
/* harmony export */ });
function render_background_tiles() {
  var MAIN = document.createElement('main');
  var CLASSES = ['blue1', 'blue2', 'blue3', 'blue4', 'blue5', 'blue6', 'blue7', 'blue8', 'blue9', 'blue10', 'green1'];
  MAIN.id = 'game_boards';

  for (var i = 0; i < 3500; i++) {
    var RANDOM_NUMBER = Math.floor(Math.random() * 11);
    var TILE = document.createElement('div');
    TILE.classList.add(CLASSES[RANDOM_NUMBER]);
    MAIN.append(TILE);
  }

  document.body.append(MAIN);
}

/***/ }),

/***/ "./src/components/ui/game_boards/helpers/render_tiles.js":
/*!***************************************************************!*\
  !*** ./src/components/ui/game_boards/helpers/render_tiles.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render_tiles)
/* harmony export */ });
/* harmony import */ var _render_background_tiles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render_background_tiles.js */ "./src/components/ui/game_boards/helpers/render_background_tiles.js");

function render_tiles() {
  (0,_render_background_tiles_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/***/ }),

/***/ "./src/components/ui/game_boards/render_game_boards.js":
/*!*************************************************************!*\
  !*** ./src/components/ui/game_boards/render_game_boards.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render_game_boards)
/* harmony export */ });
/* harmony import */ var _helpers_render_tiles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/render_tiles.js */ "./src/components/ui/game_boards/helpers/render_tiles.js");

function render_game_boards() {
  (0,_helpers_render_tiles_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/***/ }),

/***/ "./src/components/ui/homepage/helpers/animations.js":
/*!**********************************************************!*\
  !*** ./src/components/ui/homepage/helpers/animations.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANIMATIONS": () => (/* binding */ ANIMATIONS)
/* harmony export */ });
var ANIMATIONS = function () {
  var PERISCOPE_SPINNER = function PERISCOPE_SPINNER() {
    var LEFT_TILE = document.getElementById(759);
    var RIGHT_TILE = document.getElementById(761);
    LEFT_TILE.classList.add('periscope_off');
    RIGHT_TILE.classList.add('periscope_on');
    LEFT_TILE.classList.remove('water');
    RIGHT_TILE.classList.remove('water');

    if (LEFT_TILE.classList.value.includes('on')) {
      LEFT_TILE.classList.add('periscope_off');
      RIGHT_TILE.classList.add('periscope_on');
      LEFT_TILE.classList.remove('periscope_on');
      RIGHT_TILE.classList.remove('periscope_off');
    } else {
      LEFT_TILE.classList.add('periscope_on');
      RIGHT_TILE.classList.add('periscope_off');
      LEFT_TILE.classList.remove('periscope_off');
      RIGHT_TILE.classList.remove('periscope_on');
    }
  };

  var RADAR_SPINNER1 = function RADAR_SPINNER1() {
    var LEFT_TILE = document.getElementById(714);
    var RIGHT_TILE = document.getElementById(716);
    LEFT_TILE.classList.add('radar_off');
    RIGHT_TILE.classList.add('radar_off');
    LEFT_TILE.classList.remove('water');
    RIGHT_TILE.classList.remove('water');

    if (LEFT_TILE.classList.value.includes('on')) {
      LEFT_TILE.classList.add('radar_off');
      RIGHT_TILE.classList.add('radar_off');
      LEFT_TILE.classList.remove('radar_on');
      RIGHT_TILE.classList.remove('radar_on');
    } else {
      LEFT_TILE.classList.add('radar_on');
      RIGHT_TILE.classList.add('radar_on');
      LEFT_TILE.classList.remove('radar_off');
      RIGHT_TILE.classList.remove('radar_off');
    }
  };

  var RADAR_SPINNER2 = function RADAR_SPINNER2() {
    var LEFT_TILE = document.getElementById(1097);
    var RIGHT_TILE = document.getElementById(1099);
    LEFT_TILE.classList.add('radar_off');
    RIGHT_TILE.classList.add('radar_off');
    LEFT_TILE.classList.remove('water');
    RIGHT_TILE.classList.remove('water');

    if (LEFT_TILE.classList.value.includes('on')) {
      LEFT_TILE.classList.add('radar_off');
      RIGHT_TILE.classList.add('radar_off');
      LEFT_TILE.classList.remove('radar_on');
      RIGHT_TILE.classList.remove('radar_on');
    } else {
      LEFT_TILE.classList.add('radar_on');
      RIGHT_TILE.classList.add('radar_on');
      LEFT_TILE.classList.remove('radar_off');
      RIGHT_TILE.classList.remove('radar_off');
    }
  };

  var SUB_ANIMATION = setInterval(PERISCOPE_SPINNER, 1000);
  var BOAT1 = setInterval(RADAR_SPINNER1, 1000);
  var BOAT2 = setInterval(RADAR_SPINNER2, 1500);
  return {
    SUB_ANIMATION: SUB_ANIMATION,
    BOAT1: BOAT1,
    BOAT2: BOAT2
  };
}();



/***/ }),

/***/ "./src/components/ui/homepage/helpers/battleship_tiles.js":
/*!****************************************************************!*\
  !*** ./src/components/ui/homepage/helpers/battleship_tiles.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/components/ui/homepage/helpers/helpers.js");

var BATTLESHIP = {
  B: [150, 154, 220, 224, 360, 364, 430, 436, 434],
  A: [156, 159, 226, 229, 366, 369, 436, 439, 506, 509],
  T1: [162, 163, 232, 233, 302, 303, 372, 373, 442, 443, 512, 513],
  T2: [167, 168, 237, 238, 307, 308, 377, 378, 447, 448, 517, 518],
  L: [101, 171, 241, 311, 381, 451],
  E: [176, 246, 386, 456],
  S: [181, 251, 394, 464],
  H: [116, 119, 186, 189, 256, 259, 396, 399, 466, 469, 536, 539],
  I: [192, 193, 262, 263, 332, 333, 402, 403, 472, 473],
  P: [196, 199, 266, 269, 406, 476, 546]
};

(function ez_loader() {
  var B = BATTLESHIP.B;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(80, 84, B);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(290, 294, B);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(500, 504, B);
  var A = BATTLESHIP.A;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(86, 89, A);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(296, 299, A);
  var T1 = BATTLESHIP.T1;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(91, 94, T1);
  var T2 = BATTLESHIP.T2;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(96, 99, T2);
  var L = BATTLESHIP.L;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(521, 524, L);
  var E = BATTLESHIP.E;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(106, 109, E);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(316, 318, E);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(526, 529, E);
  var S = BATTLESHIP.S;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(111, 114, S);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(321, 324, S);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(531, 534, S);
  var H = BATTLESHIP.H;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(326, 329, H);
  var I = BATTLESHIP.I;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(121, 124, I);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(541, 544, I);
  var P = BATTLESHIP.P;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(126, 129, P);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(336, 339, P);
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BATTLESHIP);

/***/ }),

/***/ "./src/components/ui/homepage/helpers/color_battleship_tiles.js":
/*!**********************************************************************!*\
  !*** ./src/components/ui/homepage/helpers/color_battleship_tiles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ color_battleship_tiles)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/components/ui/homepage/helpers/helpers.js");
/* harmony import */ var _battleship_tiles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battleship_tiles.js */ "./src/components/ui/homepage/helpers/battleship_tiles.js");


function color_battleship_tiles() {
  for (var letter in _battleship_tiles_js__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.EZ_TILE_COLORIZER)(_battleship_tiles_js__WEBPACK_IMPORTED_MODULE_1__["default"][letter], 'title');
  }
}

/***/ }),

/***/ "./src/components/ui/homepage/helpers/color_ship_tiles.js":
/*!****************************************************************!*\
  !*** ./src/components/ui/homepage/helpers/color_ship_tiles.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ color_ship_tiles)
/* harmony export */ });
/* harmony import */ var _ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship_tiles.js */ "./src/components/ui/homepage/helpers/ship_tiles.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./src/components/ui/homepage/helpers/helpers.js");


function color_ship_tiles() {
  (function carrier() {
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.CARRIER.black_outline, 'ship_hull_outline');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.CARRIER.hull, 'ship_hull');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.CARRIER.dark_gray, 'dark_gray');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.CARRIER.light_gray, 'light_gray');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.CARRIER.ship_light, 'ship_light');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.CARRIER.surrounding_water_dark, 'surrounding_water_dark');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.CARRIER.surrounding_water_light, 'surrounding_water_light');
    var C = document.getElementById(1795);
    var V = document.getElementById(1796);
    var N = document.getElementById(1797);
    var SIX = document.getElementById(1799);
    var NINE = document.getElementById(1800);
    var U = document.getElementById(2349);
    var S = document.getElementById(2350);
    var N2 = document.getElementById(2352);
    var A = document.getElementById(2353);
    var V2 = document.getElementById(2354);
    var Y = document.getElementById(2355);
    var ALL = [C, V, N, SIX, NINE, U, S, N2, A, V2, Y];
    ALL.map(function (tile) {
      tile.classList.add('ship_text');
    });
    C.innerText = 'C';
    V.innerText = 'V';
    N.innerText = 'N';
    SIX.innerText = '6';
    NINE.innerText = '9';
    U.innerText = 'U';
    S.innerText = 'S';
    N2.innerText = 'N';
    A.innerText = 'A';
    V2.innerText = 'V';
    Y.innerText = 'Y';
  })();

  (function destroyer() {
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.DESTROYER.black_outline, 'ship_hull_outline');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.DESTROYER.hull, 'ship_hull');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.DESTROYER.light_gray, 'light_gray');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.DESTROYER.dark_gray, 'dark_gray');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.DESTROYER.ship_light, 'ship_light');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.DESTROYER.surrounding_water_dark, 'surrounding_water_dark');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.DESTROYER.surrounding_water_light, 'surrounding_water_light');
    var U = document.getElementById(1550);
    var S = document.getElementById(1551);
    var N = document.getElementById(1553);
    var A = document.getElementById(1554);
    var V = document.getElementById(1555);
    var Y = document.getElementById(1556);
    var ALL = [U, S, N, A, V, Y];
    ALL.map(function (tile) {
      tile.classList.add('ship_text');
    });
    U.innerText = 'U';
    S.innerText = 'S';
    N.innerText = 'N';
    A.innerText = 'A';
    V.innerText = 'V';
    Y.innerText = 'Y';
  })();

  (function submarine() {
    // EZ_TILE_COLORIZER(SUBMARINE.hull, 'sub');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.SUBMARINE.dark_gray, 'dark_gray');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.SUBMARINE.left_periscope, 'periscope_on');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.SUBMARINE.right_periscope, 'periscope_off');
  })();
}

/***/ }),

/***/ "./src/components/ui/homepage/helpers/color_start_tiles.js":
/*!*****************************************************************!*\
  !*** ./src/components/ui/homepage/helpers/color_start_tiles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ color_start_tiles)
/* harmony export */ });
/* harmony import */ var _start_tiles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start_tiles.js */ "./src/components/ui/homepage/helpers/start_tiles.js");

function color_start_tiles() {
  var ALL = _start_tiles_js__WEBPACK_IMPORTED_MODULE_0__["default"].all;
  ALL.map(function (tile_id) {
    var TILE = document.getElementById("start_".concat(tile_id));
    TILE.classList.remove('start_background');
    TILE.classList.add('start_text');
  });
}

/***/ }),

/***/ "./src/components/ui/homepage/helpers/color_water_tiles.js":
/*!*****************************************************************!*\
  !*** ./src/components/ui/homepage/helpers/color_water_tiles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ color_water_tiles)
/* harmony export */ });
function color_water_tiles() {
  var CLASSES = ['blue1', 'blue2', 'blue3', 'blue4', 'blue5', 'blue6', 'blue7', 'blue8', 'blue9', 'blue10', 'green1'];
  var WATER_TILES = Array.from(document.getElementsByClassName('water'));
  WATER_TILES.map(function (tile) {
    var RANDOM_NUMBER = Math.floor(Math.random() * 11);
    tile.classList.add(CLASSES[RANDOM_NUMBER]);
  });
}

/***/ }),

/***/ "./src/components/ui/homepage/helpers/helpers.js":
/*!*******************************************************!*\
  !*** ./src/components/ui/homepage/helpers/helpers.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITERATOR": () => (/* binding */ ITERATOR),
/* harmony export */   "EZ_TILE_COLORIZER": () => (/* binding */ EZ_TILE_COLORIZER)
/* harmony export */ });
var ITERATOR = function ITERATOR(min, max, target_array) {
  for (var i = min; i < max + 1; i++) {
    target_array.push(i);
  }
};

var EZ_TILE_COLORIZER = function EZ_TILE_COLORIZER(input_array, input_class) {
  input_array.map(function (tile_id) {
    var TILE = document.getElementById(tile_id);
    TILE.classList.remove('water');
    TILE.classList.add('ship');
    TILE.classList.add(input_class);
  });
};



/***/ }),

/***/ "./src/components/ui/homepage/helpers/listeners_handlers.js":
/*!******************************************************************!*\
  !*** ./src/components/ui/homepage/helpers/listeners_handlers.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listeners_handlers)
/* harmony export */ });
/* harmony import */ var _animations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations.js */ "./src/components/ui/homepage/helpers/animations.js");
/* harmony import */ var _place_ships_place_ships_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../place_ships/place_ships.js */ "./src/components/ui/place_ships/place_ships.js");


function listeners_handlers() {
  var START_BUTTON = document.getElementById('start_button');

  var START_BUTTON_ENTER_HANDLER = function START_BUTTON_ENTER_HANDLER() {
    var START_BUTTON_BACKGROUND_TILES = Array.from(document.getElementsByClassName('start_background'));
    START_BUTTON_BACKGROUND_TILES.map(function (tile) {
      tile.classList.add('start_background_hovered');
      tile.classList.remove('start_background');
    });
    var START_BUTTON_TEXT_TILES = Array.from(document.getElementsByClassName('start_text'));
    START_BUTTON_TEXT_TILES.map(function (tile) {
      tile.classList.add('start_text_hovered');
      tile.classList.remove('start_text');
    });
  };

  var START_BUTTON_LEAVE_HANDLER = function START_BUTTON_LEAVE_HANDLER() {
    var START_BUTTON_BACKGROUND_TILES = Array.from(document.getElementsByClassName('start_background_hovered'));
    START_BUTTON_BACKGROUND_TILES.map(function (tile) {
      tile.classList.add('start_background');
      tile.classList.remove('start_background_hovered');
    });
    var START_BUTTON_TEXT_TILES = Array.from(document.getElementsByClassName('start_text_hovered'));
    START_BUTTON_TEXT_TILES.map(function (tile) {
      tile.classList.add('start_text');
      tile.classList.remove('start_text_hovered');
    });
  };

  var START_BUTTON_CLICK_HANDLER = function START_BUTTON_CLICK_HANDLER() {
    for (var interval in _animations_js__WEBPACK_IMPORTED_MODULE_0__.ANIMATIONS) {
      var INTERVAL = _animations_js__WEBPACK_IMPORTED_MODULE_0__.ANIMATIONS[interval];
      clearInterval(INTERVAL);
    }

    document.getElementById('landing_page').remove();
    (0,_place_ships_place_ships_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  };

  START_BUTTON.addEventListener('mouseenter', START_BUTTON_ENTER_HANDLER);
  START_BUTTON.addEventListener('mouseleave', START_BUTTON_LEAVE_HANDLER);
  START_BUTTON.addEventListener('click', START_BUTTON_CLICK_HANDLER);
}

/***/ }),

/***/ "./src/components/ui/homepage/helpers/render_tiles.js":
/*!************************************************************!*\
  !*** ./src/components/ui/homepage/helpers/render_tiles.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render_tiles)
/* harmony export */ });
function render_tiles() {
  var MAIN = document.createElement('main');
  var HEADING = document.createElement('div');
  var START = document.createElement('div');
  MAIN.id = 'landing_page';
  HEADING.id = 'bs_heading';
  START.id = 'start_button';

  for (var i = 0; i < 2800; i++) {
    var TILE = document.createElement('div');
    TILE.id = i;
    TILE.classList = 'homepeage_tile water';
    HEADING.append(TILE);
  }

  for (var _i = 0; _i < 700; _i++) {
    var _TILE = document.createElement('div');

    _TILE.id = "start_".concat(_i);
    _TILE.classList = 'tile start start_background';
    START.append(_TILE);
  }

  MAIN.append(HEADING);
  MAIN.append(START);
  document.body.append(MAIN);
}

/***/ }),

/***/ "./src/components/ui/homepage/helpers/ship_tiles.js":
/*!**********************************************************!*\
  !*** ./src/components/ui/homepage/helpers/ship_tiles.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CARRIER": () => (/* binding */ CARRIER),
/* harmony export */   "DESTROYER": () => (/* binding */ DESTROYER),
/* harmony export */   "SUBMARINE": () => (/* binding */ SUBMARINE)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/components/ui/homepage/helpers/helpers.js");

var CARRIER = {
  black_outline: [1446, 1450, 1516, 1520, 1586, 1590, 1723, 1733, 1803, 1859, 1873, 1877, 1928, 1943, 1946, 1948, 1955, 1956, 1982, 1983, 1987, 1988, 1992, 1993, 1998, 2013, 2026, 2052, 2054, 2055, 2057, 2059, 2060, 2062, 2064, 2065, 2068, 2083, 2085, 2089, 2091, 2094, 2095, 2123, 2125, 2128, 2130, 2133, 2135, 2138, 2153, 2155, 2159, 2161, 2165, 2260, 2261, 2262, 2309, 2332, 2333, 2334, 2379, 2404, 2448, 2475, 2517, 2546, 2586, 2617, 2656, 2687, 2726],
  hull: [1519, 1939, 1940, 2079, 2080, 2688, 2689, 2692, 2693, 2696, 2697, 2700, 2701, 2704, 2705, 2708, 2709, 2712, 2713, 2716, 2717, 2720, 2721, 2724, 2725],
  dark_gray: [1168, 1238, 1308, 1517, 1518, 1929, 1930, 1941, 1942, 1947, 2025, 2053, 2058, 2063, 2069, 2070, 2081, 2082, 2124, 2129, 2134, 2092, 2093],
  light_gray: [1097, 1099],
  ship_light: [1098],
  surrounding_water_dark: [2545, 2616, 2686, 2690, 2691, 2694, 2695, 2698, 2699, 2702, 2703, 2706, 2707, 2710, 2711, 2714, 2715, 2718, 2719, 2722, 2723, 2587, 2657, 2727, 2449, 2518, 2519, 2588, 2658],
  surrounding_water_light: [2589, 2615, 2659, 2684, 2685, 2728, 2729, 2753, 2754, 2755, 2798, 2799]
};
var DESTROYER = {
  black_outline: [1194, 1198, 1211, 1265, 1269, 1280, 1474, 1491, 1492, 1545, 1561, 1616, 1631, 1687, 1701],
  hull: [1688, 1691, 1692, 1695, 1696, 1699, 1700],
  dark_gray: [785, 855, 925, 995, 1266, 1270, 1273, 1274, 1276, 1279],
  light_gray: [714, 716, 1133, 1137, 1272, 1275, 1277],
  ship_light: [715],
  surrounding_water_dark: [1689, 1690, 1693, 1694, 1697, 1698],
  surrounding_water_light: [1632, 1685, 1686, 1702, 1703, 1754, 1755, 1773, 1774]
};
var SUBMARINE = {
  hull: [],
  dark_gray: [760, 830, 900],
  left_periscope: [759],
  right_periscope: [761]
};

(function carrier_ez_loader() {
  var OUTLINE = CARRIER.black_outline;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1376, 1380, OUTLINE);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1653, 1663, OUTLINE);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1790, 1793, OUTLINE);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2015, 2019, OUTLINE);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2022, 2024, OUTLINE);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2190, 2239, OUTLINE);
  var HULL = CARRIER.hull;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1447, 1449, HULL);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1587, 1589, HULL);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1724, 1732, HULL);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1794, 1802, HULL);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1860, 1872, HULL);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1931, 1934, HULL);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1999, 2012, HULL);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2071, 2074, HULL);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2139, 2152, HULL);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2263, 2308, HULL);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2335, 2378, HULL);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2405, 2447, HULL);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2476, 2516, HULL);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2547, 2585, HULL);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2618, 2655, HULL);
  var DARK_GRAY = CARRIER.dark_gray;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1134, 1136, DARK_GRAY);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2086, 2088, DARK_GRAY);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2156, 2158, DARK_GRAY);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2162, 2164, DARK_GRAY);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1935, 1938, DARK_GRAY);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2075, 2078, DARK_GRAY);
  var LIGHT_GRAY = CARRIER.light_gray;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2335, 2378, LIGHT_GRAY);
  var SURROUNDING_WATER_DARK = CARRIER.surrounding_water_dark;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(2756, 2797, SURROUNDING_WATER_DARK);
})();

(function destroyer_ez_loader() {
  var OUTLINE = DESTROYER.black_outline;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1403, 1422, OUTLINE);
  var HULL = DESTROYER.hull;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1475, 1490, HULL);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1617, 1630, HULL);
  var LIGHT_GRAY = DESTROYER.light_gray;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1546, 1560, LIGHT_GRAY);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1063, 1067, LIGHT_GRAY);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1202, 1207, LIGHT_GRAY);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1342, 1347, LIGHT_GRAY);
  var DARK_GRAY = DESTROYER.dark_gray;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1334, 1336, DARK_GRAY);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1338, 1340, DARK_GRAY);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1349, 1351, DARK_GRAY);
  var SURROUNDING_WATER_DARK = DESTROYER.surrounding_water_dark;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(1756, 1772, SURROUNDING_WATER_DARK);
})();



/***/ }),

/***/ "./src/components/ui/homepage/helpers/start_tiles.js":
/*!***********************************************************!*\
  !*** ./src/components/ui/homepage/helpers/start_tiles.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/components/ui/homepage/helpers/helpers.js");

var START = {
  s: [221, 222, 437, 438],
  t1: [234, 235, 304, 305, 374, 375, 444, 445, 514, 515, 584, 585],
  a: [241, 242, 247, 248, 451, 452, 457, 458, 521, 522, 527, 528, 591, 592, 597, 598],
  r: [251, 252, 257, 258, 461, 462, 467, 468, 531, 532, 537, 538, 601, 602, 607, 608],
  t2: [264, 265, 334, 335, 404, 405, 474, 475, 544, 545, 614, 615],
  all: []
};

(function ez_loader() {
  var S = START.s;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(81, 88, S);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(151, 158, S);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(291, 298, S);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(361, 368, S);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(501, 508, S);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(571, 578, S);
  var T1 = START.t1;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(91, 98, T1);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(161, 168, T1);
  var A = START.a;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(101, 108, A);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(171, 178, A);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(311, 318, A);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(381, 388, A);
  var R = START.r;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(111, 116, R);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(181, 186, R);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(321, 326, R);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(391, 396, R);
  var T2 = START.t2;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(121, 128, T2);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(191, 198, T2);

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

/***/ "./src/components/ui/homepage/homepage.js":
/*!************************************************!*\
  !*** ./src/components/ui/homepage/homepage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homepage)
/* harmony export */ });
/* harmony import */ var _helpers_render_tiles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/render_tiles.js */ "./src/components/ui/homepage/helpers/render_tiles.js");
/* harmony import */ var _helpers_color_start_tiles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/color_start_tiles.js */ "./src/components/ui/homepage/helpers/color_start_tiles.js");
/* harmony import */ var _helpers_color_ship_tiles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/color_ship_tiles.js */ "./src/components/ui/homepage/helpers/color_ship_tiles.js");
/* harmony import */ var _helpers_color_battleship_tiles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/color_battleship_tiles.js */ "./src/components/ui/homepage/helpers/color_battleship_tiles.js");
/* harmony import */ var _helpers_color_water_tiles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/color_water_tiles.js */ "./src/components/ui/homepage/helpers/color_water_tiles.js");
/* harmony import */ var _helpers_listeners_handlers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/listeners_handlers.js */ "./src/components/ui/homepage/helpers/listeners_handlers.js");






function homepage() {
  (0,_helpers_render_tiles_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_helpers_color_start_tiles_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_helpers_color_ship_tiles_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_helpers_color_battleship_tiles_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_helpers_color_water_tiles_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_helpers_listeners_handlers_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
}

/***/ }),

/***/ "./src/components/ui/place_ships/helpers/coordinates.js":
/*!**************************************************************!*\
  !*** ./src/components/ui/place_ships/helpers/coordinates.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var COORDINATES = [];
var LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
LETTERS.map(function (letter) {
  NUMBERS.map(function (number) {
    COORDINATES.push("".concat(letter).concat(number));
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (COORDINATES);

/***/ }),

/***/ "./src/components/ui/place_ships/helpers/logic_listeners.js":
/*!******************************************************************!*\
  !*** ./src/components/ui/place_ships/helpers/logic_listeners.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ logic_listeners)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../index.js */ "./src/index.js");
/* harmony import */ var _place_ai_ships_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place_ai_ships.js */ "./src/components/ui/place_ships/helpers/place_ai_ships.js");
/* harmony import */ var _game_boards_render_game_boards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../game_boards/render_game_boards.js */ "./src/components/ui/game_boards/render_game_boards.js");



function logic_listeners() {
  var current_ship_index = 0;
  var orientation = 'horizontal';
  var SHIPS = ['carrier', 'battleship', 'destroyer', 'sub', 'patrolBoat'];
  var LENGTH = [5, 4, 3, 3, 2];
  var MAXS = {
    // vertical is using charcodes
    carrier: {
      horizontal: 5,
      vertical: 102 // f

    },
    battleship: {
      horizontal: 6,
      vertical: 103 // g

    },
    destroyer: {
      horizontal: 7,
      vertical: 104 // h

    },
    sub: {
      horizontal: 7,
      vertical: 104 // h

    },
    patrolBoat: {
      horizontal: 8,
      vertical: 105 // i

    }
  };

  var INBOUNDS_EVALUATOR = function INBOUNDS_EVALUATOR(id) {
    var value_to_compare = '';

    if (orientation === 'horizontal') {
      value_to_compare = id[1];
    }

    if (orientation === 'vertical') {
      value_to_compare = id.charCodeAt(0);
    }

    var MAX = MAXS[SHIPS[current_ship_index]][orientation];
    return value_to_compare <= MAX;
  };

  var SPACE_TAKEN_EVALUATOR = function SPACE_TAKEN_EVALUATOR(all_tiles) {
    var are_all_taken = true;
    var PLAYER1_SHIPS = _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.PLAYER1_GAMEBOARD.ships;

    var _loop = function _loop(ship) {
      var POSITIONS = PLAYER1_SHIPS[ship].position;
      all_tiles.map(function (tile) {
        if (POSITIONS.includes(tile)) {
          are_all_taken = false;
        }
      });
    };

    for (var ship in PLAYER1_SHIPS) {
      _loop(ship);
    }

    return are_all_taken;
  };

  var SUBSEQUENT_TILES = function SUBSEQUENT_TILES(id) {
    var LETTER_CHAR_CODE = id.charCodeAt(0);
    var NUMBER = id[1];
    var all = [];

    if (orientation === 'horizontal') {
      var STOP_AT = +NUMBER + LENGTH[current_ship_index];

      for (var i = NUMBER; i < STOP_AT; i++) {
        all.push("".concat(String.fromCharCode(LETTER_CHAR_CODE)).concat(i));
      }

      return all;
    }

    if (orientation === 'vertical') {
      var _STOP_AT = LETTER_CHAR_CODE + LENGTH[current_ship_index];

      for (var _i = LETTER_CHAR_CODE; _i < _STOP_AT; _i++) {
        all.push("".concat(String.fromCharCode(_i)).concat(NUMBER));
      }

      return all;
    }
  };

  var COLOR_TILES = function COLOR_TILES(coordinates) {
    coordinates.map(function (coordinate) {
      var TILE = document.getElementById(coordinate);
      TILE.classList.add('place_ship_hovered');
    });
  };

  var MOUSE_ENTER_HANDLER = function MOUSE_ENTER_HANDLER(event) {
    var ID = event.target.id;
    var INBOUNDS = INBOUNDS_EVALUATOR(ID);
    var ALL_COORDINATES = SUBSEQUENT_TILES(ID);
    var ARE_SUBSEQUENT_SPACES_FREE = SPACE_TAKEN_EVALUATOR(ALL_COORDINATES);

    if (!INBOUNDS || !ARE_SUBSEQUENT_SPACES_FREE) {
      event.target.classList.add('invalid_ship_placement');
      return;
    }

    COLOR_TILES(ALL_COORDINATES);
    event.target.classList.add('place_ship_hovered');
  };

  var MOUSE_LEAVE_HANDLER = function MOUSE_LEAVE_HANDLER(event) {
    var HOVERED_TILES = Array.from(document.getElementsByClassName('place_ship_hovered'));
    HOVERED_TILES.map(function (tile) {
      tile.classList.remove('place_ship_hovered');
    });
    event.target.classList.remove('invalid_ship_placement');
  };

  var MOUSE_CLICK_HANDLER = function MOUSE_CLICK_HANDLER(event) {
    var ID = event.target.id;
    var INBOUNDS = INBOUNDS_EVALUATOR(ID);
    var ALL_COORDINATES = SUBSEQUENT_TILES(ID);
    var ARE_SUBSEQUENT_SPACES_FREE = SPACE_TAKEN_EVALUATOR(ALL_COORDINATES);

    if (INBOUNDS && ARE_SUBSEQUENT_SPACES_FREE && current_ship_index < 5) {
      var CURRENT_SHIP = SHIPS[current_ship_index];
      _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.PLAYER1_GAMEBOARD.place_ship(CURRENT_SHIP, ALL_COORDINATES);
      ALL_COORDINATES.map(function (coordinate) {
        var TILE = document.getElementById(coordinate);
        TILE.classList.add('placed_tile');
      });
      current_ship_index = current_ship_index + 1; // todo - check if current ship index is 4 if so remove from dom and place enemy ships

      if (current_ship_index > 4) {
        var MAIN = document.getElementById('place_ships_main');
        MAIN.remove();
        (0,_place_ai_ships_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_game_boards_render_game_boards_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
      }
    }
  };

  var SPACE_BAR_HANDLER = function SPACE_BAR_HANDLER(event) {
    var KEY = event.key;

    if (KEY === ' ' && orientation === 'horizontal') {
      orientation = 'vertical';
      return;
    }

    if (KEY === ' ' && orientation === 'vertical') {
      orientation = 'horizontal';
      return;
    }
  };

  var TILES = Array.from(document.getElementsByClassName('place_ship_tile'));
  TILES.map(function (tile) {
    tile.addEventListener('mouseenter', MOUSE_ENTER_HANDLER);
    tile.addEventListener('mouseleave', MOUSE_LEAVE_HANDLER);
    tile.addEventListener('click', MOUSE_CLICK_HANDLER);
  });
  document.body.addEventListener('keyup', SPACE_BAR_HANDLER);
}

/***/ }),

/***/ "./src/components/ui/place_ships/helpers/place_ai_ships.js":
/*!*****************************************************************!*\
  !*** ./src/components/ui/place_ships/helpers/place_ai_ships.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ place_ai_ships)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../index.js */ "./src/index.js");

function place_ai_ships() {
  var current_ship_index = 0;
  var orientation = 'horizontal';
  var SHIPS = ['carrier', 'battleship', 'destroyer', 'sub', 'patrolBoat'];
  var LENGTH = [5, 4, 3, 3, 2];
  var INFO = {
    // vertical is using charcodes
    carrier: {
      max: 5,
      //horizontal
      coordinates: []
    },
    battleship: {
      max: 6,
      // vertical
      coordinates: []
    },
    destroyer: {
      max: 7,
      // horizontal
      coordinates: []
    },
    sub: {
      max: 7,
      // vertical
      coordinates: []
    },
    patrolBoat: {
      max: 8,
      // horizontal
      coordinates: []
    }
  };
  var ALL_COORDINATES = [];
  var LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  var ALL_TILES = function ALL_TILES(coordinate) {
    var LETTER_CHAR_CODE = coordinate.charCodeAt(0);
    var NUMBER = coordinate[1];
    var all = [];

    if (orientation === 'horizontal') {
      var STOP_AT = +NUMBER + LENGTH[current_ship_index];

      for (var i = NUMBER; i < STOP_AT; i++) {
        all.push("".concat(String.fromCharCode(LETTER_CHAR_CODE)).concat(i));
      }

      return all;
    }

    if (orientation === 'vertical') {
      var _STOP_AT = LETTER_CHAR_CODE + LENGTH[current_ship_index];

      for (var _i = LETTER_CHAR_CODE; _i < _STOP_AT; _i++) {
        all.push("".concat(String.fromCharCode(_i)).concat(NUMBER));
      }

      return all;
    }
  };

  var TOGGLE_ORIENTATION = function TOGGLE_ORIENTATION() {
    if (orientation === 'horizontal') {
      orientation = 'vertical';
    } else {
      orientation = 'horizontal';
    }
  };

  var ONE_RANDOM = function ONE_RANDOM() {
    if (orientation === 'horizontal') {
      var RANDOM_LETTER = LETTERS[Math.floor(Math.random() * 10)];
      var RANDOM_NUMBER = Math.floor(Math.random() * (INFO[SHIPS[current_ship_index]].max + 1));
      return RANDOM_LETTER + RANDOM_NUMBER;
    }

    if (orientation === 'vertical') {
      var _RANDOM_LETTER = LETTERS[Math.floor(Math.random() * (INFO[SHIPS[current_ship_index]].max + 1))];

      var _RANDOM_NUMBER = Math.floor(Math.random() * 10);

      return _RANDOM_LETTER + _RANDOM_NUMBER;
    }
  };

  var GET_MOVE = function GET_MOVE() {
    var RANDOM_COORDINATE = ONE_RANDOM();
    var ALL_COORDINATES = ALL_TILES(RANDOM_COORDINATE);
    return ALL_COORDINATES;
  };

  (function create_coordinates() {
    var _loop = function _loop(i) {
      var UNIQUE_MOVE = function UNIQUE_MOVE() {
        var unique = true;
        var MOVE = GET_MOVE();
        MOVE.map(function (coordinate) {
          if (ALL_COORDINATES.includes(coordinate)) {
            unique = false;
          }
        });

        if (unique === false) {
          UNIQUE_MOVE();
        }

        if (unique === true) {
          MOVE.map(function (coordinate) {
            INFO[SHIPS[current_ship_index]].coordinates.push(coordinate);
            ALL_COORDINATES.push(coordinate);
          });
        }
      };

      UNIQUE_MOVE();
      current_ship_index++;
      TOGGLE_ORIENTATION();
    };

    for (var i = 0; i < 5; i++) {
      _loop(i);
    }
  })();

  (function fill_ai_board() {
    for (var ship in INFO) {
      var SHIP_POSITIONS = INFO[ship].coordinates;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.PLAYER2_GAMEBOARD.place_ship(ship, SHIP_POSITIONS);
    }
  })();
}

/***/ }),

/***/ "./src/components/ui/place_ships/helpers/render_tiles.js":
/*!***************************************************************!*\
  !*** ./src/components/ui/place_ships/helpers/render_tiles.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render_tiles)
/* harmony export */ });
/* harmony import */ var _coordinates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinates */ "./src/components/ui/place_ships/helpers/coordinates.js");

function render_tiles() {
  var MAIN = document.createElement('main');
  var PLACE_SHIPS_CONTAINER = document.createElement('div');
  var INSTRUCTIONS_CONTAINER = document.createElement('div');
  var INSTRUCTIONS = document.createElement('p');
  var SPACE_KEY = document.createElement('kbd');
  var CLASSES = ['blue1', 'blue2', 'blue3', 'blue4', 'blue5', 'blue6', 'blue7', 'blue8', 'blue9', 'blue10', 'green1'];
  MAIN.id = 'place_ships_main';
  PLACE_SHIPS_CONTAINER.id = 'place_ships_container';
  INSTRUCTIONS_CONTAINER.id = 'instructions_container';
  INSTRUCTIONS.id = 'instructions';
  SPACE_KEY.id = 'bkd_space';
  INSTRUCTIONS.innerText = 'to rotate';
  SPACE_KEY.innerText = 'space';

  for (var i = 0; i < 3500; i++) {
    var RANDOM_NUMBER = Math.floor(Math.random() * 11);
    var TILE = document.createElement('div');
    TILE.classList.add('place_ships_background_tile');
    TILE.classList.add(CLASSES[RANDOM_NUMBER]);
    MAIN.append(TILE);
  }

  for (var _i = 0; _i < 100; _i++) {
    var _TILE = document.createElement('div');

    _TILE.id = _coordinates__WEBPACK_IMPORTED_MODULE_0__["default"][_i];

    _TILE.classList.add('place_ship_tile');

    PLACE_SHIPS_CONTAINER.append(_TILE);
  }

  document.body.append(MAIN);
  INSTRUCTIONS_CONTAINER.append(SPACE_KEY);
  INSTRUCTIONS_CONTAINER.append(INSTRUCTIONS);
  MAIN.append(PLACE_SHIPS_CONTAINER);
  MAIN.append(INSTRUCTIONS_CONTAINER);
}

/***/ }),

/***/ "./src/components/ui/place_ships/place_ships.js":
/*!******************************************************!*\
  !*** ./src/components/ui/place_ships/place_ships.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ place_ships)
/* harmony export */ });
/* harmony import */ var _helpers_render_tiles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/render_tiles.js */ "./src/components/ui/place_ships/helpers/render_tiles.js");
/* harmony import */ var _helpers_logic_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/logic_listeners.js */ "./src/components/ui/place_ships/helpers/logic_listeners.js");


function place_ships() {
  (0,_helpers_render_tiles_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_helpers_logic_listeners_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GAME": () => (/* binding */ GAME)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _components_game_GAME_LOOP_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/game/GAME_LOOP.js */ "./src/components/game/GAME_LOOP.js");
/* harmony import */ var _components_ui_homepage_homepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ui/homepage/homepage.js */ "./src/components/ui/homepage/homepage.js");



var GAME = (0,_components_game_GAME_LOOP_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_ui_homepage_homepage_js__WEBPACK_IMPORTED_MODULE_2__["default"])();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/game_boards/css/index.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/ui/game_boards/css/index.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#game_boards {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  height: 50em;\n  width: 70em;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/game_boards/css/index.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,WAAW;AACb","sourcesContent":["#game_boards {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  height: 50em;\n  width: 70em;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/animator.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/animator.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --opacity-00: 1;\n  --opacity-05: 0.98;\n  --opacity-10: 0.96;\n  --opacity-15: 0.94;\n  --opacity-20: 0.92;\n  --opacity-25: 0.9;\n  --opacity-30: 0.88;\n  --opacity-35: 0.86;\n  --opacity-40: 0.84;\n  --opacity-45: 0.82;\n  --opacity-50: 0.8;\n  --opacity-55: 0.82;\n  --opacity-60: 0.84;\n  --opacity-65: 0.86;\n  --opacity-70: 0.88;\n  --opacity-75: 0.9;\n  --opacity-80: 0.92;\n  --opacity-85: 0.94;\n  --opacity-90: 0.96;\n  --opacity-95: 0.98;\n  --opacity-100: 1;\n}\n\n@keyframes opacity {\n  0% {\n    opacity: var(--opacity-00);\n  }\n\n  5% {\n    opacity: var(--opacity-05);\n  }\n\n  10% {\n    opacity: var(--opacity-10);\n  }\n\n  15% {\n    opacity: var(--opacity-15);\n  }\n\n  20% {\n    opacity: var(--opacity-20);\n  }\n\n  25% {\n    opacity: var(--opacity-25);\n  }\n\n  30% {\n    opacity: var(--opacity-30);\n  }\n\n  35% {\n    opacity: var(--opacity-35);\n  }\n\n  40% {\n    opacity: var(--opacity-40);\n  }\n\n  45% {\n    opacity: var(--opacity-45);\n  }\n\n  50% {\n    opacity: var(--opacity-50);\n  }\n\n  55% {\n    opacity: var(--opacity-55);\n  }\n\n  60% {\n    opacity: var(--opacity-60);\n  }\n\n  65% {\n    opacity: var(--opacity-65);\n  }\n\n  70% {\n    opacity: var(--opacity-70);\n  }\n\n  75% {\n    opacity: var(--opacity-75);\n  }\n\n  80% {\n    opacity: var(--opacity-80);\n  }\n\n  85% {\n    opacity: var(--opacity-85);\n  }\n\n  90% {\n    opacity: var(--opacity-90);\n  }\n\n  95% {\n    opacity: var(--opacity-95);\n  }\n\n  100% {\n    opacity: var(--opacity-100);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/homepage/css/animator.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,2BAA2B;EAC7B;AACF","sourcesContent":[":root {\n  --opacity-00: 1;\n  --opacity-05: 0.98;\n  --opacity-10: 0.96;\n  --opacity-15: 0.94;\n  --opacity-20: 0.92;\n  --opacity-25: 0.9;\n  --opacity-30: 0.88;\n  --opacity-35: 0.86;\n  --opacity-40: 0.84;\n  --opacity-45: 0.82;\n  --opacity-50: 0.8;\n  --opacity-55: 0.82;\n  --opacity-60: 0.84;\n  --opacity-65: 0.86;\n  --opacity-70: 0.88;\n  --opacity-75: 0.9;\n  --opacity-80: 0.92;\n  --opacity-85: 0.94;\n  --opacity-90: 0.96;\n  --opacity-95: 0.98;\n  --opacity-100: 1;\n}\n\n@keyframes opacity {\n  0% {\n    opacity: var(--opacity-00);\n  }\n\n  5% {\n    opacity: var(--opacity-05);\n  }\n\n  10% {\n    opacity: var(--opacity-10);\n  }\n\n  15% {\n    opacity: var(--opacity-15);\n  }\n\n  20% {\n    opacity: var(--opacity-20);\n  }\n\n  25% {\n    opacity: var(--opacity-25);\n  }\n\n  30% {\n    opacity: var(--opacity-30);\n  }\n\n  35% {\n    opacity: var(--opacity-35);\n  }\n\n  40% {\n    opacity: var(--opacity-40);\n  }\n\n  45% {\n    opacity: var(--opacity-45);\n  }\n\n  50% {\n    opacity: var(--opacity-50);\n  }\n\n  55% {\n    opacity: var(--opacity-55);\n  }\n\n  60% {\n    opacity: var(--opacity-60);\n  }\n\n  65% {\n    opacity: var(--opacity-65);\n  }\n\n  70% {\n    opacity: var(--opacity-70);\n  }\n\n  75% {\n    opacity: var(--opacity-75);\n  }\n\n  80% {\n    opacity: var(--opacity-80);\n  }\n\n  85% {\n    opacity: var(--opacity-85);\n  }\n\n  90% {\n    opacity: var(--opacity-90);\n  }\n\n  95% {\n    opacity: var(--opacity-95);\n  }\n\n  100% {\n    opacity: var(--opacity-100);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/global.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/global.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  justify-content: center;\n  background-color: black;\n  cursor: none;\n}\n\nmain {\n  user-select: none;\n}\n\n.title {\n  background: black;\n}\n\n#bs_heading {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(40, 1fr);\n  height: 40em;\n  width: 70em;\n}\n\n#start_button {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 10em;\n  width: 70em;\n}\n\n.homepeage_tile:hover {\n  background: #84ff17;\n}\n\n.water {\n  border: none;\n  background-color: #010157;\n}\n\n.start {\n  border: 1px solid black;\n}\n\n.start_background {\n  background-color: black;\n}\n\n.start_background_hovered {\n  background-color: #ac971b;\n}\n\n.start_text {\n  background-color: #ac971b;\n}\n.start_text_hovered {\n  background-color: black;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/homepage/css/global.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,uBAAuB;AACzB","sourcesContent":["body {\n  display: flex;\n  justify-content: center;\n  background-color: black;\n  cursor: none;\n}\n\nmain {\n  user-select: none;\n}\n\n.title {\n  background: black;\n}\n\n#bs_heading {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(40, 1fr);\n  height: 40em;\n  width: 70em;\n}\n\n#start_button {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 10em;\n  width: 70em;\n}\n\n.homepeage_tile:hover {\n  background: #84ff17;\n}\n\n.water {\n  border: none;\n  background-color: #010157;\n}\n\n.start {\n  border: 1px solid black;\n}\n\n.start_background {\n  background-color: black;\n}\n\n.start_background_hovered {\n  background-color: #ac971b;\n}\n\n.start_text {\n  background-color: #ac971b;\n}\n.start_text_hovered {\n  background-color: black;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/index.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/index.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/global.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ships_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../../../node_modules/css-loader/dist/cjs.js!./ships.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/ships.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_water_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../../../../node_modules/css-loader/dist/cjs.js!./water.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/water.css");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ships_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_water_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/ships.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/ships.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animator_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../../node_modules/css-loader/dist/cjs.js!./animator.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/animator.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_animator_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ship_text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Black Ops One', cursive;\n  font-size: 0.7em;\n}\n\n.ship_hull_outline {\n  background-color: black;\n}\n\n.ship_hull {\n  background-color: #595555;\n  border: 1px solid #464242;\n}\n\n.ship_light {\n  background: #ff0000;\n  animation: opacity 0.75s linear infinite;\n}\n\n.light_gray {\n  background: #6c6c6c;\n  border: 1px solid #464646;\n}\n\n.dark_gray {\n  background: #393939;\n  border: 1px solid #292929;\n}\n\n.sub {\n  background: #1c1c1c;\n  border: 1px solid #0f0f0f;\n}\n\n.periscope_off {\n  border: none;\n  background: #010157;\n}\n\n.periscope_on {\n  background: #393939;\n  border: 1px solid #292929;\n}\n\n.radar_off {\n  border: none;\n  background: #010157;\n}\n\n.radar_on {\n  background: #6c6c6c;\n  border: 1px solid #464646;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/homepage/css/ships.css"],"names":[],"mappings":"AAGA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qCAAqC;EACrC,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,wCAAwC;AAC1C;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B","sourcesContent":["@import './animator.css';\n@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');\n\n.ship_text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Black Ops One', cursive;\n  font-size: 0.7em;\n}\n\n.ship_hull_outline {\n  background-color: black;\n}\n\n.ship_hull {\n  background-color: #595555;\n  border: 1px solid #464242;\n}\n\n.ship_light {\n  background: #ff0000;\n  animation: opacity 0.75s linear infinite;\n}\n\n.light_gray {\n  background: #6c6c6c;\n  border: 1px solid #464646;\n}\n\n.dark_gray {\n  background: #393939;\n  border: 1px solid #292929;\n}\n\n.sub {\n  background: #1c1c1c;\n  border: 1px solid #0f0f0f;\n}\n\n.periscope_off {\n  border: none;\n  background: #010157;\n}\n\n.periscope_on {\n  background: #393939;\n  border: 1px solid #292929;\n}\n\n.radar_off {\n  border: none;\n  background: #010157;\n}\n\n.radar_on {\n  background: #6c6c6c;\n  border: 1px solid #464646;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/water.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/water.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animator_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../../node_modules/css-loader/dist/cjs.js!./animator.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/animator.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_animator_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --water1: #010157;\n  --water2: #063744;\n}\n\n.surrounding_water_dark {\n  background-color: #13138c;\n  border: 1px solid #0d0d61;\n}\n\n.surrounding_water_light {\n  background-color: #2222b1;\n  border: 1px solid #171775;\n}\n\n.green1 {\n  background: var(--water2);\n  opacity: 60%;\n}\n\n.blue1 {\n  background: var(--water1);\n}\n\n.blue2 {\n  background: var(--water1);\n  opacity: 96%;\n}\n\n.blue3 {\n  background: var(--water1);\n  opacity: 92%;\n}\n\n.blue4 {\n  background: var(--water1);\n  opacity: 88%;\n}\n\n.blue5 {\n  background: var(--water1);\n  opacity: 84%;\n}\n\n.blue6 {\n  background: var(--water1);\n  opacity: 80%;\n}\n\n.blue7 {\n  background: var(--water1);\n  opacity: 76%;\n}\n.blue8 {\n  background: var(--water1);\n  opacity: 72%;\n}\n\n.blue9 {\n  background: var(--water1);\n  opacity: 68%;\n}\n\n.blue10 {\n  background: var(--water1);\n  opacity: 64%;\n}\n\n.blue10 {\n  background: var(--water1);\n  opacity: 80%;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/homepage/css/water.css"],"names":[],"mappings":"AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd","sourcesContent":["@import './animator.css';\n\n:root {\n  --water1: #010157;\n  --water2: #063744;\n}\n\n.surrounding_water_dark {\n  background-color: #13138c;\n  border: 1px solid #0d0d61;\n}\n\n.surrounding_water_light {\n  background-color: #2222b1;\n  border: 1px solid #171775;\n}\n\n.green1 {\n  background: var(--water2);\n  opacity: 60%;\n}\n\n.blue1 {\n  background: var(--water1);\n}\n\n.blue2 {\n  background: var(--water1);\n  opacity: 96%;\n}\n\n.blue3 {\n  background: var(--water1);\n  opacity: 92%;\n}\n\n.blue4 {\n  background: var(--water1);\n  opacity: 88%;\n}\n\n.blue5 {\n  background: var(--water1);\n  opacity: 84%;\n}\n\n.blue6 {\n  background: var(--water1);\n  opacity: 80%;\n}\n\n.blue7 {\n  background: var(--water1);\n  opacity: 76%;\n}\n.blue8 {\n  background: var(--water1);\n  opacity: 72%;\n}\n\n.blue9 {\n  background: var(--water1);\n  opacity: 68%;\n}\n\n.blue10 {\n  background: var(--water1);\n  opacity: 64%;\n}\n\n.blue10 {\n  background: var(--water1);\n  opacity: 80%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/place_ships/css/index.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/ui/place_ships/css/index.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Space+Mono&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".place_ships_background_tile:hover {\n  background: #84ff17;\n}\n\n#place_ships_main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  width: 70em;\n  height: 50em;\n}\n\n#place_ships_container {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  position: absolute;\n  left: 15em;\n  bottom: 4em;\n  height: 40em;\n  width: 40em;\n  border: 1px solid #ac971b;\n}\n\n#instructions_container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  position: absolute;\n  top: 1em;\n  left: 29em;\n  width: 12em;\n  height: 3em;\n  background: #aa9f61;\n  border-radius: 0.125em;\n}\n\n#bkd_space {\n  display: flex;\n  justify-content: center;\n  width: 3.5em;\n  font-size: 1.8em;\n  box-shadow: 1px 1px 2px 2px #000000;\n}\n\n#instructions {\n  font-size: 1em;\n  font-family: 'Space Mono', monospace;\n}\n\n.place_ship_tile {\n  border: 1px solid #ac971b;\n}\n\n.placed_tile {\n  border: 1px solid #e7ca29;\n  background: #ac971b;\n}\n\n.place_ship_hovered {\n  background: #84ff17;\n}\n\n.invalid_ship_placement {\n  background: #f00;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/place_ships/css/index.css"],"names":[],"mappings":"AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;EACE,cAAc;EACd,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');\n\n.place_ships_background_tile:hover {\n  background: #84ff17;\n}\n\n#place_ships_main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  width: 70em;\n  height: 50em;\n}\n\n#place_ships_container {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  position: absolute;\n  left: 15em;\n  bottom: 4em;\n  height: 40em;\n  width: 40em;\n  border: 1px solid #ac971b;\n}\n\n#instructions_container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  position: absolute;\n  top: 1em;\n  left: 29em;\n  width: 12em;\n  height: 3em;\n  background: #aa9f61;\n  border-radius: 0.125em;\n}\n\n#bkd_space {\n  display: flex;\n  justify-content: center;\n  width: 3.5em;\n  font-size: 1.8em;\n  box-shadow: 1px 1px 2px 2px #000000;\n}\n\n#instructions {\n  font-size: 1em;\n  font-family: 'Space Mono', monospace;\n}\n\n.place_ship_tile {\n  border: 1px solid #ac971b;\n}\n\n.placed_tile {\n  border: 1px solid #e7ca29;\n  background: #ac971b;\n}\n\n.place_ship_hovered {\n  background: #84ff17;\n}\n\n.invalid_ship_placement {\n  background: #f00;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_ui_homepage_css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./components/ui/homepage/css/index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/index.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_ui_place_ships_css_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./components/ui/place_ships/css/index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/place_ships/css/index.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_ui_game_boards_css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./components/ui/game_boards/css/index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/game_boards/css/index.css");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_ui_homepage_css_index_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_ui_place_ships_css_index_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_ui_game_boards_css_index_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFEQUFRLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBU0ssRUFBVCxDQUFSO0FBRUEsTUFBTUMsQ0FBQyxHQUFHTCxVQUFVLENBQUNLLENBQXJCO0FBQ0FOLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV00sQ0FBWCxDQUFSO0FBRUEsTUFBTUMsQ0FBQyxHQUFHTixVQUFVLENBQUNNLENBQXJCO0FBQ0FQLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV08sQ0FBWCxDQUFSO0FBQ0FQLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV08sQ0FBWCxDQUFSO0FBQ0FQLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV08sQ0FBWCxDQUFSO0FBRUEsTUFBTUMsQ0FBQyxHQUFHUCxVQUFVLENBQUNPLENBQXJCO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBRUEsTUFBTUMsQ0FBQyxHQUFHUixVQUFVLENBQUNRLENBQXJCO0FBQ0FULEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1MsQ0FBWCxDQUFSO0FBRUEsTUFBTUMsQ0FBQyxHQUFHVCxVQUFVLENBQUNTLENBQXJCO0FBQ0FWLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1UsQ0FBWCxDQUFSO0FBQ0FWLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1UsQ0FBWCxDQUFSO0FBRUEsTUFBTUMsQ0FBQyxHQUFHVixVQUFVLENBQUNVLENBQXJCO0FBQ0FYLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1csQ0FBWCxDQUFSO0FBQ0FYLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1csQ0FBWCxDQUFSO0FBQ0QsQ0F2Q0Q7O0FBeUNBLGlFQUFlVixVQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFFZSxTQUFTYSxzQkFBVCxHQUFrQztBQUMvQyxPQUFLLElBQUlqRSxNQUFULElBQW1Cb0QsNERBQW5CLEVBQStCO0FBQzdCWSxJQUFBQSw4REFBaUIsQ0FBQ1osNERBQVUsQ0FBQ3BELE1BQUQsQ0FBWCxFQUFxQixPQUFyQixDQUFqQjtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQRDtBQUNBO0FBRWUsU0FBU3FFLGdCQUFULEdBQTRCO0FBQ3pDLEdBQUMsU0FBUzlGLE9BQVQsR0FBbUI7QUFDbEJ5RixJQUFBQSw4REFBaUIsQ0FBQ0UsaUVBQUQsRUFBd0IsbUJBQXhCLENBQWpCO0FBQ0FGLElBQUFBLDhEQUFpQixDQUFDRSx3REFBRCxFQUFlLFdBQWYsQ0FBakI7QUFDQUYsSUFBQUEsOERBQWlCLENBQUNFLDZEQUFELEVBQW9CLFdBQXBCLENBQWpCO0FBQ0FGLElBQUFBLDhEQUFpQixDQUFDRSw4REFBRCxFQUFxQixZQUFyQixDQUFqQjtBQUNBRixJQUFBQSw4REFBaUIsQ0FBQ0UsOERBQUQsRUFBcUIsWUFBckIsQ0FBakI7QUFDQUYsSUFBQUEsOERBQWlCLENBQUNFLDBFQUFELEVBQWlDLHdCQUFqQyxDQUFqQjtBQUNBRixJQUFBQSw4REFBaUIsQ0FDZkUsMkVBRGUsRUFFZix5QkFGZSxDQUFqQjtBQUtBLFFBQU1XLENBQUMsR0FBR25ELFFBQVEsQ0FBQ2UsY0FBVCxDQUF3QixJQUF4QixDQUFWO0FBQ0EsUUFBTXFDLENBQUMsR0FBR3BELFFBQVEsQ0FBQ2UsY0FBVCxDQUF3QixJQUF4QixDQUFWO0FBQ0EsUUFBTXNDLENBQUMsR0FBR3JELFFBQVEsQ0FBQ2UsY0FBVCxDQUF3QixJQUF4QixDQUFWO0FBQ0EsUUFBTXVDLEdBQUcsR0FBR3RELFFBQVEsQ0FBQ2UsY0FBVCxDQUF3QixJQUF4QixDQUFaO0FBQ0EsUUFBTXdDLElBQUksR0FBR3ZELFFBQVEsQ0FBQ2UsY0FBVCxDQUF3QixJQUF4QixDQUFiO0FBQ0EsUUFBTXlDLENBQUMsR0FBR3hELFFBQVEsQ0FBQ2UsY0FBVCxDQUF3QixJQUF4QixDQUFWO0FBQ0EsUUFBTWtCLENBQUMsR0FBR2pDLFFBQVEsQ0FBQ2UsY0FBVCxDQUF3QixJQUF4QixDQUFWO0FBQ0EsUUFBTTBDLEVBQUUsR0FBR3pELFFBQVEsQ0FBQ2UsY0FBVCxDQUF3QixJQUF4QixDQUFYO0FBQ0EsUUFBTWEsQ0FBQyxHQUFHNUIsUUFBUSxDQUFDZSxjQUFULENBQXdCLElBQXhCLENBQVY7QUFDQSxRQUFNMkMsRUFBRSxHQUFHMUQsUUFBUSxDQUFDZSxjQUFULENBQXdCLElBQXhCLENBQVg7QUFDQSxRQUFNNEMsQ0FBQyxHQUFHM0QsUUFBUSxDQUFDZSxjQUFULENBQXdCLElBQXhCLENBQVY7QUFDQSxRQUFNNkMsR0FBRyxHQUFHLENBQUNULENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQkMsQ0FBckIsRUFBd0J2QixDQUF4QixFQUEyQndCLEVBQTNCLEVBQStCN0IsQ0FBL0IsRUFBa0M4QixFQUFsQyxFQUFzQ0MsQ0FBdEMsQ0FBWjtBQUNBQyxJQUFBQSxHQUFHLENBQUN2RixHQUFKLENBQVEsVUFBQ3dGLElBQUQsRUFBVTtBQUNoQkEsTUFBQUEsSUFBSSxDQUFDdkQsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFdBQW5CO0FBQ0QsS0FGRDtBQUdBNEMsSUFBQUEsQ0FBQyxDQUFDVyxTQUFGLEdBQWMsR0FBZDtBQUNBVixJQUFBQSxDQUFDLENBQUNVLFNBQUYsR0FBYyxHQUFkO0FBQ0FULElBQUFBLENBQUMsQ0FBQ1MsU0FBRixHQUFjLEdBQWQ7QUFDQVIsSUFBQUEsR0FBRyxDQUFDUSxTQUFKLEdBQWdCLEdBQWhCO0FBQ0FQLElBQUFBLElBQUksQ0FBQ08sU0FBTCxHQUFpQixHQUFqQjtBQUNBTixJQUFBQSxDQUFDLENBQUNNLFNBQUYsR0FBYyxHQUFkO0FBQ0E3QixJQUFBQSxDQUFDLENBQUM2QixTQUFGLEdBQWMsR0FBZDtBQUNBTCxJQUFBQSxFQUFFLENBQUNLLFNBQUgsR0FBZSxHQUFmO0FBQ0FsQyxJQUFBQSxDQUFDLENBQUNrQyxTQUFGLEdBQWMsR0FBZDtBQUNBSixJQUFBQSxFQUFFLENBQUNJLFNBQUgsR0FBZSxHQUFmO0FBQ0FILElBQUFBLENBQUMsQ0FBQ0csU0FBRixHQUFjLEdBQWQ7QUFDRCxHQXRDRDs7QUF3Q0EsR0FBQyxTQUFTN0csU0FBVCxHQUFxQjtBQUNwQnFGLElBQUFBLDhEQUFpQixDQUFDRyxtRUFBRCxFQUEwQixtQkFBMUIsQ0FBakI7QUFDQUgsSUFBQUEsOERBQWlCLENBQUNHLDBEQUFELEVBQWlCLFdBQWpCLENBQWpCO0FBQ0FILElBQUFBLDhEQUFpQixDQUFDRyxnRUFBRCxFQUF1QixZQUF2QixDQUFqQjtBQUNBSCxJQUFBQSw4REFBaUIsQ0FBQ0csK0RBQUQsRUFBc0IsV0FBdEIsQ0FBakI7QUFDQUgsSUFBQUEsOERBQWlCLENBQUNHLGdFQUFELEVBQXVCLFlBQXZCLENBQWpCO0FBQ0FILElBQUFBLDhEQUFpQixDQUNmRyw0RUFEZSxFQUVmLHdCQUZlLENBQWpCO0FBSUFILElBQUFBLDhEQUFpQixDQUNmRyw2RUFEZSxFQUVmLHlCQUZlLENBQWpCO0FBS0EsUUFBTWUsQ0FBQyxHQUFHeEQsUUFBUSxDQUFDZSxjQUFULENBQXdCLElBQXhCLENBQVY7QUFDQSxRQUFNa0IsQ0FBQyxHQUFHakMsUUFBUSxDQUFDZSxjQUFULENBQXdCLElBQXhCLENBQVY7QUFDQSxRQUFNc0MsQ0FBQyxHQUFHckQsUUFBUSxDQUFDZSxjQUFULENBQXdCLElBQXhCLENBQVY7QUFDQSxRQUFNYSxDQUFDLEdBQUc1QixRQUFRLENBQUNlLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBVjtBQUNBLFFBQU1xQyxDQUFDLEdBQUdwRCxRQUFRLENBQUNlLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBVjtBQUNBLFFBQU00QyxDQUFDLEdBQUczRCxRQUFRLENBQUNlLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBVjtBQUNBLFFBQU02QyxHQUFHLEdBQUcsQ0FBQ0osQ0FBRCxFQUFJdkIsQ0FBSixFQUFPb0IsQ0FBUCxFQUFVekIsQ0FBVixFQUFhd0IsQ0FBYixFQUFnQk8sQ0FBaEIsQ0FBWjtBQUNBQyxJQUFBQSxHQUFHLENBQUN2RixHQUFKLENBQVEsVUFBQ3dGLElBQUQsRUFBVTtBQUNoQkEsTUFBQUEsSUFBSSxDQUFDdkQsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFdBQW5CO0FBQ0QsS0FGRDtBQUdBaUQsSUFBQUEsQ0FBQyxDQUFDTSxTQUFGLEdBQWMsR0FBZDtBQUNBN0IsSUFBQUEsQ0FBQyxDQUFDNkIsU0FBRixHQUFjLEdBQWQ7QUFDQVQsSUFBQUEsQ0FBQyxDQUFDUyxTQUFGLEdBQWMsR0FBZDtBQUNBbEMsSUFBQUEsQ0FBQyxDQUFDa0MsU0FBRixHQUFjLEdBQWQ7QUFDQVYsSUFBQUEsQ0FBQyxDQUFDVSxTQUFGLEdBQWMsR0FBZDtBQUNBSCxJQUFBQSxDQUFDLENBQUNHLFNBQUYsR0FBYyxHQUFkO0FBQ0QsR0EvQkQ7O0FBaUNBLEdBQUMsU0FBU0MsU0FBVCxHQUFxQjtBQUNwQjtBQUNBekIsSUFBQUEsOERBQWlCLENBQUNJLCtEQUFELEVBQXNCLFdBQXRCLENBQWpCO0FBQ0FKLElBQUFBLDhEQUFpQixDQUFDSSxvRUFBRCxFQUEyQixjQUEzQixDQUFqQjtBQUNBSixJQUFBQSw4REFBaUIsQ0FBQ0kscUVBQUQsRUFBNEIsZUFBNUIsQ0FBakI7QUFDRCxHQUxEO0FBTUQ7Ozs7Ozs7Ozs7Ozs7OztBQ25GRDtBQUVlLFNBQVN5QixpQkFBVCxHQUE2QjtBQUMxQyxNQUFNUCxHQUFHLEdBQUdNLDJEQUFaO0FBQ0FOLEVBQUFBLEdBQUcsQ0FBQ3ZGLEdBQUosQ0FBUSxVQUFDZ0csT0FBRCxFQUFhO0FBQ25CLFFBQU1oRSxJQUFJLEdBQUdMLFFBQVEsQ0FBQ2UsY0FBVCxpQkFBaUNzRCxPQUFqQyxFQUFiO0FBQ0FoRSxJQUFBQSxJQUFJLENBQUNDLFNBQUwsQ0FBZVcsTUFBZixDQUFzQixrQkFBdEI7QUFDQVosSUFBQUEsSUFBSSxDQUFDQyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsWUFBbkI7QUFDRCxHQUpEO0FBS0Q7Ozs7Ozs7Ozs7Ozs7O0FDVGMsU0FBUytELGlCQUFULEdBQTZCO0FBQzFDLE1BQU1wRSxPQUFPLEdBQUcsQ0FDZCxPQURjLEVBRWQsT0FGYyxFQUdkLE9BSGMsRUFJZCxPQUpjLEVBS2QsT0FMYyxFQU1kLE9BTmMsRUFPZCxPQVBjLEVBUWQsT0FSYyxFQVNkLE9BVGMsRUFVZCxRQVZjLEVBV2QsUUFYYyxDQUFoQjtBQWFBLE1BQU1xRSxXQUFXLEdBQUcvRSxLQUFLLENBQUNnRixJQUFOLENBQVd4RSxRQUFRLENBQUN5RSxzQkFBVCxDQUFnQyxPQUFoQyxDQUFYLENBQXBCO0FBQ0FGLEVBQUFBLFdBQVcsQ0FBQ2xHLEdBQVosQ0FBZ0IsVUFBQ3dGLElBQUQsRUFBVTtBQUN4QixRQUFNekQsYUFBYSxHQUFHcEIsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUEzQixDQUF0QjtBQUNBMkUsSUFBQUEsSUFBSSxDQUFDdkQsU0FBTCxDQUFlQyxHQUFmLENBQW1CTCxPQUFPLENBQUNFLGFBQUQsQ0FBMUI7QUFDRCxHQUhEO0FBSUQ7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxJQUFNcUIsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ2lELEdBQUQsRUFBTUMsR0FBTixFQUFXQyxZQUFYLEVBQTRCO0FBQzNDLE9BQUssSUFBSXJHLENBQUMsR0FBR21HLEdBQWIsRUFBa0JuRyxDQUFDLEdBQUdvRyxHQUFHLEdBQUcsQ0FBNUIsRUFBK0JwRyxDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDcUcsSUFBQUEsWUFBWSxDQUFDQyxJQUFiLENBQWtCdEcsQ0FBbEI7QUFDRDtBQUNGLENBSkQ7O0FBTUEsSUFBTStELGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ3dDLFdBQUQsRUFBY0MsV0FBZCxFQUE4QjtBQUN0REQsRUFBQUEsV0FBVyxDQUFDekcsR0FBWixDQUFnQixVQUFDZ0csT0FBRCxFQUFhO0FBQzNCLFFBQU1oRSxJQUFJLEdBQUdMLFFBQVEsQ0FBQ2UsY0FBVCxDQUF3QnNELE9BQXhCLENBQWI7QUFDQWhFLElBQUFBLElBQUksQ0FBQ0MsU0FBTCxDQUFlVyxNQUFmLENBQXNCLE9BQXRCO0FBQ0FaLElBQUFBLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CO0FBQ0FGLElBQUFBLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxHQUFmLENBQW1Cd0UsV0FBbkI7QUFDRCxHQUxEO0FBTUQsQ0FQRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVlLFNBQVNFLGtCQUFULEdBQThCO0FBQzNDLE1BQU1DLFlBQVksR0FBR2xGLFFBQVEsQ0FBQ2UsY0FBVCxDQUF3QixjQUF4QixDQUFyQjs7QUFFQSxNQUFNb0UsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUE2QixHQUFNO0FBQ3ZDLFFBQU1DLDZCQUE2QixHQUFHNUYsS0FBSyxDQUFDZ0YsSUFBTixDQUNwQ3hFLFFBQVEsQ0FBQ3lFLHNCQUFULENBQWdDLGtCQUFoQyxDQURvQyxDQUF0QztBQUdBVyxJQUFBQSw2QkFBNkIsQ0FBQy9HLEdBQTlCLENBQWtDLFVBQUN3RixJQUFELEVBQVU7QUFDMUNBLE1BQUFBLElBQUksQ0FBQ3ZELFNBQUwsQ0FBZUMsR0FBZixDQUFtQiwwQkFBbkI7QUFDQXNELE1BQUFBLElBQUksQ0FBQ3ZELFNBQUwsQ0FBZVcsTUFBZixDQUFzQixrQkFBdEI7QUFDRCxLQUhEO0FBS0EsUUFBTW9FLHVCQUF1QixHQUFHN0YsS0FBSyxDQUFDZ0YsSUFBTixDQUM5QnhFLFFBQVEsQ0FBQ3lFLHNCQUFULENBQWdDLFlBQWhDLENBRDhCLENBQWhDO0FBR0FZLElBQUFBLHVCQUF1QixDQUFDaEgsR0FBeEIsQ0FBNEIsVUFBQ3dGLElBQUQsRUFBVTtBQUNwQ0EsTUFBQUEsSUFBSSxDQUFDdkQsU0FBTCxDQUFlQyxHQUFmLENBQW1CLG9CQUFuQjtBQUNBc0QsTUFBQUEsSUFBSSxDQUFDdkQsU0FBTCxDQUFlVyxNQUFmLENBQXNCLFlBQXRCO0FBQ0QsS0FIRDtBQUlELEdBaEJEOztBQWtCQSxNQUFNcUUsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUE2QixHQUFNO0FBQ3ZDLFFBQU1GLDZCQUE2QixHQUFHNUYsS0FBSyxDQUFDZ0YsSUFBTixDQUNwQ3hFLFFBQVEsQ0FBQ3lFLHNCQUFULENBQWdDLDBCQUFoQyxDQURvQyxDQUF0QztBQUdBVyxJQUFBQSw2QkFBNkIsQ0FBQy9HLEdBQTlCLENBQWtDLFVBQUN3RixJQUFELEVBQVU7QUFDMUNBLE1BQUFBLElBQUksQ0FBQ3ZELFNBQUwsQ0FBZUMsR0FBZixDQUFtQixrQkFBbkI7QUFDQXNELE1BQUFBLElBQUksQ0FBQ3ZELFNBQUwsQ0FBZVcsTUFBZixDQUFzQiwwQkFBdEI7QUFDRCxLQUhEO0FBSUEsUUFBTW9FLHVCQUF1QixHQUFHN0YsS0FBSyxDQUFDZ0YsSUFBTixDQUM5QnhFLFFBQVEsQ0FBQ3lFLHNCQUFULENBQWdDLG9CQUFoQyxDQUQ4QixDQUFoQztBQUdBWSxJQUFBQSx1QkFBdUIsQ0FBQ2hILEdBQXhCLENBQTRCLFVBQUN3RixJQUFELEVBQVU7QUFDcENBLE1BQUFBLElBQUksQ0FBQ3ZELFNBQUwsQ0FBZUMsR0FBZixDQUFtQixZQUFuQjtBQUNBc0QsTUFBQUEsSUFBSSxDQUFDdkQsU0FBTCxDQUFlVyxNQUFmLENBQXNCLG9CQUF0QjtBQUNELEtBSEQ7QUFJRCxHQWZEOztBQWdCQSxNQUFNc0UsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUE2QixHQUFNO0FBQ3ZDLFNBQUssSUFBSUMsUUFBVCxJQUFxQjVFLHNEQUFyQixFQUFpQztBQUMvQixVQUFNNkUsUUFBUSxHQUFHN0Usc0RBQVUsQ0FBQzRFLFFBQUQsQ0FBM0I7QUFDQUUsTUFBQUEsYUFBYSxDQUFDRCxRQUFELENBQWI7QUFDRDs7QUFDRHpGLElBQUFBLFFBQVEsQ0FBQ2UsY0FBVCxDQUF3QixjQUF4QixFQUF3Q0UsTUFBeEM7QUFDQStELElBQUFBLHVFQUFXO0FBQ1osR0FQRDs7QUFTQUUsRUFBQUEsWUFBWSxDQUFDUyxnQkFBYixDQUE4QixZQUE5QixFQUE0Q1IsMEJBQTVDO0FBQ0FELEVBQUFBLFlBQVksQ0FBQ1MsZ0JBQWIsQ0FBOEIsWUFBOUIsRUFBNENMLDBCQUE1QztBQUNBSixFQUFBQSxZQUFZLENBQUNTLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDSiwwQkFBdkM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7QUNwRGMsU0FBUzdFLFlBQVQsR0FBd0I7QUFDckMsTUFBTVgsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLE1BQU0yRixPQUFPLEdBQUc1RixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQSxNQUFNaUUsS0FBSyxHQUFHbEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQUYsRUFBQUEsSUFBSSxDQUFDSSxFQUFMLEdBQVUsY0FBVjtBQUNBeUYsRUFBQUEsT0FBTyxDQUFDekYsRUFBUixHQUFhLFlBQWI7QUFDQStELEVBQUFBLEtBQUssQ0FBQy9ELEVBQU4sR0FBVyxjQUFYOztBQUNBLE9BQUssSUFBSTVCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsSUFBcEIsRUFBMEJBLENBQUMsRUFBM0IsRUFBK0I7QUFDN0IsUUFBTThCLElBQUksR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDQUksSUFBQUEsSUFBSSxDQUFDRixFQUFMLEdBQVU1QixDQUFWO0FBQ0E4QixJQUFBQSxJQUFJLENBQUNDLFNBQUwsR0FBaUIsc0JBQWpCO0FBQ0FzRixJQUFBQSxPQUFPLENBQUNwRixNQUFSLENBQWVILElBQWY7QUFDRDs7QUFDRCxPQUFLLElBQUk5QixFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHLEdBQXBCLEVBQXlCQSxFQUFDLEVBQTFCLEVBQThCO0FBQzVCLFFBQU04QixLQUFJLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiOztBQUNBSSxJQUFBQSxLQUFJLENBQUNGLEVBQUwsbUJBQW1CNUIsRUFBbkI7QUFDQThCLElBQUFBLEtBQUksQ0FBQ0MsU0FBTCxHQUFpQiw2QkFBakI7QUFDQTRELElBQUFBLEtBQUssQ0FBQzFELE1BQU4sQ0FBYUgsS0FBYjtBQUNEOztBQUNETixFQUFBQSxJQUFJLENBQUNTLE1BQUwsQ0FBWW9GLE9BQVo7QUFDQTdGLEVBQUFBLElBQUksQ0FBQ1MsTUFBTCxDQUFZMEQsS0FBWjtBQUNBbEUsRUFBQUEsUUFBUSxDQUFDUyxJQUFULENBQWNELE1BQWQsQ0FBcUJULElBQXJCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJEO0FBRUEsSUFBTXlDLE9BQU8sR0FBRztBQUNkSSxFQUFBQSxhQUFhLEVBQUUsQ0FDYixJQURhLEVBQ1AsSUFETyxFQUNELElBREMsRUFDSyxJQURMLEVBQ1csSUFEWCxFQUNpQixJQURqQixFQUN1QixJQUR2QixFQUM2QixJQUQ3QixFQUNtQyxJQURuQyxFQUN5QyxJQUR6QyxFQUMrQyxJQUQvQyxFQUNxRCxJQURyRCxFQUViLElBRmEsRUFFUCxJQUZPLEVBRUQsSUFGQyxFQUVLLElBRkwsRUFFVyxJQUZYLEVBRWlCLElBRmpCLEVBRXVCLElBRnZCLEVBRTZCLElBRjdCLEVBRW1DLElBRm5DLEVBRXlDLElBRnpDLEVBRStDLElBRi9DLEVBRXFELElBRnJELEVBR2IsSUFIYSxFQUdQLElBSE8sRUFHRCxJQUhDLEVBR0ssSUFITCxFQUdXLElBSFgsRUFHaUIsSUFIakIsRUFHdUIsSUFIdkIsRUFHNkIsSUFIN0IsRUFHbUMsSUFIbkMsRUFHeUMsSUFIekMsRUFHK0MsSUFIL0MsRUFHcUQsSUFIckQsRUFJYixJQUphLEVBSVAsSUFKTyxFQUlELElBSkMsRUFJSyxJQUpMLEVBSVcsSUFKWCxFQUlpQixJQUpqQixFQUl1QixJQUp2QixFQUk2QixJQUo3QixFQUltQyxJQUpuQyxFQUl5QyxJQUp6QyxFQUkrQyxJQUovQyxFQUlxRCxJQUpyRCxFQUtiLElBTGEsRUFLUCxJQUxPLEVBS0QsSUFMQyxFQUtLLElBTEwsRUFLVyxJQUxYLEVBS2lCLElBTGpCLEVBS3VCLElBTHZCLEVBSzZCLElBTDdCLEVBS21DLElBTG5DLEVBS3lDLElBTHpDLEVBSytDLElBTC9DLEVBS3FELElBTHJELEVBTWIsSUFOYSxFQU1QLElBTk8sRUFNRCxJQU5DLEVBTUssSUFOTCxFQU1XLElBTlgsRUFNaUIsSUFOakIsRUFNdUIsSUFOdkIsRUFNNkIsSUFON0IsRUFNbUMsSUFObkMsRUFNeUMsSUFOekMsRUFNK0MsSUFOL0MsRUFNcUQsSUFOckQsRUFPYixJQVBhLENBREQ7QUFVZEMsRUFBQUEsSUFBSSxFQUFFLENBQ0osSUFESSxFQUNFLElBREYsRUFDUSxJQURSLEVBQ2MsSUFEZCxFQUNvQixJQURwQixFQUMwQixJQUQxQixFQUNnQyxJQURoQyxFQUNzQyxJQUR0QyxFQUM0QyxJQUQ1QyxFQUNrRCxJQURsRCxFQUN3RCxJQUR4RCxFQUM4RCxJQUQ5RCxFQUVKLElBRkksRUFFRSxJQUZGLEVBRVEsSUFGUixFQUVjLElBRmQsRUFFb0IsSUFGcEIsRUFFMEIsSUFGMUIsRUFFZ0MsSUFGaEMsRUFFc0MsSUFGdEMsRUFFNEMsSUFGNUMsRUFFa0QsSUFGbEQsRUFFd0QsSUFGeEQsRUFFOEQsSUFGOUQsRUFHSixJQUhJLENBVlE7QUFlZEMsRUFBQUEsU0FBUyxFQUFFLENBQ1QsSUFEUyxFQUNILElBREcsRUFDRyxJQURILEVBQ1MsSUFEVCxFQUNlLElBRGYsRUFDcUIsSUFEckIsRUFDMkIsSUFEM0IsRUFDaUMsSUFEakMsRUFDdUMsSUFEdkMsRUFDNkMsSUFEN0MsRUFDbUQsSUFEbkQsRUFDeUQsSUFEekQsRUFFVCxJQUZTLEVBRUgsSUFGRyxFQUVHLElBRkgsRUFFUyxJQUZULEVBRWUsSUFGZixFQUVxQixJQUZyQixFQUUyQixJQUYzQixFQUVpQyxJQUZqQyxFQUV1QyxJQUZ2QyxFQUU2QyxJQUY3QyxFQUVtRCxJQUZuRCxDQWZHO0FBbUJkQyxFQUFBQSxVQUFVLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQW5CRTtBQW9CZEMsRUFBQUEsVUFBVSxFQUFFLENBQUMsSUFBRCxDQXBCRTtBQXFCZEMsRUFBQUEsc0JBQXNCLEVBQUUsQ0FDdEIsSUFEc0IsRUFDaEIsSUFEZ0IsRUFDVixJQURVLEVBQ0osSUFESSxFQUNFLElBREYsRUFDUSxJQURSLEVBQ2MsSUFEZCxFQUNvQixJQURwQixFQUMwQixJQUQxQixFQUNnQyxJQURoQyxFQUNzQyxJQUR0QyxFQUM0QyxJQUQ1QyxFQUV0QixJQUZzQixFQUVoQixJQUZnQixFQUVWLElBRlUsRUFFSixJQUZJLEVBRUUsSUFGRixFQUVRLElBRlIsRUFFYyxJQUZkLEVBRW9CLElBRnBCLEVBRTBCLElBRjFCLEVBRWdDLElBRmhDLEVBRXNDLElBRnRDLEVBRTRDLElBRjVDLEVBR3RCLElBSHNCLEVBR2hCLElBSGdCLEVBR1YsSUFIVSxFQUdKLElBSEksRUFHRSxJQUhGLENBckJWO0FBMEJkQyxFQUFBQSx1QkFBdUIsRUFBRSxDQUN2QixJQUR1QixFQUNqQixJQURpQixFQUNYLElBRFcsRUFDTCxJQURLLEVBQ0MsSUFERCxFQUNPLElBRFAsRUFDYSxJQURiLEVBQ21CLElBRG5CLEVBQ3lCLElBRHpCLEVBQytCLElBRC9CLEVBQ3FDLElBRHJDLEVBQzJDLElBRDNDO0FBMUJYLENBQWhCO0FBK0JBLElBQU1ULFNBQVMsR0FBRztBQUNoQkcsRUFBQUEsYUFBYSxFQUFFLENBQ2IsSUFEYSxFQUNQLElBRE8sRUFDRCxJQURDLEVBQ0ssSUFETCxFQUNXLElBRFgsRUFDaUIsSUFEakIsRUFDdUIsSUFEdkIsRUFDNkIsSUFEN0IsRUFDbUMsSUFEbkMsRUFDeUMsSUFEekMsRUFDK0MsSUFEL0MsRUFDcUQsSUFEckQsRUFFYixJQUZhLEVBRVAsSUFGTyxFQUVELElBRkMsQ0FEQztBQUtoQkMsRUFBQUEsSUFBSSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLENBTFU7QUFNaEJDLEVBQUFBLFNBQVMsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxJQUFqQyxFQUF1QyxJQUF2QyxFQUE2QyxJQUE3QyxFQUFtRCxJQUFuRCxDQU5LO0FBT2hCQyxFQUFBQSxVQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUMsSUFBbkMsQ0FQSTtBQVFoQkMsRUFBQUEsVUFBVSxFQUFFLENBQUMsR0FBRCxDQVJJO0FBU2hCQyxFQUFBQSxzQkFBc0IsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixFQUErQixJQUEvQixDQVRSO0FBVWhCQyxFQUFBQSx1QkFBdUIsRUFBRSxDQUN2QixJQUR1QixFQUNqQixJQURpQixFQUNYLElBRFcsRUFDTCxJQURLLEVBQ0MsSUFERCxFQUNPLElBRFAsRUFDYSxJQURiLEVBQ21CLElBRG5CLEVBQ3lCLElBRHpCO0FBVlQsQ0FBbEI7QUFlQSxJQUFNUixTQUFTLEdBQUc7QUFDaEJHLEVBQUFBLElBQUksRUFBRSxFQURVO0FBRWhCQyxFQUFBQSxTQUFTLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FGSztBQUdoQmtCLEVBQUFBLGNBQWMsRUFBRSxDQUFDLEdBQUQsQ0FIQTtBQUloQkMsRUFBQUEsZUFBZSxFQUFFLENBQUMsR0FBRDtBQUpELENBQWxCOztBQU9BLENBQUMsU0FBUzRCLGlCQUFULEdBQTZCO0FBQzVCLE1BQU1DLE9BQU8sR0FBR3RELE9BQU8sQ0FBQ0ksYUFBeEI7QUFDQW5CLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXFFLE9BQWIsQ0FBUjtBQUNBckUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhcUUsT0FBYixDQUFSO0FBQ0FyRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFxRSxPQUFiLENBQVI7QUFDQXJFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXFFLE9BQWIsQ0FBUjtBQUNBckUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhcUUsT0FBYixDQUFSO0FBQ0FyRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFxRSxPQUFiLENBQVI7QUFFQSxNQUFNQyxJQUFJLEdBQUd2RCxPQUFPLENBQUNLLElBQXJCO0FBQ0FwQixFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFzRSxJQUFiLENBQVI7QUFDQXRFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXNFLElBQWIsQ0FBUjtBQUNBdEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhc0UsSUFBYixDQUFSO0FBQ0F0RSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFzRSxJQUFiLENBQVI7QUFDQXRFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXNFLElBQWIsQ0FBUjtBQUNBdEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhc0UsSUFBYixDQUFSO0FBQ0F0RSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFzRSxJQUFiLENBQVI7QUFDQXRFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXNFLElBQWIsQ0FBUjtBQUNBdEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhc0UsSUFBYixDQUFSO0FBQ0F0RSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFzRSxJQUFiLENBQVI7QUFDQXRFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXNFLElBQWIsQ0FBUjtBQUNBdEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhc0UsSUFBYixDQUFSO0FBQ0F0RSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFzRSxJQUFiLENBQVI7QUFDQXRFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXNFLElBQWIsQ0FBUjtBQUNBdEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhc0UsSUFBYixDQUFSO0FBRUEsTUFBTUMsU0FBUyxHQUFHeEQsT0FBTyxDQUFDTSxTQUExQjtBQUNBckIsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhdUUsU0FBYixDQUFSO0FBQ0F2RSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWF1RSxTQUFiLENBQVI7QUFDQXZFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXVFLFNBQWIsQ0FBUjtBQUNBdkUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhdUUsU0FBYixDQUFSO0FBQ0F2RSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWF1RSxTQUFiLENBQVI7QUFDQXZFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXVFLFNBQWIsQ0FBUjtBQUVBLE1BQU1DLFVBQVUsR0FBR3pELE9BQU8sQ0FBQ08sVUFBM0I7QUFDQXRCLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXdFLFVBQWIsQ0FBUjtBQUVBLE1BQU1DLHNCQUFzQixHQUFHMUQsT0FBTyxDQUFDUyxzQkFBdkM7QUFDQXhCLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXlFLHNCQUFiLENBQVI7QUFDRCxDQXZDRDs7QUF5Q0EsQ0FBQyxTQUFTQyxtQkFBVCxHQUErQjtBQUM5QixNQUFNTCxPQUFPLEdBQUdyRCxTQUFTLENBQUNHLGFBQTFCO0FBQ0FuQixFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFxRSxPQUFiLENBQVI7QUFFQSxNQUFNQyxJQUFJLEdBQUd0RCxTQUFTLENBQUNJLElBQXZCO0FBQ0FwQixFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFzRSxJQUFiLENBQVI7QUFDQXRFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXNFLElBQWIsQ0FBUjtBQUVBLE1BQU1FLFVBQVUsR0FBR3hELFNBQVMsQ0FBQ00sVUFBN0I7QUFDQXRCLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXdFLFVBQWIsQ0FBUjtBQUNBeEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhd0UsVUFBYixDQUFSO0FBQ0F4RSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWF3RSxVQUFiLENBQVI7QUFDQXhFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXdFLFVBQWIsQ0FBUjtBQUVBLE1BQU1ELFNBQVMsR0FBR3ZELFNBQVMsQ0FBQ0ssU0FBNUI7QUFDQXJCLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXVFLFNBQWIsQ0FBUjtBQUNBdkUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhdUUsU0FBYixDQUFSO0FBQ0F2RSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWF1RSxTQUFiLENBQVI7QUFFQSxNQUFNRSxzQkFBc0IsR0FBR3pELFNBQVMsQ0FBQ1Esc0JBQXpDO0FBQ0F4QixFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWF5RSxzQkFBYixDQUFSO0FBQ0QsQ0FyQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdBO0FBRUEsSUFBTWhDLEtBQUssR0FBRztBQUNaa0MsRUFBQUEsQ0FBQyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBRFM7QUFFWkMsRUFBQUEsRUFBRSxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDLEdBQTlDLEVBQW1ELEdBQW5ELEVBQXdELEdBQXhELENBRlE7QUFHWkMsRUFBQUEsQ0FBQyxFQUFFLENBQ0QsR0FEQyxFQUNJLEdBREosRUFDUyxHQURULEVBQ2MsR0FEZCxFQUNtQixHQURuQixFQUN3QixHQUR4QixFQUM2QixHQUQ3QixFQUNrQyxHQURsQyxFQUN1QyxHQUR2QyxFQUM0QyxHQUQ1QyxFQUNpRCxHQURqRCxFQUNzRCxHQUR0RCxFQUMyRCxHQUQzRCxFQUNnRSxHQURoRSxFQUNxRSxHQURyRSxFQUVELEdBRkMsQ0FIUztBQU9aQyxFQUFBQSxDQUFDLEVBQUUsQ0FDRCxHQURDLEVBQ0ksR0FESixFQUNTLEdBRFQsRUFDYyxHQURkLEVBQ21CLEdBRG5CLEVBQ3dCLEdBRHhCLEVBQzZCLEdBRDdCLEVBQ2tDLEdBRGxDLEVBQ3VDLEdBRHZDLEVBQzRDLEdBRDVDLEVBQ2lELEdBRGpELEVBQ3NELEdBRHRELEVBQzJELEdBRDNELEVBQ2dFLEdBRGhFLEVBQ3FFLEdBRHJFLEVBRUQsR0FGQyxDQVBTO0FBV1pDLEVBQUFBLEVBQUUsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxHQUFwQyxFQUF5QyxHQUF6QyxFQUE4QyxHQUE5QyxFQUFtRCxHQUFuRCxFQUF3RCxHQUF4RCxDQVhRO0FBWVpwQyxFQUFBQSxHQUFHLEVBQUU7QUFaTyxDQUFkOztBQWVBLENBQUMsU0FBUy9CLFNBQVQsR0FBcUI7QUFDcEIsTUFBTUosQ0FBQyxHQUFHaUMsS0FBSyxDQUFDa0MsQ0FBaEI7QUFDQTNFLEVBQUFBLHFEQUFRLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBU1EsQ0FBVCxDQUFSO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBRUEsTUFBTUosRUFBRSxHQUFHcUMsS0FBSyxDQUFDbUMsRUFBakI7QUFDQTVFLEVBQUFBLHFEQUFRLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBU0ksRUFBVCxDQUFSO0FBQ0FKLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0ksRUFBWCxDQUFSO0FBRUEsTUFBTUQsQ0FBQyxHQUFHc0MsS0FBSyxDQUFDb0MsQ0FBaEI7QUFDQTdFLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0csQ0FBWCxDQUFSO0FBQ0FILEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0csQ0FBWCxDQUFSO0FBQ0FILEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0csQ0FBWCxDQUFSO0FBQ0FILEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0csQ0FBWCxDQUFSO0FBRUEsTUFBTTZFLENBQUMsR0FBR3ZDLEtBQUssQ0FBQ3FDLENBQWhCO0FBQ0E5RSxFQUFBQSxxREFBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVdnRixDQUFYLENBQVI7QUFDQWhGLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV2dGLENBQVgsQ0FBUjtBQUNBaEYsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXZ0YsQ0FBWCxDQUFSO0FBQ0FoRixFQUFBQSxxREFBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVdnRixDQUFYLENBQVI7QUFFQSxNQUFNM0UsRUFBRSxHQUFHb0MsS0FBSyxDQUFDc0MsRUFBakI7QUFDQS9FLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0ssRUFBWCxDQUFSO0FBQ0FMLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0ssRUFBWCxDQUFSOztBQUVBLE9BQUssSUFBSXhELE1BQVQsSUFBbUI0RixLQUFuQixFQUEwQjtBQUN4QixRQUFJNUYsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDcEI7QUFDRDs7QUFDRDRGLElBQUFBLEtBQUssQ0FBQzVGLE1BQUQsQ0FBTCxDQUFjRCxHQUFkLENBQWtCLFVBQUNxSSxNQUFELEVBQVk7QUFDNUJ4QyxNQUFBQSxLQUFLLENBQUNFLEdBQU4sQ0FBVVMsSUFBVixDQUFlNkIsTUFBZjtBQUNELEtBRkQ7QUFHRDtBQUNGLENBckNEOztBQXNDQSxpRUFBZXhDLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVN5QyxRQUFULEdBQW9CO0FBQ2pDakcsRUFBQUEsb0VBQVk7QUFDWnlELEVBQUFBLHlFQUFpQjtBQUNqQnhCLEVBQUFBLHdFQUFnQjtBQUNoQkosRUFBQUEsOEVBQXNCO0FBQ3RCK0IsRUFBQUEseUVBQWlCO0FBQ2pCVyxFQUFBQSwwRUFBa0I7QUFDbkI7Ozs7Ozs7Ozs7Ozs7O0FDZEQsSUFBTTJCLFdBQVcsR0FBRyxFQUFwQjtBQUNBLElBQU14SSxPQUFPLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFBOEMsR0FBOUMsQ0FBaEI7QUFDQSxJQUFNeUksT0FBTyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBaEI7QUFDQXpJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBWTtBQUN0QnVJLEVBQUFBLE9BQU8sQ0FBQ3hJLEdBQVIsQ0FBWSxVQUFDcUksTUFBRCxFQUFZO0FBQ3RCRSxJQUFBQSxXQUFXLENBQUMvQixJQUFaLFdBQW9CdkcsTUFBcEIsU0FBNkJvSSxNQUE3QjtBQUNELEdBRkQ7QUFHRCxDQUpEO0FBTUEsaUVBQWVFLFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBRWUsU0FBU0ksZUFBVCxHQUEyQjtBQUN4QyxNQUFJQyxrQkFBa0IsR0FBRyxDQUF6QjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxZQUFsQjtBQUNBLE1BQU1DLEtBQUssR0FBRyxDQUFDLFNBQUQsRUFBWSxZQUFaLEVBQTBCLFdBQTFCLEVBQXVDLEtBQXZDLEVBQThDLFlBQTlDLENBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFmO0FBQ0EsTUFBTUMsSUFBSSxHQUFHO0FBQ1g7QUFDQXhLLElBQUFBLE9BQU8sRUFBRTtBQUNQeUssTUFBQUEsVUFBVSxFQUFFLENBREw7QUFFUEMsTUFBQUEsUUFBUSxFQUFFLEdBRkgsQ0FFUTs7QUFGUixLQUZFO0FBTVh2SyxJQUFBQSxVQUFVLEVBQUU7QUFDVnNLLE1BQUFBLFVBQVUsRUFBRSxDQURGO0FBRVZDLE1BQUFBLFFBQVEsRUFBRSxHQUZBLENBRUs7O0FBRkwsS0FORDtBQVVYdEssSUFBQUEsU0FBUyxFQUFFO0FBQ1RxSyxNQUFBQSxVQUFVLEVBQUUsQ0FESDtBQUVUQyxNQUFBQSxRQUFRLEVBQUUsR0FGRCxDQUVNOztBQUZOLEtBVkE7QUFjWHJLLElBQUFBLEdBQUcsRUFBRTtBQUNIb0ssTUFBQUEsVUFBVSxFQUFFLENBRFQ7QUFFSEMsTUFBQUEsUUFBUSxFQUFFLEdBRlAsQ0FFWTs7QUFGWixLQWRNO0FBa0JYcEssSUFBQUEsVUFBVSxFQUFFO0FBQ1ZtSyxNQUFBQSxVQUFVLEVBQUUsQ0FERjtBQUVWQyxNQUFBQSxRQUFRLEVBQUUsR0FGQSxDQUVLOztBQUZMO0FBbEJELEdBQWI7O0FBd0JBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ3JILEVBQUQsRUFBUTtBQUNqQyxRQUFJc0gsZ0JBQWdCLEdBQUcsRUFBdkI7O0FBQ0EsUUFBSVAsV0FBVyxLQUFLLFlBQXBCLEVBQWtDO0FBQ2hDTyxNQUFBQSxnQkFBZ0IsR0FBR3RILEVBQUUsQ0FBQyxDQUFELENBQXJCO0FBQ0Q7O0FBQ0QsUUFBSStHLFdBQVcsS0FBSyxVQUFwQixFQUFnQztBQUM5Qk8sTUFBQUEsZ0JBQWdCLEdBQUd0SCxFQUFFLENBQUN1SCxVQUFILENBQWMsQ0FBZCxDQUFuQjtBQUNEOztBQUNELFFBQU1DLEdBQUcsR0FBR04sSUFBSSxDQUFDRixLQUFLLENBQUNGLGtCQUFELENBQU4sQ0FBSixDQUFnQ0MsV0FBaEMsQ0FBWjtBQUNBLFdBQU9PLGdCQUFnQixJQUFJRSxHQUEzQjtBQUNELEdBVkQ7O0FBWUEsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxTQUFELEVBQWU7QUFDM0MsUUFBSUMsYUFBYSxHQUFHLElBQXBCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHakIsbUVBQXRCOztBQUYyQywrQkFHbEMvSixJQUhrQztBQUl6QyxVQUFNaUwsU0FBUyxHQUFHRCxhQUFhLENBQUNoTCxJQUFELENBQWIsQ0FBb0JELFFBQXRDO0FBQ0ErSyxNQUFBQSxTQUFTLENBQUN4SixHQUFWLENBQWMsVUFBQ3dGLElBQUQsRUFBVTtBQUN0QixZQUFJbUUsU0FBUyxDQUFDdkssUUFBVixDQUFtQm9HLElBQW5CLENBQUosRUFBOEI7QUFDNUJpRSxVQUFBQSxhQUFhLEdBQUcsS0FBaEI7QUFDRDtBQUNGLE9BSkQ7QUFMeUM7O0FBRzNDLFNBQUssSUFBSS9LLElBQVQsSUFBaUJnTCxhQUFqQixFQUFnQztBQUFBLFlBQXZCaEwsSUFBdUI7QUFPL0I7O0FBQ0QsV0FBTytLLGFBQVA7QUFDRCxHQVpEOztBQWNBLE1BQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQzlILEVBQUQsRUFBUTtBQUMvQixRQUFNK0gsZ0JBQWdCLEdBQUcvSCxFQUFFLENBQUN1SCxVQUFILENBQWMsQ0FBZCxDQUF6QjtBQUNBLFFBQU1TLE1BQU0sR0FBR2hJLEVBQUUsQ0FBQyxDQUFELENBQWpCO0FBQ0EsUUFBSWlFLEdBQUcsR0FBRyxFQUFWOztBQUNBLFFBQUk4QyxXQUFXLEtBQUssWUFBcEIsRUFBa0M7QUFDaEMsVUFBTWtCLE9BQU8sR0FBRyxDQUFDRCxNQUFELEdBQVVmLE1BQU0sQ0FBQ0gsa0JBQUQsQ0FBaEM7O0FBQ0EsV0FBSyxJQUFJMUksQ0FBQyxHQUFHNEosTUFBYixFQUFxQjVKLENBQUMsR0FBRzZKLE9BQXpCLEVBQWtDN0osQ0FBQyxFQUFuQyxFQUF1QztBQUNyQzZGLFFBQUFBLEdBQUcsQ0FBQ1MsSUFBSixXQUFZd0QsTUFBTSxDQUFDQyxZQUFQLENBQW9CSixnQkFBcEIsQ0FBWixTQUFvRDNKLENBQXBEO0FBQ0Q7O0FBQ0QsYUFBTzZGLEdBQVA7QUFDRDs7QUFDRCxRQUFJOEMsV0FBVyxLQUFLLFVBQXBCLEVBQWdDO0FBQzlCLFVBQU1rQixRQUFPLEdBQUdGLGdCQUFnQixHQUFHZCxNQUFNLENBQUNILGtCQUFELENBQXpDOztBQUNBLFdBQUssSUFBSTFJLEVBQUMsR0FBRzJKLGdCQUFiLEVBQStCM0osRUFBQyxHQUFHNkosUUFBbkMsRUFBNEM3SixFQUFDLEVBQTdDLEVBQWlEO0FBQy9DNkYsUUFBQUEsR0FBRyxDQUFDUyxJQUFKLFdBQVl3RCxNQUFNLENBQUNDLFlBQVAsQ0FBb0IvSixFQUFwQixDQUFaLFNBQXFDNEosTUFBckM7QUFDRDs7QUFDRCxhQUFPL0QsR0FBUDtBQUNEO0FBQ0YsR0FsQkQ7O0FBb0JBLE1BQU1tRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxXQUFELEVBQWlCO0FBQ25DQSxJQUFBQSxXQUFXLENBQUNuSyxHQUFaLENBQWdCLFVBQUNTLFVBQUQsRUFBZ0I7QUFDOUIsVUFBTXVCLElBQUksR0FBR0wsUUFBUSxDQUFDZSxjQUFULENBQXdCakMsVUFBeEIsQ0FBYjtBQUNBdUIsTUFBQUEsSUFBSSxDQUFDQyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsb0JBQW5CO0FBQ0QsS0FIRDtBQUlELEdBTEQ7O0FBT0EsTUFBTWtJLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3JDLFFBQU1DLEVBQUUsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWF6SSxFQUF4QjtBQUNBLFFBQU0wSSxRQUFRLEdBQUdyQixrQkFBa0IsQ0FBQ21CLEVBQUQsQ0FBbkM7QUFDQSxRQUFNRyxlQUFlLEdBQUdiLGdCQUFnQixDQUFDVSxFQUFELENBQXhDO0FBQ0EsUUFBTUksMEJBQTBCLEdBQUduQixxQkFBcUIsQ0FBQ2tCLGVBQUQsQ0FBeEQ7O0FBQ0EsUUFBSSxDQUFDRCxRQUFELElBQWEsQ0FBQ0UsMEJBQWxCLEVBQThDO0FBQzVDTCxNQUFBQSxLQUFLLENBQUNFLE1BQU4sQ0FBYXRJLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLHdCQUEzQjtBQUNBO0FBQ0Q7O0FBQ0RnSSxJQUFBQSxXQUFXLENBQUNPLGVBQUQsQ0FBWDtBQUNBSixJQUFBQSxLQUFLLENBQUNFLE1BQU4sQ0FBYXRJLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLG9CQUEzQjtBQUNELEdBWEQ7O0FBYUEsTUFBTXlJLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ04sS0FBRCxFQUFXO0FBQ3JDLFFBQU1PLGFBQWEsR0FBR3pKLEtBQUssQ0FBQ2dGLElBQU4sQ0FDcEJ4RSxRQUFRLENBQUN5RSxzQkFBVCxDQUFnQyxvQkFBaEMsQ0FEb0IsQ0FBdEI7QUFHQXdFLElBQUFBLGFBQWEsQ0FBQzVLLEdBQWQsQ0FBa0IsVUFBQ3dGLElBQUQsRUFBVTtBQUMxQkEsTUFBQUEsSUFBSSxDQUFDdkQsU0FBTCxDQUFlVyxNQUFmLENBQXNCLG9CQUF0QjtBQUNELEtBRkQ7QUFHQXlILElBQUFBLEtBQUssQ0FBQ0UsTUFBTixDQUFhdEksU0FBYixDQUF1QlcsTUFBdkIsQ0FBOEIsd0JBQTlCO0FBQ0QsR0FSRDs7QUFVQSxNQUFNaUksbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDUixLQUFELEVBQVc7QUFDckMsUUFBTUMsRUFBRSxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYXpJLEVBQXhCO0FBQ0EsUUFBTTBJLFFBQVEsR0FBR3JCLGtCQUFrQixDQUFDbUIsRUFBRCxDQUFuQztBQUNBLFFBQU1HLGVBQWUsR0FBR2IsZ0JBQWdCLENBQUNVLEVBQUQsQ0FBeEM7QUFDQSxRQUFNSSwwQkFBMEIsR0FBR25CLHFCQUFxQixDQUFDa0IsZUFBRCxDQUF4RDs7QUFFQSxRQUFJRCxRQUFRLElBQUlFLDBCQUFaLElBQTBDOUIsa0JBQWtCLEdBQUcsQ0FBbkUsRUFBc0U7QUFDcEUsVUFBTWtDLFlBQVksR0FBR2hDLEtBQUssQ0FBQ0Ysa0JBQUQsQ0FBMUI7QUFDQUgsTUFBQUEsd0VBQUEsQ0FBa0NxQyxZQUFsQyxFQUFnREwsZUFBaEQ7QUFDQUEsTUFBQUEsZUFBZSxDQUFDekssR0FBaEIsQ0FBb0IsVUFBQ1MsVUFBRCxFQUFnQjtBQUNsQyxZQUFNdUIsSUFBSSxHQUFHTCxRQUFRLENBQUNlLGNBQVQsQ0FBd0JqQyxVQUF4QixDQUFiO0FBQ0F1QixRQUFBQSxJQUFJLENBQUNDLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixhQUFuQjtBQUNELE9BSEQ7QUFJQTBHLE1BQUFBLGtCQUFrQixHQUFHQSxrQkFBa0IsR0FBRyxDQUExQyxDQVBvRSxDQVNwRTs7QUFDQSxVQUFJQSxrQkFBa0IsR0FBRyxDQUF6QixFQUE0QjtBQUMxQixZQUFNbEgsSUFBSSxHQUFHQyxRQUFRLENBQUNlLGNBQVQsQ0FBd0Isa0JBQXhCLENBQWI7QUFDQWhCLFFBQUFBLElBQUksQ0FBQ2tCLE1BQUw7QUFDQThGLFFBQUFBLDhEQUFjO0FBQ2RwRyxRQUFBQSw4RUFBa0I7QUFDbkI7QUFDRjtBQUNGLEdBdkJEOztBQXlCQSxNQUFNMEksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDWCxLQUFELEVBQVc7QUFDbkMsUUFBTVksR0FBRyxHQUFHWixLQUFLLENBQUNhLEdBQWxCOztBQUNBLFFBQUlELEdBQUcsS0FBSyxHQUFSLElBQWVwQyxXQUFXLEtBQUssWUFBbkMsRUFBaUQ7QUFDL0NBLE1BQUFBLFdBQVcsR0FBRyxVQUFkO0FBQ0E7QUFDRDs7QUFDRCxRQUFJb0MsR0FBRyxLQUFLLEdBQVIsSUFBZXBDLFdBQVcsS0FBSyxVQUFuQyxFQUErQztBQUM3Q0EsTUFBQUEsV0FBVyxHQUFHLFlBQWQ7QUFDQTtBQUNEO0FBQ0YsR0FWRDs7QUFZQSxNQUFNc0MsS0FBSyxHQUFHaEssS0FBSyxDQUFDZ0YsSUFBTixDQUFXeEUsUUFBUSxDQUFDeUUsc0JBQVQsQ0FBZ0MsaUJBQWhDLENBQVgsQ0FBZDtBQUNBK0UsRUFBQUEsS0FBSyxDQUFDbkwsR0FBTixDQUFVLFVBQUN3RixJQUFELEVBQVU7QUFDbEJBLElBQUFBLElBQUksQ0FBQzhCLGdCQUFMLENBQXNCLFlBQXRCLEVBQW9DOEMsbUJBQXBDO0FBQ0E1RSxJQUFBQSxJQUFJLENBQUM4QixnQkFBTCxDQUFzQixZQUF0QixFQUFvQ3FELG1CQUFwQztBQUNBbkYsSUFBQUEsSUFBSSxDQUFDOEIsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0J1RCxtQkFBL0I7QUFDRCxHQUpEO0FBS0FsSixFQUFBQSxRQUFRLENBQUNTLElBQVQsQ0FBY2tGLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDMEQsaUJBQXhDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7OztBQ3pKRDtBQUVlLFNBQVN0QyxjQUFULEdBQTBCO0FBQ3ZDLE1BQUlFLGtCQUFrQixHQUFHLENBQXpCO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLFlBQWxCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLENBQUMsU0FBRCxFQUFZLFlBQVosRUFBMEIsV0FBMUIsRUFBdUMsS0FBdkMsRUFBOEMsWUFBOUMsQ0FBZDtBQUNBLE1BQU1DLE1BQU0sR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQWY7QUFDQSxNQUFNcUMsSUFBSSxHQUFHO0FBQ1g7QUFDQTVNLElBQUFBLE9BQU8sRUFBRTtBQUNQOEgsTUFBQUEsR0FBRyxFQUFFLENBREU7QUFDQztBQUNSNkQsTUFBQUEsV0FBVyxFQUFFO0FBRk4sS0FGRTtBQU1YeEwsSUFBQUEsVUFBVSxFQUFFO0FBQ1YySCxNQUFBQSxHQUFHLEVBQUUsQ0FESztBQUNGO0FBQ1I2RCxNQUFBQSxXQUFXLEVBQUU7QUFGSCxLQU5EO0FBVVh2TCxJQUFBQSxTQUFTLEVBQUU7QUFDVDBILE1BQUFBLEdBQUcsRUFBRSxDQURJO0FBQ0Q7QUFDUjZELE1BQUFBLFdBQVcsRUFBRTtBQUZKLEtBVkE7QUFjWHRMLElBQUFBLEdBQUcsRUFBRTtBQUNIeUgsTUFBQUEsR0FBRyxFQUFFLENBREY7QUFDSztBQUNSNkQsTUFBQUEsV0FBVyxFQUFFO0FBRlYsS0FkTTtBQWtCWHJMLElBQUFBLFVBQVUsRUFBRTtBQUNWd0gsTUFBQUEsR0FBRyxFQUFFLENBREs7QUFDRjtBQUNSNkQsTUFBQUEsV0FBVyxFQUFFO0FBRkg7QUFsQkQsR0FBYjtBQXVCQSxNQUFNTSxlQUFlLEdBQUcsRUFBeEI7QUFFQSxNQUFNMUssT0FBTyxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDLEdBQTlDLENBQWhCOztBQUVBLE1BQU1zTCxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDNUssVUFBRCxFQUFnQjtBQUNoQyxRQUFNb0osZ0JBQWdCLEdBQUdwSixVQUFVLENBQUM0SSxVQUFYLENBQXNCLENBQXRCLENBQXpCO0FBQ0EsUUFBTVMsTUFBTSxHQUFHckosVUFBVSxDQUFDLENBQUQsQ0FBekI7QUFDQSxRQUFJc0YsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsUUFBSThDLFdBQVcsS0FBSyxZQUFwQixFQUFrQztBQUNoQyxVQUFNa0IsT0FBTyxHQUFHLENBQUNELE1BQUQsR0FBVWYsTUFBTSxDQUFDSCxrQkFBRCxDQUFoQzs7QUFDQSxXQUFLLElBQUkxSSxDQUFDLEdBQUc0SixNQUFiLEVBQXFCNUosQ0FBQyxHQUFHNkosT0FBekIsRUFBa0M3SixDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDNkYsUUFBQUEsR0FBRyxDQUFDUyxJQUFKLFdBQVl3RCxNQUFNLENBQUNDLFlBQVAsQ0FBb0JKLGdCQUFwQixDQUFaLFNBQW9EM0osQ0FBcEQ7QUFDRDs7QUFDRCxhQUFPNkYsR0FBUDtBQUNEOztBQUNELFFBQUk4QyxXQUFXLEtBQUssVUFBcEIsRUFBZ0M7QUFDOUIsVUFBTWtCLFFBQU8sR0FBR0YsZ0JBQWdCLEdBQUdkLE1BQU0sQ0FBQ0gsa0JBQUQsQ0FBekM7O0FBQ0EsV0FBSyxJQUFJMUksRUFBQyxHQUFHMkosZ0JBQWIsRUFBK0IzSixFQUFDLEdBQUc2SixRQUFuQyxFQUE0QzdKLEVBQUMsRUFBN0MsRUFBaUQ7QUFDL0M2RixRQUFBQSxHQUFHLENBQUNTLElBQUosV0FBWXdELE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQi9KLEVBQXBCLENBQVosU0FBcUM0SixNQUFyQztBQUNEOztBQUNELGFBQU8vRCxHQUFQO0FBQ0Q7QUFDRixHQWxCRDs7QUFvQkEsTUFBTXVGLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQixRQUFJekMsV0FBVyxLQUFLLFlBQXBCLEVBQWtDO0FBQ2hDQSxNQUFBQSxXQUFXLEdBQUcsVUFBZDtBQUNELEtBRkQsTUFFTztBQUNMQSxNQUFBQSxXQUFXLEdBQUcsWUFBZDtBQUNEO0FBQ0YsR0FORDs7QUFRQSxNQUFNMEMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixRQUFJMUMsV0FBVyxLQUFLLFlBQXBCLEVBQWtDO0FBQ2hDLFVBQU0yQyxhQUFhLEdBQUd6TCxPQUFPLENBQUNZLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBRCxDQUE3QjtBQUNBLFVBQU1rQixhQUFhLEdBQUdwQixJQUFJLENBQUNDLEtBQUwsQ0FDcEJELElBQUksQ0FBQ0UsTUFBTCxNQUFpQnVLLElBQUksQ0FBQ3RDLEtBQUssQ0FBQ0Ysa0JBQUQsQ0FBTixDQUFKLENBQWdDdEMsR0FBaEMsR0FBc0MsQ0FBdkQsQ0FEb0IsQ0FBdEI7QUFHQSxhQUFPa0YsYUFBYSxHQUFHekosYUFBdkI7QUFDRDs7QUFDRCxRQUFJOEcsV0FBVyxLQUFLLFVBQXBCLEVBQWdDO0FBQzlCLFVBQU0yQyxjQUFhLEdBQ2pCekwsT0FBTyxDQUNMWSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCdUssSUFBSSxDQUFDdEMsS0FBSyxDQUFDRixrQkFBRCxDQUFOLENBQUosQ0FBZ0N0QyxHQUFoQyxHQUFzQyxDQUF2RCxDQUFYLENBREssQ0FEVDs7QUFJQSxVQUFNdkUsY0FBYSxHQUFHcEIsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUEzQixDQUF0Qjs7QUFDQSxhQUFPMkssY0FBYSxHQUFHekosY0FBdkI7QUFDRDtBQUNGLEdBaEJEOztBQWtCQSxNQUFNMEosUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFNQyxpQkFBaUIsR0FBR0gsVUFBVSxFQUFwQztBQUNBLFFBQU1kLGVBQWUsR0FBR1ksU0FBUyxDQUFDSyxpQkFBRCxDQUFqQztBQUNBLFdBQU9qQixlQUFQO0FBQ0QsR0FKRDs7QUFNQSxHQUFDLFNBQVNrQixrQkFBVCxHQUE4QjtBQUFBLCtCQUNwQnpMLENBRG9CO0FBRTNCLFVBQU0wTCxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFlBQUlDLE1BQU0sR0FBRyxJQUFiO0FBQ0EsWUFBSUMsSUFBSSxHQUFHTCxRQUFRLEVBQW5CO0FBQ0FLLFFBQUFBLElBQUksQ0FBQzlMLEdBQUwsQ0FBUyxVQUFDUyxVQUFELEVBQWdCO0FBQ3ZCLGNBQUlnSyxlQUFlLENBQUNyTCxRQUFoQixDQUF5QnFCLFVBQXpCLENBQUosRUFBMEM7QUFDeENvTCxZQUFBQSxNQUFNLEdBQUcsS0FBVDtBQUNEO0FBQ0YsU0FKRDs7QUFLQSxZQUFJQSxNQUFNLEtBQUssS0FBZixFQUFzQjtBQUNwQkQsVUFBQUEsV0FBVztBQUNaOztBQUNELFlBQUlDLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ25CQyxVQUFBQSxJQUFJLENBQUM5TCxHQUFMLENBQVMsVUFBQ1MsVUFBRCxFQUFnQjtBQUN2QjJLLFlBQUFBLElBQUksQ0FBQ3RDLEtBQUssQ0FBQ0Ysa0JBQUQsQ0FBTixDQUFKLENBQWdDdUIsV0FBaEMsQ0FBNEMzRCxJQUE1QyxDQUFpRC9GLFVBQWpEO0FBQ0FnSyxZQUFBQSxlQUFlLENBQUNqRSxJQUFoQixDQUFxQi9GLFVBQXJCO0FBQ0QsV0FIRDtBQUlEO0FBQ0YsT0FqQkQ7O0FBa0JBbUwsTUFBQUEsV0FBVztBQUNYaEQsTUFBQUEsa0JBQWtCO0FBQ2xCMEMsTUFBQUEsa0JBQWtCO0FBdEJTOztBQUM3QixTQUFLLElBQUlwTCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQUEsWUFBbkJBLENBQW1CO0FBc0IzQjtBQUNGLEdBeEJEOztBQTBCQSxHQUFDLFNBQVM2TCxhQUFULEdBQXlCO0FBQ3hCLFNBQUssSUFBSXJOLElBQVQsSUFBaUIwTSxJQUFqQixFQUF1QjtBQUNyQixVQUFNWSxjQUFjLEdBQUdaLElBQUksQ0FBQzFNLElBQUQsQ0FBSixDQUFXeUwsV0FBbEM7QUFDQTFCLE1BQUFBLHdFQUFBLENBQWtDL0osSUFBbEMsRUFBd0NzTixjQUF4QztBQUNEO0FBQ0YsR0FMRDtBQU1EOzs7Ozs7Ozs7Ozs7Ozs7QUN0SEQ7QUFFZSxTQUFTM0osWUFBVCxHQUF3QjtBQUNyQyxNQUFNWCxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsTUFBTXFLLHFCQUFxQixHQUFHdEssUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTlCO0FBQ0EsTUFBTXNLLHNCQUFzQixHQUFHdkssUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQS9CO0FBQ0EsTUFBTXVLLFlBQVksR0FBR3hLLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFyQjtBQUNBLE1BQU13SyxTQUFTLEdBQUd6SyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FDZCxPQURjLEVBRWQsT0FGYyxFQUdkLE9BSGMsRUFJZCxPQUpjLEVBS2QsT0FMYyxFQU1kLE9BTmMsRUFPZCxPQVBjLEVBUWQsT0FSYyxFQVNkLE9BVGMsRUFVZCxRQVZjLEVBV2QsUUFYYyxDQUFoQjtBQWNBSCxFQUFBQSxJQUFJLENBQUNJLEVBQUwsR0FBVSxrQkFBVjtBQUNBbUssRUFBQUEscUJBQXFCLENBQUNuSyxFQUF0QixHQUEyQix1QkFBM0I7QUFDQW9LLEVBQUFBLHNCQUFzQixDQUFDcEssRUFBdkIsR0FBNEIsd0JBQTVCO0FBQ0FxSyxFQUFBQSxZQUFZLENBQUNySyxFQUFiLEdBQWtCLGNBQWxCO0FBQ0FzSyxFQUFBQSxTQUFTLENBQUN0SyxFQUFWLEdBQWUsV0FBZjtBQUNBcUssRUFBQUEsWUFBWSxDQUFDMUcsU0FBYixHQUF5QixXQUF6QjtBQUNBMkcsRUFBQUEsU0FBUyxDQUFDM0csU0FBVixHQUFzQixPQUF0Qjs7QUFFQSxPQUFLLElBQUl2RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLElBQXBCLEVBQTBCQSxDQUFDLEVBQTNCLEVBQStCO0FBQzdCLFFBQU02QixhQUFhLEdBQUdwQixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLENBQXRCO0FBQ0EsUUFBTW1CLElBQUksR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDQUksSUFBQUEsSUFBSSxDQUFDQyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsNkJBQW5CO0FBQ0FGLElBQUFBLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxHQUFmLENBQW1CTCxPQUFPLENBQUNFLGFBQUQsQ0FBMUI7QUFDQUwsSUFBQUEsSUFBSSxDQUFDUyxNQUFMLENBQVlILElBQVo7QUFDRDs7QUFDRCxPQUFLLElBQUk5QixFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHLEdBQXBCLEVBQXlCQSxFQUFDLEVBQTFCLEVBQThCO0FBQzVCLFFBQU04QixLQUFJLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiOztBQUNBSSxJQUFBQSxLQUFJLENBQUNGLEVBQUwsR0FBVXlHLG9EQUFXLENBQUNySSxFQUFELENBQXJCOztBQUNBOEIsSUFBQUEsS0FBSSxDQUFDQyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsaUJBQW5COztBQUNBK0osSUFBQUEscUJBQXFCLENBQUM5SixNQUF0QixDQUE2QkgsS0FBN0I7QUFDRDs7QUFDREwsRUFBQUEsUUFBUSxDQUFDUyxJQUFULENBQWNELE1BQWQsQ0FBcUJULElBQXJCO0FBQ0F3SyxFQUFBQSxzQkFBc0IsQ0FBQy9KLE1BQXZCLENBQThCaUssU0FBOUI7QUFDQUYsRUFBQUEsc0JBQXNCLENBQUMvSixNQUF2QixDQUE4QmdLLFlBQTlCO0FBQ0F6SyxFQUFBQSxJQUFJLENBQUNTLE1BQUwsQ0FBWThKLHFCQUFaO0FBQ0F2SyxFQUFBQSxJQUFJLENBQUNTLE1BQUwsQ0FBWStKLHNCQUFaO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREQ7QUFDQTtBQUVlLFNBQVN2RixXQUFULEdBQXVCO0FBQ3BDdEUsRUFBQUEsb0VBQVk7QUFDWnNHLEVBQUFBLHVFQUFlO0FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05EO0FBQ0E7QUFDQTtBQUVBLElBQU1GLElBQUksR0FBR3ZLLHlFQUFRLEVBQXJCO0FBQ0FvSywrRUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xSO0FBQ2tJO0FBQzdCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSx3REFBd0Qsa0JBQWtCLDJDQUEyQyx3Q0FBd0MsaUJBQWlCLGdCQUFnQixHQUFHLFNBQVMsOEdBQThHLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSx1Q0FBdUMsa0JBQWtCLDJDQUEyQyx3Q0FBd0MsaUJBQWlCLGdCQUFnQixHQUFHLHFCQUFxQjtBQUNyakI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUNrSTtBQUM3QjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELG9CQUFvQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1QixzQkFBc0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIscUJBQXFCLEdBQUcsd0JBQXdCLFFBQVEsaUNBQWlDLEtBQUssVUFBVSxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxZQUFZLGtDQUFrQyxLQUFLLEdBQUcsU0FBUyw4R0FBOEcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLGdDQUFnQyxvQkFBb0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1QixzQkFBc0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHFCQUFxQixHQUFHLHdCQUF3QixRQUFRLGlDQUFpQyxLQUFLLFVBQVUsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssWUFBWSxrQ0FBa0MsS0FBSyxHQUFHLHFCQUFxQjtBQUNyK0g7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUNrSTtBQUM3QjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGtCQUFrQiw0QkFBNEIsNEJBQTRCLGlCQUFpQixHQUFHLFVBQVUsc0JBQXNCLEdBQUcsWUFBWSxzQkFBc0IsR0FBRyxpQkFBaUIsa0JBQWtCLDJDQUEyQyx3Q0FBd0MsaUJBQWlCLGdCQUFnQixHQUFHLG1CQUFtQixrQkFBa0IsMkNBQTJDLHdDQUF3QyxpQkFBaUIsZ0JBQWdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLFlBQVksaUJBQWlCLDhCQUE4QixHQUFHLFlBQVksNEJBQTRCLEdBQUcsdUJBQXVCLDRCQUE0QixHQUFHLCtCQUErQiw4QkFBOEIsR0FBRyxpQkFBaUIsOEJBQThCLEdBQUcsdUJBQXVCLDRCQUE0QixHQUFHLFNBQVMsNEdBQTRHLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksZ0NBQWdDLGtCQUFrQiw0QkFBNEIsNEJBQTRCLGlCQUFpQixHQUFHLFVBQVUsc0JBQXNCLEdBQUcsWUFBWSxzQkFBc0IsR0FBRyxpQkFBaUIsa0JBQWtCLDJDQUEyQyx3Q0FBd0MsaUJBQWlCLGdCQUFnQixHQUFHLG1CQUFtQixrQkFBa0IsMkNBQTJDLHdDQUF3QyxpQkFBaUIsZ0JBQWdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLFlBQVksaUJBQWlCLDhCQUE4QixHQUFHLFlBQVksNEJBQTRCLEdBQUcsdUJBQXVCLDRCQUE0QixHQUFHLCtCQUErQiw4QkFBOEIsR0FBRyxpQkFBaUIsOEJBQThCLEdBQUcsdUJBQXVCLDRCQUE0QixHQUFHLHFCQUFxQjtBQUNoeUU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUNrSTtBQUM3QjtBQUNhO0FBQ0Q7QUFDQTtBQUNqSCw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLDBCQUEwQix1RkFBaUM7QUFDM0QsMEJBQTBCLHNGQUFpQztBQUMzRCwwQkFBMEIsc0ZBQWlDO0FBQzNEO0FBQ0EsbURBQW1ELGtFQUFrRTtBQUNySDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J2QztBQUNrSTtBQUM3QjtBQUNlO0FBQ3BILDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YsMEJBQTBCLHlGQUFpQztBQUMzRCwySEFBMkg7QUFDM0g7QUFDQSxzREFBc0Qsa0JBQWtCLDRCQUE0Qix3QkFBd0IsMENBQTBDLHFCQUFxQixHQUFHLHdCQUF3Qiw0QkFBNEIsR0FBRyxnQkFBZ0IsOEJBQThCLDhCQUE4QixHQUFHLGlCQUFpQix3QkFBd0IsNkNBQTZDLEdBQUcsaUJBQWlCLHdCQUF3Qiw4QkFBOEIsR0FBRyxnQkFBZ0Isd0JBQXdCLDhCQUE4QixHQUFHLFVBQVUsd0JBQXdCLDhCQUE4QixHQUFHLG9CQUFvQixpQkFBaUIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3Qiw4QkFBOEIsR0FBRyxnQkFBZ0IsaUJBQWlCLHdCQUF3QixHQUFHLGVBQWUsd0JBQXdCLDhCQUE4QixHQUFHLFNBQVMsMkdBQTJHLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxtREFBbUQscUZBQXFGLGdCQUFnQixrQkFBa0IsNEJBQTRCLHdCQUF3QiwwQ0FBMEMscUJBQXFCLEdBQUcsd0JBQXdCLDRCQUE0QixHQUFHLGdCQUFnQiw4QkFBOEIsOEJBQThCLEdBQUcsaUJBQWlCLHdCQUF3Qiw2Q0FBNkMsR0FBRyxpQkFBaUIsd0JBQXdCLDhCQUE4QixHQUFHLGdCQUFnQix3QkFBd0IsOEJBQThCLEdBQUcsVUFBVSx3QkFBd0IsOEJBQThCLEdBQUcsb0JBQW9CLGlCQUFpQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLDhCQUE4QixHQUFHLGdCQUFnQixpQkFBaUIsd0JBQXdCLEdBQUcsZUFBZSx3QkFBd0IsOEJBQThCLEdBQUcscUJBQXFCO0FBQzc0RTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z2QztBQUNrSTtBQUM3QjtBQUNlO0FBQ3BILDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YsMEJBQTBCLHlGQUFpQztBQUMzRDtBQUNBLGlEQUFpRCxzQkFBc0Isc0JBQXNCLEdBQUcsNkJBQTZCLDhCQUE4Qiw4QkFBOEIsR0FBRyw4QkFBOEIsOEJBQThCLDhCQUE4QixHQUFHLGFBQWEsOEJBQThCLGlCQUFpQixHQUFHLFlBQVksOEJBQThCLEdBQUcsWUFBWSw4QkFBOEIsaUJBQWlCLEdBQUcsWUFBWSw4QkFBOEIsaUJBQWlCLEdBQUcsWUFBWSw4QkFBOEIsaUJBQWlCLEdBQUcsWUFBWSw4QkFBOEIsaUJBQWlCLEdBQUcsWUFBWSw4QkFBOEIsaUJBQWlCLEdBQUcsWUFBWSw4QkFBOEIsaUJBQWlCLEdBQUcsVUFBVSw4QkFBOEIsaUJBQWlCLEdBQUcsWUFBWSw4QkFBOEIsaUJBQWlCLEdBQUcsYUFBYSw4QkFBOEIsaUJBQWlCLEdBQUcsYUFBYSw4QkFBOEIsaUJBQWlCLEdBQUcsU0FBUywyR0FBMkcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsa0RBQWtELFdBQVcsc0JBQXNCLHNCQUFzQixHQUFHLDZCQUE2Qiw4QkFBOEIsOEJBQThCLEdBQUcsOEJBQThCLDhCQUE4Qiw4QkFBOEIsR0FBRyxhQUFhLDhCQUE4QixpQkFBaUIsR0FBRyxZQUFZLDhCQUE4QixHQUFHLFlBQVksOEJBQThCLGlCQUFpQixHQUFHLFlBQVksOEJBQThCLGlCQUFpQixHQUFHLFlBQVksOEJBQThCLGlCQUFpQixHQUFHLFlBQVksOEJBQThCLGlCQUFpQixHQUFHLFlBQVksOEJBQThCLGlCQUFpQixHQUFHLFlBQVksOEJBQThCLGlCQUFpQixHQUFHLFVBQVUsOEJBQThCLGlCQUFpQixHQUFHLFlBQVksOEJBQThCLGlCQUFpQixHQUFHLGFBQWEsOEJBQThCLGlCQUFpQixHQUFHLGFBQWEsOEJBQThCLGlCQUFpQixHQUFHLHFCQUFxQjtBQUN4bUY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R2QztBQUNrSTtBQUM3QjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHdIQUF3SDtBQUN4SDtBQUNBLDhFQUE4RSx3QkFBd0IsR0FBRyx1QkFBdUIsdUJBQXVCLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLGdCQUFnQixpQkFBaUIsR0FBRyw0QkFBNEIsa0JBQWtCLDJDQUEyQyx3Q0FBd0MsdUJBQXVCLGVBQWUsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsOEJBQThCLEdBQUcsNkJBQTZCLGtCQUFrQix3QkFBd0Isa0NBQWtDLHdCQUF3Qix1QkFBdUIsYUFBYSxlQUFlLGdCQUFnQixnQkFBZ0Isd0JBQXdCLDJCQUEyQixHQUFHLGdCQUFnQixrQkFBa0IsNEJBQTRCLGlCQUFpQixxQkFBcUIsd0NBQXdDLEdBQUcsbUJBQW1CLG1CQUFtQix5Q0FBeUMsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsa0JBQWtCLDhCQUE4Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsNkJBQTZCLHFCQUFxQixHQUFHLFNBQVMsOEdBQThHLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLDBHQUEwRyx3Q0FBd0Msd0JBQXdCLEdBQUcsdUJBQXVCLHVCQUF1QixrQkFBa0IsMkNBQTJDLHdDQUF3QyxnQkFBZ0IsaUJBQWlCLEdBQUcsNEJBQTRCLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLHVCQUF1QixlQUFlLGdCQUFnQixpQkFBaUIsZ0JBQWdCLDhCQUE4QixHQUFHLDZCQUE2QixrQkFBa0Isd0JBQXdCLGtDQUFrQyx3QkFBd0IsdUJBQXVCLGFBQWEsZUFBZSxnQkFBZ0IsZ0JBQWdCLHdCQUF3QiwyQkFBMkIsR0FBRyxnQkFBZ0Isa0JBQWtCLDRCQUE0QixpQkFBaUIscUJBQXFCLHdDQUF3QyxHQUFHLG1CQUFtQixtQkFBbUIseUNBQXlDLEdBQUcsc0JBQXNCLDhCQUE4QixHQUFHLGtCQUFrQiw4QkFBOEIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDZCQUE2QixxQkFBcUIsR0FBRyxxQkFBcUI7QUFDM3RHO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSdkM7QUFDc0g7QUFDN0I7QUFDdUM7QUFDRztBQUNBO0FBQ25JLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YsMEJBQTBCLGlIQUFpQztBQUMzRCwwQkFBMEIsb0hBQWlDO0FBQzNELDBCQUEwQixvSEFBaUM7QUFDM0Q7QUFDQSxtREFBbUQsa0VBQWtFO0FBQ3JIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDYjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixrQ0FBa0M7O0FBRWxDLDhCQUE4Qjs7QUFFOUIsa0RBQWtELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Q7O0FBRTdTLHVDQUF1Qyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxvQkFBb0I7O0FBRXpLLHlDQUF5QywwR0FBMEcsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsdUNBQXVDLGNBQWMsV0FBVyxZQUFZLFVBQVUsTUFBTSxtREFBbUQsVUFBVSxzQkFBc0I7O0FBRW5mLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0EsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDaEdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUMvQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9HQU1FX0xPT1AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWUvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9oZWxwZXJzL3JlbmRlcl9iYWNrZ3JvdW5kX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9oZWxwZXJzL3JlbmRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvZ2FtZV9ib2FyZHMvcmVuZGVyX2dhbWVfYm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvYmF0dGxlc2hpcF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9jb2xvcl9iYXR0bGVzaGlwX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2NvbG9yX3NoaXBfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvY29sb3Jfc3RhcnRfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvY29sb3Jfd2F0ZXJfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9saXN0ZW5lcnNfaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL3NoaXBfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvc3RhcnRfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hvbWVwYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9oZWxwZXJzL2Nvb3JkaW5hdGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9oZWxwZXJzL2xvZ2ljX2xpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvaGVscGVycy9wbGFjZV9haV9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvaGVscGVycy9yZW5kZXJfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL3BsYWNlX3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9hbmltYXRvci5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9nbG9iYWwuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3Mvc2hpcHMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3Mvd2F0ZXIuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVsb29wKCkge1xuICBjb25zdCBQTEFZRVIxID0gbmV3IFBsYXllcignaHVtYW4nKTtcbiAgY29uc3QgUExBWUVSMiA9IG5ldyBQbGF5ZXIoJ2FpJyk7XG4gIGNvbnN0IFBMQVlFUjFfR0FNRUJPQVJEID0gbmV3IEdhbWVib2FyZCgpO1xuICBjb25zdCBQTEFZRVIyX0dBTUVCT0FSRCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICByZXR1cm4geyBQTEFZRVIxLCBQTEFZRVIyLCBQTEFZRVIxX0dBTUVCT0FSRCwgUExBWUVSMl9HQU1FQk9BUkQgfTtcbn1cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIHNoaXBzID0ge1xuICAgIGNhcnJpZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDUpLFxuICAgIH0sXG4gICAgYmF0dGxlc2hpcDoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoNCksXG4gICAgfSxcbiAgICBkZXN0cm95ZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDMpLFxuICAgIH0sXG4gICAgc3ViOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCgzKSxcbiAgICB9LFxuICAgIHBhdHJvbEJvYXQ6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDIpLFxuICAgIH0sXG4gIH07XG4gIGhpdHMgPSBbXTtcbiAgbWlzc2VzID0gW107XG5cbiAgcGxhY2Vfc2hpcChzaGlwLCBpbnB1dF9jb29yZGluYXRlcykge1xuICAgIHRoaXMuc2hpcHNbc2hpcF0ucG9zaXRpb24gPSBpbnB1dF9jb29yZGluYXRlcztcbiAgfVxuICAjbWlzc19yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMubWlzc2VzLCBpbnB1dF9jb29yZGluYXRlXS5zb3J0KCk7XG4gIH1cbiAgI2hpdF9yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuaGl0cywgaW5wdXRfY29vcmRpbmF0ZV0uc29ydCgpO1xuICB9XG4gIHJlY2VpdmVfYXR0YWNrKGlucHV0X2Nvb3JkaW5hdGUpIHtcbiAgICBsZXQgbWlzcyA9IHRydWU7XG4gICAgZm9yIChsZXQgc2hpcCBpbiB0aGlzLnNoaXBzKSB7XG4gICAgICBjb25zdCBXQVNfSElUID0gdGhpcy5zaGlwc1tzaGlwXS5wb3NpdGlvbi5pbmNsdWRlcyhpbnB1dF9jb29yZGluYXRlKTtcbiAgICAgIGlmIChXQVNfSElUKSB7XG4gICAgICAgIHRoaXMuaGl0cyA9IHRoaXMuI2hpdF9yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgICAgICBjb25zdCBISVRfSU5ERVggPSB0aGlzLnNoaXBzW3NoaXBdLnBvc2l0aW9uLmluZGV4T2YoaW5wdXRfY29vcmRpbmF0ZSk7XG4gICAgICAgIHRoaXMuc2hpcHNbc2hpcF0uc2hpcC5oaXQoSElUX0lOREVYKTtcbiAgICAgICAgbWlzcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobWlzcykge1xuICAgICAgdGhpcy5taXNzZXMgPSB0aGlzLiNtaXNzX3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSk7XG4gICAgfVxuICB9XG4gIGFsbF9zdW5rKCkge1xuICAgIGxldCBpc19hbGxfc3VuayA9IHRydWU7XG4gICAgZm9yIChsZXQgc2hpcCBpbiB0aGlzLnNoaXBzKSB7XG4gICAgICBjb25zdCBhbGxfc3Vua19jYWxsID0gdGhpcy5zaGlwc1tzaGlwXS5zaGlwLmlzX3N1bmsoKTtcbiAgICAgIGlmIChhbGxfc3Vua19jYWxsID09PSBmYWxzZSkge1xuICAgICAgICBpc19hbGxfc3VuayA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzX2FsbF9zdW5rO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgfVxuICBtb3ZlcyA9IFtdO1xuICByZW1haW5pbmdfbW92ZXMgPSBbXTtcblxuICAjcmVtYWluaW5nX21vdmVzX3JlZHVjZXIoY29vcmRpbmF0ZSkge1xuICAgIHRoaXMucmVtYWluaW5nX21vdmVzID0gWy4uLnRoaXMucmVtYWluaW5nX21vdmVzLCBjb29yZGluYXRlXTtcbiAgfVxuICAjZmlsbF9yZW1haW5pbmdfbW92ZXMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IExFVFRFUlMgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onXTtcbiAgICBMRVRURVJTLm1hcCgobGV0dGVyKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgdGhpcy4jcmVtYWluaW5nX21vdmVzX3JlZHVjZXIoYCR7bGV0dGVyfSR7aX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSkoKTtcbiAgI2FpX21vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVtYWluaW5nX21vdmVzW1xuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5yZW1haW5pbmdfbW92ZXMubGVuZ3RoKVxuICAgIF07XG4gIH1cbiAgI2ZpbHRlcl9yZW1haW5pbmdfbW92ZXMoY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IFJFTUFJTklOR19NT1ZFU19DT1BZID0gWy4uLnRoaXMucmVtYWluaW5nX21vdmVzXTtcbiAgICBjb25zdCBSRU1BSU5JTkcgPSBSRU1BSU5JTkdfTU9WRVNfQ09QWS5maWx0ZXIoKHJlbWFpbmluZ19tb3ZlKSA9PiB7XG4gICAgICByZXR1cm4gcmVtYWluaW5nX21vdmUgIT09IGNvb3JkaW5hdGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIFJFTUFJTklORztcbiAgfVxuICAjYXR0YWNrX3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIHJldHVybiBbLi4udGhpcy5tb3ZlcywgaW5wdXRfY29vcmRpbmF0ZV07XG4gIH1cbiAgYWlfYXR0YWNrKGJvYXJkKSB7XG4gICAgaWYgKHRoaXMucGxheWVyICE9PSAnYWknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsYXllciBuZWVkcyB0byBiZSBBSScpO1xuICAgIH1cbiAgICBjb25zdCBDT09SRElOQVRFID0gdGhpcy4jYWlfbW92ZSgpO1xuICAgIHRoaXMucmVtYWluaW5nX21vdmVzID0gdGhpcy4jZmlsdGVyX3JlbWFpbmluZ19tb3ZlcyhDT09SRElOQVRFKTtcbiAgICB0aGlzLm1vdmVzID0gdGhpcy4jYXR0YWNrX3JlZHVjZXIoQ09PUkRJTkFURSk7XG4gICAgYm9hcmQucmVjZWl2ZV9hdHRhY2soQ09PUkRJTkFURSk7XG4gICAgcmV0dXJuIENPT1JESU5BVEU7XG4gIH1cbiAgaHVtYW5fYXR0YWNrKGJvYXJkLCBjb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMucGxheWVyICE9PSAnaHVtYW4nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsYXllciBuZWVkcyB0byBiZSBhIGh1bWFuJyk7XG4gICAgfVxuICAgIGNvbnN0IEZJTFRFUkVEX01PVkVTID0gdGhpcy4jZmlsdGVyX3JlbWFpbmluZ19tb3Zlcyhjb29yZGluYXRlKTtcbiAgICB0aGlzLnJlbWFpbmluZ19tb3ZlcyA9IEZJTFRFUkVEX01PVkVTO1xuICAgIHRoaXMubW92ZXMgPSB0aGlzLiNhdHRhY2tfcmVkdWNlcihjb29yZGluYXRlKTtcbiAgICBib2FyZC5yZWNlaXZlX2F0dGFjayhjb29yZGluYXRlKTtcbiAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMuaGl0cyA9IG5ldyBBcnJheShsZW5ndGgpLmZpbGwoZmFsc2UpO1xuICB9XG5cbiAgI2hpdF9yZWR1Y2VyKGhpdHNfYXJyYXksIHBvc2l0aW9uX2hpdCkge1xuICAgIGNvbnN0IEhJVFMgPSBbLi4uaGl0c19hcnJheV07XG4gICAgSElUU1twb3NpdGlvbl9oaXRdID0gdHJ1ZTtcbiAgICByZXR1cm4gSElUUztcbiAgfVxuICBoaXQocG9zaXRpb25faGl0KSB7XG4gICAgdGhpcy5oaXRzID0gdGhpcy4jaGl0X3JlZHVjZXIodGhpcy5oaXRzLCBwb3NpdGlvbl9oaXQpO1xuICB9XG4gIGlzX3N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cy5ldmVyeSgocG9zaXRpb24pID0+IHBvc2l0aW9uID09PSB0cnVlKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyX2JhY2tncm91bmRfdGlsZXMoKSB7XG4gIGNvbnN0IE1BSU4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IENMQVNTRVMgPSBbXG4gICAgJ2JsdWUxJyxcbiAgICAnYmx1ZTInLFxuICAgICdibHVlMycsXG4gICAgJ2JsdWU0JyxcbiAgICAnYmx1ZTUnLFxuICAgICdibHVlNicsXG4gICAgJ2JsdWU3JyxcbiAgICAnYmx1ZTgnLFxuICAgICdibHVlOScsXG4gICAgJ2JsdWUxMCcsXG4gICAgJ2dyZWVuMScsXG4gIF07XG4gIE1BSU4uaWQgPSAnZ2FtZV9ib2FyZHMnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzUwMDsgaSsrKSB7XG4gICAgY29uc3QgUkFORE9NX05VTUJFUiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKTtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKENMQVNTRVNbUkFORE9NX05VTUJFUl0pO1xuICAgIE1BSU4uYXBwZW5kKFRJTEUpO1xuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoTUFJTik7XG59XG4iLCJpbXBvcnQgcmVuZGVyX2JhY2tncm91bmRfdGlsZXMgZnJvbSAnLi9yZW5kZXJfYmFja2dyb3VuZF90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl90aWxlcygpIHtcbiAgcmVuZGVyX2JhY2tncm91bmRfdGlsZXMoKTtcbn1cbiIsImltcG9ydCByZW5kZXJfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL3JlbmRlcl90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl9nYW1lX2JvYXJkcygpIHtcbiAgcmVuZGVyX3RpbGVzKCk7XG59XG4iLCJjb25zdCBBTklNQVRJT05TID0gKCgpID0+IHtcbiAgY29uc3QgUEVSSVNDT1BFX1NQSU5ORVIgPSAoKSA9PiB7XG4gICAgY29uc3QgTEVGVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoNzU5KTtcbiAgICBjb25zdCBSSUdIVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoNzYxKTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29mZicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29uJyk7XG4gICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIGlmIChMRUZUX1RJTEUuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdvbicpKSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb24nKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdwZXJpc2NvcGVfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncGVyaXNjb3BlX29mZicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3BlcmlzY29wZV9vZmYnKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdwZXJpc2NvcGVfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3BlcmlzY29wZV9vbicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBSQURBUl9TUElOTkVSMSA9ICgpID0+IHtcbiAgICBjb25zdCBMRUZUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3MTQpO1xuICAgIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3MTYpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBpZiAoTEVGVF9USUxFLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnb24nKSkge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb2ZmJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFJBREFSX1NQSU5ORVIyID0gKCkgPT4ge1xuICAgIGNvbnN0IExFRlRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDEwOTcpO1xuICAgIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxMDk5KTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgaWYgKExFRlRfVElMRS5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ29uJykpIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29uJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29mZicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBTVUJfQU5JTUFUSU9OID0gc2V0SW50ZXJ2YWwoUEVSSVNDT1BFX1NQSU5ORVIsIDEwMDApO1xuICBjb25zdCBCT0FUMSA9IHNldEludGVydmFsKFJBREFSX1NQSU5ORVIxLCAxMDAwKTtcbiAgY29uc3QgQk9BVDIgPSBzZXRJbnRlcnZhbChSQURBUl9TUElOTkVSMiwgMTUwMCk7XG5cbiAgcmV0dXJuIHsgU1VCX0FOSU1BVElPTiwgQk9BVDEsIEJPQVQyIH07XG59KSgpO1xuXG5leHBvcnQgeyBBTklNQVRJT05TIH07XG4iLCJpbXBvcnQgeyBJVEVSQVRPUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmNvbnN0IEJBVFRMRVNISVAgPSB7XG4gIEI6IFsxNTAsIDE1NCwgMjIwLCAyMjQsIDM2MCwgMzY0LCA0MzAsIDQzNiwgNDM0XSxcbiAgQTogWzE1NiwgMTU5LCAyMjYsIDIyOSwgMzY2LCAzNjksIDQzNiwgNDM5LCA1MDYsIDUwOV0sXG4gIFQxOiBbMTYyLCAxNjMsIDIzMiwgMjMzLCAzMDIsIDMwMywgMzcyLCAzNzMsIDQ0MiwgNDQzLCA1MTIsIDUxM10sXG4gIFQyOiBbMTY3LCAxNjgsIDIzNywgMjM4LCAzMDcsIDMwOCwgMzc3LCAzNzgsIDQ0NywgNDQ4LCA1MTcsIDUxOF0sXG4gIEw6IFsxMDEsIDE3MSwgMjQxLCAzMTEsIDM4MSwgNDUxXSxcbiAgRTogWzE3NiwgMjQ2LCAzODYsIDQ1Nl0sXG4gIFM6IFsxODEsIDI1MSwgMzk0LCA0NjRdLFxuICBIOiBbMTE2LCAxMTksIDE4NiwgMTg5LCAyNTYsIDI1OSwgMzk2LCAzOTksIDQ2NiwgNDY5LCA1MzYsIDUzOV0sXG4gIEk6IFsxOTIsIDE5MywgMjYyLCAyNjMsIDMzMiwgMzMzLCA0MDIsIDQwMywgNDcyLCA0NzNdLFxuICBQOiBbMTk2LCAxOTksIDI2NiwgMjY5LCA0MDYsIDQ3NiwgNTQ2XSxcbn07XG5cbihmdW5jdGlvbiBlel9sb2FkZXIoKSB7XG4gIGNvbnN0IEIgPSBCQVRUTEVTSElQLkI7XG4gIElURVJBVE9SKDgwLCA4NCwgQik7XG4gIElURVJBVE9SKDI5MCwgMjk0LCBCKTtcbiAgSVRFUkFUT1IoNTAwLCA1MDQsIEIpO1xuXG4gIGNvbnN0IEEgPSBCQVRUTEVTSElQLkE7XG4gIElURVJBVE9SKDg2LCA4OSwgQSk7XG4gIElURVJBVE9SKDI5NiwgMjk5LCBBKTtcblxuICBjb25zdCBUMSA9IEJBVFRMRVNISVAuVDE7XG4gIElURVJBVE9SKDkxLCA5NCwgVDEpO1xuXG4gIGNvbnN0IFQyID0gQkFUVExFU0hJUC5UMjtcbiAgSVRFUkFUT1IoOTYsIDk5LCBUMik7XG5cbiAgY29uc3QgTCA9IEJBVFRMRVNISVAuTDtcbiAgSVRFUkFUT1IoNTIxLCA1MjQsIEwpO1xuXG4gIGNvbnN0IEUgPSBCQVRUTEVTSElQLkU7XG4gIElURVJBVE9SKDEwNiwgMTA5LCBFKTtcbiAgSVRFUkFUT1IoMzE2LCAzMTgsIEUpO1xuICBJVEVSQVRPUig1MjYsIDUyOSwgRSk7XG5cbiAgY29uc3QgUyA9IEJBVFRMRVNISVAuUztcbiAgSVRFUkFUT1IoMTExLCAxMTQsIFMpO1xuICBJVEVSQVRPUigzMjEsIDMyNCwgUyk7XG4gIElURVJBVE9SKDUzMSwgNTM0LCBTKTtcblxuICBjb25zdCBIID0gQkFUVExFU0hJUC5IO1xuICBJVEVSQVRPUigzMjYsIDMyOSwgSCk7XG5cbiAgY29uc3QgSSA9IEJBVFRMRVNISVAuSTtcbiAgSVRFUkFUT1IoMTIxLCAxMjQsIEkpO1xuICBJVEVSQVRPUig1NDEsIDU0NCwgSSk7XG5cbiAgY29uc3QgUCA9IEJBVFRMRVNISVAuUDtcbiAgSVRFUkFUT1IoMTI2LCAxMjksIFApO1xuICBJVEVSQVRPUigzMzYsIDMzOSwgUCk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBCQVRUTEVTSElQO1xuIiwiaW1wb3J0IHsgRVpfVElMRV9DT0xPUklaRVIgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IEJBVFRMRVNISVAgZnJvbSAnLi9iYXR0bGVzaGlwX3RpbGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3JfYmF0dGxlc2hpcF90aWxlcygpIHtcbiAgZm9yIChsZXQgbGV0dGVyIGluIEJBVFRMRVNISVApIHtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihCQVRUTEVTSElQW2xldHRlcl0sICd0aXRsZScpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDQVJSSUVSLCBERVNUUk9ZRVIsIFNVQk1BUklORSB9IGZyb20gJy4vc2hpcF90aWxlcy5qcyc7XG5pbXBvcnQgeyBFWl9USUxFX0NPTE9SSVpFUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX3NoaXBfdGlsZXMoKSB7XG4gIChmdW5jdGlvbiBjYXJyaWVyKCkge1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuYmxhY2tfb3V0bGluZSwgJ3NoaXBfaHVsbF9vdXRsaW5lJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5odWxsLCAnc2hpcF9odWxsJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5kYXJrX2dyYXksICdkYXJrX2dyYXknKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLmxpZ2h0X2dyYXksICdsaWdodF9ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5zaGlwX2xpZ2h0LCAnc2hpcF9saWdodCcpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyaywgJ3N1cnJvdW5kaW5nX3dhdGVyX2RhcmsnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihcbiAgICAgIENBUlJJRVIuc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQsXG4gICAgICAnc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQnXG4gICAgKTtcblxuICAgIGNvbnN0IEMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNzk1KTtcbiAgICBjb25zdCBWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTc5Nik7XG4gICAgY29uc3QgTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE3OTcpO1xuICAgIGNvbnN0IFNJWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE3OTkpO1xuICAgIGNvbnN0IE5JTkUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxODAwKTtcbiAgICBjb25zdCBVID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM0OSk7XG4gICAgY29uc3QgUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTApO1xuICAgIGNvbnN0IE4yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM1Mik7XG4gICAgY29uc3QgQSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTMpO1xuICAgIGNvbnN0IFYyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM1NCk7XG4gICAgY29uc3QgWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTUpO1xuICAgIGNvbnN0IEFMTCA9IFtDLCBWLCBOLCBTSVgsIE5JTkUsIFUsIFMsIE4yLCBBLCBWMiwgWV07XG4gICAgQUxMLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwX3RleHQnKTtcbiAgICB9KTtcbiAgICBDLmlubmVyVGV4dCA9ICdDJztcbiAgICBWLmlubmVyVGV4dCA9ICdWJztcbiAgICBOLmlubmVyVGV4dCA9ICdOJztcbiAgICBTSVguaW5uZXJUZXh0ID0gJzYnO1xuICAgIE5JTkUuaW5uZXJUZXh0ID0gJzknO1xuICAgIFUuaW5uZXJUZXh0ID0gJ1UnO1xuICAgIFMuaW5uZXJUZXh0ID0gJ1MnO1xuICAgIE4yLmlubmVyVGV4dCA9ICdOJztcbiAgICBBLmlubmVyVGV4dCA9ICdBJztcbiAgICBWMi5pbm5lclRleHQgPSAnVic7XG4gICAgWS5pbm5lclRleHQgPSAnWSc7XG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uIGRlc3Ryb3llcigpIHtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuYmxhY2tfb3V0bGluZSwgJ3NoaXBfaHVsbF9vdXRsaW5lJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLmh1bGwsICdzaGlwX2h1bGwnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIubGlnaHRfZ3JheSwgJ2xpZ2h0X2dyYXknKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuZGFya19ncmF5LCAnZGFya19ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLnNoaXBfbGlnaHQsICdzaGlwX2xpZ2h0Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoXG4gICAgICBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyayxcbiAgICAgICdzdXJyb3VuZGluZ193YXRlcl9kYXJrJ1xuICAgICk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoXG4gICAgICBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQsXG4gICAgICAnc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQnXG4gICAgKTtcblxuICAgIGNvbnN0IFUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTUwKTtcbiAgICBjb25zdCBTID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1MSk7XG4gICAgY29uc3QgTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTMpO1xuICAgIGNvbnN0IEEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTU0KTtcbiAgICBjb25zdCBWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1NSk7XG4gICAgY29uc3QgWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTYpO1xuICAgIGNvbnN0IEFMTCA9IFtVLCBTLCBOLCBBLCBWLCBZXTtcbiAgICBBTEwubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3NoaXBfdGV4dCcpO1xuICAgIH0pO1xuICAgIFUuaW5uZXJUZXh0ID0gJ1UnO1xuICAgIFMuaW5uZXJUZXh0ID0gJ1MnO1xuICAgIE4uaW5uZXJUZXh0ID0gJ04nO1xuICAgIEEuaW5uZXJUZXh0ID0gJ0EnO1xuICAgIFYuaW5uZXJUZXh0ID0gJ1YnO1xuICAgIFkuaW5uZXJUZXh0ID0gJ1knO1xuICB9KSgpO1xuXG4gIChmdW5jdGlvbiBzdWJtYXJpbmUoKSB7XG4gICAgLy8gRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLmh1bGwsICdzdWInKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihTVUJNQVJJTkUuZGFya19ncmF5LCAnZGFya19ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLmxlZnRfcGVyaXNjb3BlLCAncGVyaXNjb3BlX29uJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLnJpZ2h0X3BlcmlzY29wZSwgJ3BlcmlzY29wZV9vZmYnKTtcbiAgfSkoKTtcbn1cbiIsImltcG9ydCBTVEFSVCBmcm9tICcuL3N0YXJ0X3RpbGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3Jfc3RhcnRfdGlsZXMoKSB7XG4gIGNvbnN0IEFMTCA9IFNUQVJULmFsbDtcbiAgQUxMLm1hcCgodGlsZV9pZCkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RhcnRfJHt0aWxlX2lkfWApO1xuICAgIFRJTEUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfYmFja2dyb3VuZCcpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfdGV4dCcpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX3dhdGVyX3RpbGVzKCkge1xuICBjb25zdCBDTEFTU0VTID0gW1xuICAgICdibHVlMScsXG4gICAgJ2JsdWUyJyxcbiAgICAnYmx1ZTMnLFxuICAgICdibHVlNCcsXG4gICAgJ2JsdWU1JyxcbiAgICAnYmx1ZTYnLFxuICAgICdibHVlNycsXG4gICAgJ2JsdWU4JyxcbiAgICAnYmx1ZTknLFxuICAgICdibHVlMTAnLFxuICAgICdncmVlbjEnLFxuICBdO1xuICBjb25zdCBXQVRFUl9USUxFUyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2F0ZXInKSk7XG4gIFdBVEVSX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKENMQVNTRVNbUkFORE9NX05VTUJFUl0pO1xuICB9KTtcbn1cbiIsImNvbnN0IElURVJBVE9SID0gKG1pbiwgbWF4LCB0YXJnZXRfYXJyYXkpID0+IHtcbiAgZm9yIChsZXQgaSA9IG1pbjsgaSA8IG1heCArIDE7IGkrKykge1xuICAgIHRhcmdldF9hcnJheS5wdXNoKGkpO1xuICB9XG59O1xuXG5jb25zdCBFWl9USUxFX0NPTE9SSVpFUiA9IChpbnB1dF9hcnJheSwgaW5wdXRfY2xhc3MpID0+IHtcbiAgaW5wdXRfYXJyYXkubWFwKCh0aWxlX2lkKSA9PiB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpbGVfaWQpO1xuICAgIFRJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoaW5wdXRfY2xhc3MpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IElURVJBVE9SLCBFWl9USUxFX0NPTE9SSVpFUiB9O1xuIiwiaW1wb3J0IHsgQU5JTUFUSU9OUyB9IGZyb20gJy4vYW5pbWF0aW9ucy5qcyc7XG5pbXBvcnQgcGxhY2Vfc2hpcHMgZnJvbSAnLi4vLi4vcGxhY2Vfc2hpcHMvcGxhY2Vfc2hpcHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0ZW5lcnNfaGFuZGxlcnMoKSB7XG4gIGNvbnN0IFNUQVJUX0JVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydF9idXR0b24nKTtcblxuICBjb25zdCBTVEFSVF9CVVRUT05fRU5URVJfSEFORExFUiA9ICgpID0+IHtcbiAgICBjb25zdCBTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydF9iYWNrZ3JvdW5kJylcbiAgICApO1xuICAgIFNUQVJUX0JVVFRPTl9CQUNLR1JPVU5EX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQnKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfYmFja2dyb3VuZCcpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRfdGV4dCcpXG4gICAgKTtcbiAgICBTVEFSVF9CVVRUT05fVEVYVF9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfdGV4dF9ob3ZlcmVkJyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X3RleHQnKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBTVEFSVF9CVVRUT05fTEVBVkVfSEFORExFUiA9ICgpID0+IHtcbiAgICBjb25zdCBTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQnKVxuICAgICk7XG4gICAgU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkRfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0X2JhY2tncm91bmQnKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkJyk7XG4gICAgfSk7XG4gICAgY29uc3QgU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRfdGV4dF9ob3ZlcmVkJylcbiAgICApO1xuICAgIFNUQVJUX0JVVFRPTl9URVhUX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdGFydF90ZXh0Jyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X3RleHRfaG92ZXJlZCcpO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBTVEFSVF9CVVRUT05fQ0xJQ0tfSEFORExFUiA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpbnRlcnZhbCBpbiBBTklNQVRJT05TKSB7XG4gICAgICBjb25zdCBJTlRFUlZBTCA9IEFOSU1BVElPTlNbaW50ZXJ2YWxdO1xuICAgICAgY2xlYXJJbnRlcnZhbChJTlRFUlZBTCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYW5kaW5nX3BhZ2UnKS5yZW1vdmUoKTtcbiAgICBwbGFjZV9zaGlwcygpO1xuICB9O1xuXG4gIFNUQVJUX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU1RBUlRfQlVUVE9OX0VOVEVSX0hBTkRMRVIpO1xuICBTVEFSVF9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFNUQVJUX0JVVFRPTl9MRUFWRV9IQU5ETEVSKTtcbiAgU1RBUlRfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgU1RBUlRfQlVUVE9OX0NMSUNLX0hBTkRMRVIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBIRUFESU5HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IFNUQVJUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIE1BSU4uaWQgPSAnbGFuZGluZ19wYWdlJztcbiAgSEVBRElORy5pZCA9ICdic19oZWFkaW5nJztcbiAgU1RBUlQuaWQgPSAnc3RhcnRfYnV0dG9uJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyODAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IGk7XG4gICAgVElMRS5jbGFzc0xpc3QgPSAnaG9tZXBlYWdlX3RpbGUgd2F0ZXInO1xuICAgIEhFQURJTkcuYXBwZW5kKFRJTEUpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IGBzdGFydF8ke2l9YDtcbiAgICBUSUxFLmNsYXNzTGlzdCA9ICd0aWxlIHN0YXJ0IHN0YXJ0X2JhY2tncm91bmQnO1xuICAgIFNUQVJULmFwcGVuZChUSUxFKTtcbiAgfVxuICBNQUlOLmFwcGVuZChIRUFESU5HKTtcbiAgTUFJTi5hcHBlbmQoU1RBUlQpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChNQUlOKTtcbn1cbiIsImltcG9ydCB7IElURVJBVE9SIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY29uc3QgQ0FSUklFUiA9IHtcbiAgYmxhY2tfb3V0bGluZTogW1xuICAgIDE0NDYsIDE0NTAsIDE1MTYsIDE1MjAsIDE1ODYsIDE1OTAsIDE3MjMsIDE3MzMsIDE4MDMsIDE4NTksIDE4NzMsIDE4NzcsXG4gICAgMTkyOCwgMTk0MywgMTk0NiwgMTk0OCwgMTk1NSwgMTk1NiwgMTk4MiwgMTk4MywgMTk4NywgMTk4OCwgMTk5MiwgMTk5MyxcbiAgICAxOTk4LCAyMDEzLCAyMDI2LCAyMDUyLCAyMDU0LCAyMDU1LCAyMDU3LCAyMDU5LCAyMDYwLCAyMDYyLCAyMDY0LCAyMDY1LFxuICAgIDIwNjgsIDIwODMsIDIwODUsIDIwODksIDIwOTEsIDIwOTQsIDIwOTUsIDIxMjMsIDIxMjUsIDIxMjgsIDIxMzAsIDIxMzMsXG4gICAgMjEzNSwgMjEzOCwgMjE1MywgMjE1NSwgMjE1OSwgMjE2MSwgMjE2NSwgMjI2MCwgMjI2MSwgMjI2MiwgMjMwOSwgMjMzMixcbiAgICAyMzMzLCAyMzM0LCAyMzc5LCAyNDA0LCAyNDQ4LCAyNDc1LCAyNTE3LCAyNTQ2LCAyNTg2LCAyNjE3LCAyNjU2LCAyNjg3LFxuICAgIDI3MjYsXG4gIF0sXG4gIGh1bGw6IFtcbiAgICAxNTE5LCAxOTM5LCAxOTQwLCAyMDc5LCAyMDgwLCAyNjg4LCAyNjg5LCAyNjkyLCAyNjkzLCAyNjk2LCAyNjk3LCAyNzAwLFxuICAgIDI3MDEsIDI3MDQsIDI3MDUsIDI3MDgsIDI3MDksIDI3MTIsIDI3MTMsIDI3MTYsIDI3MTcsIDI3MjAsIDI3MjEsIDI3MjQsXG4gICAgMjcyNSxcbiAgXSxcbiAgZGFya19ncmF5OiBbXG4gICAgMTE2OCwgMTIzOCwgMTMwOCwgMTUxNywgMTUxOCwgMTkyOSwgMTkzMCwgMTk0MSwgMTk0MiwgMTk0NywgMjAyNSwgMjA1MyxcbiAgICAyMDU4LCAyMDYzLCAyMDY5LCAyMDcwLCAyMDgxLCAyMDgyLCAyMTI0LCAyMTI5LCAyMTM0LCAyMDkyLCAyMDkzLFxuICBdLFxuICBsaWdodF9ncmF5OiBbMTA5NywgMTA5OV0sXG4gIHNoaXBfbGlnaHQ6IFsxMDk4XSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfZGFyazogW1xuICAgIDI1NDUsIDI2MTYsIDI2ODYsIDI2OTAsIDI2OTEsIDI2OTQsIDI2OTUsIDI2OTgsIDI2OTksIDI3MDIsIDI3MDMsIDI3MDYsXG4gICAgMjcwNywgMjcxMCwgMjcxMSwgMjcxNCwgMjcxNSwgMjcxOCwgMjcxOSwgMjcyMiwgMjcyMywgMjU4NywgMjY1NywgMjcyNyxcbiAgICAyNDQ5LCAyNTE4LCAyNTE5LCAyNTg4LCAyNjU4LFxuICBdLFxuICBzdXJyb3VuZGluZ193YXRlcl9saWdodDogW1xuICAgIDI1ODksIDI2MTUsIDI2NTksIDI2ODQsIDI2ODUsIDI3MjgsIDI3MjksIDI3NTMsIDI3NTQsIDI3NTUsIDI3OTgsIDI3OTksXG4gIF0sXG59O1xuXG5jb25zdCBERVNUUk9ZRVIgPSB7XG4gIGJsYWNrX291dGxpbmU6IFtcbiAgICAxMTk0LCAxMTk4LCAxMjExLCAxMjY1LCAxMjY5LCAxMjgwLCAxNDc0LCAxNDkxLCAxNDkyLCAxNTQ1LCAxNTYxLCAxNjE2LFxuICAgIDE2MzEsIDE2ODcsIDE3MDEsXG4gIF0sXG4gIGh1bGw6IFsxNjg4LCAxNjkxLCAxNjkyLCAxNjk1LCAxNjk2LCAxNjk5LCAxNzAwXSxcbiAgZGFya19ncmF5OiBbNzg1LCA4NTUsIDkyNSwgOTk1LCAxMjY2LCAxMjcwLCAxMjczLCAxMjc0LCAxMjc2LCAxMjc5XSxcbiAgbGlnaHRfZ3JheTogWzcxNCwgNzE2LCAxMTMzLCAxMTM3LCAxMjcyLCAxMjc1LCAxMjc3XSxcbiAgc2hpcF9saWdodDogWzcxNV0sXG4gIHN1cnJvdW5kaW5nX3dhdGVyX2Rhcms6IFsxNjg5LCAxNjkwLCAxNjkzLCAxNjk0LCAxNjk3LCAxNjk4XSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQ6IFtcbiAgICAxNjMyLCAxNjg1LCAxNjg2LCAxNzAyLCAxNzAzLCAxNzU0LCAxNzU1LCAxNzczLCAxNzc0LFxuICBdLFxufTtcblxuY29uc3QgU1VCTUFSSU5FID0ge1xuICBodWxsOiBbXSxcbiAgZGFya19ncmF5OiBbNzYwLCA4MzAsIDkwMF0sXG4gIGxlZnRfcGVyaXNjb3BlOiBbNzU5XSxcbiAgcmlnaHRfcGVyaXNjb3BlOiBbNzYxXSxcbn07XG5cbihmdW5jdGlvbiBjYXJyaWVyX2V6X2xvYWRlcigpIHtcbiAgY29uc3QgT1VUTElORSA9IENBUlJJRVIuYmxhY2tfb3V0bGluZTtcbiAgSVRFUkFUT1IoMTM3NiwgMTM4MCwgT1VUTElORSk7XG4gIElURVJBVE9SKDE2NTMsIDE2NjMsIE9VVExJTkUpO1xuICBJVEVSQVRPUigxNzkwLCAxNzkzLCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMjAxNSwgMjAxOSwgT1VUTElORSk7XG4gIElURVJBVE9SKDIwMjIsIDIwMjQsIE9VVExJTkUpO1xuICBJVEVSQVRPUigyMTkwLCAyMjM5LCBPVVRMSU5FKTtcblxuICBjb25zdCBIVUxMID0gQ0FSUklFUi5odWxsO1xuICBJVEVSQVRPUigxNDQ3LCAxNDQ5LCBIVUxMKTtcbiAgSVRFUkFUT1IoMTU4NywgMTU4OSwgSFVMTCk7XG4gIElURVJBVE9SKDE3MjQsIDE3MzIsIEhVTEwpO1xuICBJVEVSQVRPUigxNzk0LCAxODAyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTg2MCwgMTg3MiwgSFVMTCk7XG4gIElURVJBVE9SKDE5MzEsIDE5MzQsIEhVTEwpO1xuICBJVEVSQVRPUigxOTk5LCAyMDEyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMjA3MSwgMjA3NCwgSFVMTCk7XG4gIElURVJBVE9SKDIxMzksIDIxNTIsIEhVTEwpO1xuICBJVEVSQVRPUigyMjYzLCAyMzA4LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjMzNSwgMjM3OCwgSFVMTCk7XG4gIElURVJBVE9SKDI0MDUsIDI0NDcsIEhVTEwpO1xuICBJVEVSQVRPUigyNDc2LCAyNTE2LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjU0NywgMjU4NSwgSFVMTCk7XG4gIElURVJBVE9SKDI2MTgsIDI2NTUsIEhVTEwpO1xuXG4gIGNvbnN0IERBUktfR1JBWSA9IENBUlJJRVIuZGFya19ncmF5O1xuICBJVEVSQVRPUigxMTM0LCAxMTM2LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMDg2LCAyMDg4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMTU2LCAyMTU4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMTYyLCAyMTY0LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxOTM1LCAxOTM4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMDc1LCAyMDc4LCBEQVJLX0dSQVkpO1xuXG4gIGNvbnN0IExJR0hUX0dSQVkgPSBDQVJSSUVSLmxpZ2h0X2dyYXk7XG4gIElURVJBVE9SKDIzMzUsIDIzNzgsIExJR0hUX0dSQVkpO1xuXG4gIGNvbnN0IFNVUlJPVU5ESU5HX1dBVEVSX0RBUksgPSBDQVJSSUVSLnN1cnJvdW5kaW5nX3dhdGVyX2Rhcms7XG4gIElURVJBVE9SKDI3NTYsIDI3OTcsIFNVUlJPVU5ESU5HX1dBVEVSX0RBUkspO1xufSkoKTtcblxuKGZ1bmN0aW9uIGRlc3Ryb3llcl9lel9sb2FkZXIoKSB7XG4gIGNvbnN0IE9VVExJTkUgPSBERVNUUk9ZRVIuYmxhY2tfb3V0bGluZTtcbiAgSVRFUkFUT1IoMTQwMywgMTQyMiwgT1VUTElORSk7XG5cbiAgY29uc3QgSFVMTCA9IERFU1RST1lFUi5odWxsO1xuICBJVEVSQVRPUigxNDc1LCAxNDkwLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTYxNywgMTYzMCwgSFVMTCk7XG5cbiAgY29uc3QgTElHSFRfR1JBWSA9IERFU1RST1lFUi5saWdodF9ncmF5O1xuICBJVEVSQVRPUigxNTQ2LCAxNTYwLCBMSUdIVF9HUkFZKTtcbiAgSVRFUkFUT1IoMTA2MywgMTA2NywgTElHSFRfR1JBWSk7XG4gIElURVJBVE9SKDEyMDIsIDEyMDcsIExJR0hUX0dSQVkpO1xuICBJVEVSQVRPUigxMzQyLCAxMzQ3LCBMSUdIVF9HUkFZKTtcblxuICBjb25zdCBEQVJLX0dSQVkgPSBERVNUUk9ZRVIuZGFya19ncmF5O1xuICBJVEVSQVRPUigxMzM0LCAxMzM2LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxMzM4LCAxMzQwLCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxMzQ5LCAxMzUxLCBEQVJLX0dSQVkpO1xuXG4gIGNvbnN0IFNVUlJPVU5ESU5HX1dBVEVSX0RBUksgPSBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyaztcbiAgSVRFUkFUT1IoMTc1NiwgMTc3MiwgU1VSUk9VTkRJTkdfV0FURVJfREFSSyk7XG59KSgpO1xuXG5leHBvcnQgeyBDQVJSSUVSLCBERVNUUk9ZRVIsIFNVQk1BUklORSB9O1xuIiwiaW1wb3J0IHsgSVRFUkFUT1IgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jb25zdCBTVEFSVCA9IHtcbiAgczogWzIyMSwgMjIyLCA0MzcsIDQzOF0sXG4gIHQxOiBbMjM0LCAyMzUsIDMwNCwgMzA1LCAzNzQsIDM3NSwgNDQ0LCA0NDUsIDUxNCwgNTE1LCA1ODQsIDU4NV0sXG4gIGE6IFtcbiAgICAyNDEsIDI0MiwgMjQ3LCAyNDgsIDQ1MSwgNDUyLCA0NTcsIDQ1OCwgNTIxLCA1MjIsIDUyNywgNTI4LCA1OTEsIDU5MiwgNTk3LFxuICAgIDU5OCxcbiAgXSxcbiAgcjogW1xuICAgIDI1MSwgMjUyLCAyNTcsIDI1OCwgNDYxLCA0NjIsIDQ2NywgNDY4LCA1MzEsIDUzMiwgNTM3LCA1MzgsIDYwMSwgNjAyLCA2MDcsXG4gICAgNjA4LFxuICBdLFxuICB0MjogWzI2NCwgMjY1LCAzMzQsIDMzNSwgNDA0LCA0MDUsIDQ3NCwgNDc1LCA1NDQsIDU0NSwgNjE0LCA2MTVdLFxuICBhbGw6IFtdLFxufTtcblxuKGZ1bmN0aW9uIGV6X2xvYWRlcigpIHtcbiAgY29uc3QgUyA9IFNUQVJULnM7XG4gIElURVJBVE9SKDgxLCA4OCwgUyk7XG4gIElURVJBVE9SKDE1MSwgMTU4LCBTKTtcbiAgSVRFUkFUT1IoMjkxLCAyOTgsIFMpO1xuICBJVEVSQVRPUigzNjEsIDM2OCwgUyk7XG4gIElURVJBVE9SKDUwMSwgNTA4LCBTKTtcbiAgSVRFUkFUT1IoNTcxLCA1NzgsIFMpO1xuXG4gIGNvbnN0IFQxID0gU1RBUlQudDE7XG4gIElURVJBVE9SKDkxLCA5OCwgVDEpO1xuICBJVEVSQVRPUigxNjEsIDE2OCwgVDEpO1xuXG4gIGNvbnN0IEEgPSBTVEFSVC5hO1xuICBJVEVSQVRPUigxMDEsIDEwOCwgQSk7XG4gIElURVJBVE9SKDE3MSwgMTc4LCBBKTtcbiAgSVRFUkFUT1IoMzExLCAzMTgsIEEpO1xuICBJVEVSQVRPUigzODEsIDM4OCwgQSk7XG5cbiAgY29uc3QgUiA9IFNUQVJULnI7XG4gIElURVJBVE9SKDExMSwgMTE2LCBSKTtcbiAgSVRFUkFUT1IoMTgxLCAxODYsIFIpO1xuICBJVEVSQVRPUigzMjEsIDMyNiwgUik7XG4gIElURVJBVE9SKDM5MSwgMzk2LCBSKTtcblxuICBjb25zdCBUMiA9IFNUQVJULnQyO1xuICBJVEVSQVRPUigxMjEsIDEyOCwgVDIpO1xuICBJVEVSQVRPUigxOTEsIDE5OCwgVDIpO1xuXG4gIGZvciAobGV0IGxldHRlciBpbiBTVEFSVCkge1xuICAgIGlmIChsZXR0ZXIgPT09ICdhbGwnKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgU1RBUlRbbGV0dGVyXS5tYXAoKG51bWJlcikgPT4ge1xuICAgICAgU1RBUlQuYWxsLnB1c2gobnVtYmVyKTtcbiAgICB9KTtcbiAgfVxufSkoKTtcbmV4cG9ydCBkZWZhdWx0IFNUQVJUO1xuIiwiaW1wb3J0IHJlbmRlcl90aWxlcyBmcm9tICcuL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9zdGFydF90aWxlcyBmcm9tICcuL2hlbHBlcnMvY29sb3Jfc3RhcnRfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX3NoaXBfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX3NoaXBfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX2JhdHRsZXNoaXBfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX2JhdHRsZXNoaXBfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX3dhdGVyX3RpbGVzIGZyb20gJy4vaGVscGVycy9jb2xvcl93YXRlcl90aWxlcy5qcyc7XG5pbXBvcnQgbGlzdGVuZXJzX2hhbmRsZXJzIGZyb20gJy4vaGVscGVycy9saXN0ZW5lcnNfaGFuZGxlcnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lcGFnZSgpIHtcbiAgcmVuZGVyX3RpbGVzKCk7XG4gIGNvbG9yX3N0YXJ0X3RpbGVzKCk7XG4gIGNvbG9yX3NoaXBfdGlsZXMoKTtcbiAgY29sb3JfYmF0dGxlc2hpcF90aWxlcygpO1xuICBjb2xvcl93YXRlcl90aWxlcygpO1xuICBsaXN0ZW5lcnNfaGFuZGxlcnMoKTtcbn1cbiIsImNvbnN0IENPT1JESU5BVEVTID0gW107XG5jb25zdCBMRVRURVJTID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnLCAnaScsICdqJ107XG5jb25zdCBOVU1CRVJTID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuTEVUVEVSUy5tYXAoKGxldHRlcikgPT4ge1xuICBOVU1CRVJTLm1hcCgobnVtYmVyKSA9PiB7XG4gICAgQ09PUkRJTkFURVMucHVzaChgJHtsZXR0ZXJ9JHtudW1iZXJ9YCk7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENPT1JESU5BVEVTO1xuIiwiaW1wb3J0IHsgR0FNRSB9IGZyb20gJy4uLy4uLy4uLy4uL2luZGV4LmpzJztcbmltcG9ydCBwbGFjZV9haV9zaGlwcyBmcm9tICcuL3BsYWNlX2FpX3NoaXBzLmpzJztcbmltcG9ydCByZW5kZXJfZ2FtZV9ib2FyZHMgZnJvbSAnLi4vLi4vZ2FtZV9ib2FyZHMvcmVuZGVyX2dhbWVfYm9hcmRzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9naWNfbGlzdGVuZXJzKCkge1xuICBsZXQgY3VycmVudF9zaGlwX2luZGV4ID0gMDtcbiAgbGV0IG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICBjb25zdCBTSElQUyA9IFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgJ2Rlc3Ryb3llcicsICdzdWInLCAncGF0cm9sQm9hdCddO1xuICBjb25zdCBMRU5HVEggPSBbNSwgNCwgMywgMywgMl07XG4gIGNvbnN0IE1BWFMgPSB7XG4gICAgLy8gdmVydGljYWwgaXMgdXNpbmcgY2hhcmNvZGVzXG4gICAgY2Fycmllcjoge1xuICAgICAgaG9yaXpvbnRhbDogNSxcbiAgICAgIHZlcnRpY2FsOiAxMDIsIC8vIGZcbiAgICB9LFxuICAgIGJhdHRsZXNoaXA6IHtcbiAgICAgIGhvcml6b250YWw6IDYsXG4gICAgICB2ZXJ0aWNhbDogMTAzLCAvLyBnXG4gICAgfSxcbiAgICBkZXN0cm95ZXI6IHtcbiAgICAgIGhvcml6b250YWw6IDcsXG4gICAgICB2ZXJ0aWNhbDogMTA0LCAvLyBoXG4gICAgfSxcbiAgICBzdWI6IHtcbiAgICAgIGhvcml6b250YWw6IDcsXG4gICAgICB2ZXJ0aWNhbDogMTA0LCAvLyBoXG4gICAgfSxcbiAgICBwYXRyb2xCb2F0OiB7XG4gICAgICBob3Jpem9udGFsOiA4LFxuICAgICAgdmVydGljYWw6IDEwNSwgLy8gaVxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgSU5CT1VORFNfRVZBTFVBVE9SID0gKGlkKSA9PiB7XG4gICAgbGV0IHZhbHVlX3RvX2NvbXBhcmUgPSAnJztcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdmFsdWVfdG9fY29tcGFyZSA9IGlkWzFdO1xuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHZhbHVlX3RvX2NvbXBhcmUgPSBpZC5jaGFyQ29kZUF0KDApO1xuICAgIH1cbiAgICBjb25zdCBNQVggPSBNQVhTW1NISVBTW2N1cnJlbnRfc2hpcF9pbmRleF1dW29yaWVudGF0aW9uXTtcbiAgICByZXR1cm4gdmFsdWVfdG9fY29tcGFyZSA8PSBNQVg7XG4gIH07XG5cbiAgY29uc3QgU1BBQ0VfVEFLRU5fRVZBTFVBVE9SID0gKGFsbF90aWxlcykgPT4ge1xuICAgIGxldCBhcmVfYWxsX3Rha2VuID0gdHJ1ZTtcbiAgICBjb25zdCBQTEFZRVIxX1NISVBTID0gR0FNRS5QTEFZRVIxX0dBTUVCT0FSRC5zaGlwcztcbiAgICBmb3IgKGxldCBzaGlwIGluIFBMQVlFUjFfU0hJUFMpIHtcbiAgICAgIGNvbnN0IFBPU0lUSU9OUyA9IFBMQVlFUjFfU0hJUFNbc2hpcF0ucG9zaXRpb247XG4gICAgICBhbGxfdGlsZXMubWFwKCh0aWxlKSA9PiB7XG4gICAgICAgIGlmIChQT1NJVElPTlMuaW5jbHVkZXModGlsZSkpIHtcbiAgICAgICAgICBhcmVfYWxsX3Rha2VuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJlX2FsbF90YWtlbjtcbiAgfTtcblxuICBjb25zdCBTVUJTRVFVRU5UX1RJTEVTID0gKGlkKSA9PiB7XG4gICAgY29uc3QgTEVUVEVSX0NIQVJfQ09ERSA9IGlkLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3QgTlVNQkVSID0gaWRbMV07XG4gICAgbGV0IGFsbCA9IFtdO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBTVE9QX0FUID0gK05VTUJFUiArIExFTkdUSFtjdXJyZW50X3NoaXBfaW5kZXhdO1xuICAgICAgZm9yIChsZXQgaSA9IE5VTUJFUjsgaSA8IFNUT1BfQVQ7IGkrKykge1xuICAgICAgICBhbGwucHVzaChgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKExFVFRFUl9DSEFSX0NPREUpfSR7aX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGw7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgY29uc3QgU1RPUF9BVCA9IExFVFRFUl9DSEFSX0NPREUgKyBMRU5HVEhbY3VycmVudF9zaGlwX2luZGV4XTtcbiAgICAgIGZvciAobGV0IGkgPSBMRVRURVJfQ0hBUl9DT0RFOyBpIDwgU1RPUF9BVDsgaSsrKSB7XG4gICAgICAgIGFsbC5wdXNoKGAke1N0cmluZy5mcm9tQ2hhckNvZGUoaSl9JHtOVU1CRVJ9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWxsO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBDT0xPUl9USUxFUyA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvb3JkaW5hdGVzLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvb3JkaW5hdGUpO1xuICAgICAgVElMRS5jbGFzc0xpc3QuYWRkKCdwbGFjZV9zaGlwX2hvdmVyZWQnKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBNT1VTRV9FTlRFUl9IQU5ETEVSID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgSUQgPSBldmVudC50YXJnZXQuaWQ7XG4gICAgY29uc3QgSU5CT1VORFMgPSBJTkJPVU5EU19FVkFMVUFUT1IoSUQpO1xuICAgIGNvbnN0IEFMTF9DT09SRElOQVRFUyA9IFNVQlNFUVVFTlRfVElMRVMoSUQpO1xuICAgIGNvbnN0IEFSRV9TVUJTRVFVRU5UX1NQQUNFU19GUkVFID0gU1BBQ0VfVEFLRU5fRVZBTFVBVE9SKEFMTF9DT09SRElOQVRFUyk7XG4gICAgaWYgKCFJTkJPVU5EUyB8fCAhQVJFX1NVQlNFUVVFTlRfU1BBQ0VTX0ZSRUUpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkX3NoaXBfcGxhY2VtZW50Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIENPTE9SX1RJTEVTKEFMTF9DT09SRElOQVRFUyk7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BsYWNlX3NoaXBfaG92ZXJlZCcpO1xuICB9O1xuXG4gIGNvbnN0IE1PVVNFX0xFQVZFX0hBTkRMRVIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBIT1ZFUkVEX1RJTEVTID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYWNlX3NoaXBfaG92ZXJlZCcpXG4gICAgKTtcbiAgICBIT1ZFUkVEX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZV9zaGlwX2hvdmVyZWQnKTtcbiAgICB9KTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZF9zaGlwX3BsYWNlbWVudCcpO1xuICB9O1xuXG4gIGNvbnN0IE1PVVNFX0NMSUNLX0hBTkRMRVIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBJRCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICBjb25zdCBJTkJPVU5EUyA9IElOQk9VTkRTX0VWQUxVQVRPUihJRCk7XG4gICAgY29uc3QgQUxMX0NPT1JESU5BVEVTID0gU1VCU0VRVUVOVF9USUxFUyhJRCk7XG4gICAgY29uc3QgQVJFX1NVQlNFUVVFTlRfU1BBQ0VTX0ZSRUUgPSBTUEFDRV9UQUtFTl9FVkFMVUFUT1IoQUxMX0NPT1JESU5BVEVTKTtcblxuICAgIGlmIChJTkJPVU5EUyAmJiBBUkVfU1VCU0VRVUVOVF9TUEFDRVNfRlJFRSAmJiBjdXJyZW50X3NoaXBfaW5kZXggPCA1KSB7XG4gICAgICBjb25zdCBDVVJSRU5UX1NISVAgPSBTSElQU1tjdXJyZW50X3NoaXBfaW5kZXhdO1xuICAgICAgR0FNRS5QTEFZRVIxX0dBTUVCT0FSRC5wbGFjZV9zaGlwKENVUlJFTlRfU0hJUCwgQUxMX0NPT1JESU5BVEVTKTtcbiAgICAgIEFMTF9DT09SRElOQVRFUy5tYXAoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvb3JkaW5hdGUpO1xuICAgICAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZF90aWxlJyk7XG4gICAgICB9KTtcbiAgICAgIGN1cnJlbnRfc2hpcF9pbmRleCA9IGN1cnJlbnRfc2hpcF9pbmRleCArIDE7XG5cbiAgICAgIC8vIHRvZG8gLSBjaGVjayBpZiBjdXJyZW50IHNoaXAgaW5kZXggaXMgNCBpZiBzbyByZW1vdmUgZnJvbSBkb20gYW5kIHBsYWNlIGVuZW15IHNoaXBzXG4gICAgICBpZiAoY3VycmVudF9zaGlwX2luZGV4ID4gNCkge1xuICAgICAgICBjb25zdCBNQUlOID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlX3NoaXBzX21haW4nKTtcbiAgICAgICAgTUFJTi5yZW1vdmUoKTtcbiAgICAgICAgcGxhY2VfYWlfc2hpcHMoKTtcbiAgICAgICAgcmVuZGVyX2dhbWVfYm9hcmRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFNQQUNFX0JBUl9IQU5ETEVSID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgS0VZID0gZXZlbnQua2V5O1xuICAgIGlmIChLRVkgPT09ICcgJyAmJiBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBvcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChLRVkgPT09ICcgJyAmJiBvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFRJTEVTID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwbGFjZV9zaGlwX3RpbGUnKSk7XG4gIFRJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIE1PVVNFX0VOVEVSX0hBTkRMRVIpO1xuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIE1PVVNFX0xFQVZFX0hBTkRMRVIpO1xuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBNT1VTRV9DTElDS19IQU5ETEVSKTtcbiAgfSk7XG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBTUEFDRV9CQVJfSEFORExFUik7XG59XG4iLCJpbXBvcnQgeyBHQU1FIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGFjZV9haV9zaGlwcygpIHtcbiAgbGV0IGN1cnJlbnRfc2hpcF9pbmRleCA9IDA7XG4gIGxldCBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgY29uc3QgU0hJUFMgPSBbJ2NhcnJpZXInLCAnYmF0dGxlc2hpcCcsICdkZXN0cm95ZXInLCAnc3ViJywgJ3BhdHJvbEJvYXQnXTtcbiAgY29uc3QgTEVOR1RIID0gWzUsIDQsIDMsIDMsIDJdO1xuICBjb25zdCBJTkZPID0ge1xuICAgIC8vIHZlcnRpY2FsIGlzIHVzaW5nIGNoYXJjb2Rlc1xuICAgIGNhcnJpZXI6IHtcbiAgICAgIG1heDogNSwgLy9ob3Jpem9udGFsXG4gICAgICBjb29yZGluYXRlczogW10sXG4gICAgfSxcbiAgICBiYXR0bGVzaGlwOiB7XG4gICAgICBtYXg6IDYsIC8vIHZlcnRpY2FsXG4gICAgICBjb29yZGluYXRlczogW10sXG4gICAgfSxcbiAgICBkZXN0cm95ZXI6IHtcbiAgICAgIG1heDogNywgLy8gaG9yaXpvbnRhbFxuICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgIH0sXG4gICAgc3ViOiB7XG4gICAgICBtYXg6IDcsIC8vIHZlcnRpY2FsXG4gICAgICBjb29yZGluYXRlczogW10sXG4gICAgfSxcbiAgICBwYXRyb2xCb2F0OiB7XG4gICAgICBtYXg6IDgsIC8vIGhvcml6b250YWxcbiAgICAgIGNvb3JkaW5hdGVzOiBbXSxcbiAgICB9LFxuICB9O1xuICBjb25zdCBBTExfQ09PUkRJTkFURVMgPSBbXTtcblxuICBjb25zdCBMRVRURVJTID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnLCAnaScsICdqJ107XG5cbiAgY29uc3QgQUxMX1RJTEVTID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBMRVRURVJfQ0hBUl9DT0RFID0gY29vcmRpbmF0ZS5jaGFyQ29kZUF0KDApO1xuICAgIGNvbnN0IE5VTUJFUiA9IGNvb3JkaW5hdGVbMV07XG4gICAgbGV0IGFsbCA9IFtdO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBTVE9QX0FUID0gK05VTUJFUiArIExFTkdUSFtjdXJyZW50X3NoaXBfaW5kZXhdO1xuICAgICAgZm9yIChsZXQgaSA9IE5VTUJFUjsgaSA8IFNUT1BfQVQ7IGkrKykge1xuICAgICAgICBhbGwucHVzaChgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKExFVFRFUl9DSEFSX0NPREUpfSR7aX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGw7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgY29uc3QgU1RPUF9BVCA9IExFVFRFUl9DSEFSX0NPREUgKyBMRU5HVEhbY3VycmVudF9zaGlwX2luZGV4XTtcbiAgICAgIGZvciAobGV0IGkgPSBMRVRURVJfQ0hBUl9DT0RFOyBpIDwgU1RPUF9BVDsgaSsrKSB7XG4gICAgICAgIGFsbC5wdXNoKGAke1N0cmluZy5mcm9tQ2hhckNvZGUoaSl9JHtOVU1CRVJ9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWxsO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBUT0dHTEVfT1JJRU5UQVRJT04gPSAoKSA9PiB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIG9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICB9IGVsc2Uge1xuICAgICAgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IE9ORV9SQU5ET00gPSAoKSA9PiB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IFJBTkRPTV9MRVRURVIgPSBMRVRURVJTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gICAgICBjb25zdCBSQU5ET01fTlVNQkVSID0gTWF0aC5mbG9vcihcbiAgICAgICAgTWF0aC5yYW5kb20oKSAqIChJTkZPW1NISVBTW2N1cnJlbnRfc2hpcF9pbmRleF1dLm1heCArIDEpXG4gICAgICApO1xuICAgICAgcmV0dXJuIFJBTkRPTV9MRVRURVIgKyBSQU5ET01fTlVNQkVSO1xuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGNvbnN0IFJBTkRPTV9MRVRURVIgPVxuICAgICAgICBMRVRURVJTW1xuICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChJTkZPW1NISVBTW2N1cnJlbnRfc2hpcF9pbmRleF1dLm1heCArIDEpKVxuICAgICAgICBdO1xuICAgICAgY29uc3QgUkFORE9NX05VTUJFUiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHJldHVybiBSQU5ET01fTEVUVEVSICsgUkFORE9NX05VTUJFUjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgR0VUX01PVkUgPSAoKSA9PiB7XG4gICAgY29uc3QgUkFORE9NX0NPT1JESU5BVEUgPSBPTkVfUkFORE9NKCk7XG4gICAgY29uc3QgQUxMX0NPT1JESU5BVEVTID0gQUxMX1RJTEVTKFJBTkRPTV9DT09SRElOQVRFKTtcbiAgICByZXR1cm4gQUxMX0NPT1JESU5BVEVTO1xuICB9O1xuXG4gIChmdW5jdGlvbiBjcmVhdGVfY29vcmRpbmF0ZXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGNvbnN0IFVOSVFVRV9NT1ZFID0gKCkgPT4ge1xuICAgICAgICBsZXQgdW5pcXVlID0gdHJ1ZTtcbiAgICAgICAgbGV0IE1PVkUgPSBHRVRfTU9WRSgpO1xuICAgICAgICBNT1ZFLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgIGlmIChBTExfQ09PUkRJTkFURVMuaW5jbHVkZXMoY29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICAgIHVuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh1bmlxdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgVU5JUVVFX01PVkUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5pcXVlID09PSB0cnVlKSB7XG4gICAgICAgICAgTU9WRS5tYXAoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgIElORk9bU0hJUFNbY3VycmVudF9zaGlwX2luZGV4XV0uY29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlKTtcbiAgICAgICAgICAgIEFMTF9DT09SRElOQVRFUy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgVU5JUVVFX01PVkUoKTtcbiAgICAgIGN1cnJlbnRfc2hpcF9pbmRleCsrO1xuICAgICAgVE9HR0xFX09SSUVOVEFUSU9OKCk7XG4gICAgfVxuICB9KSgpO1xuXG4gIChmdW5jdGlvbiBmaWxsX2FpX2JvYXJkKCkge1xuICAgIGZvciAobGV0IHNoaXAgaW4gSU5GTykge1xuICAgICAgY29uc3QgU0hJUF9QT1NJVElPTlMgPSBJTkZPW3NoaXBdLmNvb3JkaW5hdGVzO1xuICAgICAgR0FNRS5QTEFZRVIyX0dBTUVCT0FSRC5wbGFjZV9zaGlwKHNoaXAsIFNISVBfUE9TSVRJT05TKTtcbiAgICB9XG4gIH0pKCk7XG59XG4iLCJpbXBvcnQgQ09PUkRJTkFURVMgZnJvbSAnLi9jb29yZGluYXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl90aWxlcygpIHtcbiAgY29uc3QgTUFJTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3QgUExBQ0VfU0hJUFNfQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IElOU1RSVUNUSU9OU19DT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgSU5TVFJVQ1RJT05TID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBTUEFDRV9LRVkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdrYmQnKTtcbiAgY29uc3QgQ0xBU1NFUyA9IFtcbiAgICAnYmx1ZTEnLFxuICAgICdibHVlMicsXG4gICAgJ2JsdWUzJyxcbiAgICAnYmx1ZTQnLFxuICAgICdibHVlNScsXG4gICAgJ2JsdWU2JyxcbiAgICAnYmx1ZTcnLFxuICAgICdibHVlOCcsXG4gICAgJ2JsdWU5JyxcbiAgICAnYmx1ZTEwJyxcbiAgICAnZ3JlZW4xJyxcbiAgXTtcblxuICBNQUlOLmlkID0gJ3BsYWNlX3NoaXBzX21haW4nO1xuICBQTEFDRV9TSElQU19DT05UQUlORVIuaWQgPSAncGxhY2Vfc2hpcHNfY29udGFpbmVyJztcbiAgSU5TVFJVQ1RJT05TX0NPTlRBSU5FUi5pZCA9ICdpbnN0cnVjdGlvbnNfY29udGFpbmVyJztcbiAgSU5TVFJVQ1RJT05TLmlkID0gJ2luc3RydWN0aW9ucyc7XG4gIFNQQUNFX0tFWS5pZCA9ICdia2Rfc3BhY2UnO1xuICBJTlNUUlVDVElPTlMuaW5uZXJUZXh0ID0gJ3RvIHJvdGF0ZSc7XG4gIFNQQUNFX0tFWS5pbm5lclRleHQgPSAnc3BhY2UnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzUwMDsgaSsrKSB7XG4gICAgY29uc3QgUkFORE9NX05VTUJFUiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKTtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKCdwbGFjZV9zaGlwc19iYWNrZ3JvdW5kX3RpbGUnKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoQ0xBU1NFU1tSQU5ET01fTlVNQkVSXSk7XG4gICAgTUFJTi5hcHBlbmQoVElMRSk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBUSUxFLmlkID0gQ09PUkRJTkFURVNbaV07XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKCdwbGFjZV9zaGlwX3RpbGUnKTtcbiAgICBQTEFDRV9TSElQU19DT05UQUlORVIuYXBwZW5kKFRJTEUpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKE1BSU4pO1xuICBJTlNUUlVDVElPTlNfQ09OVEFJTkVSLmFwcGVuZChTUEFDRV9LRVkpO1xuICBJTlNUUlVDVElPTlNfQ09OVEFJTkVSLmFwcGVuZChJTlNUUlVDVElPTlMpO1xuICBNQUlOLmFwcGVuZChQTEFDRV9TSElQU19DT05UQUlORVIpO1xuICBNQUlOLmFwcGVuZChJTlNUUlVDVElPTlNfQ09OVEFJTkVSKTtcbn1cbiIsImltcG9ydCByZW5kZXJfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL3JlbmRlcl90aWxlcy5qcyc7XG5pbXBvcnQgbG9naWNfbGlzdGVuZXJzIGZyb20gJy4vaGVscGVycy9sb2dpY19saXN0ZW5lcnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGFjZV9zaGlwcygpIHtcbiAgcmVuZGVyX3RpbGVzKCk7XG4gIGxvZ2ljX2xpc3RlbmVycygpO1xufVxuIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgZ2FtZWxvb3AgZnJvbSAnLi9jb21wb25lbnRzL2dhbWUvR0FNRV9MT09QLmpzJztcbmltcG9ydCBob21lcGFnZSBmcm9tICcuL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaG9tZXBhZ2UuanMnO1xuXG5jb25zdCBHQU1FID0gZ2FtZWxvb3AoKTtcbmhvbWVwYWdlKCk7XG5cbmV4cG9ydCB7IEdBTUUgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2dhbWVfYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLCAxZnIpO1xcbiAgaGVpZ2h0OiA1MGVtO1xcbiAgd2lkdGg6IDcwZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNnYW1lX2JvYXJkcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1MCwgMWZyKTtcXG4gIGhlaWdodDogNTBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLW9wYWNpdHktMDA6IDE7XFxuICAtLW9wYWNpdHktMDU6IDAuOTg7XFxuICAtLW9wYWNpdHktMTA6IDAuOTY7XFxuICAtLW9wYWNpdHktMTU6IDAuOTQ7XFxuICAtLW9wYWNpdHktMjA6IDAuOTI7XFxuICAtLW9wYWNpdHktMjU6IDAuOTtcXG4gIC0tb3BhY2l0eS0zMDogMC44ODtcXG4gIC0tb3BhY2l0eS0zNTogMC44NjtcXG4gIC0tb3BhY2l0eS00MDogMC44NDtcXG4gIC0tb3BhY2l0eS00NTogMC44MjtcXG4gIC0tb3BhY2l0eS01MDogMC44O1xcbiAgLS1vcGFjaXR5LTU1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTYwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTY1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTcwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTc1OiAwLjk7XFxuICAtLW9wYWNpdHktODA6IDAuOTI7XFxuICAtLW9wYWNpdHktODU6IDAuOTQ7XFxuICAtLW9wYWNpdHktOTA6IDAuOTY7XFxuICAtLW9wYWNpdHktOTU6IDAuOTg7XFxuICAtLW9wYWNpdHktMTAwOiAxO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTAwKTtcXG4gIH1cXG5cXG4gIDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0wNSk7XFxuICB9XFxuXFxuICAxMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwKTtcXG4gIH1cXG5cXG4gIDE1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTUpO1xcbiAgfVxcblxcbiAgMjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0yMCk7XFxuICB9XFxuXFxuICAyNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTI1KTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzApO1xcbiAgfVxcblxcbiAgMzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zNSk7XFxuICB9XFxuXFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTQwKTtcXG4gIH1cXG5cXG4gIDQ1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDUpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS01MCk7XFxuICB9XFxuXFxuICA1NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTU1KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNjApO1xcbiAgfVxcblxcbiAgNjUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02NSk7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTcwKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzUpO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS04MCk7XFxuICB9XFxuXFxuICA4NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTg1KTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktOTApO1xcbiAgfVxcblxcbiAgOTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05NSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xMDApO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvYW5pbWF0b3IuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tb3BhY2l0eS0wMDogMTtcXG4gIC0tb3BhY2l0eS0wNTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDogMC45NjtcXG4gIC0tb3BhY2l0eS0xNTogMC45NDtcXG4gIC0tb3BhY2l0eS0yMDogMC45MjtcXG4gIC0tb3BhY2l0eS0yNTogMC45O1xcbiAgLS1vcGFjaXR5LTMwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTM1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTQwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTQ1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTUwOiAwLjg7XFxuICAtLW9wYWNpdHktNTU6IDAuODI7XFxuICAtLW9wYWNpdHktNjA6IDAuODQ7XFxuICAtLW9wYWNpdHktNjU6IDAuODY7XFxuICAtLW9wYWNpdHktNzA6IDAuODg7XFxuICAtLW9wYWNpdHktNzU6IDAuOTtcXG4gIC0tb3BhY2l0eS04MDogMC45MjtcXG4gIC0tb3BhY2l0eS04NTogMC45NDtcXG4gIC0tb3BhY2l0eS05MDogMC45NjtcXG4gIC0tb3BhY2l0eS05NTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDA6IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMDApO1xcbiAgfVxcblxcbiAgNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTA1KTtcXG4gIH1cXG5cXG4gIDEwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTApO1xcbiAgfVxcblxcbiAgMTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xNSk7XFxuICB9XFxuXFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTIwKTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMjUpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zMCk7XFxuICB9XFxuXFxuICAzNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTM1KTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDApO1xcbiAgfVxcblxcbiAgNDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS00NSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTUwKTtcXG4gIH1cXG5cXG4gIDU1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNTUpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02MCk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTY1KTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzApO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS03NSk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTgwKTtcXG4gIH1cXG5cXG4gIDg1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktODUpO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05MCk7XFxuICB9XFxuXFxuICA5NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTk1KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwMCk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuI2JzX2hlYWRpbmcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNDAsIDFmcik7XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuI3N0YXJ0X2J1dHRvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4uaG9tZXBlYWdlX3RpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuLndhdGVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAxNTc7XFxufVxcblxcbi5zdGFydCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnN0YXJ0X2JhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjOTcxYjtcXG59XFxuXFxuLnN0YXJ0X3RleHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjOTcxYjtcXG59XFxuLnN0YXJ0X3RleHRfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbiNic19oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQwLCAxZnIpO1xcbiAgaGVpZ2h0OiA0MGVtO1xcbiAgd2lkdGg6IDcwZW07XFxufVxcblxcbiNzdGFydF9idXR0b24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDEwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuLmhvbWVwZWFnZV90aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblxcbi53YXRlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTU3O1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zdGFydF9iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzk3MWI7XFxufVxcblxcbi5zdGFydF90ZXh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzk3MWI7XFxufVxcbi5zdGFydF90ZXh0X2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcHMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2F0ZXIuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0b3IuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaGlwX3RleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5cXG4uc2hpcF9odWxsX291dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaGlwX2h1bGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTU1NTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQyNDI7XFxufVxcblxcbi5zaGlwX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxuICBhbmltYXRpb246IG9wYWNpdHkgMC43NXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubGlnaHRfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjNmM2YzZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDY0NjtcXG59XFxuXFxuLmRhcmtfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBmMGYwZjtcXG59XFxuXFxuLnBlcmlzY29wZV9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnBlcmlzY29wZV9vbiB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnJhZGFyX29mZiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDEwMTU3O1xcbn1cXG5cXG4ucmFkYXJfb24ge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9zaGlwcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vYW5pbWF0b3IuY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmRpc3BsYXk9c3dhcCcpO1xcblxcbi5zaGlwX3RleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5cXG4uc2hpcF9odWxsX291dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaGlwX2h1bGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTU1NTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQyNDI7XFxufVxcblxcbi5zaGlwX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxuICBhbmltYXRpb246IG9wYWNpdHkgMC43NXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubGlnaHRfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjNmM2YzZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDY0NjtcXG59XFxuXFxuLmRhcmtfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBmMGYwZjtcXG59XFxuXFxuLnBlcmlzY29wZV9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnBlcmlzY29wZV9vbiB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnJhZGFyX29mZiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDEwMTU3O1xcbn1cXG5cXG4ucmFkYXJfb24ge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRvci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0td2F0ZXIxOiAjMDEwMTU3O1xcbiAgLS13YXRlcjI6ICMwNjM3NDQ7XFxufVxcblxcbi5zdXJyb3VuZGluZ193YXRlcl9kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzEzOGM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGQwZDYxO1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjJiMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE3NzU7XFxufVxcblxcbi5ncmVlbjEge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIyKTtcXG4gIG9wYWNpdHk6IDYwJTtcXG59XFxuXFxuLmJsdWUxIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxufVxcblxcbi5ibHVlMiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogOTYlO1xcbn1cXG5cXG4uYmx1ZTMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDkyJTtcXG59XFxuXFxuLmJsdWU0IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4OCU7XFxufVxcblxcbi5ibHVlNSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODQlO1xcbn1cXG5cXG4uYmx1ZTYge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuLmJsdWU3IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA3NiU7XFxufVxcbi5ibHVlOCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNzIlO1xcbn1cXG5cXG4uYmx1ZTkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDY4JTtcXG59XFxuXFxuLmJsdWUxMCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNjQlO1xcbn1cXG5cXG4uYmx1ZTEwIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy93YXRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vYW5pbWF0b3IuY3NzJztcXG5cXG46cm9vdCB7XFxuICAtLXdhdGVyMTogIzAxMDE1NztcXG4gIC0td2F0ZXIyOiAjMDYzNzQ0O1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzhjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkMGQ2MTtcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyYjE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTcxNzc1O1xcbn1cXG5cXG4uZ3JlZW4xIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMik7XFxuICBvcGFjaXR5OiA2MCU7XFxufVxcblxcbi5ibHVlMSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbn1cXG5cXG4uYmx1ZTIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDk2JTtcXG59XFxuXFxuLmJsdWUzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA5MiU7XFxufVxcblxcbi5ibHVlNCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODglO1xcbn1cXG5cXG4uYmx1ZTUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDg0JTtcXG59XFxuXFxuLmJsdWU2IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblxcbi5ibHVlNyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNzYlO1xcbn1cXG4uYmx1ZTgge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDcyJTtcXG59XFxuXFxuLmJsdWU5IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA2OCU7XFxufVxcblxcbi5ibHVlMTAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDY0JTtcXG59XFxuXFxuLmJsdWUxMCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TcGFjZStNb25vJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wbGFjZV9zaGlwc19iYWNrZ3JvdW5kX3RpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuI3BsYWNlX3NoaXBzX21haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNTAsIDFmcik7XFxuICB3aWR0aDogNzBlbTtcXG4gIGhlaWdodDogNTBlbTtcXG59XFxuXFxuI3BsYWNlX3NoaXBzX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDE1ZW07XFxuICBib3R0b206IDRlbTtcXG4gIGhlaWdodDogNDBlbTtcXG4gIHdpZHRoOiA0MGVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG59XFxuXFxuI2luc3RydWN0aW9uc19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFlbTtcXG4gIGxlZnQ6IDI5ZW07XFxuICB3aWR0aDogMTJlbTtcXG4gIGhlaWdodDogM2VtO1xcbiAgYmFja2dyb3VuZDogI2FhOWY2MTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1ZW07XFxufVxcblxcbiNia2Rfc3BhY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDMuNWVtO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDJweCAjMDAwMDAwO1xcbn1cXG5cXG4jaW5zdHJ1Y3Rpb25zIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4ucGxhY2Vfc2hpcF90aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxufVxcblxcbi5wbGFjZWRfdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTdjYTI5O1xcbiAgYmFja2dyb3VuZDogI2FjOTcxYjtcXG59XFxuXFxuLnBsYWNlX3NoaXBfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kOiAjODRmZjE3O1xcbn1cXG5cXG4uaW52YWxpZF9zaGlwX3BsYWNlbWVudCB7XFxuICBiYWNrZ3JvdW5kOiAjZjAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BhY2UrTW9ubyZkaXNwbGF5PXN3YXAnKTtcXG5cXG4ucGxhY2Vfc2hpcHNfYmFja2dyb3VuZF90aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblxcbiNwbGFjZV9zaGlwc19tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLCAxZnIpO1xcbiAgd2lkdGg6IDcwZW07XFxuICBoZWlnaHQ6IDUwZW07XFxufVxcblxcbiNwbGFjZV9zaGlwc19jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNWVtO1xcbiAgYm90dG9tOiA0ZW07XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNDBlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxufVxcblxcbiNpbnN0cnVjdGlvbnNfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxZW07XFxuICBsZWZ0OiAyOWVtO1xcbiAgd2lkdGg6IDEyZW07XFxuICBoZWlnaHQ6IDNlbTtcXG4gIGJhY2tncm91bmQ6ICNhYTlmNjE7XFxuICBib3JkZXItcmFkaXVzOiAwLjEyNWVtO1xcbn1cXG5cXG4jYmtkX3NwYWNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggIzAwMDAwMDtcXG59XFxuXFxuI2luc3RydWN0aW9ucyB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtZmFtaWx5OiAnU3BhY2UgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuLnBsYWNlX3NoaXBfdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWM5NzFiO1xcbn1cXG5cXG4ucGxhY2VkX3RpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3Y2EyOTtcXG4gIGJhY2tncm91bmQ6ICNhYzk3MWI7XFxufVxcblxcbi5wbGFjZV9zaGlwX2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuLmludmFsaWRfc2hpcF9wbGFjZW1lbnQge1xcbiAgYmFja2dyb3VuZDogI2YwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2luZGV4LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvY3NzL2luZGV4LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMvdWkvZ2FtZV9ib2FyZHMvY3NzL2luZGV4LmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJHYW1lYm9hcmQiLCJQbGF5ZXIiLCJnYW1lbG9vcCIsIlBMQVlFUjEiLCJQTEFZRVIyIiwiUExBWUVSMV9HQU1FQk9BUkQiLCJQTEFZRVIyX0dBTUVCT0FSRCIsIlNoaXAiLCJjYXJyaWVyIiwicG9zaXRpb24iLCJzaGlwIiwiYmF0dGxlc2hpcCIsImRlc3Ryb3llciIsInN1YiIsInBhdHJvbEJvYXQiLCJpbnB1dF9jb29yZGluYXRlcyIsInNoaXBzIiwiaW5wdXRfY29vcmRpbmF0ZSIsIm1pc3MiLCJXQVNfSElUIiwiaW5jbHVkZXMiLCJoaXRzIiwiSElUX0lOREVYIiwiaW5kZXhPZiIsImhpdCIsIm1pc3NlcyIsImlzX2FsbF9zdW5rIiwiYWxsX3N1bmtfY2FsbCIsImlzX3N1bmsiLCJzb3J0IiwicGxheWVyIiwiTEVUVEVSUyIsIm1hcCIsImxldHRlciIsImkiLCJib2FyZCIsIkVycm9yIiwiQ09PUkRJTkFURSIsInJlbWFpbmluZ19tb3ZlcyIsIm1vdmVzIiwicmVjZWl2ZV9hdHRhY2siLCJjb29yZGluYXRlIiwiRklMVEVSRURfTU9WRVMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJSRU1BSU5JTkdfTU9WRVNfQ09QWSIsIlJFTUFJTklORyIsImZpbHRlciIsInJlbWFpbmluZ19tb3ZlIiwiQXJyYXkiLCJmaWxsIiwicG9zaXRpb25faGl0IiwiZXZlcnkiLCJoaXRzX2FycmF5IiwiSElUUyIsInJlbmRlcl9iYWNrZ3JvdW5kX3RpbGVzIiwiTUFJTiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIkNMQVNTRVMiLCJpZCIsIlJBTkRPTV9OVU1CRVIiLCJUSUxFIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiYm9keSIsInJlbmRlcl90aWxlcyIsInJlbmRlcl9nYW1lX2JvYXJkcyIsIkFOSU1BVElPTlMiLCJQRVJJU0NPUEVfU1BJTk5FUiIsIkxFRlRfVElMRSIsImdldEVsZW1lbnRCeUlkIiwiUklHSFRfVElMRSIsInJlbW92ZSIsInZhbHVlIiwiUkFEQVJfU1BJTk5FUjEiLCJSQURBUl9TUElOTkVSMiIsIlNVQl9BTklNQVRJT04iLCJzZXRJbnRlcnZhbCIsIkJPQVQxIiwiQk9BVDIiLCJJVEVSQVRPUiIsIkJBVFRMRVNISVAiLCJCIiwiQSIsIlQxIiwiVDIiLCJMIiwiRSIsIlMiLCJIIiwiSSIsIlAiLCJlel9sb2FkZXIiLCJFWl9USUxFX0NPTE9SSVpFUiIsImNvbG9yX2JhdHRsZXNoaXBfdGlsZXMiLCJDQVJSSUVSIiwiREVTVFJPWUVSIiwiU1VCTUFSSU5FIiwiY29sb3Jfc2hpcF90aWxlcyIsImJsYWNrX291dGxpbmUiLCJodWxsIiwiZGFya19ncmF5IiwibGlnaHRfZ3JheSIsInNoaXBfbGlnaHQiLCJzdXJyb3VuZGluZ193YXRlcl9kYXJrIiwic3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQiLCJDIiwiViIsIk4iLCJTSVgiLCJOSU5FIiwiVSIsIk4yIiwiVjIiLCJZIiwiQUxMIiwidGlsZSIsImlubmVyVGV4dCIsInN1Ym1hcmluZSIsImxlZnRfcGVyaXNjb3BlIiwicmlnaHRfcGVyaXNjb3BlIiwiU1RBUlQiLCJjb2xvcl9zdGFydF90aWxlcyIsImFsbCIsInRpbGVfaWQiLCJjb2xvcl93YXRlcl90aWxlcyIsIldBVEVSX1RJTEVTIiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJtaW4iLCJtYXgiLCJ0YXJnZXRfYXJyYXkiLCJwdXNoIiwiaW5wdXRfYXJyYXkiLCJpbnB1dF9jbGFzcyIsInBsYWNlX3NoaXBzIiwibGlzdGVuZXJzX2hhbmRsZXJzIiwiU1RBUlRfQlVUVE9OIiwiU1RBUlRfQlVUVE9OX0VOVEVSX0hBTkRMRVIiLCJTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUyIsIlNUQVJUX0JVVFRPTl9URVhUX1RJTEVTIiwiU1RBUlRfQlVUVE9OX0xFQVZFX0hBTkRMRVIiLCJTVEFSVF9CVVRUT05fQ0xJQ0tfSEFORExFUiIsImludGVydmFsIiwiSU5URVJWQUwiLCJjbGVhckludGVydmFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkhFQURJTkciLCJjYXJyaWVyX2V6X2xvYWRlciIsIk9VVExJTkUiLCJIVUxMIiwiREFSS19HUkFZIiwiTElHSFRfR1JBWSIsIlNVUlJPVU5ESU5HX1dBVEVSX0RBUksiLCJkZXN0cm95ZXJfZXpfbG9hZGVyIiwicyIsInQxIiwiYSIsInIiLCJ0MiIsIlIiLCJudW1iZXIiLCJob21lcGFnZSIsIkNPT1JESU5BVEVTIiwiTlVNQkVSUyIsIkdBTUUiLCJwbGFjZV9haV9zaGlwcyIsImxvZ2ljX2xpc3RlbmVycyIsImN1cnJlbnRfc2hpcF9pbmRleCIsIm9yaWVudGF0aW9uIiwiU0hJUFMiLCJMRU5HVEgiLCJNQVhTIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiSU5CT1VORFNfRVZBTFVBVE9SIiwidmFsdWVfdG9fY29tcGFyZSIsImNoYXJDb2RlQXQiLCJNQVgiLCJTUEFDRV9UQUtFTl9FVkFMVUFUT1IiLCJhbGxfdGlsZXMiLCJhcmVfYWxsX3Rha2VuIiwiUExBWUVSMV9TSElQUyIsIlBPU0lUSU9OUyIsIlNVQlNFUVVFTlRfVElMRVMiLCJMRVRURVJfQ0hBUl9DT0RFIiwiTlVNQkVSIiwiU1RPUF9BVCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIkNPTE9SX1RJTEVTIiwiY29vcmRpbmF0ZXMiLCJNT1VTRV9FTlRFUl9IQU5ETEVSIiwiZXZlbnQiLCJJRCIsInRhcmdldCIsIklOQk9VTkRTIiwiQUxMX0NPT1JESU5BVEVTIiwiQVJFX1NVQlNFUVVFTlRfU1BBQ0VTX0ZSRUUiLCJNT1VTRV9MRUFWRV9IQU5ETEVSIiwiSE9WRVJFRF9USUxFUyIsIk1PVVNFX0NMSUNLX0hBTkRMRVIiLCJDVVJSRU5UX1NISVAiLCJwbGFjZV9zaGlwIiwiU1BBQ0VfQkFSX0hBTkRMRVIiLCJLRVkiLCJrZXkiLCJUSUxFUyIsIklORk8iLCJBTExfVElMRVMiLCJUT0dHTEVfT1JJRU5UQVRJT04iLCJPTkVfUkFORE9NIiwiUkFORE9NX0xFVFRFUiIsIkdFVF9NT1ZFIiwiUkFORE9NX0NPT1JESU5BVEUiLCJjcmVhdGVfY29vcmRpbmF0ZXMiLCJVTklRVUVfTU9WRSIsInVuaXF1ZSIsIk1PVkUiLCJmaWxsX2FpX2JvYXJkIiwiU0hJUF9QT1NJVElPTlMiLCJQTEFDRV9TSElQU19DT05UQUlORVIiLCJJTlNUUlVDVElPTlNfQ09OVEFJTkVSIiwiSU5TVFJVQ1RJT05TIiwiU1BBQ0VfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==