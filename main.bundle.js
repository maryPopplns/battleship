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
  // [PLAYER1_GAMEBOARD, PLAYER2_GAMEBOARD].map((board) => {
  //   board.place_ship('carrier', ['a0', 'a1', 'a2', 'a3', 'a4']);
  //   board.place_ship('battleship', ['b0', 'b1', 'b2', 'b3']);
  //   board.place_ship('destroyer', ['c0', 'c1', 'c2']);
  //   board.place_ship('sub', ['d0', 'd1', 'd2']);
  //   board.place_ship('patrolBoat', ['e0', 'e1']);
  // });
  //todo remove boilerplate so ships can be manually placed

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
    var ALL_TILES = SUBSEQUENT_TILES(ID);
    var ARE_SUBSEQUENT_SPACES_FREE = SPACE_TAKEN_EVALUATOR(ALL_TILES);

    if (!INBOUNDS || !ARE_SUBSEQUENT_SPACES_FREE) {
      event.target.classList.add('invalid_ship_placement');
      return;
    }

    COLOR_TILES(ALL_TILES);
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
    var ALL_TILES = SUBSEQUENT_TILES(ID);
    var ARE_SUBSEQUENT_SPACES_FREE = SPACE_TAKEN_EVALUATOR(ALL_TILES);

    if (INBOUNDS && ARE_SUBSEQUENT_SPACES_FREE && current_ship_index < 5) {
      var CURRENT_SHIP = SHIPS[current_ship_index];
      _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.PLAYER1_GAMEBOARD.place_ship(CURRENT_SHIP, ALL_TILES);
      current_ship_index = current_ship_index + 1;
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
___CSS_LOADER_EXPORT___.push([module.id, ".place_ships_background_tile:hover {\n  background: #84ff17;\n}\n\n#place_ships_main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  width: 70em;\n  height: 50em;\n}\n\n#place_ships_container {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  position: absolute;\n  left: 15em;\n  bottom: 5em;\n  height: 40em;\n  width: 40em;\n  border: 1px solid #ac971b;\n}\n\n.place_ship_tile {\n  border: 1px solid #ac971b;\n}\n\n.place_ship_hovered {\n  background: #84ff17;\n}\n\n.invalid_ship_placement {\n  background: #f00;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/place_ships/css/index.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[".place_ships_background_tile:hover {\n  background: #84ff17;\n}\n\n#place_ships_main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  width: 70em;\n  height: 50em;\n}\n\n#place_ships_container {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  position: absolute;\n  left: 15em;\n  bottom: 5em;\n  height: 40em;\n  width: 40em;\n  border: 1px solid #ac971b;\n}\n\n.place_ship_tile {\n  border: 1px solid #ac971b;\n}\n\n.place_ship_hovered {\n  background: #84ff17;\n}\n\n.invalid_ship_placement {\n  background: #f00;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFOLEVBQVdHLENBQVgsQ0FBUjtBQUVBLE1BQU1DLEVBQUUsR0FBR0gsVUFBVSxDQUFDRyxFQUF0QjtBQUNBSixFQUFBQSxxREFBUSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVNJLEVBQVQsQ0FBUjtBQUVBLE1BQU1DLEVBQUUsR0FBR0osVUFBVSxDQUFDSSxFQUF0QjtBQUNBTCxFQUFBQSxxREFBUSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVNLLEVBQVQsQ0FBUjtBQUVBLE1BQU1DLENBQUMsR0FBR0wsVUFBVSxDQUFDSyxDQUFyQjtBQUNBTixFQUFBQSxxREFBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVdNLENBQVgsQ0FBUjtBQUVBLE1BQU1DLENBQUMsR0FBR04sVUFBVSxDQUFDTSxDQUFyQjtBQUNBUCxFQUFBQSxxREFBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVdPLENBQVgsQ0FBUjtBQUNBUCxFQUFBQSxxREFBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVdPLENBQVgsQ0FBUjtBQUNBUCxFQUFBQSxxREFBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVdPLENBQVgsQ0FBUjtBQUVBLE1BQU1DLENBQUMsR0FBR1AsVUFBVSxDQUFDTyxDQUFyQjtBQUNBUixFQUFBQSxxREFBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVdRLENBQVgsQ0FBUjtBQUNBUixFQUFBQSxxREFBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVdRLENBQVgsQ0FBUjtBQUNBUixFQUFBQSxxREFBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVdRLENBQVgsQ0FBUjtBQUVBLE1BQU1DLENBQUMsR0FBR1IsVUFBVSxDQUFDUSxDQUFyQjtBQUNBVCxFQUFBQSxxREFBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVdTLENBQVgsQ0FBUjtBQUVBLE1BQU1DLENBQUMsR0FBR1QsVUFBVSxDQUFDUyxDQUFyQjtBQUNBVixFQUFBQSxxREFBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVdVLENBQVgsQ0FBUjtBQUNBVixFQUFBQSxx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VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9HQU1FX0xPT1AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWUvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvYmF0dGxlc2hpcF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9jb2xvcl9iYXR0bGVzaGlwX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2NvbG9yX3NoaXBfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvY29sb3Jfc3RhcnRfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvY29sb3Jfd2F0ZXJfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9saXN0ZW5lcnNfaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL3NoaXBfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvc3RhcnRfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hvbWVwYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9oZWxwZXJzL2Nvb3JkaW5hdGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9oZWxwZXJzL2xvZ2ljX2xpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvaGVscGVycy9yZW5kZXJfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL3BsYWNlX3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9hbmltYXRvci5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9nbG9iYWwuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3Mvc2hpcHMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3Mvd2F0ZXIuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVsb29wKCkge1xuICBjb25zdCBQTEFZRVIxID0gbmV3IFBsYXllcignaHVtYW4nKTtcbiAgY29uc3QgUExBWUVSMiA9IG5ldyBQbGF5ZXIoJ2FpJyk7XG4gIGNvbnN0IFBMQVlFUjFfR0FNRUJPQVJEID0gbmV3IEdhbWVib2FyZCgpO1xuICBjb25zdCBQTEFZRVIyX0dBTUVCT0FSRCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICAvL3RvZG8gcmVtb3ZlIGJvaWxlcnBsYXRlIHNvIHNoaXBzIGNhbiBiZSBtYW51YWxseSBwbGFjZWRcbiAgLy8gW1BMQVlFUjFfR0FNRUJPQVJELCBQTEFZRVIyX0dBTUVCT0FSRF0ubWFwKChib2FyZCkgPT4ge1xuICAvLyAgIGJvYXJkLnBsYWNlX3NoaXAoJ2NhcnJpZXInLCBbJ2EwJywgJ2ExJywgJ2EyJywgJ2EzJywgJ2E0J10pO1xuICAvLyAgIGJvYXJkLnBsYWNlX3NoaXAoJ2JhdHRsZXNoaXAnLCBbJ2IwJywgJ2IxJywgJ2IyJywgJ2IzJ10pO1xuICAvLyAgIGJvYXJkLnBsYWNlX3NoaXAoJ2Rlc3Ryb3llcicsIFsnYzAnLCAnYzEnLCAnYzInXSk7XG4gIC8vICAgYm9hcmQucGxhY2Vfc2hpcCgnc3ViJywgWydkMCcsICdkMScsICdkMiddKTtcbiAgLy8gICBib2FyZC5wbGFjZV9zaGlwKCdwYXRyb2xCb2F0JywgWydlMCcsICdlMSddKTtcbiAgLy8gfSk7XG4gIC8vdG9kbyByZW1vdmUgYm9pbGVycGxhdGUgc28gc2hpcHMgY2FuIGJlIG1hbnVhbGx5IHBsYWNlZFxuXG4gIHJldHVybiB7IFBMQVlFUjEsIFBMQVlFUjIsIFBMQVlFUjFfR0FNRUJPQVJELCBQTEFZRVIyX0dBTUVCT0FSRCB9O1xufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgc2hpcHMgPSB7XG4gICAgY2Fycmllcjoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoNSksXG4gICAgfSxcbiAgICBiYXR0bGVzaGlwOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCg0KSxcbiAgICB9LFxuICAgIGRlc3Ryb3llcjoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoMyksXG4gICAgfSxcbiAgICBzdWI6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDMpLFxuICAgIH0sXG4gICAgcGF0cm9sQm9hdDoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoMiksXG4gICAgfSxcbiAgfTtcbiAgaGl0cyA9IFtdO1xuICBtaXNzZXMgPSBbXTtcblxuICBwbGFjZV9zaGlwKHNoaXAsIGlucHV0X2Nvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5zaGlwc1tzaGlwXS5wb3NpdGlvbiA9IGlucHV0X2Nvb3JkaW5hdGVzO1xuICB9XG4gICNtaXNzX3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIHJldHVybiBbLi4udGhpcy5taXNzZXMsIGlucHV0X2Nvb3JkaW5hdGVdLnNvcnQoKTtcbiAgfVxuICAjaGl0X3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIHJldHVybiBbLi4udGhpcy5oaXRzLCBpbnB1dF9jb29yZGluYXRlXS5zb3J0KCk7XG4gIH1cbiAgcmVjZWl2ZV9hdHRhY2soaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIGxldCBtaXNzID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgIGNvbnN0IFdBU19ISVQgPSB0aGlzLnNoaXBzW3NoaXBdLnBvc2l0aW9uLmluY2x1ZGVzKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgICAgaWYgKFdBU19ISVQpIHtcbiAgICAgICAgdGhpcy5oaXRzID0gdGhpcy4jaGl0X3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSk7XG4gICAgICAgIGNvbnN0IEhJVF9JTkRFWCA9IHRoaXMuc2hpcHNbc2hpcF0ucG9zaXRpb24uaW5kZXhPZihpbnB1dF9jb29yZGluYXRlKTtcbiAgICAgICAgdGhpcy5zaGlwc1tzaGlwXS5zaGlwLmhpdChISVRfSU5ERVgpO1xuICAgICAgICBtaXNzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtaXNzKSB7XG4gICAgICB0aGlzLm1pc3NlcyA9IHRoaXMuI21pc3NfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKTtcbiAgICB9XG4gIH1cbiAgYWxsX3N1bmsoKSB7XG4gICAgbGV0IGlzX2FsbF9zdW5rID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgIGNvbnN0IGFsbF9zdW5rX2NhbGwgPSB0aGlzLnNoaXBzW3NoaXBdLnNoaXAuaXNfc3VuaygpO1xuICAgICAgaWYgKGFsbF9zdW5rX2NhbGwgPT09IGZhbHNlKSB7XG4gICAgICAgIGlzX2FsbF9zdW5rID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNfYWxsX3N1bms7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHBsYXllcikge1xuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICB9XG4gIG1vdmVzID0gW107XG4gIHJlbWFpbmluZ19tb3ZlcyA9IFtdO1xuXG4gICNyZW1haW5pbmdfbW92ZXNfcmVkdWNlcihjb29yZGluYXRlKSB7XG4gICAgdGhpcy5yZW1haW5pbmdfbW92ZXMgPSBbLi4udGhpcy5yZW1haW5pbmdfbW92ZXMsIGNvb3JkaW5hdGVdO1xuICB9XG4gICNmaWxsX3JlbWFpbmluZ19tb3ZlcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgTEVUVEVSUyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJywgJ2knLCAnaiddO1xuICAgIExFVFRFUlMubWFwKChsZXR0ZXIpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICB0aGlzLiNyZW1haW5pbmdfbW92ZXNfcmVkdWNlcihgJHtsZXR0ZXJ9JHtpfWApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSgpO1xuICAjYWlfbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdfbW92ZXNbXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJlbWFpbmluZ19tb3Zlcy5sZW5ndGgpXG4gICAgXTtcbiAgfVxuICAjZmlsdGVyX3JlbWFpbmluZ19tb3Zlcyhjb29yZGluYXRlKSB7XG4gICAgY29uc3QgUkVNQUlOSU5HX01PVkVTX0NPUFkgPSBbLi4udGhpcy5yZW1haW5pbmdfbW92ZXNdO1xuICAgIGNvbnN0IFJFTUFJTklORyA9IFJFTUFJTklOR19NT1ZFU19DT1BZLmZpbHRlcigocmVtYWluaW5nX21vdmUpID0+IHtcbiAgICAgIHJldHVybiByZW1haW5pbmdfbW92ZSAhPT0gY29vcmRpbmF0ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gUkVNQUlOSU5HO1xuICB9XG4gICNhdHRhY2tfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLm1vdmVzLCBpbnB1dF9jb29yZGluYXRlXTtcbiAgfVxuICBhaV9hdHRhY2soYm9hcmQpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXIgIT09ICdhaScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxheWVyIG5lZWRzIHRvIGJlIEFJJyk7XG4gICAgfVxuICAgIGNvbnN0IENPT1JESU5BVEUgPSB0aGlzLiNhaV9tb3ZlKCk7XG4gICAgdGhpcy5yZW1haW5pbmdfbW92ZXMgPSB0aGlzLiNmaWx0ZXJfcmVtYWluaW5nX21vdmVzKENPT1JESU5BVEUpO1xuICAgIHRoaXMubW92ZXMgPSB0aGlzLiNhdHRhY2tfcmVkdWNlcihDT09SRElOQVRFKTtcbiAgICBib2FyZC5yZWNlaXZlX2F0dGFjayhDT09SRElOQVRFKTtcbiAgICByZXR1cm4gQ09PUkRJTkFURTtcbiAgfVxuICBodW1hbl9hdHRhY2soYm9hcmQsIGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXIgIT09ICdodW1hbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxheWVyIG5lZWRzIHRvIGJlIGEgaHVtYW4nKTtcbiAgICB9XG4gICAgY29uc3QgRklMVEVSRURfTU9WRVMgPSB0aGlzLiNmaWx0ZXJfcmVtYWluaW5nX21vdmVzKGNvb3JkaW5hdGUpO1xuICAgIHRoaXMucmVtYWluaW5nX21vdmVzID0gRklMVEVSRURfTU9WRVM7XG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMuI2F0dGFja19yZWR1Y2VyKGNvb3JkaW5hdGUpO1xuICAgIGJvYXJkLnJlY2VpdmVfYXR0YWNrKGNvb3JkaW5hdGUpO1xuICAgIHJldHVybiBjb29yZGluYXRlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5oaXRzID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSk7XG4gIH1cblxuICAjaGl0X3JlZHVjZXIoaGl0c19hcnJheSwgcG9zaXRpb25faGl0KSB7XG4gICAgY29uc3QgSElUUyA9IFsuLi5oaXRzX2FycmF5XTtcbiAgICBISVRTW3Bvc2l0aW9uX2hpdF0gPSB0cnVlO1xuICAgIHJldHVybiBISVRTO1xuICB9XG4gIGhpdChwb3NpdGlvbl9oaXQpIHtcbiAgICB0aGlzLmhpdHMgPSB0aGlzLiNoaXRfcmVkdWNlcih0aGlzLmhpdHMsIHBvc2l0aW9uX2hpdCk7XG4gIH1cbiAgaXNfc3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRzLmV2ZXJ5KChwb3NpdGlvbikgPT4gcG9zaXRpb24gPT09IHRydWUpO1xuICB9XG59XG4iLCJjb25zdCBBTklNQVRJT05TID0gKCgpID0+IHtcbiAgY29uc3QgUEVSSVNDT1BFX1NQSU5ORVIgPSAoKSA9PiB7XG4gICAgY29uc3QgTEVGVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoNzU5KTtcbiAgICBjb25zdCBSSUdIVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoNzYxKTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29mZicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29uJyk7XG4gICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIGlmIChMRUZUX1RJTEUuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdvbicpKSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb24nKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdwZXJpc2NvcGVfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncGVyaXNjb3BlX29mZicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3BlcmlzY29wZV9vZmYnKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdwZXJpc2NvcGVfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3BlcmlzY29wZV9vbicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBSQURBUl9TUElOTkVSMSA9ICgpID0+IHtcbiAgICBjb25zdCBMRUZUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3MTQpO1xuICAgIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3MTYpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBpZiAoTEVGVF9USUxFLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnb24nKSkge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb2ZmJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFJBREFSX1NQSU5ORVIyID0gKCkgPT4ge1xuICAgIGNvbnN0IExFRlRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDEwOTcpO1xuICAgIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxMDk5KTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgaWYgKExFRlRfVElMRS5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ29uJykpIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29uJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29mZicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBTVUJfQU5JTUFUSU9OID0gc2V0SW50ZXJ2YWwoUEVSSVNDT1BFX1NQSU5ORVIsIDEwMDApO1xuICBjb25zdCBCT0FUMSA9IHNldEludGVydmFsKFJBREFSX1NQSU5ORVIxLCAxMDAwKTtcbiAgY29uc3QgQk9BVDIgPSBzZXRJbnRlcnZhbChSQURBUl9TUElOTkVSMiwgMTUwMCk7XG5cbiAgcmV0dXJuIHsgU1VCX0FOSU1BVElPTiwgQk9BVDEsIEJPQVQyIH07XG59KSgpO1xuXG5leHBvcnQgeyBBTklNQVRJT05TIH07XG4iLCJpbXBvcnQgeyBJVEVSQVRPUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmNvbnN0IEJBVFRMRVNISVAgPSB7XG4gIEI6IFsxNTAsIDE1NCwgMjIwLCAyMjQsIDM2MCwgMzY0LCA0MzAsIDQzNiwgNDM0XSxcbiAgQTogWzE1NiwgMTU5LCAyMjYsIDIyOSwgMzY2LCAzNjksIDQzNiwgNDM5LCA1MDYsIDUwOV0sXG4gIFQxOiBbMTYyLCAxNjMsIDIzMiwgMjMzLCAzMDIsIDMwMywgMzcyLCAzNzMsIDQ0MiwgNDQzLCA1MTIsIDUxM10sXG4gIFQyOiBbMTY3LCAxNjgsIDIzNywgMjM4LCAzMDcsIDMwOCwgMzc3LCAzNzgsIDQ0NywgNDQ4LCA1MTcsIDUxOF0sXG4gIEw6IFsxMDEsIDE3MSwgMjQxLCAzMTEsIDM4MSwgNDUxXSxcbiAgRTogWzE3NiwgMjQ2LCAzODYsIDQ1Nl0sXG4gIFM6IFsxODEsIDI1MSwgMzk0LCA0NjRdLFxuICBIOiBbMTE2LCAxMTksIDE4NiwgMTg5LCAyNTYsIDI1OSwgMzk2LCAzOTksIDQ2NiwgNDY5LCA1MzYsIDUzOV0sXG4gIEk6IFsxOTIsIDE5MywgMjYyLCAyNjMsIDMzMiwgMzMzLCA0MDIsIDQwMywgNDcyLCA0NzNdLFxuICBQOiBbMTk2LCAxOTksIDI2NiwgMjY5LCA0MDYsIDQ3NiwgNTQ2XSxcbn07XG5cbihmdW5jdGlvbiBlel9sb2FkZXIoKSB7XG4gIGNvbnN0IEIgPSBCQVRUTEVTSElQLkI7XG4gIElURVJBVE9SKDgwLCA4NCwgQik7XG4gIElURVJBVE9SKDI5MCwgMjk0LCBCKTtcbiAgSVRFUkFUT1IoNTAwLCA1MDQsIEIpO1xuXG4gIGNvbnN0IEEgPSBCQVRUTEVTSElQLkE7XG4gIElURVJBVE9SKDg2LCA4OSwgQSk7XG4gIElURVJBVE9SKDI5NiwgMjk5LCBBKTtcblxuICBjb25zdCBUMSA9IEJBVFRMRVNISVAuVDE7XG4gIElURVJBVE9SKDkxLCA5NCwgVDEpO1xuXG4gIGNvbnN0IFQyID0gQkFUVExFU0hJUC5UMjtcbiAgSVRFUkFUT1IoOTYsIDk5LCBUMik7XG5cbiAgY29uc3QgTCA9IEJBVFRMRVNISVAuTDtcbiAgSVRFUkFUT1IoNTIxLCA1MjQsIEwpO1xuXG4gIGNvbnN0IEUgPSBCQVRUTEVTSElQLkU7XG4gIElURVJBVE9SKDEwNiwgMTA5LCBFKTtcbiAgSVRFUkFUT1IoMzE2LCAzMTgsIEUpO1xuICBJVEVSQVRPUig1MjYsIDUyOSwgRSk7XG5cbiAgY29uc3QgUyA9IEJBVFRMRVNISVAuUztcbiAgSVRFUkFUT1IoMTExLCAxMTQsIFMpO1xuICBJVEVSQVRPUigzMjEsIDMyNCwgUyk7XG4gIElURVJBVE9SKDUzMSwgNTM0LCBTKTtcblxuICBjb25zdCBIID0gQkFUVExFU0hJUC5IO1xuICBJVEVSQVRPUigzMjYsIDMyOSwgSCk7XG5cbiAgY29uc3QgSSA9IEJBVFRMRVNISVAuSTtcbiAgSVRFUkFUT1IoMTIxLCAxMjQsIEkpO1xuICBJVEVSQVRPUig1NDEsIDU0NCwgSSk7XG5cbiAgY29uc3QgUCA9IEJBVFRMRVNISVAuUDtcbiAgSVRFUkFUT1IoMTI2LCAxMjksIFApO1xuICBJVEVSQVRPUigzMzYsIDMzOSwgUCk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBCQVRUTEVTSElQO1xuIiwiaW1wb3J0IHsgRVpfVElMRV9DT0xPUklaRVIgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IEJBVFRMRVNISVAgZnJvbSAnLi9iYXR0bGVzaGlwX3RpbGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3JfYmF0dGxlc2hpcF90aWxlcygpIHtcbiAgZm9yIChsZXQgbGV0dGVyIGluIEJBVFRMRVNISVApIHtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihCQVRUTEVTSElQW2xldHRlcl0sICd0aXRsZScpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDQVJSSUVSLCBERVNUUk9ZRVIsIFNVQk1BUklORSB9IGZyb20gJy4vc2hpcF90aWxlcy5qcyc7XG5pbXBvcnQgeyBFWl9USUxFX0NPTE9SSVpFUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX3NoaXBfdGlsZXMoKSB7XG4gIChmdW5jdGlvbiBjYXJyaWVyKCkge1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuYmxhY2tfb3V0bGluZSwgJ3NoaXBfaHVsbF9vdXRsaW5lJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5odWxsLCAnc2hpcF9odWxsJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5kYXJrX2dyYXksICdkYXJrX2dyYXknKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLmxpZ2h0X2dyYXksICdsaWdodF9ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5zaGlwX2xpZ2h0LCAnc2hpcF9saWdodCcpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyaywgJ3N1cnJvdW5kaW5nX3dhdGVyX2RhcmsnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihcbiAgICAgIENBUlJJRVIuc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQsXG4gICAgICAnc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQnXG4gICAgKTtcblxuICAgIGNvbnN0IEMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNzk1KTtcbiAgICBjb25zdCBWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTc5Nik7XG4gICAgY29uc3QgTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE3OTcpO1xuICAgIGNvbnN0IFNJWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE3OTkpO1xuICAgIGNvbnN0IE5JTkUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxODAwKTtcbiAgICBjb25zdCBVID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM0OSk7XG4gICAgY29uc3QgUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTApO1xuICAgIGNvbnN0IE4yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM1Mik7XG4gICAgY29uc3QgQSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTMpO1xuICAgIGNvbnN0IFYyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM1NCk7XG4gICAgY29uc3QgWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTUpO1xuICAgIGNvbnN0IEFMTCA9IFtDLCBWLCBOLCBTSVgsIE5JTkUsIFUsIFMsIE4yLCBBLCBWMiwgWV07XG4gICAgQUxMLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwX3RleHQnKTtcbiAgICB9KTtcbiAgICBDLmlubmVyVGV4dCA9ICdDJztcbiAgICBWLmlubmVyVGV4dCA9ICdWJztcbiAgICBOLmlubmVyVGV4dCA9ICdOJztcbiAgICBTSVguaW5uZXJUZXh0ID0gJzYnO1xuICAgIE5JTkUuaW5uZXJUZXh0ID0gJzknO1xuICAgIFUuaW5uZXJUZXh0ID0gJ1UnO1xuICAgIFMuaW5uZXJUZXh0ID0gJ1MnO1xuICAgIE4yLmlubmVyVGV4dCA9ICdOJztcbiAgICBBLmlubmVyVGV4dCA9ICdBJztcbiAgICBWMi5pbm5lclRleHQgPSAnVic7XG4gICAgWS5pbm5lclRleHQgPSAnWSc7XG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uIGRlc3Ryb3llcigpIHtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuYmxhY2tfb3V0bGluZSwgJ3NoaXBfaHVsbF9vdXRsaW5lJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLmh1bGwsICdzaGlwX2h1bGwnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIubGlnaHRfZ3JheSwgJ2xpZ2h0X2dyYXknKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuZGFya19ncmF5LCAnZGFya19ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLnNoaXBfbGlnaHQsICdzaGlwX2xpZ2h0Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoXG4gICAgICBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyayxcbiAgICAgICdzdXJyb3VuZGluZ193YXRlcl9kYXJrJ1xuICAgICk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoXG4gICAgICBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQsXG4gICAgICAnc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQnXG4gICAgKTtcblxuICAgIGNvbnN0IFUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTUwKTtcbiAgICBjb25zdCBTID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1MSk7XG4gICAgY29uc3QgTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTMpO1xuICAgIGNvbnN0IEEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTU0KTtcbiAgICBjb25zdCBWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1NSk7XG4gICAgY29uc3QgWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTYpO1xuICAgIGNvbnN0IEFMTCA9IFtVLCBTLCBOLCBBLCBWLCBZXTtcbiAgICBBTEwubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3NoaXBfdGV4dCcpO1xuICAgIH0pO1xuICAgIFUuaW5uZXJUZXh0ID0gJ1UnO1xuICAgIFMuaW5uZXJUZXh0ID0gJ1MnO1xuICAgIE4uaW5uZXJUZXh0ID0gJ04nO1xuICAgIEEuaW5uZXJUZXh0ID0gJ0EnO1xuICAgIFYuaW5uZXJUZXh0ID0gJ1YnO1xuICAgIFkuaW5uZXJUZXh0ID0gJ1knO1xuICB9KSgpO1xuXG4gIChmdW5jdGlvbiBzdWJtYXJpbmUoKSB7XG4gICAgLy8gRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLmh1bGwsICdzdWInKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihTVUJNQVJJTkUuZGFya19ncmF5LCAnZGFya19ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLmxlZnRfcGVyaXNjb3BlLCAncGVyaXNjb3BlX29uJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLnJpZ2h0X3BlcmlzY29wZSwgJ3BlcmlzY29wZV9vZmYnKTtcbiAgfSkoKTtcbn1cbiIsImltcG9ydCBTVEFSVCBmcm9tICcuL3N0YXJ0X3RpbGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3Jfc3RhcnRfdGlsZXMoKSB7XG4gIGNvbnN0IEFMTCA9IFNUQVJULmFsbDtcbiAgQUxMLm1hcCgodGlsZV9pZCkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RhcnRfJHt0aWxlX2lkfWApO1xuICAgIFRJTEUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfYmFja2dyb3VuZCcpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfdGV4dCcpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX3dhdGVyX3RpbGVzKCkge1xuICBjb25zdCBDTEFTU0VTID0gW1xuICAgICdibHVlMScsXG4gICAgJ2JsdWUyJyxcbiAgICAnYmx1ZTMnLFxuICAgICdibHVlNCcsXG4gICAgJ2JsdWU1JyxcbiAgICAnYmx1ZTYnLFxuICAgICdibHVlNycsXG4gICAgJ2JsdWU4JyxcbiAgICAnYmx1ZTknLFxuICAgICdibHVlMTAnLFxuICAgICdncmVlbjEnLFxuICBdO1xuICBjb25zdCBXQVRFUl9USUxFUyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2F0ZXInKSk7XG4gIFdBVEVSX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKENMQVNTRVNbUkFORE9NX05VTUJFUl0pO1xuICB9KTtcbn1cbiIsImNvbnN0IElURVJBVE9SID0gKG1pbiwgbWF4LCB0YXJnZXRfYXJyYXkpID0+IHtcbiAgZm9yIChsZXQgaSA9IG1pbjsgaSA8IG1heCArIDE7IGkrKykge1xuICAgIHRhcmdldF9hcnJheS5wdXNoKGkpO1xuICB9XG59O1xuXG5jb25zdCBFWl9USUxFX0NPTE9SSVpFUiA9IChpbnB1dF9hcnJheSwgaW5wdXRfY2xhc3MpID0+IHtcbiAgaW5wdXRfYXJyYXkubWFwKCh0aWxlX2lkKSA9PiB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpbGVfaWQpO1xuICAgIFRJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoaW5wdXRfY2xhc3MpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IElURVJBVE9SLCBFWl9USUxFX0NPTE9SSVpFUiB9O1xuIiwiaW1wb3J0IHsgQU5JTUFUSU9OUyB9IGZyb20gJy4vYW5pbWF0aW9ucy5qcyc7XG5pbXBvcnQgcGxhY2Vfc2hpcHMgZnJvbSAnLi4vLi4vcGxhY2Vfc2hpcHMvcGxhY2Vfc2hpcHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0ZW5lcnNfaGFuZGxlcnMoKSB7XG4gIGNvbnN0IFNUQVJUX0JVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydF9idXR0b24nKTtcblxuICBjb25zdCBTVEFSVF9CVVRUT05fRU5URVJfSEFORExFUiA9ICgpID0+IHtcbiAgICBjb25zdCBTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydF9iYWNrZ3JvdW5kJylcbiAgICApO1xuICAgIFNUQVJUX0JVVFRPTl9CQUNLR1JPVU5EX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQnKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfYmFja2dyb3VuZCcpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRfdGV4dCcpXG4gICAgKTtcbiAgICBTVEFSVF9CVVRUT05fVEVYVF9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfdGV4dF9ob3ZlcmVkJyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X3RleHQnKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBTVEFSVF9CVVRUT05fTEVBVkVfSEFORExFUiA9ICgpID0+IHtcbiAgICBjb25zdCBTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQnKVxuICAgICk7XG4gICAgU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkRfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0X2JhY2tncm91bmQnKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkJyk7XG4gICAgfSk7XG4gICAgY29uc3QgU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRfdGV4dF9ob3ZlcmVkJylcbiAgICApO1xuICAgIFNUQVJUX0JVVFRPTl9URVhUX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdGFydF90ZXh0Jyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X3RleHRfaG92ZXJlZCcpO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBTVEFSVF9CVVRUT05fQ0xJQ0tfSEFORExFUiA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpbnRlcnZhbCBpbiBBTklNQVRJT05TKSB7XG4gICAgICBjb25zdCBJTlRFUlZBTCA9IEFOSU1BVElPTlNbaW50ZXJ2YWxdO1xuICAgICAgY2xlYXJJbnRlcnZhbChJTlRFUlZBTCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYW5kaW5nX3BhZ2UnKS5yZW1vdmUoKTtcbiAgICBwbGFjZV9zaGlwcygpO1xuICB9O1xuXG4gIFNUQVJUX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU1RBUlRfQlVUVE9OX0VOVEVSX0hBTkRMRVIpO1xuICBTVEFSVF9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFNUQVJUX0JVVFRPTl9MRUFWRV9IQU5ETEVSKTtcbiAgU1RBUlRfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgU1RBUlRfQlVUVE9OX0NMSUNLX0hBTkRMRVIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBIRUFESU5HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IFNUQVJUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIE1BSU4uaWQgPSAnbGFuZGluZ19wYWdlJztcbiAgSEVBRElORy5pZCA9ICdic19oZWFkaW5nJztcbiAgU1RBUlQuaWQgPSAnc3RhcnRfYnV0dG9uJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyODAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IGk7XG4gICAgVElMRS5jbGFzc0xpc3QgPSAnaG9tZXBlYWdlX3RpbGUgd2F0ZXInO1xuICAgIEhFQURJTkcuYXBwZW5kKFRJTEUpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IGBzdGFydF8ke2l9YDtcbiAgICBUSUxFLmNsYXNzTGlzdCA9ICd0aWxlIHN0YXJ0IHN0YXJ0X2JhY2tncm91bmQnO1xuICAgIFNUQVJULmFwcGVuZChUSUxFKTtcbiAgfVxuICBNQUlOLmFwcGVuZChIRUFESU5HKTtcbiAgTUFJTi5hcHBlbmQoU1RBUlQpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChNQUlOKTtcbn1cbiIsImltcG9ydCB7IElURVJBVE9SIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY29uc3QgQ0FSUklFUiA9IHtcbiAgYmxhY2tfb3V0bGluZTogW1xuICAgIDE0NDYsIDE0NTAsIDE1MTYsIDE1MjAsIDE1ODYsIDE1OTAsIDE3MjMsIDE3MzMsIDE4MDMsIDE4NTksIDE4NzMsIDE4NzcsXG4gICAgMTkyOCwgMTk0MywgMTk0NiwgMTk0OCwgMTk1NSwgMTk1NiwgMTk4MiwgMTk4MywgMTk4NywgMTk4OCwgMTk5MiwgMTk5MyxcbiAgICAxOTk4LCAyMDEzLCAyMDI2LCAyMDUyLCAyMDU0LCAyMDU1LCAyMDU3LCAyMDU5LCAyMDYwLCAyMDYyLCAyMDY0LCAyMDY1LFxuICAgIDIwNjgsIDIwODMsIDIwODUsIDIwODksIDIwOTEsIDIwOTQsIDIwOTUsIDIxMjMsIDIxMjUsIDIxMjgsIDIxMzAsIDIxMzMsXG4gICAgMjEzNSwgMjEzOCwgMjE1MywgMjE1NSwgMjE1OSwgMjE2MSwgMjE2NSwgMjI2MCwgMjI2MSwgMjI2MiwgMjMwOSwgMjMzMixcbiAgICAyMzMzLCAyMzM0LCAyMzc5LCAyNDA0LCAyNDQ4LCAyNDc1LCAyNTE3LCAyNTQ2LCAyNTg2LCAyNjE3LCAyNjU2LCAyNjg3LFxuICAgIDI3MjYsXG4gIF0sXG4gIGh1bGw6IFtcbiAgICAxNTE5LCAxOTM5LCAxOTQwLCAyMDc5LCAyMDgwLCAyNjg4LCAyNjg5LCAyNjkyLCAyNjkzLCAyNjk2LCAyNjk3LCAyNzAwLFxuICAgIDI3MDEsIDI3MDQsIDI3MDUsIDI3MDgsIDI3MDksIDI3MTIsIDI3MTMsIDI3MTYsIDI3MTcsIDI3MjAsIDI3MjEsIDI3MjQsXG4gICAgMjcyNSxcbiAgXSxcbiAgZGFya19ncmF5OiBbXG4gICAgMTE2OCwgMTIzOCwgMTMwOCwgMTUxNywgMTUxOCwgMTkyOSwgMTkzMCwgMTk0MSwgMTk0MiwgMTk0NywgMjAyNSwgMjA1MyxcbiAgICAyMDU4LCAyMDYzLCAyMDY5LCAyMDcwLCAyMDgxLCAyMDgyLCAyMTI0LCAyMTI5LCAyMTM0LCAyMDkyLCAyMDkzLFxuICBdLFxuICBsaWdodF9ncmF5OiBbMTA5NywgMTA5OV0sXG4gIHNoaXBfbGlnaHQ6IFsxMDk4XSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfZGFyazogW1xuICAgIDI1NDUsIDI2MTYsIDI2ODYsIDI2OTAsIDI2OTEsIDI2OTQsIDI2OTUsIDI2OTgsIDI2OTksIDI3MDIsIDI3MDMsIDI3MDYsXG4gICAgMjcwNywgMjcxMCwgMjcxMSwgMjcxNCwgMjcxNSwgMjcxOCwgMjcxOSwgMjcyMiwgMjcyMywgMjU4NywgMjY1NywgMjcyNyxcbiAgICAyNDQ5LCAyNTE4LCAyNTE5LCAyNTg4LCAyNjU4LFxuICBdLFxuICBzdXJyb3VuZGluZ193YXRlcl9saWdodDogW1xuICAgIDI1ODksIDI2MTUsIDI2NTksIDI2ODQsIDI2ODUsIDI3MjgsIDI3MjksIDI3NTMsIDI3NTQsIDI3NTUsIDI3OTgsIDI3OTksXG4gIF0sXG59O1xuXG5jb25zdCBERVNUUk9ZRVIgPSB7XG4gIGJsYWNrX291dGxpbmU6IFtcbiAgICAxMTk0LCAxMTk4LCAxMjExLCAxMjY1LCAxMjY5LCAxMjgwLCAxNDc0LCAxNDkxLCAxNDkyLCAxNTQ1LCAxNTYxLCAxNjE2LFxuICAgIDE2MzEsIDE2ODcsIDE3MDEsXG4gIF0sXG4gIGh1bGw6IFsxNjg4LCAxNjkxLCAxNjkyLCAxNjk1LCAxNjk2LCAxNjk5LCAxNzAwXSxcbiAgZGFya19ncmF5OiBbNzg1LCA4NTUsIDkyNSwgOTk1LCAxMjY2LCAxMjcwLCAxMjczLCAxMjc0LCAxMjc2LCAxMjc5XSxcbiAgbGlnaHRfZ3JheTogWzcxNCwgNzE2LCAxMTMzLCAxMTM3LCAxMjcyLCAxMjc1LCAxMjc3XSxcbiAgc2hpcF9saWdodDogWzcxNV0sXG4gIHN1cnJvdW5kaW5nX3dhdGVyX2Rhcms6IFsxNjg5LCAxNjkwLCAxNjkzLCAxNjk0LCAxNjk3LCAxNjk4XSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQ6IFtcbiAgICAxNjMyLCAxNjg1LCAxNjg2LCAxNzAyLCAxNzAzLCAxNzU0LCAxNzU1LCAxNzczLCAxNzc0LFxuICBdLFxufTtcblxuY29uc3QgU1VCTUFSSU5FID0ge1xuICBodWxsOiBbXSxcbiAgZGFya19ncmF5OiBbNzYwLCA4MzAsIDkwMF0sXG4gIGxlZnRfcGVyaXNjb3BlOiBbNzU5XSxcbiAgcmlnaHRfcGVyaXNjb3BlOiBbNzYxXSxcbn07XG5cbihmdW5jdGlvbiBjYXJyaWVyX2V6X2xvYWRlcigpIHtcbiAgY29uc3QgT1VUTElORSA9IENBUlJJRVIuYmxhY2tfb3V0bGluZTtcbiAgSVRFUkFUT1IoMTM3NiwgMTM4MCwgT1VUTElORSk7XG4gIElURVJBVE9SKDE2NTMsIDE2NjMsIE9VVExJTkUpO1xuICBJVEVSQVRPUigxNzkwLCAxNzkzLCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMjAxNSwgMjAxOSwgT1VUTElORSk7XG4gIElURVJBVE9SKDIwMjIsIDIwMjQsIE9VVExJTkUpO1xuICBJVEVSQVRPUigyMTkwLCAyMjM5LCBPVVRMSU5FKTtcblxuICBjb25zdCBIVUxMID0gQ0FSUklFUi5odWxsO1xuICBJVEVSQVRPUigxNDQ3LCAxNDQ5LCBIVUxMKTtcbiAgSVRFUkFUT1IoMTU4NywgMTU4OSwgSFVMTCk7XG4gIElURVJBVE9SKDE3MjQsIDE3MzIsIEhVTEwpO1xuICBJVEVSQVRPUigxNzk0LCAxODAyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTg2MCwgMTg3MiwgSFVMTCk7XG4gIElURVJBVE9SKDE5MzEsIDE5MzQsIEhVTEwpO1xuICBJVEVSQVRPUigxOTk5LCAyMDEyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMjA3MSwgMjA3NCwgSFVMTCk7XG4gIElURVJBVE9SKDIxMzksIDIxNTIsIEhVTEwpO1xuICBJVEVSQVRPUigyMjYzLCAyMzA4LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjMzNSwgMjM3OCwgSFVMTCk7XG4gIElURVJBVE9SKDI0MDUsIDI0NDcsIEhVTEwpO1xuICBJVEVSQVRPUigyNDc2LCAyNTE2LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjU0NywgMjU4NSwgSFVMTCk7XG4gIElURVJBVE9SKDI2MTgsIDI2NTUsIEhVTEwpO1xuXG4gIGNvbnN0IERBUktfR1JBWSA9IENBUlJJRVIuZGFya19ncmF5O1xuICBJVEVSQVRPUigxMTM0LCAxMTM2LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMDg2LCAyMDg4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMTU2LCAyMTU4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMTYyLCAyMTY0LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxOTM1LCAxOTM4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMDc1LCAyMDc4LCBEQVJLX0dSQVkpO1xuXG4gIGNvbnN0IExJR0hUX0dSQVkgPSBDQVJSSUVSLmxpZ2h0X2dyYXk7XG4gIElURVJBVE9SKDIzMzUsIDIzNzgsIExJR0hUX0dSQVkpO1xuXG4gIGNvbnN0IFNVUlJPVU5ESU5HX1dBVEVSX0RBUksgPSBDQVJSSUVSLnN1cnJvdW5kaW5nX3dhdGVyX2Rhcms7XG4gIElURVJBVE9SKDI3NTYsIDI3OTcsIFNVUlJPVU5ESU5HX1dBVEVSX0RBUkspO1xufSkoKTtcblxuKGZ1bmN0aW9uIGRlc3Ryb3llcl9lel9sb2FkZXIoKSB7XG4gIGNvbnN0IE9VVExJTkUgPSBERVNUUk9ZRVIuYmxhY2tfb3V0bGluZTtcbiAgSVRFUkFUT1IoMTQwMywgMTQyMiwgT1VUTElORSk7XG5cbiAgY29uc3QgSFVMTCA9IERFU1RST1lFUi5odWxsO1xuICBJVEVSQVRPUigxNDc1LCAxNDkwLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTYxNywgMTYzMCwgSFVMTCk7XG5cbiAgY29uc3QgTElHSFRfR1JBWSA9IERFU1RST1lFUi5saWdodF9ncmF5O1xuICBJVEVSQVRPUigxNTQ2LCAxNTYwLCBMSUdIVF9HUkFZKTtcbiAgSVRFUkFUT1IoMTA2MywgMTA2NywgTElHSFRfR1JBWSk7XG4gIElURVJBVE9SKDEyMDIsIDEyMDcsIExJR0hUX0dSQVkpO1xuICBJVEVSQVRPUigxMzQyLCAxMzQ3LCBMSUdIVF9HUkFZKTtcblxuICBjb25zdCBEQVJLX0dSQVkgPSBERVNUUk9ZRVIuZGFya19ncmF5O1xuICBJVEVSQVRPUigxMzM0LCAxMzM2LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxMzM4LCAxMzQwLCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxMzQ5LCAxMzUxLCBEQVJLX0dSQVkpO1xuXG4gIGNvbnN0IFNVUlJPVU5ESU5HX1dBVEVSX0RBUksgPSBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyaztcbiAgSVRFUkFUT1IoMTc1NiwgMTc3MiwgU1VSUk9VTkRJTkdfV0FURVJfREFSSyk7XG59KSgpO1xuXG5leHBvcnQgeyBDQVJSSUVSLCBERVNUUk9ZRVIsIFNVQk1BUklORSB9O1xuIiwiaW1wb3J0IHsgSVRFUkFUT1IgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jb25zdCBTVEFSVCA9IHtcbiAgczogWzIyMSwgMjIyLCA0MzcsIDQzOF0sXG4gIHQxOiBbMjM0LCAyMzUsIDMwNCwgMzA1LCAzNzQsIDM3NSwgNDQ0LCA0NDUsIDUxNCwgNTE1LCA1ODQsIDU4NV0sXG4gIGE6IFtcbiAgICAyNDEsIDI0MiwgMjQ3LCAyNDgsIDQ1MSwgNDUyLCA0NTcsIDQ1OCwgNTIxLCA1MjIsIDUyNywgNTI4LCA1OTEsIDU5MiwgNTk3LFxuICAgIDU5OCxcbiAgXSxcbiAgcjogW1xuICAgIDI1MSwgMjUyLCAyNTcsIDI1OCwgNDYxLCA0NjIsIDQ2NywgNDY4LCA1MzEsIDUzMiwgNTM3LCA1MzgsIDYwMSwgNjAyLCA2MDcsXG4gICAgNjA4LFxuICBdLFxuICB0MjogWzI2NCwgMjY1LCAzMzQsIDMzNSwgNDA0LCA0MDUsIDQ3NCwgNDc1LCA1NDQsIDU0NSwgNjE0LCA2MTVdLFxuICBhbGw6IFtdLFxufTtcblxuKGZ1bmN0aW9uIGV6X2xvYWRlcigpIHtcbiAgY29uc3QgUyA9IFNUQVJULnM7XG4gIElURVJBVE9SKDgxLCA4OCwgUyk7XG4gIElURVJBVE9SKDE1MSwgMTU4LCBTKTtcbiAgSVRFUkFUT1IoMjkxLCAyOTgsIFMpO1xuICBJVEVSQVRPUigzNjEsIDM2OCwgUyk7XG4gIElURVJBVE9SKDUwMSwgNTA4LCBTKTtcbiAgSVRFUkFUT1IoNTcxLCA1NzgsIFMpO1xuXG4gIGNvbnN0IFQxID0gU1RBUlQudDE7XG4gIElURVJBVE9SKDkxLCA5OCwgVDEpO1xuICBJVEVSQVRPUigxNjEsIDE2OCwgVDEpO1xuXG4gIGNvbnN0IEEgPSBTVEFSVC5hO1xuICBJVEVSQVRPUigxMDEsIDEwOCwgQSk7XG4gIElURVJBVE9SKDE3MSwgMTc4LCBBKTtcbiAgSVRFUkFUT1IoMzExLCAzMTgsIEEpO1xuICBJVEVSQVRPUigzODEsIDM4OCwgQSk7XG5cbiAgY29uc3QgUiA9IFNUQVJULnI7XG4gIElURVJBVE9SKDExMSwgMTE2LCBSKTtcbiAgSVRFUkFUT1IoMTgxLCAxODYsIFIpO1xuICBJVEVSQVRPUigzMjEsIDMyNiwgUik7XG4gIElURVJBVE9SKDM5MSwgMzk2LCBSKTtcblxuICBjb25zdCBUMiA9IFNUQVJULnQyO1xuICBJVEVSQVRPUigxMjEsIDEyOCwgVDIpO1xuICBJVEVSQVRPUigxOTEsIDE5OCwgVDIpO1xuXG4gIGZvciAobGV0IGxldHRlciBpbiBTVEFSVCkge1xuICAgIGlmIChsZXR0ZXIgPT09ICdhbGwnKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgU1RBUlRbbGV0dGVyXS5tYXAoKG51bWJlcikgPT4ge1xuICAgICAgU1RBUlQuYWxsLnB1c2gobnVtYmVyKTtcbiAgICB9KTtcbiAgfVxufSkoKTtcbmV4cG9ydCBkZWZhdWx0IFNUQVJUO1xuIiwiaW1wb3J0IHJlbmRlcl90aWxlcyBmcm9tICcuL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9zdGFydF90aWxlcyBmcm9tICcuL2hlbHBlcnMvY29sb3Jfc3RhcnRfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX3NoaXBfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX3NoaXBfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX2JhdHRsZXNoaXBfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX2JhdHRsZXNoaXBfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX3dhdGVyX3RpbGVzIGZyb20gJy4vaGVscGVycy9jb2xvcl93YXRlcl90aWxlcy5qcyc7XG5pbXBvcnQgbGlzdGVuZXJzX2hhbmRsZXJzIGZyb20gJy4vaGVscGVycy9saXN0ZW5lcnNfaGFuZGxlcnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lcGFnZSgpIHtcbiAgcmVuZGVyX3RpbGVzKCk7XG4gIGNvbG9yX3N0YXJ0X3RpbGVzKCk7XG4gIGNvbG9yX3NoaXBfdGlsZXMoKTtcbiAgY29sb3JfYmF0dGxlc2hpcF90aWxlcygpO1xuICBjb2xvcl93YXRlcl90aWxlcygpO1xuICBsaXN0ZW5lcnNfaGFuZGxlcnMoKTtcbn1cbiIsImNvbnN0IENPT1JESU5BVEVTID0gW107XG5jb25zdCBMRVRURVJTID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnLCAnaScsICdqJ107XG5jb25zdCBOVU1CRVJTID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuTEVUVEVSUy5tYXAoKGxldHRlcikgPT4ge1xuICBOVU1CRVJTLm1hcCgobnVtYmVyKSA9PiB7XG4gICAgQ09PUkRJTkFURVMucHVzaChgJHtsZXR0ZXJ9JHtudW1iZXJ9YCk7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENPT1JESU5BVEVTO1xuIiwiaW1wb3J0IHsgR0FNRSB9IGZyb20gJy4uLy4uLy4uLy4uL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9naWNfbGlzdGVuZXJzKCkge1xuICBsZXQgY3VycmVudF9zaGlwX2luZGV4ID0gMDtcbiAgbGV0IG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICBjb25zdCBTSElQUyA9IFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgJ2Rlc3Ryb3llcicsICdzdWInLCAncGF0cm9sQm9hdCddO1xuICBjb25zdCBMRU5HVEggPSBbNSwgNCwgMywgMywgMl07XG4gIGNvbnN0IE1BWFMgPSB7XG4gICAgLy8gdmVydGljYWwgaXMgdXNpbmcgY2hhcmNvZGVzXG4gICAgY2Fycmllcjoge1xuICAgICAgaG9yaXpvbnRhbDogNSxcbiAgICAgIHZlcnRpY2FsOiAxMDIsIC8vIGZcbiAgICB9LFxuICAgIGJhdHRsZXNoaXA6IHtcbiAgICAgIGhvcml6b250YWw6IDYsXG4gICAgICB2ZXJ0aWNhbDogMTAzLCAvLyBnXG4gICAgfSxcbiAgICBkZXN0cm95ZXI6IHtcbiAgICAgIGhvcml6b250YWw6IDcsXG4gICAgICB2ZXJ0aWNhbDogMTA0LCAvLyBoXG4gICAgfSxcbiAgICBzdWI6IHtcbiAgICAgIGhvcml6b250YWw6IDcsXG4gICAgICB2ZXJ0aWNhbDogMTA0LCAvLyBoXG4gICAgfSxcbiAgICBwYXRyb2xCb2F0OiB7XG4gICAgICBob3Jpem9udGFsOiA4LFxuICAgICAgdmVydGljYWw6IDEwNSwgLy8gaVxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgSU5CT1VORFNfRVZBTFVBVE9SID0gKGlkKSA9PiB7XG4gICAgbGV0IHZhbHVlX3RvX2NvbXBhcmUgPSAnJztcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdmFsdWVfdG9fY29tcGFyZSA9IGlkWzFdO1xuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHZhbHVlX3RvX2NvbXBhcmUgPSBpZC5jaGFyQ29kZUF0KDApO1xuICAgIH1cbiAgICBjb25zdCBNQVggPSBNQVhTW1NISVBTW2N1cnJlbnRfc2hpcF9pbmRleF1dW29yaWVudGF0aW9uXTtcbiAgICByZXR1cm4gdmFsdWVfdG9fY29tcGFyZSA8PSBNQVg7XG4gIH07XG5cbiAgY29uc3QgU1BBQ0VfVEFLRU5fRVZBTFVBVE9SID0gKGFsbF90aWxlcykgPT4ge1xuICAgIGxldCBhcmVfYWxsX3Rha2VuID0gdHJ1ZTtcbiAgICBjb25zdCBQTEFZRVIxX1NISVBTID0gR0FNRS5QTEFZRVIxX0dBTUVCT0FSRC5zaGlwcztcbiAgICBmb3IgKGxldCBzaGlwIGluIFBMQVlFUjFfU0hJUFMpIHtcbiAgICAgIGNvbnN0IFBPU0lUSU9OUyA9IFBMQVlFUjFfU0hJUFNbc2hpcF0ucG9zaXRpb247XG4gICAgICBhbGxfdGlsZXMubWFwKCh0aWxlKSA9PiB7XG4gICAgICAgIGlmIChQT1NJVElPTlMuaW5jbHVkZXModGlsZSkpIHtcbiAgICAgICAgICBhcmVfYWxsX3Rha2VuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJlX2FsbF90YWtlbjtcbiAgfTtcblxuICBjb25zdCBTVUJTRVFVRU5UX1RJTEVTID0gKGlkKSA9PiB7XG4gICAgY29uc3QgTEVUVEVSX0NIQVJfQ09ERSA9IGlkLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3QgTlVNQkVSID0gaWRbMV07XG4gICAgbGV0IGFsbCA9IFtdO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBTVE9QX0FUID0gK05VTUJFUiArIExFTkdUSFtjdXJyZW50X3NoaXBfaW5kZXhdO1xuICAgICAgZm9yIChsZXQgaSA9IE5VTUJFUjsgaSA8IFNUT1BfQVQ7IGkrKykge1xuICAgICAgICBhbGwucHVzaChgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKExFVFRFUl9DSEFSX0NPREUpfSR7aX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGw7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgY29uc3QgU1RPUF9BVCA9IExFVFRFUl9DSEFSX0NPREUgKyBMRU5HVEhbY3VycmVudF9zaGlwX2luZGV4XTtcbiAgICAgIGZvciAobGV0IGkgPSBMRVRURVJfQ0hBUl9DT0RFOyBpIDwgU1RPUF9BVDsgaSsrKSB7XG4gICAgICAgIGFsbC5wdXNoKGAke1N0cmluZy5mcm9tQ2hhckNvZGUoaSl9JHtOVU1CRVJ9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWxsO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBDT0xPUl9USUxFUyA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvb3JkaW5hdGVzLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvb3JkaW5hdGUpO1xuICAgICAgVElMRS5jbGFzc0xpc3QuYWRkKCdwbGFjZV9zaGlwX2hvdmVyZWQnKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBNT1VTRV9FTlRFUl9IQU5ETEVSID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgSUQgPSBldmVudC50YXJnZXQuaWQ7XG4gICAgY29uc3QgSU5CT1VORFMgPSBJTkJPVU5EU19FVkFMVUFUT1IoSUQpO1xuICAgIGNvbnN0IEFMTF9USUxFUyA9IFNVQlNFUVVFTlRfVElMRVMoSUQpO1xuICAgIGNvbnN0IEFSRV9TVUJTRVFVRU5UX1NQQUNFU19GUkVFID0gU1BBQ0VfVEFLRU5fRVZBTFVBVE9SKEFMTF9USUxFUyk7XG4gICAgaWYgKCFJTkJPVU5EUyB8fCAhQVJFX1NVQlNFUVVFTlRfU1BBQ0VTX0ZSRUUpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkX3NoaXBfcGxhY2VtZW50Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIENPTE9SX1RJTEVTKEFMTF9USUxFUyk7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BsYWNlX3NoaXBfaG92ZXJlZCcpO1xuICB9O1xuXG4gIGNvbnN0IE1PVVNFX0xFQVZFX0hBTkRMRVIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBIT1ZFUkVEX1RJTEVTID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYWNlX3NoaXBfaG92ZXJlZCcpXG4gICAgKTtcbiAgICBIT1ZFUkVEX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZV9zaGlwX2hvdmVyZWQnKTtcbiAgICB9KTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZF9zaGlwX3BsYWNlbWVudCcpO1xuICB9O1xuXG4gIGNvbnN0IE1PVVNFX0NMSUNLX0hBTkRMRVIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBJRCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICBjb25zdCBJTkJPVU5EUyA9IElOQk9VTkRTX0VWQUxVQVRPUihJRCk7XG4gICAgY29uc3QgQUxMX1RJTEVTID0gU1VCU0VRVUVOVF9USUxFUyhJRCk7XG4gICAgY29uc3QgQVJFX1NVQlNFUVVFTlRfU1BBQ0VTX0ZSRUUgPSBTUEFDRV9UQUtFTl9FVkFMVUFUT1IoQUxMX1RJTEVTKTtcblxuICAgIGlmIChJTkJPVU5EUyAmJiBBUkVfU1VCU0VRVUVOVF9TUEFDRVNfRlJFRSAmJiBjdXJyZW50X3NoaXBfaW5kZXggPCA1KSB7XG4gICAgICBjb25zdCBDVVJSRU5UX1NISVAgPSBTSElQU1tjdXJyZW50X3NoaXBfaW5kZXhdO1xuICAgICAgR0FNRS5QTEFZRVIxX0dBTUVCT0FSRC5wbGFjZV9zaGlwKENVUlJFTlRfU0hJUCwgQUxMX1RJTEVTKTtcbiAgICAgIGN1cnJlbnRfc2hpcF9pbmRleCA9IGN1cnJlbnRfc2hpcF9pbmRleCArIDE7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFNQQUNFX0JBUl9IQU5ETEVSID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgS0VZID0gZXZlbnQua2V5O1xuICAgIGlmIChLRVkgPT09ICcgJyAmJiBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBvcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChLRVkgPT09ICcgJyAmJiBvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFRJTEVTID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwbGFjZV9zaGlwX3RpbGUnKSk7XG4gIFRJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIE1PVVNFX0VOVEVSX0hBTkRMRVIpO1xuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIE1PVVNFX0xFQVZFX0hBTkRMRVIpO1xuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBNT1VTRV9DTElDS19IQU5ETEVSKTtcbiAgfSk7XG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBTUEFDRV9CQVJfSEFORExFUik7XG59XG4iLCJpbXBvcnQgQ09PUkRJTkFURVMgZnJvbSAnLi9jb29yZGluYXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl90aWxlcygpIHtcbiAgY29uc3QgTUFJTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3QgUExBQ0VfU0hJUFNfQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IENMQVNTRVMgPSBbXG4gICAgJ2JsdWUxJyxcbiAgICAnYmx1ZTInLFxuICAgICdibHVlMycsXG4gICAgJ2JsdWU0JyxcbiAgICAnYmx1ZTUnLFxuICAgICdibHVlNicsXG4gICAgJ2JsdWU3JyxcbiAgICAnYmx1ZTgnLFxuICAgICdibHVlOScsXG4gICAgJ2JsdWUxMCcsXG4gICAgJ2dyZWVuMScsXG4gIF07XG5cbiAgTUFJTi5pZCA9ICdwbGFjZV9zaGlwc19tYWluJztcbiAgUExBQ0VfU0hJUFNfQ09OVEFJTkVSLmlkID0gJ3BsYWNlX3NoaXBzX2NvbnRhaW5lcic7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzNTAwOyBpKyspIHtcbiAgICBjb25zdCBSQU5ET01fTlVNQkVSID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3BsYWNlX3NoaXBzX2JhY2tncm91bmRfdGlsZScpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZChDTEFTU0VTW1JBTkRPTV9OVU1CRVJdKTtcbiAgICBNQUlOLmFwcGVuZChUSUxFKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuaWQgPSBDT09SRElOQVRFU1tpXTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3BsYWNlX3NoaXBfdGlsZScpO1xuICAgIFBMQUNFX1NISVBTX0NPTlRBSU5FUi5hcHBlbmQoVElMRSk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoTUFJTik7XG4gIE1BSU4uYXBwZW5kKFBMQUNFX1NISVBTX0NPTlRBSU5FUik7XG59XG4iLCJpbXBvcnQgcmVuZGVyX3RpbGVzIGZyb20gJy4vaGVscGVycy9yZW5kZXJfdGlsZXMuanMnO1xuaW1wb3J0IGxvZ2ljX2xpc3RlbmVycyBmcm9tICcuL2hlbHBlcnMvbG9naWNfbGlzdGVuZXJzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxhY2Vfc2hpcHMoKSB7XG4gIHJlbmRlcl90aWxlcygpO1xuICBsb2dpY19saXN0ZW5lcnMoKTtcbn1cbiIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGdhbWVsb29wIGZyb20gJy4vY29tcG9uZW50cy9nYW1lL0dBTUVfTE9PUC5qcyc7XG5pbXBvcnQgaG9tZXBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hvbWVwYWdlLmpzJztcblxuY29uc3QgR0FNRSA9IGdhbWVsb29wKCk7XG5ob21lcGFnZSgpO1xuXG5leHBvcnQgeyBHQU1FIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tb3BhY2l0eS0wMDogMTtcXG4gIC0tb3BhY2l0eS0wNTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDogMC45NjtcXG4gIC0tb3BhY2l0eS0xNTogMC45NDtcXG4gIC0tb3BhY2l0eS0yMDogMC45MjtcXG4gIC0tb3BhY2l0eS0yNTogMC45O1xcbiAgLS1vcGFjaXR5LTMwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTM1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTQwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTQ1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTUwOiAwLjg7XFxuICAtLW9wYWNpdHktNTU6IDAuODI7XFxuICAtLW9wYWNpdHktNjA6IDAuODQ7XFxuICAtLW9wYWNpdHktNjU6IDAuODY7XFxuICAtLW9wYWNpdHktNzA6IDAuODg7XFxuICAtLW9wYWNpdHktNzU6IDAuOTtcXG4gIC0tb3BhY2l0eS04MDogMC45MjtcXG4gIC0tb3BhY2l0eS04NTogMC45NDtcXG4gIC0tb3BhY2l0eS05MDogMC45NjtcXG4gIC0tb3BhY2l0eS05NTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDA6IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMDApO1xcbiAgfVxcblxcbiAgNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTA1KTtcXG4gIH1cXG5cXG4gIDEwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTApO1xcbiAgfVxcblxcbiAgMTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xNSk7XFxuICB9XFxuXFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTIwKTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMjUpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zMCk7XFxuICB9XFxuXFxuICAzNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTM1KTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDApO1xcbiAgfVxcblxcbiAgNDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS00NSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTUwKTtcXG4gIH1cXG5cXG4gIDU1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNTUpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02MCk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTY1KTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzApO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS03NSk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTgwKTtcXG4gIH1cXG5cXG4gIDg1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktODUpO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05MCk7XFxuICB9XFxuXFxuICA5NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTk1KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwMCk7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9hbmltYXRvci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1vcGFjaXR5LTAwOiAxO1xcbiAgLS1vcGFjaXR5LTA1OiAwLjk4O1xcbiAgLS1vcGFjaXR5LTEwOiAwLjk2O1xcbiAgLS1vcGFjaXR5LTE1OiAwLjk0O1xcbiAgLS1vcGFjaXR5LTIwOiAwLjkyO1xcbiAgLS1vcGFjaXR5LTI1OiAwLjk7XFxuICAtLW9wYWNpdHktMzA6IDAuODg7XFxuICAtLW9wYWNpdHktMzU6IDAuODY7XFxuICAtLW9wYWNpdHktNDA6IDAuODQ7XFxuICAtLW9wYWNpdHktNDU6IDAuODI7XFxuICAtLW9wYWNpdHktNTA6IDAuODtcXG4gIC0tb3BhY2l0eS01NTogMC44MjtcXG4gIC0tb3BhY2l0eS02MDogMC44NDtcXG4gIC0tb3BhY2l0eS02NTogMC44NjtcXG4gIC0tb3BhY2l0eS03MDogMC44ODtcXG4gIC0tb3BhY2l0eS03NTogMC45O1xcbiAgLS1vcGFjaXR5LTgwOiAwLjkyO1xcbiAgLS1vcGFjaXR5LTg1OiAwLjk0O1xcbiAgLS1vcGFjaXR5LTkwOiAwLjk2O1xcbiAgLS1vcGFjaXR5LTk1OiAwLjk4O1xcbiAgLS1vcGFjaXR5LTEwMDogMTtcXG59XFxuXFxuQGtleWZyYW1lcyBvcGFjaXR5IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0wMCk7XFxuICB9XFxuXFxuICA1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMDUpO1xcbiAgfVxcblxcbiAgMTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xMCk7XFxuICB9XFxuXFxuICAxNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTE1KTtcXG4gIH1cXG5cXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMjApO1xcbiAgfVxcblxcbiAgMjUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0yNSk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTMwKTtcXG4gIH1cXG5cXG4gIDM1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzUpO1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS00MCk7XFxuICB9XFxuXFxuICA0NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTQ1KTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNTApO1xcbiAgfVxcblxcbiAgNTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS01NSk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTYwKTtcXG4gIH1cXG5cXG4gIDY1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNjUpO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS03MCk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTc1KTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktODApO1xcbiAgfVxcblxcbiAgODUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS04NSk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTkwKTtcXG4gIH1cXG5cXG4gIDk1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktOTUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTAwKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXFxubWFpbiB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG4jYnNfaGVhZGluZyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0MCwgMWZyKTtcXG4gIGhlaWdodDogNDBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4jc3RhcnRfYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiAxMGVtO1xcbiAgd2lkdGg6IDcwZW07XFxufVxcblxcbi5ob21lcGVhZ2VfdGlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjODRmZjE3O1xcbn1cXG5cXG4ud2F0ZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDE1NztcXG59XFxuXFxuLnN0YXJ0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnN0YXJ0X2JhY2tncm91bmRfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWM5NzFiO1xcbn1cXG5cXG4uc3RhcnRfdGV4dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWM5NzFiO1xcbn1cXG4uc3RhcnRfdGV4dF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuI2JzX2hlYWRpbmcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNDAsIDFmcik7XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuI3N0YXJ0X2J1dHRvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4uaG9tZXBlYWdlX3RpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuLndhdGVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAxNTc7XFxufVxcblxcbi5zdGFydCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnN0YXJ0X2JhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjOTcxYjtcXG59XFxuXFxuLnN0YXJ0X3RleHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjOTcxYjtcXG59XFxuLnN0YXJ0X3RleHRfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwcy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93YXRlci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRvci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNoaXBfdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMC43ZW07XFxufVxcblxcbi5zaGlwX2h1bGxfb3V0bGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNoaXBfaHVsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1NTU1O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDI0MjtcXG59XFxuXFxuLnNoaXBfbGlnaHQge1xcbiAgYmFja2dyb3VuZDogI2ZmMDAwMDtcXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAwLjc1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5saWdodF9ncmF5IHtcXG4gIGJhY2tncm91bmQ6ICM2YzZjNmM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0NjQ2O1xcbn1cXG5cXG4uZGFya19ncmF5IHtcXG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjkyOTI5O1xcbn1cXG5cXG4uc3ViIHtcXG4gIGJhY2tncm91bmQ6ICMxYzFjMWM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGYwZjBmO1xcbn1cXG5cXG4ucGVyaXNjb3BlX29mZiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDEwMTU3O1xcbn1cXG5cXG4ucGVyaXNjb3BlX29uIHtcXG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjkyOTI5O1xcbn1cXG5cXG4ucmFkYXJfb2ZmIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwMTAxNTc7XFxufVxcblxcbi5yYWRhcl9vbiB7XFxuICBiYWNrZ3JvdW5kOiAjNmM2YzZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDY0NjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL3NoaXBzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi9hbmltYXRvci5jc3MnO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZGlzcGxheT1zd2FwJyk7XFxuXFxuLnNoaXBfdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMC43ZW07XFxufVxcblxcbi5zaGlwX2h1bGxfb3V0bGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNoaXBfaHVsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1NTU1O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDI0MjtcXG59XFxuXFxuLnNoaXBfbGlnaHQge1xcbiAgYmFja2dyb3VuZDogI2ZmMDAwMDtcXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAwLjc1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5saWdodF9ncmF5IHtcXG4gIGJhY2tncm91bmQ6ICM2YzZjNmM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0NjQ2O1xcbn1cXG5cXG4uZGFya19ncmF5IHtcXG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjkyOTI5O1xcbn1cXG5cXG4uc3ViIHtcXG4gIGJhY2tncm91bmQ6ICMxYzFjMWM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGYwZjBmO1xcbn1cXG5cXG4ucGVyaXNjb3BlX29mZiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDEwMTU3O1xcbn1cXG5cXG4ucGVyaXNjb3BlX29uIHtcXG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjkyOTI5O1xcbn1cXG5cXG4ucmFkYXJfb2ZmIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwMTAxNTc7XFxufVxcblxcbi5yYWRhcl9vbiB7XFxuICBiYWNrZ3JvdW5kOiAjNmM2YzZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDY0NjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdG9yLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS13YXRlcjE6ICMwMTAxNTc7XFxuICAtLXdhdGVyMjogIzA2Mzc0NDtcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2Rhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTM4YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDBkNjE7XFxufVxcblxcbi5zdXJyb3VuZGluZ193YXRlcl9saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMmIxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTc3NTtcXG59XFxuXFxuLmdyZWVuMSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjIpO1xcbiAgb3BhY2l0eTogNjAlO1xcbn1cXG5cXG4uYmx1ZTEge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG59XFxuXFxuLmJsdWUyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA5NiU7XFxufVxcblxcbi5ibHVlMyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogOTIlO1xcbn1cXG5cXG4uYmx1ZTQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDg4JTtcXG59XFxuXFxuLmJsdWU1IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4NCU7XFxufVxcblxcbi5ibHVlNiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG4uYmx1ZTcge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDc2JTtcXG59XFxuLmJsdWU4IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA3MiU7XFxufVxcblxcbi5ibHVlOSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNjglO1xcbn1cXG5cXG4uYmx1ZTEwIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA2NCU7XFxufVxcblxcbi5ibHVlMTAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL3dhdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi9hbmltYXRvci5jc3MnO1xcblxcbjpyb290IHtcXG4gIC0td2F0ZXIxOiAjMDEwMTU3O1xcbiAgLS13YXRlcjI6ICMwNjM3NDQ7XFxufVxcblxcbi5zdXJyb3VuZGluZ193YXRlcl9kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzEzOGM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGQwZDYxO1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjJiMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE3NzU7XFxufVxcblxcbi5ncmVlbjEge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIyKTtcXG4gIG9wYWNpdHk6IDYwJTtcXG59XFxuXFxuLmJsdWUxIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxufVxcblxcbi5ibHVlMiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogOTYlO1xcbn1cXG5cXG4uYmx1ZTMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDkyJTtcXG59XFxuXFxuLmJsdWU0IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4OCU7XFxufVxcblxcbi5ibHVlNSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODQlO1xcbn1cXG5cXG4uYmx1ZTYge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuLmJsdWU3IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA3NiU7XFxufVxcbi5ibHVlOCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNzIlO1xcbn1cXG5cXG4uYmx1ZTkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDY4JTtcXG59XFxuXFxuLmJsdWUxMCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNjQlO1xcbn1cXG5cXG4uYmx1ZTEwIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wbGFjZV9zaGlwc19iYWNrZ3JvdW5kX3RpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuI3BsYWNlX3NoaXBzX21haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNTAsIDFmcik7XFxuICB3aWR0aDogNzBlbTtcXG4gIGhlaWdodDogNTBlbTtcXG59XFxuXFxuI3BsYWNlX3NoaXBzX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDE1ZW07XFxuICBib3R0b206IDVlbTtcXG4gIGhlaWdodDogNDBlbTtcXG4gIHdpZHRoOiA0MGVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG59XFxuXFxuLnBsYWNlX3NoaXBfdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWM5NzFiO1xcbn1cXG5cXG4ucGxhY2Vfc2hpcF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblxcbi5pbnZhbGlkX3NoaXBfcGxhY2VtZW50IHtcXG4gIGJhY2tncm91bmQ6ICNmMDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wbGFjZV9zaGlwc19iYWNrZ3JvdW5kX3RpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuI3BsYWNlX3NoaXBzX21haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNTAsIDFmcik7XFxuICB3aWR0aDogNzBlbTtcXG4gIGhlaWdodDogNTBlbTtcXG59XFxuXFxuI3BsYWNlX3NoaXBzX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDE1ZW07XFxuICBib3R0b206IDVlbTtcXG4gIGhlaWdodDogNDBlbTtcXG4gIHdpZHRoOiA0MGVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG59XFxuXFxuLnBsYWNlX3NoaXBfdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWM5NzFiO1xcbn1cXG5cXG4ucGxhY2Vfc2hpcF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblxcbi5pbnZhbGlkX3NoaXBfcGxhY2VtZW50IHtcXG4gIGJhY2tncm91bmQ6ICNmMDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9pbmRleC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2Nzcy9pbmRleC5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsiR2FtZWJvYXJkIiwiUGxheWVyIiwiZ2FtZWxvb3AiLCJQTEFZRVIxIiwiUExBWUVSMiIsIlBMQVlFUjFfR0FNRUJPQVJEIiwiUExBWUVSMl9HQU1FQk9BUkQiLCJTaGlwIiwiY2FycmllciIsInBvc2l0aW9uIiwic2hpcCIsImJhdHRsZXNoaXAiLCJkZXN0cm95ZXIiLCJzdWIiLCJwYXRyb2xCb2F0IiwiaW5wdXRfY29vcmRpbmF0ZXMiLCJzaGlwcyIsImlucHV0X2Nvb3JkaW5hdGUiLCJtaXNzIiwiV0FTX0hJVCIsImluY2x1ZGVzIiwiaGl0cyIsIkhJVF9JTkRFWCIsImluZGV4T2YiLCJoaXQiLCJtaXNzZXMiLCJpc19hbGxfc3VuayIsImFsbF9zdW5rX2NhbGwiLCJpc19zdW5rIiwic29ydCIsInBsYXllciIsIkxFVFRFUlMiLCJtYXAiLCJsZXR0ZXIiLCJpIiwiYm9hcmQiLCJFcnJvciIsIkNPT1JESU5BVEUiLCJyZW1haW5pbmdfbW92ZXMiLCJtb3ZlcyIsInJlY2VpdmVfYXR0YWNrIiwiY29vcmRpbmF0ZSIsIkZJTFRFUkVEX01PVkVTIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiUkVNQUlOSU5HX01PVkVTX0NPUFkiLCJSRU1BSU5JTkciLCJmaWx0ZXIiLCJyZW1haW5pbmdfbW92ZSIsIkFycmF5IiwiZmlsbCIsInBvc2l0aW9uX2hpdCIsImV2ZXJ5IiwiaGl0c19hcnJheSIsIkhJVFMiLCJBTklNQVRJT05TIiwiUEVSSVNDT1BFX1NQSU5ORVIiLCJMRUZUX1RJTEUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUklHSFRfVElMRSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInZhbHVlIiwiUkFEQVJfU1BJTk5FUjEiLCJSQURBUl9TUElOTkVSMiIsIlNVQl9BTklNQVRJT04iLCJzZXRJbnRlcnZhbCIsIkJPQVQxIiwiQk9BVDIiLCJJVEVSQVRPUiIsIkJBVFRMRVNISVAiLCJCIiwiQSIsIlQxIiwiVDIiLCJMIiwiRSIsIlMiLCJIIiwiSSIsIlAiLCJlel9sb2FkZXIiLCJFWl9USUxFX0NPTE9SSVpFUiIsImNvbG9yX2JhdHRsZXNoaXBfdGlsZXMiLCJDQVJSSUVSIiwiREVTVFJPWUVSIiwiU1VCTUFSSU5FIiwiY29sb3Jfc2hpcF90aWxlcyIsImJsYWNrX291dGxpbmUiLCJodWxsIiwiZGFya19ncmF5IiwibGlnaHRfZ3JheSIsInNoaXBfbGlnaHQiLCJzdXJyb3VuZGluZ193YXRlcl9kYXJrIiwic3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQiLCJDIiwiViIsIk4iLCJTSVgiLCJOSU5FIiwiVSIsIk4yIiwiVjIiLCJZIiwiQUxMIiwidGlsZSIsImlubmVyVGV4dCIsInN1Ym1hcmluZSIsImxlZnRfcGVyaXNjb3BlIiwicmlnaHRfcGVyaXNjb3BlIiwiU1RBUlQiLCJjb2xvcl9zdGFydF90aWxlcyIsImFsbCIsInRpbGVfaWQiLCJUSUxFIiwiY29sb3Jfd2F0ZXJfdGlsZXMiLCJDTEFTU0VTIiwiV0FURVJfVElMRVMiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIlJBTkRPTV9OVU1CRVIiLCJtaW4iLCJtYXgiLCJ0YXJnZXRfYXJyYXkiLCJwdXNoIiwiaW5wdXRfYXJyYXkiLCJpbnB1dF9jbGFzcyIsInBsYWNlX3NoaXBzIiwibGlzdGVuZXJzX2hhbmRsZXJzIiwiU1RBUlRfQlVUVE9OIiwiU1RBUlRfQlVUVE9OX0VOVEVSX0hBTkRMRVIiLCJTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUyIsIlNUQVJUX0JVVFRPTl9URVhUX1RJTEVTIiwiU1RBUlRfQlVUVE9OX0xFQVZFX0hBTkRMRVIiLCJTVEFSVF9CVVRUT05fQ0xJQ0tfSEFORExFUiIsImludGVydmFsIiwiSU5URVJWQUwiLCJjbGVhckludGVydmFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlcl90aWxlcyIsIk1BSU4iLCJjcmVhdGVFbGVtZW50IiwiSEVBRElORyIsImlkIiwiYXBwZW5kIiwiYm9keSIsImNhcnJpZXJfZXpfbG9hZGVyIiwiT1VUTElORSIsIkhVTEwiLCJEQVJLX0dSQVkiLCJMSUdIVF9HUkFZIiwiU1VSUk9VTkRJTkdfV0FURVJfREFSSyIsImRlc3Ryb3llcl9lel9sb2FkZXIiLCJzIiwidDEiLCJhIiwiciIsInQyIiwiUiIsIm51bWJlciIsImhvbWVwYWdlIiwiQ09PUkRJTkFURVMiLCJOVU1CRVJTIiwiR0FNRSIsImxvZ2ljX2xpc3RlbmVycyIsImN1cnJlbnRfc2hpcF9pbmRleCIsIm9yaWVudGF0aW9uIiwiU0hJUFMiLCJMRU5HVEgiLCJNQVhTIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiSU5CT1VORFNfRVZBTFVBVE9SIiwidmFsdWVfdG9fY29tcGFyZSIsImNoYXJDb2RlQXQiLCJNQVgiLCJTUEFDRV9UQUtFTl9FVkFMVUFUT1IiLCJhbGxfdGlsZXMiLCJhcmVfYWxsX3Rha2VuIiwiUExBWUVSMV9TSElQUyIsIlBPU0lUSU9OUyIsIlNVQlNFUVVFTlRfVElMRVMiLCJMRVRURVJfQ0hBUl9DT0RFIiwiTlVNQkVSIiwiU1RPUF9BVCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIkNPTE9SX1RJTEVTIiwiY29vcmRpbmF0ZXMiLCJNT1VTRV9FTlRFUl9IQU5ETEVSIiwiZXZlbnQiLCJJRCIsInRhcmdldCIsIklOQk9VTkRTIiwiQUxMX1RJTEVTIiwiQVJFX1NVQlNFUVVFTlRfU1BBQ0VTX0ZSRUUiLCJNT1VTRV9MRUFWRV9IQU5ETEVSIiwiSE9WRVJFRF9USUxFUyIsIk1PVVNFX0NMSUNLX0hBTkRMRVIiLCJDVVJSRU5UX1NISVAiLCJwbGFjZV9zaGlwIiwiU1BBQ0VfQkFSX0hBTkRMRVIiLCJLRVkiLCJrZXkiLCJUSUxFUyIsIlBMQUNFX1NISVBTX0NPTlRBSU5FUiJdLCJzb3VyY2VSb290IjoiIn0=