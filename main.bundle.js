/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/components/ui/game_boards/helpers/color_hits_misses.js":
/*!********************************************************************!*\
  !*** ./src/components/ui/game_boards/helpers/color_hits_misses.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ color_hits_misses)
/* harmony export */ });
function color_hits_misses(player, hits, misses) {
  hits.map(function (coordinate) {
    var TILE = document.getElementById("".concat(player, "_").concat(coordinate));
    TILE.classList.add("".concat(player, "_hit"));
  });
  misses.map(function (coordinate) {
    var TILE = document.getElementById("".concat(player, "_").concat(coordinate));
    TILE.classList.add("".concat(player, "_miss"));
  });
}

/***/ }),

/***/ "./src/components/ui/game_boards/helpers/color_player_ships.js":
/*!*********************************************************************!*\
  !*** ./src/components/ui/game_boards/helpers/color_player_ships.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ color_player_ships)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../index.js */ "./src/index.js");

function color_player_ships() {
  var SHIPS = _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.RETURN_SHIPS(1);

  for (var ship in SHIPS) {
    var COORDINATES = SHIPS[ship].position;
    COORDINATES.map(function (coordinate) {
      var TILE = document.getElementById("player_".concat(coordinate));
      TILE.classList.add('placed_ship_tile');
    });
  }
}

/***/ }),

/***/ "./src/components/ui/game_boards/helpers/event_listeners.js":
/*!******************************************************************!*\
  !*** ./src/components/ui/game_boards/helpers/event_listeners.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ event_listeners)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../index.js */ "./src/index.js");
/* harmony import */ var _color_hits_misses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color_hits_misses.js */ "./src/components/ui/game_boards/helpers/color_hits_misses.js");


function event_listeners() {
  var AI_TILES = Array.from(document.getElementsByClassName('ai_board'));

  var AI_TILE_CLICK_HANDLER = function AI_TILE_CLICK_HANDLER(event) {
    var ID = event.target.id.slice(3);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.ATTACK(ID);
    var PLAYER1_HITS = _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.RETURN_HITS(1);
    var PLAYER1_MISSES = _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.RETURN_MISSES(1);
    var PLAYER2_HITS = _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.RETURN_HITS(2);
    var PLAYER2_MISSES = _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.RETURN_MISSES(2);
    (0,_color_hits_misses_js__WEBPACK_IMPORTED_MODULE_1__["default"])('player', PLAYER1_HITS, PLAYER1_MISSES);
    (0,_color_hits_misses_js__WEBPACK_IMPORTED_MODULE_1__["default"])('ai', PLAYER2_HITS, PLAYER2_MISSES); // todo render the colors for hit spaces and missed
  };

  AI_TILES.map(function (tile) {
    tile.addEventListener('click', AI_TILE_CLICK_HANDLER);
  });
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
    PLAYER_BOARD_TILE.classList.add('player_board');
    PLAYER_BOARD_TILE.id = "player_".concat(_helpers_coordinates_js__WEBPACK_IMPORTED_MODULE_0__["default"][i]);
    AI_BOARD_TILE.classList.add('game_board_tile');
    AI_BOARD_TILE.classList.add('ai_board');
    AI_BOARD_TILE.id = "ai_".concat(_helpers_coordinates_js__WEBPACK_IMPORTED_MODULE_0__["default"][i]);
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
/* harmony import */ var _helpers_color_player_ships_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/color_player_ships.js */ "./src/components/ui/game_boards/helpers/color_player_ships.js");
/* harmony import */ var _helpers_event_listeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/event_listeners.js */ "./src/components/ui/game_boards/helpers/event_listeners.js");



function render_game_boards() {
  (0,_helpers_render_tiles_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_helpers_color_player_ships_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_helpers_event_listeners_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

  var WATER_ANIMATION = function WATER_ANIMATION() {
    var WATER_TILES = Array.from(document.getElementsByClassName('water'));
    var CLASSES = ['blue1', 'blue2', 'blue3', 'blue4', 'blue5', 'blue6', 'blue7', 'blue8', 'blue9', 'blue10', 'green1'];
    WATER_TILES.map(function (tile) {
      var RANDOM_NUMBER = Math.floor(Math.random() * 11);
      tile.classList = "homepeage_tile water ".concat(CLASSES[RANDOM_NUMBER]);
    });
  };

  var SUB_ANIMATION = setInterval(PERISCOPE_SPINNER, 1000);
  var BOAT1 = setInterval(RADAR_SPINNER1, 1000);
  var BOAT2 = setInterval(RADAR_SPINNER2, 1500);
  var WATER = setInterval(WATER_ANIMATION, 1000);
  return {
    SUB_ANIMATION: SUB_ANIMATION,
    BOAT1: BOAT1,
    BOAT2: BOAT2,
    WATER: WATER
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

/***/ "./src/game/game_loop.js":
/*!*******************************!*\
  !*** ./src/game/game_loop.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameloop)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/game/gameboard.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/game/player.js");


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
  };

  var PLACE_SHIP = function PLACE_SHIP(board, ship, positions) {
    if (board === 1) {
      player1_gameboard.place_ship(ship, positions);
    }

    if (board === 2) {
      player2_gameboard.place_ship(ship, positions);
    }
  };

  var ATTACK = function ATTACK(coordinate) {
    PLAYER1.human_attack(player2_gameboard, coordinate);
    PLAYER2.ai_attack(player1_gameboard);
  };

  var RETURN_HITS = function RETURN_HITS(board) {
    if (board === 1) {
      return player1_gameboard.hits;
    }

    if (board === 2) {
      return player2_gameboard.hits;
    }
  };

  var RETURN_MISSES = function RETURN_MISSES(board) {
    if (board === 1) {
      return player1_gameboard.misses;
    }

    if (board === 2) {
      return player2_gameboard.misses;
    }
  };

  return {
    RESET: RESET,
    RETURN_SHIPS: RETURN_SHIPS,
    PLACE_SHIP: PLACE_SHIP,
    ATTACK: ATTACK,
    RETURN_HITS: RETURN_HITS,
    RETURN_MISSES: RETURN_MISSES
  };
}

/***/ }),

/***/ "./src/game/gameboard.js":
/*!*******************************!*\
  !*** ./src/game/gameboard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/game/ship.js");
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

/***/ "./src/game/player.js":
/*!****************************!*\
  !*** ./src/game/player.js ***!
  \****************************/
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

/***/ "./src/game/ship.js":
/*!**************************!*\
  !*** ./src/game/ship.js ***!
  \**************************/
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
/* harmony import */ var _game_game_loop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/game_loop.js */ "./src/game/game_loop.js");
/* harmony import */ var _components_ui_homepage_homepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ui/homepage/homepage.js */ "./src/components/ui/homepage/homepage.js");



