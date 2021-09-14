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
  var player1_gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var player2_gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

  var RESET = function RESET() {
    player1_gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    player2_gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  };

  var RETURN_SHIPS = function RETURN_SHIPS(player) {
    if (player === 1) {
      return player1_gameboard.ships;
    }

    if (player === 2) {
      return player2_gameboard.ships;
    }
  }; // todo, we are returning a specific instance of new Gameboard. need to create methods that interact with the gameboard


  var PLACE_SHIP = function PLACE_SHIP(board, ship, positions) {
    if (board === 1) {
      player1_gameboard.place_ship(ship, positions);
    }

    if (board === 2) {
      player2_gameboard.place_ship(ship, positions);
    }
  };

  return {
    PLAYER1: PLAYER1,
    PLAYER2: PLAYER2,
    RESET: RESET,
    RETURN_SHIPS: RETURN_SHIPS,
    PLACE_SHIP: PLACE_SHIP
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

/***/ "./src/components/helpers/coordinates.js":
/*!***********************************************!*\
  !*** ./src/components/helpers/coordinates.js ***!
  \***********************************************/
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
    TILE.classList.add('gameboards_background');
    TILE.classList.add(CLASSES[RANDOM_NUMBER]);
    MAIN.append(TILE);
  }

  document.body.append(MAIN);
}

/***/ }),

/***/ "./src/components/ui/game_boards/helpers/render_gameboard_tiles.js":
/*!*************************************************************************!*\
  !*** ./src/components/ui/game_boards/helpers/render_gameboard_tiles.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render_gameboard_tiles)
/* harmony export */ });
/* harmony import */ var _helpers_coordinates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/coordinates.js */ "./src/components/helpers/coordinates.js");

function render_gameboard_tiles() {
  var MAIN = document.getElementById('game_boards');
  var PLAYER_BOARD = document.createElement('div');
  var AI_BOARD = document.createElement('div');
  PLAYER_BOARD.classList.add('game_board');
  AI_BOARD.classList.add('game_board');
  PLAYER_BOARD.id = 'player_board';
  AI_BOARD.id = 'ai_board';

  for (var i = 0; i < 100; i++) {
    var PLAYER_BOARD_TILE = document.createElement('div');
    var AI_BOARD_TILE = document.createElement('div');
    PLAYER_BOARD_TILE.classList.add('game_board_tile');
    AI_BOARD_TILE.classList.add('game_board_tile');
    PLAYER_BOARD_TILE.setAttribute('data-player-board', _helpers_coordinates_js__WEBPACK_IMPORTED_MODULE_0__["default"][i]);
    AI_BOARD_TILE.setAttribute('data-ai-board', _helpers_coordinates_js__WEBPACK_IMPORTED_MODULE_0__["default"][i]);
    PLAYER_BOARD.append(PLAYER_BOARD_TILE);
    AI_BOARD.append(AI_BOARD_TILE);
  }

  MAIN.append(PLAYER_BOARD);
  MAIN.append(AI_BOARD);
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
/* harmony import */ var _render_gameboard_tiles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render_gameboard_tiles.js */ "./src/components/ui/game_boards/helpers/render_gameboard_tiles.js");


