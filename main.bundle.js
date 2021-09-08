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

/***/ "./src/components/ui/homepage/color_battleship.js":
/*!********************************************************!*\
  !*** ./src/components/ui/homepage/color_battleship.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ color_battleship)
/* harmony export */ });
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/helpers.js */ "./src/components/ui/homepage/helpers/helpers.js");
/* harmony import */ var _helpers_battleship_tiles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/battleship_tiles.js */ "./src/components/ui/homepage/helpers/battleship_tiles.js");


function color_battleship() {
  for (var letter in _helpers_battleship_tiles_js__WEBPACK_IMPORTED_MODULE_1__.default) {
    (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.EZ_TILE_COLORIZER)(_helpers_battleship_tiles_js__WEBPACK_IMPORTED_MODULE_1__.default[letter], 'title');
  }
}

/***/ }),

/***/ "./src/components/ui/homepage/color_ship_tiles.js":
/*!********************************************************!*\
  !*** ./src/components/ui/homepage/color_ship_tiles.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ color_ship_tiles)
/* harmony export */ });
/* harmony import */ var _helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/ship_tiles.js */ "./src/components/ui/homepage/helpers/ship_tiles.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/helpers.js */ "./src/components/ui/homepage/helpers/helpers.js");


function color_ship_tiles() {
  (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.CARRIER.black_outline, 'ship_hull_outline');
  (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.CARRIER.hull, 'ship_hull');
  (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.CARRIER.dark_gray, 'dark_gray');
  (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.CARRIER.light_gray, 'light_gray');
  (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.CARRIER.ship_light, 'ship_light');
  (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.CARRIER.surrounding_water_dark, 'surrounding_water_dark');
  (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.CARRIER.surrounding_water_light, 'surrounding_water_light');
  (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.DESTROYER.black_outline, 'ship_hull_outline');
  (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.DESTROYER.hull, 'ship_hull');
  (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.DESTROYER.light_gray, 'light_gray');
  (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.DESTROYER.dark_gray, 'dark_gray');
  (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.DESTROYER.ship_light, 'ship_light');
  (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.DESTROYER.surrounding_water_dark, 'surrounding_water_dark');
  (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.DESTROYER.surrounding_water_light, 'surrounding_water_light');
  (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.SUBMARINE.hull, 'sub');
  (0,_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.EZ_TILE_COLORIZER)(_helpers_ship_tiles_js__WEBPACK_IMPORTED_MODULE_0__.SUBMARINE.dark_gray, 'dark_gray');
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
/* harmony import */ var _helpers_start_tiles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/start_tiles.js */ "./src/components/ui/homepage/helpers/start_tiles.js");

function color_start_tiles() {
  var ALL = _helpers_start_tiles_js__WEBPACK_IMPORTED_MODULE_0__.default.all;
  ALL.map(function (tile_id) {
    var TILE = document.getElementById("start_".concat(tile_id));
    TILE.classList.remove('start_background');
    TILE.classList.add('start_text');
  });
}

/***/ }),

/***/ "./src/components/ui/homepage/helpers/animations.js":
/*!**********************************************************!*\
  !*** ./src/components/ui/homepage/helpers/animations.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ animations)
/* harmony export */ });
function animations() {
  var LEFT_TILE = document.getElementById(759);
  var RIGHT_TILE = document.getElementById(761);
  LEFT_TILE.classList.remove('water');
  LEFT_TILE.classList.add('antenna_off');
  RIGHT_TILE.classList.remove('water');
  RIGHT_TILE.classList.add('antenna_on');

  var PERISCOPE_SPINNER = function PERISCOPE_SPINNER() {
    if (LEFT_TILE.classList.value.includes('on')) {
      LEFT_TILE.classList.remove('antenna_on');
      LEFT_TILE.classList.add('antenna_off');
      RIGHT_TILE.classList.remove('antenna_off');
      RIGHT_TILE.classList.add('antenna_on');
    } else {
      LEFT_TILE.classList.remove('antenna_off');
      LEFT_TILE.classList.add('antenna_on');
      RIGHT_TILE.classList.remove('antenna_on');
      RIGHT_TILE.classList.add('antenna_off');
    }
  };

  var RADAR_SPINNER1 = function RADAR_SPINNER1() {
    var LEFT_TILE = document.getElementById(714);
    var RIGHT_TILE = document.getElementById(716);
  };

  var SUB_ANIMATION = setInterval(PERISCOPE_SPINNER, 1000);
  var BOAT1 = setInterval(RADAR_SPINNER1, 1000);
}

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
  surrounding_water_dark: [],
  surrounding_water_light: []
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
/* harmony import */ var _render_tiles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render_tiles.js */ "./src/components/ui/homepage/render_tiles.js");
/* harmony import */ var _color_start_tiles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color_start_tiles.js */ "./src/components/ui/homepage/color_start_tiles.js");
/* harmony import */ var _color_ship_tiles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color_ship_tiles.js */ "./src/components/ui/homepage/color_ship_tiles.js");
/* harmony import */ var _color_battleship_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color_battleship.js */ "./src/components/ui/homepage/color_battleship.js");
/* harmony import */ var _helpers_animations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/animations.js */ "./src/components/ui/homepage/helpers/animations.js");





