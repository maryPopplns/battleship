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

/***/ "./src/components/ui/place_ships/helpers/place_ship_logic.js":
/*!*******************************************************************!*\
  !*** ./src/components/ui/place_ships/helpers/place_ship_logic.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ place_ship_logic)
/* harmony export */ });
function place_ship_logic() {
  console.log('place ship logic');
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
/* harmony import */ var _helpers_place_ship_logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/place_ship_logic.js */ "./src/components/ui/place_ships/helpers/place_ship_logic.js");
/* harmony import */ var _helpers_render_tiles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/render_tiles.js */ "./src/components/ui/place_ships/helpers/render_tiles.js");


function place_ships() {
  (0,_helpers_render_tiles_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_helpers_place_ship_logic_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
___CSS_LOADER_EXPORT___.push([module.id, "/* .place_ships_background_tile:hover {\n  background: #84ff17;\n} */\n\n#place_ships_main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  width: 70em;\n  height: 50em;\n}\n\n#place_ships_container {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  position: absolute;\n  left: 15em;\n  bottom: 5em;\n  height: 40em;\n  width: 40em;\n  border: 1px solid #ac971b;\n}\n\n.place_ship_tile {\n  border: 1px solid #ac971b;\n}\n\n.place_ship_tile:hover {\n  background: #84ff17;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/place_ships/css/index.css"],"names":[],"mappings":"AAAA;;GAEG;;AAEH;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":["/* .place_ships_background_tile:hover {\n  background: #84ff17;\n} */\n\n#place_ships_main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  width: 70em;\n  height: 50em;\n}\n\n#place_ships_container {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  position: absolute;\n  left: 15em;\n  bottom: 5em;\n  height: 40em;\n  width: 40em;\n  border: 1px solid #ac971b;\n}\n\n.place_ship_tile {\n  border: 1px solid #ac971b;\n}\n\n.place_ship_tile:hover {\n  background: #84ff17;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDL0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBLElBQU1JLElBQUksR0FBRzNLLHlFQUFRLEVBQXJCO0FBQ0FvSywrRUFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWUvR0FNRV9MT09QLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWUvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9hbmltYXRpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2JhdHRsZXNoaXBfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvY29sb3JfYmF0dGxlc2hpcF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9jb2xvcl9zaGlwX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2NvbG9yX3N0YXJ0X3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2NvbG9yX3dhdGVyX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvbGlzdGVuZXJzX2hhbmRsZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL3JlbmRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9zaGlwX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL3N0YXJ0X3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvaGVscGVycy9jb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvaGVscGVycy9wbGFjZV9zaGlwX2xvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9oZWxwZXJzL3JlbmRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvcGxhY2Vfc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9hbmltYXRvci5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9nbG9iYWwuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3Mvc2hpcHMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3Mvd2F0ZXIuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lbG9vcCgpIHtcbiAgY29uc3QgUExBWUVSMSA9IG5ldyBQbGF5ZXIoJ2h1bWFuJyk7XG4gIGNvbnN0IFBMQVlFUjIgPSBuZXcgUGxheWVyKCdhaScpO1xuICBjb25zdCBQTEFZRVIxX0dBTUVCT0FSRCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgY29uc3QgUExBWUVSMl9HQU1FQk9BUkQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cbiAgLy90b2RvIHJlbW92ZSBib2lsZXJwbGF0ZSBzbyBzaGlwcyBjYW4gYmUgbWFudWFsbHkgcGxhY2VkXG4gIFtQTEFZRVIxX0dBTUVCT0FSRCwgUExBWUVSMl9HQU1FQk9BUkRdLm1hcCgoYm9hcmQpID0+IHtcbiAgICBib2FyZC5wbGFjZV9zaGlwKCdjYXJyaWVyJywgWydhMCcsICdhMScsICdhMicsICdhMycsICdhNCddKTtcbiAgICBib2FyZC5wbGFjZV9zaGlwKCdiYXR0bGVzaGlwJywgWydiMCcsICdiMScsICdiMicsICdiMyddKTtcbiAgICBib2FyZC5wbGFjZV9zaGlwKCdkZXN0cm95ZXInLCBbJ2MwJywgJ2MxJywgJ2MyJ10pO1xuICAgIGJvYXJkLnBsYWNlX3NoaXAoJ3N1YicsIFsnZDAnLCAnZDEnLCAnZDInXSk7XG4gICAgYm9hcmQucGxhY2Vfc2hpcCgncGF0cm9sQm9hdCcsIFsnZTAnLCAnZTEnXSk7XG4gIH0pO1xuICAvL3RvZG8gcmVtb3ZlIGJvaWxlcnBsYXRlIHNvIHNoaXBzIGNhbiBiZSBtYW51YWxseSBwbGFjZWRcblxuICByZXR1cm4geyBQTEFZRVIxLCBQTEFZRVIyIH07XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBzaGlwcyA9IHtcbiAgICBjYXJyaWVyOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCg1KSxcbiAgICB9LFxuICAgIGJhdHRsZXNoaXA6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDQpLFxuICAgIH0sXG4gICAgZGVzdHJveWVyOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCgzKSxcbiAgICB9LFxuICAgIHN1Yjoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoMyksXG4gICAgfSxcbiAgICBwYXRyb2xCb2F0OiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCgyKSxcbiAgICB9LFxuICB9O1xuICBoaXRzID0gW107XG4gIG1pc3NlcyA9IFtdO1xuXG4gIHBsYWNlX3NoaXAoc2hpcCwgaW5wdXRfY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLnNoaXBzW3NoaXBdLnBvc2l0aW9uID0gaW5wdXRfY29vcmRpbmF0ZXM7XG4gIH1cbiAgI21pc3NfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLm1pc3NlcywgaW5wdXRfY29vcmRpbmF0ZV0uc29ydCgpO1xuICB9XG4gICNoaXRfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmhpdHMsIGlucHV0X2Nvb3JkaW5hdGVdLnNvcnQoKTtcbiAgfVxuICByZWNlaXZlX2F0dGFjayhpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgbGV0IG1pc3MgPSB0cnVlO1xuICAgIGZvciAobGV0IHNoaXAgaW4gdGhpcy5zaGlwcykge1xuICAgICAgY29uc3QgV0FTX0hJVCA9IHRoaXMuc2hpcHNbc2hpcF0ucG9zaXRpb24uaW5jbHVkZXMoaW5wdXRfY29vcmRpbmF0ZSk7XG4gICAgICBpZiAoV0FTX0hJVCkge1xuICAgICAgICB0aGlzLmhpdHMgPSB0aGlzLiNoaXRfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKTtcbiAgICAgICAgY29uc3QgSElUX0lOREVYID0gdGhpcy5zaGlwc1tzaGlwXS5wb3NpdGlvbi5pbmRleE9mKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgICAgICB0aGlzLnNoaXBzW3NoaXBdLnNoaXAuaGl0KEhJVF9JTkRFWCk7XG4gICAgICAgIG1pc3MgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1pc3MpIHtcbiAgICAgIHRoaXMubWlzc2VzID0gdGhpcy4jbWlzc19yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgIH1cbiAgfVxuICBhbGxfc3VuaygpIHtcbiAgICBsZXQgaXNfYWxsX3N1bmsgPSB0cnVlO1xuICAgIGZvciAobGV0IHNoaXAgaW4gdGhpcy5zaGlwcykge1xuICAgICAgY29uc3QgYWxsX3N1bmtfY2FsbCA9IHRoaXMuc2hpcHNbc2hpcF0uc2hpcC5pc19zdW5rKCk7XG4gICAgICBpZiAoYWxsX3N1bmtfY2FsbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaXNfYWxsX3N1bmsgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc19hbGxfc3VuaztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IocGxheWVyKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gIH1cbiAgbW92ZXMgPSBbXTtcbiAgcmVtYWluaW5nX21vdmVzID0gW107XG5cbiAgI3JlbWFpbmluZ19tb3Zlc19yZWR1Y2VyKGNvb3JkaW5hdGUpIHtcbiAgICB0aGlzLnJlbWFpbmluZ19tb3ZlcyA9IFsuLi50aGlzLnJlbWFpbmluZ19tb3ZlcywgY29vcmRpbmF0ZV07XG4gIH1cbiAgI2ZpbGxfcmVtYWluaW5nX21vdmVzID0gKCgpID0+IHtcbiAgICBjb25zdCBMRVRURVJTID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnLCAnaScsICdqJ107XG4gICAgTEVUVEVSUy5tYXAoKGxldHRlcikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIHRoaXMuI3JlbWFpbmluZ19tb3Zlc19yZWR1Y2VyKGAke2xldHRlcn0ke2l9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pKCk7XG4gICNhaV9tb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ19tb3Zlc1tcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucmVtYWluaW5nX21vdmVzLmxlbmd0aClcbiAgICBdO1xuICB9XG4gICNmaWx0ZXJfcmVtYWluaW5nX21vdmVzKGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBSRU1BSU5JTkdfTU9WRVNfQ09QWSA9IFsuLi50aGlzLnJlbWFpbmluZ19tb3Zlc107XG4gICAgY29uc3QgUkVNQUlOSU5HID0gUkVNQUlOSU5HX01PVkVTX0NPUFkuZmlsdGVyKChyZW1haW5pbmdfbW92ZSkgPT4ge1xuICAgICAgcmV0dXJuIHJlbWFpbmluZ19tb3ZlICE9PSBjb29yZGluYXRlO1xuICAgIH0pO1xuICAgIHJldHVybiBSRU1BSU5JTkc7XG4gIH1cbiAgI2F0dGFja19yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMubW92ZXMsIGlucHV0X2Nvb3JkaW5hdGVdO1xuICB9XG4gIGFpX2F0dGFjayhib2FyZCkge1xuICAgIGlmICh0aGlzLnBsYXllciAhPT0gJ2FpJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGF5ZXIgbmVlZHMgdG8gYmUgQUknKTtcbiAgICB9XG4gICAgY29uc3QgQ09PUkRJTkFURSA9IHRoaXMuI2FpX21vdmUoKTtcbiAgICB0aGlzLnJlbWFpbmluZ19tb3ZlcyA9IHRoaXMuI2ZpbHRlcl9yZW1haW5pbmdfbW92ZXMoQ09PUkRJTkFURSk7XG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMuI2F0dGFja19yZWR1Y2VyKENPT1JESU5BVEUpO1xuICAgIGJvYXJkLnJlY2VpdmVfYXR0YWNrKENPT1JESU5BVEUpO1xuICAgIHJldHVybiBDT09SRElOQVRFO1xuICB9XG4gIGh1bWFuX2F0dGFjayhib2FyZCwgY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLnBsYXllciAhPT0gJ2h1bWFuJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGF5ZXIgbmVlZHMgdG8gYmUgYSBodW1hbicpO1xuICAgIH1cbiAgICBjb25zdCBGSUxURVJFRF9NT1ZFUyA9IHRoaXMuI2ZpbHRlcl9yZW1haW5pbmdfbW92ZXMoY29vcmRpbmF0ZSk7XG4gICAgdGhpcy5yZW1haW5pbmdfbW92ZXMgPSBGSUxURVJFRF9NT1ZFUztcbiAgICB0aGlzLm1vdmVzID0gdGhpcy4jYXR0YWNrX3JlZHVjZXIoY29vcmRpbmF0ZSk7XG4gICAgYm9hcmQucmVjZWl2ZV9hdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmhpdHMgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKGZhbHNlKTtcbiAgfVxuXG4gICNoaXRfcmVkdWNlcihoaXRzX2FycmF5LCBwb3NpdGlvbl9oaXQpIHtcbiAgICBjb25zdCBISVRTID0gWy4uLmhpdHNfYXJyYXldO1xuICAgIEhJVFNbcG9zaXRpb25faGl0XSA9IHRydWU7XG4gICAgcmV0dXJuIEhJVFM7XG4gIH1cbiAgaGl0KHBvc2l0aW9uX2hpdCkge1xuICAgIHRoaXMuaGl0cyA9IHRoaXMuI2hpdF9yZWR1Y2VyKHRoaXMuaGl0cywgcG9zaXRpb25faGl0KTtcbiAgfVxuICBpc19zdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhpdHMuZXZlcnkoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gdHJ1ZSk7XG4gIH1cbn1cbiIsImNvbnN0IEFOSU1BVElPTlMgPSAoKCkgPT4ge1xuICBjb25zdCBQRVJJU0NPUEVfU1BJTk5FUiA9ICgpID0+IHtcbiAgICBjb25zdCBMRUZUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3NTkpO1xuICAgIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3NjEpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb2ZmJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb24nKTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgaWYgKExFRlRfVElMRS5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ29uJykpIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3BlcmlzY29wZV9vbicpO1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3BlcmlzY29wZV9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdwZXJpc2NvcGVfb2ZmJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29mZicpO1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3BlcmlzY29wZV9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncGVyaXNjb3BlX29uJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFJBREFSX1NQSU5ORVIxID0gKCkgPT4ge1xuICAgIGNvbnN0IExFRlRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDcxNCk7XG4gICAgY29uc3QgUklHSFRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDcxNik7XG4gICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIGlmIChMRUZUX1RJTEUuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdvbicpKSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vbicpO1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vZmYnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgUkFEQVJfU1BJTk5FUjIgPSAoKSA9PiB7XG4gICAgY29uc3QgTEVGVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTA5Nyk7XG4gICAgY29uc3QgUklHSFRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDEwOTkpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBpZiAoTEVGVF9USUxFLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnb24nKSkge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb2ZmJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFNVQl9BTklNQVRJT04gPSBzZXRJbnRlcnZhbChQRVJJU0NPUEVfU1BJTk5FUiwgMTAwMCk7XG4gIGNvbnN0IEJPQVQxID0gc2V0SW50ZXJ2YWwoUkFEQVJfU1BJTk5FUjEsIDEwMDApO1xuICBjb25zdCBCT0FUMiA9IHNldEludGVydmFsKFJBREFSX1NQSU5ORVIyLCAxNTAwKTtcblxuICByZXR1cm4geyBTVUJfQU5JTUFUSU9OLCBCT0FUMSwgQk9BVDIgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IEFOSU1BVElPTlMgfTtcbiIsImltcG9ydCB7IElURVJBVE9SIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY29uc3QgQkFUVExFU0hJUCA9IHtcbiAgQjogWzE1MCwgMTU0LCAyMjAsIDIyNCwgMzYwLCAzNjQsIDQzMCwgNDM2LCA0MzRdLFxuICBBOiBbMTU2LCAxNTksIDIyNiwgMjI5LCAzNjYsIDM2OSwgNDM2LCA0MzksIDUwNiwgNTA5XSxcbiAgVDE6IFsxNjIsIDE2MywgMjMyLCAyMzMsIDMwMiwgMzAzLCAzNzIsIDM3MywgNDQyLCA0NDMsIDUxMiwgNTEzXSxcbiAgVDI6IFsxNjcsIDE2OCwgMjM3LCAyMzgsIDMwNywgMzA4LCAzNzcsIDM3OCwgNDQ3LCA0NDgsIDUxNywgNTE4XSxcbiAgTDogWzEwMSwgMTcxLCAyNDEsIDMxMSwgMzgxLCA0NTFdLFxuICBFOiBbMTc2LCAyNDYsIDM4NiwgNDU2XSxcbiAgUzogWzE4MSwgMjUxLCAzOTQsIDQ2NF0sXG4gIEg6IFsxMTYsIDExOSwgMTg2LCAxODksIDI1NiwgMjU5LCAzOTYsIDM5OSwgNDY2LCA0NjksIDUzNiwgNTM5XSxcbiAgSTogWzE5MiwgMTkzLCAyNjIsIDI2MywgMzMyLCAzMzMsIDQwMiwgNDAzLCA0NzIsIDQ3M10sXG4gIFA6IFsxOTYsIDE5OSwgMjY2LCAyNjksIDQwNiwgNDc2LCA1NDZdLFxufTtcblxuKGZ1bmN0aW9uIGV6X2xvYWRlcigpIHtcbiAgY29uc3QgQiA9IEJBVFRMRVNISVAuQjtcbiAgSVRFUkFUT1IoODAsIDg0LCBCKTtcbiAgSVRFUkFUT1IoMjkwLCAyOTQsIEIpO1xuICBJVEVSQVRPUig1MDAsIDUwNCwgQik7XG5cbiAgY29uc3QgQSA9IEJBVFRMRVNISVAuQTtcbiAgSVRFUkFUT1IoODYsIDg5LCBBKTtcbiAgSVRFUkFUT1IoMjk2LCAyOTksIEEpO1xuXG4gIGNvbnN0IFQxID0gQkFUVExFU0hJUC5UMTtcbiAgSVRFUkFUT1IoOTEsIDk0LCBUMSk7XG5cbiAgY29uc3QgVDIgPSBCQVRUTEVTSElQLlQyO1xuICBJVEVSQVRPUig5NiwgOTksIFQyKTtcblxuICBjb25zdCBMID0gQkFUVExFU0hJUC5MO1xuICBJVEVSQVRPUig1MjEsIDUyNCwgTCk7XG5cbiAgY29uc3QgRSA9IEJBVFRMRVNISVAuRTtcbiAgSVRFUkFUT1IoMTA2LCAxMDksIEUpO1xuICBJVEVSQVRPUigzMTYsIDMxOCwgRSk7XG4gIElURVJBVE9SKDUyNiwgNTI5LCBFKTtcblxuICBjb25zdCBTID0gQkFUVExFU0hJUC5TO1xuICBJVEVSQVRPUigxMTEsIDExNCwgUyk7XG4gIElURVJBVE9SKDMyMSwgMzI0LCBTKTtcbiAgSVRFUkFUT1IoNTMxLCA1MzQsIFMpO1xuXG4gIGNvbnN0IEggPSBCQVRUTEVTSElQLkg7XG4gIElURVJBVE9SKDMyNiwgMzI5LCBIKTtcblxuICBjb25zdCBJID0gQkFUVExFU0hJUC5JO1xuICBJVEVSQVRPUigxMjEsIDEyNCwgSSk7XG4gIElURVJBVE9SKDU0MSwgNTQ0LCBJKTtcblxuICBjb25zdCBQID0gQkFUVExFU0hJUC5QO1xuICBJVEVSQVRPUigxMjYsIDEyOSwgUCk7XG4gIElURVJBVE9SKDMzNiwgMzM5LCBQKTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJBVFRMRVNISVA7XG4iLCJpbXBvcnQgeyBFWl9USUxFX0NPTE9SSVpFUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQgQkFUVExFU0hJUCBmcm9tICcuL2JhdHRsZXNoaXBfdGlsZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcl9iYXR0bGVzaGlwX3RpbGVzKCkge1xuICBmb3IgKGxldCBsZXR0ZXIgaW4gQkFUVExFU0hJUCkge1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKEJBVFRMRVNISVBbbGV0dGVyXSwgJ3RpdGxlJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENBUlJJRVIsIERFU1RST1lFUiwgU1VCTUFSSU5FIH0gZnJvbSAnLi9zaGlwX3RpbGVzLmpzJztcbmltcG9ydCB7IEVaX1RJTEVfQ09MT1JJWkVSIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3Jfc2hpcF90aWxlcygpIHtcbiAgKGZ1bmN0aW9uIGNhcnJpZXIoKSB7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5ibGFja19vdXRsaW5lLCAnc2hpcF9odWxsX291dGxpbmUnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLmh1bGwsICdzaGlwX2h1bGwnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLmRhcmtfZ3JheSwgJ2RhcmtfZ3JheScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIubGlnaHRfZ3JheSwgJ2xpZ2h0X2dyYXknKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLnNoaXBfbGlnaHQsICdzaGlwX2xpZ2h0Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5zdXJyb3VuZGluZ193YXRlcl9kYXJrLCAnc3Vycm91bmRpbmdfd2F0ZXJfZGFyaycpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFxuICAgICAgQ0FSUklFUi5zdXJyb3VuZGluZ193YXRlcl9saWdodCxcbiAgICAgICdzdXJyb3VuZGluZ193YXRlcl9saWdodCdcbiAgICApO1xuXG4gICAgY29uc3QgQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE3OTUpO1xuICAgIGNvbnN0IFYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNzk2KTtcbiAgICBjb25zdCBOID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTc5Nyk7XG4gICAgY29uc3QgU0lYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTc5OSk7XG4gICAgY29uc3QgTklORSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE4MDApO1xuICAgIGNvbnN0IFUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgyMzQ5KTtcbiAgICBjb25zdCBTID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM1MCk7XG4gICAgY29uc3QgTjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgyMzUyKTtcbiAgICBjb25zdCBBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM1Myk7XG4gICAgY29uc3QgVjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgyMzU0KTtcbiAgICBjb25zdCBZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM1NSk7XG4gICAgY29uc3QgQUxMID0gW0MsIFYsIE4sIFNJWCwgTklORSwgVSwgUywgTjIsIEEsIFYyLCBZXTtcbiAgICBBTEwubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3NoaXBfdGV4dCcpO1xuICAgIH0pO1xuICAgIEMuaW5uZXJUZXh0ID0gJ0MnO1xuICAgIFYuaW5uZXJUZXh0ID0gJ1YnO1xuICAgIE4uaW5uZXJUZXh0ID0gJ04nO1xuICAgIFNJWC5pbm5lclRleHQgPSAnNic7XG4gICAgTklORS5pbm5lclRleHQgPSAnOSc7XG4gICAgVS5pbm5lclRleHQgPSAnVSc7XG4gICAgUy5pbm5lclRleHQgPSAnUyc7XG4gICAgTjIuaW5uZXJUZXh0ID0gJ04nO1xuICAgIEEuaW5uZXJUZXh0ID0gJ0EnO1xuICAgIFYyLmlubmVyVGV4dCA9ICdWJztcbiAgICBZLmlubmVyVGV4dCA9ICdZJztcbiAgfSkoKTtcblxuICAoZnVuY3Rpb24gZGVzdHJveWVyKCkge1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5ibGFja19vdXRsaW5lLCAnc2hpcF9odWxsX291dGxpbmUnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuaHVsbCwgJ3NoaXBfaHVsbCcpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5saWdodF9ncmF5LCAnbGlnaHRfZ3JheScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5kYXJrX2dyYXksICdkYXJrX2dyYXknKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuc2hpcF9saWdodCwgJ3NoaXBfbGlnaHQnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihcbiAgICAgIERFU1RST1lFUi5zdXJyb3VuZGluZ193YXRlcl9kYXJrLFxuICAgICAgJ3N1cnJvdW5kaW5nX3dhdGVyX2RhcmsnXG4gICAgKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihcbiAgICAgIERFU1RST1lFUi5zdXJyb3VuZGluZ193YXRlcl9saWdodCxcbiAgICAgICdzdXJyb3VuZGluZ193YXRlcl9saWdodCdcbiAgICApO1xuXG4gICAgY29uc3QgVSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTApO1xuICAgIGNvbnN0IFMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTUxKTtcbiAgICBjb25zdCBOID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1Myk7XG4gICAgY29uc3QgQSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTQpO1xuICAgIGNvbnN0IFYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTU1KTtcbiAgICBjb25zdCBZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1Nik7XG4gICAgY29uc3QgQUxMID0gW1UsIFMsIE4sIEEsIFYsIFldO1xuICAgIEFMTC5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc2hpcF90ZXh0Jyk7XG4gICAgfSk7XG4gICAgVS5pbm5lclRleHQgPSAnVSc7XG4gICAgUy5pbm5lclRleHQgPSAnUyc7XG4gICAgTi5pbm5lclRleHQgPSAnTic7XG4gICAgQS5pbm5lclRleHQgPSAnQSc7XG4gICAgVi5pbm5lclRleHQgPSAnVic7XG4gICAgWS5pbm5lclRleHQgPSAnWSc7XG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uIHN1Ym1hcmluZSgpIHtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihTVUJNQVJJTkUuaHVsbCwgJ3N1YicpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFNVQk1BUklORS5kYXJrX2dyYXksICdkYXJrX2dyYXknKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihTVUJNQVJJTkUubGVmdF9wZXJpc2NvcGUsICdwZXJpc2NvcGVfb24nKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihTVUJNQVJJTkUucmlnaHRfcGVyaXNjb3BlLCAncGVyaXNjb3BlX29mZicpO1xuICB9KSgpO1xufVxuIiwiaW1wb3J0IFNUQVJUIGZyb20gJy4vc3RhcnRfdGlsZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcl9zdGFydF90aWxlcygpIHtcbiAgY29uc3QgQUxMID0gU1RBUlQuYWxsO1xuICBBTEwubWFwKCh0aWxlX2lkKSA9PiB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzdGFydF8ke3RpbGVfaWR9YCk7XG4gICAgVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydF9iYWNrZ3JvdW5kJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKCdzdGFydF90ZXh0Jyk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3Jfd2F0ZXJfdGlsZXMoKSB7XG4gIGNvbnN0IENMQVNTRVMgPSBbXG4gICAgJ2JsdWUxJyxcbiAgICAnYmx1ZTInLFxuICAgICdibHVlMycsXG4gICAgJ2JsdWU0JyxcbiAgICAnYmx1ZTUnLFxuICAgICdibHVlNicsXG4gICAgJ2JsdWU3JyxcbiAgICAnYmx1ZTgnLFxuICAgICdibHVlOScsXG4gICAgJ2JsdWUxMCcsXG4gICAgJ2dyZWVuMScsXG4gIF07XG4gIGNvbnN0IFdBVEVSX1RJTEVTID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3YXRlcicpKTtcbiAgV0FURVJfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgY29uc3QgUkFORE9NX05VTUJFUiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKTtcbiAgICB0aWxlLmNsYXNzTGlzdC5hZGQoQ0xBU1NFU1tSQU5ET01fTlVNQkVSXSk7XG4gIH0pO1xufVxuIiwiY29uc3QgSVRFUkFUT1IgPSAobWluLCBtYXgsIHRhcmdldF9hcnJheSkgPT4ge1xuICBmb3IgKGxldCBpID0gbWluOyBpIDwgbWF4ICsgMTsgaSsrKSB7XG4gICAgdGFyZ2V0X2FycmF5LnB1c2goaSk7XG4gIH1cbn07XG5cbmNvbnN0IEVaX1RJTEVfQ09MT1JJWkVSID0gKGlucHV0X2FycmF5LCBpbnB1dF9jbGFzcykgPT4ge1xuICBpbnB1dF9hcnJheS5tYXAoKHRpbGVfaWQpID0+IHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGlsZV9pZCk7XG4gICAgVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZChpbnB1dF9jbGFzcyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgSVRFUkFUT1IsIEVaX1RJTEVfQ09MT1JJWkVSIH07XG4iLCJpbXBvcnQgeyBBTklNQVRJT05TIH0gZnJvbSAnLi9hbmltYXRpb25zLmpzJztcbmltcG9ydCBwbGFjZV9zaGlwcyBmcm9tICcuLi8uLi9wbGFjZV9zaGlwcy9wbGFjZV9zaGlwcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RlbmVyc19oYW5kbGVycygpIHtcbiAgY29uc3QgU1RBUlRfQlVUVE9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0X2J1dHRvbicpO1xuXG4gIGNvbnN0IFNUQVJUX0JVVFRPTl9FTlRFUl9IQU5ETEVSID0gKCkgPT4ge1xuICAgIGNvbnN0IFNUQVJUX0JVVFRPTl9CQUNLR1JPVU5EX1RJTEVTID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0X2JhY2tncm91bmQnKVxuICAgICk7XG4gICAgU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkRfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0X2JhY2tncm91bmRfaG92ZXJlZCcpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydF9iYWNrZ3JvdW5kJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBTVEFSVF9CVVRUT05fVEVYVF9USUxFUyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydF90ZXh0JylcbiAgICApO1xuICAgIFNUQVJUX0JVVFRPTl9URVhUX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdGFydF90ZXh0X2hvdmVyZWQnKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfdGV4dCcpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IFNUQVJUX0JVVFRPTl9MRUFWRV9IQU5ETEVSID0gKCkgPT4ge1xuICAgIGNvbnN0IFNUQVJUX0JVVFRPTl9CQUNLR1JPVU5EX1RJTEVTID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0X2JhY2tncm91bmRfaG92ZXJlZCcpXG4gICAgKTtcbiAgICBTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfYmFja2dyb3VuZCcpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQnKTtcbiAgICB9KTtcbiAgICBjb25zdCBTVEFSVF9CVVRUT05fVEVYVF9USUxFUyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydF90ZXh0X2hvdmVyZWQnKVxuICAgICk7XG4gICAgU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0X3RleHQnKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfdGV4dF9ob3ZlcmVkJyk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IFNUQVJUX0JVVFRPTl9DTElDS19IQU5ETEVSID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGludGVydmFsIGluIEFOSU1BVElPTlMpIHtcbiAgICAgIGNvbnN0IElOVEVSVkFMID0gQU5JTUFUSU9OU1tpbnRlcnZhbF07XG4gICAgICBjbGVhckludGVydmFsKElOVEVSVkFMKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhbmRpbmdfcGFnZScpLnJlbW92ZSgpO1xuICAgIHBsYWNlX3NoaXBzKCk7XG4gIH07XG5cbiAgU1RBUlRfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTVEFSVF9CVVRUT05fRU5URVJfSEFORExFUik7XG4gIFNUQVJUX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU1RBUlRfQlVUVE9OX0xFQVZFX0hBTkRMRVIpO1xuICBTVEFSVF9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBTVEFSVF9CVVRUT05fQ0xJQ0tfSEFORExFUik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJfdGlsZXMoKSB7XG4gIGNvbnN0IE1BSU4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IEhFQURJTkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgU1RBUlQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgTUFJTi5pZCA9ICdsYW5kaW5nX3BhZ2UnO1xuICBIRUFESU5HLmlkID0gJ2JzX2hlYWRpbmcnO1xuICBTVEFSVC5pZCA9ICdzdGFydF9idXR0b24nO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI4MDA7IGkrKykge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBUSUxFLmlkID0gaTtcbiAgICBUSUxFLmNsYXNzTGlzdCA9ICdob21lcGVhZ2VfdGlsZSB3YXRlcic7XG4gICAgSEVBRElORy5hcHBlbmQoVElMRSk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3MDA7IGkrKykge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBUSUxFLmlkID0gYHN0YXJ0XyR7aX1gO1xuICAgIFRJTEUuY2xhc3NMaXN0ID0gJ3RpbGUgc3RhcnQgc3RhcnRfYmFja2dyb3VuZCc7XG4gICAgU1RBUlQuYXBwZW5kKFRJTEUpO1xuICB9XG4gIE1BSU4uYXBwZW5kKEhFQURJTkcpO1xuICBNQUlOLmFwcGVuZChTVEFSVCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKE1BSU4pO1xufVxuIiwiaW1wb3J0IHsgSVRFUkFUT1IgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jb25zdCBDQVJSSUVSID0ge1xuICBibGFja19vdXRsaW5lOiBbXG4gICAgMTQ0NiwgMTQ1MCwgMTUxNiwgMTUyMCwgMTU4NiwgMTU5MCwgMTcyMywgMTczMywgMTgwMywgMTg1OSwgMTg3MywgMTg3NyxcbiAgICAxOTI4LCAxOTQzLCAxOTQ2LCAxOTQ4LCAxOTU1LCAxOTU2LCAxOTgyLCAxOTgzLCAxOTg3LCAxOTg4LCAxOTkyLCAxOTkzLFxuICAgIDE5OTgsIDIwMTMsIDIwMjYsIDIwNTIsIDIwNTQsIDIwNTUsIDIwNTcsIDIwNTksIDIwNjAsIDIwNjIsIDIwNjQsIDIwNjUsXG4gICAgMjA2OCwgMjA4MywgMjA4NSwgMjA4OSwgMjA5MSwgMjA5NCwgMjA5NSwgMjEyMywgMjEyNSwgMjEyOCwgMjEzMCwgMjEzMyxcbiAgICAyMTM1LCAyMTM4LCAyMTUzLCAyMTU1LCAyMTU5LCAyMTYxLCAyMTY1LCAyMjYwLCAyMjYxLCAyMjYyLCAyMzA5LCAyMzMyLFxuICAgIDIzMzMsIDIzMzQsIDIzNzksIDI0MDQsIDI0NDgsIDI0NzUsIDI1MTcsIDI1NDYsIDI1ODYsIDI2MTcsIDI2NTYsIDI2ODcsXG4gICAgMjcyNixcbiAgXSxcbiAgaHVsbDogW1xuICAgIDE1MTksIDE5MzksIDE5NDAsIDIwNzksIDIwODAsIDI2ODgsIDI2ODksIDI2OTIsIDI2OTMsIDI2OTYsIDI2OTcsIDI3MDAsXG4gICAgMjcwMSwgMjcwNCwgMjcwNSwgMjcwOCwgMjcwOSwgMjcxMiwgMjcxMywgMjcxNiwgMjcxNywgMjcyMCwgMjcyMSwgMjcyNCxcbiAgICAyNzI1LFxuICBdLFxuICBkYXJrX2dyYXk6IFtcbiAgICAxMTY4LCAxMjM4LCAxMzA4LCAxNTE3LCAxNTE4LCAxOTI5LCAxOTMwLCAxOTQxLCAxOTQyLCAxOTQ3LCAyMDI1LCAyMDUzLFxuICAgIDIwNTgsIDIwNjMsIDIwNjksIDIwNzAsIDIwODEsIDIwODIsIDIxMjQsIDIxMjksIDIxMzQsIDIwOTIsIDIwOTMsXG4gIF0sXG4gIGxpZ2h0X2dyYXk6IFsxMDk3LCAxMDk5XSxcbiAgc2hpcF9saWdodDogWzEwOThdLFxuICBzdXJyb3VuZGluZ193YXRlcl9kYXJrOiBbXG4gICAgMjU0NSwgMjYxNiwgMjY4NiwgMjY5MCwgMjY5MSwgMjY5NCwgMjY5NSwgMjY5OCwgMjY5OSwgMjcwMiwgMjcwMywgMjcwNixcbiAgICAyNzA3LCAyNzEwLCAyNzExLCAyNzE0LCAyNzE1LCAyNzE4LCAyNzE5LCAyNzIyLCAyNzIzLCAyNTg3LCAyNjU3LCAyNzI3LFxuICAgIDI0NDksIDI1MTgsIDI1MTksIDI1ODgsIDI2NTgsXG4gIF0sXG4gIHN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0OiBbXG4gICAgMjU4OSwgMjYxNSwgMjY1OSwgMjY4NCwgMjY4NSwgMjcyOCwgMjcyOSwgMjc1MywgMjc1NCwgMjc1NSwgMjc5OCwgMjc5OSxcbiAgXSxcbn07XG5cbmNvbnN0IERFU1RST1lFUiA9IHtcbiAgYmxhY2tfb3V0bGluZTogW1xuICAgIDExOTQsIDExOTgsIDEyMTEsIDEyNjUsIDEyNjksIDEyODAsIDE0NzQsIDE0OTEsIDE0OTIsIDE1NDUsIDE1NjEsIDE2MTYsXG4gICAgMTYzMSwgMTY4NywgMTcwMSxcbiAgXSxcbiAgaHVsbDogWzE2ODgsIDE2OTEsIDE2OTIsIDE2OTUsIDE2OTYsIDE2OTksIDE3MDBdLFxuICBkYXJrX2dyYXk6IFs3ODUsIDg1NSwgOTI1LCA5OTUsIDEyNjYsIDEyNzAsIDEyNzMsIDEyNzQsIDEyNzYsIDEyNzldLFxuICBsaWdodF9ncmF5OiBbNzE0LCA3MTYsIDExMzMsIDExMzcsIDEyNzIsIDEyNzUsIDEyNzddLFxuICBzaGlwX2xpZ2h0OiBbNzE1XSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfZGFyazogWzE2ODksIDE2OTAsIDE2OTMsIDE2OTQsIDE2OTcsIDE2OThdLFxuICBzdXJyb3VuZGluZ193YXRlcl9saWdodDogW1xuICAgIDE2MzIsIDE2ODUsIDE2ODYsIDE3MDIsIDE3MDMsIDE3NTQsIDE3NTUsIDE3NzMsIDE3NzQsXG4gIF0sXG59O1xuXG5jb25zdCBTVUJNQVJJTkUgPSB7XG4gIGh1bGw6IFtdLFxuICBkYXJrX2dyYXk6IFs3NjAsIDgzMF0sXG4gIGxlZnRfcGVyaXNjb3BlOiBbNzU5XSxcbiAgcmlnaHRfcGVyaXNjb3BlOiBbNzYxXSxcbn07XG5cbihmdW5jdGlvbiBjYXJyaWVyX2V6X2xvYWRlcigpIHtcbiAgY29uc3QgT1VUTElORSA9IENBUlJJRVIuYmxhY2tfb3V0bGluZTtcbiAgSVRFUkFUT1IoMTM3NiwgMTM4MCwgT1VUTElORSk7XG4gIElURVJBVE9SKDE2NTMsIDE2NjMsIE9VVExJTkUpO1xuICBJVEVSQVRPUigxNzkwLCAxNzkzLCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMjAxNSwgMjAxOSwgT1VUTElORSk7XG4gIElURVJBVE9SKDIwMjIsIDIwMjQsIE9VVExJTkUpO1xuICBJVEVSQVRPUigyMTkwLCAyMjM5LCBPVVRMSU5FKTtcblxuICBjb25zdCBIVUxMID0gQ0FSUklFUi5odWxsO1xuICBJVEVSQVRPUigxNDQ3LCAxNDQ5LCBIVUxMKTtcbiAgSVRFUkFUT1IoMTU4NywgMTU4OSwgSFVMTCk7XG4gIElURVJBVE9SKDE3MjQsIDE3MzIsIEhVTEwpO1xuICBJVEVSQVRPUigxNzk0LCAxODAyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTg2MCwgMTg3MiwgSFVMTCk7XG4gIElURVJBVE9SKDE5MzEsIDE5MzQsIEhVTEwpO1xuICBJVEVSQVRPUigxOTk5LCAyMDEyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMjA3MSwgMjA3NCwgSFVMTCk7XG4gIElURVJBVE9SKDIxMzksIDIxNTIsIEhVTEwpO1xuICBJVEVSQVRPUigyMjYzLCAyMzA4LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjMzNSwgMjM3OCwgSFVMTCk7XG4gIElURVJBVE9SKDI0MDUsIDI0NDcsIEhVTEwpO1xuICBJVEVSQVRPUigyNDc2LCAyNTE2LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjU0NywgMjU4NSwgSFVMTCk7XG4gIElURVJBVE9SKDI2MTgsIDI2NTUsIEhVTEwpO1xuXG4gIGNvbnN0IERBUktfR1JBWSA9IENBUlJJRVIuZGFya19ncmF5O1xuICBJVEVSQVRPUigxMTM0LCAxMTM2LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMDg2LCAyMDg4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMTU2LCAyMTU4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMTYyLCAyMTY0LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxOTM1LCAxOTM4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMDc1LCAyMDc4LCBEQVJLX0dSQVkpO1xuXG4gIGNvbnN0IExJR0hUX0dSQVkgPSBDQVJSSUVSLmxpZ2h0X2dyYXk7XG4gIElURVJBVE9SKDIzMzUsIDIzNzgsIExJR0hUX0dSQVkpO1xuXG4gIGNvbnN0IFNVUlJPVU5ESU5HX1dBVEVSX0RBUksgPSBDQVJSSUVSLnN1cnJvdW5kaW5nX3dhdGVyX2Rhcms7XG4gIElURVJBVE9SKDI3NTYsIDI3OTcsIFNVUlJPVU5ESU5HX1dBVEVSX0RBUkspO1xufSkoKTtcblxuKGZ1bmN0aW9uIGRlc3Ryb3llcl9lel9sb2FkZXIoKSB7XG4gIGNvbnN0IE9VVExJTkUgPSBERVNUUk9ZRVIuYmxhY2tfb3V0bGluZTtcbiAgSVRFUkFUT1IoMTQwMywgMTQyMiwgT1VUTElORSk7XG5cbiAgY29uc3QgSFVMTCA9IERFU1RST1lFUi5odWxsO1xuICBJVEVSQVRPUigxNDc1LCAxNDkwLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTYxNywgMTYzMCwgSFVMTCk7XG5cbiAgY29uc3QgTElHSFRfR1JBWSA9IERFU1RST1lFUi5saWdodF9ncmF5O1xuICBJVEVSQVRPUigxNTQ2LCAxNTYwLCBMSUdIVF9HUkFZKTtcbiAgSVRFUkFUT1IoMTA2MywgMTA2NywgTElHSFRfR1JBWSk7XG4gIElURVJBVE9SKDEyMDIsIDEyMDcsIExJR0hUX0dSQVkpO1xuICBJVEVSQVRPUigxMzQyLCAxMzQ3LCBMSUdIVF9HUkFZKTtcblxuICBjb25zdCBEQVJLX0dSQVkgPSBERVNUUk9ZRVIuZGFya19ncmF5O1xuICBJVEVSQVRPUigxMzM0LCAxMzM2LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxMzM4LCAxMzQwLCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxMzQ5LCAxMzUxLCBEQVJLX0dSQVkpO1xuXG4gIGNvbnN0IFNVUlJPVU5ESU5HX1dBVEVSX0RBUksgPSBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyaztcbiAgSVRFUkFUT1IoMTc1NiwgMTc3MiwgU1VSUk9VTkRJTkdfV0FURVJfREFSSyk7XG59KSgpO1xuXG4oZnVuY3Rpb24gc3VibWFyaW5lX2V6X2xvYWRlcigpIHtcbiAgY29uc3QgSFVMTCA9IFNVQk1BUklORS5odWxsO1xuICBJVEVSQVRPUig4OTgsIDkwMiwgSFVMTCk7XG59KSgpO1xuXG5leHBvcnQgeyBDQVJSSUVSLCBERVNUUk9ZRVIsIFNVQk1BUklORSB9O1xuIiwiaW1wb3J0IHsgSVRFUkFUT1IgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jb25zdCBTVEFSVCA9IHtcbiAgczogWzIyMSwgMjIyLCA0MzcsIDQzOF0sXG4gIHQxOiBbMjM0LCAyMzUsIDMwNCwgMzA1LCAzNzQsIDM3NSwgNDQ0LCA0NDUsIDUxNCwgNTE1LCA1ODQsIDU4NV0sXG4gIGE6IFtcbiAgICAyNDEsIDI0MiwgMjQ3LCAyNDgsIDQ1MSwgNDUyLCA0NTcsIDQ1OCwgNTIxLCA1MjIsIDUyNywgNTI4LCA1OTEsIDU5MiwgNTk3LFxuICAgIDU5OCxcbiAgXSxcbiAgcjogW1xuICAgIDI1MSwgMjUyLCAyNTcsIDI1OCwgNDYxLCA0NjIsIDQ2NywgNDY4LCA1MzEsIDUzMiwgNTM3LCA1MzgsIDYwMSwgNjAyLCA2MDcsXG4gICAgNjA4LFxuICBdLFxuICB0MjogWzI2NCwgMjY1LCAzMzQsIDMzNSwgNDA0LCA0MDUsIDQ3NCwgNDc1LCA1NDQsIDU0NSwgNjE0LCA2MTVdLFxuICBhbGw6IFtdLFxufTtcblxuKGZ1bmN0aW9uIGV6X2xvYWRlcigpIHtcbiAgY29uc3QgUyA9IFNUQVJULnM7XG4gIElURVJBVE9SKDgxLCA4OCwgUyk7XG4gIElURVJBVE9SKDE1MSwgMTU4LCBTKTtcbiAgSVRFUkFUT1IoMjkxLCAyOTgsIFMpO1xuICBJVEVSQVRPUigzNjEsIDM2OCwgUyk7XG4gIElURVJBVE9SKDUwMSwgNTA4LCBTKTtcbiAgSVRFUkFUT1IoNTcxLCA1NzgsIFMpO1xuXG4gIGNvbnN0IFQxID0gU1RBUlQudDE7XG4gIElURVJBVE9SKDkxLCA5OCwgVDEpO1xuICBJVEVSQVRPUigxNjEsIDE2OCwgVDEpO1xuXG4gIGNvbnN0IEEgPSBTVEFSVC5hO1xuICBJVEVSQVRPUigxMDEsIDEwOCwgQSk7XG4gIElURVJBVE9SKDE3MSwgMTc4LCBBKTtcbiAgSVRFUkFUT1IoMzExLCAzMTgsIEEpO1xuICBJVEVSQVRPUigzODEsIDM4OCwgQSk7XG5cbiAgY29uc3QgUiA9IFNUQVJULnI7XG4gIElURVJBVE9SKDExMSwgMTE2LCBSKTtcbiAgSVRFUkFUT1IoMTgxLCAxODYsIFIpO1xuICBJVEVSQVRPUigzMjEsIDMyNiwgUik7XG4gIElURVJBVE9SKDM5MSwgMzk2LCBSKTtcblxuICBjb25zdCBUMiA9IFNUQVJULnQyO1xuICBJVEVSQVRPUigxMjEsIDEyOCwgVDIpO1xuICBJVEVSQVRPUigxOTEsIDE5OCwgVDIpO1xuXG4gIGZvciAobGV0IGxldHRlciBpbiBTVEFSVCkge1xuICAgIGlmIChsZXR0ZXIgPT09ICdhbGwnKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgU1RBUlRbbGV0dGVyXS5tYXAoKG51bWJlcikgPT4ge1xuICAgICAgU1RBUlQuYWxsLnB1c2gobnVtYmVyKTtcbiAgICB9KTtcbiAgfVxufSkoKTtcbmV4cG9ydCBkZWZhdWx0IFNUQVJUO1xuIiwiaW1wb3J0IHJlbmRlcl90aWxlcyBmcm9tICcuL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9zdGFydF90aWxlcyBmcm9tICcuL2hlbHBlcnMvY29sb3Jfc3RhcnRfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX3NoaXBfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX3NoaXBfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX2JhdHRsZXNoaXBfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX2JhdHRsZXNoaXBfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX3dhdGVyX3RpbGVzIGZyb20gJy4vaGVscGVycy9jb2xvcl93YXRlcl90aWxlcy5qcyc7XG5pbXBvcnQgbGlzdGVuZXJzX2hhbmRsZXJzIGZyb20gJy4vaGVscGVycy9saXN0ZW5lcnNfaGFuZGxlcnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lcGFnZSgpIHtcbiAgcmVuZGVyX3RpbGVzKCk7XG4gIGNvbG9yX3N0YXJ0X3RpbGVzKCk7XG4gIGNvbG9yX3NoaXBfdGlsZXMoKTtcbiAgY29sb3JfYmF0dGxlc2hpcF90aWxlcygpO1xuICBjb2xvcl93YXRlcl90aWxlcygpO1xuICBsaXN0ZW5lcnNfaGFuZGxlcnMoKTtcbn1cbiIsImNvbnN0IENPT1JESU5BVEVTID0gW107XG5jb25zdCBMRVRURVJTID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnLCAnaScsICdqJ107XG5jb25zdCBOVU1CRVJTID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuTEVUVEVSUy5tYXAoKGxldHRlcikgPT4ge1xuICBOVU1CRVJTLm1hcCgobnVtYmVyKSA9PiB7XG4gICAgQ09PUkRJTkFURVMucHVzaChgJHtsZXR0ZXJ9JHtudW1iZXJ9YCk7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENPT1JESU5BVEVTO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxhY2Vfc2hpcF9sb2dpYygpIHtcbiAgY29uc29sZS5sb2coJ3BsYWNlIHNoaXAgbG9naWMnKTtcbn1cbiIsImltcG9ydCBDT09SRElOQVRFUyBmcm9tICcuL2Nvb3JkaW5hdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBQTEFDRV9TSElQU19DT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgQ0xBU1NFUyA9IFtcbiAgICAnYmx1ZTEnLFxuICAgICdibHVlMicsXG4gICAgJ2JsdWUzJyxcbiAgICAnYmx1ZTQnLFxuICAgICdibHVlNScsXG4gICAgJ2JsdWU2JyxcbiAgICAnYmx1ZTcnLFxuICAgICdibHVlOCcsXG4gICAgJ2JsdWU5JyxcbiAgICAnYmx1ZTEwJyxcbiAgICAnZ3JlZW4xJyxcbiAgXTtcblxuICBNQUlOLmlkID0gJ3BsYWNlX3NoaXBzX21haW4nO1xuICBQTEFDRV9TSElQU19DT05UQUlORVIuaWQgPSAncGxhY2Vfc2hpcHNfY29udGFpbmVyJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM1MDA7IGkrKykge1xuICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgncGxhY2Vfc2hpcHNfYmFja2dyb3VuZF90aWxlJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKENMQVNTRVNbUkFORE9NX05VTUJFUl0pO1xuICAgIE1BSU4uYXBwZW5kKFRJTEUpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IENPT1JESU5BVEVTW2ldO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgncGxhY2Vfc2hpcF90aWxlJyk7XG4gICAgUExBQ0VfU0hJUFNfQ09OVEFJTkVSLmFwcGVuZChUSUxFKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChNQUlOKTtcbiAgTUFJTi5hcHBlbmQoUExBQ0VfU0hJUFNfQ09OVEFJTkVSKTtcbn1cbiIsImltcG9ydCBwbGFjZV9zaGlwX2xvZ2ljIGZyb20gJy4vaGVscGVycy9wbGFjZV9zaGlwX2xvZ2ljLmpzJztcbmltcG9ydCByZW5kZXJfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL3JlbmRlcl90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYWNlX3NoaXBzKCkge1xuICByZW5kZXJfdGlsZXMoKTtcbiAgcGxhY2Vfc2hpcF9sb2dpYygpO1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLW9wYWNpdHktMDA6IDE7XFxuICAtLW9wYWNpdHktMDU6IDAuOTg7XFxuICAtLW9wYWNpdHktMTA6IDAuOTY7XFxuICAtLW9wYWNpdHktMTU6IDAuOTQ7XFxuICAtLW9wYWNpdHktMjA6IDAuOTI7XFxuICAtLW9wYWNpdHktMjU6IDAuOTtcXG4gIC0tb3BhY2l0eS0zMDogMC44ODtcXG4gIC0tb3BhY2l0eS0zNTogMC44NjtcXG4gIC0tb3BhY2l0eS00MDogMC44NDtcXG4gIC0tb3BhY2l0eS00NTogMC44MjtcXG4gIC0tb3BhY2l0eS01MDogMC44O1xcbiAgLS1vcGFjaXR5LTU1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTYwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTY1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTcwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTc1OiAwLjk7XFxuICAtLW9wYWNpdHktODA6IDAuOTI7XFxuICAtLW9wYWNpdHktODU6IDAuOTQ7XFxuICAtLW9wYWNpdHktOTA6IDAuOTY7XFxuICAtLW9wYWNpdHktOTU6IDAuOTg7XFxuICAtLW9wYWNpdHktMTAwOiAxO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTAwKTtcXG4gIH1cXG5cXG4gIDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0wNSk7XFxuICB9XFxuXFxuICAxMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwKTtcXG4gIH1cXG5cXG4gIDE1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTUpO1xcbiAgfVxcblxcbiAgMjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0yMCk7XFxuICB9XFxuXFxuICAyNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTI1KTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzApO1xcbiAgfVxcblxcbiAgMzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zNSk7XFxuICB9XFxuXFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTQwKTtcXG4gIH1cXG5cXG4gIDQ1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDUpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS01MCk7XFxuICB9XFxuXFxuICA1NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTU1KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNjApO1xcbiAgfVxcblxcbiAgNjUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02NSk7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTcwKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzUpO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS04MCk7XFxuICB9XFxuXFxuICA4NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTg1KTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktOTApO1xcbiAgfVxcblxcbiAgOTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05NSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xMDApO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvYW5pbWF0b3IuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tb3BhY2l0eS0wMDogMTtcXG4gIC0tb3BhY2l0eS0wNTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDogMC45NjtcXG4gIC0tb3BhY2l0eS0xNTogMC45NDtcXG4gIC0tb3BhY2l0eS0yMDogMC45MjtcXG4gIC0tb3BhY2l0eS0yNTogMC45O1xcbiAgLS1vcGFjaXR5LTMwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTM1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTQwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTQ1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTUwOiAwLjg7XFxuICAtLW9wYWNpdHktNTU6IDAuODI7XFxuICAtLW9wYWNpdHktNjA6IDAuODQ7XFxuICAtLW9wYWNpdHktNjU6IDAuODY7XFxuICAtLW9wYWNpdHktNzA6IDAuODg7XFxuICAtLW9wYWNpdHktNzU6IDAuOTtcXG4gIC0tb3BhY2l0eS04MDogMC45MjtcXG4gIC0tb3BhY2l0eS04NTogMC45NDtcXG4gIC0tb3BhY2l0eS05MDogMC45NjtcXG4gIC0tb3BhY2l0eS05NTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDA6IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMDApO1xcbiAgfVxcblxcbiAgNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTA1KTtcXG4gIH1cXG5cXG4gIDEwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTApO1xcbiAgfVxcblxcbiAgMTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xNSk7XFxuICB9XFxuXFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTIwKTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMjUpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zMCk7XFxuICB9XFxuXFxuICAzNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTM1KTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDApO1xcbiAgfVxcblxcbiAgNDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS00NSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTUwKTtcXG4gIH1cXG5cXG4gIDU1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNTUpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02MCk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTY1KTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzApO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS03NSk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTgwKTtcXG4gIH1cXG5cXG4gIDg1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktODUpO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05MCk7XFxuICB9XFxuXFxuICA5NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTk1KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwMCk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuI2JzX2hlYWRpbmcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNDAsIDFmcik7XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuI3N0YXJ0X2J1dHRvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4uaG9tZXBlYWdlX3RpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuLndhdGVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAxNTc7XFxufVxcblxcbi5zdGFydCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnN0YXJ0X2JhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjOTcxYjtcXG59XFxuXFxuLnN0YXJ0X3RleHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjOTcxYjtcXG59XFxuLnN0YXJ0X3RleHRfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbiNic19oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQwLCAxZnIpO1xcbiAgaGVpZ2h0OiA0MGVtO1xcbiAgd2lkdGg6IDcwZW07XFxufVxcblxcbiNzdGFydF9idXR0b24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDEwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuLmhvbWVwZWFnZV90aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblxcbi53YXRlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTU3O1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zdGFydF9iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzk3MWI7XFxufVxcblxcbi5zdGFydF90ZXh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzk3MWI7XFxufVxcbi5zdGFydF90ZXh0X2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcHMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2F0ZXIuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0b3IuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaGlwX3RleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5cXG4uc2hpcF9odWxsX291dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaGlwX2h1bGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTU1NTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQyNDI7XFxufVxcblxcbi5zaGlwX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxuICBhbmltYXRpb246IG9wYWNpdHkgMC43NXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubGlnaHRfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjNmM2YzZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDY0NjtcXG59XFxuXFxuLmRhcmtfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBmMGYwZjtcXG59XFxuXFxuLnBlcmlzY29wZV9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnBlcmlzY29wZV9vbiB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnJhZGFyX29mZiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDEwMTU3O1xcbn1cXG5cXG4ucmFkYXJfb24ge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9zaGlwcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vYW5pbWF0b3IuY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmRpc3BsYXk9c3dhcCcpO1xcblxcbi5zaGlwX3RleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5cXG4uc2hpcF9odWxsX291dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaGlwX2h1bGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTU1NTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQyNDI7XFxufVxcblxcbi5zaGlwX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxuICBhbmltYXRpb246IG9wYWNpdHkgMC43NXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubGlnaHRfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjNmM2YzZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDY0NjtcXG59XFxuXFxuLmRhcmtfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBmMGYwZjtcXG59XFxuXFxuLnBlcmlzY29wZV9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnBlcmlzY29wZV9vbiB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnJhZGFyX29mZiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDEwMTU3O1xcbn1cXG5cXG4ucmFkYXJfb24ge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRvci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0td2F0ZXIxOiAjMDEwMTU3O1xcbiAgLS13YXRlcjI6ICMwNjM3NDQ7XFxufVxcblxcbi5zdXJyb3VuZGluZ193YXRlcl9kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzEzOGM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGQwZDYxO1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjJiMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE3NzU7XFxufVxcblxcbi5ncmVlbjEge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIyKTtcXG4gIG9wYWNpdHk6IDYwJTtcXG59XFxuXFxuLmJsdWUxIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxufVxcblxcbi5ibHVlMiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogOTYlO1xcbn1cXG5cXG4uYmx1ZTMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDkyJTtcXG59XFxuXFxuLmJsdWU0IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4OCU7XFxufVxcblxcbi5ibHVlNSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODQlO1xcbn1cXG5cXG4uYmx1ZTYge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuLmJsdWU3IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA3NiU7XFxufVxcbi5ibHVlOCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNzIlO1xcbn1cXG5cXG4uYmx1ZTkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDY4JTtcXG59XFxuXFxuLmJsdWUxMCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNjQlO1xcbn1cXG5cXG4uYmx1ZTEwIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy93YXRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vYW5pbWF0b3IuY3NzJztcXG5cXG46cm9vdCB7XFxuICAtLXdhdGVyMTogIzAxMDE1NztcXG4gIC0td2F0ZXIyOiAjMDYzNzQ0O1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzhjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkMGQ2MTtcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyYjE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTcxNzc1O1xcbn1cXG5cXG4uZ3JlZW4xIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMik7XFxuICBvcGFjaXR5OiA2MCU7XFxufVxcblxcbi5ibHVlMSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbn1cXG5cXG4uYmx1ZTIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDk2JTtcXG59XFxuXFxuLmJsdWUzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA5MiU7XFxufVxcblxcbi5ibHVlNCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODglO1xcbn1cXG5cXG4uYmx1ZTUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDg0JTtcXG59XFxuXFxuLmJsdWU2IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblxcbi5ibHVlNyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNzYlO1xcbn1cXG4uYmx1ZTgge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDcyJTtcXG59XFxuXFxuLmJsdWU5IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA2OCU7XFxufVxcblxcbi5ibHVlMTAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDY0JTtcXG59XFxuXFxuLmJsdWUxMCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiAucGxhY2Vfc2hpcHNfYmFja2dyb3VuZF90aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufSAqL1xcblxcbiNwbGFjZV9zaGlwc19tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLCAxZnIpO1xcbiAgd2lkdGg6IDcwZW07XFxuICBoZWlnaHQ6IDUwZW07XFxufVxcblxcbiNwbGFjZV9zaGlwc19jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNWVtO1xcbiAgYm90dG9tOiA1ZW07XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNDBlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxufVxcblxcbi5wbGFjZV9zaGlwX3RpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG59XFxuXFxuLnBsYWNlX3NoaXBfdGlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjODRmZjE3O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztHQUVHOztBQUVIO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAucGxhY2Vfc2hpcHNfYmFja2dyb3VuZF90aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufSAqL1xcblxcbiNwbGFjZV9zaGlwc19tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLCAxZnIpO1xcbiAgd2lkdGg6IDcwZW07XFxuICBoZWlnaHQ6IDUwZW07XFxufVxcblxcbiNwbGFjZV9zaGlwc19jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNWVtO1xcbiAgYm90dG9tOiA1ZW07XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNDBlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxufVxcblxcbi5wbGFjZV9zaGlwX3RpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG59XFxuXFxuLnBsYWNlX3NoaXBfdGlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjODRmZjE3O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvaW5kZXguY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9jc3MvaW5kZXguY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGdhbWVsb29wIGZyb20gJy4vY29tcG9uZW50cy9nYW1lL0dBTUVfTE9PUC5qcyc7XG5pbXBvcnQgaG9tZXBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hvbWVwYWdlLmpzJztcblxuY29uc3QgR0FNRSA9IGdhbWVsb29wKCk7XG5ob21lcGFnZSgpO1xuIl0sIm5hbWVzIjpbIkdhbWVib2FyZCIsIlBsYXllciIsImdhbWVsb29wIiwiUExBWUVSMSIsIlBMQVlFUjIiLCJQTEFZRVIxX0dBTUVCT0FSRCIsIlBMQVlFUjJfR0FNRUJPQVJEIiwibWFwIiwiYm9hcmQiLCJwbGFjZV9zaGlwIiwiU2hpcCIsImNhcnJpZXIiLCJwb3NpdGlvbiIsInNoaXAiLCJiYXR0bGVzaGlwIiwiZGVzdHJveWVyIiwic3ViIiwicGF0cm9sQm9hdCIsImlucHV0X2Nvb3JkaW5hdGVzIiwic2hpcHMiLCJpbnB1dF9jb29yZGluYXRlIiwibWlzcyIsIldBU19ISVQiLCJpbmNsdWRlcyIsImhpdHMiLCJISVRfSU5ERVgiLCJpbmRleE9mIiwiaGl0IiwibWlzc2VzIiwiaXNfYWxsX3N1bmsiLCJhbGxfc3Vua19jYWxsIiwiaXNfc3VuayIsInNvcnQiLCJwbGF5ZXIiLCJMRVRURVJTIiwibGV0dGVyIiwiaSIsIkVycm9yIiwiQ09PUkRJTkFURSIsInJlbWFpbmluZ19tb3ZlcyIsIm1vdmVzIiwicmVjZWl2ZV9hdHRhY2siLCJjb29yZGluYXRlIiwiRklMVEVSRURfTU9WRVMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJSRU1BSU5JTkdfTU9WRVNfQ09QWSIsIlJFTUFJTklORyIsImZpbHRlciIsInJlbWFpbmluZ19tb3ZlIiwiQXJyYXkiLCJmaWxsIiwicG9zaXRpb25faGl0IiwiZXZlcnkiLCJoaXRzX2FycmF5IiwiSElUUyIsIkFOSU1BVElPTlMiLCJQRVJJU0NPUEVfU1BJTk5FUiIsIkxFRlRfVElMRSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSSUdIVF9USUxFIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidmFsdWUiLCJSQURBUl9TUElOTkVSMSIsIlJBREFSX1NQSU5ORVIyIiwiU1VCX0FOSU1BVElPTiIsInNldEludGVydmFsIiwiQk9BVDEiLCJCT0FUMiIsIklURVJBVE9SIiwiQkFUVExFU0hJUCIsIkIiLCJBIiwiVDEiLCJUMiIsIkwiLCJFIiwiUyIsIkgiLCJJIiwiUCIsImV6X2xvYWRlciIsIkVaX1RJTEVfQ09MT1JJWkVSIiwiY29sb3JfYmF0dGxlc2hpcF90aWxlcyIsIkNBUlJJRVIiLCJERVNUUk9ZRVIiLCJTVUJNQVJJTkUiLCJjb2xvcl9zaGlwX3RpbGVzIiwiYmxhY2tfb3V0bGluZSIsImh1bGwiLCJkYXJrX2dyYXkiLCJsaWdodF9ncmF5Iiwic2hpcF9saWdodCIsInN1cnJvdW5kaW5nX3dhdGVyX2RhcmsiLCJzdXJyb3VuZGluZ193YXRlcl9saWdodCIsIkMiLCJWIiwiTiIsIlNJWCIsIk5JTkUiLCJVIiwiTjIiLCJWMiIsIlkiLCJBTEwiLCJ0aWxlIiwiaW5uZXJUZXh0Iiwic3VibWFyaW5lIiwibGVmdF9wZXJpc2NvcGUiLCJyaWdodF9wZXJpc2NvcGUiLCJTVEFSVCIsImNvbG9yX3N0YXJ0X3RpbGVzIiwiYWxsIiwidGlsZV9pZCIsIlRJTEUiLCJjb2xvcl93YXRlcl90aWxlcyIsIkNMQVNTRVMiLCJXQVRFUl9USUxFUyIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiUkFORE9NX05VTUJFUiIsIm1pbiIsIm1heCIsInRhcmdldF9hcnJheSIsInB1c2giLCJpbnB1dF9hcnJheSIsImlucHV0X2NsYXNzIiwicGxhY2Vfc2hpcHMiLCJsaXN0ZW5lcnNfaGFuZGxlcnMiLCJTVEFSVF9CVVRUT04iLCJTVEFSVF9CVVRUT05fRU5URVJfSEFORExFUiIsIlNUQVJUX0JVVFRPTl9CQUNLR1JPVU5EX1RJTEVTIiwiU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMiLCJTVEFSVF9CVVRUT05fTEVBVkVfSEFORExFUiIsIlNUQVJUX0JVVFRPTl9DTElDS19IQU5ETEVSIiwiaW50ZXJ2YWwiLCJJTlRFUlZBTCIsImNsZWFySW50ZXJ2YWwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyX3RpbGVzIiwiTUFJTiIsImNyZWF0ZUVsZW1lbnQiLCJIRUFESU5HIiwiaWQiLCJhcHBlbmQiLCJib2R5IiwiY2Fycmllcl9lel9sb2FkZXIiLCJPVVRMSU5FIiwiSFVMTCIsIkRBUktfR1JBWSIsIkxJR0hUX0dSQVkiLCJTVVJST1VORElOR19XQVRFUl9EQVJLIiwiZGVzdHJveWVyX2V6X2xvYWRlciIsInN1Ym1hcmluZV9lel9sb2FkZXIiLCJzIiwidDEiLCJhIiwiciIsInQyIiwiUiIsIm51bWJlciIsImhvbWVwYWdlIiwiQ09PUkRJTkFURVMiLCJOVU1CRVJTIiwicGxhY2Vfc2hpcF9sb2dpYyIsImNvbnNvbGUiLCJsb2ciLCJQTEFDRV9TSElQU19DT05UQUlORVIiLCJHQU1FIl0sInNvdXJjZVJvb3QiOiIifQ==