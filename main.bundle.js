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
/* harmony export */   "DESTROYER": () => (/* binding */ DESTROYER)
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
  s: [146, 147, 216, 217, 434, 435, 504, 505],
  t1: [162, 163, 232, 233, 302, 303, 372, 373, 442, 443, 512, 513, 582, 583, 652, 653],
  a: [170, 171, 178, 179, 240, 241, 248, 249, 450, 451, 458, 459, 520, 521, 528, 529, 590, 591, 598, 599, 660, 661, 668, 669],
  r: [182, 183, 190, 191, 252, 253, 260, 261, 462, 463, 470, 471, 532, 533, 540, 541, 602, 603, 610, 611, 672, 673, 680, 681],
  t2: [198, 199, 268, 269, 338, 339, 408, 409, 478, 479, 548, 549, 618, 619, 688, 689],
  all: []
};

(function ez_loader() {
  var S = START.s;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(6, 15, S);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(76, 85, S);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(76, 85, S);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(286, 295, S);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(356, 365, S);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(566, 575, S);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(636, 645, S);
  var T1 = START.t1;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(18, 27, T1);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(88, 97, T1);
  var A = START.a;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(30, 39, A);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(100, 109, A);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(310, 319, A);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(380, 389, A);
  var R = START.r;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(42, 49, R);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(112, 119, R);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(322, 329, R);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(392, 399, R);
  var T2 = START.t2;
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(54, 63, T2);
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ITERATOR)(124, 133, T2);

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



function homepage() {
  (0,_render_tiles_js__WEBPACK_IMPORTED_MODULE_0__.default)();
  (0,_color_start_tiles_js__WEBPACK_IMPORTED_MODULE_1__.default)();
  (0,_color_ship_tiles_js__WEBPACK_IMPORTED_MODULE_2__.default)();
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
      e.target.classList.add('dark_gray');
    });
    TILE.addEventListener('dblclick', function (e) {
      e.target.classList.remove('dark_gray');
    });
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  justify-content: center;\n  background-color: black;\n  cursor: none;\n}\n\n#bs_heading {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(40, 1fr);\n  height: 40em;\n  width: 70em;\n}\n\n#start_button {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 10em;\n  width: 70em;\n}\n\n.tile:hover {\n  background: rgb(132, 255, 23);\n}\n\n.water {\n  border: 1px solid black;\n  background-color: #00006a;\n}\n\n.surrounding_water_dark {\n  background-color: #13138c;\n}\n\n.surrounding_water_light {\n  background-color: #2222b1;\n}\n\n.start {\n  border: 1px solid black;\n}\n\n.start_background {\n  background-color: black;\n}\n\n.start_text {\n  background-color: #ac971b;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/homepage/css/homepage.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["body {\n  display: flex;\n  justify-content: center;\n  background-color: black;\n  cursor: none;\n}\n\n#bs_heading {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(40, 1fr);\n  height: 40em;\n  width: 70em;\n}\n\n#start_button {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 10em;\n  width: 70em;\n}\n\n.tile:hover {\n  background: rgb(132, 255, 23);\n}\n\n.water {\n  border: 1px solid black;\n  background-color: #00006a;\n}\n\n.surrounding_water_dark {\n  background-color: #13138c;\n}\n\n.surrounding_water_light {\n  background-color: #2222b1;\n}\n\n.start {\n  border: 1px solid black;\n}\n\n.start_background {\n  background-color: black;\n}\n\n.start_text {\n  background-color: #ac971b;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".ship_hull_outline {\n  background-color: black;\n}\n\n.ship_hull {\n  background-color: #595555;\n}\n\n.ship_light {\n  background: #d52b2b;\n  animation: opacity 0.75s linear infinite;\n}\n\n.light_gray {\n  background: #6c6c6c;\n}\n\n.dark_gray {\n  background: #393939;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/homepage/css/ships.css"],"names":[],"mappings":"AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,wCAAwC;AAC1C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":["@import './animator.css';\n\n.ship_hull_outline {\n  background-color: black;\n}\n\n.ship_hull {\n  background-color: #595555;\n}\n\n.ship_light {\n  background: #d52b2b;\n  animation: opacity 0.75s linear infinite;\n}\n\n.light_gray {\n  background: #6c6c6c;\n}\n\n.dark_gray {\n  background: #393939;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFELEVBQU8sSUFBUCxFQUFhUyxJQUFiLENBQVI7QUFDQVQsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhUyxJQUFiLENBQVI7QUFDQVQsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhUyxJQUFiLENBQVI7QUFDQVQsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhUyxJQUFiLENBQVI7QUFDQVQsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhUyxJQUFiLENBQVI7QUFDQVQsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhUyxJQUFiLENBQVI7QUFDQVQsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhUyxJQUFiLENBQVI7QUFDQVQsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhUyxJQUFiLENBQVI7QUFDQVQsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhUyxJQUFiLENBQVI7QUFDQVQsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhUyxJQUFiLENBQVI7QUFDQVQsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhUyxJQUFiLENBQVI7QUFDQVQsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhUyxJQUFiLENBQVI7QUFFQSxNQUFNQyxTQUFTLEdBQUdoQyxPQUFPLENBQUNNLFNBQTFCO0FBQ0FnQixFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFVLFNBQWIsQ0FBUjtBQUNBVixFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFVLFNBQWIsQ0FBUjtBQUNBVixFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFVLFNBQWIsQ0FBUjtBQUNBVixFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFVLFNBQWIsQ0FBUjtBQUNBVixFQUFBQSxxREFB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OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQSxJQUFNUyxJQUFJLEdBQUduSCxzRUFBUSxFQUFyQjtBQUNBeUcsNEVBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lL0dBTUVfTE9PUC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWUvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2NvbG9yX3NoaXBfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2NvbG9yX3N0YXJ0X3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvc2hpcF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9zdGFydF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL3JlbmRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2FuaW1hdG9yLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2hvbWVwYWdlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL3NoaXBzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZWxvb3AoKSB7XG4gIGNvbnN0IFBMQVlFUjEgPSBuZXcgUGxheWVyKCdodW1hbicpO1xuICBjb25zdCBQTEFZRVIyID0gbmV3IFBsYXllcignYWknKTtcbiAgY29uc3QgUExBWUVSMV9HQU1FQk9BUkQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGNvbnN0IFBMQVlFUjJfR0FNRUJPQVJEID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gIC8vdG9kbyByZW1vdmUgYm9pbGVycGxhdGUgc28gc2hpcHMgY2FuIGJlIG1hbnVhbGx5IHBsYWNlZFxuICBbUExBWUVSMV9HQU1FQk9BUkQsIFBMQVlFUjJfR0FNRUJPQVJEXS5tYXAoKGJvYXJkKSA9PiB7XG4gICAgYm9hcmQucGxhY2Vfc2hpcCgnY2FycmllcicsIFsnYTAnLCAnYTEnLCAnYTInLCAnYTMnLCAnYTQnXSk7XG4gICAgYm9hcmQucGxhY2Vfc2hpcCgnYmF0dGxlc2hpcCcsIFsnYjAnLCAnYjEnLCAnYjInLCAnYjMnXSk7XG4gICAgYm9hcmQucGxhY2Vfc2hpcCgnZGVzdHJveWVyJywgWydjMCcsICdjMScsICdjMiddKTtcbiAgICBib2FyZC5wbGFjZV9zaGlwKCdzdWInLCBbJ2QwJywgJ2QxJywgJ2QyJ10pO1xuICAgIGJvYXJkLnBsYWNlX3NoaXAoJ3BhdHJvbEJvYXQnLCBbJ2UwJywgJ2UxJ10pO1xuICB9KTtcbiAgLy90b2RvIHJlbW92ZSBib2lsZXJwbGF0ZSBzbyBzaGlwcyBjYW4gYmUgbWFudWFsbHkgcGxhY2VkXG5cbiAgcmV0dXJuIHsgUExBWUVSMSwgUExBWUVSMiB9O1xufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgc2hpcHMgPSB7XG4gICAgY2Fycmllcjoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoNSksXG4gICAgfSxcbiAgICBiYXR0bGVzaGlwOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCg0KSxcbiAgICB9LFxuICAgIGRlc3Ryb3llcjoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoMyksXG4gICAgfSxcbiAgICBzdWI6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDMpLFxuICAgIH0sXG4gICAgcGF0cm9sQm9hdDoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoMiksXG4gICAgfSxcbiAgfTtcbiAgaGl0cyA9IFtdO1xuICBtaXNzZXMgPSBbXTtcblxuICBwbGFjZV9zaGlwKHNoaXAsIGlucHV0X2Nvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5zaGlwc1tzaGlwXS5wb3NpdGlvbiA9IGlucHV0X2Nvb3JkaW5hdGVzO1xuICB9XG4gICNtaXNzX3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIHJldHVybiBbLi4udGhpcy5taXNzZXMsIGlucHV0X2Nvb3JkaW5hdGVdLnNvcnQoKTtcbiAgfVxuICAjaGl0X3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIHJldHVybiBbLi4udGhpcy5oaXRzLCBpbnB1dF9jb29yZGluYXRlXS5zb3J0KCk7XG4gIH1cbiAgcmVjZWl2ZV9hdHRhY2soaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIGxldCBtaXNzID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgIGNvbnN0IFdBU19ISVQgPSB0aGlzLnNoaXBzW3NoaXBdLnBvc2l0aW9uLmluY2x1ZGVzKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgICAgaWYgKFdBU19ISVQpIHtcbiAgICAgICAgdGhpcy5oaXRzID0gdGhpcy4jaGl0X3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSk7XG4gICAgICAgIGNvbnN0IEhJVF9JTkRFWCA9IHRoaXMuc2hpcHNbc2hpcF0ucG9zaXRpb24uaW5kZXhPZihpbnB1dF9jb29yZGluYXRlKTtcbiAgICAgICAgdGhpcy5zaGlwc1tzaGlwXS5zaGlwLmhpdChISVRfSU5ERVgpO1xuICAgICAgICBtaXNzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtaXNzKSB7XG4gICAgICB0aGlzLm1pc3NlcyA9IHRoaXMuI21pc3NfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKTtcbiAgICB9XG4gIH1cbiAgYWxsX3N1bmsoKSB7XG4gICAgbGV0IGlzX2FsbF9zdW5rID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgIGNvbnN0IGFsbF9zdW5rX2NhbGwgPSB0aGlzLnNoaXBzW3NoaXBdLnNoaXAuaXNfc3VuaygpO1xuICAgICAgaWYgKGFsbF9zdW5rX2NhbGwgPT09IGZhbHNlKSB7XG4gICAgICAgIGlzX2FsbF9zdW5rID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNfYWxsX3N1bms7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHBsYXllcikge1xuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICB9XG4gIG1vdmVzID0gW107XG4gIHJlbWFpbmluZ19tb3ZlcyA9IFtdO1xuXG4gICNyZW1haW5pbmdfbW92ZXNfcmVkdWNlcihjb29yZGluYXRlKSB7XG4gICAgdGhpcy5yZW1haW5pbmdfbW92ZXMgPSBbLi4udGhpcy5yZW1haW5pbmdfbW92ZXMsIGNvb3JkaW5hdGVdO1xuICB9XG4gICNmaWxsX3JlbWFpbmluZ19tb3ZlcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgTEVUVEVSUyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJywgJ2knLCAnaiddO1xuICAgIExFVFRFUlMubWFwKChsZXR0ZXIpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICB0aGlzLiNyZW1haW5pbmdfbW92ZXNfcmVkdWNlcihgJHtsZXR0ZXJ9JHtpfWApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSgpO1xuICAjYWlfbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdfbW92ZXNbXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJlbWFpbmluZ19tb3Zlcy5sZW5ndGgpXG4gICAgXTtcbiAgfVxuICAjZmlsdGVyX3JlbWFpbmluZ19tb3Zlcyhjb29yZGluYXRlKSB7XG4gICAgY29uc3QgUkVNQUlOSU5HX01PVkVTX0NPUFkgPSBbLi4udGhpcy5yZW1haW5pbmdfbW92ZXNdO1xuICAgIGNvbnN0IFJFTUFJTklORyA9IFJFTUFJTklOR19NT1ZFU19DT1BZLmZpbHRlcigocmVtYWluaW5nX21vdmUpID0+IHtcbiAgICAgIHJldHVybiByZW1haW5pbmdfbW92ZSAhPT0gY29vcmRpbmF0ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gUkVNQUlOSU5HO1xuICB9XG4gICNhdHRhY2tfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLm1vdmVzLCBpbnB1dF9jb29yZGluYXRlXTtcbiAgfVxuICBhaV9hdHRhY2soYm9hcmQpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXIgIT09ICdhaScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxheWVyIG5lZWRzIHRvIGJlIEFJJyk7XG4gICAgfVxuICAgIGNvbnN0IENPT1JESU5BVEUgPSB0aGlzLiNhaV9tb3ZlKCk7XG4gICAgdGhpcy5yZW1haW5pbmdfbW92ZXMgPSB0aGlzLiNmaWx0ZXJfcmVtYWluaW5nX21vdmVzKENPT1JESU5BVEUpO1xuICAgIHRoaXMubW92ZXMgPSB0aGlzLiNhdHRhY2tfcmVkdWNlcihDT09SRElOQVRFKTtcbiAgICBib2FyZC5yZWNlaXZlX2F0dGFjayhDT09SRElOQVRFKTtcbiAgICByZXR1cm4gQ09PUkRJTkFURTtcbiAgfVxuICBodW1hbl9hdHRhY2soYm9hcmQsIGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXIgIT09ICdodW1hbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxheWVyIG5lZWRzIHRvIGJlIGEgaHVtYW4nKTtcbiAgICB9XG4gICAgY29uc3QgRklMVEVSRURfTU9WRVMgPSB0aGlzLiNmaWx0ZXJfcmVtYWluaW5nX21vdmVzKGNvb3JkaW5hdGUpO1xuICAgIHRoaXMucmVtYWluaW5nX21vdmVzID0gRklMVEVSRURfTU9WRVM7XG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMuI2F0dGFja19yZWR1Y2VyKGNvb3JkaW5hdGUpO1xuICAgIGJvYXJkLnJlY2VpdmVfYXR0YWNrKGNvb3JkaW5hdGUpO1xuICAgIHJldHVybiBjb29yZGluYXRlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5oaXRzID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSk7XG4gIH1cblxuICAjaGl0X3JlZHVjZXIoaGl0c19hcnJheSwgcG9zaXRpb25faGl0KSB7XG4gICAgY29uc3QgSElUUyA9IFsuLi5oaXRzX2FycmF5XTtcbiAgICBISVRTW3Bvc2l0aW9uX2hpdF0gPSB0cnVlO1xuICAgIHJldHVybiBISVRTO1xuICB9XG4gIGhpdChwb3NpdGlvbl9oaXQpIHtcbiAgICB0aGlzLmhpdHMgPSB0aGlzLiNoaXRfcmVkdWNlcih0aGlzLmhpdHMsIHBvc2l0aW9uX2hpdCk7XG4gIH1cbiAgaXNfc3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRzLmV2ZXJ5KChwb3NpdGlvbikgPT4gcG9zaXRpb24gPT09IHRydWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDQVJSSUVSLCBERVNUUk9ZRVIgfSBmcm9tICcuL2hlbHBlcnMvc2hpcF90aWxlcy5qcyc7XG5pbXBvcnQgeyBFWl9USUxFX0NPTE9SSVpFUiB9IGZyb20gJy4vaGVscGVycy9oZWxwZXJzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3Jfc2hpcF90aWxlcygpIHtcbiAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5ibGFja19vdXRsaW5lLCAnc2hpcF9odWxsX291dGxpbmUnKTtcbiAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5odWxsLCAnc2hpcF9odWxsJyk7XG4gIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuZGFya19ncmF5LCAnZGFya19ncmF5Jyk7XG4gIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIubGlnaHRfZ3JheSwgJ2xpZ2h0X2dyYXknKTtcbiAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5zaGlwX2xpZ2h0LCAnc2hpcF9saWdodCcpO1xuICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLnN1cnJvdW5kaW5nX3dhdGVyX2RhcmssICdzdXJyb3VuZGluZ193YXRlcl9kYXJrJyk7XG4gIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQsICdzdXJyb3VuZGluZ193YXRlcl9saWdodCcpO1xuXG4gIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5ibGFja19vdXRsaW5lLCAnc2hpcF9odWxsX291dGxpbmUnKTtcbiAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLmh1bGwsICdzaGlwX2h1bGwnKTtcbiAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLmxpZ2h0X2dyYXksICdsaWdodF9ncmF5Jyk7XG4gIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5kYXJrX2dyYXksICdkYXJrX2dyYXknKTtcbiAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLnNoaXBfbGlnaHQsICdzaGlwX2xpZ2h0Jyk7XG4gIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5zdXJyb3VuZGluZ193YXRlcl9kYXJrLCAnc3Vycm91bmRpbmdfd2F0ZXJfZGFyaycpO1xuICBFWl9USUxFX0NPTE9SSVpFUihcbiAgICBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQsXG4gICAgJ3N1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0J1xuICApO1xufVxuIiwiaW1wb3J0IFNUQVJUIGZyb20gJy4vaGVscGVycy9zdGFydF90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX3N0YXJ0X3RpbGVzKCkge1xuICBjb25zdCBBTEwgPSBTVEFSVC5hbGw7XG4gIEFMTC5tYXAoKHRpbGVfaWQpID0+IHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN0YXJ0XyR7dGlsZV9pZH1gKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X2JhY2tncm91bmQnKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0X3RleHQnKTtcbiAgfSk7XG59XG4iLCJjb25zdCBJVEVSQVRPUiA9IChtaW4sIG1heCwgdGFyZ2V0X2FycmF5KSA9PiB7XG4gIGZvciAobGV0IGkgPSBtaW47IGkgPCBtYXggKyAxOyBpKyspIHtcbiAgICB0YXJnZXRfYXJyYXkucHVzaChpKTtcbiAgfVxufTtcblxuY29uc3QgRVpfVElMRV9DT0xPUklaRVIgPSAoaW5wdXRfYXJyYXksIGlucHV0X2NsYXNzKSA9PiB7XG4gIGlucHV0X2FycmF5Lm1hcCgodGlsZV9pZCkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aWxlX2lkKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKGlucHV0X2NsYXNzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBJVEVSQVRPUiwgRVpfVElMRV9DT0xPUklaRVIgfTtcbiIsImltcG9ydCB7IElURVJBVE9SIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY29uc3QgQ0FSUklFUiA9IHtcbiAgYmxhY2tfb3V0bGluZTogW1xuICAgIDE0NDYsIDE0NTAsIDE1MTYsIDE1MjAsIDE1ODYsIDE1OTAsIDE3MjMsIDE3MzMsIDE4MDMsIDE4NTksIDE4NzMsIDE4NzcsXG4gICAgMTkyOCwgMTk0MywgMTk0NiwgMTk0OCwgMTk1NSwgMTk1NiwgMTk4MiwgMTk4MywgMTk4NywgMTk4OCwgMTk5MiwgMTk5MyxcbiAgICAxOTk4LCAyMDEzLCAyMDI2LCAyMDUyLCAyMDU0LCAyMDU1LCAyMDU3LCAyMDU5LCAyMDYwLCAyMDYyLCAyMDY0LCAyMDY1LFxuICAgIDIwNjgsIDIwODMsIDIwODUsIDIwODksIDIwOTEsIDIwOTQsIDIwOTUsIDIxMjMsIDIxMjUsIDIxMjgsIDIxMzAsIDIxMzMsXG4gICAgMjEzNSwgMjEzOCwgMjE1MywgMjE1NSwgMjE1OSwgMjE2MSwgMjE2NSwgMjI2MCwgMjI2MSwgMjI2MiwgMjMwOSwgMjMzMixcbiAgICAyMzMzLCAyMzM0LCAyMzc5LCAyNDA0LCAyNDQ4LCAyNDc1LCAyNTE3LCAyNTQ2LCAyNTg2LCAyNjE3LCAyNjU2LCAyNjg3LFxuICAgIDI3MjYsXG4gIF0sXG4gIGh1bGw6IFtcbiAgICAxNTE5LCAxOTM5LCAxOTQwLCAyMDc5LCAyMDgwLCAyNjg4LCAyNjg5LCAyNjkyLCAyNjkzLCAyNjk2LCAyNjk3LCAyNzAwLFxuICAgIDI3MDEsIDI3MDQsIDI3MDUsIDI3MDgsIDI3MDksIDI3MTIsIDI3MTMsIDI3MTYsIDI3MTcsIDI3MjAsIDI3MjEsIDI3MjQsXG4gICAgMjcyNSxcbiAgXSxcbiAgZGFya19ncmF5OiBbXG4gICAgMTE2OCwgMTIzOCwgMTMwOCwgMTUxNywgMTUxOCwgMTkyOSwgMTkzMCwgMTk0MSwgMTk0MiwgMTk0NywgMjAyNSwgMjA1MyxcbiAgICAyMDU4LCAyMDYzLCAyMDY5LCAyMDcwLCAyMDgxLCAyMDgyLCAyMTI0LCAyMTI5LCAyMTM0LCAyMDkyLCAyMDkzLFxuICBdLFxuICBsaWdodF9ncmF5OiBbMTA5NywgMTA5OV0sXG4gIHNoaXBfbGlnaHQ6IFsxMDk4XSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfZGFyazogW1xuICAgIDI1NDUsIDI2MTYsIDI2ODYsIDI2OTAsIDI2OTEsIDI2OTQsIDI2OTUsIDI2OTgsIDI2OTksIDI3MDIsIDI3MDMsIDI3MDYsXG4gICAgMjcwNywgMjcxMCwgMjcxMSwgMjcxNCwgMjcxNSwgMjcxOCwgMjcxOSwgMjcyMiwgMjcyMywgMjU4NywgMjY1NywgMjcyNyxcbiAgICAyNDQ5LCAyNTE4LCAyNTE5LCAyNTg4LCAyNjU4LFxuICBdLFxuICBzdXJyb3VuZGluZ193YXRlcl9saWdodDogW1xuICAgIDI1ODksIDI2MTUsIDI2NTksIDI2ODQsIDI2ODUsIDI3MjgsIDI3MjksIDI3NTMsIDI3NTQsIDI3NTUsIDI3OTgsIDI3OTksXG4gIF0sXG59O1xuXG5jb25zdCBERVNUUk9ZRVIgPSB7XG4gIGJsYWNrX291dGxpbmU6IFtcbiAgICAxMTk0LCAxMTk4LCAxMjExLCAxMjY1LCAxMjY5LCAxMjgwLCAxNDc0LCAxNDkxLCAxNDkyLCAxNTQ1LCAxNTYxLCAxNjE2LFxuICAgIDE2MzEsIDE2ODcsIDE3MDEsXG4gIF0sXG4gIGh1bGw6IFsxNjg4LCAxNjkxLCAxNjkyLCAxNjk1LCAxNjk2LCAxNjk5LCAxNzAwXSxcbiAgZGFya19ncmF5OiBbNzg1LCA4NTUsIDkyNSwgOTk1LCAxMjY2LCAxMjcwLCAxMjczLCAxMjc0LCAxMjc2LCAxMjc5XSxcbiAgbGlnaHRfZ3JheTogWzcxNCwgNzE2LCAxMTMzLCAxMTM3LCAxMjcyLCAxMjc1LCAxMjc3XSxcbiAgc2hpcF9saWdodDogWzcxNV0sXG4gIHN1cnJvdW5kaW5nX3dhdGVyX2Rhcms6IFsxNjg5LCAxNjkwLCAxNjkzLCAxNjk0LCAxNjk3LCAxNjk4XSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQ6IFtcbiAgICAxNjMyLCAxNjg1LCAxNjg2LCAxNzAyLCAxNzAzLCAxNzU0LCAxNzU1LCAxNzczLCAxNzc0LFxuICBdLFxufTtcblxuKGZ1bmN0aW9uIGNhcnJpZXJfZXpfbG9hZGVyKCkge1xuICBjb25zdCBPVVRMSU5FID0gQ0FSUklFUi5ibGFja19vdXRsaW5lO1xuICBJVEVSQVRPUigxMzc2LCAxMzgwLCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMTY1MywgMTY2MywgT1VUTElORSk7XG4gIElURVJBVE9SKDE3OTAsIDE3OTMsIE9VVExJTkUpO1xuICBJVEVSQVRPUigyMDE1LCAyMDE5LCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMjAyMiwgMjAyNCwgT1VUTElORSk7XG4gIElURVJBVE9SKDIxOTAsIDIyMzksIE9VVExJTkUpO1xuXG4gIGNvbnN0IEhVTEwgPSBDQVJSSUVSLmh1bGw7XG4gIElURVJBVE9SKDE0NDcsIDE0NDksIEhVTEwpO1xuICBJVEVSQVRPUigxNTg3LCAxNTg5LCBIVUxMKTtcbiAgSVRFUkFUT1IoMTcyNCwgMTczMiwgSFVMTCk7XG4gIElURVJBVE9SKDE3OTQsIDE4MDIsIEhVTEwpO1xuICBJVEVSQVRPUigxODYwLCAxODcyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTkzMSwgMTkzNCwgSFVMTCk7XG4gIElURVJBVE9SKDE5OTksIDIwMTIsIEhVTEwpO1xuICBJVEVSQVRPUigyMDcxLCAyMDc0LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjEzOSwgMjE1MiwgSFVMTCk7XG4gIElURVJBVE9SKDIyNjMsIDIzMDgsIEhVTEwpO1xuICBJVEVSQVRPUigyMzM1LCAyMzc4LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjQwNSwgMjQ0NywgSFVMTCk7XG4gIElURVJBVE9SKDI0NzYsIDI1MTYsIEhVTEwpO1xuICBJVEVSQVRPUigyNTQ3LCAyNTg1LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjYxOCwgMjY1NSwgSFVMTCk7XG5cbiAgY29uc3QgREFSS19HUkFZID0gQ0FSUklFUi5kYXJrX2dyYXk7XG4gIElURVJBVE9SKDExMzQsIDExMzYsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDIwODYsIDIwODgsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDIxNTYsIDIxNTgsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDIxNjIsIDIxNjQsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDE5MzUsIDE5MzgsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDIwNzUsIDIwNzgsIERBUktfR1JBWSk7XG5cbiAgY29uc3QgTElHSFRfR1JBWSA9IENBUlJJRVIubGlnaHRfZ3JheTtcbiAgSVRFUkFUT1IoMjMzNSwgMjM3OCwgTElHSFRfR1JBWSk7XG5cbiAgY29uc3QgU1VSUk9VTkRJTkdfV0FURVJfREFSSyA9IENBUlJJRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyaztcbiAgSVRFUkFUT1IoMjc1NiwgMjc5NywgU1VSUk9VTkRJTkdfV0FURVJfREFSSyk7XG59KSgpO1xuXG4oZnVuY3Rpb24gZGVzdHJveWVyX2V6X2xvYWRlcigpIHtcbiAgY29uc3QgT1VUTElORSA9IERFU1RST1lFUi5ibGFja19vdXRsaW5lO1xuICBJVEVSQVRPUigxNDAzLCAxNDIyLCBPVVRMSU5FKTtcblxuICBjb25zdCBIVUxMID0gREVTVFJPWUVSLmh1bGw7XG4gIElURVJBVE9SKDE0NzUsIDE0OTAsIEhVTEwpO1xuICBJVEVSQVRPUigxNjE3LCAxNjMwLCBIVUxMKTtcblxuICBjb25zdCBMSUdIVF9HUkFZID0gREVTVFJPWUVSLmxpZ2h0X2dyYXk7XG4gIElURVJBVE9SKDE1NDYsIDE1NjAsIExJR0hUX0dSQVkpO1xuICBJVEVSQVRPUigxMDYzLCAxMDY3LCBMSUdIVF9HUkFZKTtcbiAgSVRFUkFUT1IoMTIwMiwgMTIwNywgTElHSFRfR1JBWSk7XG4gIElURVJBVE9SKDEzNDIsIDEzNDcsIExJR0hUX0dSQVkpO1xuXG4gIGNvbnN0IERBUktfR1JBWSA9IERFU1RST1lFUi5kYXJrX2dyYXk7XG4gIElURVJBVE9SKDEzMzQsIDEzMzYsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDEzMzgsIDEzNDAsIERBUktfR1JBWSk7XG4gIElURVJBVE9SKDEzNDksIDEzNTEsIERBUktfR1JBWSk7XG5cbiAgY29uc3QgU1VSUk9VTkRJTkdfV0FURVJfREFSSyA9IERFU1RST1lFUi5zdXJyb3VuZGluZ193YXRlcl9kYXJrO1xuICBJVEVSQVRPUigxNzU2LCAxNzcyLCBTVVJST1VORElOR19XQVRFUl9EQVJLKTtcbn0pKCk7XG5cbmV4cG9ydCB7IENBUlJJRVIsIERFU1RST1lFUiB9O1xuIiwiaW1wb3J0IHsgSVRFUkFUT1IgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jb25zdCBTVEFSVCA9IHtcbiAgczogWzE0NiwgMTQ3LCAyMTYsIDIxNywgNDM0LCA0MzUsIDUwNCwgNTA1XSxcbiAgdDE6IFtcbiAgICAxNjIsIDE2MywgMjMyLCAyMzMsIDMwMiwgMzAzLCAzNzIsIDM3MywgNDQyLCA0NDMsIDUxMiwgNTEzLCA1ODIsIDU4MywgNjUyLFxuICAgIDY1MyxcbiAgXSxcbiAgYTogW1xuICAgIDE3MCwgMTcxLCAxNzgsIDE3OSwgMjQwLCAyNDEsIDI0OCwgMjQ5LCA0NTAsIDQ1MSwgNDU4LCA0NTksIDUyMCwgNTIxLCA1MjgsXG4gICAgNTI5LCA1OTAsIDU5MSwgNTk4LCA1OTksIDY2MCwgNjYxLCA2NjgsIDY2OSxcbiAgXSxcbiAgcjogW1xuICAgIDE4MiwgMTgzLCAxOTAsIDE5MSwgMjUyLCAyNTMsIDI2MCwgMjYxLCA0NjIsIDQ2MywgNDcwLCA0NzEsIDUzMiwgNTMzLCA1NDAsXG4gICAgNTQxLCA2MDIsIDYwMywgNjEwLCA2MTEsIDY3MiwgNjczLCA2ODAsIDY4MSxcbiAgXSxcbiAgdDI6IFtcbiAgICAxOTgsIDE5OSwgMjY4LCAyNjksIDMzOCwgMzM5LCA0MDgsIDQwOSwgNDc4LCA0NzksIDU0OCwgNTQ5LCA2MTgsIDYxOSwgNjg4LFxuICAgIDY4OSxcbiAgXSxcbiAgYWxsOiBbXSxcbn07XG5cbihmdW5jdGlvbiBlel9sb2FkZXIoKSB7XG4gIGNvbnN0IFMgPSBTVEFSVC5zO1xuICBJVEVSQVRPUig2LCAxNSwgUyk7XG4gIElURVJBVE9SKDc2LCA4NSwgUyk7XG4gIElURVJBVE9SKDc2LCA4NSwgUyk7XG4gIElURVJBVE9SKDI4NiwgMjk1LCBTKTtcbiAgSVRFUkFUT1IoMzU2LCAzNjUsIFMpO1xuICBJVEVSQVRPUig1NjYsIDU3NSwgUyk7XG4gIElURVJBVE9SKDYzNiwgNjQ1LCBTKTtcblxuICBjb25zdCBUMSA9IFNUQVJULnQxO1xuICBJVEVSQVRPUigxOCwgMjcsIFQxKTtcbiAgSVRFUkFUT1IoODgsIDk3LCBUMSk7XG5cbiAgY29uc3QgQSA9IFNUQVJULmE7XG4gIElURVJBVE9SKDMwLCAzOSwgQSk7XG4gIElURVJBVE9SKDEwMCwgMTA5LCBBKTtcbiAgSVRFUkFUT1IoMzEwLCAzMTksIEEpO1xuICBJVEVSQVRPUigzODAsIDM4OSwgQSk7XG5cbiAgY29uc3QgUiA9IFNUQVJULnI7XG4gIElURVJBVE9SKDQyLCA0OSwgUik7XG4gIElURVJBVE9SKDExMiwgMTE5LCBSKTtcbiAgSVRFUkFUT1IoMzIyLCAzMjksIFIpO1xuICBJVEVSQVRPUigzOTIsIDM5OSwgUik7XG5cbiAgY29uc3QgVDIgPSBTVEFSVC50MjtcbiAgSVRFUkFUT1IoNTQsIDYzLCBUMik7XG4gIElURVJBVE9SKDEyNCwgMTMzLCBUMik7XG5cbiAgZm9yIChsZXQgbGV0dGVyIGluIFNUQVJUKSB7XG4gICAgaWYgKGxldHRlciA9PT0gJ2FsbCcpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBTVEFSVFtsZXR0ZXJdLm1hcCgobnVtYmVyKSA9PiB7XG4gICAgICBTVEFSVC5hbGwucHVzaChudW1iZXIpO1xuICAgIH0pO1xuICB9XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgU1RBUlQ7XG4iLCJpbXBvcnQgcmVuZGVyX3RpbGVzIGZyb20gJy4vcmVuZGVyX3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9zdGFydF90aWxlcyBmcm9tICcuL2NvbG9yX3N0YXJ0X3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9zaGlwX3RpbGVzIGZyb20gJy4vY29sb3Jfc2hpcF90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVwYWdlKCkge1xuICByZW5kZXJfdGlsZXMoKTtcbiAgY29sb3Jfc3RhcnRfdGlsZXMoKTtcbiAgY29sb3Jfc2hpcF90aWxlcygpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBIRUFESU5HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IFNUQVJUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIEhFQURJTkcuaWQgPSAnYnNfaGVhZGluZyc7XG4gIFNUQVJULmlkID0gJ3N0YXJ0X2J1dHRvbic7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjgwMDsgaSsrKSB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZGFya19ncmF5Jyk7XG4gICAgfSk7XG4gICAgVElMRS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrX2dyYXknKTtcbiAgICB9KTtcbiAgICBUSUxFLmlkID0gaTtcbiAgICBUSUxFLmNsYXNzTGlzdCA9ICd0aWxlIHdhdGVyJztcbiAgICBIRUFESU5HLmFwcGVuZChUSUxFKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDcwMDsgaSsrKSB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuaWQgPSBgc3RhcnRfJHtpfWA7XG4gICAgVElMRS5jbGFzc0xpc3QgPSAndGlsZSBzdGFydCBzdGFydF9iYWNrZ3JvdW5kJztcbiAgICBTVEFSVC5hcHBlbmQoVElMRSk7XG4gIH1cbiAgTUFJTi5hcHBlbmQoSEVBRElORyk7XG4gIE1BSU4uYXBwZW5kKFNUQVJUKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoTUFJTik7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tb3BhY2l0eS0wMDogMTtcXG4gIC0tb3BhY2l0eS0wNTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDogMC45NjtcXG4gIC0tb3BhY2l0eS0xNTogMC45NDtcXG4gIC0tb3BhY2l0eS0yMDogMC45MjtcXG4gIC0tb3BhY2l0eS0yNTogMC45O1xcbiAgLS1vcGFjaXR5LTMwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTM1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTQwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTQ1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTUwOiAwLjg7XFxuICAtLW9wYWNpdHktNTU6IDAuODI7XFxuICAtLW9wYWNpdHktNjA6IDAuODQ7XFxuICAtLW9wYWNpdHktNjU6IDAuODY7XFxuICAtLW9wYWNpdHktNzA6IDAuODg7XFxuICAtLW9wYWNpdHktNzU6IDAuOTtcXG4gIC0tb3BhY2l0eS04MDogMC45MjtcXG4gIC0tb3BhY2l0eS04NTogMC45NDtcXG4gIC0tb3BhY2l0eS05MDogMC45NjtcXG4gIC0tb3BhY2l0eS05NTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDA6IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMDApO1xcbiAgfVxcblxcbiAgNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTA1KTtcXG4gIH1cXG5cXG4gIDEwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTApO1xcbiAgfVxcblxcbiAgMTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xNSk7XFxuICB9XFxuXFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTIwKTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMjUpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zMCk7XFxuICB9XFxuXFxuICAzNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTM1KTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDApO1xcbiAgfVxcblxcbiAgNDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS00NSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTUwKTtcXG4gIH1cXG5cXG4gIDU1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNTUpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02MCk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTY1KTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzApO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS03NSk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTgwKTtcXG4gIH1cXG5cXG4gIDg1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktODUpO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05MCk7XFxuICB9XFxuXFxuICA5NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTk1KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwMCk7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9hbmltYXRvci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1vcGFjaXR5LTAwOiAxO1xcbiAgLS1vcGFjaXR5LTA1OiAwLjk4O1xcbiAgLS1vcGFjaXR5LTEwOiAwLjk2O1xcbiAgLS1vcGFjaXR5LTE1OiAwLjk0O1xcbiAgLS1vcGFjaXR5LTIwOiAwLjkyO1xcbiAgLS1vcGFjaXR5LTI1OiAwLjk7XFxuICAtLW9wYWNpdHktMzA6IDAuODg7XFxuICAtLW9wYWNpdHktMzU6IDAuODY7XFxuICAtLW9wYWNpdHktNDA6IDAuODQ7XFxuICAtLW9wYWNpdHktNDU6IDAuODI7XFxuICAtLW9wYWNpdHktNTA6IDAuODtcXG4gIC0tb3BhY2l0eS01NTogMC44MjtcXG4gIC0tb3BhY2l0eS02MDogMC44NDtcXG4gIC0tb3BhY2l0eS02NTogMC44NjtcXG4gIC0tb3BhY2l0eS03MDogMC44ODtcXG4gIC0tb3BhY2l0eS03NTogMC45O1xcbiAgLS1vcGFjaXR5LTgwOiAwLjkyO1xcbiAgLS1vcGFjaXR5LTg1OiAwLjk0O1xcbiAgLS1vcGFjaXR5LTkwOiAwLjk2O1xcbiAgLS1vcGFjaXR5LTk1OiAwLjk4O1xcbiAgLS1vcGFjaXR5LTEwMDogMTtcXG59XFxuXFxuQGtleWZyYW1lcyBvcGFjaXR5IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0wMCk7XFxuICB9XFxuXFxuICA1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMDUpO1xcbiAgfVxcblxcbiAgMTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xMCk7XFxuICB9XFxuXFxuICAxNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTE1KTtcXG4gIH1cXG5cXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMjApO1xcbiAgfVxcblxcbiAgMjUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0yNSk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTMwKTtcXG4gIH1cXG5cXG4gIDM1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzUpO1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS00MCk7XFxuICB9XFxuXFxuICA0NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTQ1KTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNTApO1xcbiAgfVxcblxcbiAgNTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS01NSk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTYwKTtcXG4gIH1cXG5cXG4gIDY1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNjUpO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS03MCk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTc1KTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktODApO1xcbiAgfVxcblxcbiAgODUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS04NSk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTkwKTtcXG4gIH1cXG5cXG4gIDk1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktOTUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTAwKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXFxuI2JzX2hlYWRpbmcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNDAsIDFmcik7XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuI3N0YXJ0X2J1dHRvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4udGlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTMyLCAyNTUsIDIzKTtcXG59XFxuXFxuLndhdGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDA2YTtcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2Rhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTM4YztcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyYjE7XFxufVxcblxcbi5zdGFydCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnN0YXJ0X2JhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zdGFydF90ZXh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzk3MWI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9ob21lcGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXFxuI2JzX2hlYWRpbmcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNDAsIDFmcik7XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuI3N0YXJ0X2J1dHRvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4udGlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTMyLCAyNTUsIDIzKTtcXG59XFxuXFxuLndhdGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDA2YTtcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2Rhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTM4YztcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyYjE7XFxufVxcblxcbi5zdGFydCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnN0YXJ0X2JhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zdGFydF90ZXh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzk3MWI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRvci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaGlwX2h1bGxfb3V0bGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNoaXBfaHVsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1NTU1O1xcbn1cXG5cXG4uc2hpcF9saWdodCB7XFxuICBiYWNrZ3JvdW5kOiAjZDUyYjJiO1xcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLmxpZ2h0X2dyYXkge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG59XFxuXFxuLmRhcmtfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3Mvc2hpcHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL2FuaW1hdG9yLmNzcyc7XFxuXFxuLnNoaXBfaHVsbF9vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2hpcF9odWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTU1NTU7XFxufVxcblxcbi5zaGlwX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQ6ICNkNTJiMmI7XFxuICBhbmltYXRpb246IG9wYWNpdHkgMC43NXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubGlnaHRfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjNmM2YzZjO1xcbn1cXG5cXG4uZGFya19ncmF5IHtcXG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9ob21lcGFnZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9zaGlwcy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgZ2FtZWxvb3AgZnJvbSAnLi9jb21wb25lbnRzL2dhbWUvR0FNRV9MT09QLmpzJztcbmltcG9ydCBob21lcGFnZSBmcm9tICcuL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaG9tZXBhZ2UuanMnO1xuXG5jb25zdCBHQU1FID0gZ2FtZWxvb3AoKTtcbmhvbWVwYWdlKCk7XG4iXSwibmFtZXMiOlsiR2FtZWJvYXJkIiwiUGxheWVyIiwiZ2FtZWxvb3AiLCJQTEFZRVIxIiwiUExBWUVSMiIsIlBMQVlFUjFfR0FNRUJPQVJEIiwiUExBWUVSMl9HQU1FQk9BUkQiLCJtYXAiLCJib2FyZCIsInBsYWNlX3NoaXAiLCJTaGlwIiwiY2FycmllciIsInBvc2l0aW9uIiwic2hpcCIsImJhdHRsZXNoaXAiLCJkZXN0cm95ZXIiLCJzdWIiLCJwYXRyb2xCb2F0IiwiaW5wdXRfY29vcmRpbmF0ZXMiLCJzaGlwcyIsImlucHV0X2Nvb3JkaW5hdGUiLCJtaXNzIiwiV0FTX0hJVCIsImluY2x1ZGVzIiwiaGl0cyIsIkhJVF9JTkRFWCIsImluZGV4T2YiLCJoaXQiLCJtaXNzZXMiLCJpc19hbGxfc3VuayIsImFsbF9zdW5rX2NhbGwiLCJpc19zdW5rIiwic29ydCIsInBsYXllciIsIkxFVFRFUlMiLCJsZXR0ZXIiLCJpIiwiRXJyb3IiLCJDT09SRElOQVRFIiwicmVtYWluaW5nX21vdmVzIiwibW92ZXMiLCJyZWNlaXZlX2F0dGFjayIsImNvb3JkaW5hdGUiLCJGSUxURVJFRF9NT1ZFUyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIlJFTUFJTklOR19NT1ZFU19DT1BZIiwiUkVNQUlOSU5HIiwiZmlsdGVyIiwicmVtYWluaW5nX21vdmUiLCJBcnJheSIsImZpbGwiLCJwb3NpdGlvbl9oaXQiLCJldmVyeSIsImhpdHNfYXJyYXkiLCJISVRTIiwiQ0FSUklFUiIsIkRFU1RST1lFUiIsIkVaX1RJTEVfQ09MT1JJWkVSIiwiY29sb3Jfc2hpcF90aWxlcyIsImJsYWNrX291dGxpbmUiLCJodWxsIiwiZGFya19ncmF5IiwibGlnaHRfZ3JheSIsInNoaXBfbGlnaHQiLCJzdXJyb3VuZGluZ193YXRlcl9kYXJrIiwic3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQiLCJTVEFSVCIsImNvbG9yX3N0YXJ0X3RpbGVzIiwiQUxMIiwiYWxsIiwidGlsZV9pZCIsIlRJTEUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiSVRFUkFUT1IiLCJtaW4iLCJtYXgiLCJ0YXJnZXRfYXJyYXkiLCJwdXNoIiwiaW5wdXRfYXJyYXkiLCJpbnB1dF9jbGFzcyIsImNhcnJpZXJfZXpfbG9hZGVyIiwiT1VUTElORSIsIkhVTEwiLCJEQVJLX0dSQVkiLCJMSUdIVF9HUkFZIiwiU1VSUk9VTkRJTkdfV0FURVJfREFSSyIsImRlc3Ryb3llcl9lel9sb2FkZXIiLCJzIiwidDEiLCJhIiwiciIsInQyIiwiZXpfbG9hZGVyIiwiUyIsIlQxIiwiQSIsIlIiLCJUMiIsIm51bWJlciIsInJlbmRlcl90aWxlcyIsImhvbWVwYWdlIiwiTUFJTiIsImNyZWF0ZUVsZW1lbnQiLCJIRUFESU5HIiwiaWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImFwcGVuZCIsImJvZHkiLCJHQU1FIl0sInNvdXJjZVJvb3QiOiIifQ==