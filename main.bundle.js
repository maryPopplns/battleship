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

function event_listeners() {
  var AI_TILES = Array.from(document.getElementsByClassName('ai_board'));

  var AI_TILE_CLICK_HANDLER = function AI_TILE_CLICK_HANDLER(event) {
    var ID = event.target.id.slice(3);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.ATTACK(ID); // todo render the colors for hit spaces and missed
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

  return {
    RESET: RESET,
    RETURN_SHIPS: RETURN_SHIPS,
    PLACE_SHIP: PLACE_SHIP,
    ATTACK: ATTACK
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  min-width: 70em;\n}\n\n#game_boards {\n  position: absolute;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  height: 50em;\n  min-width: 70em;\n}\n\n.game_board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 30em;\n  width: 30em;\n}\n\n.game_board_tile {\n  border: 1px solid white;\n}\n\n.player_board {\n  border: 1px solid #6e6112;\n}\n\n.ai_board {\n  border: 1px solid #ac971b;\n  cursor: none;\n}\n\n.ai_board:hover {\n  background: #84ff17;\n}\n\n#player_board {\n  position: absolute;\n  top: 10em;\n  left: 2em;\n}\n\n#ai_board {\n  position: absolute;\n  top: 10em;\n  right: 2em;\n}\n\n.placed_ship_tile {\n  background: #8b7b159b;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/game_boards/css/index.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["body {\n  min-width: 70em;\n}\n\n#game_boards {\n  position: absolute;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  height: 50em;\n  min-width: 70em;\n}\n\n.game_board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 30em;\n  width: 30em;\n}\n\n.game_board_tile {\n  border: 1px solid white;\n}\n\n.player_board {\n  border: 1px solid #6e6112;\n}\n\n.ai_board {\n  border: 1px solid #ac971b;\n  cursor: none;\n}\n\n.ai_board:hover {\n  background: #84ff17;\n}\n\n#player_board {\n  position: absolute;\n  top: 10em;\n  left: 2em;\n}\n\n#ai_board {\n  position: absolute;\n  top: 10em;\n  right: 2em;\n}\n\n.placed_ship_tile {\n  background: #8b7b159b;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxXQUFXLEdBQUcsRUFBcEI7QUFDQSxJQUFNQyxPQUFPLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFBOEMsR0FBOUMsQ0FBaEI7QUFDQSxJQUFNQyxPQUFPLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUFoQjtBQUNBRCxPQUFPLENBQUNFLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVk7QUFDdEJGLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNFLE1BQUQsRUFBWTtBQUN0QkwsSUFBQUEsV0FBVyxDQUFDTSxJQUFaLFdBQW9CRixNQUFwQixTQUE2QkMsTUFBN0I7QUFDRCxHQUZEO0FBR0QsQ0FKRDtBQU1BLGlFQUFlTCxXQUFmOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUVlLFNBQVNRLGtCQUFULEdBQThCO0FBQzNDLE1BQU1DLEtBQUssR0FBR0Ysd0RBQUEsQ0FBa0IsQ0FBbEIsQ0FBZDs7QUFDQSxPQUFLLElBQUlJLElBQVQsSUFBaUJGLEtBQWpCLEVBQXdCO0FBQ3RCLFFBQU1ULFdBQVcsR0FBR1MsS0FBSyxDQUFDRSxJQUFELENBQUwsQ0FBWUMsUUFBaEM7QUFDQVosSUFBQUEsV0FBVyxDQUFDRyxHQUFaLENBQWdCLFVBQUNVLFVBQUQsRUFBZ0I7QUFDOUIsVUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsa0JBQWtDSCxVQUFsQyxFQUFiO0FBQ0FDLE1BQUFBLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxHQUFmLENBQW1CLGtCQUFuQjtBQUNELEtBSEQ7QUFJRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUNYRDtBQUVlLFNBQVNDLGVBQVQsR0FBMkI7QUFDeEMsTUFBTUMsUUFBUSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV1AsUUFBUSxDQUFDUSxzQkFBVCxDQUFnQyxVQUFoQyxDQUFYLENBQWpCOztBQUNBLE1BQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZDLFFBQU1DLEVBQUUsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEVBQWIsQ0FBZ0JDLEtBQWhCLENBQXNCLENBQXRCLENBQVg7QUFDQXRCLElBQUFBLGtEQUFBLENBQVltQixFQUFaLEVBRnVDLENBSXZDO0FBQ0QsR0FMRDs7QUFPQU4sRUFBQUEsUUFBUSxDQUFDakIsR0FBVCxDQUFhLFVBQUM0QixJQUFELEVBQVU7QUFDckJBLElBQUFBLElBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0JSLHFCQUEvQjtBQUNELEdBRkQ7QUFHRDs7Ozs7Ozs7Ozs7Ozs7QUNkYyxTQUFTUyx1QkFBVCxHQUFtQztBQUNoRCxNQUFNQyxJQUFJLEdBQUduQixRQUFRLENBQUNvQixhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FDZCxPQURjLEVBRWQsT0FGYyxFQUdkLE9BSGMsRUFJZCxPQUpjLEVBS2QsT0FMYyxFQU1kLE9BTmMsRUFPZCxPQVBjLEVBUWQsT0FSYyxFQVNkLE9BVGMsRUFVZCxRQVZjLEVBV2QsUUFYYyxDQUFoQjtBQWFBRixFQUFBQSxJQUFJLENBQUNOLEVBQUwsR0FBVSxhQUFWOztBQUVBLE9BQUssSUFBSVMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxJQUFwQixFQUEwQkEsQ0FBQyxFQUEzQixFQUErQjtBQUM3QixRQUFNQyxhQUFhLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBdEI7QUFDQSxRQUFNM0IsSUFBSSxHQUFHQyxRQUFRLENBQUNvQixhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDQXJCLElBQUFBLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxHQUFmLENBQW1CLHVCQUFuQjtBQUNBSixJQUFBQSxJQUFJLENBQUNHLFNBQUwsQ0FBZUMsR0FBZixDQUFtQmtCLE9BQU8sQ0FBQ0UsYUFBRCxDQUExQjtBQUNBSixJQUFBQSxJQUFJLENBQUNRLE1BQUwsQ0FBWTVCLElBQVo7QUFDRDs7QUFFREMsRUFBQUEsUUFBUSxDQUFDNEIsSUFBVCxDQUFjRCxNQUFkLENBQXFCUixJQUFyQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkQ7QUFFZSxTQUFTVSxzQkFBVCxHQUFrQztBQUMvQyxNQUFNVixJQUFJLEdBQUduQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBYjtBQUNBLE1BQU02QixZQUFZLEdBQUc5QixRQUFRLENBQUNvQixhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0EsTUFBTVcsUUFBUSxHQUFHL0IsUUFBUSxDQUFDb0IsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUVBVSxFQUFBQSxZQUFZLENBQUM1QixTQUFiLENBQXVCQyxHQUF2QixDQUEyQixZQUEzQjtBQUNBNEIsRUFBQUEsUUFBUSxDQUFDN0IsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsWUFBdkI7QUFDQTJCLEVBQUFBLFlBQVksQ0FBQ2pCLEVBQWIsR0FBa0IsY0FBbEI7QUFDQWtCLEVBQUFBLFFBQVEsQ0FBQ2xCLEVBQVQsR0FBYyxVQUFkOztBQUNBLE9BQUssSUFBSVMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxHQUFwQixFQUF5QkEsQ0FBQyxFQUExQixFQUE4QjtBQUM1QixRQUFNVSxpQkFBaUIsR0FBR2hDLFFBQVEsQ0FBQ29CLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBMUI7QUFDQSxRQUFNYSxhQUFhLEdBQUdqQyxRQUFRLENBQUNvQixhQUFULENBQXVCLEtBQXZCLENBQXRCO0FBRUFZLElBQUFBLGlCQUFpQixDQUFDOUIsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLGlCQUFoQztBQUNBNkIsSUFBQUEsaUJBQWlCLENBQUM5QixTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsY0FBaEM7QUFDQTZCLElBQUFBLGlCQUFpQixDQUFDbkIsRUFBbEIsb0JBQWlDNUIsK0RBQVcsQ0FBQ3FDLENBQUQsQ0FBNUM7QUFDQVcsSUFBQUEsYUFBYSxDQUFDL0IsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsaUJBQTVCO0FBQ0E4QixJQUFBQSxhQUFhLENBQUMvQixTQUFkLENBQXdCQyxHQUF4QixDQUE0QixVQUE1QjtBQUNBOEIsSUFBQUEsYUFBYSxDQUFDcEIsRUFBZCxnQkFBeUI1QiwrREFBVyxDQUFDcUMsQ0FBRCxDQUFwQztBQUVBUSxJQUFBQSxZQUFZLENBQUNILE1BQWIsQ0FBb0JLLGlCQUFwQjtBQUNBRCxJQUFBQSxRQUFRLENBQUNKLE1BQVQsQ0FBZ0JNLGFBQWhCO0FBQ0Q7O0FBRURkLEVBQUFBLElBQUksQ0FBQ1EsTUFBTCxDQUFZRyxZQUFaO0FBQ0FYLEVBQUFBLElBQUksQ0FBQ1EsTUFBTCxDQUFZSSxRQUFaO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkQ7QUFDQTtBQUVlLFNBQVNHLFlBQVQsR0FBd0I7QUFDckNoQixFQUFBQSx1RUFBdUI7QUFDdkJXLEVBQUFBLHNFQUFzQjtBQUN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUNBO0FBQ0E7QUFFZSxTQUFTTSxrQkFBVCxHQUE4QjtBQUMzQ0QsRUFBQUEsb0VBQVk7QUFDWnpDLEVBQUFBLDBFQUFrQjtBQUNsQlcsRUFBQUEsdUVBQWU7QUFDaEI7Ozs7Ozs7Ozs7Ozs7O0FDUkQsSUFBTWdDLFVBQVUsR0FBSSxZQUFNO0FBQ3hCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixRQUFNQyxTQUFTLEdBQUd0QyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsR0FBeEIsQ0FBbEI7QUFDQSxRQUFNc0MsVUFBVSxHQUFHdkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLEdBQXhCLENBQW5CO0FBQ0FxQyxJQUFBQSxTQUFTLENBQUNwQyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixlQUF4QjtBQUNBb0MsSUFBQUEsVUFBVSxDQUFDckMsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsY0FBekI7QUFDQW1DLElBQUFBLFNBQVMsQ0FBQ3BDLFNBQVYsQ0FBb0JzQyxNQUFwQixDQUEyQixPQUEzQjtBQUNBRCxJQUFBQSxVQUFVLENBQUNyQyxTQUFYLENBQXFCc0MsTUFBckIsQ0FBNEIsT0FBNUI7O0FBQ0EsUUFBSUYsU0FBUyxDQUFDcEMsU0FBVixDQUFvQnVDLEtBQXBCLENBQTBCQyxRQUExQixDQUFtQyxJQUFuQyxDQUFKLEVBQThDO0FBQzVDSixNQUFBQSxTQUFTLENBQUNwQyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixlQUF4QjtBQUNBb0MsTUFBQUEsVUFBVSxDQUFDckMsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsY0FBekI7QUFDQW1DLE1BQUFBLFNBQVMsQ0FBQ3BDLFNBQVYsQ0FBb0JzQyxNQUFwQixDQUEyQixjQUEzQjtBQUNBRCxNQUFBQSxVQUFVLENBQUNyQyxTQUFYLENBQXFCc0MsTUFBckIsQ0FBNEIsZUFBNUI7QUFDRCxLQUxELE1BS087QUFDTEYsTUFBQUEsU0FBUyxDQUFDcEMsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsY0FBeEI7QUFDQW9DLE1BQUFBLFVBQVUsQ0FBQ3JDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLGVBQXpCO0FBQ0FtQyxNQUFBQSxTQUFTLENBQUNwQyxTQUFWLENBQW9Cc0MsTUFBcEIsQ0FBMkIsZUFBM0I7QUFDQUQsTUFBQUEsVUFBVSxDQUFDckMsU0FBWCxDQUFxQnNDLE1BQXJCLENBQTRCLGNBQTVCO0FBQ0Q7QUFDRixHQWxCRDs7QUFvQkEsTUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFFBQU1MLFNBQVMsR0FBR3RDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixHQUF4QixDQUFsQjtBQUNBLFFBQU1zQyxVQUFVLEdBQUd2QyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsR0FBeEIsQ0FBbkI7QUFDQXFDLElBQUFBLFNBQVMsQ0FBQ3BDLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFdBQXhCO0FBQ0FvQyxJQUFBQSxVQUFVLENBQUNyQyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixXQUF6QjtBQUNBbUMsSUFBQUEsU0FBUyxDQUFDcEMsU0FBVixDQUFvQnNDLE1BQXBCLENBQTJCLE9BQTNCO0FBQ0FELElBQUFBLFVBQVUsQ0FBQ3JDLFNBQVgsQ0FBcUJzQyxNQUFyQixDQUE0QixPQUE1Qjs7QUFDQSxRQUFJRixTQUFTLENBQUNwQyxTQUFWLENBQW9CdUMsS0FBcEIsQ0FBMEJDLFFBQTFCLENBQW1DLElBQW5DLENBQUosRUFBOEM7QUFDNUNKLE1BQUFBLFNBQVMsQ0FBQ3BDLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFdBQXhCO0FBQ0FvQyxNQUFBQSxVQUFVLENBQUNyQyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixXQUF6QjtBQUNBbUMsTUFBQUEsU0FBUyxDQUFDcEMsU0FBVixDQUFvQnNDLE1BQXBCLENBQTJCLFVBQTNCO0FBQ0FELE1BQUFBLFVBQVUsQ0FBQ3JDLFNBQVgsQ0FBcUJzQyxNQUFyQixDQUE0QixVQUE1QjtBQUNELEtBTEQsTUFLTztBQUNMRixNQUFBQSxTQUFTLENBQUNwQyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixVQUF4QjtBQUNBb0MsTUFBQUEsVUFBVSxDQUFDckMsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsVUFBekI7QUFDQW1DLE1BQUFBLFNBQVMsQ0FBQ3BDLFNBQVYsQ0FBb0JzQyxNQUFwQixDQUEyQixXQUEzQjtBQUNBRCxNQUFBQSxVQUFVLENBQUNyQyxTQUFYLENBQXFCc0MsTUFBckIsQ0FBNEIsV0FBNUI7QUFDRDtBQUNGLEdBbEJEOztBQW9CQSxNQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBTU4sU0FBUyxHQUFHdEMsUUFBUSxDQUFDQyxjQUFULENBQXdCLElBQXhCLENBQWxCO0FBQ0EsUUFBTXNDLFVBQVUsR0FBR3ZDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixDQUFuQjtBQUNBcUMsSUFBQUEsU0FBUyxDQUFDcEMsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsV0FBeEI7QUFDQW9DLElBQUFBLFVBQVUsQ0FBQ3JDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFdBQXpCO0FBQ0FtQyxJQUFBQSxTQUFTLENBQUNwQyxTQUFWLENBQW9Cc0MsTUFBcEIsQ0FBMkIsT0FBM0I7QUFDQUQsSUFBQUEsVUFBVSxDQUFDckMsU0FBWCxDQUFxQnNDLE1BQXJCLENBQTRCLE9BQTVCOztBQUNBLFFBQUlGLFNBQVMsQ0FBQ3BDLFNBQVYsQ0FBb0J1QyxLQUFwQixDQUEwQkMsUUFBMUIsQ0FBbUMsSUFBbkMsQ0FBSixFQUE4QztBQUM1Q0osTUFBQUEsU0FBUyxDQUFDcEMsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsV0FBeEI7QUFDQW9DLE1BQUFBLFVBQVUsQ0FBQ3JDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFdBQXpCO0FBQ0FtQyxNQUFBQSxTQUFTLENBQUNwQyxTQUFWLENBQW9Cc0MsTUFBcEIsQ0FBMkIsVUFBM0I7QUFDQUQsTUFBQUEsVUFBVSxDQUFDckMsU0FBWCxDQUFxQnNDLE1BQXJCLENBQTRCLFVBQTVCO0FBQ0QsS0FMRCxNQUtPO0FBQ0xGLE1BQUFBLFNBQVMsQ0FBQ3BDLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQXhCO0FBQ0FvQyxNQUFBQSxVQUFVLENBQUNyQyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixVQUF6QjtBQUNBbUMsTUFBQUEsU0FBUyxDQUFDcEMsU0FBVixDQUFvQnNDLE1BQXBCLENBQTJCLFdBQTNCO0FBQ0FELE1BQUFBLFVBQVUsQ0FBQ3JDLFNBQVgsQ0FBcUJzQyxNQUFyQixDQUE0QixXQUE1QjtBQUNEO0FBQ0YsR0FsQkQ7O0FBb0JBLE1BQU1LLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFNQyxXQUFXLEdBQUd4QyxLQUFLLENBQUNDLElBQU4sQ0FBV1AsUUFBUSxDQUFDUSxzQkFBVCxDQUFnQyxPQUFoQyxDQUFYLENBQXBCO0FBQ0EsUUFBTWEsT0FBTyxHQUFHLENBQ2QsT0FEYyxFQUVkLE9BRmMsRUFHZCxPQUhjLEVBSWQsT0FKYyxFQUtkLE9BTGMsRUFNZCxPQU5jLEVBT2QsT0FQYyxFQVFkLE9BUmMsRUFTZCxPQVRjLEVBVWQsUUFWYyxFQVdkLFFBWGMsQ0FBaEI7QUFhQXlCLElBQUFBLFdBQVcsQ0FBQzFELEdBQVosQ0FBZ0IsVUFBQzRCLElBQUQsRUFBVTtBQUN4QixVQUFNTyxhQUFhLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBdEI7QUFDQVYsTUFBQUEsSUFBSSxDQUFDZCxTQUFMLGtDQUF5Q21CLE9BQU8sQ0FBQ0UsYUFBRCxDQUFoRDtBQUNELEtBSEQ7QUFJRCxHQW5CRDs7QUFxQkEsTUFBTXdCLGFBQWEsR0FBR0MsV0FBVyxDQUFDWCxpQkFBRCxFQUFvQixJQUFwQixDQUFqQztBQUNBLE1BQU1ZLEtBQUssR0FBR0QsV0FBVyxDQUFDTCxjQUFELEVBQWlCLElBQWpCLENBQXpCO0FBQ0EsTUFBTU8sS0FBSyxHQUFHRixXQUFXLENBQUNKLGNBQUQsRUFBaUIsSUFBakIsQ0FBekI7QUFDQSxNQUFNTyxLQUFLLEdBQUdILFdBQVcsQ0FBQ0gsZUFBRCxFQUFrQixJQUFsQixDQUF6QjtBQUVBLFNBQU87QUFBRUUsSUFBQUEsYUFBYSxFQUFiQSxhQUFGO0FBQWlCRSxJQUFBQSxLQUFLLEVBQUxBLEtBQWpCO0FBQXdCQyxJQUFBQSxLQUFLLEVBQUxBLEtBQXhCO0FBQStCQyxJQUFBQSxLQUFLLEVBQUxBO0FBQS9CLEdBQVA7QUFDRCxDQXhGa0IsRUFBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQSxJQUFNRSxVQUFVLEdBQUc7QUFDakJDLEVBQUFBLENBQUMsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxHQUFwQyxFQUF5QyxHQUF6QyxDQURjO0FBRWpCQyxFQUFBQSxDQUFDLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFBOEMsR0FBOUMsQ0FGYztBQUdqQkMsRUFBQUEsRUFBRSxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDLEdBQTlDLEVBQW1ELEdBQW5ELEVBQXdELEdBQXhELENBSGE7QUFJakJDLEVBQUFBLEVBQUUsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxHQUFwQyxFQUF5QyxHQUF6QyxFQUE4QyxHQUE5QyxFQUFtRCxHQUFuRCxFQUF3RCxHQUF4RCxDQUphO0FBS2pCQyxFQUFBQSxDQUFDLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FMYztBQU1qQkMsRUFBQUEsQ0FBQyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBTmM7QUFPakJDLEVBQUFBLENBQUMsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixDQVBjO0FBUWpCQyxFQUFBQSxDQUFDLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFBOEMsR0FBOUMsRUFBbUQsR0FBbkQsRUFBd0QsR0FBeEQsQ0FSYztBQVNqQkMsRUFBQUEsQ0FBQyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDLEdBQTlDLENBVGM7QUFVakJDLEVBQUFBLENBQUMsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQjtBQVZjLENBQW5COztBQWFBLENBQUMsU0FBU0MsU0FBVCxHQUFxQjtBQUNwQixNQUFNVixDQUFDLEdBQUdELFVBQVUsQ0FBQ0MsQ0FBckI7QUFDQUYsRUFBQUEscURBQVEsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTRSxDQUFULENBQVI7QUFDQUYsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXRSxDQUFYLENBQVI7QUFDQUYsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXRSxDQUFYLENBQVI7QUFFQSxNQUFNQyxDQUFDLEdBQUdGLFVBQVUsQ0FBQ0UsQ0FBckI7QUFDQUgsRUFBQUEscURBQVEsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTRyxDQUFULENBQVI7QUFDQUgsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXRyxDQUFYLENBQVI7QUFFQSxNQUFNQyxFQUFFLEdBQUdILFVBQVUsQ0FBQ0csRUFBdEI7QUFDQUosRUFBQUEscURBQVEsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTSSxFQUFULENBQVI7QUFFQSxNQUFNQyxFQUFFLEdBQUdKLFVBQVUsQ0FBQ0ksRUFBdEI7QUFDQUwsRUFBQUEscURBQVEsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTSyxFQUFULENBQVI7QUFFQSxNQUFNQyxDQUFDLEdBQUdMLFVBQVUsQ0FBQ0ssQ0FBckI7QUFDQU4sRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXTSxDQUFYLENBQVI7QUFFQSxNQUFNQyxDQUFDLEdBQUdOLFVBQVUsQ0FBQ00sQ0FBckI7QUFDQVAsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXTyxDQUFYLENBQVI7QUFDQVAsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXTyxDQUFYLENBQVI7QUFDQVAsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXTyxDQUFYLENBQVI7QUFFQSxNQUFNQyxDQUFDLEdBQUdQLFVBQVUsQ0FBQ08sQ0FBckI7QUFDQVIsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXUSxDQUFYLENBQVI7QUFDQVIsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXUSxDQUFYLENBQVI7QUFDQVIsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXUSxDQUFYLENBQVI7QUFFQSxNQUFNQyxDQUFDLEdBQUdSLFVBQVUsQ0FBQ1EsQ0FBckI7QUFDQVQsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXUyxDQUFYLENBQVI7QUFFQSxNQUFNQyxDQUFDLEdBQUdULFVBQVUsQ0FBQ1MsQ0FBckI7QUFDQVYsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXVSxDQUFYLENBQVI7QUFDQVYsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXVSxDQUFYLENBQVI7QUFFQSxNQUFNQyxDQUFDLEdBQUdWLFVBQVUsQ0FBQ1UsQ0FBckI7QUFDQVgsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXVyxDQUFYLENBQVI7QUFDQVgsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXVyxDQUFYLENBQVI7QUFDRCxDQXZDRDs7QUF5Q0EsaUVBQWVWLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTtBQUVlLFNBQVNhLHNCQUFULEdBQWtDO0FBQy9DLE9BQUssSUFBSTdFLE1BQVQsSUFBbUJnRSw0REFBbkIsRUFBK0I7QUFDN0JZLElBQUFBLDhEQUFpQixDQUFDWiw0REFBVSxDQUFDaEUsTUFBRCxDQUFYLEVBQXFCLE9BQXJCLENBQWpCO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozs7Ozs7OztBQ1BEO0FBQ0E7QUFFZSxTQUFTaUYsZ0JBQVQsR0FBNEI7QUFDekMsR0FBQyxTQUFTQyxPQUFULEdBQW1CO0FBQ2xCTixJQUFBQSw4REFBaUIsQ0FBQ0UsaUVBQUQsRUFBd0IsbUJBQXhCLENBQWpCO0FBQ0FGLElBQUFBLDhEQUFpQixDQUFDRSx3REFBRCxFQUFlLFdBQWYsQ0FBakI7QUFDQUYsSUFBQUEsOERBQWlCLENBQUNFLDZEQUFELEVBQW9CLFdBQXBCLENBQWpCO0FBQ0FGLElBQUFBLDhEQUFpQixDQUFDRSw4REFBRCxFQUFxQixZQUFyQixDQUFqQjtBQUNBRixJQUFBQSw4REFBaUIsQ0FBQ0UsOERBQUQsRUFBcUIsWUFBckIsQ0FBakI7QUFDQUYsSUFBQUEsOERBQWlCLENBQUNFLDBFQUFELEVBQWlDLHdCQUFqQyxDQUFqQjtBQUNBRixJQUFBQSw4REFBaUIsQ0FDZkUsMkVBRGUsRUFFZix5QkFGZSxDQUFqQjtBQUtBLFFBQU1ZLENBQUMsR0FBRy9FLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixDQUFWO0FBQ0EsUUFBTStFLENBQUMsR0FBR2hGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixDQUFWO0FBQ0EsUUFBTWdGLENBQUMsR0FBR2pGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixDQUFWO0FBQ0EsUUFBTWlGLEdBQUcsR0FBR2xGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixDQUFaO0FBQ0EsUUFBTWtGLElBQUksR0FBR25GLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixDQUFiO0FBQ0EsUUFBTW1GLENBQUMsR0FBR3BGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixDQUFWO0FBQ0EsUUFBTTJELENBQUMsR0FBRzVELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixDQUFWO0FBQ0EsUUFBTW9GLEVBQUUsR0FBR3JGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixDQUFYO0FBQ0EsUUFBTXNELENBQUMsR0FBR3ZELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixDQUFWO0FBQ0EsUUFBTXFGLEVBQUUsR0FBR3RGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixDQUFYO0FBQ0EsUUFBTXNGLENBQUMsR0FBR3ZGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixDQUFWO0FBQ0EsUUFBTXVGLEdBQUcsR0FBRyxDQUFDVCxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxHQUFWLEVBQWVDLElBQWYsRUFBcUJDLENBQXJCLEVBQXdCeEIsQ0FBeEIsRUFBMkJ5QixFQUEzQixFQUErQjlCLENBQS9CLEVBQWtDK0IsRUFBbEMsRUFBc0NDLENBQXRDLENBQVo7QUFDQUMsSUFBQUEsR0FBRyxDQUFDcEcsR0FBSixDQUFRLFVBQUM0QixJQUFELEVBQVU7QUFDaEJBLE1BQUFBLElBQUksQ0FBQ2QsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFdBQW5CO0FBQ0QsS0FGRDtBQUdBNEUsSUFBQUEsQ0FBQyxDQUFDVSxTQUFGLEdBQWMsR0FBZDtBQUNBVCxJQUFBQSxDQUFDLENBQUNTLFNBQUYsR0FBYyxHQUFkO0FBQ0FSLElBQUFBLENBQUMsQ0FBQ1EsU0FBRixHQUFjLEdBQWQ7QUFDQVAsSUFBQUEsR0FBRyxDQUFDTyxTQUFKLEdBQWdCLEdBQWhCO0FBQ0FOLElBQUFBLElBQUksQ0FBQ00sU0FBTCxHQUFpQixHQUFqQjtBQUNBTCxJQUFBQSxDQUFDLENBQUNLLFNBQUYsR0FBYyxHQUFkO0FBQ0E3QixJQUFBQSxDQUFDLENBQUM2QixTQUFGLEdBQWMsR0FBZDtBQUNBSixJQUFBQSxFQUFFLENBQUNJLFNBQUgsR0FBZSxHQUFmO0FBQ0FsQyxJQUFBQSxDQUFDLENBQUNrQyxTQUFGLEdBQWMsR0FBZDtBQUNBSCxJQUFBQSxFQUFFLENBQUNHLFNBQUgsR0FBZSxHQUFmO0FBQ0FGLElBQUFBLENBQUMsQ0FBQ0UsU0FBRixHQUFjLEdBQWQ7QUFDRCxHQXRDRDs7QUF3Q0EsR0FBQyxTQUFTQyxTQUFULEdBQXFCO0FBQ3BCekIsSUFBQUEsOERBQWlCLENBQUNHLG1FQUFELEVBQTBCLG1CQUExQixDQUFqQjtBQUNBSCxJQUFBQSw4REFBaUIsQ0FBQ0csMERBQUQsRUFBaUIsV0FBakIsQ0FBakI7QUFDQUgsSUFBQUEsOERBQWlCLENBQUNHLGdFQUFELEVBQXVCLFlBQXZCLENBQWpCO0FBQ0FILElBQUFBLDhEQUFpQixDQUFDRywrREFBRCxFQUFzQixXQUF0QixDQUFqQjtBQUNBSCxJQUFBQSw4REFBaUIsQ0FBQ0csZ0VBQUQsRUFBdUIsWUFBdkIsQ0FBakI7QUFDQUgsSUFBQUEsOERBQWlCLENBQ2ZHLDRFQURlLEVBRWYsd0JBRmUsQ0FBakI7QUFJQUgsSUFBQUEsOERBQWlCLENBQ2ZHLDZFQURlLEVBRWYseUJBRmUsQ0FBakI7QUFLQSxRQUFNZ0IsQ0FBQyxHQUFHcEYsUUFBUSxDQUFDQyxjQUFULENBQXdCLElBQXhCLENBQVY7QUFDQSxRQUFNMkQsQ0FBQyxHQUFHNUQsUUFBUSxDQUFDQyxjQUFULENBQXdCLElBQXhCLENBQVY7QUFDQSxRQUFNZ0YsQ0FBQyxHQUFHakYsUUFBUSxDQUFDQyxjQUFULENBQXdCLElBQXhCLENBQVY7QUFDQSxRQUFNc0QsQ0FBQyxHQUFHdkQsUUFBUSxDQUFDQyxjQUFULENBQXdCLElBQXhCLENBQVY7QUFDQSxRQUFNK0UsQ0FBQyxHQUFHaEYsUUFBUSxDQUFDQyxjQUFULENBQXdCLElBQXhCLENBQVY7QUFDQSxRQUFNc0YsQ0FBQyxHQUFHdkYsUUFBUSxDQUFDQyxjQUFULENBQXdCLElBQXhCLENBQVY7QUFDQSxRQUFNdUYsR0FBRyxHQUFHLENBQUNKLENBQUQsRUFBSXhCLENBQUosRUFBT3FCLENBQVAsRUFBVTFCLENBQVYsRUFBYXlCLENBQWIsRUFBZ0JPLENBQWhCLENBQVo7QUFDQUMsSUFBQUEsR0FBRyxDQUFDcEcsR0FBSixDQUFRLFVBQUM0QixJQUFELEVBQVU7QUFDaEJBLE1BQUFBLElBQUksQ0FBQ2QsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFdBQW5CO0FBQ0QsS0FGRDtBQUdBaUYsSUFBQUEsQ0FBQyxDQUFDSyxTQUFGLEdBQWMsR0FBZDtBQUNBN0IsSUFBQUEsQ0FBQyxDQUFDNkIsU0FBRixHQUFjLEdBQWQ7QUFDQVIsSUFBQUEsQ0FBQyxDQUFDUSxTQUFGLEdBQWMsR0FBZDtBQUNBbEMsSUFBQUEsQ0FBQyxDQUFDa0MsU0FBRixHQUFjLEdBQWQ7QUFDQVQsSUFBQUEsQ0FBQyxDQUFDUyxTQUFGLEdBQWMsR0FBZDtBQUNBRixJQUFBQSxDQUFDLENBQUNFLFNBQUYsR0FBYyxHQUFkO0FBQ0QsR0EvQkQ7O0FBaUNBLEdBQUMsU0FBU0UsU0FBVCxHQUFxQjtBQUNwQjtBQUNBMUIsSUFBQUEsOERBQWlCLENBQUNJLCtEQUFELEVBQXNCLFdBQXRCLENBQWpCO0FBQ0FKLElBQUFBLDhEQUFpQixDQUFDSSxvRUFBRCxFQUEyQixjQUEzQixDQUFqQjtBQUNBSixJQUFBQSw4REFBaUIsQ0FBQ0kscUVBQUQsRUFBNEIsZUFBNUIsQ0FBakI7QUFDRCxHQUxEO0FBTUQ7Ozs7Ozs7Ozs7Ozs7OztBQ25GRDtBQUVlLFNBQVMwQixpQkFBVCxHQUE2QjtBQUMxQyxNQUFNUCxHQUFHLEdBQUdNLDJEQUFaO0FBQ0FOLEVBQUFBLEdBQUcsQ0FBQ3BHLEdBQUosQ0FBUSxVQUFDNkcsT0FBRCxFQUFhO0FBQ25CLFFBQU1sRyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxpQkFBaUNnRyxPQUFqQyxFQUFiO0FBQ0FsRyxJQUFBQSxJQUFJLENBQUNHLFNBQUwsQ0FBZXNDLE1BQWYsQ0FBc0Isa0JBQXRCO0FBQ0F6QyxJQUFBQSxJQUFJLENBQUNHLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixZQUFuQjtBQUNELEdBSkQ7QUFLRDs7Ozs7Ozs7Ozs7Ozs7QUNUYyxTQUFTK0YsaUJBQVQsR0FBNkI7QUFDMUMsTUFBTTdFLE9BQU8sR0FBRyxDQUNkLE9BRGMsRUFFZCxPQUZjLEVBR2QsT0FIYyxFQUlkLE9BSmMsRUFLZCxPQUxjLEVBTWQsT0FOYyxFQU9kLE9BUGMsRUFRZCxPQVJjLEVBU2QsT0FUYyxFQVVkLFFBVmMsRUFXZCxRQVhjLENBQWhCO0FBYUEsTUFBTXlCLFdBQVcsR0FBR3hDLEtBQUssQ0FBQ0MsSUFBTixDQUFXUCxRQUFRLENBQUNRLHNCQUFULENBQWdDLE9BQWhDLENBQVgsQ0FBcEI7QUFDQXNDLEVBQUFBLFdBQVcsQ0FBQzFELEdBQVosQ0FBZ0IsVUFBQzRCLElBQUQsRUFBVTtBQUN4QixRQUFNTyxhQUFhLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBdEI7QUFDQVYsSUFBQUEsSUFBSSxDQUFDZCxTQUFMLENBQWVDLEdBQWYsQ0FBbUJrQixPQUFPLENBQUNFLGFBQUQsQ0FBMUI7QUFDRCxHQUhEO0FBSUQ7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxJQUFNNkIsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQytDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxZQUFYLEVBQTRCO0FBQzNDLE9BQUssSUFBSS9FLENBQUMsR0FBRzZFLEdBQWIsRUFBa0I3RSxDQUFDLEdBQUc4RSxHQUFHLEdBQUcsQ0FBNUIsRUFBK0I5RSxDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDK0UsSUFBQUEsWUFBWSxDQUFDOUcsSUFBYixDQUFrQitCLENBQWxCO0FBQ0Q7QUFDRixDQUpEOztBQU1BLElBQU0yQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNxQyxXQUFELEVBQWNDLFdBQWQsRUFBOEI7QUFDdERELEVBQUFBLFdBQVcsQ0FBQ2xILEdBQVosQ0FBZ0IsVUFBQzZHLE9BQUQsRUFBYTtBQUMzQixRQUFNbEcsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JnRyxPQUF4QixDQUFiO0FBQ0FsRyxJQUFBQSxJQUFJLENBQUNHLFNBQUwsQ0FBZXNDLE1BQWYsQ0FBc0IsT0FBdEI7QUFDQXpDLElBQUFBLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CO0FBQ0FKLElBQUFBLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxHQUFmLENBQW1Cb0csV0FBbkI7QUFDRCxHQUxEO0FBTUQsQ0FQRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVlLFNBQVNFLGtCQUFULEdBQThCO0FBQzNDLE1BQU1DLFlBQVksR0FBRzFHLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFyQjs7QUFFQSxNQUFNMEcsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUE2QixHQUFNO0FBQ3ZDLFFBQU1DLDZCQUE2QixHQUFHdEcsS0FBSyxDQUFDQyxJQUFOLENBQ3BDUCxRQUFRLENBQUNRLHNCQUFULENBQWdDLGtCQUFoQyxDQURvQyxDQUF0QztBQUdBb0csSUFBQUEsNkJBQTZCLENBQUN4SCxHQUE5QixDQUFrQyxVQUFDNEIsSUFBRCxFQUFVO0FBQzFDQSxNQUFBQSxJQUFJLENBQUNkLFNBQUwsQ0FBZUMsR0FBZixDQUFtQiwwQkFBbkI7QUFDQWEsTUFBQUEsSUFBSSxDQUFDZCxTQUFMLENBQWVzQyxNQUFmLENBQXNCLGtCQUF0QjtBQUNELEtBSEQ7QUFLQSxRQUFNcUUsdUJBQXVCLEdBQUd2RyxLQUFLLENBQUNDLElBQU4sQ0FDOUJQLFFBQVEsQ0FBQ1Esc0JBQVQsQ0FBZ0MsWUFBaEMsQ0FEOEIsQ0FBaEM7QUFHQXFHLElBQUFBLHVCQUF1QixDQUFDekgsR0FBeEIsQ0FBNEIsVUFBQzRCLElBQUQsRUFBVTtBQUNwQ0EsTUFBQUEsSUFBSSxDQUFDZCxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsb0JBQW5CO0FBQ0FhLE1BQUFBLElBQUksQ0FBQ2QsU0FBTCxDQUFlc0MsTUFBZixDQUFzQixZQUF0QjtBQUNELEtBSEQ7QUFJRCxHQWhCRDs7QUFrQkEsTUFBTXNFLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsR0FBTTtBQUN2QyxRQUFNRiw2QkFBNkIsR0FBR3RHLEtBQUssQ0FBQ0MsSUFBTixDQUNwQ1AsUUFBUSxDQUFDUSxzQkFBVCxDQUFnQywwQkFBaEMsQ0FEb0MsQ0FBdEM7QUFHQW9HLElBQUFBLDZCQUE2QixDQUFDeEgsR0FBOUIsQ0FBa0MsVUFBQzRCLElBQUQsRUFBVTtBQUMxQ0EsTUFBQUEsSUFBSSxDQUFDZCxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsa0JBQW5CO0FBQ0FhLE1BQUFBLElBQUksQ0FBQ2QsU0FBTCxDQUFlc0MsTUFBZixDQUFzQiwwQkFBdEI7QUFDRCxLQUhEO0FBSUEsUUFBTXFFLHVCQUF1QixHQUFHdkcsS0FBSyxDQUFDQyxJQUFOLENBQzlCUCxRQUFRLENBQUNRLHNCQUFULENBQWdDLG9CQUFoQyxDQUQ4QixDQUFoQztBQUdBcUcsSUFBQUEsdUJBQXVCLENBQUN6SCxHQUF4QixDQUE0QixVQUFDNEIsSUFBRCxFQUFVO0FBQ3BDQSxNQUFBQSxJQUFJLENBQUNkLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixZQUFuQjtBQUNBYSxNQUFBQSxJQUFJLENBQUNkLFNBQUwsQ0FBZXNDLE1BQWYsQ0FBc0Isb0JBQXRCO0FBQ0QsS0FIRDtBQUlELEdBZkQ7O0FBZ0JBLE1BQU11RSwwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLEdBQU07QUFDdkMsU0FBSyxJQUFJQyxRQUFULElBQXFCNUUsc0RBQXJCLEVBQWlDO0FBQy9CLFVBQU02RSxRQUFRLEdBQUc3RSxzREFBVSxDQUFDNEUsUUFBRCxDQUEzQjtBQUNBRSxNQUFBQSxhQUFhLENBQUNELFFBQUQsQ0FBYjtBQUNEOztBQUNEakgsSUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDdUMsTUFBeEM7QUFDQWdFLElBQUFBLHVFQUFXO0FBQ1osR0FQRDs7QUFTQUUsRUFBQUEsWUFBWSxDQUFDekYsZ0JBQWIsQ0FBOEIsWUFBOUIsRUFBNEMwRiwwQkFBNUM7QUFDQUQsRUFBQUEsWUFBWSxDQUFDekYsZ0JBQWIsQ0FBOEIsWUFBOUIsRUFBNEM2RiwwQkFBNUM7QUFDQUosRUFBQUEsWUFBWSxDQUFDekYsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUM4RiwwQkFBdkM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7QUNwRGMsU0FBUzdFLFlBQVQsR0FBd0I7QUFDckMsTUFBTWYsSUFBSSxHQUFHbkIsUUFBUSxDQUFDb0IsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsTUFBTStGLE9BQU8sR0FBR25ILFFBQVEsQ0FBQ29CLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQSxNQUFNMEUsS0FBSyxHQUFHOUYsUUFBUSxDQUFDb0IsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0FELEVBQUFBLElBQUksQ0FBQ04sRUFBTCxHQUFVLGNBQVY7QUFDQXNHLEVBQUFBLE9BQU8sQ0FBQ3RHLEVBQVIsR0FBYSxZQUFiO0FBQ0FpRixFQUFBQSxLQUFLLENBQUNqRixFQUFOLEdBQVcsY0FBWDs7QUFDQSxPQUFLLElBQUlTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsSUFBcEIsRUFBMEJBLENBQUMsRUFBM0IsRUFBK0I7QUFDN0IsUUFBTXZCLElBQUksR0FBR0MsUUFBUSxDQUFDb0IsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0FyQixJQUFBQSxJQUFJLENBQUNjLEVBQUwsR0FBVVMsQ0FBVjtBQUNBdkIsSUFBQUEsSUFBSSxDQUFDRyxTQUFMLEdBQWlCLHNCQUFqQjtBQUNBaUgsSUFBQUEsT0FBTyxDQUFDeEYsTUFBUixDQUFlNUIsSUFBZjtBQUNEOztBQUNELE9BQUssSUFBSXVCLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUcsR0FBcEIsRUFBeUJBLEVBQUMsRUFBMUIsRUFBOEI7QUFDNUIsUUFBTXZCLEtBQUksR0FBR0MsUUFBUSxDQUFDb0IsYUFBVCxDQUF1QixLQUF2QixDQUFiOztBQUNBckIsSUFBQUEsS0FBSSxDQUFDYyxFQUFMLG1CQUFtQlMsRUFBbkI7QUFDQXZCLElBQUFBLEtBQUksQ0FBQ0csU0FBTCxHQUFpQiw2QkFBakI7QUFDQTRGLElBQUFBLEtBQUssQ0FBQ25FLE1BQU4sQ0FBYTVCLEtBQWI7QUFDRDs7QUFDRG9CLEVBQUFBLElBQUksQ0FBQ1EsTUFBTCxDQUFZd0YsT0FBWjtBQUNBaEcsRUFBQUEsSUFBSSxDQUFDUSxNQUFMLENBQVltRSxLQUFaO0FBQ0E5RixFQUFBQSxRQUFRLENBQUM0QixJQUFULENBQWNELE1BQWQsQ0FBcUJSLElBQXJCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJEO0FBRUEsSUFBTWdELE9BQU8sR0FBRztBQUNkSyxFQUFBQSxhQUFhLEVBQUUsQ0FDYixJQURhLEVBQ1AsSUFETyxFQUNELElBREMsRUFDSyxJQURMLEVBQ1csSUFEWCxFQUNpQixJQURqQixFQUN1QixJQUR2QixFQUM2QixJQUQ3QixFQUNtQyxJQURuQyxFQUN5QyxJQUR6QyxFQUMrQyxJQUQvQyxFQUNxRCxJQURyRCxFQUViLElBRmEsRUFFUCxJQUZPLEVBRUQsSUFGQyxFQUVLLElBRkwsRUFFVyxJQUZYLEVBRWlCLElBRmpCLEVBRXVCLElBRnZCLEVBRTZCLElBRjdCLEVBRW1DLElBRm5DLEVBRXlDLElBRnpDLEVBRStDLElBRi9DLEVBRXFELElBRnJELEVBR2IsSUFIYSxFQUdQLElBSE8sRUFHRCxJQUhDLEVBR0ssSUFITCxFQUdXLElBSFgsRUFHaUIsSUFIakIsRUFHdUIsSUFIdkIsRUFHNkIsSUFIN0IsRUFHbUMsSUFIbkMsRUFHeUMsSUFIekMsRUFHK0MsSUFIL0MsRUFHcUQsSUFIckQsRUFJYixJQUphLEVBSVAsSUFKTyxFQUlELElBSkMsRUFJSyxJQUpMLEVBSVcsSUFKWCxFQUlpQixJQUpqQixFQUl1QixJQUp2QixFQUk2QixJQUo3QixFQUltQyxJQUpuQyxFQUl5QyxJQUp6QyxFQUkrQyxJQUovQyxFQUlxRCxJQUpyRCxFQUtiLElBTGEsRUFLUCxJQUxPLEVBS0QsSUFMQyxFQUtLLElBTEwsRUFLVyxJQUxYLEVBS2lCLElBTGpCLEVBS3VCLElBTHZCLEVBSzZCLElBTDdCLEVBS21DLElBTG5DLEVBS3lDLElBTHpDLEVBSytDLElBTC9DLEVBS3FELElBTHJELEVBTWIsSUFOYSxFQU1QLElBTk8sRUFNRCxJQU5DLEVBTUssSUFOTCxFQU1XLElBTlgsRUFNaUIsSUFOakIsRUFNdUIsSUFOdkIsRUFNNkIsSUFON0IsRUFNbUMsSUFObkMsRUFNeUMsSUFOekMsRUFNK0MsSUFOL0MsRUFNcUQsSUFOckQsRUFPYixJQVBhLENBREQ7QUFVZEMsRUFBQUEsSUFBSSxFQUFFLENBQ0osSUFESSxFQUNFLElBREYsRUFDUSxJQURSLEVBQ2MsSUFEZCxFQUNvQixJQURwQixFQUMwQixJQUQxQixFQUNnQyxJQURoQyxFQUNzQyxJQUR0QyxFQUM0QyxJQUQ1QyxFQUNrRCxJQURsRCxFQUN3RCxJQUR4RCxFQUM4RCxJQUQ5RCxFQUVKLElBRkksRUFFRSxJQUZGLEVBRVEsSUFGUixFQUVjLElBRmQsRUFFb0IsSUFGcEIsRUFFMEIsSUFGMUIsRUFFZ0MsSUFGaEMsRUFFc0MsSUFGdEMsRUFFNEMsSUFGNUMsRUFFa0QsSUFGbEQsRUFFd0QsSUFGeEQsRUFFOEQsSUFGOUQsRUFHSixJQUhJLENBVlE7QUFlZEMsRUFBQUEsU0FBUyxFQUFFLENBQ1QsSUFEUyxFQUNILElBREcsRUFDRyxJQURILEVBQ1MsSUFEVCxFQUNlLElBRGYsRUFDcUIsSUFEckIsRUFDMkIsSUFEM0IsRUFDaUMsSUFEakMsRUFDdUMsSUFEdkMsRUFDNkMsSUFEN0MsRUFDbUQsSUFEbkQsRUFDeUQsSUFEekQsRUFFVCxJQUZTLEVBRUgsSUFGRyxFQUVHLElBRkgsRUFFUyxJQUZULEVBRWUsSUFGZixFQUVxQixJQUZyQixFQUUyQixJQUYzQixFQUVpQyxJQUZqQyxFQUV1QyxJQUZ2QyxFQUU2QyxJQUY3QyxFQUVtRCxJQUZuRCxDQWZHO0FBbUJkQyxFQUFBQSxVQUFVLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQW5CRTtBQW9CZEMsRUFBQUEsVUFBVSxFQUFFLENBQUMsSUFBRCxDQXBCRTtBQXFCZEMsRUFBQUEsc0JBQXNCLEVBQUUsQ0FDdEIsSUFEc0IsRUFDaEIsSUFEZ0IsRUFDVixJQURVLEVBQ0osSUFESSxFQUNFLElBREYsRUFDUSxJQURSLEVBQ2MsSUFEZCxFQUNvQixJQURwQixFQUMwQixJQUQxQixFQUNnQyxJQURoQyxFQUNzQyxJQUR0QyxFQUM0QyxJQUQ1QyxFQUV0QixJQUZzQixFQUVoQixJQUZnQixFQUVWLElBRlUsRUFFSixJQUZJLEVBRUUsSUFGRixFQUVRLElBRlIsRUFFYyxJQUZkLEVBRW9CLElBRnBCLEVBRTBCLElBRjFCLEVBRWdDLElBRmhDLEVBRXNDLElBRnRDLEVBRTRDLElBRjVDLEVBR3RCLElBSHNCLEVBR2hCLElBSGdCLEVBR1YsSUFIVSxFQUdKLElBSEksRUFHRSxJQUhGLENBckJWO0FBMEJkQyxFQUFBQSx1QkFBdUIsRUFBRSxDQUN2QixJQUR1QixFQUNqQixJQURpQixFQUNYLElBRFcsRUFDTCxJQURLLEVBQ0MsSUFERCxFQUNPLElBRFAsRUFDYSxJQURiLEVBQ21CLElBRG5CLEVBQ3lCLElBRHpCLEVBQytCLElBRC9CLEVBQ3FDLElBRHJDLEVBQzJDLElBRDNDO0FBMUJYLENBQWhCO0FBK0JBLElBQU1WLFNBQVMsR0FBRztBQUNoQkksRUFBQUEsYUFBYSxFQUFFLENBQ2IsSUFEYSxFQUNQLElBRE8sRUFDRCxJQURDLEVBQ0ssSUFETCxFQUNXLElBRFgsRUFDaUIsSUFEakIsRUFDdUIsSUFEdkIsRUFDNkIsSUFEN0IsRUFDbUMsSUFEbkMsRUFDeUMsSUFEekMsRUFDK0MsSUFEL0MsRUFDcUQsSUFEckQsRUFFYixJQUZhLEVBRVAsSUFGTyxFQUVELElBRkMsQ0FEQztBQUtoQkMsRUFBQUEsSUFBSSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLENBTFU7QUFNaEJDLEVBQUFBLFNBQVMsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxJQUFqQyxFQUF1QyxJQUF2QyxFQUE2QyxJQUE3QyxFQUFtRCxJQUFuRCxDQU5LO0FBT2hCQyxFQUFBQSxVQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUMsSUFBbkMsQ0FQSTtBQVFoQkMsRUFBQUEsVUFBVSxFQUFFLENBQUMsR0FBRCxDQVJJO0FBU2hCQyxFQUFBQSxzQkFBc0IsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixFQUErQixJQUEvQixDQVRSO0FBVWhCQyxFQUFBQSx1QkFBdUIsRUFBRSxDQUN2QixJQUR1QixFQUNqQixJQURpQixFQUNYLElBRFcsRUFDTCxJQURLLEVBQ0MsSUFERCxFQUNPLElBRFAsRUFDYSxJQURiLEVBQ21CLElBRG5CLEVBQ3lCLElBRHpCO0FBVlQsQ0FBbEI7QUFlQSxJQUFNVCxTQUFTLEdBQUc7QUFDaEJJLEVBQUFBLElBQUksRUFBRSxFQURVO0FBRWhCQyxFQUFBQSxTQUFTLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FGSztBQUdoQmtCLEVBQUFBLGNBQWMsRUFBRSxDQUFDLEdBQUQsQ0FIQTtBQUloQkMsRUFBQUEsZUFBZSxFQUFFLENBQUMsR0FBRDtBQUpELENBQWxCOztBQU9BLENBQUMsU0FBU3VCLGlCQUFULEdBQTZCO0FBQzVCLE1BQU1DLE9BQU8sR0FBR2xELE9BQU8sQ0FBQ0ssYUFBeEI7QUFDQXBCLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYWlFLE9BQWIsQ0FBUjtBQUNBakUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhaUUsT0FBYixDQUFSO0FBQ0FqRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFpRSxPQUFiLENBQVI7QUFDQWpFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYWlFLE9BQWIsQ0FBUjtBQUNBakUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhaUUsT0FBYixDQUFSO0FBQ0FqRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFpRSxPQUFiLENBQVI7QUFFQSxNQUFNQyxJQUFJLEdBQUduRCxPQUFPLENBQUNNLElBQXJCO0FBQ0FyQixFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFrRSxJQUFiLENBQVI7QUFDQWxFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYWtFLElBQWIsQ0FBUjtBQUNBbEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFha0UsSUFBYixDQUFSO0FBQ0FsRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFrRSxJQUFiLENBQVI7QUFDQWxFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYWtFLElBQWIsQ0FBUjtBQUNBbEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFha0UsSUFBYixDQUFSO0FBQ0FsRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFrRSxJQUFiLENBQVI7QUFDQWxFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYWtFLElBQWIsQ0FBUjtBQUNBbEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFha0UsSUFBYixDQUFSO0FBQ0FsRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFrRSxJQUFiLENBQVI7QUFDQWxFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYWtFLElBQWIsQ0FBUjtBQUNBbEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFha0UsSUFBYixDQUFSO0FBQ0FsRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFrRSxJQUFiLENBQVI7QUFDQWxFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYWtFLElBQWIsQ0FBUjtBQUNBbEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFha0UsSUFBYixDQUFSO0FBRUEsTUFBTUMsU0FBUyxHQUFHcEQsT0FBTyxDQUFDTyxTQUExQjtBQUNBdEIsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhbUUsU0FBYixDQUFSO0FBQ0FuRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFtRSxTQUFiLENBQVI7QUFDQW5FLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYW1FLFNBQWIsQ0FBUjtBQUNBbkUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhbUUsU0FBYixDQUFSO0FBQ0FuRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFtRSxTQUFiLENBQVI7QUFDQW5FLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYW1FLFNBQWIsQ0FBUjtBQUVBLE1BQU1DLFVBQVUsR0FBR3JELE9BQU8sQ0FBQ1EsVUFBM0I7QUFDQXZCLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYW9FLFVBQWIsQ0FBUjtBQUVBLE1BQU1DLHNCQUFzQixHQUFHdEQsT0FBTyxDQUFDVSxzQkFBdkM7QUFDQXpCLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYXFFLHNCQUFiLENBQVI7QUFDRCxDQXZDRDs7QUF5Q0EsQ0FBQyxTQUFTQyxtQkFBVCxHQUErQjtBQUM5QixNQUFNTCxPQUFPLEdBQUdqRCxTQUFTLENBQUNJLGFBQTFCO0FBQ0FwQixFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFpRSxPQUFiLENBQVI7QUFFQSxNQUFNQyxJQUFJLEdBQUdsRCxTQUFTLENBQUNLLElBQXZCO0FBQ0FyQixFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFrRSxJQUFiLENBQVI7QUFDQWxFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYWtFLElBQWIsQ0FBUjtBQUVBLE1BQU1FLFVBQVUsR0FBR3BELFNBQVMsQ0FBQ08sVUFBN0I7QUFDQXZCLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYW9FLFVBQWIsQ0FBUjtBQUNBcEUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhb0UsVUFBYixDQUFSO0FBQ0FwRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFvRSxVQUFiLENBQVI7QUFDQXBFLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYW9FLFVBQWIsQ0FBUjtBQUVBLE1BQU1ELFNBQVMsR0FBR25ELFNBQVMsQ0FBQ00sU0FBNUI7QUFDQXRCLEVBQUFBLHFEQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYW1FLFNBQWIsQ0FBUjtBQUNBbkUsRUFBQUEscURBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhbUUsU0FBYixDQUFSO0FBQ0FuRSxFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFtRSxTQUFiLENBQVI7QUFFQSxNQUFNRSxzQkFBc0IsR0FBR3JELFNBQVMsQ0FBQ1Msc0JBQXpDO0FBQ0F6QixFQUFBQSxxREFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWFxRSxzQkFBYixDQUFSO0FBQ0QsQ0FyQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdBO0FBRUEsSUFBTTNCLEtBQUssR0FBRztBQUNaNkIsRUFBQUEsQ0FBQyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBRFM7QUFFWkMsRUFBQUEsRUFBRSxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDLEdBQTlDLEVBQW1ELEdBQW5ELEVBQXdELEdBQXhELENBRlE7QUFHWkMsRUFBQUEsQ0FBQyxFQUFFLENBQ0QsR0FEQyxFQUNJLEdBREosRUFDUyxHQURULEVBQ2MsR0FEZCxFQUNtQixHQURuQixFQUN3QixHQUR4QixFQUM2QixHQUQ3QixFQUNrQyxHQURsQyxFQUN1QyxHQUR2QyxFQUM0QyxHQUQ1QyxFQUNpRCxHQURqRCxFQUNzRCxHQUR0RCxFQUMyRCxHQUQzRCxFQUNnRSxHQURoRSxFQUNxRSxHQURyRSxFQUVELEdBRkMsQ0FIUztBQU9aQyxFQUFBQSxDQUFDLEVBQUUsQ0FDRCxHQURDLEVBQ0ksR0FESixFQUNTLEdBRFQsRUFDYyxHQURkLEVBQ21CLEdBRG5CLEVBQ3dCLEdBRHhCLEVBQzZCLEdBRDdCLEVBQ2tDLEdBRGxDLEVBQ3VDLEdBRHZDLEVBQzRDLEdBRDVDLEVBQ2lELEdBRGpELEVBQ3NELEdBRHRELEVBQzJELEdBRDNELEVBQ2dFLEdBRGhFLEVBQ3FFLEdBRHJFLEVBRUQsR0FGQyxDQVBTO0FBV1pDLEVBQUFBLEVBQUUsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxHQUFwQyxFQUF5QyxHQUF6QyxFQUE4QyxHQUE5QyxFQUFtRCxHQUFuRCxFQUF3RCxHQUF4RCxDQVhRO0FBWVovQixFQUFBQSxHQUFHLEVBQUU7QUFaTyxDQUFkOztBQWVBLENBQUMsU0FBU2hDLFNBQVQsR0FBcUI7QUFDcEIsTUFBTUosQ0FBQyxHQUFHa0MsS0FBSyxDQUFDNkIsQ0FBaEI7QUFDQXZFLEVBQUFBLHFEQUFRLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBU1EsQ0FBVCxDQUFSO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBRUEsTUFBTUosRUFBRSxHQUFHc0MsS0FBSyxDQUFDOEIsRUFBakI7QUFDQXhFLEVBQUFBLHFEQUFRLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBU0ksRUFBVCxDQUFSO0FBQ0FKLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0ksRUFBWCxDQUFSO0FBRUEsTUFBTUQsQ0FBQyxHQUFHdUMsS0FBSyxDQUFDK0IsQ0FBaEI7QUFDQXpFLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0csQ0FBWCxDQUFSO0FBQ0FILEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0csQ0FBWCxDQUFSO0FBQ0FILEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0csQ0FBWCxDQUFSO0FBQ0FILEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0csQ0FBWCxDQUFSO0FBRUEsTUFBTXlFLENBQUMsR0FBR2xDLEtBQUssQ0FBQ2dDLENBQWhCO0FBQ0ExRSxFQUFBQSxxREFBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVc0RSxDQUFYLENBQVI7QUFDQTVFLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVzRFLENBQVgsQ0FBUjtBQUNBNUUsRUFBQUEscURBQVEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXNEUsQ0FBWCxDQUFSO0FBQ0E1RSxFQUFBQSxxREFBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVc0RSxDQUFYLENBQVI7QUFFQSxNQUFNdkUsRUFBRSxHQUFHcUMsS0FBSyxDQUFDaUMsRUFBakI7QUFDQTNFLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0ssRUFBWCxDQUFSO0FBQ0FMLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0ssRUFBWCxDQUFSOztBQUVBLE9BQUssSUFBSXBFLE1BQVQsSUFBbUJ5RyxLQUFuQixFQUEwQjtBQUN4QixRQUFJekcsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDcEI7QUFDRDs7QUFDRHlHLElBQUFBLEtBQUssQ0FBQ3pHLE1BQUQsQ0FBTCxDQUFjRCxHQUFkLENBQWtCLFVBQUNFLE1BQUQsRUFBWTtBQUM1QndHLE1BQUFBLEtBQUssQ0FBQ0UsR0FBTixDQUFVekcsSUFBVixDQUFlRCxNQUFmO0FBQ0QsS0FGRDtBQUdEO0FBQ0YsQ0FyQ0Q7O0FBc0NBLGlFQUFld0csS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU21DLFFBQVQsR0FBb0I7QUFDakMvRixFQUFBQSxvRUFBWTtBQUNaNkQsRUFBQUEseUVBQWlCO0FBQ2pCekIsRUFBQUEsd0VBQWdCO0FBQ2hCSixFQUFBQSw4RUFBc0I7QUFDdEJnQyxFQUFBQSx5RUFBaUI7QUFDakJPLEVBQUFBLDBFQUFrQjtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUNBO0FBQ0E7QUFFZSxTQUFTMEIsZUFBVCxHQUEyQjtBQUN4QyxNQUFJQyxrQkFBa0IsR0FBRyxDQUF6QjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxZQUFsQjtBQUNBLE1BQU0zSSxLQUFLLEdBQUcsQ0FBQyxTQUFELEVBQVksWUFBWixFQUEwQixXQUExQixFQUF1QyxLQUF2QyxFQUE4QyxZQUE5QyxDQUFkO0FBQ0EsTUFBTTRJLE1BQU0sR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQWY7QUFDQSxNQUFNQyxJQUFJLEdBQUc7QUFDWDtBQUNBaEUsSUFBQUEsT0FBTyxFQUFFO0FBQ1BpRSxNQUFBQSxVQUFVLEVBQUUsQ0FETDtBQUVQQyxNQUFBQSxRQUFRLEVBQUUsR0FGSCxDQUVROztBQUZSLEtBRkU7QUFNWEMsSUFBQUEsVUFBVSxFQUFFO0FBQ1ZGLE1BQUFBLFVBQVUsRUFBRSxDQURGO0FBRVZDLE1BQUFBLFFBQVEsRUFBRSxHQUZBLENBRUs7O0FBRkwsS0FORDtBQVVYL0MsSUFBQUEsU0FBUyxFQUFFO0FBQ1Q4QyxNQUFBQSxVQUFVLEVBQUUsQ0FESDtBQUVUQyxNQUFBQSxRQUFRLEVBQUUsR0FGRCxDQUVNOztBQUZOLEtBVkE7QUFjWEUsSUFBQUEsR0FBRyxFQUFFO0FBQ0hILE1BQUFBLFVBQVUsRUFBRSxDQURUO0FBRUhDLE1BQUFBLFFBQVEsRUFBRSxHQUZQLENBRVk7O0FBRlosS0FkTTtBQWtCWEcsSUFBQUEsVUFBVSxFQUFFO0FBQ1ZKLE1BQUFBLFVBQVUsRUFBRSxDQURGO0FBRVZDLE1BQUFBLFFBQVEsRUFBRSxHQUZBLENBRUs7O0FBRkw7QUFsQkQsR0FBYjs7QUF3QkEsTUFBTUksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDaEksRUFBRCxFQUFRO0FBQ2pDLFFBQUlpSSxnQkFBZ0IsR0FBRyxFQUF2Qjs7QUFDQSxRQUFJVCxXQUFXLEtBQUssWUFBcEIsRUFBa0M7QUFDaENTLE1BQUFBLGdCQUFnQixHQUFHakksRUFBRSxDQUFDLENBQUQsQ0FBckI7QUFDRDs7QUFDRCxRQUFJd0gsV0FBVyxLQUFLLFVBQXBCLEVBQWdDO0FBQzlCUyxNQUFBQSxnQkFBZ0IsR0FBR2pJLEVBQUUsQ0FBQ2tJLFVBQUgsQ0FBYyxDQUFkLENBQW5CO0FBQ0Q7O0FBQ0QsUUFBTUMsR0FBRyxHQUFHVCxJQUFJLENBQUM3SSxLQUFLLENBQUMwSSxrQkFBRCxDQUFOLENBQUosQ0FBZ0NDLFdBQWhDLENBQVo7QUFDQSxXQUFPUyxnQkFBZ0IsSUFBSUUsR0FBM0I7QUFDRCxHQVZEOztBQVlBLE1BQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsU0FBRCxFQUFlO0FBQzNDLFFBQUlDLGFBQWEsR0FBRyxJQUFwQjtBQUNBLFFBQU1DLGFBQWEsR0FBRzVKLHdEQUFBLENBQWtCLENBQWxCLENBQXRCOztBQUYyQywrQkFHbENJLElBSGtDO0FBSXpDLFVBQU15SixTQUFTLEdBQUdELGFBQWEsQ0FBQ3hKLElBQUQsQ0FBYixDQUFvQkMsUUFBdEM7QUFDQXFKLE1BQUFBLFNBQVMsQ0FBQzlKLEdBQVYsQ0FBYyxVQUFDNEIsSUFBRCxFQUFVO0FBQ3RCLFlBQUlxSSxTQUFTLENBQUMzRyxRQUFWLENBQW1CMUIsSUFBbkIsQ0FBSixFQUE4QjtBQUM1Qm1JLFVBQUFBLGFBQWEsR0FBRyxLQUFoQjtBQUNEO0FBQ0YsT0FKRDtBQUx5Qzs7QUFHM0MsU0FBSyxJQUFJdkosSUFBVCxJQUFpQndKLGFBQWpCLEVBQWdDO0FBQUEsWUFBdkJ4SixJQUF1QjtBQU8vQjs7QUFDRCxXQUFPdUosYUFBUDtBQUNELEdBWkQ7O0FBY0EsTUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDekksRUFBRCxFQUFRO0FBQy9CLFFBQU0wSSxnQkFBZ0IsR0FBRzFJLEVBQUUsQ0FBQ2tJLFVBQUgsQ0FBYyxDQUFkLENBQXpCO0FBQ0EsUUFBTVMsTUFBTSxHQUFHM0ksRUFBRSxDQUFDLENBQUQsQ0FBakI7QUFDQSxRQUFJbUYsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsUUFBSXFDLFdBQVcsS0FBSyxZQUFwQixFQUFrQztBQUNoQyxVQUFNb0IsT0FBTyxHQUFHLENBQUNELE1BQUQsR0FBVWxCLE1BQU0sQ0FBQ0Ysa0JBQUQsQ0FBaEM7O0FBQ0EsV0FBSyxJQUFJOUcsQ0FBQyxHQUFHa0ksTUFBYixFQUFxQmxJLENBQUMsR0FBR21JLE9BQXpCLEVBQWtDbkksQ0FBQyxFQUFuQyxFQUF1QztBQUNyQzBFLFFBQUFBLEdBQUcsQ0FBQ3pHLElBQUosV0FBWW1LLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkosZ0JBQXBCLENBQVosU0FBb0RqSSxDQUFwRDtBQUNEOztBQUNELGFBQU8wRSxHQUFQO0FBQ0Q7O0FBQ0QsUUFBSXFDLFdBQVcsS0FBSyxVQUFwQixFQUFnQztBQUM5QixVQUFNb0IsUUFBTyxHQUFHRixnQkFBZ0IsR0FBR2pCLE1BQU0sQ0FBQ0Ysa0JBQUQsQ0FBekM7O0FBQ0EsV0FBSyxJQUFJOUcsRUFBQyxHQUFHaUksZ0JBQWIsRUFBK0JqSSxFQUFDLEdBQUdtSSxRQUFuQyxFQUE0Q25JLEVBQUMsRUFBN0MsRUFBaUQ7QUFDL0MwRSxRQUFBQSxHQUFHLENBQUN6RyxJQUFKLFdBQVltSyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JySSxFQUFwQixDQUFaLFNBQXFDa0ksTUFBckM7QUFDRDs7QUFDRCxhQUFPeEQsR0FBUDtBQUNEO0FBQ0YsR0FsQkQ7O0FBb0JBLE1BQU00RCxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxXQUFELEVBQWlCO0FBQ25DQSxJQUFBQSxXQUFXLENBQUN6SyxHQUFaLENBQWdCLFVBQUNVLFVBQUQsRUFBZ0I7QUFDOUIsVUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JILFVBQXhCLENBQWI7QUFDQUMsTUFBQUEsSUFBSSxDQUFDRyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsb0JBQW5CO0FBQ0QsS0FIRDtBQUlELEdBTEQ7O0FBT0EsTUFBTTJKLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ3BKLEtBQUQsRUFBVztBQUNyQyxRQUFNQyxFQUFFLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxFQUF4QjtBQUNBLFFBQU1rSixRQUFRLEdBQUdsQixrQkFBa0IsQ0FBQ2xJLEVBQUQsQ0FBbkM7QUFDQSxRQUFNcUosZUFBZSxHQUFHVixnQkFBZ0IsQ0FBQzNJLEVBQUQsQ0FBeEM7QUFDQSxRQUFNc0osMEJBQTBCLEdBQUdoQixxQkFBcUIsQ0FBQ2UsZUFBRCxDQUF4RDs7QUFDQSxRQUFJLENBQUNELFFBQUQsSUFBYSxDQUFDRSwwQkFBbEIsRUFBOEM7QUFDNUN2SixNQUFBQSxLQUFLLENBQUNFLE1BQU4sQ0FBYVYsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsd0JBQTNCO0FBQ0E7QUFDRDs7QUFDRHlKLElBQUFBLFdBQVcsQ0FBQ0ksZUFBRCxDQUFYO0FBQ0F0SixJQUFBQSxLQUFLLENBQUNFLE1BQU4sQ0FBYVYsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsb0JBQTNCO0FBQ0QsR0FYRDs7QUFhQSxNQUFNK0osbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDeEosS0FBRCxFQUFXO0FBQ3JDLFFBQU15SixhQUFhLEdBQUc3SixLQUFLLENBQUNDLElBQU4sQ0FDcEJQLFFBQVEsQ0FBQ1Esc0JBQVQsQ0FBZ0Msb0JBQWhDLENBRG9CLENBQXRCO0FBR0EySixJQUFBQSxhQUFhLENBQUMvSyxHQUFkLENBQWtCLFVBQUM0QixJQUFELEVBQVU7QUFDMUJBLE1BQUFBLElBQUksQ0FBQ2QsU0FBTCxDQUFlc0MsTUFBZixDQUFzQixvQkFBdEI7QUFDRCxLQUZEO0FBR0E5QixJQUFBQSxLQUFLLENBQUNFLE1BQU4sQ0FBYVYsU0FBYixDQUF1QnNDLE1BQXZCLENBQThCLHdCQUE5QjtBQUNELEdBUkQ7O0FBVUEsTUFBTTRILG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQzFKLEtBQUQsRUFBVztBQUNyQyxRQUFNQyxFQUFFLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxFQUF4QjtBQUNBLFFBQU1rSixRQUFRLEdBQUdsQixrQkFBa0IsQ0FBQ2xJLEVBQUQsQ0FBbkM7QUFDQSxRQUFNcUosZUFBZSxHQUFHVixnQkFBZ0IsQ0FBQzNJLEVBQUQsQ0FBeEM7QUFDQSxRQUFNc0osMEJBQTBCLEdBQUdoQixxQkFBcUIsQ0FBQ2UsZUFBRCxDQUF4RDs7QUFFQSxRQUFJRCxRQUFRLElBQUlFLDBCQUFaLElBQTBDN0Isa0JBQWtCLEdBQUcsQ0FBbkUsRUFBc0U7QUFDcEUsVUFBTWlDLFlBQVksR0FBRzNLLEtBQUssQ0FBQzBJLGtCQUFELENBQTFCO0FBQ0E1SSxNQUFBQSxzREFBQSxDQUFnQixDQUFoQixFQUFtQjZLLFlBQW5CLEVBQWlDTCxlQUFqQztBQUNBQSxNQUFBQSxlQUFlLENBQUM1SyxHQUFoQixDQUFvQixVQUFDVSxVQUFELEVBQWdCO0FBQ2xDLFlBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCSCxVQUF4QixDQUFiO0FBQ0FDLFFBQUFBLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxHQUFmLENBQW1CLGFBQW5CO0FBQ0QsT0FIRDtBQUlBaUksTUFBQUEsa0JBQWtCLEdBQUdBLGtCQUFrQixHQUFHLENBQTFDOztBQUVBLFVBQUlBLGtCQUFrQixHQUFHLENBQXpCLEVBQTRCO0FBQzFCLFlBQU1qSCxJQUFJLEdBQUduQixRQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBQWI7QUFDQWtCLFFBQUFBLElBQUksQ0FBQ3FCLE1BQUw7QUFDQTBGLFFBQUFBLDhEQUFjO0FBQ2QvRixRQUFBQSw4RUFBa0I7QUFDbkI7QUFDRjtBQUNGLEdBdEJEOztBQXdCQSxNQUFNb0ksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDN0osS0FBRCxFQUFXO0FBQ25DLFFBQU04SixHQUFHLEdBQUc5SixLQUFLLENBQUMrSixHQUFsQjs7QUFDQSxRQUFJRCxHQUFHLEtBQUssR0FBUixJQUFlbkMsV0FBVyxLQUFLLFlBQW5DLEVBQWlEO0FBQy9DQSxNQUFBQSxXQUFXLEdBQUcsVUFBZDtBQUNBO0FBQ0Q7O0FBQ0QsUUFBSW1DLEdBQUcsS0FBSyxHQUFSLElBQWVuQyxXQUFXLEtBQUssVUFBbkMsRUFBK0M7QUFDN0NBLE1BQUFBLFdBQVcsR0FBRyxZQUFkO0FBQ0E7QUFDRDtBQUNGLEdBVkQ7O0FBWUEsTUFBTXFDLEtBQUssR0FBR3BLLEtBQUssQ0FBQ0MsSUFBTixDQUFXUCxRQUFRLENBQUNRLHNCQUFULENBQWdDLGlCQUFoQyxDQUFYLENBQWQ7QUFDQWtLLEVBQUFBLEtBQUssQ0FBQ3RMLEdBQU4sQ0FBVSxVQUFDNEIsSUFBRCxFQUFVO0FBQ2xCQSxJQUFBQSxJQUFJLENBQUNDLGdCQUFMLENBQXNCLFlBQXRCLEVBQW9DNkksbUJBQXBDO0FBQ0E5SSxJQUFBQSxJQUFJLENBQUNDLGdCQUFMLENBQXNCLFlBQXRCLEVBQW9DaUosbUJBQXBDO0FBQ0FsSixJQUFBQSxJQUFJLENBQUNDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCbUosbUJBQS9CO0FBQ0QsR0FKRDtBQUtBcEssRUFBQUEsUUFBUSxDQUFDNEIsSUFBVCxDQUFjWCxnQkFBZCxDQUErQixPQUEvQixFQUF3Q3NKLGlCQUF4QztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUN4SkQ7QUFFZSxTQUFTckMsY0FBVCxHQUEwQjtBQUN2QyxNQUFJRSxrQkFBa0IsR0FBRyxDQUF6QjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxZQUFsQjtBQUNBLE1BQU0zSSxLQUFLLEdBQUcsQ0FBQyxTQUFELEVBQVksWUFBWixFQUEwQixXQUExQixFQUF1QyxLQUF2QyxFQUE4QyxZQUE5QyxDQUFkO0FBQ0EsTUFBTTRJLE1BQU0sR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQWY7QUFDQSxNQUFNcUMsSUFBSSxHQUFHO0FBQ1g7QUFDQXBHLElBQUFBLE9BQU8sRUFBRTtBQUNQNkIsTUFBQUEsR0FBRyxFQUFFLENBREU7QUFDQztBQUNSeUQsTUFBQUEsV0FBVyxFQUFFO0FBRk4sS0FGRTtBQU1YbkIsSUFBQUEsVUFBVSxFQUFFO0FBQ1Z0QyxNQUFBQSxHQUFHLEVBQUUsQ0FESztBQUNGO0FBQ1J5RCxNQUFBQSxXQUFXLEVBQUU7QUFGSCxLQU5EO0FBVVhuRSxJQUFBQSxTQUFTLEVBQUU7QUFDVFUsTUFBQUEsR0FBRyxFQUFFLENBREk7QUFDRDtBQUNSeUQsTUFBQUEsV0FBVyxFQUFFO0FBRkosS0FWQTtBQWNYbEIsSUFBQUEsR0FBRyxFQUFFO0FBQ0h2QyxNQUFBQSxHQUFHLEVBQUUsQ0FERjtBQUNLO0FBQ1J5RCxNQUFBQSxXQUFXLEVBQUU7QUFGVixLQWRNO0FBa0JYakIsSUFBQUEsVUFBVSxFQUFFO0FBQ1Z4QyxNQUFBQSxHQUFHLEVBQUUsQ0FESztBQUNGO0FBQ1J5RCxNQUFBQSxXQUFXLEVBQUU7QUFGSDtBQWxCRCxHQUFiO0FBdUJBLE1BQU1HLGVBQWUsR0FBRyxFQUF4QjtBQUVBLE1BQU05SyxPQUFPLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFBOEMsR0FBOUMsQ0FBaEI7O0FBRUEsTUFBTTBMLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUM5SyxVQUFELEVBQWdCO0FBQ2hDLFFBQU15SixnQkFBZ0IsR0FBR3pKLFVBQVUsQ0FBQ2lKLFVBQVgsQ0FBc0IsQ0FBdEIsQ0FBekI7QUFDQSxRQUFNUyxNQUFNLEdBQUcxSixVQUFVLENBQUMsQ0FBRCxDQUF6QjtBQUNBLFFBQUlrRyxHQUFHLEdBQUcsRUFBVjs7QUFDQSxRQUFJcUMsV0FBVyxLQUFLLFlBQXBCLEVBQWtDO0FBQ2hDLFVBQU1vQixPQUFPLEdBQUcsQ0FBQ0QsTUFBRCxHQUFVbEIsTUFBTSxDQUFDRixrQkFBRCxDQUFoQzs7QUFDQSxXQUFLLElBQUk5RyxDQUFDLEdBQUdrSSxNQUFiLEVBQXFCbEksQ0FBQyxHQUFHbUksT0FBekIsRUFBa0NuSSxDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDMEUsUUFBQUEsR0FBRyxDQUFDekcsSUFBSixXQUFZbUssTUFBTSxDQUFDQyxZQUFQLENBQW9CSixnQkFBcEIsQ0FBWixTQUFvRGpJLENBQXBEO0FBQ0Q7O0FBQ0QsYUFBTzBFLEdBQVA7QUFDRDs7QUFDRCxRQUFJcUMsV0FBVyxLQUFLLFVBQXBCLEVBQWdDO0FBQzlCLFVBQU1vQixRQUFPLEdBQUdGLGdCQUFnQixHQUFHakIsTUFBTSxDQUFDRixrQkFBRCxDQUF6Qzs7QUFDQSxXQUFLLElBQUk5RyxFQUFDLEdBQUdpSSxnQkFBYixFQUErQmpJLEVBQUMsR0FBR21JLFFBQW5DLEVBQTRDbkksRUFBQyxFQUE3QyxFQUFpRDtBQUMvQzBFLFFBQUFBLEdBQUcsQ0FBQ3pHLElBQUosV0FBWW1LLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQnJJLEVBQXBCLENBQVosU0FBcUNrSSxNQUFyQztBQUNEOztBQUNELGFBQU94RCxHQUFQO0FBQ0Q7QUFDRixHQWxCRDs7QUFvQkEsTUFBTTZFLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQixRQUFJeEMsV0FBVyxLQUFLLFlBQXBCLEVBQWtDO0FBQ2hDQSxNQUFBQSxXQUFXLEdBQUcsVUFBZDtBQUNELEtBRkQsTUFFTztBQUNMQSxNQUFBQSxXQUFXLEdBQUcsWUFBZDtBQUNEO0FBQ0YsR0FORDs7QUFRQSxNQUFNeUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixRQUFJekMsV0FBVyxLQUFLLFlBQXBCLEVBQWtDO0FBQ2hDLFVBQU0wQyxhQUFhLEdBQUc3TCxPQUFPLENBQUNzQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLENBQUQsQ0FBN0I7QUFDQSxVQUFNSCxhQUFhLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUNwQkQsSUFBSSxDQUFDRSxNQUFMLE1BQWlCaUosSUFBSSxDQUFDakwsS0FBSyxDQUFDMEksa0JBQUQsQ0FBTixDQUFKLENBQWdDaEMsR0FBaEMsR0FBc0MsQ0FBdkQsQ0FEb0IsQ0FBdEI7QUFHQSxhQUFPMkUsYUFBYSxHQUFHeEosYUFBdkI7QUFDRDs7QUFDRCxRQUFJOEcsV0FBVyxLQUFLLFVBQXBCLEVBQWdDO0FBQzlCLFVBQU0wQyxjQUFhLEdBQ2pCN0wsT0FBTyxDQUNMc0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQmlKLElBQUksQ0FBQ2pMLEtBQUssQ0FBQzBJLGtCQUFELENBQU4sQ0FBSixDQUFnQ2hDLEdBQWhDLEdBQXNDLENBQXZELENBQVgsQ0FESyxDQURUOztBQUlBLFVBQU03RSxjQUFhLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBdEI7O0FBQ0EsYUFBT3FKLGNBQWEsR0FBR3hKLGNBQXZCO0FBQ0Q7QUFDRixHQWhCRDs7QUFrQkEsTUFBTXlKLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBTUMsaUJBQWlCLEdBQUdILFVBQVUsRUFBcEM7QUFDQSxRQUFNZCxlQUFlLEdBQUdZLFNBQVMsQ0FBQ0ssaUJBQUQsQ0FBakM7QUFDQSxXQUFPakIsZUFBUDtBQUNELEdBSkQ7O0FBTUEsR0FBQyxTQUFTa0Isa0JBQVQsR0FBOEI7QUFBQSwrQkFDcEI1SixDQURvQjtBQUUzQixVQUFNNkosV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixZQUFJQyxNQUFNLEdBQUcsSUFBYjtBQUNBLFlBQUlDLElBQUksR0FBR0wsUUFBUSxFQUFuQjtBQUNBSyxRQUFBQSxJQUFJLENBQUNqTSxHQUFMLENBQVMsVUFBQ1UsVUFBRCxFQUFnQjtBQUN2QixjQUFJa0ssZUFBZSxDQUFDdEgsUUFBaEIsQ0FBeUI1QyxVQUF6QixDQUFKLEVBQTBDO0FBQ3hDc0wsWUFBQUEsTUFBTSxHQUFHLEtBQVQ7QUFDRDtBQUNGLFNBSkQ7O0FBS0EsWUFBSUEsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDcEJELFVBQUFBLFdBQVc7QUFDWjs7QUFDRCxZQUFJQyxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNuQkMsVUFBQUEsSUFBSSxDQUFDak0sR0FBTCxDQUFTLFVBQUNVLFVBQUQsRUFBZ0I7QUFDdkI2SyxZQUFBQSxJQUFJLENBQUNqTCxLQUFLLENBQUMwSSxrQkFBRCxDQUFOLENBQUosQ0FBZ0N5QixXQUFoQyxDQUE0Q3RLLElBQTVDLENBQWlETyxVQUFqRDtBQUNBa0ssWUFBQUEsZUFBZSxDQUFDekssSUFBaEIsQ0FBcUJPLFVBQXJCO0FBQ0QsV0FIRDtBQUlEO0FBQ0YsT0FqQkQ7O0FBa0JBcUwsTUFBQUEsV0FBVztBQUNYL0MsTUFBQUEsa0JBQWtCO0FBQ2xCeUMsTUFBQUEsa0JBQWtCO0FBdEJTOztBQUM3QixTQUFLLElBQUl2SixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQUEsWUFBbkJBLENBQW1CO0FBc0IzQjtBQUNGLEdBeEJEOztBQTBCQSxHQUFDLFNBQVNnSyxhQUFULEdBQXlCO0FBQ3hCLFNBQUssSUFBSTFMLElBQVQsSUFBaUIrSyxJQUFqQixFQUF1QjtBQUNyQixVQUFNWSxjQUFjLEdBQUdaLElBQUksQ0FBQy9LLElBQUQsQ0FBSixDQUFXaUssV0FBbEM7QUFDQXJLLE1BQUFBLHNEQUFBLENBQWdCLENBQWhCLEVBQW1CSSxJQUFuQixFQUF5QjJMLGNBQXpCO0FBQ0Q7QUFDRixHQUxEO0FBTUQ7Ozs7Ozs7Ozs7Ozs7OztBQ3RIRDtBQUVlLFNBQVNySixZQUFULEdBQXdCO0FBQ3JDLE1BQU1mLElBQUksR0FBR25CLFFBQVEsQ0FBQ29CLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLE1BQU1vSyxxQkFBcUIsR0FBR3hMLFFBQVEsQ0FBQ29CLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBOUI7QUFDQSxNQUFNcUssc0JBQXNCLEdBQUd6TCxRQUFRLENBQUNvQixhQUFULENBQXVCLEtBQXZCLENBQS9CO0FBQ0EsTUFBTXNLLFlBQVksR0FBRzFMLFFBQVEsQ0FBQ29CLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBckI7QUFDQSxNQUFNdUssU0FBUyxHQUFHM0wsUUFBUSxDQUFDb0IsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxDQUNkLE9BRGMsRUFFZCxPQUZjLEVBR2QsT0FIYyxFQUlkLE9BSmMsRUFLZCxPQUxjLEVBTWQsT0FOYyxFQU9kLE9BUGMsRUFRZCxPQVJjLEVBU2QsT0FUYyxFQVVkLFFBVmMsRUFXZCxRQVhjLENBQWhCO0FBY0FGLEVBQUFBLElBQUksQ0FBQ04sRUFBTCxHQUFVLGtCQUFWO0FBQ0EySyxFQUFBQSxxQkFBcUIsQ0FBQzNLLEVBQXRCLEdBQTJCLHVCQUEzQjtBQUNBNEssRUFBQUEsc0JBQXNCLENBQUM1SyxFQUF2QixHQUE0Qix3QkFBNUI7QUFDQTZLLEVBQUFBLFlBQVksQ0FBQzdLLEVBQWIsR0FBa0IsY0FBbEI7QUFDQThLLEVBQUFBLFNBQVMsQ0FBQzlLLEVBQVYsR0FBZSxXQUFmO0FBQ0E2SyxFQUFBQSxZQUFZLENBQUNqRyxTQUFiLEdBQXlCLFdBQXpCO0FBQ0FrRyxFQUFBQSxTQUFTLENBQUNsRyxTQUFWLEdBQXNCLE9BQXRCOztBQUVBLE9BQUssSUFBSW5FLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsSUFBcEIsRUFBMEJBLENBQUMsRUFBM0IsRUFBK0I7QUFDN0IsUUFBTUMsYUFBYSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLENBQXRCO0FBQ0EsUUFBTTNCLElBQUksR0FBR0MsUUFBUSxDQUFDb0IsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0FyQixJQUFBQSxJQUFJLENBQUNHLFNBQUwsQ0FBZUMsR0FBZixDQUFtQiw2QkFBbkI7QUFDQUosSUFBQUEsSUFBSSxDQUFDRyxTQUFMLENBQWVDLEdBQWYsQ0FBbUJrQixPQUFPLENBQUNFLGFBQUQsQ0FBMUI7QUFDQUosSUFBQUEsSUFBSSxDQUFDUSxNQUFMLENBQVk1QixJQUFaO0FBQ0Q7O0FBQ0QsT0FBSyxJQUFJdUIsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBRyxHQUFwQixFQUF5QkEsRUFBQyxFQUExQixFQUE4QjtBQUM1QixRQUFNdkIsS0FBSSxHQUFHQyxRQUFRLENBQUNvQixhQUFULENBQXVCLEtBQXZCLENBQWI7O0FBQ0FyQixJQUFBQSxLQUFJLENBQUNjLEVBQUwsR0FBVTVCLCtEQUFXLENBQUNxQyxFQUFELENBQXJCOztBQUNBdkIsSUFBQUEsS0FBSSxDQUFDRyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsaUJBQW5COztBQUNBcUwsSUFBQUEscUJBQXFCLENBQUM3SixNQUF0QixDQUE2QjVCLEtBQTdCO0FBQ0Q7O0FBQ0RDLEVBQUFBLFFBQVEsQ0FBQzRCLElBQVQsQ0FBY0QsTUFBZCxDQUFxQlIsSUFBckI7QUFDQXNLLEVBQUFBLHNCQUFzQixDQUFDOUosTUFBdkIsQ0FBOEJnSyxTQUE5QjtBQUNBRixFQUFBQSxzQkFBc0IsQ0FBQzlKLE1BQXZCLENBQThCK0osWUFBOUI7QUFDQXZLLEVBQUFBLElBQUksQ0FBQ1EsTUFBTCxDQUFZNkoscUJBQVo7QUFDQXJLLEVBQUFBLElBQUksQ0FBQ1EsTUFBTCxDQUFZOEosc0JBQVo7QUFDRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2hERDtBQUNBO0FBRWUsU0FBU2pGLFdBQVQsR0FBdUI7QUFDcEN0RSxFQUFBQSxvRUFBWTtBQUNaaUcsRUFBQUEsdUVBQWU7QUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUNBO0FBRWUsU0FBUzJELFFBQVQsR0FBb0I7QUFDakMsTUFBTUMsT0FBTyxHQUFHLElBQUlGLGtEQUFKLENBQVcsT0FBWCxDQUFoQjtBQUNBLE1BQU1HLE9BQU8sR0FBRyxJQUFJSCxrREFBSixDQUFXLElBQVgsQ0FBaEI7QUFDQSxNQUFJSSxpQkFBaUIsR0FBRyxJQUFJTCxxREFBSixFQUF4QjtBQUNBLE1BQUlNLGlCQUFpQixHQUFHLElBQUlOLHFEQUFKLEVBQXhCOztBQUVBLE1BQU1PLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVk7QUFDeEJGLElBQUFBLGlCQUFpQixHQUFHLElBQUlMLHFEQUFKLEVBQXBCO0FBQ0FNLElBQUFBLGlCQUFpQixHQUFHLElBQUlOLHFEQUFKLEVBQXBCO0FBQ0QsR0FIRDs7QUFLQSxNQUFNak0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ3lNLE1BQUQsRUFBWTtBQUMvQixRQUFJQSxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUNoQixhQUFPSCxpQkFBaUIsQ0FBQ0ksS0FBekI7QUFDRDs7QUFDRCxRQUFJRCxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUNoQixhQUFPRixpQkFBaUIsQ0FBQ0csS0FBekI7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsTUFBTS9CLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNnQyxLQUFELEVBQVExTSxJQUFSLEVBQWMyTSxTQUFkLEVBQTRCO0FBQzdDLFFBQUlELEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZMLE1BQUFBLGlCQUFpQixDQUFDTyxVQUFsQixDQUE2QjVNLElBQTdCLEVBQW1DMk0sU0FBbkM7QUFDRDs7QUFDRCxRQUFJRCxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmSixNQUFBQSxpQkFBaUIsQ0FBQ00sVUFBbEIsQ0FBNkI1TSxJQUE3QixFQUFtQzJNLFNBQW5DO0FBQ0Q7QUFDRixHQVBEOztBQVNBLE1BQU14TCxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDakIsVUFBRCxFQUFnQjtBQUM3QmlNLElBQUFBLE9BQU8sQ0FBQ1UsWUFBUixDQUFxQlAsaUJBQXJCLEVBQXdDcE0sVUFBeEM7QUFDQWtNLElBQUFBLE9BQU8sQ0FBQ1UsU0FBUixDQUFrQlQsaUJBQWxCO0FBQ0QsR0FIRDs7QUFLQSxTQUFPO0FBQ0xFLElBQUFBLEtBQUssRUFBTEEsS0FESztBQUVMeE0sSUFBQUEsWUFBWSxFQUFaQSxZQUZLO0FBR0wySyxJQUFBQSxVQUFVLEVBQVZBLFVBSEs7QUFJTHZKLElBQUFBLE1BQU0sRUFBTkE7QUFKSyxHQUFQO0FBTUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NEOzs7Ozs7SUFFcUI2Szs7Ozs7Ozs7bUNBQ1g7QUFDTnJILE1BQUFBLE9BQU8sRUFBRTtBQUNQMUUsUUFBQUEsUUFBUSxFQUFFLEVBREg7QUFFUEQsUUFBQUEsSUFBSSxFQUFFLElBQUkrTSxnREFBSixDQUFTLENBQVQ7QUFGQyxPQURIO0FBS05qRSxNQUFBQSxVQUFVLEVBQUU7QUFDVjdJLFFBQUFBLFFBQVEsRUFBRSxFQURBO0FBRVZELFFBQUFBLElBQUksRUFBRSxJQUFJK00sZ0RBQUosQ0FBUyxDQUFUO0FBRkksT0FMTjtBQVNOakgsTUFBQUEsU0FBUyxFQUFFO0FBQ1Q3RixRQUFBQSxRQUFRLEVBQUUsRUFERDtBQUVURCxRQUFBQSxJQUFJLEVBQUUsSUFBSStNLGdEQUFKLENBQVMsQ0FBVDtBQUZHLE9BVEw7QUFhTmhFLE1BQUFBLEdBQUcsRUFBRTtBQUNIOUksUUFBQUEsUUFBUSxFQUFFLEVBRFA7QUFFSEQsUUFBQUEsSUFBSSxFQUFFLElBQUkrTSxnREFBSixDQUFTLENBQVQ7QUFGSCxPQWJDO0FBaUJOL0QsTUFBQUEsVUFBVSxFQUFFO0FBQ1YvSSxRQUFBQSxRQUFRLEVBQUUsRUFEQTtBQUVWRCxRQUFBQSxJQUFJLEVBQUUsSUFBSStNLGdEQUFKLENBQVMsQ0FBVDtBQUZJO0FBakJOOztrQ0FzQkQ7O29DQUNFOzs7OztXQUVULG9CQUFXL00sSUFBWCxFQUFpQmdOLGlCQUFqQixFQUFvQztBQUNsQyxXQUFLUCxLQUFMLENBQVd6TSxJQUFYLEVBQWlCQyxRQUFqQixHQUE0QitNLGlCQUE1QjtBQUNEOzs7V0FPRCx3QkFBZUMsZ0JBQWYsRUFBaUM7QUFDL0IsVUFBSUMsSUFBSSxHQUFHLElBQVg7O0FBQ0EsV0FBSyxJQUFJbE4sSUFBVCxJQUFpQixLQUFLeU0sS0FBdEIsRUFBNkI7QUFDM0IsWUFBTVUsT0FBTyxHQUFHLEtBQUtWLEtBQUwsQ0FBV3pNLElBQVgsRUFBaUJDLFFBQWpCLENBQTBCNkMsUUFBMUIsQ0FBbUNtSyxnQkFBbkMsQ0FBaEI7O0FBQ0EsWUFBSUUsT0FBSixFQUFhO0FBQ1gsZUFBS0MsSUFBTCwwQkFBWSxJQUFaLG9DQUFZLElBQVosRUFBOEJILGdCQUE5QjtBQUNBLGNBQU1JLFNBQVMsR0FBRyxLQUFLWixLQUFMLENBQVd6TSxJQUFYLEVBQWlCQyxRQUFqQixDQUEwQnFOLE9BQTFCLENBQWtDTCxnQkFBbEMsQ0FBbEI7QUFDQSxlQUFLUixLQUFMLENBQVd6TSxJQUFYLEVBQWlCQSxJQUFqQixDQUFzQnVOLEdBQXRCLENBQTBCRixTQUExQjtBQUNBSCxVQUFBQSxJQUFJLEdBQUcsS0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsVUFBSUEsSUFBSixFQUFVO0FBQ1IsYUFBS00sTUFBTCwwQkFBYyxJQUFkLHNDQUFjLElBQWQsRUFBaUNQLGdCQUFqQztBQUNEO0FBQ0Y7OztXQUNELG9CQUFXO0FBQ1QsVUFBSVEsV0FBVyxHQUFHLElBQWxCOztBQUNBLFdBQUssSUFBSXpOLElBQVQsSUFBaUIsS0FBS3lNLEtBQXRCLEVBQTZCO0FBQzNCLFlBQU1pQixhQUFhLEdBQUcsS0FBS2pCLEtBQUwsQ0FBV3pNLElBQVgsRUFBaUJBLElBQWpCLENBQXNCMk4sT0FBdEIsRUFBdEI7O0FBQ0EsWUFBSUQsYUFBYSxLQUFLLEtBQXRCLEVBQTZCO0FBQzNCRCxVQUFBQSxXQUFXLEdBQUcsS0FBZDtBQUNBO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPQSxXQUFQO0FBQ0Q7Ozs7Ozt3QkEvQmFSLGtCQUFrQjtBQUM5QixTQUFPLDZCQUFJLEtBQUtPLE1BQVQsSUFBaUJQLGdCQUFqQixHQUFtQ1csSUFBbkMsRUFBUDtBQUNEOzt1QkFDWVgsa0JBQWtCO0FBQzdCLFNBQU8sNkJBQUksS0FBS0csSUFBVCxJQUFlSCxnQkFBZixHQUFpQ1csSUFBakMsRUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNwQ2tCM0I7QUFDbkIsa0JBQVlPLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxtQ0FHWixFQUhZOztBQUFBLDZDQUlGLEVBSkU7O0FBQUE7QUFBQTtBQUFBLGFBU0ssWUFBTTtBQUM3QixZQUFNbE4sT0FBTyxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDLEdBQTlDLENBQWhCO0FBQ0FBLFFBQUFBLE9BQU8sQ0FBQ0UsR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBWTtBQUN0QixlQUFLLElBQUlpQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQzNCLHdDQUFJLHNEQUFKLFdBQUksWUFBNkJqQyxNQUE3QixTQUFzQ2lDLENBQXRDLEVBQUo7QUFDRDtBQUNGLFNBSkQ7QUFLRCxPQVB1QjtBQVRKOztBQUNsQixTQUFLOEssTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7V0E4QkQsbUJBQVVFLEtBQVYsRUFBaUI7QUFDZixVQUFJLEtBQUtGLE1BQUwsS0FBZ0IsSUFBcEIsRUFBMEI7QUFDeEIsY0FBTSxJQUFJcUIsS0FBSixDQUFVLHVCQUFWLENBQU47QUFDRDs7QUFDRCxVQUFNQyxVQUFVLDBCQUFHLElBQUgsNEJBQUcsSUFBSCxDQUFoQjs7QUFDQSxXQUFLQyxlQUFMLDBCQUF1QixJQUF2QiwwREFBdUIsSUFBdkIsRUFBb0RELFVBQXBEO0FBQ0EsV0FBS0UsS0FBTCwwQkFBYSxJQUFiLDBDQUFhLElBQWIsRUFBa0NGLFVBQWxDO0FBQ0FwQixNQUFBQSxLQUFLLENBQUN1QixjQUFOLENBQXFCSCxVQUFyQjtBQUNBLGFBQU9BLFVBQVA7QUFDRDs7O1dBQ0Qsc0JBQWFwQixLQUFiLEVBQW9CeE0sVUFBcEIsRUFBZ0M7QUFDOUIsVUFBSSxLQUFLc00sTUFBTCxLQUFnQixPQUFwQixFQUE2QjtBQUMzQixjQUFNLElBQUlxQixLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQUNEOztBQUNELFVBQU1LLGNBQWMsMEJBQUcsSUFBSCwwREFBRyxJQUFILEVBQWdDaE8sVUFBaEMsQ0FBcEI7O0FBQ0EsV0FBSzZOLGVBQUwsR0FBdUJHLGNBQXZCO0FBQ0EsV0FBS0YsS0FBTCwwQkFBYSxJQUFiLDBDQUFhLElBQWIsRUFBa0M5TixVQUFsQztBQUNBd00sTUFBQUEsS0FBSyxDQUFDdUIsY0FBTixDQUFxQi9OLFVBQXJCO0FBQ0EsYUFBT0EsVUFBUDtBQUNEOzs7Ozs7bUNBN0N3QkEsWUFBWTtBQUNuQyxPQUFLNk4sZUFBTCxnQ0FBMkIsS0FBS0EsZUFBaEMsSUFBaUQ3TixVQUFqRDtBQUNEOztxQkFTVTtBQUNULFNBQU8sS0FBSzZOLGVBQUwsQ0FDTG5NLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsS0FBS2lNLGVBQUwsQ0FBcUJJLE1BQWhELENBREssQ0FBUDtBQUdEOztrQ0FDdUJqTyxZQUFZO0FBQ2xDLE1BQU1rTyxvQkFBb0Isc0JBQU8sS0FBS0wsZUFBWixDQUExQjs7QUFDQSxNQUFNTSxTQUFTLEdBQUdELG9CQUFvQixDQUFDRSxNQUFyQixDQUE0QixVQUFDQyxjQUFELEVBQW9CO0FBQ2hFLFdBQU9BLGNBQWMsS0FBS3JPLFVBQTFCO0FBQ0QsR0FGaUIsQ0FBbEI7QUFHQSxTQUFPbU8sU0FBUDtBQUNEOzswQkFDZXBCLGtCQUFrQjtBQUNoQyxzQ0FBVyxLQUFLZSxLQUFoQixJQUF1QmYsZ0JBQXZCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2hDa0JGO0FBQ25CLGdCQUFZb0IsTUFBWixFQUFvQjtBQUFBOztBQUFBOztBQUNsQixTQUFLZixJQUFMLEdBQVksSUFBSTFNLEtBQUosQ0FBVXlOLE1BQVYsRUFBa0JLLElBQWxCLENBQXVCLEtBQXZCLENBQVo7QUFDRDs7OztXQU9ELGFBQUlDLFlBQUosRUFBa0I7QUFDaEIsV0FBS3JCLElBQUwsMEJBQVksSUFBWixvQ0FBWSxJQUFaLEVBQThCLEtBQUtBLElBQW5DLEVBQXlDcUIsWUFBekM7QUFDRDs7O1dBQ0QsbUJBQVU7QUFDUixhQUFPLEtBQUtyQixJQUFMLENBQVVzQixLQUFWLENBQWdCLFVBQUN6TyxRQUFEO0FBQUEsZUFBY0EsUUFBUSxLQUFLLElBQTNCO0FBQUEsT0FBaEIsQ0FBUDtBQUNEOzs7Ozs7dUJBVlkwTyxZQUFZRixjQUFjO0FBQ3JDLE1BQU1HLElBQUksc0JBQU9ELFVBQVAsQ0FBVjs7QUFDQUMsRUFBQUEsSUFBSSxDQUFDSCxZQUFELENBQUosR0FBcUIsSUFBckI7QUFDQSxTQUFPRyxJQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUSDtBQUNBO0FBQ0E7QUFFQSxJQUFNaFAsSUFBSSxHQUFHc00sOERBQVEsRUFBckI7QUFDQTdELCtFQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFI7QUFDa0k7QUFDN0I7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLGdEQUFnRCxvQkFBb0IsR0FBRyxrQkFBa0IsdUJBQXVCLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLGlCQUFpQixvQkFBb0IsR0FBRyxpQkFBaUIsa0JBQWtCLDJDQUEyQyx3Q0FBd0MsaUJBQWlCLGdCQUFnQixHQUFHLHNCQUFzQiw0QkFBNEIsR0FBRyxtQkFBbUIsOEJBQThCLEdBQUcsZUFBZSw4QkFBOEIsaUJBQWlCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLG1CQUFtQix1QkFBdUIsY0FBYyxjQUFjLEdBQUcsZUFBZSx1QkFBdUIsY0FBYyxlQUFlLEdBQUcsdUJBQXVCLDBCQUEwQixHQUFHLFNBQVMsOEdBQThHLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGdDQUFnQyxvQkFBb0IsR0FBRyxrQkFBa0IsdUJBQXVCLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLGlCQUFpQixvQkFBb0IsR0FBRyxpQkFBaUIsa0JBQWtCLDJDQUEyQyx3Q0FBd0MsaUJBQWlCLGdCQUFnQixHQUFHLHNCQUFzQiw0QkFBNEIsR0FBRyxtQkFBbUIsOEJBQThCLEdBQUcsZUFBZSw4QkFBOEIsaUJBQWlCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLG1CQUFtQix1QkFBdUIsY0FBYyxjQUFjLEdBQUcsZUFBZSx1QkFBdUIsY0FBYyxlQUFlLEdBQUcsdUJBQXVCLDBCQUEwQixHQUFHLHFCQUFxQjtBQUM1bEU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUNrSTtBQUM3QjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELG9CQUFvQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1QixzQkFBc0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIscUJBQXFCLEdBQUcsd0JBQXdCLFFBQVEsaUNBQWlDLEtBQUssVUFBVSxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxZQUFZLGtDQUFrQyxLQUFLLEdBQUcsU0FBUyw4R0FBOEcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLGdDQUFnQyxvQkFBb0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1QixzQkFBc0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHFCQUFxQixHQUFHLHdCQUF3QixRQUFRLGlDQUFpQyxLQUFLLFVBQVUsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssV0FBVyxpQ0FBaUMsS0FBSyxXQUFXLGlDQUFpQyxLQUFLLFdBQVcsaUNBQWlDLEtBQUssWUFBWSxrQ0FBa0MsS0FBSyxHQUFHLHFCQUFxQjtBQUNyK0g7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUNrSTtBQUM3QjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELHNCQUFzQixHQUFHLFVBQVUsa0JBQWtCLDRCQUE0Qiw0QkFBNEIsR0FBRyxVQUFVLHNCQUFzQixHQUFHLFlBQVksc0JBQXNCLEdBQUcsaUJBQWlCLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLGlCQUFpQixnQkFBZ0IsR0FBRyxtQkFBbUIsa0JBQWtCLDJDQUEyQyx3Q0FBd0MsaUJBQWlCLGdCQUFnQixHQUFHLFlBQVksaUJBQWlCLDhCQUE4QixHQUFHLFlBQVksNEJBQTRCLEdBQUcsdUJBQXVCLDRCQUE0QixHQUFHLCtCQUErQiw4QkFBOEIsR0FBRyxpQkFBaUIsOEJBQThCLEdBQUcsdUJBQXVCLDRCQUE0QixHQUFHLFNBQVMsNEdBQTRHLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGlDQUFpQyxzQkFBc0IsR0FBRyxVQUFVLGtCQUFrQiw0QkFBNEIsNEJBQTRCLEdBQUcsVUFBVSxzQkFBc0IsR0FBRyxZQUFZLHNCQUFzQixHQUFHLGlCQUFpQixrQkFBa0IsMkNBQTJDLHdDQUF3QyxpQkFBaUIsZ0JBQWdCLEdBQUcsbUJBQW1CLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLGlCQUFpQixnQkFBZ0IsR0FBRyxZQUFZLGlCQUFpQiw4QkFBOEIsR0FBRyxZQUFZLDRCQUE0QixHQUFHLHVCQUF1Qiw0QkFBNEIsR0FBRywrQkFBK0IsOEJBQThCLEdBQUcsaUJBQWlCLDhCQUE4QixHQUFHLHVCQUF1Qiw0QkFBNEIsR0FBRyxxQkFBcUI7QUFDaHRFO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDa0k7QUFDN0I7QUFDYTtBQUNEO0FBQ0E7QUFDakgsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRiwwQkFBMEIsdUZBQWlDO0FBQzNELDBCQUEwQixzRkFBaUM7QUFDM0QsMEJBQTBCLHNGQUFpQztBQUMzRDtBQUNBLG1EQUFtRCxrRUFBa0U7QUFDckg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNidkM7QUFDa0k7QUFDN0I7QUFDZTtBQUNwSCw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLDBCQUEwQix5RkFBaUM7QUFDM0QsMkhBQTJIO0FBQzNIO0FBQ0Esc0RBQXNELGtCQUFrQiw0QkFBNEIsd0JBQXdCLDBDQUEwQyxxQkFBcUIsR0FBRyx3QkFBd0IsNEJBQTRCLEdBQUcsZ0JBQWdCLDhCQUE4Qiw4QkFBOEIsR0FBRyxpQkFBaUIsd0JBQXdCLDZDQUE2QyxHQUFHLGlCQUFpQix3QkFBd0IsOEJBQThCLEdBQUcsZ0JBQWdCLHdCQUF3Qiw4QkFBOEIsR0FBRyxVQUFVLHdCQUF3Qiw4QkFBOEIsR0FBRyxvQkFBb0IsaUJBQWlCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsOEJBQThCLEdBQUcsZ0JBQWdCLGlCQUFpQix3QkFBd0IsR0FBRyxlQUFlLHdCQUF3Qiw4QkFBOEIsR0FBRyxTQUFTLDJHQUEyRyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsbURBQW1ELHFGQUFxRixnQkFBZ0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsMENBQTBDLHFCQUFxQixHQUFHLHdCQUF3Qiw0QkFBNEIsR0FBRyxnQkFBZ0IsOEJBQThCLDhCQUE4QixHQUFHLGlCQUFpQix3QkFBd0IsNkNBQTZDLEdBQUcsaUJBQWlCLHdCQUF3Qiw4QkFBOEIsR0FBRyxnQkFBZ0Isd0JBQXdCLDhCQUE4QixHQUFHLFVBQVUsd0JBQXdCLDhCQUE4QixHQUFHLG9CQUFvQixpQkFBaUIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3Qiw4QkFBOEIsR0FBRyxnQkFBZ0IsaUJBQWlCLHdCQUF3QixHQUFHLGVBQWUsd0JBQXdCLDhCQUE4QixHQUFHLHFCQUFxQjtBQUM3NEU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWdkM7QUFDa0k7QUFDN0I7QUFDZTtBQUNwSCw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLDBCQUEwQix5RkFBaUM7QUFDM0Q7QUFDQSxpREFBaUQsc0JBQXNCLHNCQUFzQixHQUFHLDZCQUE2Qiw4QkFBOEIsOEJBQThCLEdBQUcsOEJBQThCLDhCQUE4Qiw4QkFBOEIsR0FBRyxhQUFhLDhCQUE4QixpQkFBaUIsR0FBRyxZQUFZLDhCQUE4QixHQUFHLFlBQVksOEJBQThCLGlCQUFpQixHQUFHLFlBQVksOEJBQThCLGlCQUFpQixHQUFHLFlBQVksOEJBQThCLGlCQUFpQixHQUFHLFlBQVksOEJBQThCLGlCQUFpQixHQUFHLFlBQVksOEJBQThCLGlCQUFpQixHQUFHLFlBQVksOEJBQThCLGlCQUFpQixHQUFHLFVBQVUsOEJBQThCLGlCQUFpQixHQUFHLFlBQVksOEJBQThCLGlCQUFpQixHQUFHLGFBQWEsOEJBQThCLGlCQUFpQixHQUFHLGFBQWEsOEJBQThCLGlCQUFpQixHQUFHLFNBQVMsMkdBQTJHLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLGtEQUFrRCxXQUFXLHNCQUFzQixzQkFBc0IsR0FBRyw2QkFBNkIsOEJBQThCLDhCQUE4QixHQUFHLDhCQUE4Qiw4QkFBOEIsOEJBQThCLEdBQUcsYUFBYSw4QkFBOEIsaUJBQWlCLEdBQUcsWUFBWSw4QkFBOEIsR0FBRyxZQUFZLDhCQUE4QixpQkFBaUIsR0FBRyxZQUFZLDhCQUE4QixpQkFBaUIsR0FBRyxZQUFZLDhCQUE4QixpQkFBaUIsR0FBRyxZQUFZLDhCQUE4QixpQkFBaUIsR0FBRyxZQUFZLDhCQUE4QixpQkFBaUIsR0FBRyxZQUFZLDhCQUE4QixpQkFBaUIsR0FBRyxVQUFVLDhCQUE4QixpQkFBaUIsR0FBRyxZQUFZLDhCQUE4QixpQkFBaUIsR0FBRyxhQUFhLDhCQUE4QixpQkFBaUIsR0FBRyxhQUFhLDhCQUE4QixpQkFBaUIsR0FBRyxxQkFBcUI7QUFDeG1GO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUdkM7QUFDa0k7QUFDN0I7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix3SEFBd0g7QUFDeEg7QUFDQSxnREFBZ0Qsb0JBQW9CLEdBQUcsdUJBQXVCLHVCQUF1QixrQkFBa0IsMkNBQTJDLHdDQUF3QyxvQkFBb0IsaUJBQWlCLEdBQUcsNEJBQTRCLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLHVCQUF1QixlQUFlLGdCQUFnQixpQkFBaUIsZ0JBQWdCLDhCQUE4QixpQkFBaUIsR0FBRyw2QkFBNkIsa0JBQWtCLHdCQUF3QixrQ0FBa0Msd0JBQXdCLHVCQUF1QixhQUFhLGVBQWUsZ0JBQWdCLGdCQUFnQix3QkFBd0IsMkJBQTJCLEdBQUcsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsaUJBQWlCLHFCQUFxQix3Q0FBd0MsR0FBRyxtQkFBbUIsbUJBQW1CLHlDQUF5QyxHQUFHLHNCQUFzQiw4QkFBOEIsR0FBRyxrQkFBa0IsOEJBQThCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyw2QkFBNkIscUJBQXFCLEdBQUcsU0FBUyw4R0FBOEcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSwwR0FBMEcsVUFBVSxvQkFBb0IsR0FBRyx1QkFBdUIsdUJBQXVCLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLG9CQUFvQixpQkFBaUIsR0FBRyw0QkFBNEIsa0JBQWtCLDJDQUEyQyx3Q0FBd0MsdUJBQXVCLGVBQWUsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsOEJBQThCLGlCQUFpQixHQUFHLDZCQUE2QixrQkFBa0Isd0JBQXdCLGtDQUFrQyx3QkFBd0IsdUJBQXVCLGFBQWEsZUFBZSxnQkFBZ0IsZ0JBQWdCLHdCQUF3QiwyQkFBMkIsR0FBRyxnQkFBZ0Isa0JBQWtCLDRCQUE0QixpQkFBaUIscUJBQXFCLHdDQUF3QyxHQUFHLG1CQUFtQixtQkFBbUIseUNBQXlDLEdBQUcsc0JBQXNCLDhCQUE4QixHQUFHLGtCQUFrQiw4QkFBOEIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDZCQUE2QixxQkFBcUIsR0FBRyxxQkFBcUI7QUFDenNHO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSdkM7QUFDc0g7QUFDN0I7QUFDdUM7QUFDRztBQUNBO0FBQ25JLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YsMEJBQTBCLGlIQUFpQztBQUMzRCwwQkFBMEIsb0hBQWlDO0FBQzNELDBCQUEwQixvSEFBaUM7QUFDM0Q7QUFDQSxtREFBbUQsa0VBQWtFO0FBQ3JIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDYjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixrQ0FBa0M7O0FBRWxDLDhCQUE4Qjs7QUFFOUIsa0RBQWtELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Q7O0FBRTdTLHVDQUF1Qyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxvQkFBb0I7O0FBRXpLLHlDQUF5QywwR0FBMEcsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsdUNBQXVDLGNBQWMsV0FBVyxZQUFZLFVBQVUsTUFBTSxtREFBbUQsVUFBVSxzQkFBc0I7O0FBRW5mLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0EsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDaEdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUMvQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvaGVscGVycy9jb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvZ2FtZV9ib2FyZHMvaGVscGVycy9jb2xvcl9wbGF5ZXJfc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL2hlbHBlcnMvZXZlbnRfbGlzdGVuZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9oZWxwZXJzL3JlbmRlcl9iYWNrZ3JvdW5kX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9oZWxwZXJzL3JlbmRlcl9nYW1lYm9hcmRfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9yZW5kZXJfZ2FtZV9ib2FyZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9iYXR0bGVzaGlwX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2NvbG9yX2JhdHRsZXNoaXBfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvY29sb3Jfc2hpcF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9jb2xvcl9zdGFydF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9jb2xvcl93YXRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2xpc3RlbmVyc19oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9yZW5kZXJfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvc2hpcF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9zdGFydF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2hlbHBlcnMvbG9naWNfbGlzdGVuZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9oZWxwZXJzL3BsYWNlX2FpX3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9oZWxwZXJzL3JlbmRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvcGxhY2Vfc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL2dhbWVfbG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvZ2FtZV9ib2FyZHMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2FuaW1hdG9yLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9zaGlwcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy93YXRlci5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09PUkRJTkFURVMgPSBbXTtcbmNvbnN0IExFVFRFUlMgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onXTtcbmNvbnN0IE5VTUJFUlMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG5MRVRURVJTLm1hcCgobGV0dGVyKSA9PiB7XG4gIE5VTUJFUlMubWFwKChudW1iZXIpID0+IHtcbiAgICBDT09SRElOQVRFUy5wdXNoKGAke2xldHRlcn0ke251bWJlcn1gKTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ09PUkRJTkFURVM7XG4iLCJpbXBvcnQgeyBHQU1FIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcl9wbGF5ZXJfc2hpcHMoKSB7XG4gIGNvbnN0IFNISVBTID0gR0FNRS5SRVRVUk5fU0hJUFMoMSk7XG4gIGZvciAobGV0IHNoaXAgaW4gU0hJUFMpIHtcbiAgICBjb25zdCBDT09SRElOQVRFUyA9IFNISVBTW3NoaXBdLnBvc2l0aW9uO1xuICAgIENPT1JESU5BVEVTLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGF5ZXJfJHtjb29yZGluYXRlfWApO1xuICAgICAgVElMRS5jbGFzc0xpc3QuYWRkKCdwbGFjZWRfc2hpcF90aWxlJyk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdBTUUgfSBmcm9tICcuLi8uLi8uLi8uLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV2ZW50X2xpc3RlbmVycygpIHtcbiAgY29uc3QgQUlfVElMRVMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FpX2JvYXJkJykpO1xuICBjb25zdCBBSV9USUxFX0NMSUNLX0hBTkRMRVIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBJRCA9IGV2ZW50LnRhcmdldC5pZC5zbGljZSgzKTtcbiAgICBHQU1FLkFUVEFDSyhJRCk7XG5cbiAgICAvLyB0b2RvIHJlbmRlciB0aGUgY29sb3JzIGZvciBoaXQgc3BhY2VzIGFuZCBtaXNzZWRcbiAgfTtcblxuICBBSV9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQUlfVElMRV9DTElDS19IQU5ETEVSKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJfYmFja2dyb3VuZF90aWxlcygpIHtcbiAgY29uc3QgTUFJTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3QgQ0xBU1NFUyA9IFtcbiAgICAnYmx1ZTEnLFxuICAgICdibHVlMicsXG4gICAgJ2JsdWUzJyxcbiAgICAnYmx1ZTQnLFxuICAgICdibHVlNScsXG4gICAgJ2JsdWU2JyxcbiAgICAnYmx1ZTcnLFxuICAgICdibHVlOCcsXG4gICAgJ2JsdWU5JyxcbiAgICAnYmx1ZTEwJyxcbiAgICAnZ3JlZW4xJyxcbiAgXTtcbiAgTUFJTi5pZCA9ICdnYW1lX2JvYXJkcyc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzNTAwOyBpKyspIHtcbiAgICBjb25zdCBSQU5ET01fTlVNQkVSID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZHNfYmFja2dyb3VuZCcpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZChDTEFTU0VTW1JBTkRPTV9OVU1CRVJdKTtcbiAgICBNQUlOLmFwcGVuZChUSUxFKTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKE1BSU4pO1xufVxuIiwiaW1wb3J0IENPT1JESU5BVEVTIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvY29vcmRpbmF0ZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJfZ2FtZWJvYXJkX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVfYm9hcmRzJyk7XG4gIGNvbnN0IFBMQVlFUl9CT0FSRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBBSV9CT0FSRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIFBMQVlFUl9CT0FSRC5jbGFzc0xpc3QuYWRkKCdnYW1lX2JvYXJkJyk7XG4gIEFJX0JPQVJELmNsYXNzTGlzdC5hZGQoJ2dhbWVfYm9hcmQnKTtcbiAgUExBWUVSX0JPQVJELmlkID0gJ3BsYXllcl9ib2FyZCc7XG4gIEFJX0JPQVJELmlkID0gJ2FpX2JvYXJkJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIGNvbnN0IFBMQVlFUl9CT0FSRF9USUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgQUlfQk9BUkRfVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgUExBWUVSX0JPQVJEX1RJTEUuY2xhc3NMaXN0LmFkZCgnZ2FtZV9ib2FyZF90aWxlJyk7XG4gICAgUExBWUVSX0JPQVJEX1RJTEUuY2xhc3NMaXN0LmFkZCgncGxheWVyX2JvYXJkJyk7XG4gICAgUExBWUVSX0JPQVJEX1RJTEUuaWQgPSBgcGxheWVyXyR7Q09PUkRJTkFURVNbaV19YDtcbiAgICBBSV9CT0FSRF9USUxFLmNsYXNzTGlzdC5hZGQoJ2dhbWVfYm9hcmRfdGlsZScpO1xuICAgIEFJX0JPQVJEX1RJTEUuY2xhc3NMaXN0LmFkZCgnYWlfYm9hcmQnKTtcbiAgICBBSV9CT0FSRF9USUxFLmlkID0gYGFpXyR7Q09PUkRJTkFURVNbaV19YDtcblxuICAgIFBMQVlFUl9CT0FSRC5hcHBlbmQoUExBWUVSX0JPQVJEX1RJTEUpO1xuICAgIEFJX0JPQVJELmFwcGVuZChBSV9CT0FSRF9USUxFKTtcbiAgfVxuXG4gIE1BSU4uYXBwZW5kKFBMQVlFUl9CT0FSRCk7XG4gIE1BSU4uYXBwZW5kKEFJX0JPQVJEKTtcbn1cbiIsImltcG9ydCByZW5kZXJfYmFja2dyb3VuZF90aWxlcyBmcm9tICcuL3JlbmRlcl9iYWNrZ3JvdW5kX3RpbGVzLmpzJztcbmltcG9ydCByZW5kZXJfZ2FtZWJvYXJkX3RpbGVzIGZyb20gJy4vcmVuZGVyX2dhbWVib2FyZF90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl90aWxlcygpIHtcbiAgcmVuZGVyX2JhY2tncm91bmRfdGlsZXMoKTtcbiAgcmVuZGVyX2dhbWVib2FyZF90aWxlcygpO1xufVxuIiwiaW1wb3J0IHJlbmRlcl90aWxlcyBmcm9tICcuL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9wbGF5ZXJfc2hpcHMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX3BsYXllcl9zaGlwcy5qcyc7XG5pbXBvcnQgZXZlbnRfbGlzdGVuZXJzIGZyb20gJy4vaGVscGVycy9ldmVudF9saXN0ZW5lcnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJfZ2FtZV9ib2FyZHMoKSB7XG4gIHJlbmRlcl90aWxlcygpO1xuICBjb2xvcl9wbGF5ZXJfc2hpcHMoKTtcbiAgZXZlbnRfbGlzdGVuZXJzKCk7XG59XG4iLCJjb25zdCBBTklNQVRJT05TID0gKCgpID0+IHtcbiAgY29uc3QgUEVSSVNDT1BFX1NQSU5ORVIgPSAoKSA9PiB7XG4gICAgY29uc3QgTEVGVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoNzU5KTtcbiAgICBjb25zdCBSSUdIVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoNzYxKTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29mZicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29uJyk7XG4gICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIGlmIChMRUZUX1RJTEUuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdvbicpKSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb24nKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdwZXJpc2NvcGVfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncGVyaXNjb3BlX29mZicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3BlcmlzY29wZV9vZmYnKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdwZXJpc2NvcGVfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3BlcmlzY29wZV9vbicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBSQURBUl9TUElOTkVSMSA9ICgpID0+IHtcbiAgICBjb25zdCBMRUZUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3MTQpO1xuICAgIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3MTYpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBpZiAoTEVGVF9USUxFLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnb24nKSkge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb2ZmJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFJBREFSX1NQSU5ORVIyID0gKCkgPT4ge1xuICAgIGNvbnN0IExFRlRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDEwOTcpO1xuICAgIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxMDk5KTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgaWYgKExFRlRfVElMRS5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ29uJykpIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29uJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29mZicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBXQVRFUl9BTklNQVRJT04gPSAoKSA9PiB7XG4gICAgY29uc3QgV0FURVJfVElMRVMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dhdGVyJykpO1xuICAgIGNvbnN0IENMQVNTRVMgPSBbXG4gICAgICAnYmx1ZTEnLFxuICAgICAgJ2JsdWUyJyxcbiAgICAgICdibHVlMycsXG4gICAgICAnYmx1ZTQnLFxuICAgICAgJ2JsdWU1JyxcbiAgICAgICdibHVlNicsXG4gICAgICAnYmx1ZTcnLFxuICAgICAgJ2JsdWU4JyxcbiAgICAgICdibHVlOScsXG4gICAgICAnYmx1ZTEwJyxcbiAgICAgICdncmVlbjEnLFxuICAgIF07XG4gICAgV0FURVJfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICBjb25zdCBSQU5ET01fTlVNQkVSID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QgPSBgaG9tZXBlYWdlX3RpbGUgd2F0ZXIgJHtDTEFTU0VTW1JBTkRPTV9OVU1CRVJdfWA7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgU1VCX0FOSU1BVElPTiA9IHNldEludGVydmFsKFBFUklTQ09QRV9TUElOTkVSLCAxMDAwKTtcbiAgY29uc3QgQk9BVDEgPSBzZXRJbnRlcnZhbChSQURBUl9TUElOTkVSMSwgMTAwMCk7XG4gIGNvbnN0IEJPQVQyID0gc2V0SW50ZXJ2YWwoUkFEQVJfU1BJTk5FUjIsIDE1MDApO1xuICBjb25zdCBXQVRFUiA9IHNldEludGVydmFsKFdBVEVSX0FOSU1BVElPTiwgMTAwMCk7XG5cbiAgcmV0dXJuIHsgU1VCX0FOSU1BVElPTiwgQk9BVDEsIEJPQVQyLCBXQVRFUiB9O1xufSkoKTtcblxuZXhwb3J0IHsgQU5JTUFUSU9OUyB9O1xuIiwiaW1wb3J0IHsgSVRFUkFUT1IgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jb25zdCBCQVRUTEVTSElQID0ge1xuICBCOiBbMTUwLCAxNTQsIDIyMCwgMjI0LCAzNjAsIDM2NCwgNDMwLCA0MzYsIDQzNF0sXG4gIEE6IFsxNTYsIDE1OSwgMjI2LCAyMjksIDM2NiwgMzY5LCA0MzYsIDQzOSwgNTA2LCA1MDldLFxuICBUMTogWzE2MiwgMTYzLCAyMzIsIDIzMywgMzAyLCAzMDMsIDM3MiwgMzczLCA0NDIsIDQ0MywgNTEyLCA1MTNdLFxuICBUMjogWzE2NywgMTY4LCAyMzcsIDIzOCwgMzA3LCAzMDgsIDM3NywgMzc4LCA0NDcsIDQ0OCwgNTE3LCA1MThdLFxuICBMOiBbMTAxLCAxNzEsIDI0MSwgMzExLCAzODEsIDQ1MV0sXG4gIEU6IFsxNzYsIDI0NiwgMzg2LCA0NTZdLFxuICBTOiBbMTgxLCAyNTEsIDM5NCwgNDY0XSxcbiAgSDogWzExNiwgMTE5LCAxODYsIDE4OSwgMjU2LCAyNTksIDM5NiwgMzk5LCA0NjYsIDQ2OSwgNTM2LCA1MzldLFxuICBJOiBbMTkyLCAxOTMsIDI2MiwgMjYzLCAzMzIsIDMzMywgNDAyLCA0MDMsIDQ3MiwgNDczXSxcbiAgUDogWzE5NiwgMTk5LCAyNjYsIDI2OSwgNDA2LCA0NzYsIDU0Nl0sXG59O1xuXG4oZnVuY3Rpb24gZXpfbG9hZGVyKCkge1xuICBjb25zdCBCID0gQkFUVExFU0hJUC5CO1xuICBJVEVSQVRPUig4MCwgODQsIEIpO1xuICBJVEVSQVRPUigyOTAsIDI5NCwgQik7XG4gIElURVJBVE9SKDUwMCwgNTA0LCBCKTtcblxuICBjb25zdCBBID0gQkFUVExFU0hJUC5BO1xuICBJVEVSQVRPUig4NiwgODksIEEpO1xuICBJVEVSQVRPUigyOTYsIDI5OSwgQSk7XG5cbiAgY29uc3QgVDEgPSBCQVRUTEVTSElQLlQxO1xuICBJVEVSQVRPUig5MSwgOTQsIFQxKTtcblxuICBjb25zdCBUMiA9IEJBVFRMRVNISVAuVDI7XG4gIElURVJBVE9SKDk2LCA5OSwgVDIpO1xuXG4gIGNvbnN0IEwgPSBCQVRUTEVTSElQLkw7XG4gIElURVJBVE9SKDUyMSwgNTI0LCBMKTtcblxuICBjb25zdCBFID0gQkFUVExFU0hJUC5FO1xuICBJVEVSQVRPUigxMDYsIDEwOSwgRSk7XG4gIElURVJBVE9SKDMxNiwgMzE4LCBFKTtcbiAgSVRFUkFUT1IoNTI2LCA1MjksIEUpO1xuXG4gIGNvbnN0IFMgPSBCQVRUTEVTSElQLlM7XG4gIElURVJBVE9SKDExMSwgMTE0LCBTKTtcbiAgSVRFUkFUT1IoMzIxLCAzMjQsIFMpO1xuICBJVEVSQVRPUig1MzEsIDUzNCwgUyk7XG5cbiAgY29uc3QgSCA9IEJBVFRMRVNISVAuSDtcbiAgSVRFUkFUT1IoMzI2LCAzMjksIEgpO1xuXG4gIGNvbnN0IEkgPSBCQVRUTEVTSElQLkk7XG4gIElURVJBVE9SKDEyMSwgMTI0LCBJKTtcbiAgSVRFUkFUT1IoNTQxLCA1NDQsIEkpO1xuXG4gIGNvbnN0IFAgPSBCQVRUTEVTSElQLlA7XG4gIElURVJBVE9SKDEyNiwgMTI5LCBQKTtcbiAgSVRFUkFUT1IoMzM2LCAzMzksIFApO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQkFUVExFU0hJUDtcbiIsImltcG9ydCB7IEVaX1RJTEVfQ09MT1JJWkVSIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCBCQVRUTEVTSElQIGZyb20gJy4vYmF0dGxlc2hpcF90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX2JhdHRsZXNoaXBfdGlsZXMoKSB7XG4gIGZvciAobGV0IGxldHRlciBpbiBCQVRUTEVTSElQKSB7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQkFUVExFU0hJUFtsZXR0ZXJdLCAndGl0bGUnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ0FSUklFUiwgREVTVFJPWUVSLCBTVUJNQVJJTkUgfSBmcm9tICcuL3NoaXBfdGlsZXMuanMnO1xuaW1wb3J0IHsgRVpfVElMRV9DT0xPUklaRVIgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcl9zaGlwX3RpbGVzKCkge1xuICAoZnVuY3Rpb24gY2FycmllcigpIHtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLmJsYWNrX291dGxpbmUsICdzaGlwX2h1bGxfb3V0bGluZScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuaHVsbCwgJ3NoaXBfaHVsbCcpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuZGFya19ncmF5LCAnZGFya19ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5saWdodF9ncmF5LCAnbGlnaHRfZ3JheScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuc2hpcF9saWdodCwgJ3NoaXBfbGlnaHQnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLnN1cnJvdW5kaW5nX3dhdGVyX2RhcmssICdzdXJyb3VuZGluZ193YXRlcl9kYXJrJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoXG4gICAgICBDQVJSSUVSLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0LFxuICAgICAgJ3N1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0J1xuICAgICk7XG5cbiAgICBjb25zdCBDID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTc5NSk7XG4gICAgY29uc3QgViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE3OTYpO1xuICAgIGNvbnN0IE4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNzk3KTtcbiAgICBjb25zdCBTSVggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNzk5KTtcbiAgICBjb25zdCBOSU5FID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTgwMCk7XG4gICAgY29uc3QgVSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNDkpO1xuICAgIGNvbnN0IFMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgyMzUwKTtcbiAgICBjb25zdCBOMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTIpO1xuICAgIGNvbnN0IEEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgyMzUzKTtcbiAgICBjb25zdCBWMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTQpO1xuICAgIGNvbnN0IFkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgyMzU1KTtcbiAgICBjb25zdCBBTEwgPSBbQywgViwgTiwgU0lYLCBOSU5FLCBVLCBTLCBOMiwgQSwgVjIsIFldO1xuICAgIEFMTC5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc2hpcF90ZXh0Jyk7XG4gICAgfSk7XG4gICAgQy5pbm5lclRleHQgPSAnQyc7XG4gICAgVi5pbm5lclRleHQgPSAnVic7XG4gICAgTi5pbm5lclRleHQgPSAnTic7XG4gICAgU0lYLmlubmVyVGV4dCA9ICc2JztcbiAgICBOSU5FLmlubmVyVGV4dCA9ICc5JztcbiAgICBVLmlubmVyVGV4dCA9ICdVJztcbiAgICBTLmlubmVyVGV4dCA9ICdTJztcbiAgICBOMi5pbm5lclRleHQgPSAnTic7XG4gICAgQS5pbm5lclRleHQgPSAnQSc7XG4gICAgVjIuaW5uZXJUZXh0ID0gJ1YnO1xuICAgIFkuaW5uZXJUZXh0ID0gJ1knO1xuICB9KSgpO1xuXG4gIChmdW5jdGlvbiBkZXN0cm95ZXIoKSB7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLmJsYWNrX291dGxpbmUsICdzaGlwX2h1bGxfb3V0bGluZScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5odWxsLCAnc2hpcF9odWxsJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLmxpZ2h0X2dyYXksICdsaWdodF9ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLmRhcmtfZ3JheSwgJ2RhcmtfZ3JheScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5zaGlwX2xpZ2h0LCAnc2hpcF9saWdodCcpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFxuICAgICAgREVTVFJPWUVSLnN1cnJvdW5kaW5nX3dhdGVyX2RhcmssXG4gICAgICAnc3Vycm91bmRpbmdfd2F0ZXJfZGFyaydcbiAgICApO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFxuICAgICAgREVTVFJPWUVSLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0LFxuICAgICAgJ3N1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0J1xuICAgICk7XG5cbiAgICBjb25zdCBVID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1MCk7XG4gICAgY29uc3QgUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTEpO1xuICAgIGNvbnN0IE4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTUzKTtcbiAgICBjb25zdCBBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1NCk7XG4gICAgY29uc3QgViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTUpO1xuICAgIGNvbnN0IFkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTU2KTtcbiAgICBjb25zdCBBTEwgPSBbVSwgUywgTiwgQSwgViwgWV07XG4gICAgQUxMLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwX3RleHQnKTtcbiAgICB9KTtcbiAgICBVLmlubmVyVGV4dCA9ICdVJztcbiAgICBTLmlubmVyVGV4dCA9ICdTJztcbiAgICBOLmlubmVyVGV4dCA9ICdOJztcbiAgICBBLmlubmVyVGV4dCA9ICdBJztcbiAgICBWLmlubmVyVGV4dCA9ICdWJztcbiAgICBZLmlubmVyVGV4dCA9ICdZJztcbiAgfSkoKTtcblxuICAoZnVuY3Rpb24gc3VibWFyaW5lKCkge1xuICAgIC8vIEVaX1RJTEVfQ09MT1JJWkVSKFNVQk1BUklORS5odWxsLCAnc3ViJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLmRhcmtfZ3JheSwgJ2RhcmtfZ3JheScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFNVQk1BUklORS5sZWZ0X3BlcmlzY29wZSwgJ3BlcmlzY29wZV9vbicpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFNVQk1BUklORS5yaWdodF9wZXJpc2NvcGUsICdwZXJpc2NvcGVfb2ZmJyk7XG4gIH0pKCk7XG59XG4iLCJpbXBvcnQgU1RBUlQgZnJvbSAnLi9zdGFydF90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX3N0YXJ0X3RpbGVzKCkge1xuICBjb25zdCBBTEwgPSBTVEFSVC5hbGw7XG4gIEFMTC5tYXAoKHRpbGVfaWQpID0+IHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN0YXJ0XyR7dGlsZV9pZH1gKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X2JhY2tncm91bmQnKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0X3RleHQnKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcl93YXRlcl90aWxlcygpIHtcbiAgY29uc3QgQ0xBU1NFUyA9IFtcbiAgICAnYmx1ZTEnLFxuICAgICdibHVlMicsXG4gICAgJ2JsdWUzJyxcbiAgICAnYmx1ZTQnLFxuICAgICdibHVlNScsXG4gICAgJ2JsdWU2JyxcbiAgICAnYmx1ZTcnLFxuICAgICdibHVlOCcsXG4gICAgJ2JsdWU5JyxcbiAgICAnYmx1ZTEwJyxcbiAgICAnZ3JlZW4xJyxcbiAgXTtcbiAgY29uc3QgV0FURVJfVElMRVMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dhdGVyJykpO1xuICBXQVRFUl9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICBjb25zdCBSQU5ET01fTlVNQkVSID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICAgIHRpbGUuY2xhc3NMaXN0LmFkZChDTEFTU0VTW1JBTkRPTV9OVU1CRVJdKTtcbiAgfSk7XG59XG4iLCJjb25zdCBJVEVSQVRPUiA9IChtaW4sIG1heCwgdGFyZ2V0X2FycmF5KSA9PiB7XG4gIGZvciAobGV0IGkgPSBtaW47IGkgPCBtYXggKyAxOyBpKyspIHtcbiAgICB0YXJnZXRfYXJyYXkucHVzaChpKTtcbiAgfVxufTtcblxuY29uc3QgRVpfVElMRV9DT0xPUklaRVIgPSAoaW5wdXRfYXJyYXksIGlucHV0X2NsYXNzKSA9PiB7XG4gIGlucHV0X2FycmF5Lm1hcCgodGlsZV9pZCkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aWxlX2lkKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKGlucHV0X2NsYXNzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBJVEVSQVRPUiwgRVpfVElMRV9DT0xPUklaRVIgfTtcbiIsImltcG9ydCB7IEFOSU1BVElPTlMgfSBmcm9tICcuL2FuaW1hdGlvbnMuanMnO1xuaW1wb3J0IHBsYWNlX3NoaXBzIGZyb20gJy4uLy4uL3BsYWNlX3NoaXBzL3BsYWNlX3NoaXBzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdGVuZXJzX2hhbmRsZXJzKCkge1xuICBjb25zdCBTVEFSVF9CVVRUT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRfYnV0dG9uJyk7XG5cbiAgY29uc3QgU1RBUlRfQlVUVE9OX0VOVEVSX0hBTkRMRVIgPSAoKSA9PiB7XG4gICAgY29uc3QgU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkRfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRfYmFja2dyb3VuZCcpXG4gICAgKTtcbiAgICBTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkJyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X2JhY2tncm91bmQnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IFNUQVJUX0JVVFRPTl9URVhUX1RJTEVTID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0X3RleHQnKVxuICAgICk7XG4gICAgU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0X3RleHRfaG92ZXJlZCcpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydF90ZXh0Jyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgU1RBUlRfQlVUVE9OX0xFQVZFX0hBTkRMRVIgPSAoKSA9PiB7XG4gICAgY29uc3QgU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkRfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkJylcbiAgICApO1xuICAgIFNUQVJUX0JVVFRPTl9CQUNLR1JPVU5EX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdGFydF9iYWNrZ3JvdW5kJyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X2JhY2tncm91bmRfaG92ZXJlZCcpO1xuICAgIH0pO1xuICAgIGNvbnN0IFNUQVJUX0JVVFRPTl9URVhUX1RJTEVTID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0X3RleHRfaG92ZXJlZCcpXG4gICAgKTtcbiAgICBTVEFSVF9CVVRUT05fVEVYVF9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfdGV4dCcpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydF90ZXh0X2hvdmVyZWQnKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgU1RBUlRfQlVUVE9OX0NMSUNLX0hBTkRMRVIgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaW50ZXJ2YWwgaW4gQU5JTUFUSU9OUykge1xuICAgICAgY29uc3QgSU5URVJWQUwgPSBBTklNQVRJT05TW2ludGVydmFsXTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoSU5URVJWQUwpO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFuZGluZ19wYWdlJykucmVtb3ZlKCk7XG4gICAgcGxhY2Vfc2hpcHMoKTtcbiAgfTtcblxuICBTVEFSVF9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFNUQVJUX0JVVFRPTl9FTlRFUl9IQU5ETEVSKTtcbiAgU1RBUlRfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTVEFSVF9CVVRUT05fTEVBVkVfSEFORExFUik7XG4gIFNUQVJUX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFNUQVJUX0JVVFRPTl9DTElDS19IQU5ETEVSKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl90aWxlcygpIHtcbiAgY29uc3QgTUFJTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3QgSEVBRElORyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBTVEFSVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBNQUlOLmlkID0gJ2xhbmRpbmdfcGFnZSc7XG4gIEhFQURJTkcuaWQgPSAnYnNfaGVhZGluZyc7XG4gIFNUQVJULmlkID0gJ3N0YXJ0X2J1dHRvbic7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjgwMDsgaSsrKSB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuaWQgPSBpO1xuICAgIFRJTEUuY2xhc3NMaXN0ID0gJ2hvbWVwZWFnZV90aWxlIHdhdGVyJztcbiAgICBIRUFESU5HLmFwcGVuZChUSUxFKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDcwMDsgaSsrKSB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuaWQgPSBgc3RhcnRfJHtpfWA7XG4gICAgVElMRS5jbGFzc0xpc3QgPSAndGlsZSBzdGFydCBzdGFydF9iYWNrZ3JvdW5kJztcbiAgICBTVEFSVC5hcHBlbmQoVElMRSk7XG4gIH1cbiAgTUFJTi5hcHBlbmQoSEVBRElORyk7XG4gIE1BSU4uYXBwZW5kKFNUQVJUKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoTUFJTik7XG59XG4iLCJpbXBvcnQgeyBJVEVSQVRPUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmNvbnN0IENBUlJJRVIgPSB7XG4gIGJsYWNrX291dGxpbmU6IFtcbiAgICAxNDQ2LCAxNDUwLCAxNTE2LCAxNTIwLCAxNTg2LCAxNTkwLCAxNzIzLCAxNzMzLCAxODAzLCAxODU5LCAxODczLCAxODc3LFxuICAgIDE5MjgsIDE5NDMsIDE5NDYsIDE5NDgsIDE5NTUsIDE5NTYsIDE5ODIsIDE5ODMsIDE5ODcsIDE5ODgsIDE5OTIsIDE5OTMsXG4gICAgMTk5OCwgMjAxMywgMjAyNiwgMjA1MiwgMjA1NCwgMjA1NSwgMjA1NywgMjA1OSwgMjA2MCwgMjA2MiwgMjA2NCwgMjA2NSxcbiAgICAyMDY4LCAyMDgzLCAyMDg1LCAyMDg5LCAyMDkxLCAyMDk0LCAyMDk1LCAyMTIzLCAyMTI1LCAyMTI4LCAyMTMwLCAyMTMzLFxuICAgIDIxMzUsIDIxMzgsIDIxNTMsIDIxNTUsIDIxNTksIDIxNjEsIDIxNjUsIDIyNjAsIDIyNjEsIDIyNjIsIDIzMDksIDIzMzIsXG4gICAgMjMzMywgMjMzNCwgMjM3OSwgMjQwNCwgMjQ0OCwgMjQ3NSwgMjUxNywgMjU0NiwgMjU4NiwgMjYxNywgMjY1NiwgMjY4NyxcbiAgICAyNzI2LFxuICBdLFxuICBodWxsOiBbXG4gICAgMTUxOSwgMTkzOSwgMTk0MCwgMjA3OSwgMjA4MCwgMjY4OCwgMjY4OSwgMjY5MiwgMjY5MywgMjY5NiwgMjY5NywgMjcwMCxcbiAgICAyNzAxLCAyNzA0LCAyNzA1LCAyNzA4LCAyNzA5LCAyNzEyLCAyNzEzLCAyNzE2LCAyNzE3LCAyNzIwLCAyNzIxLCAyNzI0LFxuICAgIDI3MjUsXG4gIF0sXG4gIGRhcmtfZ3JheTogW1xuICAgIDExNjgsIDEyMzgsIDEzMDgsIDE1MTcsIDE1MTgsIDE5MjksIDE5MzAsIDE5NDEsIDE5NDIsIDE5NDcsIDIwMjUsIDIwNTMsXG4gICAgMjA1OCwgMjA2MywgMjA2OSwgMjA3MCwgMjA4MSwgMjA4MiwgMjEyNCwgMjEyOSwgMjEzNCwgMjA5MiwgMjA5MyxcbiAgXSxcbiAgbGlnaHRfZ3JheTogWzEwOTcsIDEwOTldLFxuICBzaGlwX2xpZ2h0OiBbMTA5OF0sXG4gIHN1cnJvdW5kaW5nX3dhdGVyX2Rhcms6IFtcbiAgICAyNTQ1LCAyNjE2LCAyNjg2LCAyNjkwLCAyNjkxLCAyNjk0LCAyNjk1LCAyNjk4LCAyNjk5LCAyNzAyLCAyNzAzLCAyNzA2LFxuICAgIDI3MDcsIDI3MTAsIDI3MTEsIDI3MTQsIDI3MTUsIDI3MTgsIDI3MTksIDI3MjIsIDI3MjMsIDI1ODcsIDI2NTcsIDI3MjcsXG4gICAgMjQ0OSwgMjUxOCwgMjUxOSwgMjU4OCwgMjY1OCxcbiAgXSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQ6IFtcbiAgICAyNTg5LCAyNjE1LCAyNjU5LCAyNjg0LCAyNjg1LCAyNzI4LCAyNzI5LCAyNzUzLCAyNzU0LCAyNzU1LCAyNzk4LCAyNzk5LFxuICBdLFxufTtcblxuY29uc3QgREVTVFJPWUVSID0ge1xuICBibGFja19vdXRsaW5lOiBbXG4gICAgMTE5NCwgMTE5OCwgMTIxMSwgMTI2NSwgMTI2OSwgMTI4MCwgMTQ3NCwgMTQ5MSwgMTQ5MiwgMTU0NSwgMTU2MSwgMTYxNixcbiAgICAxNjMxLCAxNjg3LCAxNzAxLFxuICBdLFxuICBodWxsOiBbMTY4OCwgMTY5MSwgMTY5MiwgMTY5NSwgMTY5NiwgMTY5OSwgMTcwMF0sXG4gIGRhcmtfZ3JheTogWzc4NSwgODU1LCA5MjUsIDk5NSwgMTI2NiwgMTI3MCwgMTI3MywgMTI3NCwgMTI3NiwgMTI3OV0sXG4gIGxpZ2h0X2dyYXk6IFs3MTQsIDcxNiwgMTEzMywgMTEzNywgMTI3MiwgMTI3NSwgMTI3N10sXG4gIHNoaXBfbGlnaHQ6IFs3MTVdLFxuICBzdXJyb3VuZGluZ193YXRlcl9kYXJrOiBbMTY4OSwgMTY5MCwgMTY5MywgMTY5NCwgMTY5NywgMTY5OF0sXG4gIHN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0OiBbXG4gICAgMTYzMiwgMTY4NSwgMTY4NiwgMTcwMiwgMTcwMywgMTc1NCwgMTc1NSwgMTc3MywgMTc3NCxcbiAgXSxcbn07XG5cbmNvbnN0IFNVQk1BUklORSA9IHtcbiAgaHVsbDogW10sXG4gIGRhcmtfZ3JheTogWzc2MCwgODMwLCA5MDBdLFxuICBsZWZ0X3BlcmlzY29wZTogWzc1OV0sXG4gIHJpZ2h0X3BlcmlzY29wZTogWzc2MV0sXG59O1xuXG4oZnVuY3Rpb24gY2Fycmllcl9lel9sb2FkZXIoKSB7XG4gIGNvbnN0IE9VVExJTkUgPSBDQVJSSUVSLmJsYWNrX291dGxpbmU7XG4gIElURVJBVE9SKDEzNzYsIDEzODAsIE9VVExJTkUpO1xuICBJVEVSQVRPUigxNjUzLCAxNjYzLCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMTc5MCwgMTc5MywgT1VUTElORSk7XG4gIElURVJBVE9SKDIwMTUsIDIwMTksIE9VVExJTkUpO1xuICBJVEVSQVRPUigyMDIyLCAyMDI0LCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMjE5MCwgMjIzOSwgT1VUTElORSk7XG5cbiAgY29uc3QgSFVMTCA9IENBUlJJRVIuaHVsbDtcbiAgSVRFUkFUT1IoMTQ0NywgMTQ0OSwgSFVMTCk7XG4gIElURVJBVE9SKDE1ODcsIDE1ODksIEhVTEwpO1xuICBJVEVSQVRPUigxNzI0LCAxNzMyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTc5NCwgMTgwMiwgSFVMTCk7XG4gIElURVJBVE9SKDE4NjAsIDE4NzIsIEhVTEwpO1xuICBJVEVSQVRPUigxOTMxLCAxOTM0LCBIVUxMKTtcbiAgSVRFUkFUT1IoMTk5OSwgMjAxMiwgSFVMTCk7XG4gIElURVJBVE9SKDIwNzEsIDIwNzQsIEhVTEwpO1xuICBJVEVSQVRPUigyMTM5LCAyMTUyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMjI2MywgMjMwOCwgSFVMTCk7XG4gIElURVJBVE9SKDIzMzUsIDIzNzgsIEhVTEwpO1xuICBJVEVSQVRPUigyNDA1LCAyNDQ3LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjQ3NiwgMjUxNiwgSFVMTCk7XG4gIElURVJBVE9SKDI1NDcsIDI1ODUsIEhVTEwpO1xuICBJVEVSQVRPUigyNjE4LCAyNjU1LCBIVUxMKTtcblxuICBjb25zdCBEQVJLX0dSQVkgPSBDQVJSSUVSLmRhcmtfZ3JheTtcbiAgSVRFUkFUT1IoMTEzNCwgMTEzNiwgREFSS19HUkFZKTtcbiAgSVRFUkFUT1IoMjA4NiwgMjA4OCwgREFSS19HUkFZKTtcbiAgSVRFUkFUT1IoMjE1NiwgMjE1OCwgREFSS19HUkFZKTtcbiAgSVRFUkFUT1IoMjE2MiwgMjE2NCwgREFSS19HUkFZKTtcbiAgSVRFUkFUT1IoMTkzNSwgMTkzOCwgREFSS19HUkFZKTtcbiAgSVRFUkFUT1IoMjA3NSwgMjA3OCwgREFSS19HUkFZKTtcblxuICBjb25zdCBMSUdIVF9HUkFZID0gQ0FSUklFUi5saWdodF9ncmF5O1xuICBJVEVSQVRPUigyMzM1LCAyMzc4LCBMSUdIVF9HUkFZKTtcblxuICBjb25zdCBTVVJST1VORElOR19XQVRFUl9EQVJLID0gQ0FSUklFUi5zdXJyb3VuZGluZ193YXRlcl9kYXJrO1xuICBJVEVSQVRPUigyNzU2LCAyNzk3LCBTVVJST1VORElOR19XQVRFUl9EQVJLKTtcbn0pKCk7XG5cbihmdW5jdGlvbiBkZXN0cm95ZXJfZXpfbG9hZGVyKCkge1xuICBjb25zdCBPVVRMSU5FID0gREVTVFJPWUVSLmJsYWNrX291dGxpbmU7XG4gIElURVJBVE9SKDE0MDMsIDE0MjIsIE9VVExJTkUpO1xuXG4gIGNvbnN0IEhVTEwgPSBERVNUUk9ZRVIuaHVsbDtcbiAgSVRFUkFUT1IoMTQ3NSwgMTQ5MCwgSFVMTCk7XG4gIElURVJBVE9SKDE2MTcsIDE2MzAsIEhVTEwpO1xuXG4gIGNvbnN0IExJR0hUX0dSQVkgPSBERVNUUk9ZRVIubGlnaHRfZ3JheTtcbiAgSVRFUkFUT1IoMTU0NiwgMTU2MCwgTElHSFRfR1JBWSk7XG4gIElURVJBVE9SKDEwNjMsIDEwNjcsIExJR0hUX0dSQVkpO1xuICBJVEVSQVRPUigxMjAyLCAxMjA3LCBMSUdIVF9HUkFZKTtcbiAgSVRFUkFUT1IoMTM0MiwgMTM0NywgTElHSFRfR1JBWSk7XG5cbiAgY29uc3QgREFSS19HUkFZID0gREVTVFJPWUVSLmRhcmtfZ3JheTtcbiAgSVRFUkFUT1IoMTMzNCwgMTMzNiwgREFSS19HUkFZKTtcbiAgSVRFUkFUT1IoMTMzOCwgMTM0MCwgREFSS19HUkFZKTtcbiAgSVRFUkFUT1IoMTM0OSwgMTM1MSwgREFSS19HUkFZKTtcblxuICBjb25zdCBTVVJST1VORElOR19XQVRFUl9EQVJLID0gREVTVFJPWUVSLnN1cnJvdW5kaW5nX3dhdGVyX2Rhcms7XG4gIElURVJBVE9SKDE3NTYsIDE3NzIsIFNVUlJPVU5ESU5HX1dBVEVSX0RBUkspO1xufSkoKTtcblxuZXhwb3J0IHsgQ0FSUklFUiwgREVTVFJPWUVSLCBTVUJNQVJJTkUgfTtcbiIsImltcG9ydCB7IElURVJBVE9SIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY29uc3QgU1RBUlQgPSB7XG4gIHM6IFsyMjEsIDIyMiwgNDM3LCA0MzhdLFxuICB0MTogWzIzNCwgMjM1LCAzMDQsIDMwNSwgMzc0LCAzNzUsIDQ0NCwgNDQ1LCA1MTQsIDUxNSwgNTg0LCA1ODVdLFxuICBhOiBbXG4gICAgMjQxLCAyNDIsIDI0NywgMjQ4LCA0NTEsIDQ1MiwgNDU3LCA0NTgsIDUyMSwgNTIyLCA1MjcsIDUyOCwgNTkxLCA1OTIsIDU5NyxcbiAgICA1OTgsXG4gIF0sXG4gIHI6IFtcbiAgICAyNTEsIDI1MiwgMjU3LCAyNTgsIDQ2MSwgNDYyLCA0NjcsIDQ2OCwgNTMxLCA1MzIsIDUzNywgNTM4LCA2MDEsIDYwMiwgNjA3LFxuICAgIDYwOCxcbiAgXSxcbiAgdDI6IFsyNjQsIDI2NSwgMzM0LCAzMzUsIDQwNCwgNDA1LCA0NzQsIDQ3NSwgNTQ0LCA1NDUsIDYxNCwgNjE1XSxcbiAgYWxsOiBbXSxcbn07XG5cbihmdW5jdGlvbiBlel9sb2FkZXIoKSB7XG4gIGNvbnN0IFMgPSBTVEFSVC5zO1xuICBJVEVSQVRPUig4MSwgODgsIFMpO1xuICBJVEVSQVRPUigxNTEsIDE1OCwgUyk7XG4gIElURVJBVE9SKDI5MSwgMjk4LCBTKTtcbiAgSVRFUkFUT1IoMzYxLCAzNjgsIFMpO1xuICBJVEVSQVRPUig1MDEsIDUwOCwgUyk7XG4gIElURVJBVE9SKDU3MSwgNTc4LCBTKTtcblxuICBjb25zdCBUMSA9IFNUQVJULnQxO1xuICBJVEVSQVRPUig5MSwgOTgsIFQxKTtcbiAgSVRFUkFUT1IoMTYxLCAxNjgsIFQxKTtcblxuICBjb25zdCBBID0gU1RBUlQuYTtcbiAgSVRFUkFUT1IoMTAxLCAxMDgsIEEpO1xuICBJVEVSQVRPUigxNzEsIDE3OCwgQSk7XG4gIElURVJBVE9SKDMxMSwgMzE4LCBBKTtcbiAgSVRFUkFUT1IoMzgxLCAzODgsIEEpO1xuXG4gIGNvbnN0IFIgPSBTVEFSVC5yO1xuICBJVEVSQVRPUigxMTEsIDExNiwgUik7XG4gIElURVJBVE9SKDE4MSwgMTg2LCBSKTtcbiAgSVRFUkFUT1IoMzIxLCAzMjYsIFIpO1xuICBJVEVSQVRPUigzOTEsIDM5NiwgUik7XG5cbiAgY29uc3QgVDIgPSBTVEFSVC50MjtcbiAgSVRFUkFUT1IoMTIxLCAxMjgsIFQyKTtcbiAgSVRFUkFUT1IoMTkxLCAxOTgsIFQyKTtcblxuICBmb3IgKGxldCBsZXR0ZXIgaW4gU1RBUlQpIHtcbiAgICBpZiAobGV0dGVyID09PSAnYWxsJykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIFNUQVJUW2xldHRlcl0ubWFwKChudW1iZXIpID0+IHtcbiAgICAgIFNUQVJULmFsbC5wdXNoKG51bWJlcik7XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBTVEFSVDtcbiIsImltcG9ydCByZW5kZXJfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL3JlbmRlcl90aWxlcy5qcyc7XG5pbXBvcnQgY29sb3Jfc3RhcnRfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX3N0YXJ0X3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9zaGlwX3RpbGVzIGZyb20gJy4vaGVscGVycy9jb2xvcl9zaGlwX3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9iYXR0bGVzaGlwX3RpbGVzIGZyb20gJy4vaGVscGVycy9jb2xvcl9iYXR0bGVzaGlwX3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl93YXRlcl90aWxlcyBmcm9tICcuL2hlbHBlcnMvY29sb3Jfd2F0ZXJfdGlsZXMuanMnO1xuaW1wb3J0IGxpc3RlbmVyc19oYW5kbGVycyBmcm9tICcuL2hlbHBlcnMvbGlzdGVuZXJzX2hhbmRsZXJzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZXBhZ2UoKSB7XG4gIHJlbmRlcl90aWxlcygpO1xuICBjb2xvcl9zdGFydF90aWxlcygpO1xuICBjb2xvcl9zaGlwX3RpbGVzKCk7XG4gIGNvbG9yX2JhdHRsZXNoaXBfdGlsZXMoKTtcbiAgY29sb3Jfd2F0ZXJfdGlsZXMoKTtcbiAgbGlzdGVuZXJzX2hhbmRsZXJzKCk7XG59XG4iLCJpbXBvcnQgeyBHQU1FIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5kZXguanMnO1xuaW1wb3J0IHBsYWNlX2FpX3NoaXBzIGZyb20gJy4vcGxhY2VfYWlfc2hpcHMuanMnO1xuaW1wb3J0IHJlbmRlcl9nYW1lX2JvYXJkcyBmcm9tICcuLi8uLi9nYW1lX2JvYXJkcy9yZW5kZXJfZ2FtZV9ib2FyZHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpY19saXN0ZW5lcnMoKSB7XG4gIGxldCBjdXJyZW50X3NoaXBfaW5kZXggPSAwO1xuICBsZXQgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gIGNvbnN0IFNISVBTID0gWydjYXJyaWVyJywgJ2JhdHRsZXNoaXAnLCAnZGVzdHJveWVyJywgJ3N1YicsICdwYXRyb2xCb2F0J107XG4gIGNvbnN0IExFTkdUSCA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgY29uc3QgTUFYUyA9IHtcbiAgICAvLyB2ZXJ0aWNhbCBpcyB1c2luZyBjaGFyY29kZXNcbiAgICBjYXJyaWVyOiB7XG4gICAgICBob3Jpem9udGFsOiA1LFxuICAgICAgdmVydGljYWw6IDEwMiwgLy8gZlxuICAgIH0sXG4gICAgYmF0dGxlc2hpcDoge1xuICAgICAgaG9yaXpvbnRhbDogNixcbiAgICAgIHZlcnRpY2FsOiAxMDMsIC8vIGdcbiAgICB9LFxuICAgIGRlc3Ryb3llcjoge1xuICAgICAgaG9yaXpvbnRhbDogNyxcbiAgICAgIHZlcnRpY2FsOiAxMDQsIC8vIGhcbiAgICB9LFxuICAgIHN1Yjoge1xuICAgICAgaG9yaXpvbnRhbDogNyxcbiAgICAgIHZlcnRpY2FsOiAxMDQsIC8vIGhcbiAgICB9LFxuICAgIHBhdHJvbEJvYXQ6IHtcbiAgICAgIGhvcml6b250YWw6IDgsXG4gICAgICB2ZXJ0aWNhbDogMTA1LCAvLyBpXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBJTkJPVU5EU19FVkFMVUFUT1IgPSAoaWQpID0+IHtcbiAgICBsZXQgdmFsdWVfdG9fY29tcGFyZSA9ICcnO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB2YWx1ZV90b19jb21wYXJlID0gaWRbMV07XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdmFsdWVfdG9fY29tcGFyZSA9IGlkLmNoYXJDb2RlQXQoMCk7XG4gICAgfVxuICAgIGNvbnN0IE1BWCA9IE1BWFNbU0hJUFNbY3VycmVudF9zaGlwX2luZGV4XV1bb3JpZW50YXRpb25dO1xuICAgIHJldHVybiB2YWx1ZV90b19jb21wYXJlIDw9IE1BWDtcbiAgfTtcblxuICBjb25zdCBTUEFDRV9UQUtFTl9FVkFMVUFUT1IgPSAoYWxsX3RpbGVzKSA9PiB7XG4gICAgbGV0IGFyZV9hbGxfdGFrZW4gPSB0cnVlO1xuICAgIGNvbnN0IFBMQVlFUjFfU0hJUFMgPSBHQU1FLlJFVFVSTl9TSElQUygxKTtcbiAgICBmb3IgKGxldCBzaGlwIGluIFBMQVlFUjFfU0hJUFMpIHtcbiAgICAgIGNvbnN0IFBPU0lUSU9OUyA9IFBMQVlFUjFfU0hJUFNbc2hpcF0ucG9zaXRpb247XG4gICAgICBhbGxfdGlsZXMubWFwKCh0aWxlKSA9PiB7XG4gICAgICAgIGlmIChQT1NJVElPTlMuaW5jbHVkZXModGlsZSkpIHtcbiAgICAgICAgICBhcmVfYWxsX3Rha2VuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJlX2FsbF90YWtlbjtcbiAgfTtcblxuICBjb25zdCBTVUJTRVFVRU5UX1RJTEVTID0gKGlkKSA9PiB7XG4gICAgY29uc3QgTEVUVEVSX0NIQVJfQ09ERSA9IGlkLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3QgTlVNQkVSID0gaWRbMV07XG4gICAgbGV0IGFsbCA9IFtdO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBTVE9QX0FUID0gK05VTUJFUiArIExFTkdUSFtjdXJyZW50X3NoaXBfaW5kZXhdO1xuICAgICAgZm9yIChsZXQgaSA9IE5VTUJFUjsgaSA8IFNUT1BfQVQ7IGkrKykge1xuICAgICAgICBhbGwucHVzaChgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKExFVFRFUl9DSEFSX0NPREUpfSR7aX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGw7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgY29uc3QgU1RPUF9BVCA9IExFVFRFUl9DSEFSX0NPREUgKyBMRU5HVEhbY3VycmVudF9zaGlwX2luZGV4XTtcbiAgICAgIGZvciAobGV0IGkgPSBMRVRURVJfQ0hBUl9DT0RFOyBpIDwgU1RPUF9BVDsgaSsrKSB7XG4gICAgICAgIGFsbC5wdXNoKGAke1N0cmluZy5mcm9tQ2hhckNvZGUoaSl9JHtOVU1CRVJ9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWxsO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBDT0xPUl9USUxFUyA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvb3JkaW5hdGVzLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvb3JkaW5hdGUpO1xuICAgICAgVElMRS5jbGFzc0xpc3QuYWRkKCdwbGFjZV9zaGlwX2hvdmVyZWQnKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBNT1VTRV9FTlRFUl9IQU5ETEVSID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgSUQgPSBldmVudC50YXJnZXQuaWQ7XG4gICAgY29uc3QgSU5CT1VORFMgPSBJTkJPVU5EU19FVkFMVUFUT1IoSUQpO1xuICAgIGNvbnN0IEFMTF9DT09SRElOQVRFUyA9IFNVQlNFUVVFTlRfVElMRVMoSUQpO1xuICAgIGNvbnN0IEFSRV9TVUJTRVFVRU5UX1NQQUNFU19GUkVFID0gU1BBQ0VfVEFLRU5fRVZBTFVBVE9SKEFMTF9DT09SRElOQVRFUyk7XG4gICAgaWYgKCFJTkJPVU5EUyB8fCAhQVJFX1NVQlNFUVVFTlRfU1BBQ0VTX0ZSRUUpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkX3NoaXBfcGxhY2VtZW50Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIENPTE9SX1RJTEVTKEFMTF9DT09SRElOQVRFUyk7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BsYWNlX3NoaXBfaG92ZXJlZCcpO1xuICB9O1xuXG4gIGNvbnN0IE1PVVNFX0xFQVZFX0hBTkRMRVIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBIT1ZFUkVEX1RJTEVTID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYWNlX3NoaXBfaG92ZXJlZCcpXG4gICAgKTtcbiAgICBIT1ZFUkVEX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZV9zaGlwX2hvdmVyZWQnKTtcbiAgICB9KTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZF9zaGlwX3BsYWNlbWVudCcpO1xuICB9O1xuXG4gIGNvbnN0IE1PVVNFX0NMSUNLX0hBTkRMRVIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBJRCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICBjb25zdCBJTkJPVU5EUyA9IElOQk9VTkRTX0VWQUxVQVRPUihJRCk7XG4gICAgY29uc3QgQUxMX0NPT1JESU5BVEVTID0gU1VCU0VRVUVOVF9USUxFUyhJRCk7XG4gICAgY29uc3QgQVJFX1NVQlNFUVVFTlRfU1BBQ0VTX0ZSRUUgPSBTUEFDRV9UQUtFTl9FVkFMVUFUT1IoQUxMX0NPT1JESU5BVEVTKTtcblxuICAgIGlmIChJTkJPVU5EUyAmJiBBUkVfU1VCU0VRVUVOVF9TUEFDRVNfRlJFRSAmJiBjdXJyZW50X3NoaXBfaW5kZXggPCA1KSB7XG4gICAgICBjb25zdCBDVVJSRU5UX1NISVAgPSBTSElQU1tjdXJyZW50X3NoaXBfaW5kZXhdO1xuICAgICAgR0FNRS5QTEFDRV9TSElQKDEsIENVUlJFTlRfU0hJUCwgQUxMX0NPT1JESU5BVEVTKTtcbiAgICAgIEFMTF9DT09SRElOQVRFUy5tYXAoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvb3JkaW5hdGUpO1xuICAgICAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZF90aWxlJyk7XG4gICAgICB9KTtcbiAgICAgIGN1cnJlbnRfc2hpcF9pbmRleCA9IGN1cnJlbnRfc2hpcF9pbmRleCArIDE7XG5cbiAgICAgIGlmIChjdXJyZW50X3NoaXBfaW5kZXggPiA0KSB7XG4gICAgICAgIGNvbnN0IE1BSU4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Vfc2hpcHNfbWFpbicpO1xuICAgICAgICBNQUlOLnJlbW92ZSgpO1xuICAgICAgICBwbGFjZV9haV9zaGlwcygpO1xuICAgICAgICByZW5kZXJfZ2FtZV9ib2FyZHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgU1BBQ0VfQkFSX0hBTkRMRVIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBLRVkgPSBldmVudC5rZXk7XG4gICAgaWYgKEtFWSA9PT0gJyAnICYmIG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIG9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKEtFWSA9PT0gJyAnICYmIG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgVElMRVMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYWNlX3NoaXBfdGlsZScpKTtcbiAgVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgTU9VU0VfRU5URVJfSEFORExFUik7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTU9VU0VfTEVBVkVfSEFORExFUik7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIE1PVVNFX0NMSUNLX0hBTkRMRVIpO1xuICB9KTtcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIFNQQUNFX0JBUl9IQU5ETEVSKTtcbn1cbiIsImltcG9ydCB7IEdBTUUgfSBmcm9tICcuLi8uLi8uLi8uLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYWNlX2FpX3NoaXBzKCkge1xuICBsZXQgY3VycmVudF9zaGlwX2luZGV4ID0gMDtcbiAgbGV0IG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICBjb25zdCBTSElQUyA9IFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgJ2Rlc3Ryb3llcicsICdzdWInLCAncGF0cm9sQm9hdCddO1xuICBjb25zdCBMRU5HVEggPSBbNSwgNCwgMywgMywgMl07XG4gIGNvbnN0IElORk8gPSB7XG4gICAgLy8gdmVydGljYWwgaXMgdXNpbmcgY2hhcmNvZGVzXG4gICAgY2Fycmllcjoge1xuICAgICAgbWF4OiA1LCAvL2hvcml6b250YWxcbiAgICAgIGNvb3JkaW5hdGVzOiBbXSxcbiAgICB9LFxuICAgIGJhdHRsZXNoaXA6IHtcbiAgICAgIG1heDogNiwgLy8gdmVydGljYWxcbiAgICAgIGNvb3JkaW5hdGVzOiBbXSxcbiAgICB9LFxuICAgIGRlc3Ryb3llcjoge1xuICAgICAgbWF4OiA3LCAvLyBob3Jpem9udGFsXG4gICAgICBjb29yZGluYXRlczogW10sXG4gICAgfSxcbiAgICBzdWI6IHtcbiAgICAgIG1heDogNywgLy8gdmVydGljYWxcbiAgICAgIGNvb3JkaW5hdGVzOiBbXSxcbiAgICB9LFxuICAgIHBhdHJvbEJvYXQ6IHtcbiAgICAgIG1heDogOCwgLy8gaG9yaXpvbnRhbFxuICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgIH0sXG4gIH07XG4gIGNvbnN0IEFMTF9DT09SRElOQVRFUyA9IFtdO1xuXG4gIGNvbnN0IExFVFRFUlMgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onXTtcblxuICBjb25zdCBBTExfVElMRVMgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IExFVFRFUl9DSEFSX0NPREUgPSBjb29yZGluYXRlLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3QgTlVNQkVSID0gY29vcmRpbmF0ZVsxXTtcbiAgICBsZXQgYWxsID0gW107XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IFNUT1BfQVQgPSArTlVNQkVSICsgTEVOR1RIW2N1cnJlbnRfc2hpcF9pbmRleF07XG4gICAgICBmb3IgKGxldCBpID0gTlVNQkVSOyBpIDwgU1RPUF9BVDsgaSsrKSB7XG4gICAgICAgIGFsbC5wdXNoKGAke1N0cmluZy5mcm9tQ2hhckNvZGUoTEVUVEVSX0NIQVJfQ09ERSl9JHtpfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFsbDtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBjb25zdCBTVE9QX0FUID0gTEVUVEVSX0NIQVJfQ09ERSArIExFTkdUSFtjdXJyZW50X3NoaXBfaW5kZXhdO1xuICAgICAgZm9yIChsZXQgaSA9IExFVFRFUl9DSEFSX0NPREU7IGkgPCBTVE9QX0FUOyBpKyspIHtcbiAgICAgICAgYWxsLnB1c2goYCR7U3RyaW5nLmZyb21DaGFyQ29kZShpKX0ke05VTUJFUn1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGw7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFRPR0dMRV9PUklFTlRBVElPTiA9ICgpID0+IHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgT05FX1JBTkRPTSA9ICgpID0+IHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgY29uc3QgUkFORE9NX0xFVFRFUiA9IExFVFRFUlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcbiAgICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKFxuICAgICAgICBNYXRoLnJhbmRvbSgpICogKElORk9bU0hJUFNbY3VycmVudF9zaGlwX2luZGV4XV0ubWF4ICsgMSlcbiAgICAgICk7XG4gICAgICByZXR1cm4gUkFORE9NX0xFVFRFUiArIFJBTkRPTV9OVU1CRVI7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgY29uc3QgUkFORE9NX0xFVFRFUiA9XG4gICAgICAgIExFVFRFUlNbXG4gICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKElORk9bU0hJUFNbY3VycmVudF9zaGlwX2luZGV4XV0ubWF4ICsgMSkpXG4gICAgICAgIF07XG4gICAgICBjb25zdCBSQU5ET01fTlVNQkVSID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgcmV0dXJuIFJBTkRPTV9MRVRURVIgKyBSQU5ET01fTlVNQkVSO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBHRVRfTU9WRSA9ICgpID0+IHtcbiAgICBjb25zdCBSQU5ET01fQ09PUkRJTkFURSA9IE9ORV9SQU5ET00oKTtcbiAgICBjb25zdCBBTExfQ09PUkRJTkFURVMgPSBBTExfVElMRVMoUkFORE9NX0NPT1JESU5BVEUpO1xuICAgIHJldHVybiBBTExfQ09PUkRJTkFURVM7XG4gIH07XG5cbiAgKGZ1bmN0aW9uIGNyZWF0ZV9jb29yZGluYXRlcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgY29uc3QgVU5JUVVFX01PVkUgPSAoKSA9PiB7XG4gICAgICAgIGxldCB1bmlxdWUgPSB0cnVlO1xuICAgICAgICBsZXQgTU9WRSA9IEdFVF9NT1ZFKCk7XG4gICAgICAgIE1PVkUubWFwKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgaWYgKEFMTF9DT09SRElOQVRFUy5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xuICAgICAgICAgICAgdW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHVuaXF1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBVTklRVUVfTU9WRSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmlxdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBNT1ZFLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgSU5GT1tTSElQU1tjdXJyZW50X3NoaXBfaW5kZXhdXS5jb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgQUxMX0NPT1JESU5BVEVTLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBVTklRVUVfTU9WRSgpO1xuICAgICAgY3VycmVudF9zaGlwX2luZGV4Kys7XG4gICAgICBUT0dHTEVfT1JJRU5UQVRJT04oKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uIGZpbGxfYWlfYm9hcmQoKSB7XG4gICAgZm9yIChsZXQgc2hpcCBpbiBJTkZPKSB7XG4gICAgICBjb25zdCBTSElQX1BPU0lUSU9OUyA9IElORk9bc2hpcF0uY29vcmRpbmF0ZXM7XG4gICAgICBHQU1FLlBMQUNFX1NISVAoMiwgc2hpcCwgU0hJUF9QT1NJVElPTlMpO1xuICAgIH1cbiAgfSkoKTtcbn1cbiIsImltcG9ydCBDT09SRElOQVRFUyBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2Nvb3JkaW5hdGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBQTEFDRV9TSElQU19DT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgSU5TVFJVQ1RJT05TX0NPTlRBSU5FUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBJTlNUUlVDVElPTlMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IFNQQUNFX0tFWSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2tiZCcpO1xuICBjb25zdCBDTEFTU0VTID0gW1xuICAgICdibHVlMScsXG4gICAgJ2JsdWUyJyxcbiAgICAnYmx1ZTMnLFxuICAgICdibHVlNCcsXG4gICAgJ2JsdWU1JyxcbiAgICAnYmx1ZTYnLFxuICAgICdibHVlNycsXG4gICAgJ2JsdWU4JyxcbiAgICAnYmx1ZTknLFxuICAgICdibHVlMTAnLFxuICAgICdncmVlbjEnLFxuICBdO1xuXG4gIE1BSU4uaWQgPSAncGxhY2Vfc2hpcHNfbWFpbic7XG4gIFBMQUNFX1NISVBTX0NPTlRBSU5FUi5pZCA9ICdwbGFjZV9zaGlwc19jb250YWluZXInO1xuICBJTlNUUlVDVElPTlNfQ09OVEFJTkVSLmlkID0gJ2luc3RydWN0aW9uc19jb250YWluZXInO1xuICBJTlNUUlVDVElPTlMuaWQgPSAnaW5zdHJ1Y3Rpb25zJztcbiAgU1BBQ0VfS0VZLmlkID0gJ2JrZF9zcGFjZSc7XG4gIElOU1RSVUNUSU9OUy5pbm5lclRleHQgPSAndG8gcm90YXRlJztcbiAgU1BBQ0VfS0VZLmlubmVyVGV4dCA9ICdzcGFjZSc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzNTAwOyBpKyspIHtcbiAgICBjb25zdCBSQU5ET01fTlVNQkVSID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3BsYWNlX3NoaXBzX2JhY2tncm91bmRfdGlsZScpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZChDTEFTU0VTW1JBTkRPTV9OVU1CRVJdKTtcbiAgICBNQUlOLmFwcGVuZChUSUxFKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuaWQgPSBDT09SRElOQVRFU1tpXTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3BsYWNlX3NoaXBfdGlsZScpO1xuICAgIFBMQUNFX1NISVBTX0NPTlRBSU5FUi5hcHBlbmQoVElMRSk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoTUFJTik7XG4gIElOU1RSVUNUSU9OU19DT05UQUlORVIuYXBwZW5kKFNQQUNFX0tFWSk7XG4gIElOU1RSVUNUSU9OU19DT05UQUlORVIuYXBwZW5kKElOU1RSVUNUSU9OUyk7XG4gIE1BSU4uYXBwZW5kKFBMQUNFX1NISVBTX0NPTlRBSU5FUik7XG4gIE1BSU4uYXBwZW5kKElOU1RSVUNUSU9OU19DT05UQUlORVIpO1xufVxuIiwiaW1wb3J0IHJlbmRlcl90aWxlcyBmcm9tICcuL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzJztcbmltcG9ydCBsb2dpY19saXN0ZW5lcnMgZnJvbSAnLi9oZWxwZXJzL2xvZ2ljX2xpc3RlbmVycy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYWNlX3NoaXBzKCkge1xuICByZW5kZXJfdGlsZXMoKTtcbiAgbG9naWNfbGlzdGVuZXJzKCk7XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lbG9vcCgpIHtcbiAgY29uc3QgUExBWUVSMSA9IG5ldyBQbGF5ZXIoJ2h1bWFuJyk7XG4gIGNvbnN0IFBMQVlFUjIgPSBuZXcgUGxheWVyKCdhaScpO1xuICBsZXQgcGxheWVyMV9nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGxldCBwbGF5ZXIyX2dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBSRVNFVCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIxX2dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICBwbGF5ZXIyX2dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfTtcblxuICBjb25zdCBSRVRVUk5fU0hJUFMgPSAocGxheWVyKSA9PiB7XG4gICAgaWYgKHBsYXllciA9PT0gMSkge1xuICAgICAgcmV0dXJuIHBsYXllcjFfZ2FtZWJvYXJkLnNoaXBzO1xuICAgIH1cbiAgICBpZiAocGxheWVyID09PSAyKSB7XG4gICAgICByZXR1cm4gcGxheWVyMl9nYW1lYm9hcmQuc2hpcHM7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFBMQUNFX1NISVAgPSAoYm9hcmQsIHNoaXAsIHBvc2l0aW9ucykgPT4ge1xuICAgIGlmIChib2FyZCA9PT0gMSkge1xuICAgICAgcGxheWVyMV9nYW1lYm9hcmQucGxhY2Vfc2hpcChzaGlwLCBwb3NpdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoYm9hcmQgPT09IDIpIHtcbiAgICAgIHBsYXllcjJfZ2FtZWJvYXJkLnBsYWNlX3NoaXAoc2hpcCwgcG9zaXRpb25zKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgQVRUQUNLID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBQTEFZRVIxLmh1bWFuX2F0dGFjayhwbGF5ZXIyX2dhbWVib2FyZCwgY29vcmRpbmF0ZSk7XG4gICAgUExBWUVSMi5haV9hdHRhY2socGxheWVyMV9nYW1lYm9hcmQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgUkVTRVQsXG4gICAgUkVUVVJOX1NISVBTLFxuICAgIFBMQUNFX1NISVAsXG4gICAgQVRUQUNLLFxuICB9O1xufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgc2hpcHMgPSB7XG4gICAgY2Fycmllcjoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoNSksXG4gICAgfSxcbiAgICBiYXR0bGVzaGlwOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCg0KSxcbiAgICB9LFxuICAgIGRlc3Ryb3llcjoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoMyksXG4gICAgfSxcbiAgICBzdWI6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDMpLFxuICAgIH0sXG4gICAgcGF0cm9sQm9hdDoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoMiksXG4gICAgfSxcbiAgfTtcbiAgaGl0cyA9IFtdO1xuICBtaXNzZXMgPSBbXTtcblxuICBwbGFjZV9zaGlwKHNoaXAsIGlucHV0X2Nvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5zaGlwc1tzaGlwXS5wb3NpdGlvbiA9IGlucHV0X2Nvb3JkaW5hdGVzO1xuICB9XG4gICNtaXNzX3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIHJldHVybiBbLi4udGhpcy5taXNzZXMsIGlucHV0X2Nvb3JkaW5hdGVdLnNvcnQoKTtcbiAgfVxuICAjaGl0X3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIHJldHVybiBbLi4udGhpcy5oaXRzLCBpbnB1dF9jb29yZGluYXRlXS5zb3J0KCk7XG4gIH1cbiAgcmVjZWl2ZV9hdHRhY2soaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIGxldCBtaXNzID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgIGNvbnN0IFdBU19ISVQgPSB0aGlzLnNoaXBzW3NoaXBdLnBvc2l0aW9uLmluY2x1ZGVzKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgICAgaWYgKFdBU19ISVQpIHtcbiAgICAgICAgdGhpcy5oaXRzID0gdGhpcy4jaGl0X3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSk7XG4gICAgICAgIGNvbnN0IEhJVF9JTkRFWCA9IHRoaXMuc2hpcHNbc2hpcF0ucG9zaXRpb24uaW5kZXhPZihpbnB1dF9jb29yZGluYXRlKTtcbiAgICAgICAgdGhpcy5zaGlwc1tzaGlwXS5zaGlwLmhpdChISVRfSU5ERVgpO1xuICAgICAgICBtaXNzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtaXNzKSB7XG4gICAgICB0aGlzLm1pc3NlcyA9IHRoaXMuI21pc3NfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKTtcbiAgICB9XG4gIH1cbiAgYWxsX3N1bmsoKSB7XG4gICAgbGV0IGlzX2FsbF9zdW5rID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgIGNvbnN0IGFsbF9zdW5rX2NhbGwgPSB0aGlzLnNoaXBzW3NoaXBdLnNoaXAuaXNfc3VuaygpO1xuICAgICAgaWYgKGFsbF9zdW5rX2NhbGwgPT09IGZhbHNlKSB7XG4gICAgICAgIGlzX2FsbF9zdW5rID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNfYWxsX3N1bms7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHBsYXllcikge1xuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICB9XG4gIG1vdmVzID0gW107XG4gIHJlbWFpbmluZ19tb3ZlcyA9IFtdO1xuXG4gICNyZW1haW5pbmdfbW92ZXNfcmVkdWNlcihjb29yZGluYXRlKSB7XG4gICAgdGhpcy5yZW1haW5pbmdfbW92ZXMgPSBbLi4udGhpcy5yZW1haW5pbmdfbW92ZXMsIGNvb3JkaW5hdGVdO1xuICB9XG4gICNmaWxsX3JlbWFpbmluZ19tb3ZlcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgTEVUVEVSUyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJywgJ2knLCAnaiddO1xuICAgIExFVFRFUlMubWFwKChsZXR0ZXIpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICB0aGlzLiNyZW1haW5pbmdfbW92ZXNfcmVkdWNlcihgJHtsZXR0ZXJ9JHtpfWApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSgpO1xuICAjYWlfbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdfbW92ZXNbXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJlbWFpbmluZ19tb3Zlcy5sZW5ndGgpXG4gICAgXTtcbiAgfVxuICAjZmlsdGVyX3JlbWFpbmluZ19tb3Zlcyhjb29yZGluYXRlKSB7XG4gICAgY29uc3QgUkVNQUlOSU5HX01PVkVTX0NPUFkgPSBbLi4udGhpcy5yZW1haW5pbmdfbW92ZXNdO1xuICAgIGNvbnN0IFJFTUFJTklORyA9IFJFTUFJTklOR19NT1ZFU19DT1BZLmZpbHRlcigocmVtYWluaW5nX21vdmUpID0+IHtcbiAgICAgIHJldHVybiByZW1haW5pbmdfbW92ZSAhPT0gY29vcmRpbmF0ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gUkVNQUlOSU5HO1xuICB9XG4gICNhdHRhY2tfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLm1vdmVzLCBpbnB1dF9jb29yZGluYXRlXTtcbiAgfVxuICBhaV9hdHRhY2soYm9hcmQpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXIgIT09ICdhaScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxheWVyIG5lZWRzIHRvIGJlIEFJJyk7XG4gICAgfVxuICAgIGNvbnN0IENPT1JESU5BVEUgPSB0aGlzLiNhaV9tb3ZlKCk7XG4gICAgdGhpcy5yZW1haW5pbmdfbW92ZXMgPSB0aGlzLiNmaWx0ZXJfcmVtYWluaW5nX21vdmVzKENPT1JESU5BVEUpO1xuICAgIHRoaXMubW92ZXMgPSB0aGlzLiNhdHRhY2tfcmVkdWNlcihDT09SRElOQVRFKTtcbiAgICBib2FyZC5yZWNlaXZlX2F0dGFjayhDT09SRElOQVRFKTtcbiAgICByZXR1cm4gQ09PUkRJTkFURTtcbiAgfVxuICBodW1hbl9hdHRhY2soYm9hcmQsIGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXIgIT09ICdodW1hbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxheWVyIG5lZWRzIHRvIGJlIGEgaHVtYW4nKTtcbiAgICB9XG4gICAgY29uc3QgRklMVEVSRURfTU9WRVMgPSB0aGlzLiNmaWx0ZXJfcmVtYWluaW5nX21vdmVzKGNvb3JkaW5hdGUpO1xuICAgIHRoaXMucmVtYWluaW5nX21vdmVzID0gRklMVEVSRURfTU9WRVM7XG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMuI2F0dGFja19yZWR1Y2VyKGNvb3JkaW5hdGUpO1xuICAgIGJvYXJkLnJlY2VpdmVfYXR0YWNrKGNvb3JkaW5hdGUpO1xuICAgIHJldHVybiBjb29yZGluYXRlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5oaXRzID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSk7XG4gIH1cblxuICAjaGl0X3JlZHVjZXIoaGl0c19hcnJheSwgcG9zaXRpb25faGl0KSB7XG4gICAgY29uc3QgSElUUyA9IFsuLi5oaXRzX2FycmF5XTtcbiAgICBISVRTW3Bvc2l0aW9uX2hpdF0gPSB0cnVlO1xuICAgIHJldHVybiBISVRTO1xuICB9XG4gIGhpdChwb3NpdGlvbl9oaXQpIHtcbiAgICB0aGlzLmhpdHMgPSB0aGlzLiNoaXRfcmVkdWNlcih0aGlzLmhpdHMsIHBvc2l0aW9uX2hpdCk7XG4gIH1cbiAgaXNfc3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRzLmV2ZXJ5KChwb3NpdGlvbikgPT4gcG9zaXRpb24gPT09IHRydWUpO1xuICB9XG59XG4iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBnYW1lbG9vcCBmcm9tICcuL2dhbWUvZ2FtZV9sb29wLmpzJztcbmltcG9ydCBob21lcGFnZSBmcm9tICcuL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaG9tZXBhZ2UuanMnO1xuXG5jb25zdCBHQU1FID0gZ2FtZWxvb3AoKTtcbmhvbWVwYWdlKCk7XG5cbmV4cG9ydCB7IEdBTUUgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtaW4td2lkdGg6IDcwZW07XFxufVxcblxcbiNnYW1lX2JvYXJkcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1MCwgMWZyKTtcXG4gIGhlaWdodDogNTBlbTtcXG4gIG1pbi13aWR0aDogNzBlbTtcXG59XFxuXFxuLmdhbWVfYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDMwZW07XFxuICB3aWR0aDogMzBlbTtcXG59XFxuXFxuLmdhbWVfYm9hcmRfdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnBsYXllcl9ib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmU2MTEyO1xcbn1cXG5cXG4uYWlfYm9hcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXFxuLmFpX2JvYXJkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblxcbiNwbGF5ZXJfYm9hcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMGVtO1xcbiAgbGVmdDogMmVtO1xcbn1cXG5cXG4jYWlfYm9hcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMGVtO1xcbiAgcmlnaHQ6IDJlbTtcXG59XFxuXFxuLnBsYWNlZF9zaGlwX3RpbGUge1xcbiAgYmFja2dyb3VuZDogIzhiN2IxNTliO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1pbi13aWR0aDogNzBlbTtcXG59XFxuXFxuI2dhbWVfYm9hcmRzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLCAxZnIpO1xcbiAgaGVpZ2h0OiA1MGVtO1xcbiAgbWluLXdpZHRoOiA3MGVtO1xcbn1cXG5cXG4uZ2FtZV9ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMzBlbTtcXG4gIHdpZHRoOiAzMGVtO1xcbn1cXG5cXG4uZ2FtZV9ib2FyZF90aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4ucGxheWVyX2JvYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZTYxMTI7XFxufVxcblxcbi5haV9ib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWM5NzFiO1xcbiAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG4uYWlfYm9hcmQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuI3BsYXllcl9ib2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwZW07XFxuICBsZWZ0OiAyZW07XFxufVxcblxcbiNhaV9ib2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwZW07XFxuICByaWdodDogMmVtO1xcbn1cXG5cXG4ucGxhY2VkX3NoaXBfdGlsZSB7XFxuICBiYWNrZ3JvdW5kOiAjOGI3YjE1OWI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tb3BhY2l0eS0wMDogMTtcXG4gIC0tb3BhY2l0eS0wNTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDogMC45NjtcXG4gIC0tb3BhY2l0eS0xNTogMC45NDtcXG4gIC0tb3BhY2l0eS0yMDogMC45MjtcXG4gIC0tb3BhY2l0eS0yNTogMC45O1xcbiAgLS1vcGFjaXR5LTMwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTM1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTQwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTQ1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTUwOiAwLjg7XFxuICAtLW9wYWNpdHktNTU6IDAuODI7XFxuICAtLW9wYWNpdHktNjA6IDAuODQ7XFxuICAtLW9wYWNpdHktNjU6IDAuODY7XFxuICAtLW9wYWNpdHktNzA6IDAuODg7XFxuICAtLW9wYWNpdHktNzU6IDAuOTtcXG4gIC0tb3BhY2l0eS04MDogMC45MjtcXG4gIC0tb3BhY2l0eS04NTogMC45NDtcXG4gIC0tb3BhY2l0eS05MDogMC45NjtcXG4gIC0tb3BhY2l0eS05NTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDA6IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMDApO1xcbiAgfVxcblxcbiAgNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTA1KTtcXG4gIH1cXG5cXG4gIDEwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTApO1xcbiAgfVxcblxcbiAgMTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xNSk7XFxuICB9XFxuXFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTIwKTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMjUpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zMCk7XFxuICB9XFxuXFxuICAzNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTM1KTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDApO1xcbiAgfVxcblxcbiAgNDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS00NSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTUwKTtcXG4gIH1cXG5cXG4gIDU1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNTUpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02MCk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTY1KTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzApO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS03NSk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTgwKTtcXG4gIH1cXG5cXG4gIDg1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktODUpO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05MCk7XFxuICB9XFxuXFxuICA5NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTk1KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwMCk7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9hbmltYXRvci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1vcGFjaXR5LTAwOiAxO1xcbiAgLS1vcGFjaXR5LTA1OiAwLjk4O1xcbiAgLS1vcGFjaXR5LTEwOiAwLjk2O1xcbiAgLS1vcGFjaXR5LTE1OiAwLjk0O1xcbiAgLS1vcGFjaXR5LTIwOiAwLjkyO1xcbiAgLS1vcGFjaXR5LTI1OiAwLjk7XFxuICAtLW9wYWNpdHktMzA6IDAuODg7XFxuICAtLW9wYWNpdHktMzU6IDAuODY7XFxuICAtLW9wYWNpdHktNDA6IDAuODQ7XFxuICAtLW9wYWNpdHktNDU6IDAuODI7XFxuICAtLW9wYWNpdHktNTA6IDAuODtcXG4gIC0tb3BhY2l0eS01NTogMC44MjtcXG4gIC0tb3BhY2l0eS02MDogMC44NDtcXG4gIC0tb3BhY2l0eS02NTogMC44NjtcXG4gIC0tb3BhY2l0eS03MDogMC44ODtcXG4gIC0tb3BhY2l0eS03NTogMC45O1xcbiAgLS1vcGFjaXR5LTgwOiAwLjkyO1xcbiAgLS1vcGFjaXR5LTg1OiAwLjk0O1xcbiAgLS1vcGFjaXR5LTkwOiAwLjk2O1xcbiAgLS1vcGFjaXR5LTk1OiAwLjk4O1xcbiAgLS1vcGFjaXR5LTEwMDogMTtcXG59XFxuXFxuQGtleWZyYW1lcyBvcGFjaXR5IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0wMCk7XFxuICB9XFxuXFxuICA1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMDUpO1xcbiAgfVxcblxcbiAgMTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xMCk7XFxuICB9XFxuXFxuICAxNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTE1KTtcXG4gIH1cXG5cXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMjApO1xcbiAgfVxcblxcbiAgMjUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0yNSk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTMwKTtcXG4gIH1cXG5cXG4gIDM1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzUpO1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS00MCk7XFxuICB9XFxuXFxuICA0NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTQ1KTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNTApO1xcbiAgfVxcblxcbiAgNTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS01NSk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTYwKTtcXG4gIH1cXG5cXG4gIDY1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNjUpO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS03MCk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTc1KTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktODApO1xcbiAgfVxcblxcbiAgODUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS04NSk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTkwKTtcXG4gIH1cXG5cXG4gIDk1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktOTUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTAwKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbm1haW4ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuI2JzX2hlYWRpbmcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNDAsIDFmcik7XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuI3N0YXJ0X2J1dHRvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4ud2F0ZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDE1NztcXG59XFxuXFxuLnN0YXJ0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnN0YXJ0X2JhY2tncm91bmRfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWM5NzFiO1xcbn1cXG5cXG4uc3RhcnRfdGV4dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWM5NzFiO1xcbn1cXG4uc3RhcnRfdGV4dF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbm1haW4ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuI2JzX2hlYWRpbmcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNDAsIDFmcik7XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuI3N0YXJ0X2J1dHRvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4ud2F0ZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDE1NztcXG59XFxuXFxuLnN0YXJ0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnN0YXJ0X2JhY2tncm91bmRfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWM5NzFiO1xcbn1cXG5cXG4uc3RhcnRfdGV4dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWM5NzFiO1xcbn1cXG4uc3RhcnRfdGV4dF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBzLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dhdGVyLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdG9yLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2hpcF90ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG59XFxuXFxuLnNoaXBfaHVsbF9vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2hpcF9odWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTU1NTU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0MjQyO1xcbn1cXG5cXG4uc2hpcF9saWdodCB7XFxuICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLmxpZ2h0X2dyYXkge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XFxufVxcblxcbi5kYXJrX2dyYXkge1xcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTI5Mjk7XFxufVxcblxcbi5zdWIge1xcbiAgYmFja2dyb3VuZDogIzFjMWMxYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZjBmMGY7XFxufVxcblxcbi5wZXJpc2NvcGVfb2ZmIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwMTAxNTc7XFxufVxcblxcbi5wZXJpc2NvcGVfb24ge1xcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTI5Mjk7XFxufVxcblxcbi5yYWRhcl9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnJhZGFyX29uIHtcXG4gIGJhY2tncm91bmQ6ICM2YzZjNmM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0NjQ2O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3Mvc2hpcHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL2FuaW1hdG9yLmNzcyc7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZkaXNwbGF5PXN3YXAnKTtcXG5cXG4uc2hpcF90ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG59XFxuXFxuLnNoaXBfaHVsbF9vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2hpcF9odWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTU1NTU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0MjQyO1xcbn1cXG5cXG4uc2hpcF9saWdodCB7XFxuICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLmxpZ2h0X2dyYXkge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XFxufVxcblxcbi5kYXJrX2dyYXkge1xcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTI5Mjk7XFxufVxcblxcbi5zdWIge1xcbiAgYmFja2dyb3VuZDogIzFjMWMxYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZjBmMGY7XFxufVxcblxcbi5wZXJpc2NvcGVfb2ZmIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwMTAxNTc7XFxufVxcblxcbi5wZXJpc2NvcGVfb24ge1xcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTI5Mjk7XFxufVxcblxcbi5yYWRhcl9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnJhZGFyX29uIHtcXG4gIGJhY2tncm91bmQ6ICM2YzZjNmM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0NjQ2O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0b3IuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXdhdGVyMTogIzAxMDE1NztcXG4gIC0td2F0ZXIyOiAjMDYzNzQ0O1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzhjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkMGQ2MTtcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyYjE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTcxNzc1O1xcbn1cXG5cXG4uZ3JlZW4xIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMik7XFxuICBvcGFjaXR5OiA2MCU7XFxufVxcblxcbi5ibHVlMSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbn1cXG5cXG4uYmx1ZTIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDk2JTtcXG59XFxuXFxuLmJsdWUzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA5MiU7XFxufVxcblxcbi5ibHVlNCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODglO1xcbn1cXG5cXG4uYmx1ZTUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDg0JTtcXG59XFxuXFxuLmJsdWU2IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblxcbi5ibHVlNyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNzYlO1xcbn1cXG4uYmx1ZTgge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDcyJTtcXG59XFxuXFxuLmJsdWU5IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA2OCU7XFxufVxcblxcbi5ibHVlMTAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDY0JTtcXG59XFxuXFxuLmJsdWUxMCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3Mvd2F0ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL2FuaW1hdG9yLmNzcyc7XFxuXFxuOnJvb3Qge1xcbiAgLS13YXRlcjE6ICMwMTAxNTc7XFxuICAtLXdhdGVyMjogIzA2Mzc0NDtcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2Rhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTM4YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDBkNjE7XFxufVxcblxcbi5zdXJyb3VuZGluZ193YXRlcl9saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMmIxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTc3NTtcXG59XFxuXFxuLmdyZWVuMSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjIpO1xcbiAgb3BhY2l0eTogNjAlO1xcbn1cXG5cXG4uYmx1ZTEge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG59XFxuXFxuLmJsdWUyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA5NiU7XFxufVxcblxcbi5ibHVlMyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogOTIlO1xcbn1cXG5cXG4uYmx1ZTQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDg4JTtcXG59XFxuXFxuLmJsdWU1IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4NCU7XFxufVxcblxcbi5ibHVlNiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG4uYmx1ZTcge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDc2JTtcXG59XFxuLmJsdWU4IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA3MiU7XFxufVxcblxcbi5ibHVlOSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNjglO1xcbn1cXG5cXG4uYmx1ZTEwIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA2NCU7XFxufVxcblxcbi5ibHVlMTAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BhY2UrTW9ubyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1pbi13aWR0aDogNzBlbTtcXG59XFxuXFxuI3BsYWNlX3NoaXBzX21haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNTAsIDFmcik7XFxuICBtaW4td2lkdGg6IDcwZW07XFxuICBoZWlnaHQ6IDUwZW07XFxufVxcblxcbiNwbGFjZV9zaGlwc19jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNWVtO1xcbiAgYm90dG9tOiA0ZW07XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNDBlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbiNpbnN0cnVjdGlvbnNfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxZW07XFxuICBsZWZ0OiAyOWVtO1xcbiAgd2lkdGg6IDEyZW07XFxuICBoZWlnaHQ6IDNlbTtcXG4gIGJhY2tncm91bmQ6ICNhYTlmNjE7XFxuICBib3JkZXItcmFkaXVzOiAwLjEyNWVtO1xcbn1cXG5cXG4jYmtkX3NwYWNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggIzAwMDAwMDtcXG59XFxuXFxuI2luc3RydWN0aW9ucyB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtZmFtaWx5OiAnU3BhY2UgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuLnBsYWNlX3NoaXBfdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWM5NzFiO1xcbn1cXG5cXG4ucGxhY2VkX3RpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3Y2EyOTtcXG4gIGJhY2tncm91bmQ6ICNhYzk3MWI7XFxufVxcblxcbi5wbGFjZV9zaGlwX2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuLmludmFsaWRfc2hpcF9wbGFjZW1lbnQge1xcbiAgYmFja2dyb3VuZDogI2YwMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BhY2UrTW9ubyZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gIG1pbi13aWR0aDogNzBlbTtcXG59XFxuXFxuI3BsYWNlX3NoaXBzX21haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNTAsIDFmcik7XFxuICBtaW4td2lkdGg6IDcwZW07XFxuICBoZWlnaHQ6IDUwZW07XFxufVxcblxcbiNwbGFjZV9zaGlwc19jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNWVtO1xcbiAgYm90dG9tOiA0ZW07XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNDBlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbiNpbnN0cnVjdGlvbnNfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxZW07XFxuICBsZWZ0OiAyOWVtO1xcbiAgd2lkdGg6IDEyZW07XFxuICBoZWlnaHQ6IDNlbTtcXG4gIGJhY2tncm91bmQ6ICNhYTlmNjE7XFxuICBib3JkZXItcmFkaXVzOiAwLjEyNWVtO1xcbn1cXG5cXG4jYmtkX3NwYWNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggIzAwMDAwMDtcXG59XFxuXFxuI2luc3RydWN0aW9ucyB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtZmFtaWx5OiAnU3BhY2UgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuLnBsYWNlX3NoaXBfdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWM5NzFiO1xcbn1cXG5cXG4ucGxhY2VkX3RpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3Y2EyOTtcXG4gIGJhY2tncm91bmQ6ICNhYzk3MWI7XFxufVxcblxcbi5wbGFjZV9zaGlwX2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuLmludmFsaWRfc2hpcF9wbGFjZW1lbnQge1xcbiAgYmFja2dyb3VuZDogI2YwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2luZGV4LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvY3NzL2luZGV4LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMvdWkvZ2FtZV9ib2FyZHMvY3NzL2luZGV4LmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJDT09SRElOQVRFUyIsIkxFVFRFUlMiLCJOVU1CRVJTIiwibWFwIiwibGV0dGVyIiwibnVtYmVyIiwicHVzaCIsIkdBTUUiLCJjb2xvcl9wbGF5ZXJfc2hpcHMiLCJTSElQUyIsIlJFVFVSTl9TSElQUyIsInNoaXAiLCJwb3NpdGlvbiIsImNvb3JkaW5hdGUiLCJUSUxFIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsImV2ZW50X2xpc3RlbmVycyIsIkFJX1RJTEVTIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIkFJX1RJTEVfQ0xJQ0tfSEFORExFUiIsImV2ZW50IiwiSUQiLCJ0YXJnZXQiLCJpZCIsInNsaWNlIiwiQVRUQUNLIiwidGlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXJfYmFja2dyb3VuZF90aWxlcyIsIk1BSU4iLCJjcmVhdGVFbGVtZW50IiwiQ0xBU1NFUyIsImkiLCJSQU5ET01fTlVNQkVSIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYXBwZW5kIiwiYm9keSIsInJlbmRlcl9nYW1lYm9hcmRfdGlsZXMiLCJQTEFZRVJfQk9BUkQiLCJBSV9CT0FSRCIsIlBMQVlFUl9CT0FSRF9USUxFIiwiQUlfQk9BUkRfVElMRSIsInJlbmRlcl90aWxlcyIsInJlbmRlcl9nYW1lX2JvYXJkcyIsIkFOSU1BVElPTlMiLCJQRVJJU0NPUEVfU1BJTk5FUiIsIkxFRlRfVElMRSIsIlJJR0hUX1RJTEUiLCJyZW1vdmUiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiUkFEQVJfU1BJTk5FUjEiLCJSQURBUl9TUElOTkVSMiIsIldBVEVSX0FOSU1BVElPTiIsIldBVEVSX1RJTEVTIiwiU1VCX0FOSU1BVElPTiIsInNldEludGVydmFsIiwiQk9BVDEiLCJCT0FUMiIsIldBVEVSIiwiSVRFUkFUT1IiLCJCQVRUTEVTSElQIiwiQiIsIkEiLCJUMSIsIlQyIiwiTCIsIkUiLCJTIiwiSCIsIkkiLCJQIiwiZXpfbG9hZGVyIiwiRVpfVElMRV9DT0xPUklaRVIiLCJjb2xvcl9iYXR0bGVzaGlwX3RpbGVzIiwiQ0FSUklFUiIsIkRFU1RST1lFUiIsIlNVQk1BUklORSIsImNvbG9yX3NoaXBfdGlsZXMiLCJjYXJyaWVyIiwiYmxhY2tfb3V0bGluZSIsImh1bGwiLCJkYXJrX2dyYXkiLCJsaWdodF9ncmF5Iiwic2hpcF9saWdodCIsInN1cnJvdW5kaW5nX3dhdGVyX2RhcmsiLCJzdXJyb3VuZGluZ193YXRlcl9saWdodCIsIkMiLCJWIiwiTiIsIlNJWCIsIk5JTkUiLCJVIiwiTjIiLCJWMiIsIlkiLCJBTEwiLCJpbm5lclRleHQiLCJkZXN0cm95ZXIiLCJzdWJtYXJpbmUiLCJsZWZ0X3BlcmlzY29wZSIsInJpZ2h0X3BlcmlzY29wZSIsIlNUQVJUIiwiY29sb3Jfc3RhcnRfdGlsZXMiLCJhbGwiLCJ0aWxlX2lkIiwiY29sb3Jfd2F0ZXJfdGlsZXMiLCJtaW4iLCJtYXgiLCJ0YXJnZXRfYXJyYXkiLCJpbnB1dF9hcnJheSIsImlucHV0X2NsYXNzIiwicGxhY2Vfc2hpcHMiLCJsaXN0ZW5lcnNfaGFuZGxlcnMiLCJTVEFSVF9CVVRUT04iLCJTVEFSVF9CVVRUT05fRU5URVJfSEFORExFUiIsIlNUQVJUX0JVVFRPTl9CQUNLR1JPVU5EX1RJTEVTIiwiU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMiLCJTVEFSVF9CVVRUT05fTEVBVkVfSEFORExFUiIsIlNUQVJUX0JVVFRPTl9DTElDS19IQU5ETEVSIiwiaW50ZXJ2YWwiLCJJTlRFUlZBTCIsImNsZWFySW50ZXJ2YWwiLCJIRUFESU5HIiwiY2Fycmllcl9lel9sb2FkZXIiLCJPVVRMSU5FIiwiSFVMTCIsIkRBUktfR1JBWSIsIkxJR0hUX0dSQVkiLCJTVVJST1VORElOR19XQVRFUl9EQVJLIiwiZGVzdHJveWVyX2V6X2xvYWRlciIsInMiLCJ0MSIsImEiLCJyIiwidDIiLCJSIiwiaG9tZXBhZ2UiLCJwbGFjZV9haV9zaGlwcyIsImxvZ2ljX2xpc3RlbmVycyIsImN1cnJlbnRfc2hpcF9pbmRleCIsIm9yaWVudGF0aW9uIiwiTEVOR1RIIiwiTUFYUyIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImJhdHRsZXNoaXAiLCJzdWIiLCJwYXRyb2xCb2F0IiwiSU5CT1VORFNfRVZBTFVBVE9SIiwidmFsdWVfdG9fY29tcGFyZSIsImNoYXJDb2RlQXQiLCJNQVgiLCJTUEFDRV9UQUtFTl9FVkFMVUFUT1IiLCJhbGxfdGlsZXMiLCJhcmVfYWxsX3Rha2VuIiwiUExBWUVSMV9TSElQUyIsIlBPU0lUSU9OUyIsIlNVQlNFUVVFTlRfVElMRVMiLCJMRVRURVJfQ0hBUl9DT0RFIiwiTlVNQkVSIiwiU1RPUF9BVCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIkNPTE9SX1RJTEVTIiwiY29vcmRpbmF0ZXMiLCJNT1VTRV9FTlRFUl9IQU5ETEVSIiwiSU5CT1VORFMiLCJBTExfQ09PUkRJTkFURVMiLCJBUkVfU1VCU0VRVUVOVF9TUEFDRVNfRlJFRSIsIk1PVVNFX0xFQVZFX0hBTkRMRVIiLCJIT1ZFUkVEX1RJTEVTIiwiTU9VU0VfQ0xJQ0tfSEFORExFUiIsIkNVUlJFTlRfU0hJUCIsIlBMQUNFX1NISVAiLCJTUEFDRV9CQVJfSEFORExFUiIsIktFWSIsImtleSIsIlRJTEVTIiwiSU5GTyIsIkFMTF9USUxFUyIsIlRPR0dMRV9PUklFTlRBVElPTiIsIk9ORV9SQU5ET00iLCJSQU5ET01fTEVUVEVSIiwiR0VUX01PVkUiLCJSQU5ET01fQ09PUkRJTkFURSIsImNyZWF0ZV9jb29yZGluYXRlcyIsIlVOSVFVRV9NT1ZFIiwidW5pcXVlIiwiTU9WRSIsImZpbGxfYWlfYm9hcmQiLCJTSElQX1BPU0lUSU9OUyIsIlBMQUNFX1NISVBTX0NPTlRBSU5FUiIsIklOU1RSVUNUSU9OU19DT05UQUlORVIiLCJJTlNUUlVDVElPTlMiLCJTUEFDRV9LRVkiLCJHYW1lYm9hcmQiLCJQbGF5ZXIiLCJnYW1lbG9vcCIsIlBMQVlFUjEiLCJQTEFZRVIyIiwicGxheWVyMV9nYW1lYm9hcmQiLCJwbGF5ZXIyX2dhbWVib2FyZCIsIlJFU0VUIiwicGxheWVyIiwic2hpcHMiLCJib2FyZCIsInBvc2l0aW9ucyIsInBsYWNlX3NoaXAiLCJodW1hbl9hdHRhY2siLCJhaV9hdHRhY2siLCJTaGlwIiwiaW5wdXRfY29vcmRpbmF0ZXMiLCJpbnB1dF9jb29yZGluYXRlIiwibWlzcyIsIldBU19ISVQiLCJoaXRzIiwiSElUX0lOREVYIiwiaW5kZXhPZiIsImhpdCIsIm1pc3NlcyIsImlzX2FsbF9zdW5rIiwiYWxsX3N1bmtfY2FsbCIsImlzX3N1bmsiLCJzb3J0IiwiRXJyb3IiLCJDT09SRElOQVRFIiwicmVtYWluaW5nX21vdmVzIiwibW92ZXMiLCJyZWNlaXZlX2F0dGFjayIsIkZJTFRFUkVEX01PVkVTIiwibGVuZ3RoIiwiUkVNQUlOSU5HX01PVkVTX0NPUFkiLCJSRU1BSU5JTkciLCJmaWx0ZXIiLCJyZW1haW5pbmdfbW92ZSIsImZpbGwiLCJwb3NpdGlvbl9oaXQiLCJldmVyeSIsImhpdHNfYXJyYXkiLCJISVRTIl0sInNvdXJjZVJvb3QiOiIifQ==