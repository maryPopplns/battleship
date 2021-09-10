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

function logic_listeners() {
  var current_ship_index = 0;
  var orientation = 'horizontal';
  var SHIPS = ['carrier', 'battleship', 'destroyer', 'sub', 'patrolBoat'];
  var LENGTH = [5, 4, 3, 3, 2];
  var MAXS = {
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
  }; // const SUBSEQUENT_TILES = (id) => {
  //   console.log(id);
  // };

  var INBOUNDS_DETERMINER = function INBOUNDS_DETERMINER(id) {
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

  var SPACE_TAKEN_DETERMINER = function SPACE_TAKEN_DETERMINER() {
    console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME);
  };

  var MOUSE_ENTER_HANDLER = function MOUSE_ENTER_HANDLER(event) {
    var ID = event.target.id;
    var INBOUNDS = INBOUNDS_DETERMINER(ID);
    var SPACE_TAKEN = SPACE_TAKEN_DETERMINER(); // if the coordinate is out of bounds make the tile red
    // if the coordinate isnt out of bounds,

    event.target.classList.add('place_ship_hovered'); // SUBSEQUENT_TILES(ID);
  };

  var MOUSE_LEAVE_HANDLER = function MOUSE_LEAVE_HANDLER() {
    var HOVERED_TILES = Array.from(document.getElementsByClassName('place_ship_hovered'));
    HOVERED_TILES.map(function (tile) {
      tile.classList.remove('place_ship_hovered');
    });
  };

  var MOUSE_CLICK_HANDLER = function MOUSE_CLICK_HANDLER() {
    current_ship_index = current_ship_index + 1;
  };

  var KEY_PRESS_HANDLER = function KEY_PRESS_HANDLER(event) {
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
  document.body.addEventListener('keyup', KEY_PRESS_HANDLER);
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
    _TILE.innerText = _coordinates__WEBPACK_IMPORTED_MODULE_0__["default"][_i];

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
___CSS_LOADER_EXPORT___.push([module.id, ".place_ships_background_tile:hover {\n  background: #84ff17;\n}\n\n#place_ships_main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  width: 70em;\n  height: 50em;\n}\n\n#place_ships_container {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  position: absolute;\n  left: 15em;\n  bottom: 5em;\n  height: 40em;\n  width: 40em;\n  border: 1px solid #ac971b;\n}\n\n.place_ship_tile {\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #ac971b;\n}\n\n.place_ship_hovered {\n  background: #ac971b;\n}\n\n.invalid_ship_placement {\n  background: #f00;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/place_ships/css/index.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[".place_ships_background_tile:hover {\n  background: #84ff17;\n}\n\n#place_ships_main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  width: 70em;\n  height: 50em;\n}\n\n#place_ships_container {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  position: absolute;\n  left: 15em;\n  bottom: 5em;\n  height: 40em;\n  width: 40em;\n  border: 1px solid #ac971b;\n}\n\n.place_ship_tile {\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #ac971b;\n}\n\n.place_ship_hovered {\n  background: #ac971b;\n}\n\n.invalid_ship_placement {\n  background: #f00;\n}\n"],"sourceRoot":""}]);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lL0dBTUVfTE9PUC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWUvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9iYXR0bGVzaGlwX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2NvbG9yX2JhdHRsZXNoaXBfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvY29sb3Jfc2hpcF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9jb2xvcl9zdGFydF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9jb2xvcl93YXRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2xpc3RlbmVyc19oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9yZW5kZXJfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvc2hpcF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9zdGFydF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2hlbHBlcnMvY29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2hlbHBlcnMvbG9naWNfbGlzdGVuZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9oZWxwZXJzL3JlbmRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvcGxhY2Vfc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2FuaW1hdG9yLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9zaGlwcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy93YXRlci5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZWxvb3AoKSB7XG4gIGNvbnN0IFBMQVlFUjEgPSBuZXcgUGxheWVyKCdodW1hbicpO1xuICBjb25zdCBQTEFZRVIyID0gbmV3IFBsYXllcignYWknKTtcbiAgY29uc3QgUExBWUVSMV9HQU1FQk9BUkQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGNvbnN0IFBMQVlFUjJfR0FNRUJPQVJEID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gIC8vdG9kbyByZW1vdmUgYm9pbGVycGxhdGUgc28gc2hpcHMgY2FuIGJlIG1hbnVhbGx5IHBsYWNlZFxuICBbUExBWUVSMV9HQU1FQk9BUkQsIFBMQVlFUjJfR0FNRUJPQVJEXS5tYXAoKGJvYXJkKSA9PiB7XG4gICAgYm9hcmQucGxhY2Vfc2hpcCgnY2FycmllcicsIFsnYTAnLCAnYTEnLCAnYTInLCAnYTMnLCAnYTQnXSk7XG4gICAgYm9hcmQucGxhY2Vfc2hpcCgnYmF0dGxlc2hpcCcsIFsnYjAnLCAnYjEnLCAnYjInLCAnYjMnXSk7XG4gICAgYm9hcmQucGxhY2Vfc2hpcCgnZGVzdHJveWVyJywgWydjMCcsICdjMScsICdjMiddKTtcbiAgICBib2FyZC5wbGFjZV9zaGlwKCdzdWInLCBbJ2QwJywgJ2QxJywgJ2QyJ10pO1xuICAgIGJvYXJkLnBsYWNlX3NoaXAoJ3BhdHJvbEJvYXQnLCBbJ2UwJywgJ2UxJ10pO1xuICB9KTtcbiAgLy90b2RvIHJlbW92ZSBib2lsZXJwbGF0ZSBzbyBzaGlwcyBjYW4gYmUgbWFudWFsbHkgcGxhY2VkXG5cbiAgcmV0dXJuIHsgUExBWUVSMSwgUExBWUVSMiwgUExBWUVSMV9HQU1FQk9BUkQsIFBMQVlFUjJfR0FNRUJPQVJEIH07XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBzaGlwcyA9IHtcbiAgICBjYXJyaWVyOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCg1KSxcbiAgICB9LFxuICAgIGJhdHRsZXNoaXA6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDQpLFxuICAgIH0sXG4gICAgZGVzdHJveWVyOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCgzKSxcbiAgICB9LFxuICAgIHN1Yjoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoMyksXG4gICAgfSxcbiAgICBwYXRyb2xCb2F0OiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCgyKSxcbiAgICB9LFxuICB9O1xuICBoaXRzID0gW107XG4gIG1pc3NlcyA9IFtdO1xuXG4gIHBsYWNlX3NoaXAoc2hpcCwgaW5wdXRfY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLnNoaXBzW3NoaXBdLnBvc2l0aW9uID0gaW5wdXRfY29vcmRpbmF0ZXM7XG4gIH1cbiAgI21pc3NfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLm1pc3NlcywgaW5wdXRfY29vcmRpbmF0ZV0uc29ydCgpO1xuICB9XG4gICNoaXRfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmhpdHMsIGlucHV0X2Nvb3JkaW5hdGVdLnNvcnQoKTtcbiAgfVxuICByZWNlaXZlX2F0dGFjayhpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgbGV0IG1pc3MgPSB0cnVlO1xuICAgIGZvciAobGV0IHNoaXAgaW4gdGhpcy5zaGlwcykge1xuICAgICAgY29uc3QgV0FTX0hJVCA9IHRoaXMuc2hpcHNbc2hpcF0ucG9zaXRpb24uaW5jbHVkZXMoaW5wdXRfY29vcmRpbmF0ZSk7XG4gICAgICBpZiAoV0FTX0hJVCkge1xuICAgICAgICB0aGlzLmhpdHMgPSB0aGlzLiNoaXRfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKTtcbiAgICAgICAgY29uc3QgSElUX0lOREVYID0gdGhpcy5zaGlwc1tzaGlwXS5wb3NpdGlvbi5pbmRleE9mKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgICAgICB0aGlzLnNoaXBzW3NoaXBdLnNoaXAuaGl0KEhJVF9JTkRFWCk7XG4gICAgICAgIG1pc3MgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1pc3MpIHtcbiAgICAgIHRoaXMubWlzc2VzID0gdGhpcy4jbWlzc19yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgIH1cbiAgfVxuICBhbGxfc3VuaygpIHtcbiAgICBsZXQgaXNfYWxsX3N1bmsgPSB0cnVlO1xuICAgIGZvciAobGV0IHNoaXAgaW4gdGhpcy5zaGlwcykge1xuICAgICAgY29uc3QgYWxsX3N1bmtfY2FsbCA9IHRoaXMuc2hpcHNbc2hpcF0uc2hpcC5pc19zdW5rKCk7XG4gICAgICBpZiAoYWxsX3N1bmtfY2FsbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaXNfYWxsX3N1bmsgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc19hbGxfc3VuaztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IocGxheWVyKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gIH1cbiAgbW92ZXMgPSBbXTtcbiAgcmVtYWluaW5nX21vdmVzID0gW107XG5cbiAgI3JlbWFpbmluZ19tb3Zlc19yZWR1Y2VyKGNvb3JkaW5hdGUpIHtcbiAgICB0aGlzLnJlbWFpbmluZ19tb3ZlcyA9IFsuLi50aGlzLnJlbWFpbmluZ19tb3ZlcywgY29vcmRpbmF0ZV07XG4gIH1cbiAgI2ZpbGxfcmVtYWluaW5nX21vdmVzID0gKCgpID0+IHtcbiAgICBjb25zdCBMRVRURVJTID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnLCAnaScsICdqJ107XG4gICAgTEVUVEVSUy5tYXAoKGxldHRlcikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIHRoaXMuI3JlbWFpbmluZ19tb3Zlc19yZWR1Y2VyKGAke2xldHRlcn0ke2l9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pKCk7XG4gICNhaV9tb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ19tb3Zlc1tcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucmVtYWluaW5nX21vdmVzLmxlbmd0aClcbiAgICBdO1xuICB9XG4gICNmaWx0ZXJfcmVtYWluaW5nX21vdmVzKGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBSRU1BSU5JTkdfTU9WRVNfQ09QWSA9IFsuLi50aGlzLnJlbWFpbmluZ19tb3Zlc107XG4gICAgY29uc3QgUkVNQUlOSU5HID0gUkVNQUlOSU5HX01PVkVTX0NPUFkuZmlsdGVyKChyZW1haW5pbmdfbW92ZSkgPT4ge1xuICAgICAgcmV0dXJuIHJlbWFpbmluZ19tb3ZlICE9PSBjb29yZGluYXRlO1xuICAgIH0pO1xuICAgIHJldHVybiBSRU1BSU5JTkc7XG4gIH1cbiAgI2F0dGFja19yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMubW92ZXMsIGlucHV0X2Nvb3JkaW5hdGVdO1xuICB9XG4gIGFpX2F0dGFjayhib2FyZCkge1xuICAgIGlmICh0aGlzLnBsYXllciAhPT0gJ2FpJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGF5ZXIgbmVlZHMgdG8gYmUgQUknKTtcbiAgICB9XG4gICAgY29uc3QgQ09PUkRJTkFURSA9IHRoaXMuI2FpX21vdmUoKTtcbiAgICB0aGlzLnJlbWFpbmluZ19tb3ZlcyA9IHRoaXMuI2ZpbHRlcl9yZW1haW5pbmdfbW92ZXMoQ09PUkRJTkFURSk7XG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMuI2F0dGFja19yZWR1Y2VyKENPT1JESU5BVEUpO1xuICAgIGJvYXJkLnJlY2VpdmVfYXR0YWNrKENPT1JESU5BVEUpO1xuICAgIHJldHVybiBDT09SRElOQVRFO1xuICB9XG4gIGh1bWFuX2F0dGFjayhib2FyZCwgY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLnBsYXllciAhPT0gJ2h1bWFuJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGF5ZXIgbmVlZHMgdG8gYmUgYSBodW1hbicpO1xuICAgIH1cbiAgICBjb25zdCBGSUxURVJFRF9NT1ZFUyA9IHRoaXMuI2ZpbHRlcl9yZW1haW5pbmdfbW92ZXMoY29vcmRpbmF0ZSk7XG4gICAgdGhpcy5yZW1haW5pbmdfbW92ZXMgPSBGSUxURVJFRF9NT1ZFUztcbiAgICB0aGlzLm1vdmVzID0gdGhpcy4jYXR0YWNrX3JlZHVjZXIoY29vcmRpbmF0ZSk7XG4gICAgYm9hcmQucmVjZWl2ZV9hdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmhpdHMgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKGZhbHNlKTtcbiAgfVxuXG4gICNoaXRfcmVkdWNlcihoaXRzX2FycmF5LCBwb3NpdGlvbl9oaXQpIHtcbiAgICBjb25zdCBISVRTID0gWy4uLmhpdHNfYXJyYXldO1xuICAgIEhJVFNbcG9zaXRpb25faGl0XSA9IHRydWU7XG4gICAgcmV0dXJuIEhJVFM7XG4gIH1cbiAgaGl0KHBvc2l0aW9uX2hpdCkge1xuICAgIHRoaXMuaGl0cyA9IHRoaXMuI2hpdF9yZWR1Y2VyKHRoaXMuaGl0cywgcG9zaXRpb25faGl0KTtcbiAgfVxuICBpc19zdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhpdHMuZXZlcnkoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gdHJ1ZSk7XG4gIH1cbn1cbiIsImNvbnN0IEFOSU1BVElPTlMgPSAoKCkgPT4ge1xuICBjb25zdCBQRVJJU0NPUEVfU1BJTk5FUiA9ICgpID0+IHtcbiAgICBjb25zdCBMRUZUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3NTkpO1xuICAgIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3NjEpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb2ZmJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb24nKTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgaWYgKExFRlRfVElMRS5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ29uJykpIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3BlcmlzY29wZV9vbicpO1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3BlcmlzY29wZV9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdwZXJpc2NvcGVfb2ZmJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29mZicpO1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3BlcmlzY29wZV9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncGVyaXNjb3BlX29uJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFJBREFSX1NQSU5ORVIxID0gKCkgPT4ge1xuICAgIGNvbnN0IExFRlRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDcxNCk7XG4gICAgY29uc3QgUklHSFRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDcxNik7XG4gICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIGlmIChMRUZUX1RJTEUuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdvbicpKSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vbicpO1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vZmYnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgUkFEQVJfU1BJTk5FUjIgPSAoKSA9PiB7XG4gICAgY29uc3QgTEVGVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTA5Nyk7XG4gICAgY29uc3QgUklHSFRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDEwOTkpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBpZiAoTEVGVF9USUxFLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnb24nKSkge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb2ZmJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFNVQl9BTklNQVRJT04gPSBzZXRJbnRlcnZhbChQRVJJU0NPUEVfU1BJTk5FUiwgMTAwMCk7XG4gIGNvbnN0IEJPQVQxID0gc2V0SW50ZXJ2YWwoUkFEQVJfU1BJTk5FUjEsIDEwMDApO1xuICBjb25zdCBCT0FUMiA9IHNldEludGVydmFsKFJBREFSX1NQSU5ORVIyLCAxNTAwKTtcblxuICByZXR1cm4geyBTVUJfQU5JTUFUSU9OLCBCT0FUMSwgQk9BVDIgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IEFOSU1BVElPTlMgfTtcbiIsImltcG9ydCB7IElURVJBVE9SIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY29uc3QgQkFUVExFU0hJUCA9IHtcbiAgQjogWzE1MCwgMTU0LCAyMjAsIDIyNCwgMzYwLCAzNjQsIDQzMCwgNDM2LCA0MzRdLFxuICBBOiBbMTU2LCAxNTksIDIyNiwgMjI5LCAzNjYsIDM2OSwgNDM2LCA0MzksIDUwNiwgNTA5XSxcbiAgVDE6IFsxNjIsIDE2MywgMjMyLCAyMzMsIDMwMiwgMzAzLCAzNzIsIDM3MywgNDQyLCA0NDMsIDUxMiwgNTEzXSxcbiAgVDI6IFsxNjcsIDE2OCwgMjM3LCAyMzgsIDMwNywgMzA4LCAzNzcsIDM3OCwgNDQ3LCA0NDgsIDUxNywgNTE4XSxcbiAgTDogWzEwMSwgMTcxLCAyNDEsIDMxMSwgMzgxLCA0NTFdLFxuICBFOiBbMTc2LCAyNDYsIDM4NiwgNDU2XSxcbiAgUzogWzE4MSwgMjUxLCAzOTQsIDQ2NF0sXG4gIEg6IFsxMTYsIDExOSwgMTg2LCAxODksIDI1NiwgMjU5LCAzOTYsIDM5OSwgNDY2LCA0NjksIDUzNiwgNTM5XSxcbiAgSTogWzE5MiwgMTkzLCAyNjIsIDI2MywgMzMyLCAzMzMsIDQwMiwgNDAzLCA0NzIsIDQ3M10sXG4gIFA6IFsxOTYsIDE5OSwgMjY2LCAyNjksIDQwNiwgNDc2LCA1NDZdLFxufTtcblxuKGZ1bmN0aW9uIGV6X2xvYWRlcigpIHtcbiAgY29uc3QgQiA9IEJBVFRMRVNISVAuQjtcbiAgSVRFUkFUT1IoODAsIDg0LCBCKTtcbiAgSVRFUkFUT1IoMjkwLCAyOTQsIEIpO1xuICBJVEVSQVRPUig1MDAsIDUwNCwgQik7XG5cbiAgY29uc3QgQSA9IEJBVFRMRVNISVAuQTtcbiAgSVRFUkFUT1IoODYsIDg5LCBBKTtcbiAgSVRFUkFUT1IoMjk2LCAyOTksIEEpO1xuXG4gIGNvbnN0IFQxID0gQkFUVExFU0hJUC5UMTtcbiAgSVRFUkFUT1IoOTEsIDk0LCBUMSk7XG5cbiAgY29uc3QgVDIgPSBCQVRUTEVTSElQLlQyO1xuICBJVEVSQVRPUig5NiwgOTksIFQyKTtcblxuICBjb25zdCBMID0gQkFUVExFU0hJUC5MO1xuICBJVEVSQVRPUig1MjEsIDUyNCwgTCk7XG5cbiAgY29uc3QgRSA9IEJBVFRMRVNISVAuRTtcbiAgSVRFUkFUT1IoMTA2LCAxMDksIEUpO1xuICBJVEVSQVRPUigzMTYsIDMxOCwgRSk7XG4gIElURVJBVE9SKDUyNiwgNTI5LCBFKTtcblxuICBjb25zdCBTID0gQkFUVExFU0hJUC5TO1xuICBJVEVSQVRPUigxMTEsIDExNCwgUyk7XG4gIElURVJBVE9SKDMyMSwgMzI0LCBTKTtcbiAgSVRFUkFUT1IoNTMxLCA1MzQsIFMpO1xuXG4gIGNvbnN0IEggPSBCQVRUTEVTSElQLkg7XG4gIElURVJBVE9SKDMyNiwgMzI5LCBIKTtcblxuICBjb25zdCBJID0gQkFUVExFU0hJUC5JO1xuICBJVEVSQVRPUigxMjEsIDEyNCwgSSk7XG4gIElURVJBVE9SKDU0MSwgNTQ0LCBJKTtcblxuICBjb25zdCBQID0gQkFUVExFU0hJUC5QO1xuICBJVEVSQVRPUigxMjYsIDEyOSwgUCk7XG4gIElURVJBVE9SKDMzNiwgMzM5LCBQKTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJBVFRMRVNISVA7XG4iLCJpbXBvcnQgeyBFWl9USUxFX0NPTE9SSVpFUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQgQkFUVExFU0hJUCBmcm9tICcuL2JhdHRsZXNoaXBfdGlsZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcl9iYXR0bGVzaGlwX3RpbGVzKCkge1xuICBmb3IgKGxldCBsZXR0ZXIgaW4gQkFUVExFU0hJUCkge1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKEJBVFRMRVNISVBbbGV0dGVyXSwgJ3RpdGxlJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENBUlJJRVIsIERFU1RST1lFUiwgU1VCTUFSSU5FIH0gZnJvbSAnLi9zaGlwX3RpbGVzLmpzJztcbmltcG9ydCB7IEVaX1RJTEVfQ09MT1JJWkVSIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3Jfc2hpcF90aWxlcygpIHtcbiAgKGZ1bmN0aW9uIGNhcnJpZXIoKSB7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5ibGFja19vdXRsaW5lLCAnc2hpcF9odWxsX291dGxpbmUnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLmh1bGwsICdzaGlwX2h1bGwnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLmRhcmtfZ3JheSwgJ2RhcmtfZ3JheScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIubGlnaHRfZ3JheSwgJ2xpZ2h0X2dyYXknKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLnNoaXBfbGlnaHQsICdzaGlwX2xpZ2h0Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5zdXJyb3VuZGluZ193YXRlcl9kYXJrLCAnc3Vycm91bmRpbmdfd2F0ZXJfZGFyaycpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFxuICAgICAgQ0FSUklFUi5zdXJyb3VuZGluZ193YXRlcl9saWdodCxcbiAgICAgICdzdXJyb3VuZGluZ193YXRlcl9saWdodCdcbiAgICApO1xuXG4gICAgY29uc3QgQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE3OTUpO1xuICAgIGNvbnN0IFYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNzk2KTtcbiAgICBjb25zdCBOID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTc5Nyk7XG4gICAgY29uc3QgU0lYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTc5OSk7XG4gICAgY29uc3QgTklORSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE4MDApO1xuICAgIGNvbnN0IFUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgyMzQ5KTtcbiAgICBjb25zdCBTID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM1MCk7XG4gICAgY29uc3QgTjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgyMzUyKTtcbiAgICBjb25zdCBBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM1Myk7XG4gICAgY29uc3QgVjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgyMzU0KTtcbiAgICBjb25zdCBZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM1NSk7XG4gICAgY29uc3QgQUxMID0gW0MsIFYsIE4sIFNJWCwgTklORSwgVSwgUywgTjIsIEEsIFYyLCBZXTtcbiAgICBBTEwubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3NoaXBfdGV4dCcpO1xuICAgIH0pO1xuICAgIEMuaW5uZXJUZXh0ID0gJ0MnO1xuICAgIFYuaW5uZXJUZXh0ID0gJ1YnO1xuICAgIE4uaW5uZXJUZXh0ID0gJ04nO1xuICAgIFNJWC5pbm5lclRleHQgPSAnNic7XG4gICAgTklORS5pbm5lclRleHQgPSAnOSc7XG4gICAgVS5pbm5lclRleHQgPSAnVSc7XG4gICAgUy5pbm5lclRleHQgPSAnUyc7XG4gICAgTjIuaW5uZXJUZXh0ID0gJ04nO1xuICAgIEEuaW5uZXJUZXh0ID0gJ0EnO1xuICAgIFYyLmlubmVyVGV4dCA9ICdWJztcbiAgICBZLmlubmVyVGV4dCA9ICdZJztcbiAgfSkoKTtcblxuICAoZnVuY3Rpb24gZGVzdHJveWVyKCkge1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5ibGFja19vdXRsaW5lLCAnc2hpcF9odWxsX291dGxpbmUnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuaHVsbCwgJ3NoaXBfaHVsbCcpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5saWdodF9ncmF5LCAnbGlnaHRfZ3JheScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5kYXJrX2dyYXksICdkYXJrX2dyYXknKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuc2hpcF9saWdodCwgJ3NoaXBfbGlnaHQnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihcbiAgICAgIERFU1RST1lFUi5zdXJyb3VuZGluZ193YXRlcl9kYXJrLFxuICAgICAgJ3N1cnJvdW5kaW5nX3dhdGVyX2RhcmsnXG4gICAgKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihcbiAgICAgIERFU1RST1lFUi5zdXJyb3VuZGluZ193YXRlcl9saWdodCxcbiAgICAgICdzdXJyb3VuZGluZ193YXRlcl9saWdodCdcbiAgICApO1xuXG4gICAgY29uc3QgVSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTApO1xuICAgIGNvbnN0IFMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTUxKTtcbiAgICBjb25zdCBOID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1Myk7XG4gICAgY29uc3QgQSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTQpO1xuICAgIGNvbnN0IFYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTU1KTtcbiAgICBjb25zdCBZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1Nik7XG4gICAgY29uc3QgQUxMID0gW1UsIFMsIE4sIEEsIFYsIFldO1xuICAgIEFMTC5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc2hpcF90ZXh0Jyk7XG4gICAgfSk7XG4gICAgVS5pbm5lclRleHQgPSAnVSc7XG4gICAgUy5pbm5lclRleHQgPSAnUyc7XG4gICAgTi5pbm5lclRleHQgPSAnTic7XG4gICAgQS5pbm5lclRleHQgPSAnQSc7XG4gICAgVi5pbm5lclRleHQgPSAnVic7XG4gICAgWS5pbm5lclRleHQgPSAnWSc7XG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uIHN1Ym1hcmluZSgpIHtcbiAgICAvLyBFWl9USUxFX0NPTE9SSVpFUihTVUJNQVJJTkUuaHVsbCwgJ3N1YicpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFNVQk1BUklORS5kYXJrX2dyYXksICdkYXJrX2dyYXknKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihTVUJNQVJJTkUubGVmdF9wZXJpc2NvcGUsICdwZXJpc2NvcGVfb24nKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihTVUJNQVJJTkUucmlnaHRfcGVyaXNjb3BlLCAncGVyaXNjb3BlX29mZicpO1xuICB9KSgpO1xufVxuIiwiaW1wb3J0IFNUQVJUIGZyb20gJy4vc3RhcnRfdGlsZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcl9zdGFydF90aWxlcygpIHtcbiAgY29uc3QgQUxMID0gU1RBUlQuYWxsO1xuICBBTEwubWFwKCh0aWxlX2lkKSA9PiB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzdGFydF8ke3RpbGVfaWR9YCk7XG4gICAgVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydF9iYWNrZ3JvdW5kJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKCdzdGFydF90ZXh0Jyk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3Jfd2F0ZXJfdGlsZXMoKSB7XG4gIGNvbnN0IENMQVNTRVMgPSBbXG4gICAgJ2JsdWUxJyxcbiAgICAnYmx1ZTInLFxuICAgICdibHVlMycsXG4gICAgJ2JsdWU0JyxcbiAgICAnYmx1ZTUnLFxuICAgICdibHVlNicsXG4gICAgJ2JsdWU3JyxcbiAgICAnYmx1ZTgnLFxuICAgICdibHVlOScsXG4gICAgJ2JsdWUxMCcsXG4gICAgJ2dyZWVuMScsXG4gIF07XG4gIGNvbnN0IFdBVEVSX1RJTEVTID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3YXRlcicpKTtcbiAgV0FURVJfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgY29uc3QgUkFORE9NX05VTUJFUiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKTtcbiAgICB0aWxlLmNsYXNzTGlzdC5hZGQoQ0xBU1NFU1tSQU5ET01fTlVNQkVSXSk7XG4gIH0pO1xufVxuIiwiY29uc3QgSVRFUkFUT1IgPSAobWluLCBtYXgsIHRhcmdldF9hcnJheSkgPT4ge1xuICBmb3IgKGxldCBpID0gbWluOyBpIDwgbWF4ICsgMTsgaSsrKSB7XG4gICAgdGFyZ2V0X2FycmF5LnB1c2goaSk7XG4gIH1cbn07XG5cbmNvbnN0IEVaX1RJTEVfQ09MT1JJWkVSID0gKGlucHV0X2FycmF5LCBpbnB1dF9jbGFzcykgPT4ge1xuICBpbnB1dF9hcnJheS5tYXAoKHRpbGVfaWQpID0+IHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGlsZV9pZCk7XG4gICAgVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZChpbnB1dF9jbGFzcyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgSVRFUkFUT1IsIEVaX1RJTEVfQ09MT1JJWkVSIH07XG4iLCJpbXBvcnQgeyBBTklNQVRJT05TIH0gZnJvbSAnLi9hbmltYXRpb25zLmpzJztcbmltcG9ydCBwbGFjZV9zaGlwcyBmcm9tICcuLi8uLi9wbGFjZV9zaGlwcy9wbGFjZV9zaGlwcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RlbmVyc19oYW5kbGVycygpIHtcbiAgY29uc3QgU1RBUlRfQlVUVE9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0X2J1dHRvbicpO1xuXG4gIGNvbnN0IFNUQVJUX0JVVFRPTl9FTlRFUl9IQU5ETEVSID0gKCkgPT4ge1xuICAgIGNvbnN0IFNUQVJUX0JVVFRPTl9CQUNLR1JPVU5EX1RJTEVTID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0X2JhY2tncm91bmQnKVxuICAgICk7XG4gICAgU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkRfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0X2JhY2tncm91bmRfaG92ZXJlZCcpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydF9iYWNrZ3JvdW5kJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBTVEFSVF9CVVRUT05fVEVYVF9USUxFUyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydF90ZXh0JylcbiAgICApO1xuICAgIFNUQVJUX0JVVFRPTl9URVhUX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdGFydF90ZXh0X2hvdmVyZWQnKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfdGV4dCcpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IFNUQVJUX0JVVFRPTl9MRUFWRV9IQU5ETEVSID0gKCkgPT4ge1xuICAgIGNvbnN0IFNUQVJUX0JVVFRPTl9CQUNLR1JPVU5EX1RJTEVTID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0X2JhY2tncm91bmRfaG92ZXJlZCcpXG4gICAgKTtcbiAgICBTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfYmFja2dyb3VuZCcpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQnKTtcbiAgICB9KTtcbiAgICBjb25zdCBTVEFSVF9CVVRUT05fVEVYVF9USUxFUyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydF90ZXh0X2hvdmVyZWQnKVxuICAgICk7XG4gICAgU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0X3RleHQnKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfdGV4dF9ob3ZlcmVkJyk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IFNUQVJUX0JVVFRPTl9DTElDS19IQU5ETEVSID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGludGVydmFsIGluIEFOSU1BVElPTlMpIHtcbiAgICAgIGNvbnN0IElOVEVSVkFMID0gQU5JTUFUSU9OU1tpbnRlcnZhbF07XG4gICAgICBjbGVhckludGVydmFsKElOVEVSVkFMKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhbmRpbmdfcGFnZScpLnJlbW92ZSgpO1xuICAgIHBsYWNlX3NoaXBzKCk7XG4gIH07XG5cbiAgU1RBUlRfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTVEFSVF9CVVRUT05fRU5URVJfSEFORExFUik7XG4gIFNUQVJUX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU1RBUlRfQlVUVE9OX0xFQVZFX0hBTkRMRVIpO1xuICBTVEFSVF9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBTVEFSVF9CVVRUT05fQ0xJQ0tfSEFORExFUik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJfdGlsZXMoKSB7XG4gIGNvbnN0IE1BSU4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IEhFQURJTkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgU1RBUlQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgTUFJTi5pZCA9ICdsYW5kaW5nX3BhZ2UnO1xuICBIRUFESU5HLmlkID0gJ2JzX2hlYWRpbmcnO1xuICBTVEFSVC5pZCA9ICdzdGFydF9idXR0b24nO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI4MDA7IGkrKykge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBUSUxFLmlkID0gaTtcbiAgICBUSUxFLmNsYXNzTGlzdCA9ICdob21lcGVhZ2VfdGlsZSB3YXRlcic7XG4gICAgSEVBRElORy5hcHBlbmQoVElMRSk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3MDA7IGkrKykge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBUSUxFLmlkID0gYHN0YXJ0XyR7aX1gO1xuICAgIFRJTEUuY2xhc3NMaXN0ID0gJ3RpbGUgc3RhcnQgc3RhcnRfYmFja2dyb3VuZCc7XG4gICAgU1RBUlQuYXBwZW5kKFRJTEUpO1xuICB9XG4gIE1BSU4uYXBwZW5kKEhFQURJTkcpO1xuICBNQUlOLmFwcGVuZChTVEFSVCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKE1BSU4pO1xufVxuIiwiaW1wb3J0IHsgSVRFUkFUT1IgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jb25zdCBDQVJSSUVSID0ge1xuICBibGFja19vdXRsaW5lOiBbXG4gICAgMTQ0NiwgMTQ1MCwgMTUxNiwgMTUyMCwgMTU4NiwgMTU5MCwgMTcyMywgMTczMywgMTgwMywgMTg1OSwgMTg3MywgMTg3NyxcbiAgICAxOTI4LCAxOTQzLCAxOTQ2LCAxOTQ4LCAxOTU1LCAxOTU2LCAxOTgyLCAxOTgzLCAxOTg3LCAxOTg4LCAxOTkyLCAxOTkzLFxuICAgIDE5OTgsIDIwMTMsIDIwMjYsIDIwNTIsIDIwNTQsIDIwNTUsIDIwNTcsIDIwNTksIDIwNjAsIDIwNjIsIDIwNjQsIDIwNjUsXG4gICAgMjA2OCwgMjA4MywgMjA4NSwgMjA4OSwgMjA5MSwgMjA5NCwgMjA5NSwgMjEyMywgMjEyNSwgMjEyOCwgMjEzMCwgMjEzMyxcbiAgICAyMTM1LCAyMTM4LCAyMTUzLCAyMTU1LCAyMTU5LCAyMTYxLCAyMTY1LCAyMjYwLCAyMjYxLCAyMjYyLCAyMzA5LCAyMzMyLFxuICAgIDIzMzMsIDIzMzQsIDIzNzksIDI0MDQsIDI0NDgsIDI0NzUsIDI1MTcsIDI1NDYsIDI1ODYsIDI2MTcsIDI2NTYsIDI2ODcsXG4gICAgMjcyNixcbiAgXSxcbiAgaHVsbDogW1xuICAgIDE1MTksIDE5MzksIDE5NDAsIDIwNzksIDIwODAsIDI2ODgsIDI2ODksIDI2OTIsIDI2OTMsIDI2OTYsIDI2OTcsIDI3MDAsXG4gICAgMjcwMSwgMjcwNCwgMjcwNSwgMjcwOCwgMjcwOSwgMjcxMiwgMjcxMywgMjcxNiwgMjcxNywgMjcyMCwgMjcyMSwgMjcyNCxcbiAgICAyNzI1LFxuICBdLFxuICBkYXJrX2dyYXk6IFtcbiAgICAxMTY4LCAxMjM4LCAxMzA4LCAxNTE3LCAxNTE4LCAxOTI5LCAxOTMwLCAxOTQxLCAxOTQyLCAxOTQ3LCAyMDI1LCAyMDUzLFxuICAgIDIwNTgsIDIwNjMsIDIwNjksIDIwNzAsIDIwODEsIDIwODIsIDIxMjQsIDIxMjksIDIxMzQsIDIwOTIsIDIwOTMsXG4gIF0sXG4gIGxpZ2h0X2dyYXk6IFsxMDk3LCAxMDk5XSxcbiAgc2hpcF9saWdodDogWzEwOThdLFxuICBzdXJyb3VuZGluZ193YXRlcl9kYXJrOiBbXG4gICAgMjU0NSwgMjYxNiwgMjY4NiwgMjY5MCwgMjY5MSwgMjY5NCwgMjY5NSwgMjY5OCwgMjY5OSwgMjcwMiwgMjcwMywgMjcwNixcbiAgICAyNzA3LCAyNzEwLCAyNzExLCAyNzE0LCAyNzE1LCAyNzE4LCAyNzE5LCAyNzIyLCAyNzIzLCAyNTg3LCAyNjU3LCAyNzI3LFxuICAgIDI0NDksIDI1MTgsIDI1MTksIDI1ODgsIDI2NTgsXG4gIF0sXG4gIHN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0OiBbXG4gICAgMjU4OSwgMjYxNSwgMjY1OSwgMjY4NCwgMjY4NSwgMjcyOCwgMjcyOSwgMjc1MywgMjc1NCwgMjc1NSwgMjc5OCwgMjc5OSxcbiAgXSxcbn07XG5cbmNvbnN0IERFU1RST1lFUiA9IHtcbiAgYmxhY2tfb3V0bGluZTogW1xuICAgIDExOTQsIDExOTgsIDEyMTEsIDEyNjUsIDEyNjksIDEyODAsIDE0NzQsIDE0OTEsIDE0OTIsIDE1NDUsIDE1NjEsIDE2MTYsXG4gICAgMTYzMSwgMTY4NywgMTcwMSxcbiAgXSxcbiAgaHVsbDogWzE2ODgsIDE2OTEsIDE2OTIsIDE2OTUsIDE2OTYsIDE2OTksIDE3MDBdLFxuICBkYXJrX2dyYXk6IFs3ODUsIDg1NSwgOTI1LCA5OTUsIDEyNjYsIDEyNzAsIDEyNzMsIDEyNzQsIDEyNzYsIDEyNzldLFxuICBsaWdodF9ncmF5OiBbNzE0LCA3MTYsIDExMzMsIDExMzcsIDEyNzIsIDEyNzUsIDEyNzddLFxuICBzaGlwX2xpZ2h0OiBbNzE1XSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfZGFyazogWzE2ODksIDE2OTAsIDE2OTMsIDE2OTQsIDE2OTcsIDE2OThdLFxuICBzdXJyb3VuZGluZ193YXRlcl9saWdodDogW1xuICAgIDE2MzIsIDE2ODUsIDE2ODYsIDE3MDIsIDE3MDMsIDE3NTQsIDE3NTUsIDE3NzMsIDE3NzQsXG4gIF0sXG59O1xuXG5jb25zdCBTVUJNQVJJTkUgPSB7XG4gIGh1bGw6IFtdLFxuICBkYXJrX2dyYXk6IFs3NjAsIDgzMCwgOTAwXSxcbiAgbGVmdF9wZXJpc2NvcGU6IFs3NTldLFxuICByaWdodF9wZXJpc2NvcGU6IFs3NjFdLFxufTtcblxuKGZ1bmN0aW9uIGNhcnJpZXJfZXpfbG9hZGVyKCkge1xuICBjb25zdCBPVVRMSU5FID0gQ0FSUklFUi5ibGFja19vdXRsaW5lO1xuICBJVEVSQVRPUigxMzc2LCAxMzgwLCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMTY1MywgMTY2MywgT1VUTElORSk7XG4gIElURVJBVE9SKDE3OTAsIDE3OTMsIE9VVExJTkUpO1xuICBJVEVSQVRPUigyMDE1LCAyMDE5LCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMjAyMiwgMjAyNCwgT1VUTElORSk7XG4gIElURVJBVE9SKDIxOTAsIDIyMzksIE9VVExJTkUpO1xuXG4gIGNvbnN0IEhVTEwgPSBDQVJSSUVSLmh1bGw7XG4gIElURVJBVE9SKDE0NDcsIDE0NDksIEhVTEwpO1xuICBJVEVSQVRPUigxNTg3LCAxNTg5LCBIVUxMKTtcbiAgSVRFUkFUT1IoMTcyNCwgMTczMiwgSFVMTCk7XG4gIElURVJBVE9SKDE3OTQsIDE4MDIsIEhVTEwpO1xuICBJVEVSQVRPUigxODYwLCAxODcyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTkzMSwgMTkzNCwgSFVMTCk7XG4gIElURVJBVE9SKDE5OTksIDIwMTIsIEhVTEwpO1xuICBJVEVSQVRPUigyMDcxLCAyMDc0LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjEzOSwgMjE1MiwgSFVMTCk7XG4gIElURVJBVE9SKDIyNjMsIDIzMDgsIEhVTEwpO1xuICBJVEVSQVRPUigyMzM1LCAyMzc4LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjQwNSwgMjQ0NywgSFVMTCk7XG4gIElURVJBVE9SKDI0NzYsIDI1MTYsIEhVTEwpO1xuICBJVEVSQVRPUigyNTQ3LCAyNTg1LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjYxOCwgMjY1NSwgSFVMTCk7XG5cbiAgY29uc3QgREFSS19HUkFZID0gQ0FSUklFUi5kYXJrX2dyYXk7XG4gIElURVJBVE9SKDExMzQsIDExMzYsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDIwODYsIDIwODgsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDIxNTYsIDIxNTgsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDIxNjIsIDIxNjQsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDE5MzUsIDE5MzgsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDIwNzUsIDIwNzgsIERBUktfR1JBWSk7XG5cbiAgY29uc3QgTElHSFRfR1JBWSA9IENBUlJJRVIubGlnaHRfZ3JheTtcbiAgSVRFUkFUT1IoMjMzNSwgMjM3OCwgTElHSFRfR1JBWSk7XG5cbiAgY29uc3QgU1VSUk9VTkRJTkdfV0FURVJfREFSSyA9IENBUlJJRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyaztcbiAgSVRFUkFUT1IoMjc1NiwgMjc5NywgU1VSUk9VTkRJTkdfV0FURVJfREFSSyk7XG59KSgpO1xuXG4oZnVuY3Rpb24gZGVzdHJveWVyX2V6X2xvYWRlcigpIHtcbiAgY29uc3QgT1VUTElORSA9IERFU1RST1lFUi5ibGFja19vdXRsaW5lO1xuICBJVEVSQVRPUigxNDAzLCAxNDIyLCBPVVRMSU5FKTtcblxuICBjb25zdCBIVUxMID0gREVTVFJPWUVSLmh1bGw7XG4gIElURVJBVE9SKDE0NzUsIDE0OTAsIEhVTEwpO1xuICBJVEVSQVRPUigxNjE3LCAxNjMwLCBIVUxMKTtcblxuICBjb25zdCBMSUdIVF9HUkFZID0gREVTVFJPWUVSLmxpZ2h0X2dyYXk7XG4gIElURVJBVE9SKDE1NDYsIDE1NjAsIExJR0hUX0dSQVkpO1xuICBJVEVSQVRPUigxMDYzLCAxMDY3LCBMSUdIVF9HUkFZKTtcbiAgSVRFUkFUT1IoMTIwMiwgMTIwNywgTElHSFRfR1JBWSk7XG4gIElURVJBVE9SKDEzNDIsIDEzNDcsIExJR0hUX0dSQVkpO1xuXG4gIGNvbnN0IERBUktfR1JBWSA9IERFU1RST1lFUi5kYXJrX2dyYXk7XG4gIElURVJBVE9SKDEzMzQsIDEzMzYsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDEzMzgsIDEzNDAsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDEzNDksIDEzNTEsIERBUktfR1JBWSk7XG5cbiAgY29uc3QgU1VSUk9VTkRJTkdfV0FURVJfREFSSyA9IERFU1RST1lFUi5zdXJyb3VuZGluZ193YXRlcl9kYXJrO1xuICBJVEVSQVRPUigxNzU2LCAxNzcyLCBTVVJST1VORElOR19XQVRFUl9EQVJLKTtcbn0pKCk7XG5cbmV4cG9ydCB7IENBUlJJRVIsIERFU1RST1lFUiwgU1VCTUFSSU5FIH07XG4iLCJpbXBvcnQgeyBJVEVSQVRPUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmNvbnN0IFNUQVJUID0ge1xuICBzOiBbMjIxLCAyMjIsIDQzNywgNDM4XSxcbiAgdDE6IFsyMzQsIDIzNSwgMzA0LCAzMDUsIDM3NCwgMzc1LCA0NDQsIDQ0NSwgNTE0LCA1MTUsIDU4NCwgNTg1XSxcbiAgYTogW1xuICAgIDI0MSwgMjQyLCAyNDcsIDI0OCwgNDUxLCA0NTIsIDQ1NywgNDU4LCA1MjEsIDUyMiwgNTI3LCA1MjgsIDU5MSwgNTkyLCA1OTcsXG4gICAgNTk4LFxuICBdLFxuICByOiBbXG4gICAgMjUxLCAyNTIsIDI1NywgMjU4LCA0NjEsIDQ2MiwgNDY3LCA0NjgsIDUzMSwgNTMyLCA1MzcsIDUzOCwgNjAxLCA2MDIsIDYwNyxcbiAgICA2MDgsXG4gIF0sXG4gIHQyOiBbMjY0LCAyNjUsIDMzNCwgMzM1LCA0MDQsIDQwNSwgNDc0LCA0NzUsIDU0NCwgNTQ1LCA2MTQsIDYxNV0sXG4gIGFsbDogW10sXG59O1xuXG4oZnVuY3Rpb24gZXpfbG9hZGVyKCkge1xuICBjb25zdCBTID0gU1RBUlQucztcbiAgSVRFUkFUT1IoODEsIDg4LCBTKTtcbiAgSVRFUkFUT1IoMTUxLCAxNTgsIFMpO1xuICBJVEVSQVRPUigyOTEsIDI5OCwgUyk7XG4gIElURVJBVE9SKDM2MSwgMzY4LCBTKTtcbiAgSVRFUkFUT1IoNTAxLCA1MDgsIFMpO1xuICBJVEVSQVRPUig1NzEsIDU3OCwgUyk7XG5cbiAgY29uc3QgVDEgPSBTVEFSVC50MTtcbiAgSVRFUkFUT1IoOTEsIDk4LCBUMSk7XG4gIElURVJBVE9SKDE2MSwgMTY4LCBUMSk7XG5cbiAgY29uc3QgQSA9IFNUQVJULmE7XG4gIElURVJBVE9SKDEwMSwgMTA4LCBBKTtcbiAgSVRFUkFUT1IoMTcxLCAxNzgsIEEpO1xuICBJVEVSQVRPUigzMTEsIDMxOCwgQSk7XG4gIElURVJBVE9SKDM4MSwgMzg4LCBBKTtcblxuICBjb25zdCBSID0gU1RBUlQucjtcbiAgSVRFUkFUT1IoMTExLCAxMTYsIFIpO1xuICBJVEVSQVRPUigxODEsIDE4NiwgUik7XG4gIElURVJBVE9SKDMyMSwgMzI2LCBSKTtcbiAgSVRFUkFUT1IoMzkxLCAzOTYsIFIpO1xuXG4gIGNvbnN0IFQyID0gU1RBUlQudDI7XG4gIElURVJBVE9SKDEyMSwgMTI4LCBUMik7XG4gIElURVJBVE9SKDE5MSwgMTk4LCBUMik7XG5cbiAgZm9yIChsZXQgbGV0dGVyIGluIFNUQVJUKSB7XG4gICAgaWYgKGxldHRlciA9PT0gJ2FsbCcpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBTVEFSVFtsZXR0ZXJdLm1hcCgobnVtYmVyKSA9PiB7XG4gICAgICBTVEFSVC5hbGwucHVzaChudW1iZXIpO1xuICAgIH0pO1xuICB9XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgU1RBUlQ7XG4iLCJpbXBvcnQgcmVuZGVyX3RpbGVzIGZyb20gJy4vaGVscGVycy9yZW5kZXJfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX3N0YXJ0X3RpbGVzIGZyb20gJy4vaGVscGVycy9jb2xvcl9zdGFydF90aWxlcy5qcyc7XG5pbXBvcnQgY29sb3Jfc2hpcF90aWxlcyBmcm9tICcuL2hlbHBlcnMvY29sb3Jfc2hpcF90aWxlcy5qcyc7XG5pbXBvcnQgY29sb3JfYmF0dGxlc2hpcF90aWxlcyBmcm9tICcuL2hlbHBlcnMvY29sb3JfYmF0dGxlc2hpcF90aWxlcy5qcyc7XG5pbXBvcnQgY29sb3Jfd2F0ZXJfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX3dhdGVyX3RpbGVzLmpzJztcbmltcG9ydCBsaXN0ZW5lcnNfaGFuZGxlcnMgZnJvbSAnLi9oZWxwZXJzL2xpc3RlbmVyc19oYW5kbGVycy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVwYWdlKCkge1xuICByZW5kZXJfdGlsZXMoKTtcbiAgY29sb3Jfc3RhcnRfdGlsZXMoKTtcbiAgY29sb3Jfc2hpcF90aWxlcygpO1xuICBjb2xvcl9iYXR0bGVzaGlwX3RpbGVzKCk7XG4gIGNvbG9yX3dhdGVyX3RpbGVzKCk7XG4gIGxpc3RlbmVyc19oYW5kbGVycygpO1xufVxuIiwiY29uc3QgQ09PUkRJTkFURVMgPSBbXTtcbmNvbnN0IExFVFRFUlMgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onXTtcbmNvbnN0IE5VTUJFUlMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG5MRVRURVJTLm1hcCgobGV0dGVyKSA9PiB7XG4gIE5VTUJFUlMubWFwKChudW1iZXIpID0+IHtcbiAgICBDT09SRElOQVRFUy5wdXNoKGAke2xldHRlcn0ke251bWJlcn1gKTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ09PUkRJTkFURVM7XG4iLCJpbXBvcnQgeyBHQU1FIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpY19saXN0ZW5lcnMoKSB7XG4gIGxldCBjdXJyZW50X3NoaXBfaW5kZXggPSAwO1xuICBsZXQgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gIGNvbnN0IFNISVBTID0gWydjYXJyaWVyJywgJ2JhdHRsZXNoaXAnLCAnZGVzdHJveWVyJywgJ3N1YicsICdwYXRyb2xCb2F0J107XG4gIGNvbnN0IExFTkdUSCA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgY29uc3QgTUFYUyA9IHtcbiAgICBjYXJyaWVyOiB7XG4gICAgICBob3Jpem9udGFsOiA1LFxuICAgICAgdmVydGljYWw6IDEwMiwgLy8gZlxuICAgIH0sXG4gICAgYmF0dGxlc2hpcDoge1xuICAgICAgaG9yaXpvbnRhbDogNixcbiAgICAgIHZlcnRpY2FsOiAxMDMsIC8vIGdcbiAgICB9LFxuICAgIGRlc3Ryb3llcjoge1xuICAgICAgaG9yaXpvbnRhbDogNyxcbiAgICAgIHZlcnRpY2FsOiAxMDQsIC8vIGhcbiAgICB9LFxuICAgIHN1Yjoge1xuICAgICAgaG9yaXpvbnRhbDogNyxcbiAgICAgIHZlcnRpY2FsOiAxMDQsIC8vIGhcbiAgICB9LFxuICAgIHBhdHJvbEJvYXQ6IHtcbiAgICAgIGhvcml6b250YWw6IDgsXG4gICAgICB2ZXJ0aWNhbDogMTA1LCAvLyBpXG4gICAgfSxcbiAgfTtcblxuICAvLyBjb25zdCBTVUJTRVFVRU5UX1RJTEVTID0gKGlkKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coaWQpO1xuICAvLyB9O1xuXG4gIGNvbnN0IElOQk9VTkRTX0RFVEVSTUlORVIgPSAoaWQpID0+IHtcbiAgICBsZXQgdmFsdWVfdG9fY29tcGFyZSA9ICcnO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB2YWx1ZV90b19jb21wYXJlID0gaWRbMV07XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdmFsdWVfdG9fY29tcGFyZSA9IGlkLmNoYXJDb2RlQXQoMCk7XG4gICAgfVxuICAgIGNvbnN0IE1BWCA9IE1BWFNbU0hJUFNbY3VycmVudF9zaGlwX2luZGV4XV1bb3JpZW50YXRpb25dO1xuICAgIHJldHVybiB2YWx1ZV90b19jb21wYXJlIDw9IE1BWDtcbiAgfTtcblxuICBjb25zdCBTUEFDRV9UQUtFTl9ERVRFUk1JTkVSID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKEdBTUUpO1xuICB9O1xuXG4gIGNvbnN0IE1PVVNFX0VOVEVSX0hBTkRMRVIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBJRCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICBjb25zdCBJTkJPVU5EUyA9IElOQk9VTkRTX0RFVEVSTUlORVIoSUQpO1xuICAgIGNvbnN0IFNQQUNFX1RBS0VOID0gU1BBQ0VfVEFLRU5fREVURVJNSU5FUigpO1xuICAgIC8vIGlmIHRoZSBjb29yZGluYXRlIGlzIG91dCBvZiBib3VuZHMgbWFrZSB0aGUgdGlsZSByZWRcbiAgICAvLyBpZiB0aGUgY29vcmRpbmF0ZSBpc250IG91dCBvZiBib3VuZHMsXG5cbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgncGxhY2Vfc2hpcF9ob3ZlcmVkJyk7XG4gICAgLy8gU1VCU0VRVUVOVF9USUxFUyhJRCk7XG4gIH07XG5cbiAgY29uc3QgTU9VU0VfTEVBVkVfSEFORExFUiA9ICgpID0+IHtcbiAgICBjb25zdCBIT1ZFUkVEX1RJTEVTID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYWNlX3NoaXBfaG92ZXJlZCcpXG4gICAgKTtcbiAgICBIT1ZFUkVEX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZV9zaGlwX2hvdmVyZWQnKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBNT1VTRV9DTElDS19IQU5ETEVSID0gKCkgPT4ge1xuICAgIGN1cnJlbnRfc2hpcF9pbmRleCA9IGN1cnJlbnRfc2hpcF9pbmRleCArIDE7XG4gIH07XG5cbiAgY29uc3QgS0VZX1BSRVNTX0hBTkRMRVIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBLRVkgPSBldmVudC5rZXk7XG4gICAgaWYgKEtFWSA9PT0gJyAnICYmIG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIG9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKEtFWSA9PT0gJyAnICYmIG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgVElMRVMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYWNlX3NoaXBfdGlsZScpKTtcbiAgVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgTU9VU0VfRU5URVJfSEFORExFUik7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTU9VU0VfTEVBVkVfSEFORExFUik7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIE1PVVNFX0NMSUNLX0hBTkRMRVIpO1xuICB9KTtcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIEtFWV9QUkVTU19IQU5ETEVSKTtcbn1cbiIsImltcG9ydCBDT09SRElOQVRFUyBmcm9tICcuL2Nvb3JkaW5hdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBQTEFDRV9TSElQU19DT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgQ0xBU1NFUyA9IFtcbiAgICAnYmx1ZTEnLFxuICAgICdibHVlMicsXG4gICAgJ2JsdWUzJyxcbiAgICAnYmx1ZTQnLFxuICAgICdibHVlNScsXG4gICAgJ2JsdWU2JyxcbiAgICAnYmx1ZTcnLFxuICAgICdibHVlOCcsXG4gICAgJ2JsdWU5JyxcbiAgICAnYmx1ZTEwJyxcbiAgICAnZ3JlZW4xJyxcbiAgXTtcblxuICBNQUlOLmlkID0gJ3BsYWNlX3NoaXBzX21haW4nO1xuICBQTEFDRV9TSElQU19DT05UQUlORVIuaWQgPSAncGxhY2Vfc2hpcHNfY29udGFpbmVyJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM1MDA7IGkrKykge1xuICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgncGxhY2Vfc2hpcHNfYmFja2dyb3VuZF90aWxlJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKENMQVNTRVNbUkFORE9NX05VTUJFUl0pO1xuICAgIE1BSU4uYXBwZW5kKFRJTEUpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IENPT1JESU5BVEVTW2ldO1xuICAgIFRJTEUuaW5uZXJUZXh0ID0gQ09PUkRJTkFURVNbaV07XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKCdwbGFjZV9zaGlwX3RpbGUnKTtcbiAgICBQTEFDRV9TSElQU19DT05UQUlORVIuYXBwZW5kKFRJTEUpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKE1BSU4pO1xuICBNQUlOLmFwcGVuZChQTEFDRV9TSElQU19DT05UQUlORVIpO1xufVxuIiwiaW1wb3J0IHJlbmRlcl90aWxlcyBmcm9tICcuL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzJztcbmltcG9ydCBsb2dpY19saXN0ZW5lcnMgZnJvbSAnLi9oZWxwZXJzL2xvZ2ljX2xpc3RlbmVycy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYWNlX3NoaXBzKCkge1xuICByZW5kZXJfdGlsZXMoKTtcbiAgbG9naWNfbGlzdGVuZXJzKCk7XG59XG4iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBnYW1lbG9vcCBmcm9tICcuL2NvbXBvbmVudHMvZ2FtZS9HQU1FX0xPT1AuanMnO1xuaW1wb3J0IGhvbWVwYWdlIGZyb20gJy4vY29tcG9uZW50cy91aS9ob21lcGFnZS9ob21lcGFnZS5qcyc7XG5cbmNvbnN0IEdBTUUgPSBnYW1lbG9vcCgpO1xuaG9tZXBhZ2UoKTtcblxuZXhwb3J0IHsgR0FNRSB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLW9wYWNpdHktMDA6IDE7XFxuICAtLW9wYWNpdHktMDU6IDAuOTg7XFxuICAtLW9wYWNpdHktMTA6IDAuOTY7XFxuICAtLW9wYWNpdHktMTU6IDAuOTQ7XFxuICAtLW9wYWNpdHktMjA6IDAuOTI7XFxuICAtLW9wYWNpdHktMjU6IDAuOTtcXG4gIC0tb3BhY2l0eS0zMDogMC44ODtcXG4gIC0tb3BhY2l0eS0zNTogMC44NjtcXG4gIC0tb3BhY2l0eS00MDogMC44NDtcXG4gIC0tb3BhY2l0eS00NTogMC44MjtcXG4gIC0tb3BhY2l0eS01MDogMC44O1xcbiAgLS1vcGFjaXR5LTU1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTYwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTY1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTcwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTc1OiAwLjk7XFxuICAtLW9wYWNpdHktODA6IDAuOTI7XFxuICAtLW9wYWNpdHktODU6IDAuOTQ7XFxuICAtLW9wYWNpdHktOTA6IDAuOTY7XFxuICAtLW9wYWNpdHktOTU6IDAuOTg7XFxuICAtLW9wYWNpdHktMTAwOiAxO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTAwKTtcXG4gIH1cXG5cXG4gIDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0wNSk7XFxuICB9XFxuXFxuICAxMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwKTtcXG4gIH1cXG5cXG4gIDE1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTUpO1xcbiAgfVxcblxcbiAgMjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0yMCk7XFxuICB9XFxuXFxuICAyNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTI1KTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzApO1xcbiAgfVxcblxcbiAgMzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zNSk7XFxuICB9XFxuXFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTQwKTtcXG4gIH1cXG5cXG4gIDQ1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDUpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS01MCk7XFxuICB9XFxuXFxuICA1NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTU1KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNjApO1xcbiAgfVxcblxcbiAgNjUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02NSk7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTcwKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzUpO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS04MCk7XFxuICB9XFxuXFxuICA4NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTg1KTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktOTApO1xcbiAgfVxcblxcbiAgOTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05NSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xMDApO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvYW5pbWF0b3IuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tb3BhY2l0eS0wMDogMTtcXG4gIC0tb3BhY2l0eS0wNTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDogMC45NjtcXG4gIC0tb3BhY2l0eS0xNTogMC45NDtcXG4gIC0tb3BhY2l0eS0yMDogMC45MjtcXG4gIC0tb3BhY2l0eS0yNTogMC45O1xcbiAgLS1vcGFjaXR5LTMwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTM1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTQwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTQ1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTUwOiAwLjg7XFxuICAtLW9wYWNpdHktNTU6IDAuODI7XFxuICAtLW9wYWNpdHktNjA6IDAuODQ7XFxuICAtLW9wYWNpdHktNjU6IDAuODY7XFxuICAtLW9wYWNpdHktNzA6IDAuODg7XFxuICAtLW9wYWNpdHktNzU6IDAuOTtcXG4gIC0tb3BhY2l0eS04MDogMC45MjtcXG4gIC0tb3BhY2l0eS04NTogMC45NDtcXG4gIC0tb3BhY2l0eS05MDogMC45NjtcXG4gIC0tb3BhY2l0eS05NTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDA6IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMDApO1xcbiAgfVxcblxcbiAgNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTA1KTtcXG4gIH1cXG5cXG4gIDEwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTApO1xcbiAgfVxcblxcbiAgMTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xNSk7XFxuICB9XFxuXFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTIwKTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMjUpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zMCk7XFxuICB9XFxuXFxuICAzNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTM1KTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDApO1xcbiAgfVxcblxcbiAgNDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS00NSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTUwKTtcXG4gIH1cXG5cXG4gIDU1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNTUpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02MCk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTY1KTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzApO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS03NSk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTgwKTtcXG4gIH1cXG5cXG4gIDg1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktODUpO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05MCk7XFxuICB9XFxuXFxuICA5NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTk1KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwMCk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuI2JzX2hlYWRpbmcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNDAsIDFmcik7XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuI3N0YXJ0X2J1dHRvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4uaG9tZXBlYWdlX3RpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuLndhdGVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAxNTc7XFxufVxcblxcbi5zdGFydCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnN0YXJ0X2JhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjOTcxYjtcXG59XFxuXFxuLnN0YXJ0X3RleHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjOTcxYjtcXG59XFxuLnN0YXJ0X3RleHRfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbiNic19oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQwLCAxZnIpO1xcbiAgaGVpZ2h0OiA0MGVtO1xcbiAgd2lkdGg6IDcwZW07XFxufVxcblxcbiNzdGFydF9idXR0b24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDEwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuLmhvbWVwZWFnZV90aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblxcbi53YXRlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTU3O1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zdGFydF9iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzk3MWI7XFxufVxcblxcbi5zdGFydF90ZXh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzk3MWI7XFxufVxcbi5zdGFydF90ZXh0X2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcHMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2F0ZXIuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0b3IuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaGlwX3RleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5cXG4uc2hpcF9odWxsX291dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaGlwX2h1bGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTU1NTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQyNDI7XFxufVxcblxcbi5zaGlwX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxuICBhbmltYXRpb246IG9wYWNpdHkgMC43NXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubGlnaHRfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjNmM2YzZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDY0NjtcXG59XFxuXFxuLmRhcmtfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBmMGYwZjtcXG59XFxuXFxuLnBlcmlzY29wZV9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnBlcmlzY29wZV9vbiB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnJhZGFyX29mZiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDEwMTU3O1xcbn1cXG5cXG4ucmFkYXJfb24ge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9zaGlwcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vYW5pbWF0b3IuY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmRpc3BsYXk9c3dhcCcpO1xcblxcbi5zaGlwX3RleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5cXG4uc2hpcF9odWxsX291dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaGlwX2h1bGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTU1NTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQyNDI7XFxufVxcblxcbi5zaGlwX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxuICBhbmltYXRpb246IG9wYWNpdHkgMC43NXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubGlnaHRfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjNmM2YzZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDY0NjtcXG59XFxuXFxuLmRhcmtfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBmMGYwZjtcXG59XFxuXFxuLnBlcmlzY29wZV9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnBlcmlzY29wZV9vbiB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnJhZGFyX29mZiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDEwMTU3O1xcbn1cXG5cXG4ucmFkYXJfb24ge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRvci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0td2F0ZXIxOiAjMDEwMTU3O1xcbiAgLS13YXRlcjI6ICMwNjM3NDQ7XFxufVxcblxcbi5zdXJyb3VuZGluZ193YXRlcl9kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzEzOGM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGQwZDYxO1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjJiMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE3NzU7XFxufVxcblxcbi5ncmVlbjEge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIyKTtcXG4gIG9wYWNpdHk6IDYwJTtcXG59XFxuXFxuLmJsdWUxIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxufVxcblxcbi5ibHVlMiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogOTYlO1xcbn1cXG5cXG4uYmx1ZTMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDkyJTtcXG59XFxuXFxuLmJsdWU0IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4OCU7XFxufVxcblxcbi5ibHVlNSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODQlO1xcbn1cXG5cXG4uYmx1ZTYge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuLmJsdWU3IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA3NiU7XFxufVxcbi5ibHVlOCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNzIlO1xcbn1cXG5cXG4uYmx1ZTkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDY4JTtcXG59XFxuXFxuLmJsdWUxMCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNjQlO1xcbn1cXG5cXG4uYmx1ZTEwIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy93YXRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vYW5pbWF0b3IuY3NzJztcXG5cXG46cm9vdCB7XFxuICAtLXdhdGVyMTogIzAxMDE1NztcXG4gIC0td2F0ZXIyOiAjMDYzNzQ0O1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzhjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkMGQ2MTtcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyYjE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTcxNzc1O1xcbn1cXG5cXG4uZ3JlZW4xIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMik7XFxuICBvcGFjaXR5OiA2MCU7XFxufVxcblxcbi5ibHVlMSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbn1cXG5cXG4uYmx1ZTIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDk2JTtcXG59XFxuXFxuLmJsdWUzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA5MiU7XFxufVxcblxcbi5ibHVlNCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODglO1xcbn1cXG5cXG4uYmx1ZTUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDg0JTtcXG59XFxuXFxuLmJsdWU2IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblxcbi5ibHVlNyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNzYlO1xcbn1cXG4uYmx1ZTgge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDcyJTtcXG59XFxuXFxuLmJsdWU5IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA2OCU7XFxufVxcblxcbi5ibHVlMTAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDY0JTtcXG59XFxuXFxuLmJsdWUxMCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucGxhY2Vfc2hpcHNfYmFja2dyb3VuZF90aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblxcbiNwbGFjZV9zaGlwc19tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLCAxZnIpO1xcbiAgd2lkdGg6IDcwZW07XFxuICBoZWlnaHQ6IDUwZW07XFxufVxcblxcbiNwbGFjZV9zaGlwc19jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNWVtO1xcbiAgYm90dG9tOiA1ZW07XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNDBlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxufVxcblxcbi5wbGFjZV9zaGlwX3RpbGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxufVxcblxcbi5wbGFjZV9zaGlwX2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZDogI2FjOTcxYjtcXG59XFxuXFxuLmludmFsaWRfc2hpcF9wbGFjZW1lbnQge1xcbiAgYmFja2dyb3VuZDogI2YwMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wbGFjZV9zaGlwc19iYWNrZ3JvdW5kX3RpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuI3BsYWNlX3NoaXBzX21haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNTAsIDFmcik7XFxuICB3aWR0aDogNzBlbTtcXG4gIGhlaWdodDogNTBlbTtcXG59XFxuXFxuI3BsYWNlX3NoaXBzX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDE1ZW07XFxuICBib3R0b206IDVlbTtcXG4gIGhlaWdodDogNDBlbTtcXG4gIHdpZHRoOiA0MGVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG59XFxuXFxuLnBsYWNlX3NoaXBfdGlsZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG59XFxuXFxuLnBsYWNlX3NoaXBfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kOiAjYWM5NzFiO1xcbn1cXG5cXG4uaW52YWxpZF9zaGlwX3BsYWNlbWVudCB7XFxuICBiYWNrZ3JvdW5kOiAjZjAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvaW5kZXguY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9jc3MvaW5kZXguY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIkdhbWVib2FyZCIsIlBsYXllciIsImdhbWVsb29wIiwiUExBWUVSMSIsIlBMQVlFUjIiLCJQTEFZRVIxX0dBTUVCT0FSRCIsIlBMQVlFUjJfR0FNRUJPQVJEIiwibWFwIiwiYm9hcmQiLCJwbGFjZV9zaGlwIiwiU2hpcCIsImNhcnJpZXIiLCJwb3NpdGlvbiIsInNoaXAiLCJiYXR0bGVzaGlwIiwiZGVzdHJveWVyIiwic3ViIiwicGF0cm9sQm9hdCIsImlucHV0X2Nvb3JkaW5hdGVzIiwic2hpcHMiLCJpbnB1dF9jb29yZGluYXRlIiwibWlzcyIsIldBU19ISVQiLCJpbmNsdWRlcyIsImhpdHMiLCJISVRfSU5ERVgiLCJpbmRleE9mIiwiaGl0IiwibWlzc2VzIiwiaXNfYWxsX3N1bmsiLCJhbGxfc3Vua19jYWxsIiwiaXNfc3VuayIsInNvcnQiLCJwbGF5ZXIiLCJMRVRURVJTIiwibGV0dGVyIiwiaSIsIkVycm9yIiwiQ09PUkRJTkFURSIsInJlbWFpbmluZ19tb3ZlcyIsIm1vdmVzIiwicmVjZWl2ZV9hdHRhY2siLCJjb29yZGluYXRlIiwiRklMVEVSRURfTU9WRVMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJSRU1BSU5JTkdfTU9WRVNfQ09QWSIsIlJFTUFJTklORyIsImZpbHRlciIsInJlbWFpbmluZ19tb3ZlIiwiQXJyYXkiLCJmaWxsIiwicG9zaXRpb25faGl0IiwiZXZlcnkiLCJoaXRzX2FycmF5IiwiSElUUyIsIkFOSU1BVElPTlMiLCJQRVJJU0NPUEVfU1BJTk5FUiIsIkxFRlRfVElMRSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSSUdIVF9USUxFIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidmFsdWUiLCJSQURBUl9TUElOTkVSMSIsIlJBREFSX1NQSU5ORVIyIiwiU1VCX0FOSU1BVElPTiIsInNldEludGVydmFsIiwiQk9BVDEiLCJCT0FUMiIsIklURVJBVE9SIiwiQkFUVExFU0hJUCIsIkIiLCJBIiwiVDEiLCJUMiIsIkwiLCJFIiwiUyIsIkgiLCJJIiwiUCIsImV6X2xvYWRlciIsIkVaX1RJTEVfQ09MT1JJWkVSIiwiY29sb3JfYmF0dGxlc2hpcF90aWxlcyIsIkNBUlJJRVIiLCJERVNUUk9ZRVIiLCJTVUJNQVJJTkUiLCJjb2xvcl9zaGlwX3RpbGVzIiwiYmxhY2tfb3V0bGluZSIsImh1bGwiLCJkYXJrX2dyYXkiLCJsaWdodF9ncmF5Iiwic2hpcF9saWdodCIsInN1cnJvdW5kaW5nX3dhdGVyX2RhcmsiLCJzdXJyb3VuZGluZ193YXRlcl9saWdodCIsIkMiLCJWIiwiTiIsIlNJWCIsIk5JTkUiLCJVIiwiTjIiLCJWMiIsIlkiLCJBTEwiLCJ0aWxlIiwiaW5uZXJUZXh0Iiwic3VibWFyaW5lIiwibGVmdF9wZXJpc2NvcGUiLCJyaWdodF9wZXJpc2NvcGUiLCJTVEFSVCIsImNvbG9yX3N0YXJ0X3RpbGVzIiwiYWxsIiwidGlsZV9pZCIsIlRJTEUiLCJjb2xvcl93YXRlcl90aWxlcyIsIkNMQVNTRVMiLCJXQVRFUl9USUxFUyIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiUkFORE9NX05VTUJFUiIsIm1pbiIsIm1heCIsInRhcmdldF9hcnJheSIsInB1c2giLCJpbnB1dF9hcnJheSIsImlucHV0X2NsYXNzIiwicGxhY2Vfc2hpcHMiLCJsaXN0ZW5lcnNfaGFuZGxlcnMiLCJTVEFSVF9CVVRUT04iLCJTVEFSVF9CVVRUT05fRU5URVJfSEFORExFUiIsIlNUQVJUX0JVVFRPTl9CQUNLR1JPVU5EX1RJTEVTIiwiU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMiLCJTVEFSVF9CVVRUT05fTEVBVkVfSEFORExFUiIsIlNUQVJUX0JVVFRPTl9DTElDS19IQU5ETEVSIiwiaW50ZXJ2YWwiLCJJTlRFUlZBTCIsImNsZWFySW50ZXJ2YWwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyX3RpbGVzIiwiTUFJTiIsImNyZWF0ZUVsZW1lbnQiLCJIRUFESU5HIiwiaWQiLCJhcHBlbmQiLCJib2R5IiwiY2Fycmllcl9lel9sb2FkZXIiLCJPVVRMSU5FIiwiSFVMTCIsIkRBUktfR1JBWSIsIkxJR0hUX0dSQVkiLCJTVVJST1VORElOR19XQVRFUl9EQVJLIiwiZGVzdHJveWVyX2V6X2xvYWRlciIsInMiLCJ0MSIsImEiLCJyIiwidDIiLCJSIiwibnVtYmVyIiwiaG9tZXBhZ2UiLCJDT09SRElOQVRFUyIsIk5VTUJFUlMiLCJHQU1FIiwibG9naWNfbGlzdGVuZXJzIiwiY3VycmVudF9zaGlwX2luZGV4Iiwib3JpZW50YXRpb24iLCJTSElQUyIsIkxFTkdUSCIsIk1BWFMiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJJTkJPVU5EU19ERVRFUk1JTkVSIiwidmFsdWVfdG9fY29tcGFyZSIsImNoYXJDb2RlQXQiLCJNQVgiLCJTUEFDRV9UQUtFTl9ERVRFUk1JTkVSIiwiY29uc29sZSIsImxvZyIsIk1PVVNFX0VOVEVSX0hBTkRMRVIiLCJldmVudCIsIklEIiwidGFyZ2V0IiwiSU5CT1VORFMiLCJTUEFDRV9UQUtFTiIsIk1PVVNFX0xFQVZFX0hBTkRMRVIiLCJIT1ZFUkVEX1RJTEVTIiwiTU9VU0VfQ0xJQ0tfSEFORExFUiIsIktFWV9QUkVTU19IQU5ETEVSIiwiS0VZIiwia2V5IiwiVElMRVMiLCJQTEFDRV9TSElQU19DT05UQUlORVIiXSwic291cmNlUm9vdCI6IiJ9