var GAME = (0,_game_game_loop_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  min-width: 70em;\n}\n\n#game_boards {\n  position: absolute;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  height: 50em;\n  min-width: 70em;\n}\n\n.game_board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 30em;\n  width: 30em;\n}\n\n.game_board_tile {\n  border: 1px solid white;\n}\n\n.player_board {\n  border: 1px solid #6e6112;\n}\n\n.ai_board {\n  border: 1px solid #ac971b;\n  cursor: none;\n}\n\n.ai_board:hover {\n  background: #84ff17;\n}\n\n#player_board {\n  position: absolute;\n  top: 10em;\n  left: 2em;\n}\n\n#ai_board {\n  position: absolute;\n  top: 10em;\n  right: 2em;\n}\n\n.placed_ship_tile {\n  background: #8b7b159b;\n}\n\n.player_hit {\n  background: #863d3d;\n}\n\n.ai_hit {\n  background: rgb(194, 46, 46);\n}\n\n.player_miss {\n  background: #3d3b80;\n}\n\n.ai_miss {\n  background: rgb(66, 66, 218);\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/game_boards/css/index.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;AAC9B","sourcesContent":["body {\n  min-width: 70em;\n}\n\n#game_boards {\n  position: absolute;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  height: 50em;\n  min-width: 70em;\n}\n\n.game_board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 30em;\n  width: 30em;\n}\n\n.game_board_tile {\n  border: 1px solid white;\n}\n\n.player_board {\n  border: 1px solid #6e6112;\n}\n\n.ai_board {\n  border: 1px solid #ac971b;\n  cursor: none;\n}\n\n.ai_board:hover {\n  background: #84ff17;\n}\n\n#player_board {\n  position: absolute;\n  top: 10em;\n  left: 2em;\n}\n\n#ai_board {\n  position: absolute;\n  top: 10em;\n  right: 2em;\n}\n\n.placed_ship_tile {\n  background: #8b7b159b;\n}\n\n.player_hit {\n  background: #863d3d;\n}\n\n.ai_hit {\n  background: rgb(194, 46, 46);\n}\n\n.player_miss {\n  background: #3d3b80;\n}\n\n.ai_miss {\n  background: rgb(66, 66, 218);\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  cursor: crosshair;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  background-color: black;\n}\n\nmain {\n  user-select: none;\n}\n\n.title {\n  background: black;\n}\n\n#bs_heading {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(40, 1fr);\n  height: 40em;\n  width: 70em;\n}\n\n#start_button {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 10em;\n  width: 70em;\n}\n\n.water {\n  border: none;\n  background-color: #010157;\n}\n\n.start {\n  border: 1px solid black;\n}\n\n.start_background {\n  background-color: black;\n}\n\n.start_background_hovered {\n  background-color: #ac971b;\n}\n\n.start_text {\n  background-color: #ac971b;\n}\n.start_text_hovered {\n  background-color: black;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/homepage/css/global.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,uBAAuB;AACzB","sourcesContent":[":root {\n  cursor: crosshair;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  background-color: black;\n}\n\nmain {\n  user-select: none;\n}\n\n.title {\n  background: black;\n}\n\n#bs_heading {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(40, 1fr);\n  height: 40em;\n  width: 70em;\n}\n\n#start_button {\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 10em;\n  width: 70em;\n}\n\n.water {\n  border: none;\n  background-color: #010157;\n}\n\n.start {\n  border: 1px solid black;\n}\n\n.start_background {\n  background-color: black;\n}\n\n.start_background_hovered {\n  background-color: #ac971b;\n}\n\n.start_text {\n  background-color: #ac971b;\n}\n.start_text_hovered {\n  background-color: black;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  min-width: 70em;\n}\n\n#place_ships_main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  min-width: 70em;\n  height: 50em;\n}\n\n#place_ships_container {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  position: absolute;\n  left: 15em;\n  bottom: 4em;\n  height: 40em;\n  width: 40em;\n  border: 1px solid #ac971b;\n  cursor: none;\n}\n\n#instructions_container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  position: absolute;\n  top: 1em;\n  left: 29em;\n  width: 12em;\n  height: 3em;\n  background: #aa9f61;\n  border-radius: 0.125em;\n}\n\n#bkd_space {\n  display: flex;\n  justify-content: center;\n  width: 3.5em;\n  font-size: 1.8em;\n  box-shadow: 1px 1px 2px 2px #000000;\n}\n\n#instructions {\n  font-size: 1em;\n  font-family: 'Space Mono', monospace;\n}\n\n.place_ship_tile {\n  border: 1px solid #ac971b;\n}\n\n.placed_tile {\n  border: 1px solid #e7ca29;\n  background: #ac971b;\n}\n\n.place_ship_hovered {\n  background: #84ff17;\n}\n\n.invalid_ship_placement {\n  background: #f00;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/place_ships/css/index.css"],"names":[],"mappings":"AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;EACE,cAAc;EACd,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');\n\nbody {\n  min-width: 70em;\n}\n\n#place_ships_main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  min-width: 70em;\n  height: 50em;\n}\n\n#place_ships_container {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  position: absolute;\n  left: 15em;\n  bottom: 4em;\n  height: 40em;\n  width: 40em;\n  border: 1px solid #ac971b;\n  cursor: none;\n}\n\n#instructions_container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  position: absolute;\n  top: 1em;\n  left: 29em;\n  width: 12em;\n  height: 3em;\n  background: #aa9f61;\n  border-radius: 0.125em;\n}\n\n#bkd_space {\n  display: flex;\n  justify-content: center;\n  width: 3.5em;\n  font-size: 1.8em;\n  box-shadow: 1px 1px 2px 2px #000000;\n}\n\n#instructions {\n  font-size: 1em;\n  font-family: 'Space Mono', monospace;\n}\n\n.place_ship_tile {\n  border: 1px solid #ac971b;\n}\n\n.placed_tile {\n  border: 1px solid #e7ca29;\n  background: #ac971b;\n}\n\n.place_ship_hovered {\n  background: #84ff17;\n}\n\n.invalid_ship_placement {\n  background: #f00;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUNNLElBQXJCO0FBQ0FyQixFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFrRSxJQUFiLENBQVI7QUFDQWxFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYWtFLElBQWIsQ0FBUjtBQUNBbEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFha0UsSUFBYixDQUFSO0FBQ0FsRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFrRSxJQUFiLENBQVI7QUFDQWxFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYWtFLElBQWIsQ0FBUjtBQUNBbEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFha0UsSUFBYixDQUFSO0FBQ0FsRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFrRSxJQUFiLENBQVI7QUFDQWxFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYWtFLElBQWIsQ0FBUjtBQUNBbEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFha0UsSUFBYixDQUFSO0FBQ0FsRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFrRSxJQUFiLENBQVI7QUFDQWxFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYWtFLElBQWIsQ0FBUjtBQUNBbEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFha0UsSUFBYixDQUFSO0FBQ0FsRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFrRSxJQUFiLENBQVI7QUFDQWxFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYWtFLElBQWIsQ0FBUjtBQUNBbEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFha0UsSUFBYixDQUFSO0FBRUEsTUFBTUMsU0FBUyxHQUFHcEQsT0FBTyxDQUFDTyxTQUExQjtBQUNB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QTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvaGVscGVycy9jb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvZ2FtZV9ib2FyZHMvaGVscGVycy9jb2xvcl9oaXRzX21pc3Nlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvZ2FtZV9ib2FyZHMvaGVscGVycy9jb2xvcl9wbGF5ZXJfc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL2hlbHBlcnMvZXZlbnRfbGlzdGVuZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9oZWxwZXJzL3JlbmRlcl9iYWNrZ3JvdW5kX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9oZWxwZXJzL3JlbmRlcl9nYW1lYm9hcmRfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9yZW5kZXJfZ2FtZV9ib2FyZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9iYXR0bGVzaGlwX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2NvbG9yX2JhdHRsZXNoaXBfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvY29sb3Jfc2hpcF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9jb2xvcl9zdGFydF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9jb2xvcl93YXRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2xpc3RlbmVyc19oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9yZW5kZXJfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvc2hpcF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9zdGFydF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2hlbHBlcnMvbG9naWNfbGlzdGVuZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9oZWxwZXJzL3BsYWNlX2FpX3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9oZWxwZXJzL3JlbmRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvcGxhY2Vfc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL2dhbWVfbG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvZ2FtZV9ib2FyZHMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2FuaW1hdG9yLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9zaGlwcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy93YXRlci5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09PUkRJTkFURVMgPSBbXTtcbmNvbnN0IExFVFRFUlMgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onXTtcbmNvbnN0IE5VTUJFUlMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG5MRVRURVJTLm1hcCgobGV0dGVyKSA9PiB7XG4gIE5VTUJFUlMubWFwKChudW1iZXIpID0+IHtcbiAgICBDT09SRElOQVRFUy5wdXNoKGAke2xldHRlcn0ke251bWJlcn1gKTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ09PUkRJTkFURVM7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcl9oaXRzX21pc3NlcyhwbGF5ZXIsIGhpdHMsIG1pc3Nlcykge1xuICBoaXRzLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbGF5ZXJ9XyR7Y29vcmRpbmF0ZX1gKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoYCR7cGxheWVyfV9oaXRgKTtcbiAgfSk7XG5cbiAgbWlzc2VzLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbGF5ZXJ9XyR7Y29vcmRpbmF0ZX1gKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoYCR7cGxheWVyfV9taXNzYCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgR0FNRSB9IGZyb20gJy4uLy4uLy4uLy4uL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3JfcGxheWVyX3NoaXBzKCkge1xuICBjb25zdCBTSElQUyA9IEdBTUUuUkVUVVJOX1NISVBTKDEpO1xuICBmb3IgKGxldCBzaGlwIGluIFNISVBTKSB7XG4gICAgY29uc3QgQ09PUkRJTkFURVMgPSBTSElQU1tzaGlwXS5wb3NpdGlvbjtcbiAgICBDT09SRElOQVRFUy5tYXAoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxheWVyXyR7Y29vcmRpbmF0ZX1gKTtcbiAgICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgncGxhY2VkX3NoaXBfdGlsZScpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBHQU1FIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5kZXguanMnO1xuaW1wb3J0IGNvbG9yX2hpdHNfbWlzc2VzIGZyb20gJy4vY29sb3JfaGl0c19taXNzZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBldmVudF9saXN0ZW5lcnMoKSB7XG4gIGNvbnN0IEFJX1RJTEVTID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhaV9ib2FyZCcpKTtcbiAgY29uc3QgQUlfVElMRV9DTElDS19IQU5ETEVSID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgSUQgPSBldmVudC50YXJnZXQuaWQuc2xpY2UoMyk7XG4gICAgR0FNRS5BVFRBQ0soSUQpO1xuXG4gICAgY29uc3QgUExBWUVSMV9ISVRTID0gR0FNRS5SRVRVUk5fSElUUygxKTtcbiAgICBjb25zdCBQTEFZRVIxX01JU1NFUyA9IEdBTUUuUkVUVVJOX01JU1NFUygxKTtcbiAgICBjb25zdCBQTEFZRVIyX0hJVFMgPSBHQU1FLlJFVFVSTl9ISVRTKDIpO1xuICAgIGNvbnN0IFBMQVlFUjJfTUlTU0VTID0gR0FNRS5SRVRVUk5fTUlTU0VTKDIpO1xuXG4gICAgY29sb3JfaGl0c19taXNzZXMoJ3BsYXllcicsIFBMQVlFUjFfSElUUywgUExBWUVSMV9NSVNTRVMpO1xuICAgIGNvbG9yX2hpdHNfbWlzc2VzKCdhaScsIFBMQVlFUjJfSElUUywgUExBWUVSMl9NSVNTRVMpO1xuICAgIC8vIHRvZG8gcmVuZGVyIHRoZSBjb2xvcnMgZm9yIGhpdCBzcGFjZXMgYW5kIG1pc3NlZFxuICB9O1xuXG4gIEFJX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBBSV9USUxFX0NMSUNLX0hBTkRMRVIpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl9iYWNrZ3JvdW5kX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBDTEFTU0VTID0gW1xuICAgICdibHVlMScsXG4gICAgJ2JsdWUyJyxcbiAgICAnYmx1ZTMnLFxuICAgICdibHVlNCcsXG4gICAgJ2JsdWU1JyxcbiAgICAnYmx1ZTYnLFxuICAgICdibHVlNycsXG4gICAgJ2JsdWU4JyxcbiAgICAnYmx1ZTknLFxuICAgICdibHVlMTAnLFxuICAgICdncmVlbjEnLFxuICBdO1xuICBNQUlOLmlkID0gJ2dhbWVfYm9hcmRzJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM1MDA7IGkrKykge1xuICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkc19iYWNrZ3JvdW5kJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKENMQVNTRVNbUkFORE9NX05VTUJFUl0pO1xuICAgIE1BSU4uYXBwZW5kKFRJTEUpO1xuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoTUFJTik7XG59XG4iLCJpbXBvcnQgQ09PUkRJTkFURVMgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9jb29yZGluYXRlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl9nYW1lYm9hcmRfdGlsZXMoKSB7XG4gIGNvbnN0IE1BSU4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZV9ib2FyZHMnKTtcbiAgY29uc3QgUExBWUVSX0JPQVJEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IEFJX0JPQVJEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgUExBWUVSX0JPQVJELmNsYXNzTGlzdC5hZGQoJ2dhbWVfYm9hcmQnKTtcbiAgQUlfQk9BUkQuY2xhc3NMaXN0LmFkZCgnZ2FtZV9ib2FyZCcpO1xuICBQTEFZRVJfQk9BUkQuaWQgPSAncGxheWVyX2JvYXJkJztcbiAgQUlfQk9BUkQuaWQgPSAnYWlfYm9hcmQnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgY29uc3QgUExBWUVSX0JPQVJEX1RJTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBBSV9CT0FSRF9USUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBQTEFZRVJfQk9BUkRfVElMRS5jbGFzc0xpc3QuYWRkKCdnYW1lX2JvYXJkX3RpbGUnKTtcbiAgICBQTEFZRVJfQk9BUkRfVElMRS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJfYm9hcmQnKTtcbiAgICBQTEFZRVJfQk9BUkRfVElMRS5pZCA9IGBwbGF5ZXJfJHtDT09SRElOQVRFU1tpXX1gO1xuICAgIEFJX0JPQVJEX1RJTEUuY2xhc3NMaXN0LmFkZCgnZ2FtZV9ib2FyZF90aWxlJyk7XG4gICAgQUlfQk9BUkRfVElMRS5jbGFzc0xpc3QuYWRkKCdhaV9ib2FyZCcpO1xuICAgIEFJX0JPQVJEX1RJTEUuaWQgPSBgYWlfJHtDT09SRElOQVRFU1tpXX1gO1xuXG4gICAgUExBWUVSX0JPQVJELmFwcGVuZChQTEFZRVJfQk9BUkRfVElMRSk7XG4gICAgQUlfQk9BUkQuYXBwZW5kKEFJX0JPQVJEX1RJTEUpO1xuICB9XG5cbiAgTUFJTi5hcHBlbmQoUExBWUVSX0JPQVJEKTtcbiAgTUFJTi5hcHBlbmQoQUlfQk9BUkQpO1xufVxuIiwiaW1wb3J0IHJlbmRlcl9iYWNrZ3JvdW5kX3RpbGVzIGZyb20gJy4vcmVuZGVyX2JhY2tncm91bmRfdGlsZXMuanMnO1xuaW1wb3J0IHJlbmRlcl9nYW1lYm9hcmRfdGlsZXMgZnJvbSAnLi9yZW5kZXJfZ2FtZWJvYXJkX3RpbGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyX3RpbGVzKCkge1xuICByZW5kZXJfYmFja2dyb3VuZF90aWxlcygpO1xuICByZW5kZXJfZ2FtZWJvYXJkX3RpbGVzKCk7XG59XG4iLCJpbXBvcnQgcmVuZGVyX3RpbGVzIGZyb20gJy4vaGVscGVycy9yZW5kZXJfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX3BsYXllcl9zaGlwcyBmcm9tICcuL2hlbHBlcnMvY29sb3JfcGxheWVyX3NoaXBzLmpzJztcbmltcG9ydCBldmVudF9saXN0ZW5lcnMgZnJvbSAnLi9oZWxwZXJzL2V2ZW50X2xpc3RlbmVycy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl9nYW1lX2JvYXJkcygpIHtcbiAgcmVuZGVyX3RpbGVzKCk7XG4gIGNvbG9yX3BsYXllcl9zaGlwcygpO1xuICBldmVudF9saXN0ZW5lcnMoKTtcbn1cbiIsImNvbnN0IEFOSU1BVElPTlMgPSAoKCkgPT4ge1xuICBjb25zdCBQRVJJU0NPUEVfU1BJTk5FUiA9ICgpID0+IHtcbiAgICBjb25zdCBMRUZUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3NTkpO1xuICAgIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3NjEpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb2ZmJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb24nKTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgaWYgKExFRlRfVElMRS5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ29uJykpIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3BlcmlzY29wZV9vbicpO1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3BlcmlzY29wZV9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdwZXJpc2NvcGVfb2ZmJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29mZicpO1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3BlcmlzY29wZV9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncGVyaXNjb3BlX29uJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFJBREFSX1NQSU5ORVIxID0gKCkgPT4ge1xuICAgIGNvbnN0IExFRlRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDcxNCk7XG4gICAgY29uc3QgUklHSFRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDcxNik7XG4gICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIGlmIChMRUZUX1RJTEUuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdvbicpKSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vbicpO1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vZmYnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgUkFEQVJfU1BJTk5FUjIgPSAoKSA9PiB7XG4gICAgY29uc3QgTEVGVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTA5Nyk7XG4gICAgY29uc3QgUklHSFRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDEwOTkpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBpZiAoTEVGVF9USUxFLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnb24nKSkge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb2ZmJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFdBVEVSX0FOSU1BVElPTiA9ICgpID0+IHtcbiAgICBjb25zdCBXQVRFUl9USUxFUyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2F0ZXInKSk7XG4gICAgY29uc3QgQ0xBU1NFUyA9IFtcbiAgICAgICdibHVlMScsXG4gICAgICAnYmx1ZTInLFxuICAgICAgJ2JsdWUzJyxcbiAgICAgICdibHVlNCcsXG4gICAgICAnYmx1ZTUnLFxuICAgICAgJ2JsdWU2JyxcbiAgICAgICdibHVlNycsXG4gICAgICAnYmx1ZTgnLFxuICAgICAgJ2JsdWU5JyxcbiAgICAgICdibHVlMTAnLFxuICAgICAgJ2dyZWVuMScsXG4gICAgXTtcbiAgICBXQVRFUl9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgICB0aWxlLmNsYXNzTGlzdCA9IGBob21lcGVhZ2VfdGlsZSB3YXRlciAke0NMQVNTRVNbUkFORE9NX05VTUJFUl19YDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBTVUJfQU5JTUFUSU9OID0gc2V0SW50ZXJ2YWwoUEVSSVNDT1BFX1NQSU5ORVIsIDEwMDApO1xuICBjb25zdCBCT0FUMSA9IHNldEludGVydmFsKFJBREFSX1NQSU5ORVIxLCAxMDAwKTtcbiAgY29uc3QgQk9BVDIgPSBzZXRJbnRlcnZhbChSQURBUl9TUElOTkVSMiwgMTUwMCk7XG4gIGNvbnN0IFdBVEVSID0gc2V0SW50ZXJ2YWwoV0FURVJfQU5JTUFUSU9OLCAxMDAwKTtcblxuICByZXR1cm4geyBTVUJfQU5JTUFUSU9OLCBCT0FUMSwgQk9BVDIsIFdBVEVSIH07XG59KSgpO1xuXG5leHBvcnQgeyBBTklNQVRJT05TIH07XG4iLCJpbXBvcnQgeyBJVEVSQVRPUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmNvbnN0IEJBVFRMRVNISVAgPSB7XG4gIEI6IFsxNTAsIDE1NCwgMjIwLCAyMjQsIDM2MCwgMzY0LCA0MzAsIDQzNiwgNDM0XSxcbiAgQTogWzE1NiwgMTU5LCAyMjYsIDIyOSwgMzY2LCAzNjksIDQzNiwgNDM5LCA1MDYsIDUwOV0sXG4gIFQxOiBbMTYyLCAxNjMsIDIzMiwgMjMzLCAzMDIsIDMwMywgMzcyLCAzNzMsIDQ0MiwgNDQzLCA1MTIsIDUxM10sXG4gIFQyOiBbMTY3LCAxNjgsIDIzNywgMjM4LCAzMDcsIDMwOCwgMzc3LCAzNzgsIDQ0NywgNDQ4LCA1MTcsIDUxOF0sXG4gIEw6IFsxMDEsIDE3MSwgMjQxLCAzMTEsIDM4MSwgNDUxXSxcbiAgRTogWzE3NiwgMjQ2LCAzODYsIDQ1Nl0sXG4gIFM6IFsxODEsIDI1MSwgMzk0LCA0NjRdLFxuICBIOiBbMTE2LCAxMTksIDE4NiwgMTg5LCAyNTYsIDI1OSwgMzk2LCAzOTksIDQ2NiwgNDY5LCA1MzYsIDUzOV0sXG4gIEk6IFsxOTIsIDE5MywgMjYyLCAyNjMsIDMzMiwgMzMzLCA0MDIsIDQwMywgNDcyLCA0NzNdLFxuICBQOiBbMTk2LCAxOTksIDI2NiwgMjY5LCA0MDYsIDQ3NiwgNTQ2XSxcbn07XG5cbihmdW5jdGlvbiBlel9sb2FkZXIoKSB7XG4gIGNvbnN0IEIgPSBCQVRUTEVTSElQLkI7XG4gIElURVJBVE9SKDgwLCA4NCwgQik7XG4gIElURVJBVE9SKDI5MCwgMjk0LCBCKTtcbiAgSVRFUkFUT1IoNTAwLCA1MDQsIEIpO1xuXG4gIGNvbnN0IEEgPSBCQVRUTEVTSElQLkE7XG4gIElURVJBVE9SKDg2LCA4OSwgQSk7XG4gIElURVJBVE9SKDI5NiwgMjk5LCBBKTtcblxuICBjb25zdCBUMSA9IEJBVFRMRVNISVAuVDE7XG4gIElURVJBVE9SKDkxLCA5NCwgVDEpO1xuXG4gIGNvbnN0IFQyID0gQkFUVExFU0hJUC5UMjtcbiAgSVRFUkFUT1IoOTYsIDk5LCBUMik7XG5cbiAgY29uc3QgTCA9IEJBVFRMRVNISVAuTDtcbiAgSVRFUkFUT1IoNTIxLCA1MjQsIEwpO1xuXG4gIGNvbnN0IEUgPSBCQVRUTEVTSElQLkU7XG4gIElURVJBVE9SKDEwNiwgMTA5LCBFKTtcbiAgSVRFUkFUT1IoMzE2LCAzMTgsIEUpO1xuICBJVEVSQVRPUig1MjYsIDUyOSwgRSk7XG5cbiAgY29uc3QgUyA9IEJBVFRMRVNISVAuUztcbiAgSVRFUkFUT1IoMTExLCAxMTQsIFMpO1xuICBJVEVSQVRPUigzMjEsIDMyNCwgUyk7XG4gIElURVJBVE9SKDUzMSwgNTM0LCBTKTtcblxuICBjb25zdCBIID0gQkFUVExFU0hJUC5IO1xuICBJVEVSQVRPUigzMjYsIDMyOSwgSCk7XG5cbiAgY29uc3QgSSA9IEJBVFRMRVNISVAuSTtcbiAgSVRFUkFUT1IoMTIxLCAxMjQsIEkpO1xuICBJVEVSQVRPUig1NDEsIDU0NCwgSSk7XG5cbiAgY29uc3QgUCA9IEJBVFRMRVNISVAuUDtcbiAgSVRFUkFUT1IoMTI2LCAxMjksIFApO1xuICBJVEVSQVRPUigzMzYsIDMzOSwgUCk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBCQVRUTEVTSElQO1xuIiwiaW1wb3J0IHsgRVpfVElMRV9DT0xPUklaRVIgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IEJBVFRMRVNISVAgZnJvbSAnLi9iYXR0bGVzaGlwX3RpbGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3JfYmF0dGxlc2hpcF90aWxlcygpIHtcbiAgZm9yIChsZXQgbGV0dGVyIGluIEJBVFRMRVNISVApIHtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihCQVRUTEVTSElQW2xldHRlcl0sICd0aXRsZScpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDQVJSSUVSLCBERVNUUk9ZRVIsIFNVQk1BUklORSB9IGZyb20gJy4vc2hpcF90aWxlcy5qcyc7XG5pbXBvcnQgeyBFWl9USUxFX0NPTE9SSVpFUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX3NoaXBfdGlsZXMoKSB7XG4gIChmdW5jdGlvbiBjYXJyaWVyKCkge1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuYmxhY2tfb3V0bGluZSwgJ3NoaXBfaHVsbF9vdXRsaW5lJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5odWxsLCAnc2hpcF9odWxsJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5kYXJrX2dyYXksICdkYXJrX2dyYXknKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLmxpZ2h0X2dyYXksICdsaWdodF9ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5zaGlwX2xpZ2h0LCAnc2hpcF9saWdodCcpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyaywgJ3N1cnJvdW5kaW5nX3dhdGVyX2RhcmsnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihcbiAgICAgIENBUlJJRVIuc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQsXG4gICAgICAnc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQnXG4gICAgKTtcblxuICAgIGNvbnN0IEMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNzk1KTtcbiAgICBjb25zdCBWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTc5Nik7XG4gICAgY29uc3QgTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE3OTcpO1xuICAgIGNvbnN0IFNJWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE3OTkpO1xuICAgIGNvbnN0IE5JTkUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxODAwKTtcbiAgICBjb25zdCBVID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM0OSk7XG4gICAgY29uc3QgUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTApO1xuICAgIGNvbnN0IE4yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM1Mik7XG4gICAgY29uc3QgQSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTMpO1xuICAgIGNvbnN0IFYyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM1NCk7XG4gICAgY29uc3QgWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTUpO1xuICAgIGNvbnN0IEFMTCA9IFtDLCBWLCBOLCBTSVgsIE5JTkUsIFUsIFMsIE4yLCBBLCBWMiwgWV07XG4gICAgQUxMLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwX3RleHQnKTtcbiAgICB9KTtcbiAgICBDLmlubmVyVGV4dCA9ICdDJztcbiAgICBWLmlubmVyVGV4dCA9ICdWJztcbiAgICBOLmlubmVyVGV4dCA9ICdOJztcbiAgICBTSVguaW5uZXJUZXh0ID0gJzYnO1xuICAgIE5JTkUuaW5uZXJUZXh0ID0gJzknO1xuICAgIFUuaW5uZXJUZXh0ID0gJ1UnO1xuICAgIFMuaW5uZXJUZXh0ID0gJ1MnO1xuICAgIE4yLmlubmVyVGV4dCA9ICdOJztcbiAgICBBLmlubmVyVGV4dCA9ICdBJztcbiAgICBWMi5pbm5lclRleHQgPSAnVic7XG4gICAgWS5pbm5lclRleHQgPSAnWSc7XG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uIGRlc3Ryb3llcigpIHtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuYmxhY2tfb3V0bGluZSwgJ3NoaXBfaHVsbF9vdXRsaW5lJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLmh1bGwsICdzaGlwX2h1bGwnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIubGlnaHRfZ3JheSwgJ2xpZ2h0X2dyYXknKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuZGFya19ncmF5LCAnZGFya19ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLnNoaXBfbGlnaHQsICdzaGlwX2xpZ2h0Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoXG4gICAgICBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyayxcbiAgICAgICdzdXJyb3VuZGluZ193YXRlcl9kYXJrJ1xuICAgICk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoXG4gICAgICBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQsXG4gICAgICAnc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQnXG4gICAgKTtcblxuICAgIGNvbnN0IFUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTUwKTtcbiAgICBjb25zdCBTID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1MSk7XG4gICAgY29uc3QgTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTMpO1xuICAgIGNvbnN0IEEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTU0KTtcbiAgICBjb25zdCBWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1NSk7XG4gICAgY29uc3QgWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTYpO1xuICAgIGNvbnN0IEFMTCA9IFtVLCBTLCBOLCBBLCBWLCBZXTtcbiAgICBBTEwubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3NoaXBfdGV4dCcpO1xuICAgIH0pO1xuICAgIFUuaW5uZXJUZXh0ID0gJ1UnO1xuICAgIFMuaW5uZXJUZXh0ID0gJ1MnO1xuICAgIE4uaW5uZXJUZXh0ID0gJ04nO1xuICAgIEEuaW5uZXJUZXh0ID0gJ0EnO1xuICAgIFYuaW5uZXJUZXh0ID0gJ1YnO1xuICAgIFkuaW5uZXJUZXh0ID0gJ1knO1xuICB9KSgpO1xuXG4gIChmdW5jdGlvbiBzdWJtYXJpbmUoKSB7XG4gICAgLy8gRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLmh1bGwsICdzdWInKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihTVUJNQVJJTkUuZGFya19ncmF5LCAnZGFya19ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLmxlZnRfcGVyaXNjb3BlLCAncGVyaXNjb3BlX29uJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLnJpZ2h0X3BlcmlzY29wZSwgJ3BlcmlzY29wZV9vZmYnKTtcbiAgfSkoKTtcbn1cbiIsImltcG9ydCBTVEFSVCBmcm9tICcuL3N0YXJ0X3RpbGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3Jfc3RhcnRfdGlsZXMoKSB7XG4gIGNvbnN0IEFMTCA9IFNUQVJULmFsbDtcbiAgQUxMLm1hcCgodGlsZV9pZCkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RhcnRfJHt0aWxlX2lkfWApO1xuICAgIFRJTEUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfYmFja2dyb3VuZCcpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfdGV4dCcpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX3dhdGVyX3RpbGVzKCkge1xuICBjb25zdCBDTEFTU0VTID0gW1xuICAgICdibHVlMScsXG4gICAgJ2JsdWUyJyxcbiAgICAnYmx1ZTMnLFxuICAgICdibHVlNCcsXG4gICAgJ2JsdWU1JyxcbiAgICAnYmx1ZTYnLFxuICAgICdibHVlNycsXG4gICAgJ2JsdWU4JyxcbiAgICAnYmx1ZTknLFxuICAgICdibHVlMTAnLFxuICAgICdncmVlbjEnLFxuICBdO1xuICBjb25zdCBXQVRFUl9USUxFUyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2F0ZXInKSk7XG4gIFdBVEVSX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKENMQVNTRVNbUkFORE9NX05VTUJFUl0pO1xuICB9KTtcbn1cbiIsImNvbnN0IElURVJBVE9SID0gKG1pbiwgbWF4LCB0YXJnZXRfYXJyYXkpID0+IHtcbiAgZm9yIChsZXQgaSA9IG1pbjsgaSA8IG1heCArIDE7IGkrKykge1xuICAgIHRhcmdldF9hcnJheS5wdXNoKGkpO1xuICB9XG59O1xuXG5jb25zdCBFWl9USUxFX0NPTE9SSVpFUiA9IChpbnB1dF9hcnJheSwgaW5wdXRfY2xhc3MpID0+IHtcbiAgaW5wdXRfYXJyYXkubWFwKCh0aWxlX2lkKSA9PiB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpbGVfaWQpO1xuICAgIFRJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoaW5wdXRfY2xhc3MpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IElURVJBVE9SLCBFWl9USUxFX0NPTE9SSVpFUiB9O1xuIiwiaW1wb3J0IHsgQU5JTUFUSU9OUyB9IGZyb20gJy4vYW5pbWF0aW9ucy5qcyc7XG5pbXBvcnQgcGxhY2Vfc2hpcHMgZnJvbSAnLi4vLi4vcGxhY2Vfc2hpcHMvcGxhY2Vfc2hpcHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0ZW5lcnNfaGFuZGxlcnMoKSB7XG4gIGNvbnN0IFNUQVJUX0JVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydF9idXR0b24nKTtcblxuICBjb25zdCBTVEFSVF9CVVRUT05fRU5URVJfSEFORExFUiA9ICgpID0+IHtcbiAgICBjb25zdCBTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydF9iYWNrZ3JvdW5kJylcbiAgICApO1xuICAgIFNUQVJUX0JVVFRPTl9CQUNLR1JPVU5EX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQnKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfYmFja2dyb3VuZCcpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRfdGV4dCcpXG4gICAgKTtcbiAgICBTVEFSVF9CVVRUT05fVEVYVF9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfdGV4dF9ob3ZlcmVkJyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X3RleHQnKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBTVEFSVF9CVVRUT05fTEVBVkVfSEFORExFUiA9ICgpID0+IHtcbiAgICBjb25zdCBTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQnKVxuICAgICk7XG4gICAgU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkRfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0X2JhY2tncm91bmQnKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkJyk7XG4gICAgfSk7XG4gICAgY29uc3QgU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRfdGV4dF9ob3ZlcmVkJylcbiAgICApO1xuICAgIFNUQVJUX0JVVFRPTl9URVhUX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdGFydF90ZXh0Jyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X3RleHRfaG92ZXJlZCcpO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBTVEFSVF9CVVRUT05fQ0xJQ0tfSEFORExFUiA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpbnRlcnZhbCBpbiBBTklNQVRJT05TKSB7XG4gICAgICBjb25zdCBJTlRFUlZBTCA9IEFOSU1BVElPTlNbaW50ZXJ2YWxdO1xuICAgICAgY2xlYXJJbnRlcnZhbChJTlRFUlZBTCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYW5kaW5nX3BhZ2UnKS5yZW1vdmUoKTtcbiAgICBwbGFjZV9zaGlwcygpO1xuICB9O1xuXG4gIFNUQVJUX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU1RBUlRfQlVUVE9OX0VOVEVSX0hBTkRMRVIpO1xuICBTVEFSVF9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFNUQVJUX0JVVFRPTl9MRUFWRV9IQU5ETEVSKTtcbiAgU1RBUlRfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgU1RBUlRfQlVUVE9OX0NMSUNLX0hBTkRMRVIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBIRUFESU5HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IFNUQVJUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIE1BSU4uaWQgPSAnbGFuZGluZ19wYWdlJztcbiAgSEVBRElORy5pZCA9ICdic19oZWFkaW5nJztcbiAgU1RBUlQuaWQgPSAnc3RhcnRfYnV0dG9uJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyODAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IGk7XG4gICAgVElMRS5jbGFzc0xpc3QgPSAnaG9tZXBlYWdlX3RpbGUgd2F0ZXInO1xuICAgIEhFQURJTkcuYXBwZW5kKFRJTEUpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IGBzdGFydF8ke2l9YDtcbiAgICBUSUxFLmNsYXNzTGlzdCA9ICd0aWxlIHN0YXJ0IHN0YXJ0X2JhY2tncm91bmQnO1xuICAgIFNUQVJULmFwcGVuZChUSUxFKTtcbiAgfVxuICBNQUlOLmFwcGVuZChIRUFESU5HKTtcbiAgTUFJTi5hcHBlbmQoU1RBUlQpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChNQUlOKTtcbn1cbiIsImltcG9ydCB7IElURVJBVE9SIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY29uc3QgQ0FSUklFUiA9IHtcbiAgYmxhY2tfb3V0bGluZTogW1xuICAgIDE0NDYsIDE0NTAsIDE1MTYsIDE1MjAsIDE1ODYsIDE1OTAsIDE3MjMsIDE3MzMsIDE4MDMsIDE4NTksIDE4NzMsIDE4NzcsXG4gICAgMTkyOCwgMTk0MywgMTk0NiwgMTk0OCwgMTk1NSwgMTk1NiwgMTk4MiwgMTk4MywgMTk4NywgMTk4OCwgMTk5MiwgMTk5MyxcbiAgICAxOTk4LCAyMDEzLCAyMDI2LCAyMDUyLCAyMDU0LCAyMDU1LCAyMDU3LCAyMDU5LCAyMDYwLCAyMDYyLCAyMDY0LCAyMDY1LFxuICAgIDIwNjgsIDIwODMsIDIwODUsIDIwODksIDIwOTEsIDIwOTQsIDIwOTUsIDIxMjMsIDIxMjUsIDIxMjgsIDIxMzAsIDIxMzMsXG4gICAgMjEzNSwgMjEzOCwgMjE1MywgMjE1NSwgMjE1OSwgMjE2MSwgMjE2NSwgMjI2MCwgMjI2MSwgMjI2MiwgMjMwOSwgMjMzMixcbiAgICAyMzMzLCAyMzM0LCAyMzc5LCAyNDA0LCAyNDQ4LCAyNDc1LCAyNTE3LCAyNTQ2LCAyNTg2LCAyNjE3LCAyNjU2LCAyNjg3LFxuICAgIDI3MjYsXG4gIF0sXG4gIGh1bGw6IFtcbiAgICAxNTE5LCAxOTM5LCAxOTQwLCAyMDc5LCAyMDgwLCAyNjg4LCAyNjg5LCAyNjkyLCAyNjkzLCAyNjk2LCAyNjk3LCAyNzAwLFxuICAgIDI3MDEsIDI3MDQsIDI3MDUsIDI3MDgsIDI3MDksIDI3MTIsIDI3MTMsIDI3MTYsIDI3MTcsIDI3MjAsIDI3MjEsIDI3MjQsXG4gICAgMjcyNSxcbiAgXSxcbiAgZGFya19ncmF5OiBbXG4gICAgMTE2OCwgMTIzOCwgMTMwOCwgMTUxNywgMTUxOCwgMTkyOSwgMTkzMCwgMTk0MSwgMTk0MiwgMTk0NywgMjAyNSwgMjA1MyxcbiAgICAyMDU4LCAyMDYzLCAyMDY5LCAyMDcwLCAyMDgxLCAyMDgyLCAyMTI0LCAyMTI5LCAyMTM0LCAyMDkyLCAyMDkzLFxuICBdLFxuICBsaWdodF9ncmF5OiBbMTA5NywgMTA5OV0sXG4gIHNoaXBfbGlnaHQ6IFsxMDk4XSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfZGFyazogW1xuICAgIDI1NDUsIDI2MTYsIDI2ODYsIDI2OTAsIDI2OTEsIDI2OTQsIDI2OTUsIDI2OTgsIDI2OTksIDI3MDIsIDI3MDMsIDI3MDYsXG4gICAgMjcwNywgMjcxMCwgMjcxMSwgMjcxNCwgMjcxNSwgMjcxOCwgMjcxOSwgMjcyMiwgMjcyMywgMjU4NywgMjY1NywgMjcyNyxcbiAgICAyNDQ5LCAyNTE4LCAyNTE5LCAyNTg4LCAyNjU4LFxuICBdLFxuICBzdXJyb3VuZGluZ193YXRlcl9saWdodDogW1xuICAgIDI1ODksIDI2MTUsIDI2NTksIDI2ODQsIDI2ODUsIDI3MjgsIDI3MjksIDI3NTMsIDI3NTQsIDI3NTUsIDI3OTgsIDI3OTksXG4gIF0sXG59O1xuXG5jb25zdCBERVNUUk9ZRVIgPSB7XG4gIGJsYWNrX291dGxpbmU6IFtcbiAgICAxMTk0LCAxMTk4LCAxMjExLCAxMjY1LCAxMjY5LCAxMjgwLCAxNDc0LCAxNDkxLCAxNDkyLCAxNTQ1LCAxNTYxLCAxNjE2LFxuICAgIDE2MzEsIDE2ODcsIDE3MDEsXG4gIF0sXG4gIGh1bGw6IFsxNjg4LCAxNjkxLCAxNjkyLCAxNjk1LCAxNjk2LCAxNjk5LCAxNzAwXSxcbiAgZGFya19ncmF5OiBbNzg1LCA4NTUsIDkyNSwgOTk1LCAxMjY2LCAxMjcwLCAxMjczLCAxMjc0LCAxMjc2LCAxMjc5XSxcbiAgbGlnaHRfZ3JheTogWzcxNCwgNzE2LCAxMTMzLCAxMTM3LCAxMjcyLCAxMjc1LCAxMjc3XSxcbiAgc2hpcF9saWdodDogWzcxNV0sXG4gIHN1cnJvdW5kaW5nX3dhdGVyX2Rhcms6IFsxNjg5LCAxNjkwLCAxNjkzLCAxNjk0LCAxNjk3LCAxNjk4XSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQ6IFtcbiAgICAxNjMyLCAxNjg1LCAxNjg2LCAxNzAyLCAxNzAzLCAxNzU0LCAxNzU1LCAxNzczLCAxNzc0LFxuICBdLFxufTtcblxuY29uc3QgU1VCTUFSSU5FID0ge1xuICBodWxsOiBbXSxcbiAgZGFya19ncmF5OiBbNzYwLCA4MzAsIDkwMF0sXG4gIGxlZnRfcGVyaXNjb3BlOiBbNzU5XSxcbiAgcmlnaHRfcGVyaXNjb3BlOiBbNzYxXSxcbn07XG5cbihmdW5jdGlvbiBjYXJyaWVyX2V6X2xvYWRlcigpIHtcbiAgY29uc3QgT1VUTElORSA9IENBUlJJRVIuYmxhY2tfb3V0bGluZTtcbiAgSVRFUkFUT1IoMTM3NiwgMTM4MCwgT1VUTElORSk7XG4gIElURVJBVE9SKDE2NTMsIDE2NjMsIE9VVExJTkUpO1xuICBJVEVSQVRPUigxNzkwLCAxNzkzLCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMjAxNSwgMjAxOSwgT1VUTElORSk7XG4gIElURVJBVE9SKDIwMjIsIDIwMjQsIE9VVExJTkUpO1xuICBJVEVSQVRPUigyMTkwLCAyMjM5LCBPVVRMSU5FKTtcblxuICBjb25zdCBIVUxMID0gQ0FSUklFUi5odWxsO1xuICBJVEVSQVRPUigxNDQ3LCAxNDQ5LCBIVUxMKTtcbiAgSVRFUkFUT1IoMTU4NywgMTU4OSwgSFVMTCk7XG4gIElURVJBVE9SKDE3MjQsIDE3MzIsIEhVTEwpO1xuICBJVEVSQVRPUigxNzk0LCAxODAyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTg2MCwgMTg3MiwgSFVMTCk7XG4gIElURVJBVE9SKDE5MzEsIDE5MzQsIEhVTEwpO1xuICBJVEVSQVRPUigxOTk5LCAyMDEyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMjA3MSwgMjA3NCwgSFVMTCk7XG4gIElURVJBVE9SKDIxMzksIDIxNTIsIEhVTEwpO1xuICBJVEVSQVRPUigyMjYzLCAyMzA4LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjMzNSwgMjM3OCwgSFVMTCk7XG4gIElURVJBVE9SKDI0MDUsIDI0NDcsIEhVTEwpO1xuICBJVEVSQVRPUigyNDc2LCAyNTE2LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjU0NywgMjU4NSwgSFVMTCk7XG4gIElURVJBVE9SKDI2MTgsIDI2NTUsIEhVTEwpO1xuXG4gIGNvbnN0IERBUktfR1JBWSA9IENBUlJJRVIuZGFya19ncmF5O1xuICBJVEVSQVRPUigxMTM0LCAxMTM2LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMDg2LCAyMDg4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMTU2LCAyMTU4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMTYyLCAyMTY0LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxOTM1LCAxOTM4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMDc1LCAyMDc4LCBEQVJLX0dSQVkpO1xuXG4gIGNvbnN0IExJR0hUX0dSQVkgPSBDQVJSSUVSLmxpZ2h0X2dyYXk7XG4gIElURVJBVE9SKDIzMzUsIDIzNzgsIExJR0hUX0dSQVkpO1xuXG4gIGNvbnN0IFNVUlJPVU5ESU5HX1dBVEVSX0RBUksgPSBDQVJSSUVSLnN1cnJvdW5kaW5nX3dhdGVyX2Rhcms7XG4gIElURVJBVE9SKDI3NTYsIDI3OTcsIFNVUlJPVU5ESU5HX1dBVEVSX0RBUkspO1xufSkoKTtcblxuKGZ1bmN0aW9uIGRlc3Ryb3llcl9lel9sb2FkZXIoKSB7XG4gIGNvbnN0IE9VVExJTkUgPSBERVNUUk9ZRVIuYmxhY2tfb3V0bGluZTtcbiAgSVRFUkFUT1IoMTQwMywgMTQyMiwgT1VUTElORSk7XG5cbiAgY29uc3QgSFVMTCA9IERFU1RST1lFUi5odWxsO1xuICBJVEVSQVRPUigxNDc1LCAxNDkwLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTYxNywgMTYzMCwgSFVMTCk7XG5cbiAgY29uc3QgTElHSFRfR1JBWSA9IERFU1RST1lFUi5saWdodF9ncmF5O1xuICBJVEVSQVRPUigxNTQ2LCAxNTYwLCBMSUdIVF9HUkFZKTtcbiAgSVRFUkFUT1IoMTA2MywgMTA2NywgTElHSFRfR1JBWSk7XG4gIElURVJBVE9SKDEyMDIsIDEyMDcsIExJR0hUX0dSQVkpO1xuICBJVEVSQVRPUigxMzQyLCAxMzQ3LCBMSUdIVF9HUkFZKTtcblxuICBjb25zdCBEQVJLX0dSQVkgPSBERVNUUk9ZRVIuZGFya19ncmF5O1xuICBJVEVSQVRPUigxMzM0LCAxMzM2LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxMzM4LCAxMzQwLCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxMzQ5LCAxMzUxLCBEQVJLX0dSQVkpO1xuXG4gIGNvbnN0IFNVUlJPVU5ESU5HX1dBVEVSX0RBUksgPSBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyaztcbiAgSVRFUkFUT1IoMTc1NiwgMTc3MiwgU1VSUk9VTkRJTkdfV0FURVJfREFSSyk7XG59KSgpO1xuXG5leHBvcnQgeyBDQVJSSUVSLCBERVNUUk9ZRVIsIFNVQk1BUklORSB9O1xuIiwiaW1wb3J0IHsgSVRFUkFUT1IgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jb25zdCBTVEFSVCA9IHtcbiAgczogWzIyMSwgMjIyLCA0MzcsIDQzOF0sXG4gIHQxOiBbMjM0LCAyMzUsIDMwNCwgMzA1LCAzNzQsIDM3NSwgNDQ0LCA0NDUsIDUxNCwgNTE1LCA1ODQsIDU4NV0sXG4gIGE6IFtcbiAgICAyNDEsIDI0MiwgMjQ3LCAyNDgsIDQ1MSwgNDUyLCA0NTcsIDQ1OCwgNTIxLCA1MjIsIDUyNywgNTI4LCA1OTEsIDU5MiwgNTk3LFxuICAgIDU5OCxcbiAgXSxcbiAgcjogW1xuICAgIDI1MSwgMjUyLCAyNTcsIDI1OCwgNDYxLCA0NjIsIDQ2NywgNDY4LCA1MzEsIDUzMiwgNTM3LCA1MzgsIDYwMSwgNjAyLCA2MDcsXG4gICAgNjA4LFxuICBdLFxuICB0MjogWzI2NCwgMjY1LCAzMzQsIDMzNSwgNDA0LCA0MDUsIDQ3NCwgNDc1LCA1NDQsIDU0NSwgNjE0LCA2MTVdLFxuICBhbGw6IFtdLFxufTtcblxuKGZ1bmN0aW9uIGV6X2xvYWRlcigpIHtcbiAgY29uc3QgUyA9IFNUQVJULnM7XG4gIElURVJBVE9SKDgxLCA4OCwgUyk7XG4gIElURVJBVE9SKDE1MSwgMTU4LCBTKTtcbiAgSVRFUkFUT1IoMjkxLCAyOTgsIFMpO1xuICBJVEVSQVRPUigzNjEsIDM2OCwgUyk7XG4gIElURVJBVE9SKDUwMSwgNTA4LCBTKTtcbiAgSVRFUkFUT1IoNTcxLCA1NzgsIFMpO1xuXG4gIGNvbnN0IFQxID0gU1RBUlQudDE7XG4gIElURVJBVE9SKDkxLCA5OCwgVDEpO1xuICBJVEVSQVRPUigxNjEsIDE2OCwgVDEpO1xuXG4gIGNvbnN0IEEgPSBTVEFSVC5hO1xuICBJVEVSQVRPUigxMDEsIDEwOCwgQSk7XG4gIElURVJBVE9SKDE3MSwgMTc4LCBBKTtcbiAgSVRFUkFUT1IoMzExLCAzMTgsIEEpO1xuICBJVEVSQVRPUigzODEsIDM4OCwgQSk7XG5cbiAgY29uc3QgUiA9IFNUQVJULnI7XG4gIElURVJBVE9SKDExMSwgMTE2LCBSKTtcbiAgSVRFUkFUT1IoMTgxLCAxODYsIFIpO1xuICBJVEVSQVRPUigzMjEsIDMyNiwgUik7XG4gIElURVJBVE9SKDM5MSwgMzk2LCBSKTtcblxuICBjb25zdCBUMiA9IFNUQVJULnQyO1xuICBJVEVSQVRPUigxMjEsIDEyOCwgVDIpO1xuICBJVEVSQVRPUigxOTEsIDE5OCwgVDIpO1xuXG4gIGZvciAobGV0IGxldHRlciBpbiBTVEFSVCkge1xuICAgIGlmIChsZXR0ZXIgPT09ICdhbGwnKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgU1RBUlRbbGV0dGVyXS5tYXAoKG51bWJlcikgPT4ge1xuICAgICAgU1RBUlQuYWxsLnB1c2gobnVtYmVyKTtcbiAgICB9KTtcbiAgfVxufSkoKTtcbmV4cG9ydCBkZWZhdWx0IFNUQVJUO1xuIiwiaW1wb3J0IHJlbmRlcl90aWxlcyBmcm9tICcuL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9zdGFydF90aWxlcyBmcm9tICcuL2hlbHBlcnMvY29sb3Jfc3RhcnRfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX3NoaXBfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX3NoaXBfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX2JhdHRsZXNoaXBfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX2JhdHRsZXNoaXBfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX3dhdGVyX3RpbGVzIGZyb20gJy4vaGVscGVycy9jb2xvcl93YXRlcl90aWxlcy5qcyc7XG5pbXBvcnQgbGlzdGVuZXJzX2hhbmRsZXJzIGZyb20gJy4vaGVscGVycy9saXN0ZW5lcnNfaGFuZGxlcnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lcGFnZSgpIHtcbiAgcmVuZGVyX3RpbGVzKCk7XG4gIGNvbG9yX3N0YXJ0X3RpbGVzKCk7XG4gIGNvbG9yX3NoaXBfdGlsZXMoKTtcbiAgY29sb3JfYmF0dGxlc2hpcF90aWxlcygpO1xuICBjb2xvcl93YXRlcl90aWxlcygpO1xuICBsaXN0ZW5lcnNfaGFuZGxlcnMoKTtcbn1cbiIsImltcG9ydCB7IEdBTUUgfSBmcm9tICcuLi8uLi8uLi8uLi9pbmRleC5qcyc7XG5pbXBvcnQgcGxhY2VfYWlfc2hpcHMgZnJvbSAnLi9wbGFjZV9haV9zaGlwcy5qcyc7XG5pbXBvcnQgcmVuZGVyX2dhbWVfYm9hcmRzIGZyb20gJy4uLy4uL2dhbWVfYm9hcmRzL3JlbmRlcl9nYW1lX2JvYXJkcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2ljX2xpc3RlbmVycygpIHtcbiAgbGV0IGN1cnJlbnRfc2hpcF9pbmRleCA9IDA7XG4gIGxldCBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgY29uc3QgU0hJUFMgPSBbJ2NhcnJpZXInLCAnYmF0dGxlc2hpcCcsICdkZXN0cm95ZXInLCAnc3ViJywgJ3BhdHJvbEJvYXQnXTtcbiAgY29uc3QgTEVOR1RIID0gWzUsIDQsIDMsIDMsIDJdO1xuICBjb25zdCBNQVhTID0ge1xuICAgIC8vIHZlcnRpY2FsIGlzIHVzaW5nIGNoYXJjb2Rlc1xuICAgIGNhcnJpZXI6IHtcbiAgICAgIGhvcml6b250YWw6IDUsXG4gICAgICB2ZXJ0aWNhbDogMTAyLCAvLyBmXG4gICAgfSxcbiAgICBiYXR0bGVzaGlwOiB7XG4gICAgICBob3Jpem9udGFsOiA2LFxuICAgICAgdmVydGljYWw6IDEwMywgLy8gZ1xuICAgIH0sXG4gICAgZGVzdHJveWVyOiB7XG4gICAgICBob3Jpem9udGFsOiA3LFxuICAgICAgdmVydGljYWw6IDEwNCwgLy8gaFxuICAgIH0sXG4gICAgc3ViOiB7XG4gICAgICBob3Jpem9udGFsOiA3LFxuICAgICAgdmVydGljYWw6IDEwNCwgLy8gaFxuICAgIH0sXG4gICAgcGF0cm9sQm9hdDoge1xuICAgICAgaG9yaXpvbnRhbDogOCxcbiAgICAgIHZlcnRpY2FsOiAxMDUsIC8vIGlcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IElOQk9VTkRTX0VWQUxVQVRPUiA9IChpZCkgPT4ge1xuICAgIGxldCB2YWx1ZV90b19jb21wYXJlID0gJyc7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHZhbHVlX3RvX2NvbXBhcmUgPSBpZFsxXTtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICB2YWx1ZV90b19jb21wYXJlID0gaWQuY2hhckNvZGVBdCgwKTtcbiAgICB9XG4gICAgY29uc3QgTUFYID0gTUFYU1tTSElQU1tjdXJyZW50X3NoaXBfaW5kZXhdXVtvcmllbnRhdGlvbl07XG4gICAgcmV0dXJuIHZhbHVlX3RvX2NvbXBhcmUgPD0gTUFYO1xuICB9O1xuXG4gIGNvbnN0IFNQQUNFX1RBS0VOX0VWQUxVQVRPUiA9IChhbGxfdGlsZXMpID0+IHtcbiAgICBsZXQgYXJlX2FsbF90YWtlbiA9IHRydWU7XG4gICAgY29uc3QgUExBWUVSMV9TSElQUyA9IEdBTUUuUkVUVVJOX1NISVBTKDEpO1xuICAgIGZvciAobGV0IHNoaXAgaW4gUExBWUVSMV9TSElQUykge1xuICAgICAgY29uc3QgUE9TSVRJT05TID0gUExBWUVSMV9TSElQU1tzaGlwXS5wb3NpdGlvbjtcbiAgICAgIGFsbF90aWxlcy5tYXAoKHRpbGUpID0+IHtcbiAgICAgICAgaWYgKFBPU0lUSU9OUy5pbmNsdWRlcyh0aWxlKSkge1xuICAgICAgICAgIGFyZV9hbGxfdGFrZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhcmVfYWxsX3Rha2VuO1xuICB9O1xuXG4gIGNvbnN0IFNVQlNFUVVFTlRfVElMRVMgPSAoaWQpID0+IHtcbiAgICBjb25zdCBMRVRURVJfQ0hBUl9DT0RFID0gaWQuY2hhckNvZGVBdCgwKTtcbiAgICBjb25zdCBOVU1CRVIgPSBpZFsxXTtcbiAgICBsZXQgYWxsID0gW107XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IFNUT1BfQVQgPSArTlVNQkVSICsgTEVOR1RIW2N1cnJlbnRfc2hpcF9pbmRleF07XG4gICAgICBmb3IgKGxldCBpID0gTlVNQkVSOyBpIDwgU1RPUF9BVDsgaSsrKSB7XG4gICAgICAgIGFsbC5wdXNoKGAke1N0cmluZy5mcm9tQ2hhckNvZGUoTEVUVEVSX0NIQVJfQ09ERSl9JHtpfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFsbDtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBjb25zdCBTVE9QX0FUID0gTEVUVEVSX0NIQVJfQ09ERSArIExFTkdUSFtjdXJyZW50X3NoaXBfaW5kZXhdO1xuICAgICAgZm9yIChsZXQgaSA9IExFVFRFUl9DSEFSX0NPREU7IGkgPCBTVE9QX0FUOyBpKyspIHtcbiAgICAgICAgYWxsLnB1c2goYCR7U3RyaW5nLmZyb21DaGFyQ29kZShpKX0ke05VTUJFUn1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGw7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IENPTE9SX1RJTEVTID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29vcmRpbmF0ZXMubWFwKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29vcmRpbmF0ZSk7XG4gICAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3BsYWNlX3NoaXBfaG92ZXJlZCcpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IE1PVVNFX0VOVEVSX0hBTkRMRVIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBJRCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICBjb25zdCBJTkJPVU5EUyA9IElOQk9VTkRTX0VWQUxVQVRPUihJRCk7XG4gICAgY29uc3QgQUxMX0NPT1JESU5BVEVTID0gU1VCU0VRVUVOVF9USUxFUyhJRCk7XG4gICAgY29uc3QgQVJFX1NVQlNFUVVFTlRfU1BBQ0VTX0ZSRUUgPSBTUEFDRV9UQUtFTl9FVkFMVUFUT1IoQUxMX0NPT1JESU5BVEVTKTtcbiAgICBpZiAoIUlOQk9VTkRTIHx8ICFBUkVfU1VCU0VRVUVOVF9TUEFDRVNfRlJFRSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWRfc2hpcF9wbGFjZW1lbnQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQ09MT1JfVElMRVMoQUxMX0NPT1JESU5BVEVTKTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgncGxhY2Vfc2hpcF9ob3ZlcmVkJyk7XG4gIH07XG5cbiAgY29uc3QgTU9VU0VfTEVBVkVfSEFORExFUiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IEhPVkVSRURfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxhY2Vfc2hpcF9ob3ZlcmVkJylcbiAgICApO1xuICAgIEhPVkVSRURfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlX3NoaXBfaG92ZXJlZCcpO1xuICAgIH0pO1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkX3NoaXBfcGxhY2VtZW50Jyk7XG4gIH07XG5cbiAgY29uc3QgTU9VU0VfQ0xJQ0tfSEFORExFUiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IElEID0gZXZlbnQudGFyZ2V0LmlkO1xuICAgIGNvbnN0IElOQk9VTkRTID0gSU5CT1VORFNfRVZBTFVBVE9SKElEKTtcbiAgICBjb25zdCBBTExfQ09PUkRJTkFURVMgPSBTVUJTRVFVRU5UX1RJTEVTKElEKTtcbiAgICBjb25zdCBBUkVfU1VCU0VRVUVOVF9TUEFDRVNfRlJFRSA9IFNQQUNFX1RBS0VOX0VWQUxVQVRPUihBTExfQ09PUkRJTkFURVMpO1xuXG4gICAgaWYgKElOQk9VTkRTICYmIEFSRV9TVUJTRVFVRU5UX1NQQUNFU19GUkVFICYmIGN1cnJlbnRfc2hpcF9pbmRleCA8IDUpIHtcbiAgICAgIGNvbnN0IENVUlJFTlRfU0hJUCA9IFNISVBTW2N1cnJlbnRfc2hpcF9pbmRleF07XG4gICAgICBHQU1FLlBMQUNFX1NISVAoMSwgQ1VSUkVOVF9TSElQLCBBTExfQ09PUkRJTkFURVMpO1xuICAgICAgQUxMX0NPT1JESU5BVEVTLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29vcmRpbmF0ZSk7XG4gICAgICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgncGxhY2VkX3RpbGUnKTtcbiAgICAgIH0pO1xuICAgICAgY3VycmVudF9zaGlwX2luZGV4ID0gY3VycmVudF9zaGlwX2luZGV4ICsgMTtcblxuICAgICAgaWYgKGN1cnJlbnRfc2hpcF9pbmRleCA+IDQpIHtcbiAgICAgICAgY29uc3QgTUFJTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZV9zaGlwc19tYWluJyk7XG4gICAgICAgIE1BSU4ucmVtb3ZlKCk7XG4gICAgICAgIHBsYWNlX2FpX3NoaXBzKCk7XG4gICAgICAgIHJlbmRlcl9nYW1lX2JvYXJkcygpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBTUEFDRV9CQVJfSEFORExFUiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IEtFWSA9IGV2ZW50LmtleTtcbiAgICBpZiAoS0VZID09PSAnICcgJiYgb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoS0VZID09PSAnICcgJiYgb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBUSUxFUyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxhY2Vfc2hpcF90aWxlJykpO1xuICBUSUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBNT1VTRV9FTlRFUl9IQU5ETEVSKTtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBNT1VTRV9MRUFWRV9IQU5ETEVSKTtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTU9VU0VfQ0xJQ0tfSEFORExFUik7XG4gIH0pO1xuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgU1BBQ0VfQkFSX0hBTkRMRVIpO1xufVxuIiwiaW1wb3J0IHsgR0FNRSB9IGZyb20gJy4uLy4uLy4uLy4uL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxhY2VfYWlfc2hpcHMoKSB7XG4gIGxldCBjdXJyZW50X3NoaXBfaW5kZXggPSAwO1xuICBsZXQgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gIGNvbnN0IFNISVBTID0gWydjYXJyaWVyJywgJ2JhdHRsZXNoaXAnLCAnZGVzdHJveWVyJywgJ3N1YicsICdwYXRyb2xCb2F0J107XG4gIGNvbnN0IExFTkdUSCA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgY29uc3QgSU5GTyA9IHtcbiAgICAvLyB2ZXJ0aWNhbCBpcyB1c2luZyBjaGFyY29kZXNcbiAgICBjYXJyaWVyOiB7XG4gICAgICBtYXg6IDUsIC8vaG9yaXpvbnRhbFxuICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgIH0sXG4gICAgYmF0dGxlc2hpcDoge1xuICAgICAgbWF4OiA2LCAvLyB2ZXJ0aWNhbFxuICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgIH0sXG4gICAgZGVzdHJveWVyOiB7XG4gICAgICBtYXg6IDcsIC8vIGhvcml6b250YWxcbiAgICAgIGNvb3JkaW5hdGVzOiBbXSxcbiAgICB9LFxuICAgIHN1Yjoge1xuICAgICAgbWF4OiA3LCAvLyB2ZXJ0aWNhbFxuICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgIH0sXG4gICAgcGF0cm9sQm9hdDoge1xuICAgICAgbWF4OiA4LCAvLyBob3Jpem9udGFsXG4gICAgICBjb29yZGluYXRlczogW10sXG4gICAgfSxcbiAgfTtcbiAgY29uc3QgQUxMX0NPT1JESU5BVEVTID0gW107XG5cbiAgY29uc3QgTEVUVEVSUyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJywgJ2knLCAnaiddO1xuXG4gIGNvbnN0IEFMTF9USUxFUyA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgTEVUVEVSX0NIQVJfQ09ERSA9IGNvb3JkaW5hdGUuY2hhckNvZGVBdCgwKTtcbiAgICBjb25zdCBOVU1CRVIgPSBjb29yZGluYXRlWzFdO1xuICAgIGxldCBhbGwgPSBbXTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgY29uc3QgU1RPUF9BVCA9ICtOVU1CRVIgKyBMRU5HVEhbY3VycmVudF9zaGlwX2luZGV4XTtcbiAgICAgIGZvciAobGV0IGkgPSBOVU1CRVI7IGkgPCBTVE9QX0FUOyBpKyspIHtcbiAgICAgICAgYWxsLnB1c2goYCR7U3RyaW5nLmZyb21DaGFyQ29kZShMRVRURVJfQ0hBUl9DT0RFKX0ke2l9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWxsO1xuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGNvbnN0IFNUT1BfQVQgPSBMRVRURVJfQ0hBUl9DT0RFICsgTEVOR1RIW2N1cnJlbnRfc2hpcF9pbmRleF07XG4gICAgICBmb3IgKGxldCBpID0gTEVUVEVSX0NIQVJfQ09ERTsgaSA8IFNUT1BfQVQ7IGkrKykge1xuICAgICAgICBhbGwucHVzaChgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKGkpfSR7TlVNQkVSfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFsbDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgVE9HR0xFX09SSUVOVEFUSU9OID0gKCkgPT4ge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBvcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBPTkVfUkFORE9NID0gKCkgPT4ge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBSQU5ET01fTEVUVEVSID0gTEVUVEVSU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgICAgY29uc3QgUkFORE9NX05VTUJFUiA9IE1hdGguZmxvb3IoXG4gICAgICAgIE1hdGgucmFuZG9tKCkgKiAoSU5GT1tTSElQU1tjdXJyZW50X3NoaXBfaW5kZXhdXS5tYXggKyAxKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBSQU5ET01fTEVUVEVSICsgUkFORE9NX05VTUJFUjtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBjb25zdCBSQU5ET01fTEVUVEVSID1cbiAgICAgICAgTEVUVEVSU1tcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoSU5GT1tTSElQU1tjdXJyZW50X3NoaXBfaW5kZXhdXS5tYXggKyAxKSlcbiAgICAgICAgXTtcbiAgICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICByZXR1cm4gUkFORE9NX0xFVFRFUiArIFJBTkRPTV9OVU1CRVI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IEdFVF9NT1ZFID0gKCkgPT4ge1xuICAgIGNvbnN0IFJBTkRPTV9DT09SRElOQVRFID0gT05FX1JBTkRPTSgpO1xuICAgIGNvbnN0IEFMTF9DT09SRElOQVRFUyA9IEFMTF9USUxFUyhSQU5ET01fQ09PUkRJTkFURSk7XG4gICAgcmV0dXJuIEFMTF9DT09SRElOQVRFUztcbiAgfTtcblxuICAoZnVuY3Rpb24gY3JlYXRlX2Nvb3JkaW5hdGVzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBjb25zdCBVTklRVUVfTU9WRSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHVuaXF1ZSA9IHRydWU7XG4gICAgICAgIGxldCBNT1ZFID0gR0VUX01PVkUoKTtcbiAgICAgICAgTU9WRS5tYXAoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICBpZiAoQUxMX0NPT1JESU5BVEVTLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgICB1bmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodW5pcXVlID09PSBmYWxzZSkge1xuICAgICAgICAgIFVOSVFVRV9NT1ZFKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVuaXF1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIE1PVkUubWFwKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICBJTkZPW1NISVBTW2N1cnJlbnRfc2hpcF9pbmRleF1dLmNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICBBTExfQ09PUkRJTkFURVMucHVzaChjb29yZGluYXRlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIFVOSVFVRV9NT1ZFKCk7XG4gICAgICBjdXJyZW50X3NoaXBfaW5kZXgrKztcbiAgICAgIFRPR0dMRV9PUklFTlRBVElPTigpO1xuICAgIH1cbiAgfSkoKTtcblxuICAoZnVuY3Rpb24gZmlsbF9haV9ib2FyZCgpIHtcbiAgICBmb3IgKGxldCBzaGlwIGluIElORk8pIHtcbiAgICAgIGNvbnN0IFNISVBfUE9TSVRJT05TID0gSU5GT1tzaGlwXS5jb29yZGluYXRlcztcbiAgICAgIEdBTUUuUExBQ0VfU0hJUCgyLCBzaGlwLCBTSElQX1BPU0lUSU9OUyk7XG4gICAgfVxuICB9KSgpO1xufVxuIiwiaW1wb3J0IENPT1JESU5BVEVTIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvY29vcmRpbmF0ZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJfdGlsZXMoKSB7XG4gIGNvbnN0IE1BSU4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IFBMQUNFX1NISVBTX0NPTlRBSU5FUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBJTlNUUlVDVElPTlNfQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IElOU1RSVUNUSU9OUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgU1BBQ0VfS0VZID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgna2JkJyk7XG4gIGNvbnN0IENMQVNTRVMgPSBbXG4gICAgJ2JsdWUxJyxcbiAgICAnYmx1ZTInLFxuICAgICdibHVlMycsXG4gICAgJ2JsdWU0JyxcbiAgICAnYmx1ZTUnLFxuICAgICdibHVlNicsXG4gICAgJ2JsdWU3JyxcbiAgICAnYmx1ZTgnLFxuICAgICdibHVlOScsXG4gICAgJ2JsdWUxMCcsXG4gICAgJ2dyZWVuMScsXG4gIF07XG5cbiAgTUFJTi5pZCA9ICdwbGFjZV9zaGlwc19tYWluJztcbiAgUExBQ0VfU0hJUFNfQ09OVEFJTkVSLmlkID0gJ3BsYWNlX3NoaXBzX2NvbnRhaW5lcic7XG4gIElOU1RSVUNUSU9OU19DT05UQUlORVIuaWQgPSAnaW5zdHJ1Y3Rpb25zX2NvbnRhaW5lcic7XG4gIElOU1RSVUNUSU9OUy5pZCA9ICdpbnN0cnVjdGlvbnMnO1xuICBTUEFDRV9LRVkuaWQgPSAnYmtkX3NwYWNlJztcbiAgSU5TVFJVQ1RJT05TLmlubmVyVGV4dCA9ICd0byByb3RhdGUnO1xuICBTUEFDRV9LRVkuaW5uZXJUZXh0ID0gJ3NwYWNlJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM1MDA7IGkrKykge1xuICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgncGxhY2Vfc2hpcHNfYmFja2dyb3VuZF90aWxlJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKENMQVNTRVNbUkFORE9NX05VTUJFUl0pO1xuICAgIE1BSU4uYXBwZW5kKFRJTEUpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IENPT1JESU5BVEVTW2ldO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgncGxhY2Vfc2hpcF90aWxlJyk7XG4gICAgUExBQ0VfU0hJUFNfQ09OVEFJTkVSLmFwcGVuZChUSUxFKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChNQUlOKTtcbiAgSU5TVFJVQ1RJT05TX0NPTlRBSU5FUi5hcHBlbmQoU1BBQ0VfS0VZKTtcbiAgSU5TVFJVQ1RJT05TX0NPTlRBSU5FUi5hcHBlbmQoSU5TVFJVQ1RJT05TKTtcbiAgTUFJTi5hcHBlbmQoUExBQ0VfU0hJUFNfQ09OVEFJTkVSKTtcbiAgTUFJTi5hcHBlbmQoSU5TVFJVQ1RJT05TX0NPTlRBSU5FUik7XG59XG4iLCJpbXBvcnQgcmVuZGVyX3RpbGVzIGZyb20gJy4vaGVscGVycy9yZW5kZXJfdGlsZXMuanMnO1xuaW1wb3J0IGxvZ2ljX2xpc3RlbmVycyBmcm9tICcuL2hlbHBlcnMvbG9naWNfbGlzdGVuZXJzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxhY2Vfc2hpcHMoKSB7XG4gIHJlbmRlcl90aWxlcygpO1xuICBsb2dpY19saXN0ZW5lcnMoKTtcbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVsb29wKCkge1xuICBjb25zdCBQTEFZRVIxID0gbmV3IFBsYXllcignaHVtYW4nKTtcbiAgY29uc3QgUExBWUVSMiA9IG5ldyBQbGF5ZXIoJ2FpJyk7XG4gIGxldCBwbGF5ZXIxX2dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgbGV0IHBsYXllcjJfZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IFJFU0VUID0gZnVuY3Rpb24gKCkge1xuICAgIHBsYXllcjFfZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHBsYXllcjJfZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9O1xuXG4gIGNvbnN0IFJFVFVSTl9TSElQUyA9IChwbGF5ZXIpID0+IHtcbiAgICBpZiAocGxheWVyID09PSAxKSB7XG4gICAgICByZXR1cm4gcGxheWVyMV9nYW1lYm9hcmQuc2hpcHM7XG4gICAgfVxuICAgIGlmIChwbGF5ZXIgPT09IDIpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIyX2dhbWVib2FyZC5zaGlwcztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgUExBQ0VfU0hJUCA9IChib2FyZCwgc2hpcCwgcG9zaXRpb25zKSA9PiB7XG4gICAgaWYgKGJvYXJkID09PSAxKSB7XG4gICAgICBwbGF5ZXIxX2dhbWVib2FyZC5wbGFjZV9zaGlwKHNoaXAsIHBvc2l0aW9ucyk7XG4gICAgfVxuICAgIGlmIChib2FyZCA9PT0gMikge1xuICAgICAgcGxheWVyMl9nYW1lYm9hcmQucGxhY2Vfc2hpcChzaGlwLCBwb3NpdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBBVFRBQ0sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIFBMQVlFUjEuaHVtYW5fYXR0YWNrKHBsYXllcjJfZ2FtZWJvYXJkLCBjb29yZGluYXRlKTtcbiAgICBQTEFZRVIyLmFpX2F0dGFjayhwbGF5ZXIxX2dhbWVib2FyZCk7XG4gIH07XG5cbiAgY29uc3QgUkVUVVJOX0hJVFMgPSAoYm9hcmQpID0+IHtcbiAgICBpZiAoYm9hcmQgPT09IDEpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIxX2dhbWVib2FyZC5oaXRzO1xuICAgIH1cbiAgICBpZiAoYm9hcmQgPT09IDIpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIyX2dhbWVib2FyZC5oaXRzO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBSRVRVUk5fTUlTU0VTID0gKGJvYXJkKSA9PiB7XG4gICAgaWYgKGJvYXJkID09PSAxKSB7XG4gICAgICByZXR1cm4gcGxheWVyMV9nYW1lYm9hcmQubWlzc2VzO1xuICAgIH1cbiAgICBpZiAoYm9hcmQgPT09IDIpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIyX2dhbWVib2FyZC5taXNzZXM7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgUkVTRVQsXG4gICAgUkVUVVJOX1NISVBTLFxuICAgIFBMQUNFX1NISVAsXG4gICAgQVRUQUNLLFxuICAgIFJFVFVSTl9ISVRTLFxuICAgIFJFVFVSTl9NSVNTRVMsXG4gIH07XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBzaGlwcyA9IHtcbiAgICBjYXJyaWVyOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCg1KSxcbiAgICB9LFxuICAgIGJhdHRsZXNoaXA6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDQpLFxuICAgIH0sXG4gICAgZGVzdHJveWVyOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCgzKSxcbiAgICB9LFxuICAgIHN1Yjoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoMyksXG4gICAgfSxcbiAgICBwYXRyb2xCb2F0OiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCgyKSxcbiAgICB9LFxuICB9O1xuICBoaXRzID0gW107XG4gIG1pc3NlcyA9IFtdO1xuXG4gIHBsYWNlX3NoaXAoc2hpcCwgaW5wdXRfY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLnNoaXBzW3NoaXBdLnBvc2l0aW9uID0gaW5wdXRfY29vcmRpbmF0ZXM7XG4gIH1cbiAgI21pc3NfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLm1pc3NlcywgaW5wdXRfY29vcmRpbmF0ZV0uc29ydCgpO1xuICB9XG4gICNoaXRfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmhpdHMsIGlucHV0X2Nvb3JkaW5hdGVdLnNvcnQoKTtcbiAgfVxuICByZWNlaXZlX2F0dGFjayhpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgbGV0IG1pc3MgPSB0cnVlO1xuICAgIGZvciAobGV0IHNoaXAgaW4gdGhpcy5zaGlwcykge1xuICAgICAgY29uc3QgV0FTX0hJVCA9IHRoaXMuc2hpcHNbc2hpcF0ucG9zaXRpb24uaW5jbHVkZXMoaW5wdXRfY29vcmRpbmF0ZSk7XG4gICAgICBpZiAoV0FTX0hJVCkge1xuICAgICAgICB0aGlzLmhpdHMgPSB0aGlzLiNoaXRfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKTtcbiAgICAgICAgY29uc3QgSElUX0lOREVYID0gdGhpcy5zaGlwc1tzaGlwXS5wb3NpdGlvbi5pbmRleE9mKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgICAgICB0aGlzLnNoaXBzW3NoaXBdLnNoaXAuaGl0KEhJVF9JTkRFWCk7XG4gICAgICAgIG1pc3MgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1pc3MpIHtcbiAgICAgIHRoaXMubWlzc2VzID0gdGhpcy4jbWlzc19yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgIH1cbiAgfVxuICBhbGxfc3VuaygpIHtcbiAgICBsZXQgaXNfYWxsX3N1bmsgPSB0cnVlO1xuICAgIGZvciAobGV0IHNoaXAgaW4gdGhpcy5zaGlwcykge1xuICAgICAgY29uc3QgYWxsX3N1bmtfY2FsbCA9IHRoaXMuc2hpcHNbc2hpcF0uc2hpcC5pc19zdW5rKCk7XG4gICAgICBpZiAoYWxsX3N1bmtfY2FsbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaXNfYWxsX3N1bmsgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc19hbGxfc3VuaztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IocGxheWVyKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gIH1cbiAgbW92ZXMgPSBbXTtcbiAgcmVtYWluaW5nX21vdmVzID0gW107XG5cbiAgI3JlbWFpbmluZ19tb3Zlc19yZWR1Y2VyKGNvb3JkaW5hdGUpIHtcbiAgICB0aGlzLnJlbWFpbmluZ19tb3ZlcyA9IFsuLi50aGlzLnJlbWFpbmluZ19tb3ZlcywgY29vcmRpbmF0ZV07XG4gIH1cbiAgI2ZpbGxfcmVtYWluaW5nX21vdmVzID0gKCgpID0+IHtcbiAgICBjb25zdCBMRVRURVJTID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnLCAnaScsICdqJ107XG4gICAgTEVUVEVSUy5tYXAoKGxldHRlcikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIHRoaXMuI3JlbWFpbmluZ19tb3Zlc19yZWR1Y2VyKGAke2xldHRlcn0ke2l9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pKCk7XG4gICNhaV9tb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ19tb3Zlc1tcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucmVtYWluaW5nX21vdmVzLmxlbmd0aClcbiAgICBdO1xuICB9XG4gICNmaWx0ZXJfcmVtYWluaW5nX21vdmVzKGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBSRU1BSU5JTkdfTU9WRVNfQ09QWSA9IFsuLi50aGlzLnJlbWFpbmluZ19tb3Zlc107XG4gICAgY29uc3QgUkVNQUlOSU5HID0gUkVNQUlOSU5HX01PVkVTX0NPUFkuZmlsdGVyKChyZW1haW5pbmdfbW92ZSkgPT4ge1xuICAgICAgcmV0dXJuIHJlbWFpbmluZ19tb3ZlICE9PSBjb29yZGluYXRlO1xuICAgIH0pO1xuICAgIHJldHVybiBSRU1BSU5JTkc7XG4gIH1cbiAgI2F0dGFja19yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMubW92ZXMsIGlucHV0X2Nvb3JkaW5hdGVdO1xuICB9XG4gIGFpX2F0dGFjayhib2FyZCkge1xuICAgIGlmICh0aGlzLnBsYXllciAhPT0gJ2FpJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGF5ZXIgbmVlZHMgdG8gYmUgQUknKTtcbiAgICB9XG4gICAgY29uc3QgQ09PUkRJTkFURSA9IHRoaXMuI2FpX21vdmUoKTtcbiAgICB0aGlzLnJlbWFpbmluZ19tb3ZlcyA9IHRoaXMuI2ZpbHRlcl9yZW1haW5pbmdfbW92ZXMoQ09PUkRJTkFURSk7XG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMuI2F0dGFja19yZWR1Y2VyKENPT1JESU5BVEUpO1xuICAgIGJvYXJkLnJlY2VpdmVfYXR0YWNrKENPT1JESU5BVEUpO1xuICAgIHJldHVybiBDT09SRElOQVRFO1xuICB9XG4gIGh1bWFuX2F0dGFjayhib2FyZCwgY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLnBsYXllciAhPT0gJ2h1bWFuJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGF5ZXIgbmVlZHMgdG8gYmUgYSBodW1hbicpO1xuICAgIH1cbiAgICBjb25zdCBGSUxURVJFRF9NT1ZFUyA9IHRoaXMuI2ZpbHRlcl9yZW1haW5pbmdfbW92ZXMoY29vcmRpbmF0ZSk7XG4gICAgdGhpcy5yZW1haW5pbmdfbW92ZXMgPSBGSUxURVJFRF9NT1ZFUztcbiAgICB0aGlzLm1vdmVzID0gdGhpcy4jYXR0YWNrX3JlZHVjZXIoY29vcmRpbmF0ZSk7XG4gICAgYm9hcmQucmVjZWl2ZV9hdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmhpdHMgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKGZhbHNlKTtcbiAgfVxuXG4gICNoaXRfcmVkdWNlcihoaXRzX2FycmF5LCBwb3NpdGlvbl9oaXQpIHtcbiAgICBjb25zdCBISVRTID0gWy4uLmhpdHNfYXJyYXldO1xuICAgIEhJVFNbcG9zaXRpb25faGl0XSA9IHRydWU7XG4gICAgcmV0dXJuIEhJVFM7XG4gIH1cbiAgaGl0KHBvc2l0aW9uX2hpdCkge1xuICAgIHRoaXMuaGl0cyA9IHRoaXMuI2hpdF9yZWR1Y2VyKHRoaXMuaGl0cywgcG9zaXRpb25faGl0KTtcbiAgfVxuICBpc19zdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhpdHMuZXZlcnkoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gdHJ1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGdhbWVsb29wIGZyb20gJy4vZ2FtZS9nYW1lX2xvb3AuanMnO1xuaW1wb3J0IGhvbWVwYWdlIGZyb20gJy4vY29tcG9uZW50cy91aS9ob21lcGFnZS9ob21lcGFnZS5qcyc7XG5cbmNvbnN0IEdBTUUgPSBnYW1lbG9vcCgpO1xuaG9tZXBhZ2UoKTtcblxuZXhwb3J0IHsgR0FNRSB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1pbi13aWR0aDogNzBlbTtcXG59XFxuXFxuI2dhbWVfYm9hcmRzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLCAxZnIpO1xcbiAgaGVpZ2h0OiA1MGVtO1xcbiAgbWluLXdpZHRoOiA3MGVtO1xcbn1cXG5cXG4uZ2FtZV9ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMzBlbTtcXG4gIHdpZHRoOiAzMGVtO1xcbn1cXG5cXG4uZ2FtZV9ib2FyZF90aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4ucGxheWVyX2JvYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZTYxMTI7XFxufVxcblxcbi5haV9ib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWM5NzFiO1xcbiAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG4uYWlfYm9hcmQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuI3BsYXllcl9ib2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwZW07XFxuICBsZWZ0OiAyZW07XFxufVxcblxcbiNhaV9ib2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwZW07XFxuICByaWdodDogMmVtO1xcbn1cXG5cXG4ucGxhY2VkX3NoaXBfdGlsZSB7XFxuICBiYWNrZ3JvdW5kOiAjOGI3YjE1OWI7XFxufVxcblxcbi5wbGF5ZXJfaGl0IHtcXG4gIGJhY2tncm91bmQ6ICM4NjNkM2Q7XFxufVxcblxcbi5haV9oaXQge1xcbiAgYmFja2dyb3VuZDogcmdiKDE5NCwgNDYsIDQ2KTtcXG59XFxuXFxuLnBsYXllcl9taXNzIHtcXG4gIGJhY2tncm91bmQ6ICMzZDNiODA7XFxufVxcblxcbi5haV9taXNzIHtcXG4gIGJhY2tncm91bmQ6IHJnYig2NiwgNjYsIDIxOCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWluLXdpZHRoOiA3MGVtO1xcbn1cXG5cXG4jZ2FtZV9ib2FyZHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNTAsIDFmcik7XFxuICBoZWlnaHQ6IDUwZW07XFxuICBtaW4td2lkdGg6IDcwZW07XFxufVxcblxcbi5nYW1lX2JvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiAzMGVtO1xcbiAgd2lkdGg6IDMwZW07XFxufVxcblxcbi5nYW1lX2JvYXJkX3RpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5wbGF5ZXJfYm9hcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzZlNjExMjtcXG59XFxuXFxuLmFpX2JvYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbi5haV9ib2FyZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjODRmZjE3O1xcbn1cXG5cXG4jcGxheWVyX2JvYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBlbTtcXG4gIGxlZnQ6IDJlbTtcXG59XFxuXFxuI2FpX2JvYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBlbTtcXG4gIHJpZ2h0OiAyZW07XFxufVxcblxcbi5wbGFjZWRfc2hpcF90aWxlIHtcXG4gIGJhY2tncm91bmQ6ICM4YjdiMTU5YjtcXG59XFxuXFxuLnBsYXllcl9oaXQge1xcbiAgYmFja2dyb3VuZDogIzg2M2QzZDtcXG59XFxuXFxuLmFpX2hpdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTk0LCA0NiwgNDYpO1xcbn1cXG5cXG4ucGxheWVyX21pc3Mge1xcbiAgYmFja2dyb3VuZDogIzNkM2I4MDtcXG59XFxuXFxuLmFpX21pc3Mge1xcbiAgYmFja2dyb3VuZDogcmdiKDY2LCA2NiwgMjE4KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1vcGFjaXR5LTAwOiAxO1xcbiAgLS1vcGFjaXR5LTA1OiAwLjk4O1xcbiAgLS1vcGFjaXR5LTEwOiAwLjk2O1xcbiAgLS1vcGFjaXR5LTE1OiAwLjk0O1xcbiAgLS1vcGFjaXR5LTIwOiAwLjkyO1xcbiAgLS1vcGFjaXR5LTI1OiAwLjk7XFxuICAtLW9wYWNpdHktMzA6IDAuODg7XFxuICAtLW9wYWNpdHktMzU6IDAuODY7XFxuICAtLW9wYWNpdHktNDA6IDAuODQ7XFxuICAtLW9wYWNpdHktNDU6IDAuODI7XFxuICAtLW9wYWNpdHktNTA6IDAuODtcXG4gIC0tb3BhY2l0eS01NTogMC44MjtcXG4gIC0tb3BhY2l0eS02MDogMC44NDtcXG4gIC0tb3BhY2l0eS02NTogMC44NjtcXG4gIC0tb3BhY2l0eS03MDogMC44ODtcXG4gIC0tb3BhY2l0eS03NTogMC45O1xcbiAgLS1vcGFjaXR5LTgwOiAwLjkyO1xcbiAgLS1vcGFjaXR5LTg1OiAwLjk0O1xcbiAgLS1vcGFjaXR5LTkwOiAwLjk2O1xcbiAgLS1vcGFjaXR5LTk1OiAwLjk4O1xcbiAgLS1vcGFjaXR5LTEwMDogMTtcXG59XFxuXFxuQGtleWZyYW1lcyBvcGFjaXR5IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0wMCk7XFxuICB9XFxuXFxuICA1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMDUpO1xcbiAgfVxcblxcbiAgMTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xMCk7XFxuICB9XFxuXFxuICAxNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTE1KTtcXG4gIH1cXG5cXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMjApO1xcbiAgfVxcblxcbiAgMjUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0yNSk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTMwKTtcXG4gIH1cXG5cXG4gIDM1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzUpO1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS00MCk7XFxuICB9XFxuXFxuICA0NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTQ1KTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNTApO1xcbiAgfVxcblxcbiAgNTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS01NSk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTYwKTtcXG4gIH1cXG5cXG4gIDY1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNjUpO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS03MCk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTc1KTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktODApO1xcbiAgfVxcblxcbiAgODUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS04NSk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTkwKTtcXG4gIH1cXG5cXG4gIDk1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktOTUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTAwKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2FuaW1hdG9yLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLW9wYWNpdHktMDA6IDE7XFxuICAtLW9wYWNpdHktMDU6IDAuOTg7XFxuICAtLW9wYWNpdHktMTA6IDAuOTY7XFxuICAtLW9wYWNpdHktMTU6IDAuOTQ7XFxuICAtLW9wYWNpdHktMjA6IDAuOTI7XFxuICAtLW9wYWNpdHktMjU6IDAuOTtcXG4gIC0tb3BhY2l0eS0zMDogMC44ODtcXG4gIC0tb3BhY2l0eS0zNTogMC44NjtcXG4gIC0tb3BhY2l0eS00MDogMC44NDtcXG4gIC0tb3BhY2l0eS00NTogMC44MjtcXG4gIC0tb3BhY2l0eS01MDogMC44O1xcbiAgLS1vcGFjaXR5LTU1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTYwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTY1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTcwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTc1OiAwLjk7XFxuICAtLW9wYWNpdHktODA6IDAuOTI7XFxuICAtLW9wYWNpdHktODU6IDAuOTQ7XFxuICAtLW9wYWNpdHktOTA6IDAuOTY7XFxuICAtLW9wYWNpdHktOTU6IDAuOTg7XFxuICAtLW9wYWNpdHktMTAwOiAxO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTAwKTtcXG4gIH1cXG5cXG4gIDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0wNSk7XFxuICB9XFxuXFxuICAxMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwKTtcXG4gIH1cXG5cXG4gIDE1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTUpO1xcbiAgfVxcblxcbiAgMjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0yMCk7XFxuICB9XFxuXFxuICAyNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTI1KTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzApO1xcbiAgfVxcblxcbiAgMzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zNSk7XFxuICB9XFxuXFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTQwKTtcXG4gIH1cXG5cXG4gIDQ1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDUpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS01MCk7XFxuICB9XFxuXFxuICA1NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTU1KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNjApO1xcbiAgfVxcblxcbiAgNjUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02NSk7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTcwKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzUpO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS04MCk7XFxuICB9XFxuXFxuICA4NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTg1KTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktOTApO1xcbiAgfVxcblxcbiAgOTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05NSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xMDApO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxubWFpbiB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG4jYnNfaGVhZGluZyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0MCwgMWZyKTtcXG4gIGhlaWdodDogNDBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4jc3RhcnRfYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiAxMGVtO1xcbiAgd2lkdGg6IDcwZW07XFxufVxcblxcbi53YXRlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTU3O1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zdGFydF9iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzk3MWI7XFxufVxcblxcbi5zdGFydF90ZXh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzk3MWI7XFxufVxcbi5zdGFydF90ZXh0X2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9nbG9iYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxubWFpbiB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG4jYnNfaGVhZGluZyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0MCwgMWZyKTtcXG4gIGhlaWdodDogNDBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4jc3RhcnRfYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiAxMGVtO1xcbiAgd2lkdGg6IDcwZW07XFxufVxcblxcbi53YXRlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTU3O1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zdGFydF9iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzk3MWI7XFxufVxcblxcbi5zdGFydF90ZXh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzk3MWI7XFxufVxcbi5zdGFydF90ZXh0X2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcHMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2F0ZXIuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0b3IuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaGlwX3RleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5cXG4uc2hpcF9odWxsX291dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaGlwX2h1bGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTU1NTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQyNDI7XFxufVxcblxcbi5zaGlwX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxuICBhbmltYXRpb246IG9wYWNpdHkgMC43NXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubGlnaHRfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjNmM2YzZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDY0NjtcXG59XFxuXFxuLmRhcmtfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBmMGYwZjtcXG59XFxuXFxuLnBlcmlzY29wZV9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnBlcmlzY29wZV9vbiB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnJhZGFyX29mZiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDEwMTU3O1xcbn1cXG5cXG4ucmFkYXJfb24ge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9zaGlwcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vYW5pbWF0b3IuY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmRpc3BsYXk9c3dhcCcpO1xcblxcbi5zaGlwX3RleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5cXG4uc2hpcF9odWxsX291dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaGlwX2h1bGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTU1NTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQyNDI7XFxufVxcblxcbi5zaGlwX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxuICBhbmltYXRpb246IG9wYWNpdHkgMC43NXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubGlnaHRfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjNmM2YzZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDY0NjtcXG59XFxuXFxuLmRhcmtfZ3JheSB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBmMGYwZjtcXG59XFxuXFxuLnBlcmlzY29wZV9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnBlcmlzY29wZV9vbiB7XFxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcXG59XFxuXFxuLnJhZGFyX29mZiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDEwMTU3O1xcbn1cXG5cXG4ucmFkYXJfb24ge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRvci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0td2F0ZXIxOiAjMDEwMTU3O1xcbiAgLS13YXRlcjI6ICMwNjM3NDQ7XFxufVxcblxcbi5zdXJyb3VuZGluZ193YXRlcl9kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzEzOGM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGQwZDYxO1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjJiMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE3NzU7XFxufVxcblxcbi5ncmVlbjEge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIyKTtcXG4gIG9wYWNpdHk6IDYwJTtcXG59XFxuXFxuLmJsdWUxIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxufVxcblxcbi5ibHVlMiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogOTYlO1xcbn1cXG5cXG4uYmx1ZTMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDkyJTtcXG59XFxuXFxuLmJsdWU0IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4OCU7XFxufVxcblxcbi5ibHVlNSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODQlO1xcbn1cXG5cXG4uYmx1ZTYge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuLmJsdWU3IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA3NiU7XFxufVxcbi5ibHVlOCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNzIlO1xcbn1cXG5cXG4uYmx1ZTkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDY4JTtcXG59XFxuXFxuLmJsdWUxMCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNjQlO1xcbn1cXG5cXG4uYmx1ZTEwIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy93YXRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vYW5pbWF0b3IuY3NzJztcXG5cXG46cm9vdCB7XFxuICAtLXdhdGVyMTogIzAxMDE1NztcXG4gIC0td2F0ZXIyOiAjMDYzNzQ0O1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzhjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkMGQ2MTtcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyYjE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTcxNzc1O1xcbn1cXG5cXG4uZ3JlZW4xIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMik7XFxuICBvcGFjaXR5OiA2MCU7XFxufVxcblxcbi5ibHVlMSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbn1cXG5cXG4uYmx1ZTIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDk2JTtcXG59XFxuXFxuLmJsdWUzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA5MiU7XFxufVxcblxcbi5ibHVlNCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODglO1xcbn1cXG5cXG4uYmx1ZTUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDg0JTtcXG59XFxuXFxuLmJsdWU2IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblxcbi5ibHVlNyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNzYlO1xcbn1cXG4uYmx1ZTgge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDcyJTtcXG59XFxuXFxuLmJsdWU5IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA2OCU7XFxufVxcblxcbi5ibHVlMTAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDY0JTtcXG59XFxuXFxuLmJsdWUxMCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TcGFjZStNb25vJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWluLXdpZHRoOiA3MGVtO1xcbn1cXG5cXG4jcGxhY2Vfc2hpcHNfbWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1MCwgMWZyKTtcXG4gIG1pbi13aWR0aDogNzBlbTtcXG4gIGhlaWdodDogNTBlbTtcXG59XFxuXFxuI3BsYWNlX3NoaXBzX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDE1ZW07XFxuICBib3R0b206IDRlbTtcXG4gIGhlaWdodDogNDBlbTtcXG4gIHdpZHRoOiA0MGVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXFxuI2luc3RydWN0aW9uc19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFlbTtcXG4gIGxlZnQ6IDI5ZW07XFxuICB3aWR0aDogMTJlbTtcXG4gIGhlaWdodDogM2VtO1xcbiAgYmFja2dyb3VuZDogI2FhOWY2MTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1ZW07XFxufVxcblxcbiNia2Rfc3BhY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDMuNWVtO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDJweCAjMDAwMDAwO1xcbn1cXG5cXG4jaW5zdHJ1Y3Rpb25zIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4ucGxhY2Vfc2hpcF90aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxufVxcblxcbi5wbGFjZWRfdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTdjYTI5O1xcbiAgYmFja2dyb3VuZDogI2FjOTcxYjtcXG59XFxuXFxuLnBsYWNlX3NoaXBfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kOiAjODRmZjE3O1xcbn1cXG5cXG4uaW52YWxpZF9zaGlwX3BsYWNlbWVudCB7XFxuICBiYWNrZ3JvdW5kOiAjZjAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TcGFjZStNb25vJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgbWluLXdpZHRoOiA3MGVtO1xcbn1cXG5cXG4jcGxhY2Vfc2hpcHNfbWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1MCwgMWZyKTtcXG4gIG1pbi13aWR0aDogNzBlbTtcXG4gIGhlaWdodDogNTBlbTtcXG59XFxuXFxuI3BsYWNlX3NoaXBzX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDE1ZW07XFxuICBib3R0b206IDRlbTtcXG4gIGhlaWdodDogNDBlbTtcXG4gIHdpZHRoOiA0MGVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXFxuI2luc3RydWN0aW9uc19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFlbTtcXG4gIGxlZnQ6IDI5ZW07XFxuICB3aWR0aDogMTJlbTtcXG4gIGhlaWdodDogM2VtO1xcbiAgYmFja2dyb3VuZDogI2FhOWY2MTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1ZW07XFxufVxcblxcbiNia2Rfc3BhY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDMuNWVtO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDJweCAjMDAwMDAwO1xcbn1cXG5cXG4jaW5zdHJ1Y3Rpb25zIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4ucGxhY2Vfc2hpcF90aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxufVxcblxcbi5wbGFjZWRfdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTdjYTI5O1xcbiAgYmFja2dyb3VuZDogI2FjOTcxYjtcXG59XFxuXFxuLnBsYWNlX3NoaXBfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kOiAjODRmZjE3O1xcbn1cXG5cXG4uaW52YWxpZF9zaGlwX3BsYWNlbWVudCB7XFxuICBiYWNrZ3JvdW5kOiAjZjAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvaW5kZXguY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9jc3MvaW5kZXguY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9jc3MvaW5kZXguY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIkNPT1JESU5BVEVTIiwiTEVUVEVSUyIsIk5VTUJFUlMiLCJtYXAiLCJsZXR0ZXIiLCJudW1iZXIiLCJwdXNoIiwiY29sb3JfaGl0c19taXNzZXMiLCJwbGF5ZXIiLCJoaXRzIiwibWlzc2VzIiwiY29vcmRpbmF0ZSIsIlRJTEUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiR0FNRSIsImNvbG9yX3BsYXllcl9zaGlwcyIsIlNISVBTIiwiUkVUVVJOX1NISVBTIiwic2hpcCIsInBvc2l0aW9uIiwiZXZlbnRfbGlzdGVuZXJzIiwiQUlfVElMRVMiLCJBcnJheSIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiQUlfVElMRV9DTElDS19IQU5ETEVSIiwiZXZlbnQiLCJJRCIsInRhcmdldCIsImlkIiwic2xpY2UiLCJBVFRBQ0siLCJQTEFZRVIxX0hJVFMiLCJSRVRVUk5fSElUUyIsIlBMQVlFUjFfTUlTU0VTIiwiUkVUVVJOX01JU1NFUyIsIlBMQVlFUjJfSElUUyIsIlBMQVlFUjJfTUlTU0VTIiwidGlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXJfYmFja2dyb3VuZF90aWxlcyIsIk1BSU4iLCJjcmVhdGVFbGVtZW50IiwiQ0xBU1NFUyIsImkiLCJSQU5ET01fTlVNQkVSIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYXBwZW5kIiwiYm9keSIsInJlbmRlcl9nYW1lYm9hcmRfdGlsZXMiLCJQTEFZRVJfQk9BUkQiLCJBSV9CT0FSRCIsIlBMQVlFUl9CT0FSRF9USUxFIiwiQUlfQk9BUkRfVElMRSIsInJlbmRlcl90aWxlcyIsInJlbmRlcl9nYW1lX2JvYXJkcyIsIkFOSU1BVElPTlMiLCJQRVJJU0NPUEVfU1BJTk5FUiIsIkxFRlRfVElMRSIsIlJJR0hUX1RJTEUiLCJyZW1vdmUiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiUkFEQVJfU1BJTk5FUjEiLCJSQURBUl9TUElOTkVSMiIsIldBVEVSX0FOSU1BVElPTiIsIldBVEVSX1RJTEVTIiwiU1VCX0FOSU1BVElPTiIsInNldEludGVydmFsIiwiQk9BVDEiLCJCT0FUMiIsIldBVEVSIiwiSVRFUkFUT1IiLCJCQVRUTEVTSElQIiwiQiIsIkEiLCJUMSIsIlQyIiwiTCIsIkUiLCJTIiwiSCIsIkkiLCJQIiwiZXpfbG9hZGVyIiwiRVpfVElMRV9DT0xPUklaRVIiLCJjb2xvcl9iYXR0bGVzaGlwX3RpbGVzIiwiQ0FSUklFUiIsIkRFU1RST1lFUiIsIlNVQk1BUklORSIsImNvbG9yX3NoaXBfdGlsZXMiLCJjYXJyaWVyIiwiYmxhY2tfb3V0bGluZSIsImh1bGwiLCJkYXJrX2dyYXkiLCJsaWdodF9ncmF5Iiwic2hpcF9saWdodCIsInN1cnJvdW5kaW5nX3dhdGVyX2RhcmsiLCJzdXJyb3VuZGluZ193YXRlcl9saWdodCIsIkMiLCJWIiwiTiIsIlNJWCIsIk5JTkUiLCJVIiwiTjIiLCJWMiIsIlkiLCJBTEwiLCJpbm5lclRleHQiLCJkZXN0cm95ZXIiLCJzdWJtYXJpbmUiLCJsZWZ0X3BlcmlzY29wZSIsInJpZ2h0X3BlcmlzY29wZSIsIlNUQVJUIiwiY29sb3Jfc3RhcnRfdGlsZXMiLCJhbGwiLCJ0aWxlX2lkIiwiY29sb3Jfd2F0ZXJfdGlsZXMiLCJtaW4iLCJtYXgiLCJ0YXJnZXRfYXJyYXkiLCJpbnB1dF9hcnJheSIsImlucHV0X2NsYXNzIiwicGxhY2Vfc2hpcHMiLCJsaXN0ZW5lcnNfaGFuZGxlcnMiLCJTVEFSVF9CVVRUT04iLCJTVEFSVF9CVVRUT05fRU5URVJfSEFORExFUiIsIlNUQVJUX0JVVFRPTl9CQUNLR1JPVU5EX1RJTEVTIiwiU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMiLCJTVEFSVF9CVVRUT05fTEVBVkVfSEFORExFUiIsIlNUQVJUX0JVVFRPTl9DTElDS19IQU5ETEVSIiwiaW50ZXJ2YWwiLCJJTlRFUlZBTCIsImNsZWFySW50ZXJ2YWwiLCJIRUFESU5HIiwiY2Fycmllcl9lel9sb2FkZXIiLCJPVVRMSU5FIiwiSFVMTCIsIkRBUktfR1JBWSIsIkxJR0hUX0dSQVkiLCJTVVJST1VORElOR19XQVRFUl9EQVJLIiwiZGVzdHJveWVyX2V6X2xvYWRlciIsInMiLCJ0MSIsImEiLCJyIiwidDIiLCJSIiwiaG9tZXBhZ2UiLCJwbGFjZV9haV9zaGlwcyIsImxvZ2ljX2xpc3RlbmVycyIsImN1cnJlbnRfc2hpcF9pbmRleCIsIm9yaWVudGF0aW9uIiwiTEVOR1RIIiwiTUFYUyIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImJhdHRsZXNoaXAiLCJzdWIiLCJwYXRyb2xCb2F0IiwiSU5CT1VORFNfRVZBTFVBVE9SIiwidmFsdWVfdG9fY29tcGFyZSIsImNoYXJDb2RlQXQiLCJNQVgiLCJTUEFDRV9UQUtFTl9FVkFMVUFUT1IiLCJhbGxfdGlsZXMiLCJhcmVfYWxsX3Rha2VuIiwiUExBWUVSMV9TSElQUyIsIlBPU0lUSU9OUyIsIlNVQlNFUVVFTlRfVElMRVMiLCJMRVRURVJfQ0hBUl9DT0RFIiwiTlVNQkVSIiwiU1RPUF9BVCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIkNPTE9SX1RJTEVTIiwiY29vcmRpbmF0ZXMiLCJNT1VTRV9FTlRFUl9IQU5ETEVSIiwiSU5CT1VORFMiLCJBTExfQ09PUkRJTkFURVMiLCJBUkVfU1VCU0VRVUVOVF9TUEFDRVNfRlJFRSIsIk1PVVNFX0xFQVZFX0hBTkRMRVIiLCJIT1ZFUkVEX1RJTEVTIiwiTU9VU0VfQ0xJQ0tfSEFORExFUiIsIkNVUlJFTlRfU0hJUCIsIlBMQUNFX1NISVAiLCJTUEFDRV9CQVJfSEFORExFUiIsIktFWSIsImtleSIsIlRJTEVTIiwiSU5GTyIsIkFMTF9USUxFUyIsIlRPR0dMRV9PUklFTlRBVElPTiIsIk9ORV9SQU5ET00iLCJSQU5ET01fTEVUVEVSIiwiR0VUX01PVkUiLCJSQU5ET01fQ09PUkRJTkFURSIsImNyZWF0ZV9jb29yZGluYXRlcyIsIlVOSVFVRV9NT1ZFIiwidW5pcXVlIiwiTU9WRSIsImZpbGxfYWlfYm9hcmQiLCJTSElQX1BPU0lUSU9OUyIsIlBMQUNFX1NISVBTX0NPTlRBSU5FUiIsIklOU1RSVUNUSU9OU19DT05UQUlORVIiLCJJTlNUUlVDVElPTlMiLCJTUEFDRV9LRVkiLCJHYW1lYm9hcmQiLCJQbGF5ZXIiLCJnYW1lbG9vcCIsIlBMQVlFUjEiLCJQTEFZRVIyIiwicGxheWVyMV9nYW1lYm9hcmQiLCJwbGF5ZXIyX2dhbWVib2FyZCIsIlJFU0VUIiwic2hpcHMiLCJib2FyZCIsInBvc2l0aW9ucyIsInBsYWNlX3NoaXAiLCJodW1hbl9hdHRhY2siLCJhaV9hdHRhY2siLCJTaGlwIiwiaW5wdXRfY29vcmRpbmF0ZXMiLCJpbnB1dF9jb29yZGluYXRlIiwibWlzcyIsIldBU19ISVQiLCJISVRfSU5ERVgiLCJpbmRleE9mIiwiaGl0IiwiaXNfYWxsX3N1bmsiLCJhbGxfc3Vua19jYWxsIiwiaXNfc3VuayIsInNvcnQiLCJFcnJvciIsIkNPT1JESU5BVEUiLCJyZW1haW5pbmdfbW92ZXMiLCJtb3ZlcyIsInJlY2VpdmVfYXR0YWNrIiwiRklMVEVSRURfTU9WRVMiLCJsZW5ndGgiLCJSRU1BSU5JTkdfTU9WRVNfQ09QWSIsIlJFTUFJTklORyIsImZpbHRlciIsInJlbWFpbmluZ19tb3ZlIiwiZmlsbCIsInBvc2l0aW9uX2hpdCIsImV2ZXJ5IiwiaGl0c19hcnJheSIsIkhJVFMiXSwic291cmNlUm9vdCI6IiJ9