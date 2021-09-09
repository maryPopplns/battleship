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
  var PLAYER2_GAMEBOARD = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"](); //todo remove boilerplate so ships can be manually placed

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
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.SUBMARINE.hull, 'sub');
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
  dark_gray: [760, 830],
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

(function submarine_ez_loader() {
  var HULL = SUBMARINE.hull;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(898, 902, HULL);
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
function logic_listeners() {
  var current = 0;
  var orientation = 'horizontal';
  var SHIPS = ['carrier', 'battleship', 'destroyer', 'sub', 'patrolBoat'];
  var LENGTH = [5, 4, 3, 3, 2];

  var MOUSE_ENTER_HANDLER = function MOUSE_ENTER_HANDLER(event) {
    var ID = event.target.id;
    event.target.classList.add('place_ship_hovered');
  };

  var MOUSE_LEAVE_HANDLER = function MOUSE_LEAVE_HANDLER() {
    var HOVERED_TILES = Array.from(document.getElementsByClassName('place_ship_hovered'));
    HOVERED_TILES.map(function (tile) {
      tile.classList.remove('place_ship_hovered');
    });
  };

  var TILES = Array.from(document.getElementsByClassName('place_ship_tile'));
  TILES.map(function (tile) {
    tile.addEventListener('mouseenter', MOUSE_ENTER_HANDLER);
    tile.addEventListener('mouseleave', MOUSE_LEAVE_HANDLER);
  });
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
  var CLASSES = ['blue1', 'blue2', 'blue3', 'blue4', 'blue5', 'blue6', 'blue7', 'blue8', 'blue9', 'blue10', 'green1'];
  MAIN.id = 'place_ships_main';
  PLACE_SHIPS_CONTAINER.id = 'place_ships_container';

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
  MAIN.append(PLACE_SHIPS_CONTAINER);
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* .place_ships_background_tile:hover {\n  background: #84ff17;\n} */\n\n#place_ships_main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  width: 70em;\n  height: 50em;\n}\n\n#place_ships_container {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  position: absolute;\n  left: 15em;\n  bottom: 5em;\n  height: 40em;\n  width: 40em;\n  border: 1px solid #ac971b;\n}\n\n.place_ship_tile {\n  border: 1px solid #ac971b;\n}\n\n/* .place_ship_tile:hover {\n  background: #84ff17;\n} */\n\n.place_ship_hovered {\n  background: #84ff17;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/place_ships/css/index.css"],"names":[],"mappings":"AAAA;;GAEG;;AAEH;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;GAEG;;AAEH;EACE,mBAAmB;AACrB","sourcesContent":["/* .place_ships_background_tile:hover {\n  background: #84ff17;\n} */\n\n#place_ships_main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  width: 70em;\n  height: 50em;\n}\n\n#place_ships_container {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  position: absolute;\n  left: 15em;\n  bottom: 5em;\n  height: 40em;\n  width: 40em;\n  border: 1px solid #ac971b;\n}\n\n.place_ship_tile {\n  border: 1px solid #ac971b;\n}\n\n/* .place_ship_tile:hover {\n  background: #84ff17;\n} */\n\n.place_ship_hovered {\n  background: #84ff17;\n}\n"],"sourceRoot":""}]);
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
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_ui_homepage_css_index_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_ui_place_ships_css_index_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
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



var GAME = (0,_components_game_GAME_LOOP_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_ui_homepage_homepage_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDL0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBLElBQU1hLElBQUksR0FBR3BMLHlFQUFRLEVBQXJCO0FBQ0FvSywrRUFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWUvR0FNRV9MT09QLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWUvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9hbmltYXRpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2JhdHRsZXNoaXBfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvY29sb3JfYmF0dGxlc2hpcF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9jb2xvcl9zaGlwX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2NvbG9yX3N0YXJ0X3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2NvbG9yX3dhdGVyX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvbGlzdGVuZXJzX2hhbmRsZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL3JlbmRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9zaGlwX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL3N0YXJ0X3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvaGVscGVycy9jb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvaGVscGVycy9sb2dpY19saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9wbGFjZV9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2FuaW1hdG9yLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9zaGlwcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy93YXRlci5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVsb29wKCkge1xuICBjb25zdCBQTEFZRVIxID0gbmV3IFBsYXllcignaHVtYW4nKTtcbiAgY29uc3QgUExBWUVSMiA9IG5ldyBQbGF5ZXIoJ2FpJyk7XG4gIGNvbnN0IFBMQVlFUjFfR0FNRUJPQVJEID0gbmV3IEdhbWVib2FyZCgpO1xuICBjb25zdCBQTEFZRVIyX0dBTUVCT0FSRCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICAvL3RvZG8gcmVtb3ZlIGJvaWxlcnBsYXRlIHNvIHNoaXBzIGNhbiBiZSBtYW51YWxseSBwbGFjZWRcbiAgW1BMQVlFUjFfR0FNRUJPQVJELCBQTEFZRVIyX0dBTUVCT0FSRF0ubWFwKChib2FyZCkgPT4ge1xuICAgIGJvYXJkLnBsYWNlX3NoaXAoJ2NhcnJpZXInLCBbJ2EwJywgJ2ExJywgJ2EyJywgJ2EzJywgJ2E0J10pO1xuICAgIGJvYXJkLnBsYWNlX3NoaXAoJ2JhdHRsZXNoaXAnLCBbJ2IwJywgJ2IxJywgJ2IyJywgJ2IzJ10pO1xuICAgIGJvYXJkLnBsYWNlX3NoaXAoJ2Rlc3Ryb3llcicsIFsnYzAnLCAnYzEnLCAnYzInXSk7XG4gICAgYm9hcmQucGxhY2Vfc2hpcCgnc3ViJywgWydkMCcsICdkMScsICdkMiddKTtcbiAgICBib2FyZC5wbGFjZV9zaGlwKCdwYXRyb2xCb2F0JywgWydlMCcsICdlMSddKTtcbiAgfSk7XG4gIC8vdG9kbyByZW1vdmUgYm9pbGVycGxhdGUgc28gc2hpcHMgY2FuIGJlIG1hbnVhbGx5IHBsYWNlZFxuXG4gIHJldHVybiB7IFBMQVlFUjEsIFBMQVlFUjIgfTtcbn1cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIHNoaXBzID0ge1xuICAgIGNhcnJpZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDUpLFxuICAgIH0sXG4gICAgYmF0dGxlc2hpcDoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoNCksXG4gICAgfSxcbiAgICBkZXN0cm95ZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDMpLFxuICAgIH0sXG4gICAgc3ViOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCgzKSxcbiAgICB9LFxuICAgIHBhdHJvbEJvYXQ6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDIpLFxuICAgIH0sXG4gIH07XG4gIGhpdHMgPSBbXTtcbiAgbWlzc2VzID0gW107XG5cbiAgcGxhY2Vfc2hpcChzaGlwLCBpbnB1dF9jb29yZGluYXRlcykge1xuICAgIHRoaXMuc2hpcHNbc2hpcF0ucG9zaXRpb24gPSBpbnB1dF9jb29yZGluYXRlcztcbiAgfVxuICAjbWlzc19yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMubWlzc2VzLCBpbnB1dF9jb29yZGluYXRlXS5zb3J0KCk7XG4gIH1cbiAgI2hpdF9yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuaGl0cywgaW5wdXRfY29vcmRpbmF0ZV0uc29ydCgpO1xuICB9XG4gIHJlY2VpdmVfYXR0YWNrKGlucHV0X2Nvb3JkaW5hdGUpIHtcbiAgICBsZXQgbWlzcyA9IHRydWU7XG4gICAgZm9yIChsZXQgc2hpcCBpbiB0aGlzLnNoaXBzKSB7XG4gICAgICBjb25zdCBXQVNfSElUID0gdGhpcy5zaGlwc1tzaGlwXS5wb3NpdGlvbi5pbmNsdWRlcyhpbnB1dF9jb29yZGluYXRlKTtcbiAgICAgIGlmIChXQVNfSElUKSB7XG4gICAgICAgIHRoaXMuaGl0cyA9IHRoaXMuI2hpdF9yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgICAgICBjb25zdCBISVRfSU5ERVggPSB0aGlzLnNoaXBzW3NoaXBdLnBvc2l0aW9uLmluZGV4T2YoaW5wdXRfY29vcmRpbmF0ZSk7XG4gICAgICAgIHRoaXMuc2hpcHNbc2hpcF0uc2hpcC5oaXQoSElUX0lOREVYKTtcbiAgICAgICAgbWlzcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobWlzcykge1xuICAgICAgdGhpcy5taXNzZXMgPSB0aGlzLiNtaXNzX3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSk7XG4gICAgfVxuICB9XG4gIGFsbF9zdW5rKCkge1xuICAgIGxldCBpc19hbGxfc3VuayA9IHRydWU7XG4gICAgZm9yIChsZXQgc2hpcCBpbiB0aGlzLnNoaXBzKSB7XG4gICAgICBjb25zdCBhbGxfc3Vua19jYWxsID0gdGhpcy5zaGlwc1tzaGlwXS5zaGlwLmlzX3N1bmsoKTtcbiAgICAgIGlmIChhbGxfc3Vua19jYWxsID09PSBmYWxzZSkge1xuICAgICAgICBpc19hbGxfc3VuayA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzX2FsbF9zdW5rO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgfVxuICBtb3ZlcyA9IFtdO1xuICByZW1haW5pbmdfbW92ZXMgPSBbXTtcblxuICAjcmVtYWluaW5nX21vdmVzX3JlZHVjZXIoY29vcmRpbmF0ZSkge1xuICAgIHRoaXMucmVtYWluaW5nX21vdmVzID0gWy4uLnRoaXMucmVtYWluaW5nX21vdmVzLCBjb29yZGluYXRlXTtcbiAgfVxuICAjZmlsbF9yZW1haW5pbmdfbW92ZXMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IExFVFRFUlMgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onXTtcbiAgICBMRVRURVJTLm1hcCgobGV0dGVyKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgdGhpcy4jcmVtYWluaW5nX21vdmVzX3JlZHVjZXIoYCR7bGV0dGVyfSR7aX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSkoKTtcbiAgI2FpX21vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVtYWluaW5nX21vdmVzW1xuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5yZW1haW5pbmdfbW92ZXMubGVuZ3RoKVxuICAgIF07XG4gIH1cbiAgI2ZpbHRlcl9yZW1haW5pbmdfbW92ZXMoY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IFJFTUFJTklOR19NT1ZFU19DT1BZID0gWy4uLnRoaXMucmVtYWluaW5nX21vdmVzXTtcbiAgICBjb25zdCBSRU1BSU5JTkcgPSBSRU1BSU5JTkdfTU9WRVNfQ09QWS5maWx0ZXIoKHJlbWFpbmluZ19tb3ZlKSA9PiB7XG4gICAgICByZXR1cm4gcmVtYWluaW5nX21vdmUgIT09IGNvb3JkaW5hdGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIFJFTUFJTklORztcbiAgfVxuICAjYXR0YWNrX3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIHJldHVybiBbLi4udGhpcy5tb3ZlcywgaW5wdXRfY29vcmRpbmF0ZV07XG4gIH1cbiAgYWlfYXR0YWNrKGJvYXJkKSB7XG4gICAgaWYgKHRoaXMucGxheWVyICE9PSAnYWknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsYXllciBuZWVkcyB0byBiZSBBSScpO1xuICAgIH1cbiAgICBjb25zdCBDT09SRElOQVRFID0gdGhpcy4jYWlfbW92ZSgpO1xuICAgIHRoaXMucmVtYWluaW5nX21vdmVzID0gdGhpcy4jZmlsdGVyX3JlbWFpbmluZ19tb3ZlcyhDT09SRElOQVRFKTtcbiAgICB0aGlzLm1vdmVzID0gdGhpcy4jYXR0YWNrX3JlZHVjZXIoQ09PUkRJTkFURSk7XG4gICAgYm9hcmQucmVjZWl2ZV9hdHRhY2soQ09PUkRJTkFURSk7XG4gICAgcmV0dXJuIENPT1JESU5BVEU7XG4gIH1cbiAgaHVtYW5fYXR0YWNrKGJvYXJkLCBjb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMucGxheWVyICE9PSAnaHVtYW4nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsYXllciBuZWVkcyB0byBiZSBhIGh1bWFuJyk7XG4gICAgfVxuICAgIGNvbnN0IEZJTFRFUkVEX01PVkVTID0gdGhpcy4jZmlsdGVyX3JlbWFpbmluZ19tb3Zlcyhjb29yZGluYXRlKTtcbiAgICB0aGlzLnJlbWFpbmluZ19tb3ZlcyA9IEZJTFRFUkVEX01PVkVTO1xuICAgIHRoaXMubW92ZXMgPSB0aGlzLiNhdHRhY2tfcmVkdWNlcihjb29yZGluYXRlKTtcbiAgICBib2FyZC5yZWNlaXZlX2F0dGFjayhjb29yZGluYXRlKTtcbiAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMuaGl0cyA9IG5ldyBBcnJheShsZW5ndGgpLmZpbGwoZmFsc2UpO1xuICB9XG5cbiAgI2hpdF9yZWR1Y2VyKGhpdHNfYXJyYXksIHBvc2l0aW9uX2hpdCkge1xuICAgIGNvbnN0IEhJVFMgPSBbLi4uaGl0c19hcnJheV07XG4gICAgSElUU1twb3NpdGlvbl9oaXRdID0gdHJ1ZTtcbiAgICByZXR1cm4gSElUUztcbiAgfVxuICBoaXQocG9zaXRpb25faGl0KSB7XG4gICAgdGhpcy5oaXRzID0gdGhpcy4jaGl0X3JlZHVjZXIodGhpcy5oaXRzLCBwb3NpdGlvbl9oaXQpO1xuICB9XG4gIGlzX3N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cy5ldmVyeSgocG9zaXRpb24pID0+IHBvc2l0aW9uID09PSB0cnVlKTtcbiAgfVxufVxuIiwiY29uc3QgQU5JTUFUSU9OUyA9ICgoKSA9PiB7XG4gIGNvbnN0IFBFUklTQ09QRV9TUElOTkVSID0gKCkgPT4ge1xuICAgIGNvbnN0IExFRlRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDc1OSk7XG4gICAgY29uc3QgUklHSFRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDc2MSk7XG4gICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3BlcmlzY29wZV9vZmYnKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3BlcmlzY29wZV9vbicpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBpZiAoTEVGVF9USUxFLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnb24nKSkge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3BlcmlzY29wZV9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29uJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncGVyaXNjb3BlX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3BlcmlzY29wZV9vZmYnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3BlcmlzY29wZV9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb2ZmJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncGVyaXNjb3BlX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdwZXJpc2NvcGVfb24nKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgUkFEQVJfU1BJTk5FUjEgPSAoKSA9PiB7XG4gICAgY29uc3QgTEVGVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoNzE0KTtcbiAgICBjb25zdCBSSUdIVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoNzE2KTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgaWYgKExFRlRfVElMRS5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ29uJykpIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29uJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29mZicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBSQURBUl9TUElOTkVSMiA9ICgpID0+IHtcbiAgICBjb25zdCBMRUZUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxMDk3KTtcbiAgICBjb25zdCBSSUdIVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTA5OSk7XG4gICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIGlmIChMRUZUX1RJTEUuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdvbicpKSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vbicpO1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vZmYnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgU1VCX0FOSU1BVElPTiA9IHNldEludGVydmFsKFBFUklTQ09QRV9TUElOTkVSLCAxMDAwKTtcbiAgY29uc3QgQk9BVDEgPSBzZXRJbnRlcnZhbChSQURBUl9TUElOTkVSMSwgMTAwMCk7XG4gIGNvbnN0IEJPQVQyID0gc2V0SW50ZXJ2YWwoUkFEQVJfU1BJTk5FUjIsIDE1MDApO1xuXG4gIHJldHVybiB7IFNVQl9BTklNQVRJT04sIEJPQVQxLCBCT0FUMiB9O1xufSkoKTtcblxuZXhwb3J0IHsgQU5JTUFUSU9OUyB9O1xuIiwiaW1wb3J0IHsgSVRFUkFUT1IgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jb25zdCBCQVRUTEVTSElQID0ge1xuICBCOiBbMTUwLCAxNTQsIDIyMCwgMjI0LCAzNjAsIDM2NCwgNDMwLCA0MzYsIDQzNF0sXG4gIEE6IFsxNTYsIDE1OSwgMjI2LCAyMjksIDM2NiwgMzY5LCA0MzYsIDQzOSwgNTA2LCA1MDldLFxuICBUMTogWzE2MiwgMTYzLCAyMzIsIDIzMywgMzAyLCAzMDMsIDM3MiwgMzczLCA0NDIsIDQ0MywgNTEyLCA1MTNdLFxuICBUMjogWzE2NywgMTY4LCAyMzcsIDIzOCwgMzA3LCAzMDgsIDM3NywgMzc4LCA0NDcsIDQ0OCwgNTE3LCA1MThdLFxuICBMOiBbMTAxLCAxNzEsIDI0MSwgMzExLCAzODEsIDQ1MV0sXG4gIEU6IFsxNzYsIDI0NiwgMzg2LCA0NTZdLFxuICBTOiBbMTgxLCAyNTEsIDM5NCwgNDY0XSxcbiAgSDogWzExNiwgMTE5LCAxODYsIDE4OSwgMjU2LCAyNTksIDM5NiwgMzk5LCA0NjYsIDQ2OSwgNTM2LCA1MzldLFxuICBJOiBbMTkyLCAxOTMsIDI2MiwgMjYzLCAzMzIsIDMzMywgNDAyLCA0MDMsIDQ3MiwgNDczXSxcbiAgUDogWzE5NiwgMTk5LCAyNjYsIDI2OSwgNDA2LCA0NzYsIDU0Nl0sXG59O1xuXG4oZnVuY3Rpb24gZXpfbG9hZGVyKCkge1xuICBjb25zdCBCID0gQkFUVExFU0hJUC5CO1xuICBJVEVSQVRPUig4MCwgODQsIEIpO1xuICBJVEVSQVRPUigyOTAsIDI5NCwgQik7XG4gIElURVJBVE9SKDUwMCwgNTA0LCBCKTtcblxuICBjb25zdCBBID0gQkFUVExFU0hJUC5BO1xuICBJVEVSQVRPUig4NiwgODksIEEpO1xuICBJVEVSQVRPUigyOTYsIDI5OSwgQSk7XG5cbiAgY29uc3QgVDEgPSBCQVRUTEVTSElQLlQxO1xuICBJVEVSQVRPUig5MSwgOTQsIFQxKTtcblxuICBjb25zdCBUMiA9IEJBVFRMRVNISVAuVDI7XG4gIElURVJBVE9SKDk2LCA5OSwgVDIpO1xuXG4gIGNvbnN0IEwgPSBCQVRUTEVTSElQLkw7XG4gIElURVJBVE9SKDUyMSwgNTI0LCBMKTtcblxuICBjb25zdCBFID0gQkFUVExFU0hJUC5FO1xuICBJVEVSQVRPUigxMDYsIDEwOSwgRSk7XG4gIElURVJBVE9SKDMxNiwgMzE4LCBFKTtcbiAgSVRFUkFUT1IoNTI2LCA1MjksIEUpO1xuXG4gIGNvbnN0IFMgPSBCQVRUTEVTSElQLlM7XG4gIElURVJBVE9SKDExMSwgMTE0LCBTKTtcbiAgSVRFUkFUT1IoMzIxLCAzMjQsIFMpO1xuICBJVEVSQVRPUig1MzEsIDUzNCwgUyk7XG5cbiAgY29uc3QgSCA9IEJBVFRMRVNISVAuSDtcbiAgSVRFUkFUT1IoMzI2LCAzMjksIEgpO1xuXG4gIGNvbnN0IEkgPSBCQVRUTEVTSElQLkk7XG4gIElURVJBVE9SKDEyMSwgMTI0LCBJKTtcbiAgSVRFUkFUT1IoNTQxLCA1NDQsIEkpO1xuXG4gIGNvbnN0IFAgPSBCQVRUTEVTSElQLlA7XG4gIElURVJBVE9SKDEyNiwgMTI5LCBQKTtcbiAgSVRFUkFUT1IoMzM2LCAzMzksIFApO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQkFUVExFU0hJUDtcbiIsImltcG9ydCB7IEVaX1RJTEVfQ09MT1JJWkVSIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCBCQVRUTEVTSElQIGZyb20gJy4vYmF0dGxlc2hpcF90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX2JhdHRsZXNoaXBfdGlsZXMoKSB7XG4gIGZvciAobGV0IGxldHRlciBpbiBCQVRUTEVTSElQKSB7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQkFUVExFU0hJUFtsZXR0ZXJdLCAndGl0bGUnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ0FSUklFUiwgREVTVFJPWUVSLCBTVUJNQVJJTkUgfSBmcm9tICcuL3NoaXBfdGlsZXMuanMnO1xuaW1wb3J0IHsgRVpfVElMRV9DT0xPUklaRVIgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcl9zaGlwX3RpbGVzKCkge1xuICAoZnVuY3Rpb24gY2FycmllcigpIHtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLmJsYWNrX291dGxpbmUsICdzaGlwX2h1bGxfb3V0bGluZScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuaHVsbCwgJ3NoaXBfaHVsbCcpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuZGFya19ncmF5LCAnZGFya19ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5saWdodF9ncmF5LCAnbGlnaHRfZ3JheScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuc2hpcF9saWdodCwgJ3NoaXBfbGlnaHQnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLnN1cnJvdW5kaW5nX3dhdGVyX2RhcmssICdzdXJyb3VuZGluZ193YXRlcl9kYXJrJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoXG4gICAgICBDQVJSSUVSLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0LFxuICAgICAgJ3N1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0J1xuICAgICk7XG5cbiAgICBjb25zdCBDID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTc5NSk7XG4gICAgY29uc3QgViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE3OTYpO1xuICAgIGNvbnN0IE4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNzk3KTtcbiAgICBjb25zdCBTSVggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNzk5KTtcbiAgICBjb25zdCBOSU5FID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTgwMCk7XG4gICAgY29uc3QgVSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNDkpO1xuICAgIGNvbnN0IFMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgyMzUwKTtcbiAgICBjb25zdCBOMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTIpO1xuICAgIGNvbnN0IEEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgyMzUzKTtcbiAgICBjb25zdCBWMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTQpO1xuICAgIGNvbnN0IFkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgyMzU1KTtcbiAgICBjb25zdCBBTEwgPSBbQywgViwgTiwgU0lYLCBOSU5FLCBVLCBTLCBOMiwgQSwgVjIsIFldO1xuICAgIEFMTC5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc2hpcF90ZXh0Jyk7XG4gICAgfSk7XG4gICAgQy5pbm5lclRleHQgPSAnQyc7XG4gICAgVi5pbm5lclRleHQgPSAnVic7XG4gICAgTi5pbm5lclRleHQgPSAnTic7XG4gICAgU0lYLmlubmVyVGV4dCA9ICc2JztcbiAgICBOSU5FLmlubmVyVGV4dCA9ICc5JztcbiAgICBVLmlubmVyVGV4dCA9ICdVJztcbiAgICBTLmlubmVyVGV4dCA9ICdTJztcbiAgICBOMi5pbm5lclRleHQgPSAnTic7XG4gICAgQS5pbm5lclRleHQgPSAnQSc7XG4gICAgVjIuaW5uZXJUZXh0ID0gJ1YnO1xuICAgIFkuaW5uZXJUZXh0ID0gJ1knO1xuICB9KSgpO1xuXG4gIChmdW5jdGlvbiBkZXN0cm95ZXIoKSB7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLmJsYWNrX291dGxpbmUsICdzaGlwX2h1bGxfb3V0bGluZScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5odWxsLCAnc2hpcF9odWxsJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLmxpZ2h0X2dyYXksICdsaWdodF9ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLmRhcmtfZ3JheSwgJ2RhcmtfZ3JheScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5zaGlwX2xpZ2h0LCAnc2hpcF9saWdodCcpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFxuICAgICAgREVTVFJPWUVSLnN1cnJvdW5kaW5nX3dhdGVyX2RhcmssXG4gICAgICAnc3Vycm91bmRpbmdfd2F0ZXJfZGFyaydcbiAgICApO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFxuICAgICAgREVTVFJPWUVSLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0LFxuICAgICAgJ3N1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0J1xuICAgICk7XG5cbiAgICBjb25zdCBVID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1MCk7XG4gICAgY29uc3QgUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTEpO1xuICAgIGNvbnN0IE4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTUzKTtcbiAgICBjb25zdCBBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1NCk7XG4gICAgY29uc3QgViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTUpO1xuICAgIGNvbnN0IFkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTU2KTtcbiAgICBjb25zdCBBTEwgPSBbVSwgUywgTiwgQSwgViwgWV07XG4gICAgQUxMLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwX3RleHQnKTtcbiAgICB9KTtcbiAgICBVLmlubmVyVGV4dCA9ICdVJztcbiAgICBTLmlubmVyVGV4dCA9ICdTJztcbiAgICBOLmlubmVyVGV4dCA9ICdOJztcbiAgICBBLmlubmVyVGV4dCA9ICdBJztcbiAgICBWLmlubmVyVGV4dCA9ICdWJztcbiAgICBZLmlubmVyVGV4dCA9ICdZJztcbiAgfSkoKTtcblxuICAoZnVuY3Rpb24gc3VibWFyaW5lKCkge1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFNVQk1BUklORS5odWxsLCAnc3ViJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLmRhcmtfZ3JheSwgJ2RhcmtfZ3JheScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFNVQk1BUklORS5sZWZ0X3BlcmlzY29wZSwgJ3BlcmlzY29wZV9vbicpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFNVQk1BUklORS5yaWdodF9wZXJpc2NvcGUsICdwZXJpc2NvcGVfb2ZmJyk7XG4gIH0pKCk7XG59XG4iLCJpbXBvcnQgU1RBUlQgZnJvbSAnLi9zdGFydF90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX3N0YXJ0X3RpbGVzKCkge1xuICBjb25zdCBBTEwgPSBTVEFSVC5hbGw7XG4gIEFMTC5tYXAoKHRpbGVfaWQpID0+IHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN0YXJ0XyR7dGlsZV9pZH1gKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X2JhY2tncm91bmQnKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0X3RleHQnKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcl93YXRlcl90aWxlcygpIHtcbiAgY29uc3QgQ0xBU1NFUyA9IFtcbiAgICAnYmx1ZTEnLFxuICAgICdibHVlMicsXG4gICAgJ2JsdWUzJyxcbiAgICAnYmx1ZTQnLFxuICAgICdibHVlNScsXG4gICAgJ2JsdWU2JyxcbiAgICAnYmx1ZTcnLFxuICAgICdibHVlOCcsXG4gICAgJ2JsdWU5JyxcbiAgICAnYmx1ZTEwJyxcbiAgICAnZ3JlZW4xJyxcbiAgXTtcbiAgY29uc3QgV0FURVJfVElMRVMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dhdGVyJykpO1xuICBXQVRFUl9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICBjb25zdCBSQU5ET01fTlVNQkVSID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICAgIHRpbGUuY2xhc3NMaXN0LmFkZChDTEFTU0VTW1JBTkRPTV9OVU1CRVJdKTtcbiAgfSk7XG59XG4iLCJjb25zdCBJVEVSQVRPUiA9IChtaW4sIG1heCwgdGFyZ2V0X2FycmF5KSA9PiB7XG4gIGZvciAobGV0IGkgPSBtaW47IGkgPCBtYXggKyAxOyBpKyspIHtcbiAgICB0YXJnZXRfYXJyYXkucHVzaChpKTtcbiAgfVxufTtcblxuY29uc3QgRVpfVElMRV9DT0xPUklaRVIgPSAoaW5wdXRfYXJyYXksIGlucHV0X2NsYXNzKSA9PiB7XG4gIGlucHV0X2FycmF5Lm1hcCgodGlsZV9pZCkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aWxlX2lkKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKGlucHV0X2NsYXNzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBJVEVSQVRPUiwgRVpfVElMRV9DT0xPUklaRVIgfTtcbiIsImltcG9ydCB7IEFOSU1BVElPTlMgfSBmcm9tICcuL2FuaW1hdGlvbnMuanMnO1xuaW1wb3J0IHBsYWNlX3NoaXBzIGZyb20gJy4uLy4uL3BsYWNlX3NoaXBzL3BsYWNlX3NoaXBzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdGVuZXJzX2hhbmRsZXJzKCkge1xuICBjb25zdCBTVEFSVF9CVVRUT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRfYnV0dG9uJyk7XG5cbiAgY29uc3QgU1RBUlRfQlVUVE9OX0VOVEVSX0hBTkRMRVIgPSAoKSA9PiB7XG4gICAgY29uc3QgU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkRfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRfYmFja2dyb3VuZCcpXG4gICAgKTtcbiAgICBTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkJyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X2JhY2tncm91bmQnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IFNUQVJUX0JVVFRPTl9URVhUX1RJTEVTID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0X3RleHQnKVxuICAgICk7XG4gICAgU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0X3RleHRfaG92ZXJlZCcpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydF90ZXh0Jyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgU1RBUlRfQlVUVE9OX0xFQVZFX0hBTkRMRVIgPSAoKSA9PiB7XG4gICAgY29uc3QgU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkRfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkJylcbiAgICApO1xuICAgIFNUQVJUX0JVVFRPTl9CQUNLR1JPVU5EX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdGFydF9iYWNrZ3JvdW5kJyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X2JhY2tncm91bmRfaG92ZXJlZCcpO1xuICAgIH0pO1xuICAgIGNvbnN0IFNUQVJUX0JVVFRPTl9URVhUX1RJTEVTID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0X3RleHRfaG92ZXJlZCcpXG4gICAgKTtcbiAgICBTVEFSVF9CVVRUT05fVEVYVF9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfdGV4dCcpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydF90ZXh0X2hvdmVyZWQnKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgU1RBUlRfQlVUVE9OX0NMSUNLX0hBTkRMRVIgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaW50ZXJ2YWwgaW4gQU5JTUFUSU9OUykge1xuICAgICAgY29uc3QgSU5URVJWQUwgPSBBTklNQVRJT05TW2ludGVydmFsXTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoSU5URVJWQUwpO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFuZGluZ19wYWdlJykucmVtb3ZlKCk7XG4gICAgcGxhY2Vfc2hpcHMoKTtcbiAgfTtcblxuICBTVEFSVF9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFNUQVJUX0JVVFRPTl9FTlRFUl9IQU5ETEVSKTtcbiAgU1RBUlRfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTVEFSVF9CVVRUT05fTEVBVkVfSEFORExFUik7XG4gIFNUQVJUX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFNUQVJUX0JVVFRPTl9DTElDS19IQU5ETEVSKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl90aWxlcygpIHtcbiAgY29uc3QgTUFJTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3QgSEVBRElORyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBTVEFSVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBNQUlOLmlkID0gJ2xhbmRpbmdfcGFnZSc7XG4gIEhFQURJTkcuaWQgPSAnYnNfaGVhZGluZyc7XG4gIFNUQVJULmlkID0gJ3N0YXJ0X2J1dHRvbic7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjgwMDsgaSsrKSB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuaWQgPSBpO1xuICAgIFRJTEUuY2xhc3NMaXN0ID0gJ2hvbWVwZWFnZV90aWxlIHdhdGVyJztcbiAgICBIRUFESU5HLmFwcGVuZChUSUxFKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDcwMDsgaSsrKSB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuaWQgPSBgc3RhcnRfJHtpfWA7XG4gICAgVElMRS5jbGFzc0xpc3QgPSAndGlsZSBzdGFydCBzdGFydF9iYWNrZ3JvdW5kJztcbiAgICBTVEFSVC5hcHBlbmQoVElMRSk7XG4gIH1cbiAgTUFJTi5hcHBlbmQoSEVBRElORyk7XG4gIE1BSU4uYXBwZW5kKFNUQVJUKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoTUFJTik7XG59XG4iLCJpbXBvcnQgeyBJVEVSQVRPUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmNvbnN0IENBUlJJRVIgPSB7XG4gIGJsYWNrX291dGxpbmU6IFtcbiAgICAxNDQ2LCAxNDUwLCAxNTE2LCAxNTIwLCAxNTg2LCAxNTkwLCAxNzIzLCAxNzMzLCAxODAzLCAxODU5LCAxODczLCAxODc3LFxuICAgIDE5MjgsIDE5NDMsIDE5NDYsIDE5NDgsIDE5NTUsIDE5NTYsIDE5ODIsIDE5ODMsIDE5ODcsIDE5ODgsIDE5OTIsIDE5OTMsXG4gICAgMTk5OCwgMjAxMywgMjAyNiwgMjA1MiwgMjA1NCwgMjA1NSwgMjA1NywgMjA1OSwgMjA2MCwgMjA2MiwgMjA2NCwgMjA2NSxcbiAgICAyMDY4LCAyMDgzLCAyMDg1LCAyMDg5LCAyMDkxLCAyMDk0LCAyMDk1LCAyMTIzLCAyMTI1LCAyMTI4LCAyMTMwLCAyMTMzLFxuICAgIDIxMzUsIDIxMzgsIDIxNTMsIDIxNTUsIDIxNTksIDIxNjEsIDIxNjUsIDIyNjAsIDIyNjEsIDIyNjIsIDIzMDksIDIzMzIsXG4gICAgMjMzMywgMjMzNCwgMjM3OSwgMjQwNCwgMjQ0OCwgMjQ3NSwgMjUxNywgMjU0NiwgMjU4NiwgMjYxNywgMjY1NiwgMjY4NyxcbiAgICAyNzI2LFxuICBdLFxuICBodWxsOiBbXG4gICAgMTUxOSwgMTkzOSwgMTk0MCwgMjA3OSwgMjA4MCwgMjY4OCwgMjY4OSwgMjY5MiwgMjY5MywgMjY5NiwgMjY5NywgMjcwMCxcbiAgICAyNzAxLCAyNzA0LCAyNzA1LCAyNzA4LCAyNzA5LCAyNzEyLCAyNzEzLCAyNzE2LCAyNzE3LCAyNzIwLCAyNzIxLCAyNzI0LFxuICAgIDI3MjUsXG4gIF0sXG4gIGRhcmtfZ3JheTogW1xuICAgIDExNjgsIDEyMzgsIDEzMDgsIDE1MTcsIDE1MTgsIDE5MjksIDE5MzAsIDE5NDEsIDE5NDIsIDE5NDcsIDIwMjUsIDIwNTMsXG4gICAgMjA1OCwgMjA2MywgMjA2OSwgMjA3MCwgMjA4MSwgMjA4MiwgMjEyNCwgMjEyOSwgMjEzNCwgMjA5MiwgMjA5MyxcbiAgXSxcbiAgbGlnaHRfZ3JheTogWzEwOTcsIDEwOTldLFxuICBzaGlwX2xpZ2h0OiBbMTA5OF0sXG4gIHN1cnJvdW5kaW5nX3dhdGVyX2Rhcms6IFtcbiAgICAyNTQ1LCAyNjE2LCAyNjg2LCAyNjkwLCAyNjkxLCAyNjk0LCAyNjk1LCAyNjk4LCAyNjk5LCAyNzAyLCAyNzAzLCAyNzA2LFxuICAgIDI3MDcsIDI3MTAsIDI3MTEsIDI3MTQsIDI3MTUsIDI3MTgsIDI3MTksIDI3MjIsIDI3MjMsIDI1ODcsIDI2NTcsIDI3MjcsXG4gICAgMjQ0OSwgMjUxOCwgMjUxOSwgMjU4OCwgMjY1OCxcbiAgXSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQ6IFtcbiAgICAyNTg5LCAyNjE1LCAyNjU5LCAyNjg0LCAyNjg1LCAyNzI4LCAyNzI5LCAyNzUzLCAyNzU0LCAyNzU1LCAyNzk4LCAyNzk5LFxuICBdLFxufTtcblxuY29uc3QgREVTVFJPWUVSID0ge1xuICBibGFja19vdXRsaW5lOiBbXG4gICAgMTE5NCwgMTE5OCwgMTIxMSwgMTI2NSwgMTI2OSwgMTI4MCwgMTQ3NCwgMTQ5MSwgMTQ5MiwgMTU0NSwgMTU2MSwgMTYxNixcbiAgICAxNjMxLCAxNjg3LCAxNzAxLFxuICBdLFxuICBodWxsOiBbMTY4OCwgMTY5MSwgMTY5MiwgMTY5NSwgMTY5NiwgMTY5OSwgMTcwMF0sXG4gIGRhcmtfZ3JheTogWzc4NSwgODU1LCA5MjUsIDk5NSwgMTI2NiwgMTI3MCwgMTI3MywgMTI3NCwgMTI3NiwgMTI3OV0sXG4gIGxpZ2h0X2dyYXk6IFs3MTQsIDcxNiwgMTEzMywgMTEzNywgMTI3MiwgMTI3NSwgMTI3N10sXG4gIHNoaXBfbGlnaHQ6IFs3MTVdLFxuICBzdXJyb3VuZGluZ193YXRlcl9kYXJrOiBbMTY4OSwgMTY5MCwgMTY5MywgMTY5NCwgMTY5NywgMTY5OF0sXG4gIHN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0OiBbXG4gICAgMTYzMiwgMTY4NSwgMTY4NiwgMTcwMiwgMTcwMywgMTc1NCwgMTc1NSwgMTc3MywgMTc3NCxcbiAgXSxcbn07XG5cbmNvbnN0IFNVQk1BUklORSA9IHtcbiAgaHVsbDogW10sXG4gIGRhcmtfZ3JheTogWzc2MCwgODMwXSxcbiAgbGVmdF9wZXJpc2NvcGU6IFs3NTldLFxuICByaWdodF9wZXJpc2NvcGU6IFs3NjFdLFxufTtcblxuKGZ1bmN0aW9uIGNhcnJpZXJfZXpfbG9hZGVyKCkge1xuICBjb25zdCBPVVRMSU5FID0gQ0FSUklFUi5ibGFja19vdXRsaW5lO1xuICBJVEVSQVRPUigxMzc2LCAxMzgwLCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMTY1MywgMTY2MywgT1VUTElORSk7XG4gIElURVJBVE9SKDE3OTAsIDE3OTMsIE9VVExJTkUpO1xuICBJVEVSQVRPUigyMDE1LCAyMDE5LCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMjAyMiwgMjAyNCwgT1VUTElORSk7XG4gIElURVJBVE9SKDIxOTAsIDIyMzksIE9VVExJTkUpO1xuXG4gIGNvbnN0IEhVTEwgPSBDQVJSSUVSLmh1bGw7XG4gIElURVJBVE9SKDE0NDcsIDE0NDksIEhVTEwpO1xuICBJVEVSQVRPUigxNTg3LCAxNTg5LCBIVUxMKTtcbiAgSVRFUkFUT1IoMTcyNCwgMTczMiwgSFVMTCk7XG4gIElURVJBVE9SKDE3OTQsIDE4MDIsIEhVTEwpO1xuICBJVEVSQVRPUigxODYwLCAxODcyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTkzMSwgMTkzNCwgSFVMTCk7XG4gIElURVJBVE9SKDE5OTksIDIwMTIsIEhVTEwpO1xuICBJVEVSQVRPUigyMDcxLCAyMDc0LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjEzOSwgMjE1MiwgSFVMTCk7XG4gIElURVJBVE9SKDIyNjMsIDIzMDgsIEhVTEwpO1xuICBJVEVSQVRPUigyMzM1LCAyMzc4LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjQwNSwgMjQ0NywgSFVMTCk7XG4gIElURVJBVE9SKDI0NzYsIDI1MTYsIEhVTEwpO1xuICBJVEVSQVRPUigyNTQ3LCAyNTg1LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjYxOCwgMjY1NSwgSFVMTCk7XG5cbiAgY29uc3QgREFSS19HUkFZID0gQ0FSUklFUi5kYXJrX2dyYXk7XG4gIElURVJBVE9SKDExMzQsIDExMzYsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDIwODYsIDIwODgsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDIxNTYsIDIxNTgsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDIxNjIsIDIxNjQsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDE5MzUsIDE5MzgsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDIwNzUsIDIwNzgsIERBUktfR1JBWSk7XG5cbiAgY29uc3QgTElHSFRfR1JBWSA9IENBUlJJRVIubGlnaHRfZ3JheTtcbiAgSVRFUkFUT1IoMjMzNSwgMjM3OCwgTElHSFRfR1JBWSk7XG5cbiAgY29uc3QgU1VSUk9VTkRJTkdfV0FURVJfREFSSyA9IENBUlJJRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyaztcbiAgSVRFUkFUT1IoMjc1NiwgMjc5NywgU1VSUk9VTkRJTkdfV0FURVJfREFSSyk7XG59KSgpO1xuXG4oZnVuY3Rpb24gZGVzdHJveWVyX2V6X2xvYWRlcigpIHtcbiAgY29uc3QgT1VUTElORSA9IERFU1RST1lFUi5ibGFja19vdXRsaW5lO1xuICBJVEVSQVRPUigxNDAzLCAxNDIyLCBPVVRMSU5FKTtcblxuICBjb25zdCBIVUxMID0gREVTVFJPWUVSLmh1bGw7XG4gIElURVJBVE9SKDE0NzUsIDE0OTAsIEhVTEwpO1xuICBJVEVSQVRPUigxNjE3LCAxNjMwLCBIVUxMKTtcblxuICBjb25zdCBMSUdIVF9HUkFZID0gREVTVFJPWUVSLmxpZ2h0X2dyYXk7XG4gIElURVJBVE9SKDE1NDYsIDE1NjAsIExJR0hUX0dSQVkpO1xuICBJVEVSQVRPUigxMDYzLCAxMDY3LCBMSUdIVF9HUkFZKTtcbiAgSVRFUkFUT1IoMTIwMiwgMTIwNywgTElHSFRfR1JBWSk7XG4gIElURVJBVE9SKDEzNDIsIDEzNDcsIExJR0hUX0dSQVkpO1xuXG4gIGNvbnN0IERBUktfR1JBWSA9IERFU1RST1lFUi5kYXJrX2dyYXk7XG4gIElURVJBVE9SKDEzMzQsIDEzMzYsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDEzMzgsIDEzNDAsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDEzNDksIDEzNTEsIERBUktfR1JBWSk7XG5cbiAgY29uc3QgU1VSUk9VTkRJTkdfV0FURVJfREFSSyA9IERFU1RST1lFUi5zdXJyb3VuZGluZ193YXRlcl9kYXJrO1xuICBJVEVSQVRPUigxNzU2LCAxNzcyLCBTVVJST1VORElOR19XQVRFUl9EQVJLKTtcbn0pKCk7XG5cbihmdW5jdGlvbiBzdWJtYXJpbmVfZXpfbG9hZGVyKCkge1xuICBjb25zdCBIVUxMID0gU1VCTUFSSU5FLmh1bGw7XG4gIElURVJBVE9SKDg5OCwgOTAyLCBIVUxMKTtcbn0pKCk7XG5cbmV4cG9ydCB7IENBUlJJRVIsIERFU1RST1lFUiwgU1VCTUFSSU5FIH07XG4iLCJpbXBvcnQgeyBJVEVSQVRPUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmNvbnN0IFNUQVJUID0ge1xuICBzOiBbMjIxLCAyMjIsIDQzNywgNDM4XSxcbiAgdDE6IFsyMzQsIDIzNSwgMzA0LCAzMDUsIDM3NCwgMzc1LCA0NDQsIDQ0NSwgNTE0LCA1MTUsIDU4NCwgNTg1XSxcbiAgYTogW1xuICAgIDI0MSwgMjQyLCAyNDcsIDI0OCwgNDUxLCA0NTIsIDQ1NywgNDU4LCA1MjEsIDUyMiwgNTI3LCA1MjgsIDU5MSwgNTkyLCA1OTcsXG4gICAgNTk4LFxuICBdLFxuICByOiBbXG4gICAgMjUxLCAyNTIsIDI1NywgMjU4LCA0NjEsIDQ2MiwgNDY3LCA0NjgsIDUzMSwgNTMyLCA1MzcsIDUzOCwgNjAxLCA2MDIsIDYwNyxcbiAgICA2MDgsXG4gIF0sXG4gIHQyOiBbMjY0LCAyNjUsIDMzNCwgMzM1LCA0MDQsIDQwNSwgNDc0LCA0NzUsIDU0NCwgNTQ1LCA2MTQsIDYxNV0sXG4gIGFsbDogW10sXG59O1xuXG4oZnVuY3Rpb24gZXpfbG9hZGVyKCkge1xuICBjb25zdCBTID0gU1RBUlQucztcbiAgSVRFUkFUT1IoODEsIDg4LCBTKTtcbiAgSVRFUkFUT1IoMTUxLCAxNTgsIFMpO1xuICBJVEVSQVRPUigyOTEsIDI5OCwgUyk7XG4gIElURVJBVE9SKDM2MSwgMzY4LCBTKTtcbiAgSVRFUkFUT1IoNTAxLCA1MDgsIFMpO1xuICBJVEVSQVRPUig1NzEsIDU3OCwgUyk7XG5cbiAgY29uc3QgVDEgPSBTVEFSVC50MTtcbiAgSVRFUkFUT1IoOTEsIDk4LCBUMSk7XG4gIElURVJBVE9SKDE2MSwgMTY4LCBUMSk7XG5cbiAgY29uc3QgQSA9IFNUQVJULmE7XG4gIElURVJBVE9SKDEwMSwgMTA4LCBBKTtcbiAgSVRFUkFUT1IoMTcxLCAxNzgsIEEpO1xuICBJVEVSQVRPUigzMTEsIDMxOCwgQSk7XG4gIElURVJBVE9SKDM4MSwgMzg4LCBBKTtcblxuICBjb25zdCBSID0gU1RBUlQucjtcbiAgSVRFUkFUT1IoMTExLCAxMTYsIFIpO1xuICBJVEVSQVRPUigxODEsIDE4NiwgUik7XG4gIElURVJBVE9SKDMyMSwgMzI2LCBSKTtcbiAgSVRFUkFUT1IoMzkxLCAzOTYsIFIpO1xuXG4gIGNvbnN0IFQyID0gU1RBUlQudDI7XG4gIElURVJBVE9SKDEyMSwgMTI4LCBUMik7XG4gIElURVJBVE9SKDE5MSwgMTk4LCBUMik7XG5cbiAgZm9yIChsZXQgbGV0dGVyIGluIFNUQVJUKSB7XG4gICAgaWYgKGxldHRlciA9PT0gJ2FsbCcpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBTVEFSVFtsZXR0ZXJdLm1hcCgobnVtYmVyKSA9PiB7XG4gICAgICBTVEFSVC5hbGwucHVzaChudW1iZXIpO1xuICAgIH0pO1xuICB9XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgU1RBUlQ7XG4iLCJpbXBvcnQgcmVuZGVyX3RpbGVzIGZyb20gJy4vaGVscGVycy9yZW5kZXJfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX3N0YXJ0X3RpbGVzIGZyb20gJy4vaGVscGVycy9jb2xvcl9zdGFydF90aWxlcy5qcyc7XG5pbXBvcnQgY29sb3Jfc2hpcF90aWxlcyBmcm9tICcuL2hlbHBlcnMvY29sb3Jfc2hpcF90aWxlcy5qcyc7XG5pbXBvcnQgY29sb3JfYmF0dGxlc2hpcF90aWxlcyBmcm9tICcuL2hlbHBlcnMvY29sb3JfYmF0dGxlc2hpcF90aWxlcy5qcyc7XG5pbXBvcnQgY29sb3Jfd2F0ZXJfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX3dhdGVyX3RpbGVzLmpzJztcbmltcG9ydCBsaXN0ZW5lcnNfaGFuZGxlcnMgZnJvbSAnLi9oZWxwZXJzL2xpc3RlbmVyc19oYW5kbGVycy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVwYWdlKCkge1xuICByZW5kZXJfdGlsZXMoKTtcbiAgY29sb3Jfc3RhcnRfdGlsZXMoKTtcbiAgY29sb3Jfc2hpcF90aWxlcygpO1xuICBjb2xvcl9iYXR0bGVzaGlwX3RpbGVzKCk7XG4gIGNvbG9yX3dhdGVyX3RpbGVzKCk7XG4gIGxpc3RlbmVyc19oYW5kbGVycygpO1xufVxuIiwiY29uc3QgQ09PUkRJTkFURVMgPSBbXTtcbmNvbnN0IExFVFRFUlMgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onXTtcbmNvbnN0IE5VTUJFUlMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG5MRVRURVJTLm1hcCgobGV0dGVyKSA9PiB7XG4gIE5VTUJFUlMubWFwKChudW1iZXIpID0+IHtcbiAgICBDT09SRElOQVRFUy5wdXNoKGAke2xldHRlcn0ke251bWJlcn1gKTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ09PUkRJTkFURVM7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpY19saXN0ZW5lcnMoKSB7XG4gIGxldCBjdXJyZW50ID0gMDtcbiAgbGV0IG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICBjb25zdCBTSElQUyA9IFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgJ2Rlc3Ryb3llcicsICdzdWInLCAncGF0cm9sQm9hdCddO1xuICBjb25zdCBMRU5HVEggPSBbNSwgNCwgMywgMywgMl07XG5cbiAgY29uc3QgTU9VU0VfRU5URVJfSEFORExFUiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IElEID0gZXZlbnQudGFyZ2V0LmlkO1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdwbGFjZV9zaGlwX2hvdmVyZWQnKTtcbiAgfTtcbiAgY29uc3QgTU9VU0VfTEVBVkVfSEFORExFUiA9ICgpID0+IHtcbiAgICBjb25zdCBIT1ZFUkVEX1RJTEVTID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYWNlX3NoaXBfaG92ZXJlZCcpXG4gICAgKTtcbiAgICBIT1ZFUkVEX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZV9zaGlwX2hvdmVyZWQnKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBUSUxFUyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxhY2Vfc2hpcF90aWxlJykpO1xuICBUSUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBNT1VTRV9FTlRFUl9IQU5ETEVSKTtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBNT1VTRV9MRUFWRV9IQU5ETEVSKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgQ09PUkRJTkFURVMgZnJvbSAnLi9jb29yZGluYXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl90aWxlcygpIHtcbiAgY29uc3QgTUFJTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3QgUExBQ0VfU0hJUFNfQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IENMQVNTRVMgPSBbXG4gICAgJ2JsdWUxJyxcbiAgICAnYmx1ZTInLFxuICAgICdibHVlMycsXG4gICAgJ2JsdWU0JyxcbiAgICAnYmx1ZTUnLFxuICAgICdibHVlNicsXG4gICAgJ2JsdWU3JyxcbiAgICAnYmx1ZTgnLFxuICAgICdibHVlOScsXG4gICAgJ2JsdWUxMCcsXG4gICAgJ2dyZWVuMScsXG4gIF07XG5cbiAgTUFJTi5pZCA9ICdwbGFjZV9zaGlwc19tYWluJztcbiAgUExBQ0VfU0hJUFNfQ09OVEFJTkVSLmlkID0gJ3BsYWNlX3NoaXBzX2NvbnRhaW5lcic7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzNTAwOyBpKyspIHtcbiAgICBjb25zdCBSQU5ET01fTlVNQkVSID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3BsYWNlX3NoaXBzX2JhY2tncm91bmRfdGlsZScpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZChDTEFTU0VTW1JBTkRPTV9OVU1CRVJdKTtcbiAgICBNQUlOLmFwcGVuZChUSUxFKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuaWQgPSBDT09SRElOQVRFU1tpXTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3BsYWNlX3NoaXBfdGlsZScpO1xuICAgIFBMQUNFX1NISVBTX0NPTlRBSU5FUi5hcHBlbmQoVElMRSk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoTUFJTik7XG4gIE1BSU4uYXBwZW5kKFBMQUNFX1NISVBTX0NPTlRBSU5FUik7XG59XG4iLCJpbXBvcnQgcmVuZGVyX3RpbGVzIGZyb20gJy4vaGVscGVycy9yZW5kZXJfdGlsZXMuanMnO1xuaW1wb3J0IGxvZ2ljX2xpc3RlbmVycyBmcm9tICcuL2hlbHBlcnMvbG9naWNfbGlzdGVuZXJzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxhY2Vfc2hpcHMoKSB7XG4gIHJlbmRlcl90aWxlcygpO1xuICBsb2dpY19saXN0ZW5lcnMoKTtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1vcGFjaXR5LTAwOiAxO1xcbiAgLS1vcGFjaXR5LTA1OiAwLjk4O1xcbiAgLS1vcGFjaXR5LTEwOiAwLjk2O1xcbiAgLS1vcGFjaXR5LTE1OiAwLjk0O1xcbiAgLS1vcGFjaXR5LTIwOiAwLjkyO1xcbiAgLS1vcGFjaXR5LTI1OiAwLjk7XFxuICAtLW9wYWNpdHktMzA6IDAuODg7XFxuICAtLW9wYWNpdHktMzU6IDAuODY7XFxuICAtLW9wYWNpdHktNDA6IDAuODQ7XFxuICAtLW9wYWNpdHktNDU6IDAuODI7XFxuICAtLW9wYWNpdHktNTA6IDAuODtcXG4gIC0tb3BhY2l0eS01NTogMC44MjtcXG4gIC0tb3BhY2l0eS02MDogMC44NDtcXG4gIC0tb3BhY2l0eS02NTogMC44NjtcXG4gIC0tb3BhY2l0eS03MDogMC44ODtcXG4gIC0tb3BhY2l0eS03NTogMC45O1xcbiAgLS1vcGFjaXR5LTgwOiAwLjkyO1xcbiAgLS1vcGFjaXR5LTg1OiAwLjk0O1xcbiAgLS1vcGFjaXR5LTkwOiAwLjk2O1xcbiAgLS1vcGFjaXR5LTk1OiAwLjk4O1xcbiAgLS1vcGFjaXR5LTEwMDogMTtcXG59XFxuXFxuQGtleWZyYW1lcyBvcGFjaXR5IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0wMCk7XFxuICB9XFxuXFxuICA1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMDUpO1xcbiAgfVxcblxcbiAgMTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xMCk7XFxuICB9XFxuXFxuICAxNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTE1KTtcXG4gIH1cXG5cXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMjApO1xcbiAgfVxcblxcbiAgMjUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0yNSk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTMwKTtcXG4gIH1cXG5cXG4gIDM1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzUpO1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS00MCk7XFxuICB9XFxuXFxuICA0NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTQ1KTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNTApO1xcbiAgfVxcblxcbiAgNTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS01NSk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTYwKTtcXG4gIH1cXG5cXG4gIDY1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNjUpO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS03MCk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTc1KTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktODApO1xcbiAgfVxcblxcbiAgODUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS04NSk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTkwKTtcXG4gIH1cXG5cXG4gIDk1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktOTUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTAwKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2FuaW1hdG9yLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLW9wYWNpdHktMDA6IDE7XFxuICAtLW9wYWNpdHktMDU6IDAuOTg7XFxuICAtLW9wYWNpdHktMTA6IDAuOTY7XFxuICAtLW9wYWNpdHktMTU6IDAuOTQ7XFxuICAtLW9wYWNpdHktMjA6IDAuOTI7XFxuICAtLW9wYWNpdHktMjU6IDAuOTtcXG4gIC0tb3BhY2l0eS0zMDogMC44ODtcXG4gIC0tb3BhY2l0eS0zNTogMC44NjtcXG4gIC0tb3BhY2l0eS00MDogMC44NDtcXG4gIC0tb3BhY2l0eS00NTogMC44MjtcXG4gIC0tb3BhY2l0eS01MDogMC44O1xcbiAgLS1vcGFjaXR5LTU1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTYwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTY1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTcwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTc1OiAwLjk7XFxuICAtLW9wYWNpdHktODA6IDAuOTI7XFxuICAtLW9wYWNpdHktODU6IDAuOTQ7XFxuICAtLW9wYWNpdHktOTA6IDAuOTY7XFxuICAtLW9wYWNpdHktOTU6IDAuOTg7XFxuICAtLW9wYWNpdHktMTAwOiAxO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTAwKTtcXG4gIH1cXG5cXG4gIDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0wNSk7XFxuICB9XFxuXFxuICAxMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwKTtcXG4gIH1cXG5cXG4gIDE1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTUpO1xcbiAgfVxcblxcbiAgMjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0yMCk7XFxuICB9XFxuXFxuICAyNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTI1KTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzApO1xcbiAgfVxcblxcbiAgMzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zNSk7XFxuICB9XFxuXFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTQwKTtcXG4gIH1cXG5cXG4gIDQ1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDUpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS01MCk7XFxuICB9XFxuXFxuICA1NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTU1KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNjApO1xcbiAgfVxcblxcbiAgNjUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02NSk7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTcwKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzUpO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS04MCk7XFxuICB9XFxuXFxuICA4NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTg1KTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktOTApO1xcbiAgfVxcblxcbiAgOTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05NSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xMDApO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbiNic19oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQwLCAxZnIpO1xcbiAgaGVpZ2h0OiA0MGVtO1xcbiAgd2lkdGg6IDcwZW07XFxufVxcblxcbiNzdGFydF9idXR0b24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDEwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuLmhvbWVwZWFnZV90aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblxcbi53YXRlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTU3O1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zdGFydF9iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzk3MWI7XFxufVxcblxcbi5zdGFydF90ZXh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzk3MWI7XFxufVxcbi5zdGFydF90ZXh0X2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9nbG9iYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXFxubWFpbiB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG4jYnNfaGVhZGluZyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0MCwgMWZyKTtcXG4gIGhlaWdodDogNDBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4jc3RhcnRfYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiAxMGVtO1xcbiAgd2lkdGg6IDcwZW07XFxufVxcblxcbi5ob21lcGVhZ2VfdGlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjODRmZjE3O1xcbn1cXG5cXG4ud2F0ZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDE1NztcXG59XFxuXFxuLnN0YXJ0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnN0YXJ0X2JhY2tncm91bmRfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWM5NzFiO1xcbn1cXG5cXG4uc3RhcnRfdGV4dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWM5NzFiO1xcbn1cXG4uc3RhcnRfdGV4dF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBzLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dhdGVyLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdG9yLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2hpcF90ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG59XFxuXFxuLnNoaXBfaHVsbF9vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2hpcF9odWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTU1NTU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0MjQyO1xcbn1cXG5cXG4uc2hpcF9saWdodCB7XFxuICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLmxpZ2h0X2dyYXkge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XFxufVxcblxcbi5kYXJrX2dyYXkge1xcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTI5Mjk7XFxufVxcblxcbi5zdWIge1xcbiAgYmFja2dyb3VuZDogIzFjMWMxYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZjBmMGY7XFxufVxcblxcbi5wZXJpc2NvcGVfb2ZmIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwMTAxNTc7XFxufVxcblxcbi5wZXJpc2NvcGVfb24ge1xcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTI5Mjk7XFxufVxcblxcbi5yYWRhcl9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnJhZGFyX29uIHtcXG4gIGJhY2tncm91bmQ6ICM2YzZjNmM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0NjQ2O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3Mvc2hpcHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL2FuaW1hdG9yLmNzcyc7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZkaXNwbGF5PXN3YXAnKTtcXG5cXG4uc2hpcF90ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG59XFxuXFxuLnNoaXBfaHVsbF9vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2hpcF9odWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTU1NTU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0MjQyO1xcbn1cXG5cXG4uc2hpcF9saWdodCB7XFxuICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLmxpZ2h0X2dyYXkge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XFxufVxcblxcbi5kYXJrX2dyYXkge1xcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTI5Mjk7XFxufVxcblxcbi5zdWIge1xcbiAgYmFja2dyb3VuZDogIzFjMWMxYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZjBmMGY7XFxufVxcblxcbi5wZXJpc2NvcGVfb2ZmIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwMTAxNTc7XFxufVxcblxcbi5wZXJpc2NvcGVfb24ge1xcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTI5Mjk7XFxufVxcblxcbi5yYWRhcl9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnJhZGFyX29uIHtcXG4gIGJhY2tncm91bmQ6ICM2YzZjNmM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0NjQ2O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0b3IuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXdhdGVyMTogIzAxMDE1NztcXG4gIC0td2F0ZXIyOiAjMDYzNzQ0O1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzhjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkMGQ2MTtcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyYjE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTcxNzc1O1xcbn1cXG5cXG4uZ3JlZW4xIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMik7XFxuICBvcGFjaXR5OiA2MCU7XFxufVxcblxcbi5ibHVlMSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbn1cXG5cXG4uYmx1ZTIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDk2JTtcXG59XFxuXFxuLmJsdWUzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA5MiU7XFxufVxcblxcbi5ibHVlNCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODglO1xcbn1cXG5cXG4uYmx1ZTUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDg0JTtcXG59XFxuXFxuLmJsdWU2IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblxcbi5ibHVlNyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNzYlO1xcbn1cXG4uYmx1ZTgge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDcyJTtcXG59XFxuXFxuLmJsdWU5IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA2OCU7XFxufVxcblxcbi5ibHVlMTAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDY0JTtcXG59XFxuXFxuLmJsdWUxMCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3Mvd2F0ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL2FuaW1hdG9yLmNzcyc7XFxuXFxuOnJvb3Qge1xcbiAgLS13YXRlcjE6ICMwMTAxNTc7XFxuICAtLXdhdGVyMjogIzA2Mzc0NDtcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2Rhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTM4YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDBkNjE7XFxufVxcblxcbi5zdXJyb3VuZGluZ193YXRlcl9saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMmIxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTc3NTtcXG59XFxuXFxuLmdyZWVuMSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjIpO1xcbiAgb3BhY2l0eTogNjAlO1xcbn1cXG5cXG4uYmx1ZTEge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG59XFxuXFxuLmJsdWUyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA5NiU7XFxufVxcblxcbi5ibHVlMyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogOTIlO1xcbn1cXG5cXG4uYmx1ZTQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDg4JTtcXG59XFxuXFxuLmJsdWU1IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4NCU7XFxufVxcblxcbi5ibHVlNiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG4uYmx1ZTcge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDc2JTtcXG59XFxuLmJsdWU4IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA3MiU7XFxufVxcblxcbi5ibHVlOSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNjglO1xcbn1cXG5cXG4uYmx1ZTEwIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA2NCU7XFxufVxcblxcbi5ibHVlMTAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogLnBsYWNlX3NoaXBzX2JhY2tncm91bmRfdGlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjODRmZjE3O1xcbn0gKi9cXG5cXG4jcGxhY2Vfc2hpcHNfbWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1MCwgMWZyKTtcXG4gIHdpZHRoOiA3MGVtO1xcbiAgaGVpZ2h0OiA1MGVtO1xcbn1cXG5cXG4jcGxhY2Vfc2hpcHNfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTVlbTtcXG4gIGJvdHRvbTogNWVtO1xcbiAgaGVpZ2h0OiA0MGVtO1xcbiAgd2lkdGg6IDQwZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWM5NzFiO1xcbn1cXG5cXG4ucGxhY2Vfc2hpcF90aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxufVxcblxcbi8qIC5wbGFjZV9zaGlwX3RpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59ICovXFxuXFxuLnBsYWNlX3NoaXBfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kOiAjODRmZjE3O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztHQUVHOztBQUVIO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAucGxhY2Vfc2hpcHNfYmFja2dyb3VuZF90aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufSAqL1xcblxcbiNwbGFjZV9zaGlwc19tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLCAxZnIpO1xcbiAgd2lkdGg6IDcwZW07XFxuICBoZWlnaHQ6IDUwZW07XFxufVxcblxcbiNwbGFjZV9zaGlwc19jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNWVtO1xcbiAgYm90dG9tOiA1ZW07XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNDBlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxufVxcblxcbi5wbGFjZV9zaGlwX3RpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG59XFxuXFxuLyogLnBsYWNlX3NoaXBfdGlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjODRmZjE3O1xcbn0gKi9cXG5cXG4ucGxhY2Vfc2hpcF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9pbmRleC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2Nzcy9pbmRleC5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgZ2FtZWxvb3AgZnJvbSAnLi9jb21wb25lbnRzL2dhbWUvR0FNRV9MT09QLmpzJztcbmltcG9ydCBob21lcGFnZSBmcm9tICcuL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaG9tZXBhZ2UuanMnO1xuXG5jb25zdCBHQU1FID0gZ2FtZWxvb3AoKTtcbmhvbWVwYWdlKCk7XG4iXSwibmFtZXMiOlsiR2FtZWJvYXJkIiwiUGxheWVyIiwiZ2FtZWxvb3AiLCJQTEFZRVIxIiwiUExBWUVSMiIsIlBMQVlFUjFfR0FNRUJPQVJEIiwiUExBWUVSMl9HQU1FQk9BUkQiLCJtYXAiLCJib2FyZCIsInBsYWNlX3NoaXAiLCJTaGlwIiwiY2FycmllciIsInBvc2l0aW9uIiwic2hpcCIsImJhdHRsZXNoaXAiLCJkZXN0cm95ZXIiLCJzdWIiLCJwYXRyb2xCb2F0IiwiaW5wdXRfY29vcmRpbmF0ZXMiLCJzaGlwcyIsImlucHV0X2Nvb3JkaW5hdGUiLCJtaXNzIiwiV0FTX0hJVCIsImluY2x1ZGVzIiwiaGl0cyIsIkhJVF9JTkRFWCIsImluZGV4T2YiLCJoaXQiLCJtaXNzZXMiLCJpc19hbGxfc3VuayIsImFsbF9zdW5rX2NhbGwiLCJpc19zdW5rIiwic29ydCIsInBsYXllciIsIkxFVFRFUlMiLCJsZXR0ZXIiLCJpIiwiRXJyb3IiLCJDT09SRElOQVRFIiwicmVtYWluaW5nX21vdmVzIiwibW92ZXMiLCJyZWNlaXZlX2F0dGFjayIsImNvb3JkaW5hdGUiLCJGSUxURVJFRF9NT1ZFUyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIlJFTUFJTklOR19NT1ZFU19DT1BZIiwiUkVNQUlOSU5HIiwiZmlsdGVyIiwicmVtYWluaW5nX21vdmUiLCJBcnJheSIsImZpbGwiLCJwb3NpdGlvbl9oaXQiLCJldmVyeSIsImhpdHNfYXJyYXkiLCJISVRTIiwiQU5JTUFUSU9OUyIsIlBFUklTQ09QRV9TUElOTkVSIiwiTEVGVF9USUxFIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJJR0hUX1RJTEUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ2YWx1ZSIsIlJBREFSX1NQSU5ORVIxIiwiUkFEQVJfU1BJTk5FUjIiLCJTVUJfQU5JTUFUSU9OIiwic2V0SW50ZXJ2YWwiLCJCT0FUMSIsIkJPQVQyIiwiSVRFUkFUT1IiLCJCQVRUTEVTSElQIiwiQiIsIkEiLCJUMSIsIlQyIiwiTCIsIkUiLCJTIiwiSCIsIkkiLCJQIiwiZXpfbG9hZGVyIiwiRVpfVElMRV9DT0xPUklaRVIiLCJjb2xvcl9iYXR0bGVzaGlwX3RpbGVzIiwiQ0FSUklFUiIsIkRFU1RST1lFUiIsIlNVQk1BUklORSIsImNvbG9yX3NoaXBfdGlsZXMiLCJibGFja19vdXRsaW5lIiwiaHVsbCIsImRhcmtfZ3JheSIsImxpZ2h0X2dyYXkiLCJzaGlwX2xpZ2h0Iiwic3Vycm91bmRpbmdfd2F0ZXJfZGFyayIsInN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0IiwiQyIsIlYiLCJOIiwiU0lYIiwiTklORSIsIlUiLCJOMiIsIlYyIiwiWSIsIkFMTCIsInRpbGUiLCJpbm5lclRleHQiLCJzdWJtYXJpbmUiLCJsZWZ0X3BlcmlzY29wZSIsInJpZ2h0X3BlcmlzY29wZSIsIlNUQVJUIiwiY29sb3Jfc3RhcnRfdGlsZXMiLCJhbGwiLCJ0aWxlX2lkIiwiVElMRSIsImNvbG9yX3dhdGVyX3RpbGVzIiwiQ0xBU1NFUyIsIldBVEVSX1RJTEVTIiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJSQU5ET01fTlVNQkVSIiwibWluIiwibWF4IiwidGFyZ2V0X2FycmF5IiwicHVzaCIsImlucHV0X2FycmF5IiwiaW5wdXRfY2xhc3MiLCJwbGFjZV9zaGlwcyIsImxpc3RlbmVyc19oYW5kbGVycyIsIlNUQVJUX0JVVFRPTiIsIlNUQVJUX0JVVFRPTl9FTlRFUl9IQU5ETEVSIiwiU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkRfVElMRVMiLCJTVEFSVF9CVVRUT05fVEVYVF9USUxFUyIsIlNUQVJUX0JVVFRPTl9MRUFWRV9IQU5ETEVSIiwiU1RBUlRfQlVUVE9OX0NMSUNLX0hBTkRMRVIiLCJpbnRlcnZhbCIsIklOVEVSVkFMIiwiY2xlYXJJbnRlcnZhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXJfdGlsZXMiLCJNQUlOIiwiY3JlYXRlRWxlbWVudCIsIkhFQURJTkciLCJpZCIsImFwcGVuZCIsImJvZHkiLCJjYXJyaWVyX2V6X2xvYWRlciIsIk9VVExJTkUiLCJIVUxMIiwiREFSS19HUkFZIiwiTElHSFRfR1JBWSIsIlNVUlJPVU5ESU5HX1dBVEVSX0RBUksiLCJkZXN0cm95ZXJfZXpfbG9hZGVyIiwic3VibWFyaW5lX2V6X2xvYWRlciIsInMiLCJ0MSIsImEiLCJyIiwidDIiLCJSIiwibnVtYmVyIiwiaG9tZXBhZ2UiLCJDT09SRElOQVRFUyIsIk5VTUJFUlMiLCJsb2dpY19saXN0ZW5lcnMiLCJjdXJyZW50Iiwib3JpZW50YXRpb24iLCJTSElQUyIsIkxFTkdUSCIsIk1PVVNFX0VOVEVSX0hBTkRMRVIiLCJldmVudCIsIklEIiwidGFyZ2V0IiwiTU9VU0VfTEVBVkVfSEFORExFUiIsIkhPVkVSRURfVElMRVMiLCJUSUxFUyIsIlBMQUNFX1NISVBTX0NPTlRBSU5FUiIsIkdBTUUiXSwic291cmNlUm9vdCI6IiJ9