function homepage() {
  (0,_render_tiles_js__WEBPACK_IMPORTED_MODULE_0__.default)();
  (0,_color_start_tiles_js__WEBPACK_IMPORTED_MODULE_1__.default)();
  (0,_color_ship_tiles_js__WEBPACK_IMPORTED_MODULE_2__.default)();
  (0,_color_battleship_js__WEBPACK_IMPORTED_MODULE_3__.default)();
  (0,_helpers_animations_js__WEBPACK_IMPORTED_MODULE_4__.default)();
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
    TILE.id = i;
    TILE.classList = 'tile water';
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/homepage.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/homepage.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  justify-content: center;\n  background-color: black;\n  cursor: none;\n}\n\n.title {\n  background: black;\n}\n\n#bs_heading {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(40, 1fr);\n  height: 40em;\n  width: 70em;\n}\n\n#start_button {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 10em;\n  width: 70em;\n}\n\n.tile:hover {\n  background: rgb(132, 255, 23);\n}\n\n.tile {\n  border: 1px solid black;\n}\n\n.water {\n  border: none;\n  background-color: #010157;\n}\n\n.start {\n  border: 1px solid black;\n}\n\n.start_background {\n  background-color: black;\n}\n\n.start_text {\n  background-color: #ac971b;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/homepage/css/homepage.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["body {\n  display: flex;\n  justify-content: center;\n  background-color: black;\n  cursor: none;\n}\n\n.title {\n  background: black;\n}\n\n#bs_heading {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(40, 1fr);\n  height: 40em;\n  width: 70em;\n}\n\n#start_button {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 10em;\n  width: 70em;\n}\n\n.tile:hover {\n  background: rgb(132, 255, 23);\n}\n\n.tile {\n  border: 1px solid black;\n}\n\n.water {\n  border: none;\n  background-color: #010157;\n}\n\n.start {\n  border: 1px solid black;\n}\n\n.start_background {\n  background-color: black;\n}\n\n.start_text {\n  background-color: #ac971b;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_animator_css__WEBPACK_IMPORTED_MODULE_2__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ship_hull_outline {\n  background-color: black;\n}\n\n.ship_hull {\n  background-color: #595555;\n}\n\n.ship_light {\n  background: #ff0000;\n  animation: opacity 0.75s linear infinite;\n}\n\n.light_gray {\n  background: #6c6c6c;\n}\n\n.dark_gray {\n  background: #393939;\n}\n\n.surrounding_water_dark {\n  background-color: #13138c;\n}\n\n.surrounding_water_light {\n  background-color: #2222b1;\n}\n\n.sub {\n  background: #1c1c1c;\n}\n\n.antenna_off {\n  border: none;\n  background: #010157;\n}\n\n.antenna_on {\n  background: #393939;\n}\n\n.radar_off {\n  border: none;\n  background: #010157;\n}\n\n.radar_on {\n  background: #6c6c6c;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/homepage/css/ships.css"],"names":[],"mappings":"AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,wCAAwC;AAC1C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":["@import './animator.css';\n\n.ship_hull_outline {\n  background-color: black;\n}\n\n.ship_hull {\n  background-color: #595555;\n}\n\n.ship_light {\n  background: #ff0000;\n  animation: opacity 0.75s linear infinite;\n}\n\n.light_gray {\n  background: #6c6c6c;\n}\n\n.dark_gray {\n  background: #393939;\n}\n\n.surrounding_water_dark {\n  background-color: #13138c;\n}\n\n.surrounding_water_light {\n  background-color: #2222b1;\n}\n\n.sub {\n  background: #1c1c1c;\n}\n\n.antenna_off {\n  border: none;\n  background: #010157;\n}\n\n.antenna_on {\n  background: #393939;\n}\n\n.radar_off {\n  border: none;\n  background: #010157;\n}\n\n.radar_on {\n  background: #6c6c6c;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_ui_homepage_css_homepage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./components/ui/homepage/css/homepage.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/homepage.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_ui_homepage_css_ships_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./components/ui/homepage/css/ships.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ui/homepage/css/ships.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_ui_homepage_css_homepage_css__WEBPACK_IMPORTED_MODULE_2__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_ui_homepage_css_ships_css__WEBPACK_IMPORTED_MODULE_3__.default);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUEsSUFBTU0sSUFBSSxHQUFHbkksc0VBQVEsRUFBckI7QUFDQTRILDRFQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9HQU1FX0xPT1AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWUvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jb2xvcl9iYXR0bGVzaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jb2xvcl9zaGlwX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jb2xvcl9zdGFydF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9hbmltYXRpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2JhdHRsZXNoaXBfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9zaGlwX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL3N0YXJ0X3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvcmVuZGVyX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvYW5pbWF0b3IuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvaG9tZXBhZ2UuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3Mvc2hpcHMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lbG9vcCgpIHtcbiAgY29uc3QgUExBWUVSMSA9IG5ldyBQbGF5ZXIoJ2h1bWFuJyk7XG4gIGNvbnN0IFBMQVlFUjIgPSBuZXcgUGxheWVyKCdhaScpO1xuICBjb25zdCBQTEFZRVIxX0dBTUVCT0FSRCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgY29uc3QgUExBWUVSMl9HQU1FQk9BUkQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cbiAgLy90b2RvIHJlbW92ZSBib2lsZXJwbGF0ZSBzbyBzaGlwcyBjYW4gYmUgbWFudWFsbHkgcGxhY2VkXG4gIFtQTEFZRVIxX0dBTUVCT0FSRCwgUExBWUVSMl9HQU1FQk9BUkRdLm1hcCgoYm9hcmQpID0+IHtcbiAgICBib2FyZC5wbGFjZV9zaGlwKCdjYXJyaWVyJywgWydhMCcsICdhMScsICdhMicsICdhMycsICdhNCddKTtcbiAgICBib2FyZC5wbGFjZV9zaGlwKCdiYXR0bGVzaGlwJywgWydiMCcsICdiMScsICdiMicsICdiMyddKTtcbiAgICBib2FyZC5wbGFjZV9zaGlwKCdkZXN0cm95ZXInLCBbJ2MwJywgJ2MxJywgJ2MyJ10pO1xuICAgIGJvYXJkLnBsYWNlX3NoaXAoJ3N1YicsIFsnZDAnLCAnZDEnLCAnZDInXSk7XG4gICAgYm9hcmQucGxhY2Vfc2hpcCgncGF0cm9sQm9hdCcsIFsnZTAnLCAnZTEnXSk7XG4gIH0pO1xuICAvL3RvZG8gcmVtb3ZlIGJvaWxlcnBsYXRlIHNvIHNoaXBzIGNhbiBiZSBtYW51YWxseSBwbGFjZWRcblxuICByZXR1cm4geyBQTEFZRVIxLCBQTEFZRVIyIH07XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBzaGlwcyA9IHtcbiAgICBjYXJyaWVyOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCg1KSxcbiAgICB9LFxuICAgIGJhdHRsZXNoaXA6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDQpLFxuICAgIH0sXG4gICAgZGVzdHJveWVyOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCgzKSxcbiAgICB9LFxuICAgIHN1Yjoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoMyksXG4gICAgfSxcbiAgICBwYXRyb2xCb2F0OiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCgyKSxcbiAgICB9LFxuICB9O1xuICBoaXRzID0gW107XG4gIG1pc3NlcyA9IFtdO1xuXG4gIHBsYWNlX3NoaXAoc2hpcCwgaW5wdXRfY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLnNoaXBzW3NoaXBdLnBvc2l0aW9uID0gaW5wdXRfY29vcmRpbmF0ZXM7XG4gIH1cbiAgI21pc3NfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLm1pc3NlcywgaW5wdXRfY29vcmRpbmF0ZV0uc29ydCgpO1xuICB9XG4gICNoaXRfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmhpdHMsIGlucHV0X2Nvb3JkaW5hdGVdLnNvcnQoKTtcbiAgfVxuICByZWNlaXZlX2F0dGFjayhpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgbGV0IG1pc3MgPSB0cnVlO1xuICAgIGZvciAobGV0IHNoaXAgaW4gdGhpcy5zaGlwcykge1xuICAgICAgY29uc3QgV0FTX0hJVCA9IHRoaXMuc2hpcHNbc2hpcF0ucG9zaXRpb24uaW5jbHVkZXMoaW5wdXRfY29vcmRpbmF0ZSk7XG4gICAgICBpZiAoV0FTX0hJVCkge1xuICAgICAgICB0aGlzLmhpdHMgPSB0aGlzLiNoaXRfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKTtcbiAgICAgICAgY29uc3QgSElUX0lOREVYID0gdGhpcy5zaGlwc1tzaGlwXS5wb3NpdGlvbi5pbmRleE9mKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgICAgICB0aGlzLnNoaXBzW3NoaXBdLnNoaXAuaGl0KEhJVF9JTkRFWCk7XG4gICAgICAgIG1pc3MgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1pc3MpIHtcbiAgICAgIHRoaXMubWlzc2VzID0gdGhpcy4jbWlzc19yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgIH1cbiAgfVxuICBhbGxfc3VuaygpIHtcbiAgICBsZXQgaXNfYWxsX3N1bmsgPSB0cnVlO1xuICAgIGZvciAobGV0IHNoaXAgaW4gdGhpcy5zaGlwcykge1xuICAgICAgY29uc3QgYWxsX3N1bmtfY2FsbCA9IHRoaXMuc2hpcHNbc2hpcF0uc2hpcC5pc19zdW5rKCk7XG4gICAgICBpZiAoYWxsX3N1bmtfY2FsbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaXNfYWxsX3N1bmsgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc19hbGxfc3VuaztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IocGxheWVyKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gIH1cbiAgbW92ZXMgPSBbXTtcbiAgcmVtYWluaW5nX21vdmVzID0gW107XG5cbiAgI3JlbWFpbmluZ19tb3Zlc19yZWR1Y2VyKGNvb3JkaW5hdGUpIHtcbiAgICB0aGlzLnJlbWFpbmluZ19tb3ZlcyA9IFsuLi50aGlzLnJlbWFpbmluZ19tb3ZlcywgY29vcmRpbmF0ZV07XG4gIH1cbiAgI2ZpbGxfcmVtYWluaW5nX21vdmVzID0gKCgpID0+IHtcbiAgICBjb25zdCBMRVRURVJTID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnLCAnaScsICdqJ107XG4gICAgTEVUVEVSUy5tYXAoKGxldHRlcikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIHRoaXMuI3JlbWFpbmluZ19tb3Zlc19yZWR1Y2VyKGAke2xldHRlcn0ke2l9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pKCk7XG4gICNhaV9tb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ19tb3Zlc1tcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucmVtYWluaW5nX21vdmVzLmxlbmd0aClcbiAgICBdO1xuICB9XG4gICNmaWx0ZXJfcmVtYWluaW5nX21vdmVzKGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBSRU1BSU5JTkdfTU9WRVNfQ09QWSA9IFsuLi50aGlzLnJlbWFpbmluZ19tb3Zlc107XG4gICAgY29uc3QgUkVNQUlOSU5HID0gUkVNQUlOSU5HX01PVkVTX0NPUFkuZmlsdGVyKChyZW1haW5pbmdfbW92ZSkgPT4ge1xuICAgICAgcmV0dXJuIHJlbWFpbmluZ19tb3ZlICE9PSBjb29yZGluYXRlO1xuICAgIH0pO1xuICAgIHJldHVybiBSRU1BSU5JTkc7XG4gIH1cbiAgI2F0dGFja19yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMubW92ZXMsIGlucHV0X2Nvb3JkaW5hdGVdO1xuICB9XG4gIGFpX2F0dGFjayhib2FyZCkge1xuICAgIGlmICh0aGlzLnBsYXllciAhPT0gJ2FpJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGF5ZXIgbmVlZHMgdG8gYmUgQUknKTtcbiAgICB9XG4gICAgY29uc3QgQ09PUkRJTkFURSA9IHRoaXMuI2FpX21vdmUoKTtcbiAgICB0aGlzLnJlbWFpbmluZ19tb3ZlcyA9IHRoaXMuI2ZpbHRlcl9yZW1haW5pbmdfbW92ZXMoQ09PUkRJTkFURSk7XG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMuI2F0dGFja19yZWR1Y2VyKENPT1JESU5BVEUpO1xuICAgIGJvYXJkLnJlY2VpdmVfYXR0YWNrKENPT1JESU5BVEUpO1xuICAgIHJldHVybiBDT09SRElOQVRFO1xuICB9XG4gIGh1bWFuX2F0dGFjayhib2FyZCwgY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLnBsYXllciAhPT0gJ2h1bWFuJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGF5ZXIgbmVlZHMgdG8gYmUgYSBodW1hbicpO1xuICAgIH1cbiAgICBjb25zdCBGSUxURVJFRF9NT1ZFUyA9IHRoaXMuI2ZpbHRlcl9yZW1haW5pbmdfbW92ZXMoY29vcmRpbmF0ZSk7XG4gICAgdGhpcy5yZW1haW5pbmdfbW92ZXMgPSBGSUxURVJFRF9NT1ZFUztcbiAgICB0aGlzLm1vdmVzID0gdGhpcy4jYXR0YWNrX3JlZHVjZXIoY29vcmRpbmF0ZSk7XG4gICAgYm9hcmQucmVjZWl2ZV9hdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmhpdHMgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKGZhbHNlKTtcbiAgfVxuXG4gICNoaXRfcmVkdWNlcihoaXRzX2FycmF5LCBwb3NpdGlvbl9oaXQpIHtcbiAgICBjb25zdCBISVRTID0gWy4uLmhpdHNfYXJyYXldO1xuICAgIEhJVFNbcG9zaXRpb25faGl0XSA9IHRydWU7XG4gICAgcmV0dXJuIEhJVFM7XG4gIH1cbiAgaGl0KHBvc2l0aW9uX2hpdCkge1xuICAgIHRoaXMuaGl0cyA9IHRoaXMuI2hpdF9yZWR1Y2VyKHRoaXMuaGl0cywgcG9zaXRpb25faGl0KTtcbiAgfVxuICBpc19zdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhpdHMuZXZlcnkoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gdHJ1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEVaX1RJTEVfQ09MT1JJWkVSIH0gZnJvbSAnLi9oZWxwZXJzL2hlbHBlcnMuanMnO1xuaW1wb3J0IEJBVFRMRVNISVAgZnJvbSAnLi9oZWxwZXJzL2JhdHRsZXNoaXBfdGlsZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcl9iYXR0bGVzaGlwKCkge1xuICBmb3IgKGxldCBsZXR0ZXIgaW4gQkFUVExFU0hJUCkge1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKEJBVFRMRVNISVBbbGV0dGVyXSwgJ3RpdGxlJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENBUlJJRVIsIERFU1RST1lFUiwgU1VCTUFSSU5FIH0gZnJvbSAnLi9oZWxwZXJzL3NoaXBfdGlsZXMuanMnO1xuaW1wb3J0IHsgRVpfVElMRV9DT0xPUklaRVIgfSBmcm9tICcuL2hlbHBlcnMvaGVscGVycy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX3NoaXBfdGlsZXMoKSB7XG4gIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuYmxhY2tfb3V0bGluZSwgJ3NoaXBfaHVsbF9vdXRsaW5lJyk7XG4gIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuaHVsbCwgJ3NoaXBfaHVsbCcpO1xuICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLmRhcmtfZ3JheSwgJ2RhcmtfZ3JheScpO1xuICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLmxpZ2h0X2dyYXksICdsaWdodF9ncmF5Jyk7XG4gIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuc2hpcF9saWdodCwgJ3NoaXBfbGlnaHQnKTtcbiAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5zdXJyb3VuZGluZ193YXRlcl9kYXJrLCAnc3Vycm91bmRpbmdfd2F0ZXJfZGFyaycpO1xuICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0LCAnc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQnKTtcblxuICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuYmxhY2tfb3V0bGluZSwgJ3NoaXBfaHVsbF9vdXRsaW5lJyk7XG4gIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5odWxsLCAnc2hpcF9odWxsJyk7XG4gIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5saWdodF9ncmF5LCAnbGlnaHRfZ3JheScpO1xuICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuZGFya19ncmF5LCAnZGFya19ncmF5Jyk7XG4gIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5zaGlwX2xpZ2h0LCAnc2hpcF9saWdodCcpO1xuICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyaywgJ3N1cnJvdW5kaW5nX3dhdGVyX2RhcmsnKTtcbiAgRVpfVElMRV9DT0xPUklaRVIoXG4gICAgREVTVFJPWUVSLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0LFxuICAgICdzdXJyb3VuZGluZ193YXRlcl9saWdodCdcbiAgKTtcblxuICBFWl9USUxFX0NPTE9SSVpFUihTVUJNQVJJTkUuaHVsbCwgJ3N1YicpO1xuICBFWl9USUxFX0NPTE9SSVpFUihTVUJNQVJJTkUuZGFya19ncmF5LCAnZGFya19ncmF5Jyk7XG59XG4iLCJpbXBvcnQgU1RBUlQgZnJvbSAnLi9oZWxwZXJzL3N0YXJ0X3RpbGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3Jfc3RhcnRfdGlsZXMoKSB7XG4gIGNvbnN0IEFMTCA9IFNUQVJULmFsbDtcbiAgQUxMLm1hcCgodGlsZV9pZCkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RhcnRfJHt0aWxlX2lkfWApO1xuICAgIFRJTEUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfYmFja2dyb3VuZCcpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfdGV4dCcpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuaW1hdGlvbnMoKSB7XG4gIGNvbnN0IExFRlRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDc1OSk7XG4gIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3NjEpO1xuICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ2FudGVubmFfb2ZmJyk7XG4gIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdhbnRlbm5hX29uJyk7XG4gIGNvbnN0IFBFUklTQ09QRV9TUElOTkVSID0gKCkgPT4ge1xuICAgIGlmIChMRUZUX1RJTEUuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdvbicpKSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnYW50ZW5uYV9vbicpO1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ2FudGVubmFfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ2FudGVubmFfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ2FudGVubmFfb24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ2FudGVubmFfb2ZmJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgnYW50ZW5uYV9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdhbnRlbm5hX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ2FudGVubmFfb2ZmJyk7XG4gICAgfVxuICB9O1xuICBjb25zdCBSQURBUl9TUElOTkVSMSA9ICgpID0+IHtcbiAgICBjb25zdCBMRUZUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3MTQpO1xuICAgIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3MTYpO1xuICB9O1xuICBjb25zdCBTVUJfQU5JTUFUSU9OID0gc2V0SW50ZXJ2YWwoUEVSSVNDT1BFX1NQSU5ORVIsIDEwMDApO1xuICBjb25zdCBCT0FUMSA9IHNldEludGVydmFsKFJBREFSX1NQSU5ORVIxLCAxMDAwKTtcbn1cbiIsImltcG9ydCB7IElURVJBVE9SIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY29uc3QgQkFUVExFU0hJUCA9IHtcbiAgQjogWzE1MCwgMTU0LCAyMjAsIDIyNCwgMzYwLCAzNjQsIDQzMCwgNDM2LCA0MzRdLFxuICBBOiBbMTU2LCAxNTksIDIyNiwgMjI5LCAzNjYsIDM2OSwgNDM2LCA0MzksIDUwNiwgNTA5XSxcbiAgVDE6IFsxNjIsIDE2MywgMjMyLCAyMzMsIDMwMiwgMzAzLCAzNzIsIDM3MywgNDQyLCA0NDMsIDUxMiwgNTEzXSxcbiAgVDI6IFsxNjcsIDE2OCwgMjM3LCAyMzgsIDMwNywgMzA4LCAzNzcsIDM3OCwgNDQ3LCA0NDgsIDUxNywgNTE4XSxcbiAgTDogWzEwMSwgMTcxLCAyNDEsIDMxMSwgMzgxLCA0NTFdLFxuICBFOiBbMTc2LCAyNDYsIDM4NiwgNDU2XSxcbiAgUzogWzE4MSwgMjUxLCAzOTQsIDQ2NF0sXG4gIEg6IFsxMTYsIDExOSwgMTg2LCAxODksIDI1NiwgMjU5LCAzOTYsIDM5OSwgNDY2LCA0NjksIDUzNiwgNTM5XSxcbiAgSTogWzE5MiwgMTkzLCAyNjIsIDI2MywgMzMyLCAzMzMsIDQwMiwgNDAzLCA0NzIsIDQ3M10sXG4gIFA6IFsxOTYsIDE5OSwgMjY2LCAyNjksIDQwNiwgNDc2LCA1NDZdLFxufTtcblxuKGZ1bmN0aW9uIGV6X2xvYWRlcigpIHtcbiAgY29uc3QgQiA9IEJBVFRMRVNISVAuQjtcbiAgSVRFUkFUT1IoODAsIDg0LCBCKTtcbiAgSVRFUkFUT1IoMjkwLCAyOTQsIEIpO1xuICBJVEVSQVRPUig1MDAsIDUwNCwgQik7XG5cbiAgY29uc3QgQSA9IEJBVFRMRVNISVAuQTtcbiAgSVRFUkFUT1IoODYsIDg5LCBBKTtcbiAgSVRFUkFUT1IoMjk2LCAyOTksIEEpO1xuXG4gIGNvbnN0IFQxID0gQkFUVExFU0hJUC5UMTtcbiAgSVRFUkFUT1IoOTEsIDk0LCBUMSk7XG5cbiAgY29uc3QgVDIgPSBCQVRUTEVTSElQLlQyO1xuICBJVEVSQVRPUig5NiwgOTksIFQyKTtcblxuICBjb25zdCBMID0gQkFUVExFU0hJUC5MO1xuICBJVEVSQVRPUig1MjEsIDUyNCwgTCk7XG5cbiAgY29uc3QgRSA9IEJBVFRMRVNISVAuRTtcbiAgSVRFUkFUT1IoMTA2LCAxMDksIEUpO1xuICBJVEVSQVRPUigzMTYsIDMxOCwgRSk7XG4gIElURVJBVE9SKDUyNiwgNTI5LCBFKTtcblxuICBjb25zdCBTID0gQkFUVExFU0hJUC5TO1xuICBJVEVSQVRPUigxMTEsIDExNCwgUyk7XG4gIElURVJBVE9SKDMyMSwgMzI0LCBTKTtcbiAgSVRFUkFUT1IoNTMxLCA1MzQsIFMpO1xuXG4gIGNvbnN0IEggPSBCQVRUTEVTSElQLkg7XG4gIElURVJBVE9SKDMyNiwgMzI5LCBIKTtcblxuICBjb25zdCBJID0gQkFUVExFU0hJUC5JO1xuICBJVEVSQVRPUigxMjEsIDEyNCwgSSk7XG4gIElURVJBVE9SKDU0MSwgNTQ0LCBJKTtcblxuICBjb25zdCBQID0gQkFUVExFU0hJUC5QO1xuICBJVEVSQVRPUigxMjYsIDEyOSwgUCk7XG4gIElURVJBVE9SKDMzNiwgMzM5LCBQKTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJBVFRMRVNISVA7XG4iLCJjb25zdCBJVEVSQVRPUiA9IChtaW4sIG1heCwgdGFyZ2V0X2FycmF5KSA9PiB7XG4gIGZvciAobGV0IGkgPSBtaW47IGkgPCBtYXggKyAxOyBpKyspIHtcbiAgICB0YXJnZXRfYXJyYXkucHVzaChpKTtcbiAgfVxufTtcblxuY29uc3QgRVpfVElMRV9DT0xPUklaRVIgPSAoaW5wdXRfYXJyYXksIGlucHV0X2NsYXNzKSA9PiB7XG4gIGlucHV0X2FycmF5Lm1hcCgodGlsZV9pZCkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aWxlX2lkKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKGlucHV0X2NsYXNzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBJVEVSQVRPUiwgRVpfVElMRV9DT0xPUklaRVIgfTtcbiIsImltcG9ydCB7IElURVJBVE9SIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY29uc3QgQ0FSUklFUiA9IHtcbiAgYmxhY2tfb3V0bGluZTogW1xuICAgIDE0NDYsIDE0NTAsIDE1MTYsIDE1MjAsIDE1ODYsIDE1OTAsIDE3MjMsIDE3MzMsIDE4MDMsIDE4NTksIDE4NzMsIDE4NzcsXG4gICAgMTkyOCwgMTk0MywgMTk0NiwgMTk0OCwgMTk1NSwgMTk1NiwgMTk4MiwgMTk4MywgMTk4NywgMTk4OCwgMTk5MiwgMTk5MyxcbiAgICAxOTk4LCAyMDEzLCAyMDI2LCAyMDUyLCAyMDU0LCAyMDU1LCAyMDU3LCAyMDU5LCAyMDYwLCAyMDYyLCAyMDY0LCAyMDY1LFxuICAgIDIwNjgsIDIwODMsIDIwODUsIDIwODksIDIwOTEsIDIwOTQsIDIwOTUsIDIxMjMsIDIxMjUsIDIxMjgsIDIxMzAsIDIxMzMsXG4gICAgMjEzNSwgMjEzOCwgMjE1MywgMjE1NSwgMjE1OSwgMjE2MSwgMjE2NSwgMjI2MCwgMjI2MSwgMjI2MiwgMjMwOSwgMjMzMixcbiAgICAyMzMzLCAyMzM0LCAyMzc5LCAyNDA0LCAyNDQ4LCAyNDc1LCAyNTE3LCAyNTQ2LCAyNTg2LCAyNjE3LCAyNjU2LCAyNjg3LFxuICAgIDI3MjYsXG4gIF0sXG4gIGh1bGw6IFtcbiAgICAxNTE5LCAxOTM5LCAxOTQwLCAyMDc5LCAyMDgwLCAyNjg4LCAyNjg5LCAyNjkyLCAyNjkzLCAyNjk2LCAyNjk3LCAyNzAwLFxuICAgIDI3MDEsIDI3MDQsIDI3MDUsIDI3MDgsIDI3MDksIDI3MTIsIDI3MTMsIDI3MTYsIDI3MTcsIDI3MjAsIDI3MjEsIDI3MjQsXG4gICAgMjcyNSxcbiAgXSxcbiAgZGFya19ncmF5OiBbXG4gICAgMTE2OCwgMTIzOCwgMTMwOCwgMTUxNywgMTUxOCwgMTkyOSwgMTkzMCwgMTk0MSwgMTk0MiwgMTk0NywgMjAyNSwgMjA1MyxcbiAgICAyMDU4LCAyMDYzLCAyMDY5LCAyMDcwLCAyMDgxLCAyMDgyLCAyMTI0LCAyMTI5LCAyMTM0LCAyMDkyLCAyMDkzLFxuICBdLFxuICBsaWdodF9ncmF5OiBbMTA5NywgMTA5OV0sXG4gIHNoaXBfbGlnaHQ6IFsxMDk4XSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfZGFyazogW1xuICAgIDI1NDUsIDI2MTYsIDI2ODYsIDI2OTAsIDI2OTEsIDI2OTQsIDI2OTUsIDI2OTgsIDI2OTksIDI3MDIsIDI3MDMsIDI3MDYsXG4gICAgMjcwNywgMjcxMCwgMjcxMSwgMjcxNCwgMjcxNSwgMjcxOCwgMjcxOSwgMjcyMiwgMjcyMywgMjU4NywgMjY1NywgMjcyNyxcbiAgICAyNDQ5LCAyNTE4LCAyNTE5LCAyNTg4LCAyNjU4LFxuICBdLFxuICBzdXJyb3VuZGluZ193YXRlcl9saWdodDogW1xuICAgIDI1ODksIDI2MTUsIDI2NTksIDI2ODQsIDI2ODUsIDI3MjgsIDI3MjksIDI3NTMsIDI3NTQsIDI3NTUsIDI3OTgsIDI3OTksXG4gIF0sXG59O1xuXG5jb25zdCBERVNUUk9ZRVIgPSB7XG4gIGJsYWNrX291dGxpbmU6IFtcbiAgICAxMTk0LCAxMTk4LCAxMjExLCAxMjY1LCAxMjY5LCAxMjgwLCAxNDc0LCAxNDkxLCAxNDkyLCAxNTQ1LCAxNTYxLCAxNjE2LFxuICAgIDE2MzEsIDE2ODcsIDE3MDEsXG4gIF0sXG4gIGh1bGw6IFsxNjg4LCAxNjkxLCAxNjkyLCAxNjk1LCAxNjk2LCAxNjk5LCAxNzAwXSxcbiAgZGFya19ncmF5OiBbNzg1LCA4NTUsIDkyNSwgOTk1LCAxMjY2LCAxMjcwLCAxMjczLCAxMjc0LCAxMjc2LCAxMjc5XSxcbiAgbGlnaHRfZ3JheTogWzcxNCwgNzE2LCAxMTMzLCAxMTM3LCAxMjcyLCAxMjc1LCAxMjc3XSxcbiAgc2hpcF9saWdodDogWzcxNV0sXG4gIHN1cnJvdW5kaW5nX3dhdGVyX2Rhcms6IFsxNjg5LCAxNjkwLCAxNjkzLCAxNjk0LCAxNjk3LCAxNjk4XSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQ6IFtcbiAgICAxNjMyLCAxNjg1LCAxNjg2LCAxNzAyLCAxNzAzLCAxNzU0LCAxNzU1LCAxNzczLCAxNzc0LFxuICBdLFxufTtcblxuY29uc3QgU1VCTUFSSU5FID0ge1xuICBodWxsOiBbXSxcbiAgZGFya19ncmF5OiBbNzYwLCA4MzBdLFxuICBzdXJyb3VuZGluZ193YXRlcl9kYXJrOiBbXSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQ6IFtdLFxufTtcblxuKGZ1bmN0aW9uIGNhcnJpZXJfZXpfbG9hZGVyKCkge1xuICBjb25zdCBPVVRMSU5FID0gQ0FSUklFUi5ibGFja19vdXRsaW5lO1xuICBJVEVSQVRPUigxMzc2LCAxMzgwLCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMTY1MywgMTY2MywgT1VUTElORSk7XG4gIElURVJBVE9SKDE3OTAsIDE3OTMsIE9VVExJTkUpO1xuICBJVEVSQVRPUigyMDE1LCAyMDE5LCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMjAyMiwgMjAyNCwgT1VUTElORSk7XG4gIElURVJBVE9SKDIxOTAsIDIyMzksIE9VVExJTkUpO1xuXG4gIGNvbnN0IEhVTEwgPSBDQVJSSUVSLmh1bGw7XG4gIElURVJBVE9SKDE0NDcsIDE0NDksIEhVTEwpO1xuICBJVEVSQVRPUigxNTg3LCAxNTg5LCBIVUxMKTtcbiAgSVRFUkFUT1IoMTcyNCwgMTczMiwgSFVMTCk7XG4gIElURVJBVE9SKDE3OTQsIDE4MDIsIEhVTEwpO1xuICBJVEVSQVRPUigxODYwLCAxODcyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTkzMSwgMTkzNCwgSFVMTCk7XG4gIElURVJBVE9SKDE5OTksIDIwMTIsIEhVTEwpO1xuICBJVEVSQVRPUigyMDcxLCAyMDc0LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjEzOSwgMjE1MiwgSFVMTCk7XG4gIElURVJBVE9SKDIyNjMsIDIzMDgsIEhVTEwpO1xuICBJVEVSQVRPUigyMzM1LCAyMzc4LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjQwNSwgMjQ0NywgSFVMTCk7XG4gIElURVJBVE9SKDI0NzYsIDI1MTYsIEhVTEwpO1xuICBJVEVSQVRPUigyNTQ3LCAyNTg1LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjYxOCwgMjY1NSwgSFVMTCk7XG5cbiAgY29uc3QgREFSS19HUkFZID0gQ0FSUklFUi5kYXJrX2dyYXk7XG4gIElURVJBVE9SKDExMzQsIDExMzYsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDIwODYsIDIwODgsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDIxNTYsIDIxNTgsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDIxNjIsIDIxNjQsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDE5MzUsIDE5MzgsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDIwNzUsIDIwNzgsIERBUktfR1JBWSk7XG5cbiAgY29uc3QgTElHSFRfR1JBWSA9IENBUlJJRVIubGlnaHRfZ3JheTtcbiAgSVRFUkFUT1IoMjMzNSwgMjM3OCwgTElHSFRfR1JBWSk7XG5cbiAgY29uc3QgU1VSUk9VTkRJTkdfV0FURVJfREFSSyA9IENBUlJJRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyaztcbiAgSVRFUkFUT1IoMjc1NiwgMjc5NywgU1VSUk9VTkRJTkdfV0FURVJfREFSSyk7XG59KSgpO1xuXG4oZnVuY3Rpb24gZGVzdHJveWVyX2V6X2xvYWRlcigpIHtcbiAgY29uc3QgT1VUTElORSA9IERFU1RST1lFUi5ibGFja19vdXRsaW5lO1xuICBJVEVSQVRPUigxNDAzLCAxNDIyLCBPVVRMSU5FKTtcblxuICBjb25zdCBIVUxMID0gREVTVFJPWUVSLmh1bGw7XG4gIElURVJBVE9SKDE0NzUsIDE0OTAsIEhVTEwpO1xuICBJVEVSQVRPUigxNjE3LCAxNjMwLCBIVUxMKTtcblxuICBjb25zdCBMSUdIVF9HUkFZID0gREVTVFJPWUVSLmxpZ2h0X2dyYXk7XG4gIElURVJBVE9SKDE1NDYsIDE1NjAsIExJR0hUX0dSQVkpO1xuICBJVEVSQVRPUigxMDYzLCAxMDY3LCBMSUdIVF9HUkFZKTtcbiAgSVRFUkFUT1IoMTIwMiwgMTIwNywgTElHSFRfR1JBWSk7XG4gIElURVJBVE9SKDEzNDIsIDEzNDcsIExJR0hUX0dSQVkpO1xuXG4gIGNvbnN0IERBUktfR1JBWSA9IERFU1RST1lFUi5kYXJrX2dyYXk7XG4gIElURVJBVE9SKDEzMzQsIDEzMzYsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDEzMzgsIDEzNDAsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDEzNDksIDEzNTEsIERBUktfR1JBWSk7XG5cbiAgY29uc3QgU1VSUk9VTkRJTkdfV0FURVJfREFSSyA9IERFU1RST1lFUi5zdXJyb3VuZGluZ193YXRlcl9kYXJrO1xuICBJVEVSQVRPUigxNzU2LCAxNzcyLCBTVVJST1VORElOR19XQVRFUl9EQVJLKTtcbn0pKCk7XG5cbihmdW5jdGlvbiBzdWJtYXJpbmVfZXpfbG9hZGVyKCkge1xuICBjb25zdCBIVUxMID0gU1VCTUFSSU5FLmh1bGw7XG4gIElURVJBVE9SKDg5OCwgOTAyLCBIVUxMKTtcbn0pKCk7XG5cbmV4cG9ydCB7IENBUlJJRVIsIERFU1RST1lFUiwgU1VCTUFSSU5FIH07XG4iLCJpbXBvcnQgeyBJVEVSQVRPUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmNvbnN0IFNUQVJUID0ge1xuICBzOiBbMjIxLCAyMjIsIDQzNywgNDM4XSxcbiAgdDE6IFsyMzQsIDIzNSwgMzA0LCAzMDUsIDM3NCwgMzc1LCA0NDQsIDQ0NSwgNTE0LCA1MTUsIDU4NCwgNTg1XSxcbiAgYTogW1xuICAgIDI0MSwgMjQyLCAyNDcsIDI0OCwgNDUxLCA0NTIsIDQ1NywgNDU4LCA1MjEsIDUyMiwgNTI3LCA1MjgsIDU5MSwgNTkyLCA1OTcsXG4gICAgNTk4LFxuICBdLFxuICByOiBbXG4gICAgMjUxLCAyNTIsIDI1NywgMjU4LCA0NjEsIDQ2MiwgNDY3LCA0NjgsIDUzMSwgNTMyLCA1MzcsIDUzOCwgNjAxLCA2MDIsIDYwNyxcbiAgICA2MDgsXG4gIF0sXG4gIHQyOiBbMjY0LCAyNjUsIDMzNCwgMzM1LCA0MDQsIDQwNSwgNDc0LCA0NzUsIDU0NCwgNTQ1LCA2MTQsIDYxNV0sXG4gIGFsbDogW10sXG59O1xuXG4oZnVuY3Rpb24gZXpfbG9hZGVyKCkge1xuICBjb25zdCBTID0gU1RBUlQucztcbiAgSVRFUkFUT1IoODEsIDg4LCBTKTtcbiAgSVRFUkFUT1IoMTUxLCAxNTgsIFMpO1xuICBJVEVSQVRPUigyOTEsIDI5OCwgUyk7XG4gIElURVJBVE9SKDM2MSwgMzY4LCBTKTtcbiAgSVRFUkFUT1IoNTAxLCA1MDgsIFMpO1xuICBJVEVSQVRPUig1NzEsIDU3OCwgUyk7XG5cbiAgY29uc3QgVDEgPSBTVEFSVC50MTtcbiAgSVRFUkFUT1IoOTEsIDk4LCBUMSk7XG4gIElURVJBVE9SKDE2MSwgMTY4LCBUMSk7XG5cbiAgY29uc3QgQSA9IFNUQVJULmE7XG4gIElURVJBVE9SKDEwMSwgMTA4LCBBKTtcbiAgSVRFUkFUT1IoMTcxLCAxNzgsIEEpO1xuICBJVEVSQVRPUigzMTEsIDMxOCwgQSk7XG4gIElURVJBVE9SKDM4MSwgMzg4LCBBKTtcblxuICBjb25zdCBSID0gU1RBUlQucjtcbiAgSVRFUkFUT1IoMTExLCAxMTYsIFIpO1xuICBJVEVSQVRPUigxODEsIDE4NiwgUik7XG4gIElURVJBVE9SKDMyMSwgMzI2LCBSKTtcbiAgSVRFUkFUT1IoMzkxLCAzOTYsIFIpO1xuXG4gIGNvbnN0IFQyID0gU1RBUlQudDI7XG4gIElURVJBVE9SKDEyMSwgMTI4LCBUMik7XG4gIElURVJBVE9SKDE5MSwgMTk4LCBUMik7XG5cbiAgZm9yIChsZXQgbGV0dGVyIGluIFNUQVJUKSB7XG4gICAgaWYgKGxldHRlciA9PT0gJ2FsbCcpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBTVEFSVFtsZXR0ZXJdLm1hcCgobnVtYmVyKSA9PiB7XG4gICAgICBTVEFSVC5hbGwucHVzaChudW1iZXIpO1xuICAgIH0pO1xuICB9XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgU1RBUlQ7XG4iLCJpbXBvcnQgcmVuZGVyX3RpbGVzIGZyb20gJy4vcmVuZGVyX3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9zdGFydF90aWxlcyBmcm9tICcuL2NvbG9yX3N0YXJ0X3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9zaGlwX3RpbGVzIGZyb20gJy4vY29sb3Jfc2hpcF90aWxlcy5qcyc7XG5pbXBvcnQgY29sb3JfYmF0dGxlc2hpcCBmcm9tICcuL2NvbG9yX2JhdHRsZXNoaXAuanMnO1xuaW1wb3J0IGFuaW1hdGlvbnMgZnJvbSAnLi9oZWxwZXJzL2FuaW1hdGlvbnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lcGFnZSgpIHtcbiAgcmVuZGVyX3RpbGVzKCk7XG4gIGNvbG9yX3N0YXJ0X3RpbGVzKCk7XG4gIGNvbG9yX3NoaXBfdGlsZXMoKTtcbiAgY29sb3JfYmF0dGxlc2hpcCgpO1xuICBhbmltYXRpb25zKCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJfdGlsZXMoKSB7XG4gIGNvbnN0IE1BSU4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IEhFQURJTkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgU1RBUlQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgSEVBRElORy5pZCA9ICdic19oZWFkaW5nJztcbiAgU1RBUlQuaWQgPSAnc3RhcnRfYnV0dG9uJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyODAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IGk7XG4gICAgVElMRS5jbGFzc0xpc3QgPSAndGlsZSB3YXRlcic7XG4gICAgSEVBRElORy5hcHBlbmQoVElMRSk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3MDA7IGkrKykge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBUSUxFLmlkID0gYHN0YXJ0XyR7aX1gO1xuICAgIFRJTEUuY2xhc3NMaXN0ID0gJ3RpbGUgc3RhcnQgc3RhcnRfYmFja2dyb3VuZCc7XG4gICAgU1RBUlQuYXBwZW5kKFRJTEUpO1xuICB9XG4gIE1BSU4uYXBwZW5kKEhFQURJTkcpO1xuICBNQUlOLmFwcGVuZChTVEFSVCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKE1BSU4pO1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLW9wYWNpdHktMDA6IDE7XFxuICAtLW9wYWNpdHktMDU6IDAuOTg7XFxuICAtLW9wYWNpdHktMTA6IDAuOTY7XFxuICAtLW9wYWNpdHktMTU6IDAuOTQ7XFxuICAtLW9wYWNpdHktMjA6IDAuOTI7XFxuICAtLW9wYWNpdHktMjU6IDAuOTtcXG4gIC0tb3BhY2l0eS0zMDogMC44ODtcXG4gIC0tb3BhY2l0eS0zNTogMC44NjtcXG4gIC0tb3BhY2l0eS00MDogMC44NDtcXG4gIC0tb3BhY2l0eS00NTogMC44MjtcXG4gIC0tb3BhY2l0eS01MDogMC44O1xcbiAgLS1vcGFjaXR5LTU1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTYwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTY1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTcwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTc1OiAwLjk7XFxuICAtLW9wYWNpdHktODA6IDAuOTI7XFxuICAtLW9wYWNpdHktODU6IDAuOTQ7XFxuICAtLW9wYWNpdHktOTA6IDAuOTY7XFxuICAtLW9wYWNpdHktOTU6IDAuOTg7XFxuICAtLW9wYWNpdHktMTAwOiAxO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTAwKTtcXG4gIH1cXG5cXG4gIDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0wNSk7XFxuICB9XFxuXFxuICAxMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwKTtcXG4gIH1cXG5cXG4gIDE1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTUpO1xcbiAgfVxcblxcbiAgMjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0yMCk7XFxuICB9XFxuXFxuICAyNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTI1KTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzApO1xcbiAgfVxcblxcbiAgMzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zNSk7XFxuICB9XFxuXFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTQwKTtcXG4gIH1cXG5cXG4gIDQ1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDUpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS01MCk7XFxuICB9XFxuXFxuICA1NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTU1KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNjApO1xcbiAgfVxcblxcbiAgNjUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02NSk7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTcwKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzUpO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS04MCk7XFxuICB9XFxuXFxuICA4NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTg1KTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktOTApO1xcbiAgfVxcblxcbiAgOTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05NSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xMDApO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvYW5pbWF0b3IuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tb3BhY2l0eS0wMDogMTtcXG4gIC0tb3BhY2l0eS0wNTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDogMC45NjtcXG4gIC0tb3BhY2l0eS0xNTogMC45NDtcXG4gIC0tb3BhY2l0eS0yMDogMC45MjtcXG4gIC0tb3BhY2l0eS0yNTogMC45O1xcbiAgLS1vcGFjaXR5LTMwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTM1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTQwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTQ1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTUwOiAwLjg7XFxuICAtLW9wYWNpdHktNTU6IDAuODI7XFxuICAtLW9wYWNpdHktNjA6IDAuODQ7XFxuICAtLW9wYWNpdHktNjU6IDAuODY7XFxuICAtLW9wYWNpdHktNzA6IDAuODg7XFxuICAtLW9wYWNpdHktNzU6IDAuOTtcXG4gIC0tb3BhY2l0eS04MDogMC45MjtcXG4gIC0tb3BhY2l0eS04NTogMC45NDtcXG4gIC0tb3BhY2l0eS05MDogMC45NjtcXG4gIC0tb3BhY2l0eS05NTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDA6IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMDApO1xcbiAgfVxcblxcbiAgNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTA1KTtcXG4gIH1cXG5cXG4gIDEwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTApO1xcbiAgfVxcblxcbiAgMTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xNSk7XFxuICB9XFxuXFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTIwKTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMjUpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zMCk7XFxuICB9XFxuXFxuICAzNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTM1KTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDApO1xcbiAgfVxcblxcbiAgNDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS00NSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTUwKTtcXG4gIH1cXG5cXG4gIDU1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNTUpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02MCk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTY1KTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzApO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS03NSk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTgwKTtcXG4gIH1cXG5cXG4gIDg1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktODUpO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05MCk7XFxuICB9XFxuXFxuICA5NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTk1KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwMCk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuI2JzX2hlYWRpbmcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNDAsIDFmcik7XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuI3N0YXJ0X2J1dHRvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4udGlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTMyLCAyNTUsIDIzKTtcXG59XFxuXFxuLnRpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi53YXRlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTU3O1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zdGFydF9iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfdGV4dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWM5NzFiO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvaG9tZXBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuI2JzX2hlYWRpbmcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNDAsIDFmcik7XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuI3N0YXJ0X2J1dHRvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4udGlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTMyLCAyNTUsIDIzKTtcXG59XFxuXFxuLnRpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi53YXRlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTU3O1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zdGFydF9iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfdGV4dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWM5NzFiO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0b3IuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2hpcF9odWxsX291dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaGlwX2h1bGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTU1NTtcXG59XFxuXFxuLnNoaXBfbGlnaHQge1xcbiAgYmFja2dyb3VuZDogI2ZmMDAwMDtcXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAwLjc1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5saWdodF9ncmF5IHtcXG4gIGJhY2tncm91bmQ6ICM2YzZjNmM7XFxufVxcblxcbi5kYXJrX2dyYXkge1xcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2Rhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTM4YztcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyYjE7XFxufVxcblxcbi5zdWIge1xcbiAgYmFja2dyb3VuZDogIzFjMWMxYztcXG59XFxuXFxuLmFudGVubmFfb2ZmIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwMTAxNTc7XFxufVxcblxcbi5hbnRlbm5hX29uIHtcXG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XFxufVxcblxcbi5yYWRhcl9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnJhZGFyX29uIHtcXG4gIGJhY2tncm91bmQ6ICM2YzZjNmM7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9zaGlwcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi9hbmltYXRvci5jc3MnO1xcblxcbi5zaGlwX2h1bGxfb3V0bGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNoaXBfaHVsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1NTU1O1xcbn1cXG5cXG4uc2hpcF9saWdodCB7XFxuICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLmxpZ2h0X2dyYXkge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG59XFxuXFxuLmRhcmtfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzhjO1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjJiMTtcXG59XFxuXFxuLnN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xcbn1cXG5cXG4uYW50ZW5uYV9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLmFudGVubmFfb24ge1xcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcXG59XFxuXFxuLnJhZGFyX29mZiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDEwMTU3O1xcbn1cXG5cXG4ucmFkYXJfb24ge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2hvbWVwYWdlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL3NoaXBzLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBnYW1lbG9vcCBmcm9tICcuL2NvbXBvbmVudHMvZ2FtZS9HQU1FX0xPT1AuanMnO1xuaW1wb3J0IGhvbWVwYWdlIGZyb20gJy4vY29tcG9uZW50cy91aS9ob21lcGFnZS9ob21lcGFnZS5qcyc7XG5cbmNvbnN0IEdBTUUgPSBnYW1lbG9vcCgpO1xuaG9tZXBhZ2UoKTtcbiJdLCJuYW1lcyI6WyJHYW1lYm9hcmQiLCJQbGF5ZXIiLCJnYW1lbG9vcCIsIlBMQVlFUjEiLCJQTEFZRVIyIiwiUExBWUVSMV9HQU1FQk9BUkQiLCJQTEFZRVIyX0dBTUVCT0FSRCIsIm1hcCIsImJvYXJkIiwicGxhY2Vfc2hpcCIsIlNoaXAiLCJjYXJyaWVyIiwicG9zaXRpb24iLCJzaGlwIiwiYmF0dGxlc2hpcCIsImRlc3Ryb3llciIsInN1YiIsInBhdHJvbEJvYXQiLCJpbnB1dF9jb29yZGluYXRlcyIsInNoaXBzIiwiaW5wdXRfY29vcmRpbmF0ZSIsIm1pc3MiLCJXQVNfSElUIiwiaW5jbHVkZXMiLCJoaXRzIiwiSElUX0lOREVYIiwiaW5kZXhPZiIsImhpdCIsIm1pc3NlcyIsImlzX2FsbF9zdW5rIiwiYWxsX3N1bmtfY2FsbCIsImlzX3N1bmsiLCJzb3J0IiwicGxheWVyIiwiTEVUVEVSUyIsImxldHRlciIsImkiLCJFcnJvciIsIkNPT1JESU5BVEUiLCJyZW1haW5pbmdfbW92ZXMiLCJtb3ZlcyIsInJlY2VpdmVfYXR0YWNrIiwiY29vcmRpbmF0ZSIsIkZJTFRFUkVEX01PVkVTIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiUkVNQUlOSU5HX01PVkVTX0NPUFkiLCJSRU1BSU5JTkciLCJmaWx0ZXIiLCJyZW1haW5pbmdfbW92ZSIsIkFycmF5IiwiZmlsbCIsInBvc2l0aW9uX2hpdCIsImV2ZXJ5IiwiaGl0c19hcnJheSIsIkhJVFMiLCJFWl9USUxFX0NPTE9SSVpFUiIsIkJBVFRMRVNISVAiLCJjb2xvcl9iYXR0bGVzaGlwIiwiQ0FSUklFUiIsIkRFU1RST1lFUiIsIlNVQk1BUklORSIsImNvbG9yX3NoaXBfdGlsZXMiLCJibGFja19vdXRsaW5lIiwiaHVsbCIsImRhcmtfZ3JheSIsImxpZ2h0X2dyYXkiLCJzaGlwX2xpZ2h0Iiwic3Vycm91bmRpbmdfd2F0ZXJfZGFyayIsInN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0IiwiU1RBUlQiLCJjb2xvcl9zdGFydF90aWxlcyIsIkFMTCIsImFsbCIsInRpbGVfaWQiLCJUSUxFIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImFuaW1hdGlvbnMiLCJMRUZUX1RJTEUiLCJSSUdIVF9USUxFIiwiUEVSSVNDT1BFX1NQSU5ORVIiLCJ2YWx1ZSIsIlJBREFSX1NQSU5ORVIxIiwiU1VCX0FOSU1BVElPTiIsInNldEludGVydmFsIiwiQk9BVDEiLCJJVEVSQVRPUiIsIkIiLCJBIiwiVDEiLCJUMiIsIkwiLCJFIiwiUyIsIkgiLCJJIiwiUCIsImV6X2xvYWRlciIsIm1pbiIsIm1heCIsInRhcmdldF9hcnJheSIsInB1c2giLCJpbnB1dF9hcnJheSIsImlucHV0X2NsYXNzIiwiY2Fycmllcl9lel9sb2FkZXIiLCJPVVRMSU5FIiwiSFVMTCIsIkRBUktfR1JBWSIsIkxJR0hUX0dSQVkiLCJTVVJST1VORElOR19XQVRFUl9EQVJLIiwiZGVzdHJveWVyX2V6X2xvYWRlciIsInN1Ym1hcmluZV9lel9sb2FkZXIiLCJzIiwidDEiLCJhIiwiciIsInQyIiwiUiIsIm51bWJlciIsInJlbmRlcl90aWxlcyIsImhvbWVwYWdlIiwiTUFJTiIsImNyZWF0ZUVsZW1lbnQiLCJIRUFESU5HIiwiaWQiLCJhcHBlbmQiLCJib2R5IiwiR0FNRSJdLCJzb3VyY2VSb290IjoiIn0=