function render_tiles() {
  (0,_render_background_tiles_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_render_gameboard_tiles_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
    var PLAYER1_SHIPS = _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.RETURN_SHIPS(1);

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
      _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.PLACE_SHIP(1, CURRENT_SHIP, ALL_COORDINATES);
      ALL_COORDINATES.map(function (coordinate) {
        var TILE = document.getElementById(coordinate);
        TILE.classList.add('placed_tile');
      });
      current_ship_index = current_ship_index + 1;

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
      _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.PLACE_SHIP(2, ship, SHIP_POSITIONS);
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
/* harmony import */ var _helpers_coordinates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/coordinates.js */ "./src/components/helpers/coordinates.js");

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

    _TILE.id = _helpers_coordinates_js__WEBPACK_IMPORTED_MODULE_0__["default"][_i];

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
___CSS_LOADER_EXPORT___.push([module.id, ".gameboards_background:hover {\n  background: #84ff17;\n}\n\nbody {\n  min-width: 70em;\n}\n\n#game_boards {\n  position: absolute;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  height: 50em;\n  min-width: 70em;\n}\n\n.game_board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 30em;\n  width: 30em;\n}\n\n.game_board_tile {\n  border: 1px solid white;\n}\n\n#player_board {\n  position: absolute;\n  top: 10em;\n  left: 2em;\n}\n\n#ai_board {\n  position: absolute;\n  top: 10em;\n  right: 2em;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/game_boards/css/index.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;AACZ","sourcesContent":[".gameboards_background:hover {\n  background: #84ff17;\n}\n\nbody {\n  min-width: 70em;\n}\n\n#game_boards {\n  position: absolute;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  height: 50em;\n  min-width: 70em;\n}\n\n.game_board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 30em;\n  width: 30em;\n}\n\n.game_board_tile {\n  border: 1px solid white;\n}\n\n#player_board {\n  position: absolute;\n  top: 10em;\n  left: 2em;\n}\n\n#ai_board {\n  position: absolute;\n  top: 10em;\n  right: 2em;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".place_ships_background_tile:hover {\n  background: #84ff17;\n}\n\nbody {\n  min-width: 70em;\n}\n\n#place_ships_main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  min-width: 70em;\n  height: 50em;\n}\n\n#place_ships_container {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  position: absolute;\n  left: 15em;\n  bottom: 4em;\n  height: 40em;\n  width: 40em;\n  border: 1px solid #ac971b;\n}\n\n#instructions_container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  position: absolute;\n  top: 1em;\n  left: 29em;\n  width: 12em;\n  height: 3em;\n  background: #aa9f61;\n  border-radius: 0.125em;\n}\n\n#bkd_space {\n  display: flex;\n  justify-content: center;\n  width: 3.5em;\n  font-size: 1.8em;\n  box-shadow: 1px 1px 2px 2px #000000;\n}\n\n#instructions {\n  font-size: 1em;\n  font-family: 'Space Mono', monospace;\n}\n\n.place_ship_tile {\n  border: 1px solid #ac971b;\n}\n\n.placed_tile {\n  border: 1px solid #e7ca29;\n  background: #ac971b;\n}\n\n.place_ship_hovered {\n  background: #84ff17;\n}\n\n.invalid_ship_placement {\n  background: #f00;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/place_ships/css/index.css"],"names":[],"mappings":"AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;EACE,cAAc;EACd,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');\n\n.place_ships_background_tile:hover {\n  background: #84ff17;\n}\n\nbody {\n  min-width: 70em;\n}\n\n#place_ships_main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  min-width: 70em;\n  height: 50em;\n}\n\n#place_ships_container {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  position: absolute;\n  left: 15em;\n  bottom: 4em;\n  height: 40em;\n  width: 40em;\n  border: 1px solid #ac971b;\n}\n\n#instructions_container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  position: absolute;\n  top: 1em;\n  left: 29em;\n  width: 12em;\n  height: 3em;\n  background: #aa9f61;\n  border-radius: 0.125em;\n}\n\n#bkd_space {\n  display: flex;\n  justify-content: center;\n  width: 3.5em;\n  font-size: 1.8em;\n  box-shadow: 1px 1px 2px 2px #000000;\n}\n\n#instructions {\n  font-size: 1em;\n  font-family: 'Space Mono', monospace;\n}\n\n.place_ship_tile {\n  border: 1px solid #ac971b;\n}\n\n.placed_tile {\n  border: 1px solid #e7ca29;\n  background: #ac971b;\n}\n\n.place_ship_hovered {\n  background: #84ff17;\n}\n\n.invalid_ship_placement {\n  background: #f00;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBU0MsU0FBVCxHQUFxQjtBQUNwQixNQUFNVixDQUFDLEdBQUdELFVBQVUsQ0FBQ0MsQ0FBckI7QUFDQUYsRUFBQUEscURBQVEsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTRSxDQUFULENBQVI7QUFDQUYsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXRSxDQUFYLENBQVI7QUFDQUYsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXRSxDQUFYLENBQVI7QUFFQSxNQUFNQyxDQUFDLEdBQUdGLFVBQVUsQ0FBQ0UsQ0FBckI7QUFDQUgsRUFBQUEscURBQVEsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTRyxDQUFULENBQVI7QUFDQUgsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXRyxDQUFYLENBQVI7QUFFQSxNQUFNQyxFQUFFLEdBQUdILFVBQVUsQ0FBQ0csRUFBdEI7QUFDQUosRUFBQUEscURBQVEsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTSSxFQUFULENBQVI7QUFFQSxNQUFNQyxFQUFFLEdBQUdKLFVBQVUsQ0FBQ0ksRUFBdEI7QUFDQUwsRUFBQUEscURBQVEsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTSyxFQUFULENBQVI7QUFFQSxNQUFNQyxDQUFDLEdBQUdMLFVBQVUsQ0FBQ0ssQ0FBckI7QUFDQU4sRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXTSxDQUFYLENBQVI7QUFFQSxNQUFNQyxDQUFDLEdBQUdOLFVBQVUsQ0FBQ00sQ0FBckI7QUFDQVAsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXTyxDQUFYLENBQVI7QUFDQVAsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXTyxDQUFYLENBQVI7QUFDQVAsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXTyxDQUFYLENBQVI7QUFFQSxNQUFNQyxDQUFDLEdBQUdQLFVBQVUsQ0FBQ08sQ0FBckI7QUFDQVIsRUFBQUEscURB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LENBQVI7QUFDQXJFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXFFLElBQWIsQ0FBUjtBQUNBckUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhcUUsSUFBYixDQUFSO0FBQ0FyRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFxRSxJQUFiLENBQVI7QUFDQXJFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXFFLElBQWIsQ0FBUjtBQUNBckUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhcUUsSUFBYixDQUFSO0FBQ0FyRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFxRSxJQUFiLENBQVI7QUFDQXJFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXFFLElBQWIsQ0FBUjtBQUNBckUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhcUUsSUFBYixDQUFSO0FBQ0FyRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFxRSxJQUFiLENBQVI7QUFDQXJFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXFFLElBQWIsQ0FBUjtBQUNBckUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhcUUsSUFBYixDQUFSO0FBQ0FyRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFxRSxJQUFiLENBQVI7QUFFQSxNQUFNQyxTQUFTLEdBQUd2RCxPQUFPLENBQUNNLFNBQTFCO0FBQ0FyQixFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFzRSxTQUFiLENBQVI7QUFDQXRFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXNFLFNBQWIsQ0FBUjtBQUNBdEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhc0UsU0FBYixDQUFSO0FBQ0F0RSxFQUFBQSxx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RUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lL0dBTUVfTE9PUC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWUvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2hlbHBlcnMvY29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL2hlbHBlcnMvcmVuZGVyX2JhY2tncm91bmRfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL2hlbHBlcnMvcmVuZGVyX2dhbWVib2FyZF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvZ2FtZV9ib2FyZHMvaGVscGVycy9yZW5kZXJfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL3JlbmRlcl9nYW1lX2JvYXJkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9hbmltYXRpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2JhdHRsZXNoaXBfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvY29sb3JfYmF0dGxlc2hpcF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9jb2xvcl9zaGlwX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2NvbG9yX3N0YXJ0X3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2NvbG9yX3dhdGVyX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvbGlzdGVuZXJzX2hhbmRsZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL3JlbmRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9zaGlwX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL3N0YXJ0X3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvaGVscGVycy9sb2dpY19saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2hlbHBlcnMvcGxhY2VfYWlfc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9wbGFjZV9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvYW5pbWF0b3IuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL3NoaXBzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL3dhdGVyLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lbG9vcCgpIHtcbiAgY29uc3QgUExBWUVSMSA9IG5ldyBQbGF5ZXIoJ2h1bWFuJyk7XG4gIGNvbnN0IFBMQVlFUjIgPSBuZXcgUGxheWVyKCdhaScpO1xuICBsZXQgcGxheWVyMV9nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGxldCBwbGF5ZXIyX2dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBSRVNFVCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIxX2dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICBwbGF5ZXIyX2dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfTtcblxuICBjb25zdCBSRVRVUk5fU0hJUFMgPSAocGxheWVyKSA9PiB7XG4gICAgaWYgKHBsYXllciA9PT0gMSkge1xuICAgICAgcmV0dXJuIHBsYXllcjFfZ2FtZWJvYXJkLnNoaXBzO1xuICAgIH1cbiAgICBpZiAocGxheWVyID09PSAyKSB7XG4gICAgICByZXR1cm4gcGxheWVyMl9nYW1lYm9hcmQuc2hpcHM7XG4gICAgfVxuICB9O1xuICAvLyB0b2RvLCB3ZSBhcmUgcmV0dXJuaW5nIGEgc3BlY2lmaWMgaW5zdGFuY2Ugb2YgbmV3IEdhbWVib2FyZC4gbmVlZCB0byBjcmVhdGUgbWV0aG9kcyB0aGF0IGludGVyYWN0IHdpdGggdGhlIGdhbWVib2FyZFxuICBjb25zdCBQTEFDRV9TSElQID0gKGJvYXJkLCBzaGlwLCBwb3NpdGlvbnMpID0+IHtcbiAgICBpZiAoYm9hcmQgPT09IDEpIHtcbiAgICAgIHBsYXllcjFfZ2FtZWJvYXJkLnBsYWNlX3NoaXAoc2hpcCwgcG9zaXRpb25zKTtcbiAgICB9XG4gICAgaWYgKGJvYXJkID09PSAyKSB7XG4gICAgICBwbGF5ZXIyX2dhbWVib2FyZC5wbGFjZV9zaGlwKHNoaXAsIHBvc2l0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgUExBWUVSMSxcbiAgICBQTEFZRVIyLFxuICAgIFJFU0VULFxuICAgIFJFVFVSTl9TSElQUyxcbiAgICBQTEFDRV9TSElQLFxuICB9O1xufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgc2hpcHMgPSB7XG4gICAgY2Fycmllcjoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoNSksXG4gICAgfSxcbiAgICBiYXR0bGVzaGlwOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCg0KSxcbiAgICB9LFxuICAgIGRlc3Ryb3llcjoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoMyksXG4gICAgfSxcbiAgICBzdWI6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDMpLFxuICAgIH0sXG4gICAgcGF0cm9sQm9hdDoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoMiksXG4gICAgfSxcbiAgfTtcbiAgaGl0cyA9IFtdO1xuICBtaXNzZXMgPSBbXTtcblxuICBwbGFjZV9zaGlwKHNoaXAsIGlucHV0X2Nvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5zaGlwc1tzaGlwXS5wb3NpdGlvbiA9IGlucHV0X2Nvb3JkaW5hdGVzO1xuICB9XG4gICNtaXNzX3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIHJldHVybiBbLi4udGhpcy5taXNzZXMsIGlucHV0X2Nvb3JkaW5hdGVdLnNvcnQoKTtcbiAgfVxuICAjaGl0X3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIHJldHVybiBbLi4udGhpcy5oaXRzLCBpbnB1dF9jb29yZGluYXRlXS5zb3J0KCk7XG4gIH1cbiAgcmVjZWl2ZV9hdHRhY2soaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIGxldCBtaXNzID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgIGNvbnN0IFdBU19ISVQgPSB0aGlzLnNoaXBzW3NoaXBdLnBvc2l0aW9uLmluY2x1ZGVzKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgICAgaWYgKFdBU19ISVQpIHtcbiAgICAgICAgdGhpcy5oaXRzID0gdGhpcy4jaGl0X3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSk7XG4gICAgICAgIGNvbnN0IEhJVF9JTkRFWCA9IHRoaXMuc2hpcHNbc2hpcF0ucG9zaXRpb24uaW5kZXhPZihpbnB1dF9jb29yZGluYXRlKTtcbiAgICAgICAgdGhpcy5zaGlwc1tzaGlwXS5zaGlwLmhpdChISVRfSU5ERVgpO1xuICAgICAgICBtaXNzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtaXNzKSB7XG4gICAgICB0aGlzLm1pc3NlcyA9IHRoaXMuI21pc3NfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKTtcbiAgICB9XG4gIH1cbiAgYWxsX3N1bmsoKSB7XG4gICAgbGV0IGlzX2FsbF9zdW5rID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgIGNvbnN0IGFsbF9zdW5rX2NhbGwgPSB0aGlzLnNoaXBzW3NoaXBdLnNoaXAuaXNfc3VuaygpO1xuICAgICAgaWYgKGFsbF9zdW5rX2NhbGwgPT09IGZhbHNlKSB7XG4gICAgICAgIGlzX2FsbF9zdW5rID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNfYWxsX3N1bms7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHBsYXllcikge1xuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICB9XG4gIG1vdmVzID0gW107XG4gIHJlbWFpbmluZ19tb3ZlcyA9IFtdO1xuXG4gICNyZW1haW5pbmdfbW92ZXNfcmVkdWNlcihjb29yZGluYXRlKSB7XG4gICAgdGhpcy5yZW1haW5pbmdfbW92ZXMgPSBbLi4udGhpcy5yZW1haW5pbmdfbW92ZXMsIGNvb3JkaW5hdGVdO1xuICB9XG4gICNmaWxsX3JlbWFpbmluZ19tb3ZlcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgTEVUVEVSUyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJywgJ2knLCAnaiddO1xuICAgIExFVFRFUlMubWFwKChsZXR0ZXIpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICB0aGlzLiNyZW1haW5pbmdfbW92ZXNfcmVkdWNlcihgJHtsZXR0ZXJ9JHtpfWApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSgpO1xuICAjYWlfbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdfbW92ZXNbXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJlbWFpbmluZ19tb3Zlcy5sZW5ndGgpXG4gICAgXTtcbiAgfVxuICAjZmlsdGVyX3JlbWFpbmluZ19tb3Zlcyhjb29yZGluYXRlKSB7XG4gICAgY29uc3QgUkVNQUlOSU5HX01PVkVTX0NPUFkgPSBbLi4udGhpcy5yZW1haW5pbmdfbW92ZXNdO1xuICAgIGNvbnN0IFJFTUFJTklORyA9IFJFTUFJTklOR19NT1ZFU19DT1BZLmZpbHRlcigocmVtYWluaW5nX21vdmUpID0+IHtcbiAgICAgIHJldHVybiByZW1haW5pbmdfbW92ZSAhPT0gY29vcmRpbmF0ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gUkVNQUlOSU5HO1xuICB9XG4gICNhdHRhY2tfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLm1vdmVzLCBpbnB1dF9jb29yZGluYXRlXTtcbiAgfVxuICBhaV9hdHRhY2soYm9hcmQpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXIgIT09ICdhaScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxheWVyIG5lZWRzIHRvIGJlIEFJJyk7XG4gICAgfVxuICAgIGNvbnN0IENPT1JESU5BVEUgPSB0aGlzLiNhaV9tb3ZlKCk7XG4gICAgdGhpcy5yZW1haW5pbmdfbW92ZXMgPSB0aGlzLiNmaWx0ZXJfcmVtYWluaW5nX21vdmVzKENPT1JESU5BVEUpO1xuICAgIHRoaXMubW92ZXMgPSB0aGlzLiNhdHRhY2tfcmVkdWNlcihDT09SRElOQVRFKTtcbiAgICBib2FyZC5yZWNlaXZlX2F0dGFjayhDT09SRElOQVRFKTtcbiAgICByZXR1cm4gQ09PUkRJTkFURTtcbiAgfVxuICBodW1hbl9hdHRhY2soYm9hcmQsIGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXIgIT09ICdodW1hbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxheWVyIG5lZWRzIHRvIGJlIGEgaHVtYW4nKTtcbiAgICB9XG4gICAgY29uc3QgRklMVEVSRURfTU9WRVMgPSB0aGlzLiNmaWx0ZXJfcmVtYWluaW5nX21vdmVzKGNvb3JkaW5hdGUpO1xuICAgIHRoaXMucmVtYWluaW5nX21vdmVzID0gRklMVEVSRURfTU9WRVM7XG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMuI2F0dGFja19yZWR1Y2VyKGNvb3JkaW5hdGUpO1xuICAgIGJvYXJkLnJlY2VpdmVfYXR0YWNrKGNvb3JkaW5hdGUpO1xuICAgIHJldHVybiBjb29yZGluYXRlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5oaXRzID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSk7XG4gIH1cblxuICAjaGl0X3JlZHVjZXIoaGl0c19hcnJheSwgcG9zaXRpb25faGl0KSB7XG4gICAgY29uc3QgSElUUyA9IFsuLi5oaXRzX2FycmF5XTtcbiAgICBISVRTW3Bvc2l0aW9uX2hpdF0gPSB0cnVlO1xuICAgIHJldHVybiBISVRTO1xuICB9XG4gIGhpdChwb3NpdGlvbl9oaXQpIHtcbiAgICB0aGlzLmhpdHMgPSB0aGlzLiNoaXRfcmVkdWNlcih0aGlzLmhpdHMsIHBvc2l0aW9uX2hpdCk7XG4gIH1cbiAgaXNfc3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRzLmV2ZXJ5KChwb3NpdGlvbikgPT4gcG9zaXRpb24gPT09IHRydWUpO1xuICB9XG59XG4iLCJjb25zdCBDT09SRElOQVRFUyA9IFtdO1xuY29uc3QgTEVUVEVSUyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJywgJ2knLCAnaiddO1xuY29uc3QgTlVNQkVSUyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcbkxFVFRFUlMubWFwKChsZXR0ZXIpID0+IHtcbiAgTlVNQkVSUy5tYXAoKG51bWJlcikgPT4ge1xuICAgIENPT1JESU5BVEVTLnB1c2goYCR7bGV0dGVyfSR7bnVtYmVyfWApO1xuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDT09SRElOQVRFUztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl9iYWNrZ3JvdW5kX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBDTEFTU0VTID0gW1xuICAgICdibHVlMScsXG4gICAgJ2JsdWUyJyxcbiAgICAnYmx1ZTMnLFxuICAgICdibHVlNCcsXG4gICAgJ2JsdWU1JyxcbiAgICAnYmx1ZTYnLFxuICAgICdibHVlNycsXG4gICAgJ2JsdWU4JyxcbiAgICAnYmx1ZTknLFxuICAgICdibHVlMTAnLFxuICAgICdncmVlbjEnLFxuICBdO1xuICBNQUlOLmlkID0gJ2dhbWVfYm9hcmRzJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM1MDA7IGkrKykge1xuICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkc19iYWNrZ3JvdW5kJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKENMQVNTRVNbUkFORE9NX05VTUJFUl0pO1xuICAgIE1BSU4uYXBwZW5kKFRJTEUpO1xuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoTUFJTik7XG59XG4iLCJpbXBvcnQgQ09PUkRJTkFURVMgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9jb29yZGluYXRlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl9nYW1lYm9hcmRfdGlsZXMoKSB7XG4gIGNvbnN0IE1BSU4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZV9ib2FyZHMnKTtcbiAgY29uc3QgUExBWUVSX0JPQVJEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IEFJX0JPQVJEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgUExBWUVSX0JPQVJELmNsYXNzTGlzdC5hZGQoJ2dhbWVfYm9hcmQnKTtcbiAgQUlfQk9BUkQuY2xhc3NMaXN0LmFkZCgnZ2FtZV9ib2FyZCcpO1xuICBQTEFZRVJfQk9BUkQuaWQgPSAncGxheWVyX2JvYXJkJztcbiAgQUlfQk9BUkQuaWQgPSAnYWlfYm9hcmQnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgY29uc3QgUExBWUVSX0JPQVJEX1RJTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBBSV9CT0FSRF9USUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBQTEFZRVJfQk9BUkRfVElMRS5jbGFzc0xpc3QuYWRkKCdnYW1lX2JvYXJkX3RpbGUnKTtcbiAgICBBSV9CT0FSRF9USUxFLmNsYXNzTGlzdC5hZGQoJ2dhbWVfYm9hcmRfdGlsZScpO1xuICAgIFBMQVlFUl9CT0FSRF9USUxFLnNldEF0dHJpYnV0ZSgnZGF0YS1wbGF5ZXItYm9hcmQnLCBDT09SRElOQVRFU1tpXSk7XG4gICAgQUlfQk9BUkRfVElMRS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWktYm9hcmQnLCBDT09SRElOQVRFU1tpXSk7XG5cbiAgICBQTEFZRVJfQk9BUkQuYXBwZW5kKFBMQVlFUl9CT0FSRF9USUxFKTtcbiAgICBBSV9CT0FSRC5hcHBlbmQoQUlfQk9BUkRfVElMRSk7XG4gIH1cblxuICBNQUlOLmFwcGVuZChQTEFZRVJfQk9BUkQpO1xuICBNQUlOLmFwcGVuZChBSV9CT0FSRCk7XG59XG4iLCJpbXBvcnQgcmVuZGVyX2JhY2tncm91bmRfdGlsZXMgZnJvbSAnLi9yZW5kZXJfYmFja2dyb3VuZF90aWxlcy5qcyc7XG5pbXBvcnQgcmVuZGVyX2dhbWVib2FyZF90aWxlcyBmcm9tICcuL3JlbmRlcl9nYW1lYm9hcmRfdGlsZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJfdGlsZXMoKSB7XG4gIHJlbmRlcl9iYWNrZ3JvdW5kX3RpbGVzKCk7XG4gIHJlbmRlcl9nYW1lYm9hcmRfdGlsZXMoKTtcbn1cbiIsImltcG9ydCByZW5kZXJfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL3JlbmRlcl90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl9nYW1lX2JvYXJkcygpIHtcbiAgcmVuZGVyX3RpbGVzKCk7XG59XG4iLCJjb25zdCBBTklNQVRJT05TID0gKCgpID0+IHtcbiAgY29uc3QgUEVSSVNDT1BFX1NQSU5ORVIgPSAoKSA9PiB7XG4gICAgY29uc3QgTEVGVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoNzU5KTtcbiAgICBjb25zdCBSSUdIVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoNzYxKTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29mZicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29uJyk7XG4gICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIGlmIChMRUZUX1RJTEUuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdvbicpKSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb24nKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdwZXJpc2NvcGVfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncGVyaXNjb3BlX29mZicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3BlcmlzY29wZV9vZmYnKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdwZXJpc2NvcGVfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3BlcmlzY29wZV9vbicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBSQURBUl9TUElOTkVSMSA9ICgpID0+IHtcbiAgICBjb25zdCBMRUZUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3MTQpO1xuICAgIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3MTYpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBpZiAoTEVGVF9USUxFLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnb24nKSkge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb2ZmJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFJBREFSX1NQSU5ORVIyID0gKCkgPT4ge1xuICAgIGNvbnN0IExFRlRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDEwOTcpO1xuICAgIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxMDk5KTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgaWYgKExFRlRfVElMRS5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ29uJykpIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29uJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29mZicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBTVUJfQU5JTUFUSU9OID0gc2V0SW50ZXJ2YWwoUEVSSVNDT1BFX1NQSU5ORVIsIDEwMDApO1xuICBjb25zdCBCT0FUMSA9IHNldEludGVydmFsKFJBREFSX1NQSU5ORVIxLCAxMDAwKTtcbiAgY29uc3QgQk9BVDIgPSBzZXRJbnRlcnZhbChSQURBUl9TUElOTkVSMiwgMTUwMCk7XG5cbiAgcmV0dXJuIHsgU1VCX0FOSU1BVElPTiwgQk9BVDEsIEJPQVQyIH07XG59KSgpO1xuXG5leHBvcnQgeyBBTklNQVRJT05TIH07XG4iLCJpbXBvcnQgeyBJVEVSQVRPUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmNvbnN0IEJBVFRMRVNISVAgPSB7XG4gIEI6IFsxNTAsIDE1NCwgMjIwLCAyMjQsIDM2MCwgMzY0LCA0MzAsIDQzNiwgNDM0XSxcbiAgQTogWzE1NiwgMTU5LCAyMjYsIDIyOSwgMzY2LCAzNjksIDQzNiwgNDM5LCA1MDYsIDUwOV0sXG4gIFQxOiBbMTYyLCAxNjMsIDIzMiwgMjMzLCAzMDIsIDMwMywgMzcyLCAzNzMsIDQ0MiwgNDQzLCA1MTIsIDUxM10sXG4gIFQyOiBbMTY3LCAxNjgsIDIzNywgMjM4LCAzMDcsIDMwOCwgMzc3LCAzNzgsIDQ0NywgNDQ4LCA1MTcsIDUxOF0sXG4gIEw6IFsxMDEsIDE3MSwgMjQxLCAzMTEsIDM4MSwgNDUxXSxcbiAgRTogWzE3NiwgMjQ2LCAzODYsIDQ1Nl0sXG4gIFM6IFsxODEsIDI1MSwgMzk0LCA0NjRdLFxuICBIOiBbMTE2LCAxMTksIDE4NiwgMTg5LCAyNTYsIDI1OSwgMzk2LCAzOTksIDQ2NiwgNDY5LCA1MzYsIDUzOV0sXG4gIEk6IFsxOTIsIDE5MywgMjYyLCAyNjMsIDMzMiwgMzMzLCA0MDIsIDQwMywgNDcyLCA0NzNdLFxuICBQOiBbMTk2LCAxOTksIDI2NiwgMjY5LCA0MDYsIDQ3NiwgNTQ2XSxcbn07XG5cbihmdW5jdGlvbiBlel9sb2FkZXIoKSB7XG4gIGNvbnN0IEIgPSBCQVRUTEVTSElQLkI7XG4gIElURVJBVE9SKDgwLCA4NCwgQik7XG4gIElURVJBVE9SKDI5MCwgMjk0LCBCKTtcbiAgSVRFUkFUT1IoNTAwLCA1MDQsIEIpO1xuXG4gIGNvbnN0IEEgPSBCQVRUTEVTSElQLkE7XG4gIElURVJBVE9SKDg2LCA4OSwgQSk7XG4gIElURVJBVE9SKDI5NiwgMjk5LCBBKTtcblxuICBjb25zdCBUMSA9IEJBVFRMRVNISVAuVDE7XG4gIElURVJBVE9SKDkxLCA5NCwgVDEpO1xuXG4gIGNvbnN0IFQyID0gQkFUVExFU0hJUC5UMjtcbiAgSVRFUkFUT1IoOTYsIDk5LCBUMik7XG5cbiAgY29uc3QgTCA9IEJBVFRMRVNISVAuTDtcbiAgSVRFUkFUT1IoNTIxLCA1MjQsIEwpO1xuXG4gIGNvbnN0IEUgPSBCQVRUTEVTSElQLkU7XG4gIElURVJBVE9SKDEwNiwgMTA5LCBFKTtcbiAgSVRFUkFUT1IoMzE2LCAzMTgsIEUpO1xuICBJVEVSQVRPUig1MjYsIDUyOSwgRSk7XG5cbiAgY29uc3QgUyA9IEJBVFRMRVNISVAuUztcbiAgSVRFUkFUT1IoMTExLCAxMTQsIFMpO1xuICBJVEVSQVRPUigzMjEsIDMyNCwgUyk7XG4gIElURVJBVE9SKDUzMSwgNTM0LCBTKTtcblxuICBjb25zdCBIID0gQkFUVExFU0hJUC5IO1xuICBJVEVSQVRPUigzMjYsIDMyOSwgSCk7XG5cbiAgY29uc3QgSSA9IEJBVFRMRVNISVAuSTtcbiAgSVRFUkFUT1IoMTIxLCAxMjQsIEkpO1xuICBJVEVSQVRPUig1NDEsIDU0NCwgSSk7XG5cbiAgY29uc3QgUCA9IEJBVFRMRVNISVAuUDtcbiAgSVRFUkFUT1IoMTI2LCAxMjksIFApO1xuICBJVEVSQVRPUigzMzYsIDMzOSwgUCk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBCQVRUTEVTSElQO1xuIiwiaW1wb3J0IHsgRVpfVElMRV9DT0xPUklaRVIgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IEJBVFRMRVNISVAgZnJvbSAnLi9iYXR0bGVzaGlwX3RpbGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3JfYmF0dGxlc2hpcF90aWxlcygpIHtcbiAgZm9yIChsZXQgbGV0dGVyIGluIEJBVFRMRVNISVApIHtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihCQVRUTEVTSElQW2xldHRlcl0sICd0aXRsZScpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDQVJSSUVSLCBERVNUUk9ZRVIsIFNVQk1BUklORSB9IGZyb20gJy4vc2hpcF90aWxlcy5qcyc7XG5pbXBvcnQgeyBFWl9USUxFX0NPTE9SSVpFUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX3NoaXBfdGlsZXMoKSB7XG4gIChmdW5jdGlvbiBjYXJyaWVyKCkge1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuYmxhY2tfb3V0bGluZSwgJ3NoaXBfaHVsbF9vdXRsaW5lJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5odWxsLCAnc2hpcF9odWxsJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5kYXJrX2dyYXksICdkYXJrX2dyYXknKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLmxpZ2h0X2dyYXksICdsaWdodF9ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5zaGlwX2xpZ2h0LCAnc2hpcF9saWdodCcpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyaywgJ3N1cnJvdW5kaW5nX3dhdGVyX2RhcmsnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihcbiAgICAgIENBUlJJRVIuc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQsXG4gICAgICAnc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQnXG4gICAgKTtcblxuICAgIGNvbnN0IEMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNzk1KTtcbiAgICBjb25zdCBWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTc5Nik7XG4gICAgY29uc3QgTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE3OTcpO1xuICAgIGNvbnN0IFNJWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE3OTkpO1xuICAgIGNvbnN0IE5JTkUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxODAwKTtcbiAgICBjb25zdCBVID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM0OSk7XG4gICAgY29uc3QgUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTApO1xuICAgIGNvbnN0IE4yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM1Mik7XG4gICAgY29uc3QgQSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTMpO1xuICAgIGNvbnN0IFYyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM1NCk7XG4gICAgY29uc3QgWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTUpO1xuICAgIGNvbnN0IEFMTCA9IFtDLCBWLCBOLCBTSVgsIE5JTkUsIFUsIFMsIE4yLCBBLCBWMiwgWV07XG4gICAgQUxMLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwX3RleHQnKTtcbiAgICB9KTtcbiAgICBDLmlubmVyVGV4dCA9ICdDJztcbiAgICBWLmlubmVyVGV4dCA9ICdWJztcbiAgICBOLmlubmVyVGV4dCA9ICdOJztcbiAgICBTSVguaW5uZXJUZXh0ID0gJzYnO1xuICAgIE5JTkUuaW5uZXJUZXh0ID0gJzknO1xuICAgIFUuaW5uZXJUZXh0ID0gJ1UnO1xuICAgIFMuaW5uZXJUZXh0ID0gJ1MnO1xuICAgIE4yLmlubmVyVGV4dCA9ICdOJztcbiAgICBBLmlubmVyVGV4dCA9ICdBJztcbiAgICBWMi5pbm5lclRleHQgPSAnVic7XG4gICAgWS5pbm5lclRleHQgPSAnWSc7XG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uIGRlc3Ryb3llcigpIHtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuYmxhY2tfb3V0bGluZSwgJ3NoaXBfaHVsbF9vdXRsaW5lJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLmh1bGwsICdzaGlwX2h1bGwnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIubGlnaHRfZ3JheSwgJ2xpZ2h0X2dyYXknKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuZGFya19ncmF5LCAnZGFya19ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLnNoaXBfbGlnaHQsICdzaGlwX2xpZ2h0Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoXG4gICAgICBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyayxcbiAgICAgICdzdXJyb3VuZGluZ193YXRlcl9kYXJrJ1xuICAgICk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoXG4gICAgICBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQsXG4gICAgICAnc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQnXG4gICAgKTtcblxuICAgIGNvbnN0IFUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTUwKTtcbiAgICBjb25zdCBTID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1MSk7XG4gICAgY29uc3QgTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTMpO1xuICAgIGNvbnN0IEEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTU0KTtcbiAgICBjb25zdCBWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1NSk7XG4gICAgY29uc3QgWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTYpO1xuICAgIGNvbnN0IEFMTCA9IFtVLCBTLCBOLCBBLCBWLCBZXTtcbiAgICBBTEwubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3NoaXBfdGV4dCcpO1xuICAgIH0pO1xuICAgIFUuaW5uZXJUZXh0ID0gJ1UnO1xuICAgIFMuaW5uZXJUZXh0ID0gJ1MnO1xuICAgIE4uaW5uZXJUZXh0ID0gJ04nO1xuICAgIEEuaW5uZXJUZXh0ID0gJ0EnO1xuICAgIFYuaW5uZXJUZXh0ID0gJ1YnO1xuICAgIFkuaW5uZXJUZXh0ID0gJ1knO1xuICB9KSgpO1xuXG4gIChmdW5jdGlvbiBzdWJtYXJpbmUoKSB7XG4gICAgLy8gRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLmh1bGwsICdzdWInKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihTVUJNQVJJTkUuZGFya19ncmF5LCAnZGFya19ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLmxlZnRfcGVyaXNjb3BlLCAncGVyaXNjb3BlX29uJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLnJpZ2h0X3BlcmlzY29wZSwgJ3BlcmlzY29wZV9vZmYnKTtcbiAgfSkoKTtcbn1cbiIsImltcG9ydCBTVEFSVCBmcm9tICcuL3N0YXJ0X3RpbGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3Jfc3RhcnRfdGlsZXMoKSB7XG4gIGNvbnN0IEFMTCA9IFNUQVJULmFsbDtcbiAgQUxMLm1hcCgodGlsZV9pZCkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RhcnRfJHt0aWxlX2lkfWApO1xuICAgIFRJTEUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfYmFja2dyb3VuZCcpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfdGV4dCcpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX3dhdGVyX3RpbGVzKCkge1xuICBjb25zdCBDTEFTU0VTID0gW1xuICAgICdibHVlMScsXG4gICAgJ2JsdWUyJyxcbiAgICAnYmx1ZTMnLFxuICAgICdibHVlNCcsXG4gICAgJ2JsdWU1JyxcbiAgICAnYmx1ZTYnLFxuICAgICdibHVlNycsXG4gICAgJ2JsdWU4JyxcbiAgICAnYmx1ZTknLFxuICAgICdibHVlMTAnLFxuICAgICdncmVlbjEnLFxuICBdO1xuICBjb25zdCBXQVRFUl9USUxFUyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2F0ZXInKSk7XG4gIFdBVEVSX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKENMQVNTRVNbUkFORE9NX05VTUJFUl0pO1xuICB9KTtcbn1cbiIsImNvbnN0IElURVJBVE9SID0gKG1pbiwgbWF4LCB0YXJnZXRfYXJyYXkpID0+IHtcbiAgZm9yIChsZXQgaSA9IG1pbjsgaSA8IG1heCArIDE7IGkrKykge1xuICAgIHRhcmdldF9hcnJheS5wdXNoKGkpO1xuICB9XG59O1xuXG5jb25zdCBFWl9USUxFX0NPTE9SSVpFUiA9IChpbnB1dF9hcnJheSwgaW5wdXRfY2xhc3MpID0+IHtcbiAgaW5wdXRfYXJyYXkubWFwKCh0aWxlX2lkKSA9PiB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpbGVfaWQpO1xuICAgIFRJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoaW5wdXRfY2xhc3MpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IElURVJBVE9SLCBFWl9USUxFX0NPTE9SSVpFUiB9O1xuIiwiaW1wb3J0IHsgQU5JTUFUSU9OUyB9IGZyb20gJy4vYW5pbWF0aW9ucy5qcyc7XG5pbXBvcnQgcGxhY2Vfc2hpcHMgZnJvbSAnLi4vLi4vcGxhY2Vfc2hpcHMvcGxhY2Vfc2hpcHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0ZW5lcnNfaGFuZGxlcnMoKSB7XG4gIGNvbnN0IFNUQVJUX0JVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydF9idXR0b24nKTtcblxuICBjb25zdCBTVEFSVF9CVVRUT05fRU5URVJfSEFORExFUiA9ICgpID0+IHtcbiAgICBjb25zdCBTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydF9iYWNrZ3JvdW5kJylcbiAgICApO1xuICAgIFNUQVJUX0JVVFRPTl9CQUNLR1JPVU5EX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQnKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfYmFja2dyb3VuZCcpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRfdGV4dCcpXG4gICAgKTtcbiAgICBTVEFSVF9CVVRUT05fVEVYVF9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfdGV4dF9ob3ZlcmVkJyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X3RleHQnKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBTVEFSVF9CVVRUT05fTEVBVkVfSEFORExFUiA9ICgpID0+IHtcbiAgICBjb25zdCBTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQnKVxuICAgICk7XG4gICAgU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkRfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0X2JhY2tncm91bmQnKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkJyk7XG4gICAgfSk7XG4gICAgY29uc3QgU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRfdGV4dF9ob3ZlcmVkJylcbiAgICApO1xuICAgIFNUQVJUX0JVVFRPTl9URVhUX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdGFydF90ZXh0Jyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X3RleHRfaG92ZXJlZCcpO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBTVEFSVF9CVVRUT05fQ0xJQ0tfSEFORExFUiA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpbnRlcnZhbCBpbiBBTklNQVRJT05TKSB7XG4gICAgICBjb25zdCBJTlRFUlZBTCA9IEFOSU1BVElPTlNbaW50ZXJ2YWxdO1xuICAgICAgY2xlYXJJbnRlcnZhbChJTlRFUlZBTCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYW5kaW5nX3BhZ2UnKS5yZW1vdmUoKTtcbiAgICBwbGFjZV9zaGlwcygpO1xuICB9O1xuXG4gIFNUQVJUX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU1RBUlRfQlVUVE9OX0VOVEVSX0hBTkRMRVIpO1xuICBTVEFSVF9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFNUQVJUX0JVVFRPTl9MRUFWRV9IQU5ETEVSKTtcbiAgU1RBUlRfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgU1RBUlRfQlVUVE9OX0NMSUNLX0hBTkRMRVIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBIRUFESU5HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IFNUQVJUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIE1BSU4uaWQgPSAnbGFuZGluZ19wYWdlJztcbiAgSEVBRElORy5pZCA9ICdic19oZWFkaW5nJztcbiAgU1RBUlQuaWQgPSAnc3RhcnRfYnV0dG9uJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyODAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IGk7XG4gICAgVElMRS5jbGFzc0xpc3QgPSAnaG9tZXBlYWdlX3RpbGUgd2F0ZXInO1xuICAgIEhFQURJTkcuYXBwZW5kKFRJTEUpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IGBzdGFydF8ke2l9YDtcbiAgICBUSUxFLmNsYXNzTGlzdCA9ICd0aWxlIHN0YXJ0IHN0YXJ0X2JhY2tncm91bmQnO1xuICAgIFNUQVJULmFwcGVuZChUSUxFKTtcbiAgfVxuICBNQUlOLmFwcGVuZChIRUFESU5HKTtcbiAgTUFJTi5hcHBlbmQoU1RBUlQpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChNQUlOKTtcbn1cbiIsImltcG9ydCB7IElURVJBVE9SIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY29uc3QgQ0FSUklFUiA9IHtcbiAgYmxhY2tfb3V0bGluZTogW1xuICAgIDE0NDYsIDE0NTAsIDE1MTYsIDE1MjAsIDE1ODYsIDE1OTAsIDE3MjMsIDE3MzMsIDE4MDMsIDE4NTksIDE4NzMsIDE4NzcsXG4gICAgMTkyOCwgMTk0MywgMTk0NiwgMTk0OCwgMTk1NSwgMTk1NiwgMTk4MiwgMTk4MywgMTk4NywgMTk4OCwgMTk5MiwgMTk5MyxcbiAgICAxOTk4LCAyMDEzLCAyMDI2LCAyMDUyLCAyMDU0LCAyMDU1LCAyMDU3LCAyMDU5LCAyMDYwLCAyMDYyLCAyMDY0LCAyMDY1LFxuICAgIDIwNjgsIDIwODMsIDIwODUsIDIwODksIDIwOTEsIDIwOTQsIDIwOTUsIDIxMjMsIDIxMjUsIDIxMjgsIDIxMzAsIDIxMzMsXG4gICAgMjEzNSwgMjEzOCwgMjE1MywgMjE1NSwgMjE1OSwgMjE2MSwgMjE2NSwgMjI2MCwgMjI2MSwgMjI2MiwgMjMwOSwgMjMzMixcbiAgICAyMzMzLCAyMzM0LCAyMzc5LCAyNDA0LCAyNDQ4LCAyNDc1LCAyNTE3LCAyNTQ2LCAyNTg2LCAyNjE3LCAyNjU2LCAyNjg3LFxuICAgIDI3MjYsXG4gIF0sXG4gIGh1bGw6IFtcbiAgICAxNTE5LCAxOTM5LCAxOTQwLCAyMDc5LCAyMDgwLCAyNjg4LCAyNjg5LCAyNjkyLCAyNjkzLCAyNjk2LCAyNjk3LCAyNzAwLFxuICAgIDI3MDEsIDI3MDQsIDI3MDUsIDI3MDgsIDI3MDksIDI3MTIsIDI3MTMsIDI3MTYsIDI3MTcsIDI3MjAsIDI3MjEsIDI3MjQsXG4gICAgMjcyNSxcbiAgXSxcbiAgZGFya19ncmF5OiBbXG4gICAgMTE2OCwgMTIzOCwgMTMwOCwgMTUxNywgMTUxOCwgMTkyOSwgMTkzMCwgMTk0MSwgMTk0MiwgMTk0NywgMjAyNSwgMjA1MyxcbiAgICAyMDU4LCAyMDYzLCAyMDY5LCAyMDcwLCAyMDgxLCAyMDgyLCAyMTI0LCAyMTI5LCAyMTM0LCAyMDkyLCAyMDkzLFxuICBdLFxuICBsaWdodF9ncmF5OiBbMTA5NywgMTA5OV0sXG4gIHNoaXBfbGlnaHQ6IFsxMDk4XSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfZGFyazogW1xuICAgIDI1NDUsIDI2MTYsIDI2ODYsIDI2OTAsIDI2OTEsIDI2OTQsIDI2OTUsIDI2OTgsIDI2OTksIDI3MDIsIDI3MDMsIDI3MDYsXG4gICAgMjcwNywgMjcxMCwgMjcxMSwgMjcxNCwgMjcxNSwgMjcxOCwgMjcxOSwgMjcyMiwgMjcyMywgMjU4NywgMjY1NywgMjcyNyxcbiAgICAyNDQ5LCAyNTE4LCAyNTE5LCAyNTg4LCAyNjU4LFxuICBdLFxuICBzdXJyb3VuZGluZ193YXRlcl9saWdodDogW1xuICAgIDI1ODksIDI2MTUsIDI2NTksIDI2ODQsIDI2ODUsIDI3MjgsIDI3MjksIDI3NTMsIDI3NTQsIDI3NTUsIDI3OTgsIDI3OTksXG4gIF0sXG59O1xuXG5jb25zdCBERVNUUk9ZRVIgPSB7XG4gIGJsYWNrX291dGxpbmU6IFtcbiAgICAxMTk0LCAxMTk4LCAxMjExLCAxMjY1LCAxMjY5LCAxMjgwLCAxNDc0LCAxNDkxLCAxNDkyLCAxNTQ1LCAxNTYxLCAxNjE2LFxuICAgIDE2MzEsIDE2ODcsIDE3MDEsXG4gIF0sXG4gIGh1bGw6IFsxNjg4LCAxNjkxLCAxNjkyLCAxNjk1LCAxNjk2LCAxNjk5LCAxNzAwXSxcbiAgZGFya19ncmF5OiBbNzg1LCA4NTUsIDkyNSwgOTk1LCAxMjY2LCAxMjcwLCAxMjczLCAxMjc0LCAxMjc2LCAxMjc5XSxcbiAgbGlnaHRfZ3JheTogWzcxNCwgNzE2LCAxMTMzLCAxMTM3LCAxMjcyLCAxMjc1LCAxMjc3XSxcbiAgc2hpcF9saWdodDogWzcxNV0sXG4gIHN1cnJvdW5kaW5nX3dhdGVyX2Rhcms6IFsxNjg5LCAxNjkwLCAxNjkzLCAxNjk0LCAxNjk3LCAxNjk4XSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQ6IFtcbiAgICAxNjMyLCAxNjg1LCAxNjg2LCAxNzAyLCAxNzAzLCAxNzU0LCAxNzU1LCAxNzczLCAxNzc0LFxuICBdLFxufTtcblxuY29uc3QgU1VCTUFSSU5FID0ge1xuICBodWxsOiBbXSxcbiAgZGFya19ncmF5OiBbNzYwLCA4MzAsIDkwMF0sXG4gIGxlZnRfcGVyaXNjb3BlOiBbNzU5XSxcbiAgcmlnaHRfcGVyaXNjb3BlOiBbNzYxXSxcbn07XG5cbihmdW5jdGlvbiBjYXJyaWVyX2V6X2xvYWRlcigpIHtcbiAgY29uc3QgT1VUTElORSA9IENBUlJJRVIuYmxhY2tfb3V0bGluZTtcbiAgSVRFUkFUT1IoMTM3NiwgMTM4MCwgT1VUTElORSk7XG4gIElURVJBVE9SKDE2NTMsIDE2NjMsIE9VVExJTkUpO1xuICBJVEVSQVRPUigxNzkwLCAxNzkzLCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMjAxNSwgMjAxOSwgT1VUTElORSk7XG4gIElURVJBVE9SKDIwMjIsIDIwMjQsIE9VVExJTkUpO1xuICBJVEVSQVRPUigyMTkwLCAyMjM5LCBPVVRMSU5FKTtcblxuICBjb25zdCBIVUxMID0gQ0FSUklFUi5odWxsO1xuICBJVEVSQVRPUigxNDQ3LCAxNDQ5LCBIVUxMKTtcbiAgSVRFUkFUT1IoMTU4NywgMTU4OSwgSFVMTCk7XG4gIElURVJBVE9SKDE3MjQsIDE3MzIsIEhVTEwpO1xuICBJVEVSQVRPUigxNzk0LCAxODAyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTg2MCwgMTg3MiwgSFVMTCk7XG4gIElURVJBVE9SKDE5MzEsIDE5MzQsIEhVTEwpO1xuICBJVEVSQVRPUigxOTk5LCAyMDEyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMjA3MSwgMjA3NCwgSFVMTCk7XG4gIElURVJBVE9SKDIxMzksIDIxNTIsIEhVTEwpO1xuICBJVEVSQVRPUigyMjYzLCAyMzA4LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjMzNSwgMjM3OCwgSFVMTCk7XG4gIElURVJBVE9SKDI0MDUsIDI0NDcsIEhVTEwpO1xuICBJVEVSQVRPUigyNDc2LCAyNTE2LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjU0NywgMjU4NSwgSFVMTCk7XG4gIElURVJBVE9SKDI2MTgsIDI2NTUsIEhVTEwpO1xuXG4gIGNvbnN0IERBUktfR1JBWSA9IENBUlJJRVIuZGFya19ncmF5O1xuICBJVEVSQVRPUigxMTM0LCAxMTM2LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMDg2LCAyMDg4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMTU2LCAyMTU4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMTYyLCAyMTY0LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxOTM1LCAxOTM4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMDc1LCAyMDc4LCBEQVJLX0dSQVkpO1xuXG4gIGNvbnN0IExJR0hUX0dSQVkgPSBDQVJSSUVSLmxpZ2h0X2dyYXk7XG4gIElURVJBVE9SKDIzMzUsIDIzNzgsIExJR0hUX0dSQVkpO1xuXG4gIGNvbnN0IFNVUlJPVU5ESU5HX1dBVEVSX0RBUksgPSBDQVJSSUVSLnN1cnJvdW5kaW5nX3dhdGVyX2Rhcms7XG4gIElURVJBVE9SKDI3NTYsIDI3OTcsIFNVUlJPVU5ESU5HX1dBVEVSX0RBUkspO1xufSkoKTtcblxuKGZ1bmN0aW9uIGRlc3Ryb3llcl9lel9sb2FkZXIoKSB7XG4gIGNvbnN0IE9VVExJTkUgPSBERVNUUk9ZRVIuYmxhY2tfb3V0bGluZTtcbiAgSVRFUkFUT1IoMTQwMywgMTQyMiwgT1VUTElORSk7XG5cbiAgY29uc3QgSFVMTCA9IERFU1RST1lFUi5odWxsO1xuICBJVEVSQVRPUigxNDc1LCAxNDkwLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTYxNywgMTYzMCwgSFVMTCk7XG5cbiAgY29uc3QgTElHSFRfR1JBWSA9IERFU1RST1lFUi5saWdodF9ncmF5O1xuICBJVEVSQVRPUigxNTQ2LCAxNTYwLCBMSUdIVF9HUkFZKTtcbiAgSVRFUkFUT1IoMTA2MywgMTA2NywgTElHSFRfR1JBWSk7XG4gIElURVJBVE9SKDEyMDIsIDEyMDcsIExJR0hUX0dSQVkpO1xuICBJVEVSQVRPUigxMzQyLCAxMzQ3LCBMSUdIVF9HUkFZKTtcblxuICBjb25zdCBEQVJLX0dSQVkgPSBERVNUUk9ZRVIuZGFya19ncmF5O1xuICBJVEVSQVRPUigxMzM0LCAxMzM2LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxMzM4LCAxMzQwLCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxMzQ5LCAxMzUxLCBEQVJLX0dSQVkpO1xuXG4gIGNvbnN0IFNVUlJPVU5ESU5HX1dBVEVSX0RBUksgPSBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyaztcbiAgSVRFUkFUT1IoMTc1NiwgMTc3MiwgU1VSUk9VTkRJTkdfV0FURVJfREFSSyk7XG59KSgpO1xuXG5leHBvcnQgeyBDQVJSSUVSLCBERVNUUk9ZRVIsIFNVQk1BUklORSB9O1xuIiwiaW1wb3J0IHsgSVRFUkFUT1IgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jb25zdCBTVEFSVCA9IHtcbiAgczogWzIyMSwgMjIyLCA0MzcsIDQzOF0sXG4gIHQxOiBbMjM0LCAyMzUsIDMwNCwgMzA1LCAzNzQsIDM3NSwgNDQ0LCA0NDUsIDUxNCwgNTE1LCA1ODQsIDU4NV0sXG4gIGE6IFtcbiAgICAyNDEsIDI0MiwgMjQ3LCAyNDgsIDQ1MSwgNDUyLCA0NTcsIDQ1OCwgNTIxLCA1MjIsIDUyNywgNTI4LCA1OTEsIDU5MiwgNTk3LFxuICAgIDU5OCxcbiAgXSxcbiAgcjogW1xuICAgIDI1MSwgMjUyLCAyNTcsIDI1OCwgNDYxLCA0NjIsIDQ2NywgNDY4LCA1MzEsIDUzMiwgNTM3LCA1MzgsIDYwMSwgNjAyLCA2MDcsXG4gICAgNjA4LFxuICBdLFxuICB0MjogWzI2NCwgMjY1LCAzMzQsIDMzNSwgNDA0LCA0MDUsIDQ3NCwgNDc1LCA1NDQsIDU0NSwgNjE0LCA2MTVdLFxuICBhbGw6IFtdLFxufTtcblxuKGZ1bmN0aW9uIGV6X2xvYWRlcigpIHtcbiAgY29uc3QgUyA9IFNUQVJULnM7XG4gIElURVJBVE9SKDgxLCA4OCwgUyk7XG4gIElURVJBVE9SKDE1MSwgMTU4LCBTKTtcbiAgSVRFUkFUT1IoMjkxLCAyOTgsIFMpO1xuICBJVEVSQVRPUigzNjEsIDM2OCwgUyk7XG4gIElURVJBVE9SKDUwMSwgNTA4LCBTKTtcbiAgSVRFUkFUT1IoNTcxLCA1NzgsIFMpO1xuXG4gIGNvbnN0IFQxID0gU1RBUlQudDE7XG4gIElURVJBVE9SKDkxLCA5OCwgVDEpO1xuICBJVEVSQVRPUigxNjEsIDE2OCwgVDEpO1xuXG4gIGNvbnN0IEEgPSBTVEFSVC5hO1xuICBJVEVSQVRPUigxMDEsIDEwOCwgQSk7XG4gIElURVJBVE9SKDE3MSwgMTc4LCBBKTtcbiAgSVRFUkFUT1IoMzExLCAzMTgsIEEpO1xuICBJVEVSQVRPUigzODEsIDM4OCwgQSk7XG5cbiAgY29uc3QgUiA9IFNUQVJULnI7XG4gIElURVJBVE9SKDExMSwgMTE2LCBSKTtcbiAgSVRFUkFUT1IoMTgxLCAxODYsIFIpO1xuICBJVEVSQVRPUigzMjEsIDMyNiwgUik7XG4gIElURVJBVE9SKDM5MSwgMzk2LCBSKTtcblxuICBjb25zdCBUMiA9IFNUQVJULnQyO1xuICBJVEVSQVRPUigxMjEsIDEyOCwgVDIpO1xuICBJVEVSQVRPUigxOTEsIDE5OCwgVDIpO1xuXG4gIGZvciAobGV0IGxldHRlciBpbiBTVEFSVCkge1xuICAgIGlmIChsZXR0ZXIgPT09ICdhbGwnKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgU1RBUlRbbGV0dGVyXS5tYXAoKG51bWJlcikgPT4ge1xuICAgICAgU1RBUlQuYWxsLnB1c2gobnVtYmVyKTtcbiAgICB9KTtcbiAgfVxufSkoKTtcbmV4cG9ydCBkZWZhdWx0IFNUQVJUO1xuIiwiaW1wb3J0IHJlbmRlcl90aWxlcyBmcm9tICcuL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9zdGFydF90aWxlcyBmcm9tICcuL2hlbHBlcnMvY29sb3Jfc3RhcnRfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX3NoaXBfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX3NoaXBfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX2JhdHRsZXNoaXBfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX2JhdHRsZXNoaXBfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX3dhdGVyX3RpbGVzIGZyb20gJy4vaGVscGVycy9jb2xvcl93YXRlcl90aWxlcy5qcyc7XG5pbXBvcnQgbGlzdGVuZXJzX2hhbmRsZXJzIGZyb20gJy4vaGVscGVycy9saXN0ZW5lcnNfaGFuZGxlcnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lcGFnZSgpIHtcbiAgcmVuZGVyX3RpbGVzKCk7XG4gIGNvbG9yX3N0YXJ0X3RpbGVzKCk7XG4gIGNvbG9yX3NoaXBfdGlsZXMoKTtcbiAgY29sb3JfYmF0dGxlc2hpcF90aWxlcygpO1xuICBjb2xvcl93YXRlcl90aWxlcygpO1xuICBsaXN0ZW5lcnNfaGFuZGxlcnMoKTtcbn1cbiIsImltcG9ydCB7IEdBTUUgfSBmcm9tICcuLi8uLi8uLi8uLi9pbmRleC5qcyc7XG5pbXBvcnQgcGxhY2VfYWlfc2hpcHMgZnJvbSAnLi9wbGFjZV9haV9zaGlwcy5qcyc7XG5pbXBvcnQgcmVuZGVyX2dhbWVfYm9hcmRzIGZyb20gJy4uLy4uL2dhbWVfYm9hcmRzL3JlbmRlcl9nYW1lX2JvYXJkcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2ljX2xpc3RlbmVycygpIHtcbiAgbGV0IGN1cnJlbnRfc2hpcF9pbmRleCA9IDA7XG4gIGxldCBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgY29uc3QgU0hJUFMgPSBbJ2NhcnJpZXInLCAnYmF0dGxlc2hpcCcsICdkZXN0cm95ZXInLCAnc3ViJywgJ3BhdHJvbEJvYXQnXTtcbiAgY29uc3QgTEVOR1RIID0gWzUsIDQsIDMsIDMsIDJdO1xuICBjb25zdCBNQVhTID0ge1xuICAgIC8vIHZlcnRpY2FsIGlzIHVzaW5nIGNoYXJjb2Rlc1xuICAgIGNhcnJpZXI6IHtcbiAgICAgIGhvcml6b250YWw6IDUsXG4gICAgICB2ZXJ0aWNhbDogMTAyLCAvLyBmXG4gICAgfSxcbiAgICBiYXR0bGVzaGlwOiB7XG4gICAgICBob3Jpem9udGFsOiA2LFxuICAgICAgdmVydGljYWw6IDEwMywgLy8gZ1xuICAgIH0sXG4gICAgZGVzdHJveWVyOiB7XG4gICAgICBob3Jpem9udGFsOiA3LFxuICAgICAgdmVydGljYWw6IDEwNCwgLy8gaFxuICAgIH0sXG4gICAgc3ViOiB7XG4gICAgICBob3Jpem9udGFsOiA3LFxuICAgICAgdmVydGljYWw6IDEwNCwgLy8gaFxuICAgIH0sXG4gICAgcGF0cm9sQm9hdDoge1xuICAgICAgaG9yaXpvbnRhbDogOCxcbiAgICAgIHZlcnRpY2FsOiAxMDUsIC8vIGlcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IElOQk9VTkRTX0VWQUxVQVRPUiA9IChpZCkgPT4ge1xuICAgIGxldCB2YWx1ZV90b19jb21wYXJlID0gJyc7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHZhbHVlX3RvX2NvbXBhcmUgPSBpZFsxXTtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICB2YWx1ZV90b19jb21wYXJlID0gaWQuY2hhckNvZGVBdCgwKTtcbiAgICB9XG4gICAgY29uc3QgTUFYID0gTUFYU1tTSElQU1tjdXJyZW50X3NoaXBfaW5kZXhdXVtvcmllbnRhdGlvbl07XG4gICAgcmV0dXJuIHZhbHVlX3RvX2NvbXBhcmUgPD0gTUFYO1xuICB9O1xuXG4gIGNvbnN0IFNQQUNFX1RBS0VOX0VWQUxVQVRPUiA9IChhbGxfdGlsZXMpID0+IHtcbiAgICBsZXQgYXJlX2FsbF90YWtlbiA9IHRydWU7XG4gICAgY29uc3QgUExBWUVSMV9TSElQUyA9IEdBTUUuUkVUVVJOX1NISVBTKDEpO1xuICAgIGZvciAobGV0IHNoaXAgaW4gUExBWUVSMV9TSElQUykge1xuICAgICAgY29uc3QgUE9TSVRJT05TID0gUExBWUVSMV9TSElQU1tzaGlwXS5wb3NpdGlvbjtcbiAgICAgIGFsbF90aWxlcy5tYXAoKHRpbGUpID0+IHtcbiAgICAgICAgaWYgKFBPU0lUSU9OUy5pbmNsdWRlcyh0aWxlKSkge1xuICAgICAgICAgIGFyZV9hbGxfdGFrZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhcmVfYWxsX3Rha2VuO1xuICB9O1xuXG4gIGNvbnN0IFNVQlNFUVVFTlRfVElMRVMgPSAoaWQpID0+IHtcbiAgICBjb25zdCBMRVRURVJfQ0hBUl9DT0RFID0gaWQuY2hhckNvZGVBdCgwKTtcbiAgICBjb25zdCBOVU1CRVIgPSBpZFsxXTtcbiAgICBsZXQgYWxsID0gW107XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IFNUT1BfQVQgPSArTlVNQkVSICsgTEVOR1RIW2N1cnJlbnRfc2hpcF9pbmRleF07XG4gICAgICBmb3IgKGxldCBpID0gTlVNQkVSOyBpIDwgU1RPUF9BVDsgaSsrKSB7XG4gICAgICAgIGFsbC5wdXNoKGAke1N0cmluZy5mcm9tQ2hhckNvZGUoTEVUVEVSX0NIQVJfQ09ERSl9JHtpfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFsbDtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBjb25zdCBTVE9QX0FUID0gTEVUVEVSX0NIQVJfQ09ERSArIExFTkdUSFtjdXJyZW50X3NoaXBfaW5kZXhdO1xuICAgICAgZm9yIChsZXQgaSA9IExFVFRFUl9DSEFSX0NPREU7IGkgPCBTVE9QX0FUOyBpKyspIHtcbiAgICAgICAgYWxsLnB1c2goYCR7U3RyaW5nLmZyb21DaGFyQ29kZShpKX0ke05VTUJFUn1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGw7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IENPTE9SX1RJTEVTID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29vcmRpbmF0ZXMubWFwKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29vcmRpbmF0ZSk7XG4gICAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3BsYWNlX3NoaXBfaG92ZXJlZCcpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IE1PVVNFX0VOVEVSX0hBTkRMRVIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBJRCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICBjb25zdCBJTkJPVU5EUyA9IElOQk9VTkRTX0VWQUxVQVRPUihJRCk7XG4gICAgY29uc3QgQUxMX0NPT1JESU5BVEVTID0gU1VCU0VRVUVOVF9USUxFUyhJRCk7XG4gICAgY29uc3QgQVJFX1NVQlNFUVVFTlRfU1BBQ0VTX0ZSRUUgPSBTUEFDRV9UQUtFTl9FVkFMVUFUT1IoQUxMX0NPT1JESU5BVEVTKTtcbiAgICBpZiAoIUlOQk9VTkRTIHx8ICFBUkVfU1VCU0VRVUVOVF9TUEFDRVNfRlJFRSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWRfc2hpcF9wbGFjZW1lbnQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQ09MT1JfVElMRVMoQUxMX0NPT1JESU5BVEVTKTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgncGxhY2Vfc2hpcF9ob3ZlcmVkJyk7XG4gIH07XG5cbiAgY29uc3QgTU9VU0VfTEVBVkVfSEFORExFUiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IEhPVkVSRURfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxhY2Vfc2hpcF9ob3ZlcmVkJylcbiAgICApO1xuICAgIEhPVkVSRURfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlX3NoaXBfaG92ZXJlZCcpO1xuICAgIH0pO1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkX3NoaXBfcGxhY2VtZW50Jyk7XG4gIH07XG5cbiAgY29uc3QgTU9VU0VfQ0xJQ0tfSEFORExFUiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IElEID0gZXZlbnQudGFyZ2V0LmlkO1xuICAgIGNvbnN0IElOQk9VTkRTID0gSU5CT1VORFNfRVZBTFVBVE9SKElEKTtcbiAgICBjb25zdCBBTExfQ09PUkRJTkFURVMgPSBTVUJTRVFVRU5UX1RJTEVTKElEKTtcbiAgICBjb25zdCBBUkVfU1VCU0VRVUVOVF9TUEFDRVNfRlJFRSA9IFNQQUNFX1RBS0VOX0VWQUxVQVRPUihBTExfQ09PUkRJTkFURVMpO1xuXG4gICAgaWYgKElOQk9VTkRTICYmIEFSRV9TVUJTRVFVRU5UX1NQQUNFU19GUkVFICYmIGN1cnJlbnRfc2hpcF9pbmRleCA8IDUpIHtcbiAgICAgIGNvbnN0IENVUlJFTlRfU0hJUCA9IFNISVBTW2N1cnJlbnRfc2hpcF9pbmRleF07XG4gICAgICBHQU1FLlBMQUNFX1NISVAoMSwgQ1VSUkVOVF9TSElQLCBBTExfQ09PUkRJTkFURVMpO1xuICAgICAgQUxMX0NPT1JESU5BVEVTLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29vcmRpbmF0ZSk7XG4gICAgICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgncGxhY2VkX3RpbGUnKTtcbiAgICAgIH0pO1xuICAgICAgY3VycmVudF9zaGlwX2luZGV4ID0gY3VycmVudF9zaGlwX2luZGV4ICsgMTtcblxuICAgICAgaWYgKGN1cnJlbnRfc2hpcF9pbmRleCA+IDQpIHtcbiAgICAgICAgY29uc3QgTUFJTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZV9zaGlwc19tYWluJyk7XG4gICAgICAgIE1BSU4ucmVtb3ZlKCk7XG4gICAgICAgIHBsYWNlX2FpX3NoaXBzKCk7XG4gICAgICAgIHJlbmRlcl9nYW1lX2JvYXJkcygpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBTUEFDRV9CQVJfSEFORExFUiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IEtFWSA9IGV2ZW50LmtleTtcbiAgICBpZiAoS0VZID09PSAnICcgJiYgb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoS0VZID09PSAnICcgJiYgb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBUSUxFUyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxhY2Vfc2hpcF90aWxlJykpO1xuICBUSUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBNT1VTRV9FTlRFUl9IQU5ETEVSKTtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBNT1VTRV9MRUFWRV9IQU5ETEVSKTtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTU9VU0VfQ0xJQ0tfSEFORExFUik7XG4gIH0pO1xuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgU1BBQ0VfQkFSX0hBTkRMRVIpO1xufVxuIiwiaW1wb3J0IHsgR0FNRSB9IGZyb20gJy4uLy4uLy4uLy4uL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxhY2VfYWlfc2hpcHMoKSB7XG4gIGxldCBjdXJyZW50X3NoaXBfaW5kZXggPSAwO1xuICBsZXQgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gIGNvbnN0IFNISVBTID0gWydjYXJyaWVyJywgJ2JhdHRsZXNoaXAnLCAnZGVzdHJveWVyJywgJ3N1YicsICdwYXRyb2xCb2F0J107XG4gIGNvbnN0IExFTkdUSCA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgY29uc3QgSU5GTyA9IHtcbiAgICAvLyB2ZXJ0aWNhbCBpcyB1c2luZyBjaGFyY29kZXNcbiAgICBjYXJyaWVyOiB7XG4gICAgICBtYXg6IDUsIC8vaG9yaXpvbnRhbFxuICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgIH0sXG4gICAgYmF0dGxlc2hpcDoge1xuICAgICAgbWF4OiA2LCAvLyB2ZXJ0aWNhbFxuICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgIH0sXG4gICAgZGVzdHJveWVyOiB7XG4gICAgICBtYXg6IDcsIC8vIGhvcml6b250YWxcbiAgICAgIGNvb3JkaW5hdGVzOiBbXSxcbiAgICB9LFxuICAgIHN1Yjoge1xuICAgICAgbWF4OiA3LCAvLyB2ZXJ0aWNhbFxuICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgIH0sXG4gICAgcGF0cm9sQm9hdDoge1xuICAgICAgbWF4OiA4LCAvLyBob3Jpem9udGFsXG4gICAgICBjb29yZGluYXRlczogW10sXG4gICAgfSxcbiAgfTtcbiAgY29uc3QgQUxMX0NPT1JESU5BVEVTID0gW107XG5cbiAgY29uc3QgTEVUVEVSUyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJywgJ2knLCAnaiddO1xuXG4gIGNvbnN0IEFMTF9USUxFUyA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgTEVUVEVSX0NIQVJfQ09ERSA9IGNvb3JkaW5hdGUuY2hhckNvZGVBdCgwKTtcbiAgICBjb25zdCBOVU1CRVIgPSBjb29yZGluYXRlWzFdO1xuICAgIGxldCBhbGwgPSBbXTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgY29uc3QgU1RPUF9BVCA9ICtOVU1CRVIgKyBMRU5HVEhbY3VycmVudF9zaGlwX2luZGV4XTtcbiAgICAgIGZvciAobGV0IGkgPSBOVU1CRVI7IGkgPCBTVE9QX0FUOyBpKyspIHtcbiAgICAgICAgYWxsLnB1c2goYCR7U3RyaW5nLmZyb21DaGFyQ29kZShMRVRURVJfQ0hBUl9DT0RFKX0ke2l9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWxsO1xuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGNvbnN0IFNUT1BfQVQgPSBMRVRURVJfQ0hBUl9DT0RFICsgTEVOR1RIW2N1cnJlbnRfc2hpcF9pbmRleF07XG4gICAgICBmb3IgKGxldCBpID0gTEVUVEVSX0NIQVJfQ09ERTsgaSA8IFNUT1BfQVQ7IGkrKykge1xuICAgICAgICBhbGwucHVzaChgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKGkpfSR7TlVNQkVSfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFsbDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgVE9HR0xFX09SSUVOVEFUSU9OID0gKCkgPT4ge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBvcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBPTkVfUkFORE9NID0gKCkgPT4ge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBSQU5ET01fTEVUVEVSID0gTEVUVEVSU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgICAgY29uc3QgUkFORE9NX05VTUJFUiA9IE1hdGguZmxvb3IoXG4gICAgICAgIE1hdGgucmFuZG9tKCkgKiAoSU5GT1tTSElQU1tjdXJyZW50X3NoaXBfaW5kZXhdXS5tYXggKyAxKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBSQU5ET01fTEVUVEVSICsgUkFORE9NX05VTUJFUjtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBjb25zdCBSQU5ET01fTEVUVEVSID1cbiAgICAgICAgTEVUVEVSU1tcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoSU5GT1tTSElQU1tjdXJyZW50X3NoaXBfaW5kZXhdXS5tYXggKyAxKSlcbiAgICAgICAgXTtcbiAgICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICByZXR1cm4gUkFORE9NX0xFVFRFUiArIFJBTkRPTV9OVU1CRVI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IEdFVF9NT1ZFID0gKCkgPT4ge1xuICAgIGNvbnN0IFJBTkRPTV9DT09SRElOQVRFID0gT05FX1JBTkRPTSgpO1xuICAgIGNvbnN0IEFMTF9DT09SRElOQVRFUyA9IEFMTF9USUxFUyhSQU5ET01fQ09PUkRJTkFURSk7XG4gICAgcmV0dXJuIEFMTF9DT09SRElOQVRFUztcbiAgfTtcblxuICAoZnVuY3Rpb24gY3JlYXRlX2Nvb3JkaW5hdGVzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBjb25zdCBVTklRVUVfTU9WRSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHVuaXF1ZSA9IHRydWU7XG4gICAgICAgIGxldCBNT1ZFID0gR0VUX01PVkUoKTtcbiAgICAgICAgTU9WRS5tYXAoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICBpZiAoQUxMX0NPT1JESU5BVEVTLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgICB1bmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodW5pcXVlID09PSBmYWxzZSkge1xuICAgICAgICAgIFVOSVFVRV9NT1ZFKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVuaXF1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIE1PVkUubWFwKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICBJTkZPW1NISVBTW2N1cnJlbnRfc2hpcF9pbmRleF1dLmNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICBBTExfQ09PUkRJTkFURVMucHVzaChjb29yZGluYXRlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIFVOSVFVRV9NT1ZFKCk7XG4gICAgICBjdXJyZW50X3NoaXBfaW5kZXgrKztcbiAgICAgIFRPR0dMRV9PUklFTlRBVElPTigpO1xuICAgIH1cbiAgfSkoKTtcblxuICAoZnVuY3Rpb24gZmlsbF9haV9ib2FyZCgpIHtcbiAgICBmb3IgKGxldCBzaGlwIGluIElORk8pIHtcbiAgICAgIGNvbnN0IFNISVBfUE9TSVRJT05TID0gSU5GT1tzaGlwXS5jb29yZGluYXRlcztcbiAgICAgIEdBTUUuUExBQ0VfU0hJUCgyLCBzaGlwLCBTSElQX1BPU0lUSU9OUyk7XG4gICAgfVxuICB9KSgpO1xufVxuIiwiaW1wb3J0IENPT1JESU5BVEVTIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvY29vcmRpbmF0ZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJfdGlsZXMoKSB7XG4gIGNvbnN0IE1BSU4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IFBMQUNFX1NISVBTX0NPTlRBSU5FUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBJTlNUUlVDVElPTlNfQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IElOU1RSVUNUSU9OUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgU1BBQ0VfS0VZID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgna2JkJyk7XG4gIGNvbnN0IENMQVNTRVMgPSBbXG4gICAgJ2JsdWUxJyxcbiAgICAnYmx1ZTInLFxuICAgICdibHVlMycsXG4gICAgJ2JsdWU0JyxcbiAgICAnYmx1ZTUnLFxuICAgICdibHVlNicsXG4gICAgJ2JsdWU3JyxcbiAgICAnYmx1ZTgnLFxuICAgICdibHVlOScsXG4gICAgJ2JsdWUxMCcsXG4gICAgJ2dyZWVuMScsXG4gIF07XG5cbiAgTUFJTi5pZCA9ICdwbGFjZV9zaGlwc19tYWluJztcbiAgUExBQ0VfU0hJUFNfQ09OVEFJTkVSLmlkID0gJ3BsYWNlX3NoaXBzX2NvbnRhaW5lcic7XG4gIElOU1RSVUNUSU9OU19DT05UQUlORVIuaWQgPSAnaW5zdHJ1Y3Rpb25zX2NvbnRhaW5lcic7XG4gIElOU1RSVUNUSU9OUy5pZCA9ICdpbnN0cnVjdGlvbnMnO1xuICBTUEFDRV9LRVkuaWQgPSAnYmtkX3NwYWNlJztcbiAgSU5TVFJVQ1RJT05TLmlubmVyVGV4dCA9ICd0byByb3RhdGUnO1xuICBTUEFDRV9LRVkuaW5uZXJUZXh0ID0gJ3NwYWNlJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM1MDA7IGkrKykge1xuICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgncGxhY2Vfc2hpcHNfYmFja2dyb3VuZF90aWxlJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKENMQVNTRVNbUkFORE9NX05VTUJFUl0pO1xuICAgIE1BSU4uYXBwZW5kKFRJTEUpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IENPT1JESU5BVEVTW2ldO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgncGxhY2Vfc2hpcF90aWxlJyk7XG4gICAgUExBQ0VfU0hJUFNfQ09OVEFJTkVSLmFwcGVuZChUSUxFKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChNQUlOKTtcbiAgSU5TVFJVQ1RJT05TX0NPTlRBSU5FUi5hcHBlbmQoU1BBQ0VfS0VZKTtcbiAgSU5TVFJVQ1RJT05TX0NPTlRBSU5FUi5hcHBlbmQoSU5TVFJVQ1RJT05TKTtcbiAgTUFJTi5hcHBlbmQoUExBQ0VfU0hJUFNfQ09OVEFJTkVSKTtcbiAgTUFJTi5hcHBlbmQoSU5TVFJVQ1RJT05TX0NPTlRBSU5FUik7XG59XG4iLCJpbXBvcnQgcmVuZGVyX3RpbGVzIGZyb20gJy4vaGVscGVycy9yZW5kZXJfdGlsZXMuanMnO1xuaW1wb3J0IGxvZ2ljX2xpc3RlbmVycyBmcm9tICcuL2hlbHBlcnMvbG9naWNfbGlzdGVuZXJzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxhY2Vfc2hpcHMoKSB7XG4gIHJlbmRlcl90aWxlcygpO1xuICBsb2dpY19saXN0ZW5lcnMoKTtcbn1cbiIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGdhbWVsb29wIGZyb20gJy4vY29tcG9uZW50cy9nYW1lL0dBTUVfTE9PUC5qcyc7XG5pbXBvcnQgaG9tZXBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hvbWVwYWdlLmpzJztcblxuY29uc3QgR0FNRSA9IGdhbWVsb29wKCk7XG5ob21lcGFnZSgpO1xuXG5leHBvcnQgeyBHQU1FIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5nYW1lYm9hcmRzX2JhY2tncm91bmQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuYm9keSB7XFxuICBtaW4td2lkdGg6IDcwZW07XFxufVxcblxcbiNnYW1lX2JvYXJkcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1MCwgMWZyKTtcXG4gIGhlaWdodDogNTBlbTtcXG4gIG1pbi13aWR0aDogNzBlbTtcXG59XFxuXFxuLmdhbWVfYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDMwZW07XFxuICB3aWR0aDogMzBlbTtcXG59XFxuXFxuLmdhbWVfYm9hcmRfdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI3BsYXllcl9ib2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwZW07XFxuICBsZWZ0OiAyZW07XFxufVxcblxcbiNhaV9ib2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwZW07XFxuICByaWdodDogMmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lYm9hcmRzX2JhY2tncm91bmQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuYm9keSB7XFxuICBtaW4td2lkdGg6IDcwZW07XFxufVxcblxcbiNnYW1lX2JvYXJkcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1MCwgMWZyKTtcXG4gIGhlaWdodDogNTBlbTtcXG4gIG1pbi13aWR0aDogNzBlbTtcXG59XFxuXFxuLmdhbWVfYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDMwZW07XFxuICB3aWR0aDogMzBlbTtcXG59XFxuXFxuLmdhbWVfYm9hcmRfdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI3BsYXllcl9ib2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwZW07XFxuICBsZWZ0OiAyZW07XFxufVxcblxcbiNhaV9ib2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwZW07XFxuICByaWdodDogMmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLW9wYWNpdHktMDA6IDE7XFxuICAtLW9wYWNpdHktMDU6IDAuOTg7XFxuICAtLW9wYWNpdHktMTA6IDAuOTY7XFxuICAtLW9wYWNpdHktMTU6IDAuOTQ7XFxuICAtLW9wYWNpdHktMjA6IDAuOTI7XFxuICAtLW9wYWNpdHktMjU6IDAuOTtcXG4gIC0tb3BhY2l0eS0zMDogMC44ODtcXG4gIC0tb3BhY2l0eS0zNTogMC44NjtcXG4gIC0tb3BhY2l0eS00MDogMC44NDtcXG4gIC0tb3BhY2l0eS00NTogMC44MjtcXG4gIC0tb3BhY2l0eS01MDogMC44O1xcbiAgLS1vcGFjaXR5LTU1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTYwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTY1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTcwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTc1OiAwLjk7XFxuICAtLW9wYWNpdHktODA6IDAuOTI7XFxuICAtLW9wYWNpdHktODU6IDAuOTQ7XFxuICAtLW9wYWNpdHktOTA6IDAuOTY7XFxuICAtLW9wYWNpdHktOTU6IDAuOTg7XFxuICAtLW9wYWNpdHktMTAwOiAxO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTAwKTtcXG4gIH1cXG5cXG4gIDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0wNSk7XFxuICB9XFxuXFxuICAxMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwKTtcXG4gIH1cXG5cXG4gIDE1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTUpO1xcbiAgfVxcblxcbiAgMjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0yMCk7XFxuICB9XFxuXFxuICAyNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTI1KTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzApO1xcbiAgfVxcblxcbiAgMzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zNSk7XFxuICB9XFxuXFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTQwKTtcXG4gIH1cXG5cXG4gIDQ1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDUpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS01MCk7XFxuICB9XFxuXFxuICA1NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTU1KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNjApO1xcbiAgfVxcblxcbiAgNjUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02NSk7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTcwKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzUpO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS04MCk7XFxuICB9XFxuXFxuICA4NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTg1KTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktOTApO1xcbiAgfVxcblxcbiAgOTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05NSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xMDApO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvYW5pbWF0b3IuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tb3BhY2l0eS0wMDogMTtcXG4gIC0tb3BhY2l0eS0wNTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDogMC45NjtcXG4gIC0tb3BhY2l0eS0xNTogMC45NDtcXG4gIC0tb3BhY2l0eS0yMDogMC45MjtcXG4gIC0tb3BhY2l0eS0yNTogMC45O1xcbiAgLS1vcGFjaXR5LTMwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTM1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTQwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTQ1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTUwOiAwLjg7XFxuICAtLW9wYWNpdHktNTU6IDAuODI7XFxuICAtLW9wYWNpdHktNjA6IDAuODQ7XFxuICAtLW9wYWNpdHktNjU6IDAuODY7XFxuICAtLW9wYWNpdHktNzA6IDAuODg7XFxuICAtLW9wYWNpdHktNzU6IDAuOTtcXG4gIC0tb3BhY2l0eS04MDogMC45MjtcXG4gIC0tb3BhY2l0eS04NTogMC45NDtcXG4gIC0tb3BhY2l0eS05MDogMC45NjtcXG4gIC0tb3BhY2l0eS05NTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDA6IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMDApO1xcbiAgfVxcblxcbiAgNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTA1KTtcXG4gIH1cXG5cXG4gIDEwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTApO1xcbiAgfVxcblxcbiAgMTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xNSk7XFxuICB9XFxuXFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTIwKTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMjUpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zMCk7XFxuICB9XFxuXFxuICAzNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTM1KTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDApO1xcbiAgfVxcblxcbiAgNDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS00NSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTUwKTtcXG4gIH1cXG5cXG4gIDU1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNTUpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02MCk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTY1KTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzApO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS03NSk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTgwKTtcXG4gIH1cXG5cXG4gIDg1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktODUpO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05MCk7XFxuICB9XFxuXFxuICA5NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTk1KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwMCk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbm1haW4ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuI2JzX2hlYWRpbmcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNDAsIDFmcik7XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuI3N0YXJ0X2J1dHRvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4uaG9tZXBlYWdlX3RpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuLndhdGVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAxNTc7XFxufVxcblxcbi5zdGFydCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnN0YXJ0X2JhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjOTcxYjtcXG59XFxuXFxuLnN0YXJ0X3RleHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjOTcxYjtcXG59XFxuLnN0YXJ0X3RleHRfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbiNic19oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQwLCAxZnIpO1xcbiAgaGVpZ2h0OiA0MGVtO1xcbiAgd2lkdGg6IDcwZW07XFxufVxcblxcbiNzdGFydF9idXR0b24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDEwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuLmhvbWVwZWFnZV90aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblxcbi53YXRlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTU3O1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zdGFydF9iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzk3MWI7XFxufVxcblxcbi5zdGFydF90ZXh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzk3MWI7XFxufVxcbi5zdGFydF90ZXh0X2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcHMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2F0ZXIuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0b3IuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaGlwX3RleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5cXG4uc2hpcF9odWxsX291dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaGlwX2h1bGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTU1NTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQyNDI7XFxufVxcblxcbi5zaGlwX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxuICBhbmltYXRpb246IG9wYWNpdHkgMC43NXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubGlnaHRfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjNmM2YzZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDY0NjtcXG59XFxuXFxuLmRhcmtfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBmMGYwZjtcXG59XFxuXFxuLnBlcmlzY29wZV9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnBlcmlzY29wZV9vbiB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnJhZGFyX29mZiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDEwMTU3O1xcbn1cXG5cXG4ucmFkYXJfb24ge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9zaGlwcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vYW5pbWF0b3IuY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmRpc3BsYXk9c3dhcCcpO1xcblxcbi5zaGlwX3RleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5cXG4uc2hpcF9odWxsX291dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaGlwX2h1bGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTU1NTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQyNDI7XFxufVxcblxcbi5zaGlwX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxuICBhbmltYXRpb246IG9wYWNpdHkgMC43NXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubGlnaHRfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjNmM2YzZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDY0NjtcXG59XFxuXFxuLmRhcmtfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBmMGYwZjtcXG59XFxuXFxuLnBlcmlzY29wZV9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnBlcmlzY29wZV9vbiB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnJhZGFyX29mZiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDEwMTU3O1xcbn1cXG5cXG4ucmFkYXJfb24ge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRvci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0td2F0ZXIxOiAjMDEwMTU3O1xcbiAgLS13YXRlcjI6ICMwNjM3NDQ7XFxufVxcblxcbi5zdXJyb3VuZGluZ193YXRlcl9kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzEzOGM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGQwZDYxO1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjJiMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE3NzU7XFxufVxcblxcbi5ncmVlbjEge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIyKTtcXG4gIG9wYWNpdHk6IDYwJTtcXG59XFxuXFxuLmJsdWUxIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxufVxcblxcbi5ibHVlMiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogOTYlO1xcbn1cXG5cXG4uYmx1ZTMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDkyJTtcXG59XFxuXFxuLmJsdWU0IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4OCU7XFxufVxcblxcbi5ibHVlNSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODQlO1xcbn1cXG5cXG4uYmx1ZTYge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuLmJsdWU3IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA3NiU7XFxufVxcbi5ibHVlOCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNzIlO1xcbn1cXG5cXG4uYmx1ZTkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDY4JTtcXG59XFxuXFxuLmJsdWUxMCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNjQlO1xcbn1cXG5cXG4uYmx1ZTEwIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy93YXRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vYW5pbWF0b3IuY3NzJztcXG5cXG46cm9vdCB7XFxuICAtLXdhdGVyMTogIzAxMDE1NztcXG4gIC0td2F0ZXIyOiAjMDYzNzQ0O1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzhjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkMGQ2MTtcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyYjE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTcxNzc1O1xcbn1cXG5cXG4uZ3JlZW4xIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMik7XFxuICBvcGFjaXR5OiA2MCU7XFxufVxcblxcbi5ibHVlMSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbn1cXG5cXG4uYmx1ZTIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDk2JTtcXG59XFxuXFxuLmJsdWUzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA5MiU7XFxufVxcblxcbi5ibHVlNCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODglO1xcbn1cXG5cXG4uYmx1ZTUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDg0JTtcXG59XFxuXFxuLmJsdWU2IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblxcbi5ibHVlNyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNzYlO1xcbn1cXG4uYmx1ZTgge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDcyJTtcXG59XFxuXFxuLmJsdWU5IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA2OCU7XFxufVxcblxcbi5ibHVlMTAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDY0JTtcXG59XFxuXFxuLmJsdWUxMCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TcGFjZStNb25vJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wbGFjZV9zaGlwc19iYWNrZ3JvdW5kX3RpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuYm9keSB7XFxuICBtaW4td2lkdGg6IDcwZW07XFxufVxcblxcbiNwbGFjZV9zaGlwc19tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLCAxZnIpO1xcbiAgbWluLXdpZHRoOiA3MGVtO1xcbiAgaGVpZ2h0OiA1MGVtO1xcbn1cXG5cXG4jcGxhY2Vfc2hpcHNfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTVlbTtcXG4gIGJvdHRvbTogNGVtO1xcbiAgaGVpZ2h0OiA0MGVtO1xcbiAgd2lkdGg6IDQwZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWM5NzFiO1xcbn1cXG5cXG4jaW5zdHJ1Y3Rpb25zX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMWVtO1xcbiAgbGVmdDogMjllbTtcXG4gIHdpZHRoOiAxMmVtO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBiYWNrZ3JvdW5kOiAjYWE5ZjYxO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVlbTtcXG59XFxuXFxuI2JrZF9zcGFjZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMy41ZW07XFxuICBmb250LXNpemU6IDEuOGVtO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMnB4ICMwMDAwMDA7XFxufVxcblxcbiNpbnN0cnVjdGlvbnMge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LWZhbWlseTogJ1NwYWNlIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbi5wbGFjZV9zaGlwX3RpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG59XFxuXFxuLnBsYWNlZF90aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2NhMjk7XFxuICBiYWNrZ3JvdW5kOiAjYWM5NzFiO1xcbn1cXG5cXG4ucGxhY2Vfc2hpcF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblxcbi5pbnZhbGlkX3NoaXBfcGxhY2VtZW50IHtcXG4gIGJhY2tncm91bmQ6ICNmMDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BhY2UrTW9ubyZkaXNwbGF5PXN3YXAnKTtcXG5cXG4ucGxhY2Vfc2hpcHNfYmFja2dyb3VuZF90aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLXdpZHRoOiA3MGVtO1xcbn1cXG5cXG4jcGxhY2Vfc2hpcHNfbWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1MCwgMWZyKTtcXG4gIG1pbi13aWR0aDogNzBlbTtcXG4gIGhlaWdodDogNTBlbTtcXG59XFxuXFxuI3BsYWNlX3NoaXBzX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDE1ZW07XFxuICBib3R0b206IDRlbTtcXG4gIGhlaWdodDogNDBlbTtcXG4gIHdpZHRoOiA0MGVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG59XFxuXFxuI2luc3RydWN0aW9uc19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFlbTtcXG4gIGxlZnQ6IDI5ZW07XFxuICB3aWR0aDogMTJlbTtcXG4gIGhlaWdodDogM2VtO1xcbiAgYmFja2dyb3VuZDogI2FhOWY2MTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1ZW07XFxufVxcblxcbiNia2Rfc3BhY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDMuNWVtO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDJweCAjMDAwMDAwO1xcbn1cXG5cXG4jaW5zdHJ1Y3Rpb25zIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4ucGxhY2Vfc2hpcF90aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxufVxcblxcbi5wbGFjZWRfdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTdjYTI5O1xcbiAgYmFja2dyb3VuZDogI2FjOTcxYjtcXG59XFxuXFxuLnBsYWNlX3NoaXBfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kOiAjODRmZjE3O1xcbn1cXG5cXG4uaW52YWxpZF9zaGlwX3BsYWNlbWVudCB7XFxuICBiYWNrZ3JvdW5kOiAjZjAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvaW5kZXguY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9jc3MvaW5kZXguY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9jc3MvaW5kZXguY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIkdhbWVib2FyZCIsIlBsYXllciIsImdhbWVsb29wIiwiUExBWUVSMSIsIlBMQVlFUjIiLCJwbGF5ZXIxX2dhbWVib2FyZCIsInBsYXllcjJfZ2FtZWJvYXJkIiwiUkVTRVQiLCJSRVRVUk5fU0hJUFMiLCJwbGF5ZXIiLCJzaGlwcyIsIlBMQUNFX1NISVAiLCJib2FyZCIsInNoaXAiLCJwb3NpdGlvbnMiLCJwbGFjZV9zaGlwIiwiU2hpcCIsImNhcnJpZXIiLCJwb3NpdGlvbiIsImJhdHRsZXNoaXAiLCJkZXN0cm95ZXIiLCJzdWIiLCJwYXRyb2xCb2F0IiwiaW5wdXRfY29vcmRpbmF0ZXMiLCJpbnB1dF9jb29yZGluYXRlIiwibWlzcyIsIldBU19ISVQiLCJpbmNsdWRlcyIsImhpdHMiLCJISVRfSU5ERVgiLCJpbmRleE9mIiwiaGl0IiwibWlzc2VzIiwiaXNfYWxsX3N1bmsiLCJhbGxfc3Vua19jYWxsIiwiaXNfc3VuayIsInNvcnQiLCJMRVRURVJTIiwibWFwIiwibGV0dGVyIiwiaSIsIkVycm9yIiwiQ09PUkRJTkFURSIsInJlbWFpbmluZ19tb3ZlcyIsIm1vdmVzIiwicmVjZWl2ZV9hdHRhY2siLCJjb29yZGluYXRlIiwiRklMVEVSRURfTU9WRVMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJSRU1BSU5JTkdfTU9WRVNfQ09QWSIsIlJFTUFJTklORyIsImZpbHRlciIsInJlbWFpbmluZ19tb3ZlIiwiQXJyYXkiLCJmaWxsIiwicG9zaXRpb25faGl0IiwiZXZlcnkiLCJoaXRzX2FycmF5IiwiSElUUyIsIkNPT1JESU5BVEVTIiwiTlVNQkVSUyIsIm51bWJlciIsInB1c2giLCJyZW5kZXJfYmFja2dyb3VuZF90aWxlcyIsIk1BSU4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJDTEFTU0VTIiwiaWQiLCJSQU5ET01fTlVNQkVSIiwiVElMRSIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImJvZHkiLCJyZW5kZXJfZ2FtZWJvYXJkX3RpbGVzIiwiZ2V0RWxlbWVudEJ5SWQiLCJQTEFZRVJfQk9BUkQiLCJBSV9CT0FSRCIsIlBMQVlFUl9CT0FSRF9USUxFIiwiQUlfQk9BUkRfVElMRSIsInNldEF0dHJpYnV0ZSIsInJlbmRlcl90aWxlcyIsInJlbmRlcl9nYW1lX2JvYXJkcyIsIkFOSU1BVElPTlMiLCJQRVJJU0NPUEVfU1BJTk5FUiIsIkxFRlRfVElMRSIsIlJJR0hUX1RJTEUiLCJyZW1vdmUiLCJ2YWx1ZSIsIlJBREFSX1NQSU5ORVIxIiwiUkFEQVJfU1BJTk5FUjIiLCJTVUJfQU5JTUFUSU9OIiwic2V0SW50ZXJ2YWwiLCJCT0FUMSIsIkJPQVQyIiwiSVRFUkFUT1IiLCJCQVRUTEVTSElQIiwiQiIsIkEiLCJUMSIsIlQyIiwiTCIsIkUiLCJTIiwiSCIsIkkiLCJQIiwiZXpfbG9hZGVyIiwiRVpfVElMRV9DT0xPUklaRVIiLCJjb2xvcl9iYXR0bGVzaGlwX3RpbGVzIiwiQ0FSUklFUiIsIkRFU1RST1lFUiIsIlNVQk1BUklORSIsImNvbG9yX3NoaXBfdGlsZXMiLCJibGFja19vdXRsaW5lIiwiaHVsbCIsImRhcmtfZ3JheSIsImxpZ2h0X2dyYXkiLCJzaGlwX2xpZ2h0Iiwic3Vycm91bmRpbmdfd2F0ZXJfZGFyayIsInN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0IiwiQyIsIlYiLCJOIiwiU0lYIiwiTklORSIsIlUiLCJOMiIsIlYyIiwiWSIsIkFMTCIsInRpbGUiLCJpbm5lclRleHQiLCJzdWJtYXJpbmUiLCJsZWZ0X3BlcmlzY29wZSIsInJpZ2h0X3BlcmlzY29wZSIsIlNUQVJUIiwiY29sb3Jfc3RhcnRfdGlsZXMiLCJhbGwiLCJ0aWxlX2lkIiwiY29sb3Jfd2F0ZXJfdGlsZXMiLCJXQVRFUl9USUxFUyIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibWluIiwibWF4IiwidGFyZ2V0X2FycmF5IiwiaW5wdXRfYXJyYXkiLCJpbnB1dF9jbGFzcyIsInBsYWNlX3NoaXBzIiwibGlzdGVuZXJzX2hhbmRsZXJzIiwiU1RBUlRfQlVUVE9OIiwiU1RBUlRfQlVUVE9OX0VOVEVSX0hBTkRMRVIiLCJTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUyIsIlNUQVJUX0JVVFRPTl9URVhUX1RJTEVTIiwiU1RBUlRfQlVUVE9OX0xFQVZFX0hBTkRMRVIiLCJTVEFSVF9CVVRUT05fQ0xJQ0tfSEFORExFUiIsImludGVydmFsIiwiSU5URVJWQUwiLCJjbGVhckludGVydmFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkhFQURJTkciLCJjYXJyaWVyX2V6X2xvYWRlciIsIk9VVExJTkUiLCJIVUxMIiwiREFSS19HUkFZIiwiTElHSFRfR1JBWSIsIlNVUlJPVU5ESU5HX1dBVEVSX0RBUksiLCJkZXN0cm95ZXJfZXpfbG9hZGVyIiwicyIsInQxIiwiYSIsInIiLCJ0MiIsIlIiLCJob21lcGFnZSIsIkdBTUUiLCJwbGFjZV9haV9zaGlwcyIsImxvZ2ljX2xpc3RlbmVycyIsImN1cnJlbnRfc2hpcF9pbmRleCIsIm9yaWVudGF0aW9uIiwiU0hJUFMiLCJMRU5HVEgiLCJNQVhTIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiSU5CT1VORFNfRVZBTFVBVE9SIiwidmFsdWVfdG9fY29tcGFyZSIsImNoYXJDb2RlQXQiLCJNQVgiLCJTUEFDRV9UQUtFTl9FVkFMVUFUT1IiLCJhbGxfdGlsZXMiLCJhcmVfYWxsX3Rha2VuIiwiUExBWUVSMV9TSElQUyIsIlBPU0lUSU9OUyIsIlNVQlNFUVVFTlRfVElMRVMiLCJMRVRURVJfQ0hBUl9DT0RFIiwiTlVNQkVSIiwiU1RPUF9BVCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIkNPTE9SX1RJTEVTIiwiY29vcmRpbmF0ZXMiLCJNT1VTRV9FTlRFUl9IQU5ETEVSIiwiZXZlbnQiLCJJRCIsInRhcmdldCIsIklOQk9VTkRTIiwiQUxMX0NPT1JESU5BVEVTIiwiQVJFX1NVQlNFUVVFTlRfU1BBQ0VTX0ZSRUUiLCJNT1VTRV9MRUFWRV9IQU5ETEVSIiwiSE9WRVJFRF9USUxFUyIsIk1PVVNFX0NMSUNLX0hBTkRMRVIiLCJDVVJSRU5UX1NISVAiLCJTUEFDRV9CQVJfSEFORExFUiIsIktFWSIsImtleSIsIlRJTEVTIiwiSU5GTyIsIkFMTF9USUxFUyIsIlRPR0dMRV9PUklFTlRBVElPTiIsIk9ORV9SQU5ET00iLCJSQU5ET01fTEVUVEVSIiwiR0VUX01PVkUiLCJSQU5ET01fQ09PUkRJTkFURSIsImNyZWF0ZV9jb29yZGluYXRlcyIsIlVOSVFVRV9NT1ZFIiwidW5pcXVlIiwiTU9WRSIsImZpbGxfYWlfYm9hcmQiLCJTSElQX1BPU0lUSU9OUyIsIlBMQUNFX1NISVBTX0NPTlRBSU5FUiIsIklOU1RSVUNUSU9OU19DT05UQUlORVIiLCJJTlNUUlVDVElPTlMiLCJTUEFDRV9LRVkiXSwic291cmNlUm9vdCI6IiJ9