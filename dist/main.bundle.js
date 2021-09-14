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
/* harmony import */ var _render_game_over_message_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render_game_over_message.js */ "./src/components/ui/game_boards/helpers/render_game_over_message.js");



function event_listeners() {
  var AI_TILES = Array.from(document.getElementsByClassName('ai_board'));

  var AI_TILE_CLICK_HANDLER = function AI_TILE_CLICK_HANDLER(event) {
    var ID = event.target.id.slice(3);

    if (!_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.RETURN_MISSES(2).includes(ID) && !_index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.RETURN_HITS(2).includes(ID)) {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.ATTACK(ID);
      (0,_color_hits_misses_js__WEBPACK_IMPORTED_MODULE_1__["default"])('player', _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.RETURN_HITS(1), _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.RETURN_MISSES(1));
      (0,_color_hits_misses_js__WEBPACK_IMPORTED_MODULE_1__["default"])('ai', _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.RETURN_HITS(2), _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.RETURN_MISSES(2));
      var WINNER = _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.WINNER();

      if (WINNER !== undefined) {
        AI_TILES.map(function (tile) {
          tile.removeEventListener('click', AI_TILE_CLICK_HANDLER);
          tile.removeEventListener('mouseenter', AI_TILE_ENTER_HANDLER);
          tile.removeEventListener('mouseleave', AI_TILE_LEAVE_HANDLER);
          tile.style.cursor = 'crosshair';
        });
        (0,_render_game_over_message_js__WEBPACK_IMPORTED_MODULE_2__["default"])(WINNER);
      }
    }
  };

  var AI_TILE_ENTER_HANDLER = function AI_TILE_ENTER_HANDLER(event) {
    var ID = event.target.id.slice(3);
    var HITS = _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.RETURN_HITS(2);
    var MISSES = _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.RETURN_MISSES(2);
    var TILE = document.getElementById("ai_".concat(ID));

    if (HITS.includes(ID) || MISSES.includes(ID)) {
      TILE.classList.add('attacked_tile');
    } else {
      TILE.classList.add('ai_board_hover');
    }
  };

  var AI_TILE_LEAVE_HANDLER = function AI_TILE_LEAVE_HANDLER(event) {
    var ID = event.target.id.slice(3);
    var HITS = _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.RETURN_HITS(2);
    var MISSES = _index_js__WEBPACK_IMPORTED_MODULE_0__.GAME.RETURN_MISSES(2);
    var TILE = document.getElementById("ai_".concat(ID));

    if (HITS.includes(ID) || MISSES.includes(ID)) {
      TILE.classList.remove('attacked_tile');
    } else {
      TILE.classList.remove('ai_board_hover');
    }
  };

  AI_TILES.map(function (tile) {
    tile.addEventListener('click', AI_TILE_CLICK_HANDLER);
    tile.addEventListener('mouseenter', AI_TILE_ENTER_HANDLER);
    tile.addEventListener('mouseleave', AI_TILE_LEAVE_HANDLER);
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

/***/ "./src/components/ui/game_boards/helpers/render_game_over_message.js":
/*!***************************************************************************!*\
  !*** ./src/components/ui/game_boards/helpers/render_game_over_message.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render_game_over_message)
/* harmony export */ });
function render_game_over_message(winner) {
  var MAIN = document.getElementById('game_boards');
  var MESSAGE = document.createElement('div');
  MESSAGE.classList.add('winner_message');
  MESSAGE.innerText = winner;
  MAIN.append(MESSAGE);

  var MESSAGE_MOUSE_ENTER_HANDLER = function MESSAGE_MOUSE_ENTER_HANDLER() {
    MESSAGE.innerText = 'NEW GAME';
    MESSAGE.classList.add('winner_message_highlighted');
  };

  var MESSAGE_MOUSE_LEAVE_HANDLER = function MESSAGE_MOUSE_LEAVE_HANDLER() {
    MESSAGE.innerText = winner;
    MESSAGE.classList.remove('winner_message_highlighted');
  };

  var MESSAGE_CLICK_HANDLER = function MESSAGE_CLICK_HANDLER() {
    location.reload();
  };

  MESSAGE.addEventListener('mouseenter', MESSAGE_MOUSE_ENTER_HANDLER);
  MESSAGE.addEventListener('mouseleave', MESSAGE_MOUSE_LEAVE_HANDLER);
  MESSAGE.addEventListener('click', MESSAGE_CLICK_HANDLER);
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

  var SUB_ANIMATION = setInterval(PERISCOPE_SPINNER, 900);
  var BOAT1 = setInterval(RADAR_SPINNER1, 1100);
  var BOAT2 = setInterval(RADAR_SPINNER2, 1300);
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
  var player1 = new _player_js__WEBPACK_IMPORTED_MODULE_1__["default"]('human');
  var player2 = new _player_js__WEBPACK_IMPORTED_MODULE_1__["default"]('ai');
  var player1_gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var player2_gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

  var RESET = function RESET() {
    player1 = new _player_js__WEBPACK_IMPORTED_MODULE_1__["default"]('human');
    player2 = new _player_js__WEBPACK_IMPORTED_MODULE_1__["default"]('ai');
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
    player1.human_attack(player2_gameboard, coordinate);
    player2.ai_attack(player1_gameboard);
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

  var WINNER = function WINNER() {
    var BOARD1 = player1_gameboard.all_sunk();
    var BOARD2 = player2_gameboard.all_sunk();

    if (BOARD1 && BOARD2) {
      return "IT'S A TIE!";
    }

    if (BOARD1) {
      return 'YOU LOSE!';
    }

    if (BOARD2) {
      return 'YOU ARE THE WINNER!';
    }
  };

  return {
    RESET: RESET,
    RETURN_SHIPS: RETURN_SHIPS,
    PLACE_SHIP: PLACE_SHIP,
    ATTACK: ATTACK,
    RETURN_HITS: RETURN_HITS,
    RETURN_MISSES: RETURN_MISSES,
    WINNER: WINNER
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Space+Mono&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  min-width: 70em;\n}\n\n#game_boards {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  height: 50em;\n  min-width: 70em;\n}\n\n.game_board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 30em;\n  width: 30em;\n}\n\n.game_board_tile {\n  border: 1px solid white;\n}\n\n.player_board {\n  border: 1px solid #6e6112;\n}\n\n.ai_board {\n  border: 1px solid #ac971b;\n  cursor: none;\n}\n\n.ai_board_hover {\n  background: #84ff17;\n}\n\n#player_board {\n  position: absolute;\n  top: 10em;\n  left: 2em;\n}\n\n#ai_board {\n  position: absolute;\n  top: 10em;\n  right: 2em;\n}\n\n.placed_ship_tile {\n  background: #8b7b159b;\n}\n\n.player_hit {\n  background: #863d3db4;\n}\n\n.ai_hit {\n  background: #863d3d;\n}\n\n.player_miss {\n  background: #221b70a1;\n}\n\n.ai_miss {\n  background: #2b219b;\n}\n\n.attacked_tile {\n  background: #f00;\n}\n\n.winner_message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 11.5em;\n  left: 10.5em;\n  font-size: 2em;\n  font-family: 'Space Mono', monospace;\n  height: 2em;\n  width: 14em;\n  background: #ac971b;\n}\n\n.winner_message_highlighted {\n  font-family: 'Space Mono', monospace;\n  background: black;\n  color: #ac971b;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ui/game_boards/css/index.css"],"names":[],"mappings":"AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,cAAc;EACd,oCAAoC;EACpC,WAAW;EACX,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;EACpC,iBAAiB;EACjB,cAAc;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');\n\nbody {\n  min-width: 70em;\n}\n\n#game_boards {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(70, 1fr);\n  grid-template-rows: repeat(50, 1fr);\n  height: 50em;\n  min-width: 70em;\n}\n\n.game_board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 30em;\n  width: 30em;\n}\n\n.game_board_tile {\n  border: 1px solid white;\n}\n\n.player_board {\n  border: 1px solid #6e6112;\n}\n\n.ai_board {\n  border: 1px solid #ac971b;\n  cursor: none;\n}\n\n.ai_board_hover {\n  background: #84ff17;\n}\n\n#player_board {\n  position: absolute;\n  top: 10em;\n  left: 2em;\n}\n\n#ai_board {\n  position: absolute;\n  top: 10em;\n  right: 2em;\n}\n\n.placed_ship_tile {\n  background: #8b7b159b;\n}\n\n.player_hit {\n  background: #863d3db4;\n}\n\n.ai_hit {\n  background: #863d3d;\n}\n\n.player_miss {\n  background: #221b70a1;\n}\n\n.ai_miss {\n  background: #2b219b;\n}\n\n.attacked_tile {\n  background: #f00;\n}\n\n.winner_message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 11.5em;\n  left: 10.5em;\n  font-size: 2em;\n  font-family: 'Space Mono', monospace;\n  height: 2em;\n  width: 14em;\n  background: #ac971b;\n}\n\n.winner_message_highlighted {\n  font-family: 'Space Mono', monospace;\n  background: black;\n  color: #ac971b;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUwsRUFBU0UsQ0FBVCxDQUFSO0FBQ0FGLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0UsQ0FBWCxDQUFSO0FBQ0FGLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0UsQ0FBWCxDQUFSO0FBRUEsTUFBTUMsQ0FBQyxHQUFHRixVQUFVLENBQUNFLENBQXJCO0FBQ0FILEVBQUFBLHFEQUFRLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBU0csQ0FBVCxDQUFSO0FBQ0FILEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0csQ0FBWCxDQUFSO0FBRUEsTUFBTUMsRUFBRSxHQUFHSCxVQUFVLENBQUNHLEVBQXRCO0FBQ0FKLEVBQUFBLHFEQUFRLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBU0ksRUFBVCxDQUFSO0FBRUEsTUFBTUMsRUFBRSxHQUFHSixVQUFVLENBQUNJLEVBQXRCO0FBQ0FMLEVBQUFBLHFEQUFRLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBU0ssRUFBVCxDQUFSO0FBRUEsTUFBTUMsQ0FBQyxHQUFHTCxVQUFVLENBQUNLLENBQXJCO0FBQ0FOLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV00sQ0FBWCxDQUFSO0FBRUEsTUFBTUMsQ0FBQyxHQUFHTixVQUFVLENBQUNNLENBQXJCO0FBQ0FQLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV08sQ0FBWCxDQUFSO0FBQ0FQLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV08sQ0FBWCxDQUFSO0FBQ0FQLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV08sQ0FBWCxDQUFSO0FBRUEsTUFBTUMsQ0FBQyxHQUFHUCxVQUFVLENBQUNPLENBQXJCO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxD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dXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9oZWxwZXJzL2Nvb3JkaW5hdGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9oZWxwZXJzL2NvbG9yX2hpdHNfbWlzc2VzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9oZWxwZXJzL2NvbG9yX3BsYXllcl9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvZ2FtZV9ib2FyZHMvaGVscGVycy9ldmVudF9saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL2hlbHBlcnMvcmVuZGVyX2JhY2tncm91bmRfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL2hlbHBlcnMvcmVuZGVyX2dhbWVfb3Zlcl9tZXNzYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9oZWxwZXJzL3JlbmRlcl9nYW1lYm9hcmRfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9yZW5kZXJfZ2FtZV9ib2FyZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9iYXR0bGVzaGlwX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2NvbG9yX2JhdHRsZXNoaXBfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvY29sb3Jfc2hpcF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9jb2xvcl9zdGFydF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9jb2xvcl93YXRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2xpc3RlbmVyc19oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9yZW5kZXJfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvc2hpcF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9zdGFydF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2hlbHBlcnMvbG9naWNfbGlzdGVuZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9oZWxwZXJzL3BsYWNlX2FpX3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9oZWxwZXJzL3JlbmRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvcGxhY2Vfc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL2dhbWVfbG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvZ2FtZV9ib2FyZHMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2FuaW1hdG9yLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9zaGlwcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy93YXRlci5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09PUkRJTkFURVMgPSBbXTtcbmNvbnN0IExFVFRFUlMgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onXTtcbmNvbnN0IE5VTUJFUlMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG5MRVRURVJTLm1hcCgobGV0dGVyKSA9PiB7XG4gIE5VTUJFUlMubWFwKChudW1iZXIpID0+IHtcbiAgICBDT09SRElOQVRFUy5wdXNoKGAke2xldHRlcn0ke251bWJlcn1gKTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ09PUkRJTkFURVM7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcl9oaXRzX21pc3NlcyhwbGF5ZXIsIGhpdHMsIG1pc3Nlcykge1xuICBoaXRzLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbGF5ZXJ9XyR7Y29vcmRpbmF0ZX1gKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoYCR7cGxheWVyfV9oaXRgKTtcbiAgfSk7XG5cbiAgbWlzc2VzLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbGF5ZXJ9XyR7Y29vcmRpbmF0ZX1gKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoYCR7cGxheWVyfV9taXNzYCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgR0FNRSB9IGZyb20gJy4uLy4uLy4uLy4uL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3JfcGxheWVyX3NoaXBzKCkge1xuICBjb25zdCBTSElQUyA9IEdBTUUuUkVUVVJOX1NISVBTKDEpO1xuICBmb3IgKGxldCBzaGlwIGluIFNISVBTKSB7XG4gICAgY29uc3QgQ09PUkRJTkFURVMgPSBTSElQU1tzaGlwXS5wb3NpdGlvbjtcbiAgICBDT09SRElOQVRFUy5tYXAoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxheWVyXyR7Y29vcmRpbmF0ZX1gKTtcbiAgICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgncGxhY2VkX3NoaXBfdGlsZScpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBHQU1FIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5kZXguanMnO1xuaW1wb3J0IGNvbG9yX2hpdHNfbWlzc2VzIGZyb20gJy4vY29sb3JfaGl0c19taXNzZXMuanMnO1xuaW1wb3J0IHJlbmRlcl9nYW1lX292ZXJfbWVzc2FnZSBmcm9tICcuL3JlbmRlcl9nYW1lX292ZXJfbWVzc2FnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV2ZW50X2xpc3RlbmVycygpIHtcbiAgY29uc3QgQUlfVElMRVMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FpX2JvYXJkJykpO1xuXG4gIGNvbnN0IEFJX1RJTEVfQ0xJQ0tfSEFORExFUiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IElEID0gZXZlbnQudGFyZ2V0LmlkLnNsaWNlKDMpO1xuICAgIGlmIChcbiAgICAgICFHQU1FLlJFVFVSTl9NSVNTRVMoMikuaW5jbHVkZXMoSUQpICYmXG4gICAgICAhR0FNRS5SRVRVUk5fSElUUygyKS5pbmNsdWRlcyhJRClcbiAgICApIHtcbiAgICAgIEdBTUUuQVRUQUNLKElEKTtcbiAgICAgIGNvbG9yX2hpdHNfbWlzc2VzKCdwbGF5ZXInLCBHQU1FLlJFVFVSTl9ISVRTKDEpLCBHQU1FLlJFVFVSTl9NSVNTRVMoMSkpO1xuICAgICAgY29sb3JfaGl0c19taXNzZXMoJ2FpJywgR0FNRS5SRVRVUk5fSElUUygyKSwgR0FNRS5SRVRVUk5fTUlTU0VTKDIpKTtcbiAgICAgIGNvbnN0IFdJTk5FUiA9IEdBTUUuV0lOTkVSKCk7XG4gICAgICBpZiAoV0lOTkVSICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgQUlfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICAgICAgdGlsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIEFJX1RJTEVfQ0xJQ0tfSEFORExFUik7XG4gICAgICAgICAgdGlsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgQUlfVElMRV9FTlRFUl9IQU5ETEVSKTtcbiAgICAgICAgICB0aWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBBSV9USUxFX0xFQVZFX0hBTkRMRVIpO1xuICAgICAgICAgIHRpbGUuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7XG4gICAgICAgIH0pO1xuICAgICAgICByZW5kZXJfZ2FtZV9vdmVyX21lc3NhZ2UoV0lOTkVSKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgQUlfVElMRV9FTlRFUl9IQU5ETEVSID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgSUQgPSBldmVudC50YXJnZXQuaWQuc2xpY2UoMyk7XG4gICAgY29uc3QgSElUUyA9IEdBTUUuUkVUVVJOX0hJVFMoMik7XG4gICAgY29uc3QgTUlTU0VTID0gR0FNRS5SRVRVUk5fTUlTU0VTKDIpO1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYWlfJHtJRH1gKTtcbiAgICBpZiAoSElUUy5pbmNsdWRlcyhJRCkgfHwgTUlTU0VTLmluY2x1ZGVzKElEKSkge1xuICAgICAgVElMRS5jbGFzc0xpc3QuYWRkKCdhdHRhY2tlZF90aWxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgnYWlfYm9hcmRfaG92ZXInKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgQUlfVElMRV9MRUFWRV9IQU5ETEVSID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgSUQgPSBldmVudC50YXJnZXQuaWQuc2xpY2UoMyk7XG4gICAgY29uc3QgSElUUyA9IEdBTUUuUkVUVVJOX0hJVFMoMik7XG4gICAgY29uc3QgTUlTU0VTID0gR0FNRS5SRVRVUk5fTUlTU0VTKDIpO1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYWlfJHtJRH1gKTtcbiAgICBpZiAoSElUUy5pbmNsdWRlcyhJRCkgfHwgTUlTU0VTLmluY2x1ZGVzKElEKSkge1xuICAgICAgVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2tlZF90aWxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFRJTEUuY2xhc3NMaXN0LnJlbW92ZSgnYWlfYm9hcmRfaG92ZXInKTtcbiAgICB9XG4gIH07XG5cbiAgQUlfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEFJX1RJTEVfQ0xJQ0tfSEFORExFUik7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgQUlfVElMRV9FTlRFUl9IQU5ETEVSKTtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBBSV9USUxFX0xFQVZFX0hBTkRMRVIpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl9iYWNrZ3JvdW5kX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBDTEFTU0VTID0gW1xuICAgICdibHVlMScsXG4gICAgJ2JsdWUyJyxcbiAgICAnYmx1ZTMnLFxuICAgICdibHVlNCcsXG4gICAgJ2JsdWU1JyxcbiAgICAnYmx1ZTYnLFxuICAgICdibHVlNycsXG4gICAgJ2JsdWU4JyxcbiAgICAnYmx1ZTknLFxuICAgICdibHVlMTAnLFxuICAgICdncmVlbjEnLFxuICBdO1xuICBNQUlOLmlkID0gJ2dhbWVfYm9hcmRzJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM1MDA7IGkrKykge1xuICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkc19iYWNrZ3JvdW5kJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKENMQVNTRVNbUkFORE9NX05VTUJFUl0pO1xuICAgIE1BSU4uYXBwZW5kKFRJTEUpO1xuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoTUFJTik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJfZ2FtZV9vdmVyX21lc3NhZ2Uod2lubmVyKSB7XG4gIGNvbnN0IE1BSU4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZV9ib2FyZHMnKTtcbiAgY29uc3QgTUVTU0FHRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIE1FU1NBR0UuY2xhc3NMaXN0LmFkZCgnd2lubmVyX21lc3NhZ2UnKTtcbiAgTUVTU0FHRS5pbm5lclRleHQgPSB3aW5uZXI7XG4gIE1BSU4uYXBwZW5kKE1FU1NBR0UpO1xuXG4gIGNvbnN0IE1FU1NBR0VfTU9VU0VfRU5URVJfSEFORExFUiA9ICgpID0+IHtcbiAgICBNRVNTQUdFLmlubmVyVGV4dCA9ICdORVcgR0FNRSc7XG4gICAgTUVTU0FHRS5jbGFzc0xpc3QuYWRkKCd3aW5uZXJfbWVzc2FnZV9oaWdobGlnaHRlZCcpO1xuICB9O1xuXG4gIGNvbnN0IE1FU1NBR0VfTU9VU0VfTEVBVkVfSEFORExFUiA9ICgpID0+IHtcbiAgICBNRVNTQUdFLmlubmVyVGV4dCA9IHdpbm5lcjtcbiAgICBNRVNTQUdFLmNsYXNzTGlzdC5yZW1vdmUoJ3dpbm5lcl9tZXNzYWdlX2hpZ2hsaWdodGVkJyk7XG4gIH07XG5cbiAgY29uc3QgTUVTU0FHRV9DTElDS19IQU5ETEVSID0gKCkgPT4ge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9O1xuXG4gIE1FU1NBR0UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIE1FU1NBR0VfTU9VU0VfRU5URVJfSEFORExFUik7XG4gIE1FU1NBR0UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIE1FU1NBR0VfTU9VU0VfTEVBVkVfSEFORExFUik7XG4gIE1FU1NBR0UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBNRVNTQUdFX0NMSUNLX0hBTkRMRVIpO1xufVxuIiwiaW1wb3J0IENPT1JESU5BVEVTIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvY29vcmRpbmF0ZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJfZ2FtZWJvYXJkX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVfYm9hcmRzJyk7XG4gIGNvbnN0IFBMQVlFUl9CT0FSRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBBSV9CT0FSRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIFBMQVlFUl9CT0FSRC5jbGFzc0xpc3QuYWRkKCdnYW1lX2JvYXJkJyk7XG4gIEFJX0JPQVJELmNsYXNzTGlzdC5hZGQoJ2dhbWVfYm9hcmQnKTtcbiAgUExBWUVSX0JPQVJELmlkID0gJ3BsYXllcl9ib2FyZCc7XG4gIEFJX0JPQVJELmlkID0gJ2FpX2JvYXJkJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIGNvbnN0IFBMQVlFUl9CT0FSRF9USUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgQUlfQk9BUkRfVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgUExBWUVSX0JPQVJEX1RJTEUuY2xhc3NMaXN0LmFkZCgnZ2FtZV9ib2FyZF90aWxlJyk7XG4gICAgUExBWUVSX0JPQVJEX1RJTEUuY2xhc3NMaXN0LmFkZCgncGxheWVyX2JvYXJkJyk7XG4gICAgUExBWUVSX0JPQVJEX1RJTEUuaWQgPSBgcGxheWVyXyR7Q09PUkRJTkFURVNbaV19YDtcbiAgICBBSV9CT0FSRF9USUxFLmNsYXNzTGlzdC5hZGQoJ2dhbWVfYm9hcmRfdGlsZScpO1xuICAgIEFJX0JPQVJEX1RJTEUuY2xhc3NMaXN0LmFkZCgnYWlfYm9hcmQnKTtcbiAgICBBSV9CT0FSRF9USUxFLmlkID0gYGFpXyR7Q09PUkRJTkFURVNbaV19YDtcblxuICAgIFBMQVlFUl9CT0FSRC5hcHBlbmQoUExBWUVSX0JPQVJEX1RJTEUpO1xuICAgIEFJX0JPQVJELmFwcGVuZChBSV9CT0FSRF9USUxFKTtcbiAgfVxuXG4gIE1BSU4uYXBwZW5kKFBMQVlFUl9CT0FSRCk7XG4gIE1BSU4uYXBwZW5kKEFJX0JPQVJEKTtcbn1cbiIsImltcG9ydCByZW5kZXJfYmFja2dyb3VuZF90aWxlcyBmcm9tICcuL3JlbmRlcl9iYWNrZ3JvdW5kX3RpbGVzLmpzJztcbmltcG9ydCByZW5kZXJfZ2FtZWJvYXJkX3RpbGVzIGZyb20gJy4vcmVuZGVyX2dhbWVib2FyZF90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl90aWxlcygpIHtcbiAgcmVuZGVyX2JhY2tncm91bmRfdGlsZXMoKTtcbiAgcmVuZGVyX2dhbWVib2FyZF90aWxlcygpO1xufVxuIiwiaW1wb3J0IHJlbmRlcl90aWxlcyBmcm9tICcuL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9wbGF5ZXJfc2hpcHMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX3BsYXllcl9zaGlwcy5qcyc7XG5pbXBvcnQgZXZlbnRfbGlzdGVuZXJzIGZyb20gJy4vaGVscGVycy9ldmVudF9saXN0ZW5lcnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJfZ2FtZV9ib2FyZHMoKSB7XG4gIHJlbmRlcl90aWxlcygpO1xuICBjb2xvcl9wbGF5ZXJfc2hpcHMoKTtcbiAgZXZlbnRfbGlzdGVuZXJzKCk7XG59XG4iLCJjb25zdCBBTklNQVRJT05TID0gKCgpID0+IHtcbiAgY29uc3QgUEVSSVNDT1BFX1NQSU5ORVIgPSAoKSA9PiB7XG4gICAgY29uc3QgTEVGVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoNzU5KTtcbiAgICBjb25zdCBSSUdIVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoNzYxKTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29mZicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29uJyk7XG4gICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIGlmIChMRUZUX1RJTEUuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdvbicpKSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb24nKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdwZXJpc2NvcGVfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncGVyaXNjb3BlX29mZicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3BlcmlzY29wZV9vZmYnKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdwZXJpc2NvcGVfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3BlcmlzY29wZV9vbicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBSQURBUl9TUElOTkVSMSA9ICgpID0+IHtcbiAgICBjb25zdCBMRUZUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3MTQpO1xuICAgIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3MTYpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBpZiAoTEVGVF9USUxFLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnb24nKSkge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb2ZmJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFJBREFSX1NQSU5ORVIyID0gKCkgPT4ge1xuICAgIGNvbnN0IExFRlRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDEwOTcpO1xuICAgIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxMDk5KTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgaWYgKExFRlRfVElMRS5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ29uJykpIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29uJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29mZicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBXQVRFUl9BTklNQVRJT04gPSAoKSA9PiB7XG4gICAgY29uc3QgV0FURVJfVElMRVMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dhdGVyJykpO1xuICAgIGNvbnN0IENMQVNTRVMgPSBbXG4gICAgICAnYmx1ZTEnLFxuICAgICAgJ2JsdWUyJyxcbiAgICAgICdibHVlMycsXG4gICAgICAnYmx1ZTQnLFxuICAgICAgJ2JsdWU1JyxcbiAgICAgICdibHVlNicsXG4gICAgICAnYmx1ZTcnLFxuICAgICAgJ2JsdWU4JyxcbiAgICAgICdibHVlOScsXG4gICAgICAnYmx1ZTEwJyxcbiAgICAgICdncmVlbjEnLFxuICAgIF07XG4gICAgV0FURVJfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICBjb25zdCBSQU5ET01fTlVNQkVSID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QgPSBgaG9tZXBlYWdlX3RpbGUgd2F0ZXIgJHtDTEFTU0VTW1JBTkRPTV9OVU1CRVJdfWA7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgU1VCX0FOSU1BVElPTiA9IHNldEludGVydmFsKFBFUklTQ09QRV9TUElOTkVSLCA5MDApO1xuICBjb25zdCBCT0FUMSA9IHNldEludGVydmFsKFJBREFSX1NQSU5ORVIxLCAxMTAwKTtcbiAgY29uc3QgQk9BVDIgPSBzZXRJbnRlcnZhbChSQURBUl9TUElOTkVSMiwgMTMwMCk7XG4gIGNvbnN0IFdBVEVSID0gc2V0SW50ZXJ2YWwoV0FURVJfQU5JTUFUSU9OLCAxMDAwKTtcblxuICByZXR1cm4geyBTVUJfQU5JTUFUSU9OLCBCT0FUMSwgQk9BVDIsIFdBVEVSIH07XG59KSgpO1xuXG5leHBvcnQgeyBBTklNQVRJT05TIH07XG4iLCJpbXBvcnQgeyBJVEVSQVRPUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmNvbnN0IEJBVFRMRVNISVAgPSB7XG4gIEI6IFsxNTAsIDE1NCwgMjIwLCAyMjQsIDM2MCwgMzY0LCA0MzAsIDQzNiwgNDM0XSxcbiAgQTogWzE1NiwgMTU5LCAyMjYsIDIyOSwgMzY2LCAzNjksIDQzNiwgNDM5LCA1MDYsIDUwOV0sXG4gIFQxOiBbMTYyLCAxNjMsIDIzMiwgMjMzLCAzMDIsIDMwMywgMzcyLCAzNzMsIDQ0MiwgNDQzLCA1MTIsIDUxM10sXG4gIFQyOiBbMTY3LCAxNjgsIDIzNywgMjM4LCAzMDcsIDMwOCwgMzc3LCAzNzgsIDQ0NywgNDQ4LCA1MTcsIDUxOF0sXG4gIEw6IFsxMDEsIDE3MSwgMjQxLCAzMTEsIDM4MSwgNDUxXSxcbiAgRTogWzE3NiwgMjQ2LCAzODYsIDQ1Nl0sXG4gIFM6IFsxODEsIDI1MSwgMzk0LCA0NjRdLFxuICBIOiBbMTE2LCAxMTksIDE4NiwgMTg5LCAyNTYsIDI1OSwgMzk2LCAzOTksIDQ2NiwgNDY5LCA1MzYsIDUzOV0sXG4gIEk6IFsxOTIsIDE5MywgMjYyLCAyNjMsIDMzMiwgMzMzLCA0MDIsIDQwMywgNDcyLCA0NzNdLFxuICBQOiBbMTk2LCAxOTksIDI2NiwgMjY5LCA0MDYsIDQ3NiwgNTQ2XSxcbn07XG5cbihmdW5jdGlvbiBlel9sb2FkZXIoKSB7XG4gIGNvbnN0IEIgPSBCQVRUTEVTSElQLkI7XG4gIElURVJBVE9SKDgwLCA4NCwgQik7XG4gIElURVJBVE9SKDI5MCwgMjk0LCBCKTtcbiAgSVRFUkFUT1IoNTAwLCA1MDQsIEIpO1xuXG4gIGNvbnN0IEEgPSBCQVRUTEVTSElQLkE7XG4gIElURVJBVE9SKDg2LCA4OSwgQSk7XG4gIElURVJBVE9SKDI5NiwgMjk5LCBBKTtcblxuICBjb25zdCBUMSA9IEJBVFRMRVNISVAuVDE7XG4gIElURVJBVE9SKDkxLCA5NCwgVDEpO1xuXG4gIGNvbnN0IFQyID0gQkFUVExFU0hJUC5UMjtcbiAgSVRFUkFUT1IoOTYsIDk5LCBUMik7XG5cbiAgY29uc3QgTCA9IEJBVFRMRVNISVAuTDtcbiAgSVRFUkFUT1IoNTIxLCA1MjQsIEwpO1xuXG4gIGNvbnN0IEUgPSBCQVRUTEVTSElQLkU7XG4gIElURVJBVE9SKDEwNiwgMTA5LCBFKTtcbiAgSVRFUkFUT1IoMzE2LCAzMTgsIEUpO1xuICBJVEVSQVRPUig1MjYsIDUyOSwgRSk7XG5cbiAgY29uc3QgUyA9IEJBVFRMRVNISVAuUztcbiAgSVRFUkFUT1IoMTExLCAxMTQsIFMpO1xuICBJVEVSQVRPUigzMjEsIDMyNCwgUyk7XG4gIElURVJBVE9SKDUzMSwgNTM0LCBTKTtcblxuICBjb25zdCBIID0gQkFUVExFU0hJUC5IO1xuICBJVEVSQVRPUigzMjYsIDMyOSwgSCk7XG5cbiAgY29uc3QgSSA9IEJBVFRMRVNISVAuSTtcbiAgSVRFUkFUT1IoMTIxLCAxMjQsIEkpO1xuICBJVEVSQVRPUig1NDEsIDU0NCwgSSk7XG5cbiAgY29uc3QgUCA9IEJBVFRMRVNISVAuUDtcbiAgSVRFUkFUT1IoMTI2LCAxMjksIFApO1xuICBJVEVSQVRPUigzMzYsIDMzOSwgUCk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBCQVRUTEVTSElQO1xuIiwiaW1wb3J0IHsgRVpfVElMRV9DT0xPUklaRVIgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IEJBVFRMRVNISVAgZnJvbSAnLi9iYXR0bGVzaGlwX3RpbGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3JfYmF0dGxlc2hpcF90aWxlcygpIHtcbiAgZm9yIChsZXQgbGV0dGVyIGluIEJBVFRMRVNISVApIHtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihCQVRUTEVTSElQW2xldHRlcl0sICd0aXRsZScpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDQVJSSUVSLCBERVNUUk9ZRVIsIFNVQk1BUklORSB9IGZyb20gJy4vc2hpcF90aWxlcy5qcyc7XG5pbXBvcnQgeyBFWl9USUxFX0NPTE9SSVpFUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX3NoaXBfdGlsZXMoKSB7XG4gIChmdW5jdGlvbiBjYXJyaWVyKCkge1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuYmxhY2tfb3V0bGluZSwgJ3NoaXBfaHVsbF9vdXRsaW5lJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5odWxsLCAnc2hpcF9odWxsJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5kYXJrX2dyYXksICdkYXJrX2dyYXknKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLmxpZ2h0X2dyYXksICdsaWdodF9ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5zaGlwX2xpZ2h0LCAnc2hpcF9saWdodCcpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyaywgJ3N1cnJvdW5kaW5nX3dhdGVyX2RhcmsnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihcbiAgICAgIENBUlJJRVIuc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQsXG4gICAgICAnc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQnXG4gICAgKTtcblxuICAgIGNvbnN0IEMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNzk1KTtcbiAgICBjb25zdCBWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTc5Nik7XG4gICAgY29uc3QgTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE3OTcpO1xuICAgIGNvbnN0IFNJWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE3OTkpO1xuICAgIGNvbnN0IE5JTkUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxODAwKTtcbiAgICBjb25zdCBVID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM0OSk7XG4gICAgY29uc3QgUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTApO1xuICAgIGNvbnN0IE4yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM1Mik7XG4gICAgY29uc3QgQSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTMpO1xuICAgIGNvbnN0IFYyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMjM1NCk7XG4gICAgY29uc3QgWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTUpO1xuICAgIGNvbnN0IEFMTCA9IFtDLCBWLCBOLCBTSVgsIE5JTkUsIFUsIFMsIE4yLCBBLCBWMiwgWV07XG4gICAgQUxMLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwX3RleHQnKTtcbiAgICB9KTtcbiAgICBDLmlubmVyVGV4dCA9ICdDJztcbiAgICBWLmlubmVyVGV4dCA9ICdWJztcbiAgICBOLmlubmVyVGV4dCA9ICdOJztcbiAgICBTSVguaW5uZXJUZXh0ID0gJzYnO1xuICAgIE5JTkUuaW5uZXJUZXh0ID0gJzknO1xuICAgIFUuaW5uZXJUZXh0ID0gJ1UnO1xuICAgIFMuaW5uZXJUZXh0ID0gJ1MnO1xuICAgIE4yLmlubmVyVGV4dCA9ICdOJztcbiAgICBBLmlubmVyVGV4dCA9ICdBJztcbiAgICBWMi5pbm5lclRleHQgPSAnVic7XG4gICAgWS5pbm5lclRleHQgPSAnWSc7XG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uIGRlc3Ryb3llcigpIHtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuYmxhY2tfb3V0bGluZSwgJ3NoaXBfaHVsbF9vdXRsaW5lJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLmh1bGwsICdzaGlwX2h1bGwnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIubGlnaHRfZ3JheSwgJ2xpZ2h0X2dyYXknKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihERVNUUk9ZRVIuZGFya19ncmF5LCAnZGFya19ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLnNoaXBfbGlnaHQsICdzaGlwX2xpZ2h0Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoXG4gICAgICBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyayxcbiAgICAgICdzdXJyb3VuZGluZ193YXRlcl9kYXJrJ1xuICAgICk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoXG4gICAgICBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQsXG4gICAgICAnc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQnXG4gICAgKTtcblxuICAgIGNvbnN0IFUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTUwKTtcbiAgICBjb25zdCBTID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1MSk7XG4gICAgY29uc3QgTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTMpO1xuICAgIGNvbnN0IEEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTU0KTtcbiAgICBjb25zdCBWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1NSk7XG4gICAgY29uc3QgWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTYpO1xuICAgIGNvbnN0IEFMTCA9IFtVLCBTLCBOLCBBLCBWLCBZXTtcbiAgICBBTEwubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3NoaXBfdGV4dCcpO1xuICAgIH0pO1xuICAgIFUuaW5uZXJUZXh0ID0gJ1UnO1xuICAgIFMuaW5uZXJUZXh0ID0gJ1MnO1xuICAgIE4uaW5uZXJUZXh0ID0gJ04nO1xuICAgIEEuaW5uZXJUZXh0ID0gJ0EnO1xuICAgIFYuaW5uZXJUZXh0ID0gJ1YnO1xuICAgIFkuaW5uZXJUZXh0ID0gJ1knO1xuICB9KSgpO1xuXG4gIChmdW5jdGlvbiBzdWJtYXJpbmUoKSB7XG4gICAgLy8gRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLmh1bGwsICdzdWInKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihTVUJNQVJJTkUuZGFya19ncmF5LCAnZGFya19ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLmxlZnRfcGVyaXNjb3BlLCAncGVyaXNjb3BlX29uJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLnJpZ2h0X3BlcmlzY29wZSwgJ3BlcmlzY29wZV9vZmYnKTtcbiAgfSkoKTtcbn1cbiIsImltcG9ydCBTVEFSVCBmcm9tICcuL3N0YXJ0X3RpbGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3Jfc3RhcnRfdGlsZXMoKSB7XG4gIGNvbnN0IEFMTCA9IFNUQVJULmFsbDtcbiAgQUxMLm1hcCgodGlsZV9pZCkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RhcnRfJHt0aWxlX2lkfWApO1xuICAgIFRJTEUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfYmFja2dyb3VuZCcpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfdGV4dCcpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX3dhdGVyX3RpbGVzKCkge1xuICBjb25zdCBDTEFTU0VTID0gW1xuICAgICdibHVlMScsXG4gICAgJ2JsdWUyJyxcbiAgICAnYmx1ZTMnLFxuICAgICdibHVlNCcsXG4gICAgJ2JsdWU1JyxcbiAgICAnYmx1ZTYnLFxuICAgICdibHVlNycsXG4gICAgJ2JsdWU4JyxcbiAgICAnYmx1ZTknLFxuICAgICdibHVlMTAnLFxuICAgICdncmVlbjEnLFxuICBdO1xuICBjb25zdCBXQVRFUl9USUxFUyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2F0ZXInKSk7XG4gIFdBVEVSX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKENMQVNTRVNbUkFORE9NX05VTUJFUl0pO1xuICB9KTtcbn1cbiIsImNvbnN0IElURVJBVE9SID0gKG1pbiwgbWF4LCB0YXJnZXRfYXJyYXkpID0+IHtcbiAgZm9yIChsZXQgaSA9IG1pbjsgaSA8IG1heCArIDE7IGkrKykge1xuICAgIHRhcmdldF9hcnJheS5wdXNoKGkpO1xuICB9XG59O1xuXG5jb25zdCBFWl9USUxFX0NPTE9SSVpFUiA9IChpbnB1dF9hcnJheSwgaW5wdXRfY2xhc3MpID0+IHtcbiAgaW5wdXRfYXJyYXkubWFwKCh0aWxlX2lkKSA9PiB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpbGVfaWQpO1xuICAgIFRJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoaW5wdXRfY2xhc3MpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IElURVJBVE9SLCBFWl9USUxFX0NPTE9SSVpFUiB9O1xuIiwiaW1wb3J0IHsgQU5JTUFUSU9OUyB9IGZyb20gJy4vYW5pbWF0aW9ucy5qcyc7XG5pbXBvcnQgcGxhY2Vfc2hpcHMgZnJvbSAnLi4vLi4vcGxhY2Vfc2hpcHMvcGxhY2Vfc2hpcHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0ZW5lcnNfaGFuZGxlcnMoKSB7XG4gIGNvbnN0IFNUQVJUX0JVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydF9idXR0b24nKTtcblxuICBjb25zdCBTVEFSVF9CVVRUT05fRU5URVJfSEFORExFUiA9ICgpID0+IHtcbiAgICBjb25zdCBTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydF9iYWNrZ3JvdW5kJylcbiAgICApO1xuICAgIFNUQVJUX0JVVFRPTl9CQUNLR1JPVU5EX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQnKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfYmFja2dyb3VuZCcpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRfdGV4dCcpXG4gICAgKTtcbiAgICBTVEFSVF9CVVRUT05fVEVYVF9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfdGV4dF9ob3ZlcmVkJyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X3RleHQnKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBTVEFSVF9CVVRUT05fTEVBVkVfSEFORExFUiA9ICgpID0+IHtcbiAgICBjb25zdCBTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQnKVxuICAgICk7XG4gICAgU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkRfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0X2JhY2tncm91bmQnKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkJyk7XG4gICAgfSk7XG4gICAgY29uc3QgU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRfdGV4dF9ob3ZlcmVkJylcbiAgICApO1xuICAgIFNUQVJUX0JVVFRPTl9URVhUX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdGFydF90ZXh0Jyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X3RleHRfaG92ZXJlZCcpO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBTVEFSVF9CVVRUT05fQ0xJQ0tfSEFORExFUiA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpbnRlcnZhbCBpbiBBTklNQVRJT05TKSB7XG4gICAgICBjb25zdCBJTlRFUlZBTCA9IEFOSU1BVElPTlNbaW50ZXJ2YWxdO1xuICAgICAgY2xlYXJJbnRlcnZhbChJTlRFUlZBTCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYW5kaW5nX3BhZ2UnKS5yZW1vdmUoKTtcbiAgICBwbGFjZV9zaGlwcygpO1xuICB9O1xuXG4gIFNUQVJUX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU1RBUlRfQlVUVE9OX0VOVEVSX0hBTkRMRVIpO1xuICBTVEFSVF9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFNUQVJUX0JVVFRPTl9MRUFWRV9IQU5ETEVSKTtcbiAgU1RBUlRfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgU1RBUlRfQlVUVE9OX0NMSUNLX0hBTkRMRVIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBIRUFESU5HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IFNUQVJUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIE1BSU4uaWQgPSAnbGFuZGluZ19wYWdlJztcbiAgSEVBRElORy5pZCA9ICdic19oZWFkaW5nJztcbiAgU1RBUlQuaWQgPSAnc3RhcnRfYnV0dG9uJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyODAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IGk7XG4gICAgVElMRS5jbGFzc0xpc3QgPSAnaG9tZXBlYWdlX3RpbGUgd2F0ZXInO1xuICAgIEhFQURJTkcuYXBwZW5kKFRJTEUpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IGBzdGFydF8ke2l9YDtcbiAgICBUSUxFLmNsYXNzTGlzdCA9ICd0aWxlIHN0YXJ0IHN0YXJ0X2JhY2tncm91bmQnO1xuICAgIFNUQVJULmFwcGVuZChUSUxFKTtcbiAgfVxuICBNQUlOLmFwcGVuZChIRUFESU5HKTtcbiAgTUFJTi5hcHBlbmQoU1RBUlQpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChNQUlOKTtcbn1cbiIsImltcG9ydCB7IElURVJBVE9SIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY29uc3QgQ0FSUklFUiA9IHtcbiAgYmxhY2tfb3V0bGluZTogW1xuICAgIDE0NDYsIDE0NTAsIDE1MTYsIDE1MjAsIDE1ODYsIDE1OTAsIDE3MjMsIDE3MzMsIDE4MDMsIDE4NTksIDE4NzMsIDE4NzcsXG4gICAgMTkyOCwgMTk0MywgMTk0NiwgMTk0OCwgMTk1NSwgMTk1NiwgMTk4MiwgMTk4MywgMTk4NywgMTk4OCwgMTk5MiwgMTk5MyxcbiAgICAxOTk4LCAyMDEzLCAyMDI2LCAyMDUyLCAyMDU0LCAyMDU1LCAyMDU3LCAyMDU5LCAyMDYwLCAyMDYyLCAyMDY0LCAyMDY1LFxuICAgIDIwNjgsIDIwODMsIDIwODUsIDIwODksIDIwOTEsIDIwOTQsIDIwOTUsIDIxMjMsIDIxMjUsIDIxMjgsIDIxMzAsIDIxMzMsXG4gICAgMjEzNSwgMjEzOCwgMjE1MywgMjE1NSwgMjE1OSwgMjE2MSwgMjE2NSwgMjI2MCwgMjI2MSwgMjI2MiwgMjMwOSwgMjMzMixcbiAgICAyMzMzLCAyMzM0LCAyMzc5LCAyNDA0LCAyNDQ4LCAyNDc1LCAyNTE3LCAyNTQ2LCAyNTg2LCAyNjE3LCAyNjU2LCAyNjg3LFxuICAgIDI3MjYsXG4gIF0sXG4gIGh1bGw6IFtcbiAgICAxNTE5LCAxOTM5LCAxOTQwLCAyMDc5LCAyMDgwLCAyNjg4LCAyNjg5LCAyNjkyLCAyNjkzLCAyNjk2LCAyNjk3LCAyNzAwLFxuICAgIDI3MDEsIDI3MDQsIDI3MDUsIDI3MDgsIDI3MDksIDI3MTIsIDI3MTMsIDI3MTYsIDI3MTcsIDI3MjAsIDI3MjEsIDI3MjQsXG4gICAgMjcyNSxcbiAgXSxcbiAgZGFya19ncmF5OiBbXG4gICAgMTE2OCwgMTIzOCwgMTMwOCwgMTUxNywgMTUxOCwgMTkyOSwgMTkzMCwgMTk0MSwgMTk0MiwgMTk0NywgMjAyNSwgMjA1MyxcbiAgICAyMDU4LCAyMDYzLCAyMDY5LCAyMDcwLCAyMDgxLCAyMDgyLCAyMTI0LCAyMTI5LCAyMTM0LCAyMDkyLCAyMDkzLFxuICBdLFxuICBsaWdodF9ncmF5OiBbMTA5NywgMTA5OV0sXG4gIHNoaXBfbGlnaHQ6IFsxMDk4XSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfZGFyazogW1xuICAgIDI1NDUsIDI2MTYsIDI2ODYsIDI2OTAsIDI2OTEsIDI2OTQsIDI2OTUsIDI2OTgsIDI2OTksIDI3MDIsIDI3MDMsIDI3MDYsXG4gICAgMjcwNywgMjcxMCwgMjcxMSwgMjcxNCwgMjcxNSwgMjcxOCwgMjcxOSwgMjcyMiwgMjcyMywgMjU4NywgMjY1NywgMjcyNyxcbiAgICAyNDQ5LCAyNTE4LCAyNTE5LCAyNTg4LCAyNjU4LFxuICBdLFxuICBzdXJyb3VuZGluZ193YXRlcl9saWdodDogW1xuICAgIDI1ODksIDI2MTUsIDI2NTksIDI2ODQsIDI2ODUsIDI3MjgsIDI3MjksIDI3NTMsIDI3NTQsIDI3NTUsIDI3OTgsIDI3OTksXG4gIF0sXG59O1xuXG5jb25zdCBERVNUUk9ZRVIgPSB7XG4gIGJsYWNrX291dGxpbmU6IFtcbiAgICAxMTk0LCAxMTk4LCAxMjExLCAxMjY1LCAxMjY5LCAxMjgwLCAxNDc0LCAxNDkxLCAxNDkyLCAxNTQ1LCAxNTYxLCAxNjE2LFxuICAgIDE2MzEsIDE2ODcsIDE3MDEsXG4gIF0sXG4gIGh1bGw6IFsxNjg4LCAxNjkxLCAxNjkyLCAxNjk1LCAxNjk2LCAxNjk5LCAxNzAwXSxcbiAgZGFya19ncmF5OiBbNzg1LCA4NTUsIDkyNSwgOTk1LCAxMjY2LCAxMjcwLCAxMjczLCAxMjc0LCAxMjc2LCAxMjc5XSxcbiAgbGlnaHRfZ3JheTogWzcxNCwgNzE2LCAxMTMzLCAxMTM3LCAxMjcyLCAxMjc1LCAxMjc3XSxcbiAgc2hpcF9saWdodDogWzcxNV0sXG4gIHN1cnJvdW5kaW5nX3dhdGVyX2Rhcms6IFsxNjg5LCAxNjkwLCAxNjkzLCAxNjk0LCAxNjk3LCAxNjk4XSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQ6IFtcbiAgICAxNjMyLCAxNjg1LCAxNjg2LCAxNzAyLCAxNzAzLCAxNzU0LCAxNzU1LCAxNzczLCAxNzc0LFxuICBdLFxufTtcblxuY29uc3QgU1VCTUFSSU5FID0ge1xuICBodWxsOiBbXSxcbiAgZGFya19ncmF5OiBbNzYwLCA4MzAsIDkwMF0sXG4gIGxlZnRfcGVyaXNjb3BlOiBbNzU5XSxcbiAgcmlnaHRfcGVyaXNjb3BlOiBbNzYxXSxcbn07XG5cbihmdW5jdGlvbiBjYXJyaWVyX2V6X2xvYWRlcigpIHtcbiAgY29uc3QgT1VUTElORSA9IENBUlJJRVIuYmxhY2tfb3V0bGluZTtcbiAgSVRFUkFUT1IoMTM3NiwgMTM4MCwgT1VUTElORSk7XG4gIElURVJBVE9SKDE2NTMsIDE2NjMsIE9VVExJTkUpO1xuICBJVEVSQVRPUigxNzkwLCAxNzkzLCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMjAxNSwgMjAxOSwgT1VUTElORSk7XG4gIElURVJBVE9SKDIwMjIsIDIwMjQsIE9VVExJTkUpO1xuICBJVEVSQVRPUigyMTkwLCAyMjM5LCBPVVRMSU5FKTtcblxuICBjb25zdCBIVUxMID0gQ0FSUklFUi5odWxsO1xuICBJVEVSQVRPUigxNDQ3LCAxNDQ5LCBIVUxMKTtcbiAgSVRFUkFUT1IoMTU4NywgMTU4OSwgSFVMTCk7XG4gIElURVJBVE9SKDE3MjQsIDE3MzIsIEhVTEwpO1xuICBJVEVSQVRPUigxNzk0LCAxODAyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTg2MCwgMTg3MiwgSFVMTCk7XG4gIElURVJBVE9SKDE5MzEsIDE5MzQsIEhVTEwpO1xuICBJVEVSQVRPUigxOTk5LCAyMDEyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMjA3MSwgMjA3NCwgSFVMTCk7XG4gIElURVJBVE9SKDIxMzksIDIxNTIsIEhVTEwpO1xuICBJVEVSQVRPUigyMjYzLCAyMzA4LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjMzNSwgMjM3OCwgSFVMTCk7XG4gIElURVJBVE9SKDI0MDUsIDI0NDcsIEhVTEwpO1xuICBJVEVSQVRPUigyNDc2LCAyNTE2LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjU0NywgMjU4NSwgSFVMTCk7XG4gIElURVJBVE9SKDI2MTgsIDI2NTUsIEhVTEwpO1xuXG4gIGNvbnN0IERBUktfR1JBWSA9IENBUlJJRVIuZGFya19ncmF5O1xuICBJVEVSQVRPUigxMTM0LCAxMTM2LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMDg2LCAyMDg4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMTU2LCAyMTU4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMTYyLCAyMTY0LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxOTM1LCAxOTM4LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigyMDc1LCAyMDc4LCBEQVJLX0dSQVkpO1xuXG4gIGNvbnN0IExJR0hUX0dSQVkgPSBDQVJSSUVSLmxpZ2h0X2dyYXk7XG4gIElURVJBVE9SKDIzMzUsIDIzNzgsIExJR0hUX0dSQVkpO1xuXG4gIGNvbnN0IFNVUlJPVU5ESU5HX1dBVEVSX0RBUksgPSBDQVJSSUVSLnN1cnJvdW5kaW5nX3dhdGVyX2Rhcms7XG4gIElURVJBVE9SKDI3NTYsIDI3OTcsIFNVUlJPVU5ESU5HX1dBVEVSX0RBUkspO1xufSkoKTtcblxuKGZ1bmN0aW9uIGRlc3Ryb3llcl9lel9sb2FkZXIoKSB7XG4gIGNvbnN0IE9VVExJTkUgPSBERVNUUk9ZRVIuYmxhY2tfb3V0bGluZTtcbiAgSVRFUkFUT1IoMTQwMywgMTQyMiwgT1VUTElORSk7XG5cbiAgY29uc3QgSFVMTCA9IERFU1RST1lFUi5odWxsO1xuICBJVEVSQVRPUigxNDc1LCAxNDkwLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTYxNywgMTYzMCwgSFVMTCk7XG5cbiAgY29uc3QgTElHSFRfR1JBWSA9IERFU1RST1lFUi5saWdodF9ncmF5O1xuICBJVEVSQVRPUigxNTQ2LCAxNTYwLCBMSUdIVF9HUkFZKTtcbiAgSVRFUkFUT1IoMTA2MywgMTA2NywgTElHSFRfR1JBWSk7XG4gIElURVJBVE9SKDEyMDIsIDEyMDcsIExJR0hUX0dSQVkpO1xuICBJVEVSQVRPUigxMzQyLCAxMzQ3LCBMSUdIVF9HUkFZKTtcblxuICBjb25zdCBEQVJLX0dSQVkgPSBERVNUUk9ZRVIuZGFya19ncmF5O1xuICBJVEVSQVRPUigxMzM0LCAxMzM2LCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxMzM4LCAxMzQwLCBEQVJLX0dSQVkpO1xuICBJVEVSQVRPUigxMzQ5LCAxMzUxLCBEQVJLX0dSQVkpO1xuXG4gIGNvbnN0IFNVUlJPVU5ESU5HX1dBVEVSX0RBUksgPSBERVNUUk9ZRVIuc3Vycm91bmRpbmdfd2F0ZXJfZGFyaztcbiAgSVRFUkFUT1IoMTc1NiwgMTc3MiwgU1VSUk9VTkRJTkdfV0FURVJfREFSSyk7XG59KSgpO1xuXG5leHBvcnQgeyBDQVJSSUVSLCBERVNUUk9ZRVIsIFNVQk1BUklORSB9O1xuIiwiaW1wb3J0IHsgSVRFUkFUT1IgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jb25zdCBTVEFSVCA9IHtcbiAgczogWzIyMSwgMjIyLCA0MzcsIDQzOF0sXG4gIHQxOiBbMjM0LCAyMzUsIDMwNCwgMzA1LCAzNzQsIDM3NSwgNDQ0LCA0NDUsIDUxNCwgNTE1LCA1ODQsIDU4NV0sXG4gIGE6IFtcbiAgICAyNDEsIDI0MiwgMjQ3LCAyNDgsIDQ1MSwgNDUyLCA0NTcsIDQ1OCwgNTIxLCA1MjIsIDUyNywgNTI4LCA1OTEsIDU5MiwgNTk3LFxuICAgIDU5OCxcbiAgXSxcbiAgcjogW1xuICAgIDI1MSwgMjUyLCAyNTcsIDI1OCwgNDYxLCA0NjIsIDQ2NywgNDY4LCA1MzEsIDUzMiwgNTM3LCA1MzgsIDYwMSwgNjAyLCA2MDcsXG4gICAgNjA4LFxuICBdLFxuICB0MjogWzI2NCwgMjY1LCAzMzQsIDMzNSwgNDA0LCA0MDUsIDQ3NCwgNDc1LCA1NDQsIDU0NSwgNjE0LCA2MTVdLFxuICBhbGw6IFtdLFxufTtcblxuKGZ1bmN0aW9uIGV6X2xvYWRlcigpIHtcbiAgY29uc3QgUyA9IFNUQVJULnM7XG4gIElURVJBVE9SKDgxLCA4OCwgUyk7XG4gIElURVJBVE9SKDE1MSwgMTU4LCBTKTtcbiAgSVRFUkFUT1IoMjkxLCAyOTgsIFMpO1xuICBJVEVSQVRPUigzNjEsIDM2OCwgUyk7XG4gIElURVJBVE9SKDUwMSwgNTA4LCBTKTtcbiAgSVRFUkFUT1IoNTcxLCA1NzgsIFMpO1xuXG4gIGNvbnN0IFQxID0gU1RBUlQudDE7XG4gIElURVJBVE9SKDkxLCA5OCwgVDEpO1xuICBJVEVSQVRPUigxNjEsIDE2OCwgVDEpO1xuXG4gIGNvbnN0IEEgPSBTVEFSVC5hO1xuICBJVEVSQVRPUigxMDEsIDEwOCwgQSk7XG4gIElURVJBVE9SKDE3MSwgMTc4LCBBKTtcbiAgSVRFUkFUT1IoMzExLCAzMTgsIEEpO1xuICBJVEVSQVRPUigzODEsIDM4OCwgQSk7XG5cbiAgY29uc3QgUiA9IFNUQVJULnI7XG4gIElURVJBVE9SKDExMSwgMTE2LCBSKTtcbiAgSVRFUkFUT1IoMTgxLCAxODYsIFIpO1xuICBJVEVSQVRPUigzMjEsIDMyNiwgUik7XG4gIElURVJBVE9SKDM5MSwgMzk2LCBSKTtcblxuICBjb25zdCBUMiA9IFNUQVJULnQyO1xuICBJVEVSQVRPUigxMjEsIDEyOCwgVDIpO1xuICBJVEVSQVRPUigxOTEsIDE5OCwgVDIpO1xuXG4gIGZvciAobGV0IGxldHRlciBpbiBTVEFSVCkge1xuICAgIGlmIChsZXR0ZXIgPT09ICdhbGwnKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgU1RBUlRbbGV0dGVyXS5tYXAoKG51bWJlcikgPT4ge1xuICAgICAgU1RBUlQuYWxsLnB1c2gobnVtYmVyKTtcbiAgICB9KTtcbiAgfVxufSkoKTtcbmV4cG9ydCBkZWZhdWx0IFNUQVJUO1xuIiwiaW1wb3J0IHJlbmRlcl90aWxlcyBmcm9tICcuL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9zdGFydF90aWxlcyBmcm9tICcuL2hlbHBlcnMvY29sb3Jfc3RhcnRfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX3NoaXBfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX3NoaXBfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX2JhdHRsZXNoaXBfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX2JhdHRsZXNoaXBfdGlsZXMuanMnO1xuaW1wb3J0IGNvbG9yX3dhdGVyX3RpbGVzIGZyb20gJy4vaGVscGVycy9jb2xvcl93YXRlcl90aWxlcy5qcyc7XG5pbXBvcnQgbGlzdGVuZXJzX2hhbmRsZXJzIGZyb20gJy4vaGVscGVycy9saXN0ZW5lcnNfaGFuZGxlcnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lcGFnZSgpIHtcbiAgcmVuZGVyX3RpbGVzKCk7XG4gIGNvbG9yX3N0YXJ0X3RpbGVzKCk7XG4gIGNvbG9yX3NoaXBfdGlsZXMoKTtcbiAgY29sb3JfYmF0dGxlc2hpcF90aWxlcygpO1xuICBjb2xvcl93YXRlcl90aWxlcygpO1xuICBsaXN0ZW5lcnNfaGFuZGxlcnMoKTtcbn1cbiIsImltcG9ydCB7IEdBTUUgfSBmcm9tICcuLi8uLi8uLi8uLi9pbmRleC5qcyc7XG5pbXBvcnQgcGxhY2VfYWlfc2hpcHMgZnJvbSAnLi9wbGFjZV9haV9zaGlwcy5qcyc7XG5pbXBvcnQgcmVuZGVyX2dhbWVfYm9hcmRzIGZyb20gJy4uLy4uL2dhbWVfYm9hcmRzL3JlbmRlcl9nYW1lX2JvYXJkcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2ljX2xpc3RlbmVycygpIHtcbiAgbGV0IGN1cnJlbnRfc2hpcF9pbmRleCA9IDA7XG4gIGxldCBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgY29uc3QgU0hJUFMgPSBbJ2NhcnJpZXInLCAnYmF0dGxlc2hpcCcsICdkZXN0cm95ZXInLCAnc3ViJywgJ3BhdHJvbEJvYXQnXTtcbiAgY29uc3QgTEVOR1RIID0gWzUsIDQsIDMsIDMsIDJdO1xuICBjb25zdCBNQVhTID0ge1xuICAgIC8vIHZlcnRpY2FsIGlzIHVzaW5nIGNoYXJjb2Rlc1xuICAgIGNhcnJpZXI6IHtcbiAgICAgIGhvcml6b250YWw6IDUsXG4gICAgICB2ZXJ0aWNhbDogMTAyLCAvLyBmXG4gICAgfSxcbiAgICBiYXR0bGVzaGlwOiB7XG4gICAgICBob3Jpem9udGFsOiA2LFxuICAgICAgdmVydGljYWw6IDEwMywgLy8gZ1xuICAgIH0sXG4gICAgZGVzdHJveWVyOiB7XG4gICAgICBob3Jpem9udGFsOiA3LFxuICAgICAgdmVydGljYWw6IDEwNCwgLy8gaFxuICAgIH0sXG4gICAgc3ViOiB7XG4gICAgICBob3Jpem9udGFsOiA3LFxuICAgICAgdmVydGljYWw6IDEwNCwgLy8gaFxuICAgIH0sXG4gICAgcGF0cm9sQm9hdDoge1xuICAgICAgaG9yaXpvbnRhbDogOCxcbiAgICAgIHZlcnRpY2FsOiAxMDUsIC8vIGlcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IElOQk9VTkRTX0VWQUxVQVRPUiA9IChpZCkgPT4ge1xuICAgIGxldCB2YWx1ZV90b19jb21wYXJlID0gJyc7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHZhbHVlX3RvX2NvbXBhcmUgPSBpZFsxXTtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICB2YWx1ZV90b19jb21wYXJlID0gaWQuY2hhckNvZGVBdCgwKTtcbiAgICB9XG4gICAgY29uc3QgTUFYID0gTUFYU1tTSElQU1tjdXJyZW50X3NoaXBfaW5kZXhdXVtvcmllbnRhdGlvbl07XG4gICAgcmV0dXJuIHZhbHVlX3RvX2NvbXBhcmUgPD0gTUFYO1xuICB9O1xuXG4gIGNvbnN0IFNQQUNFX1RBS0VOX0VWQUxVQVRPUiA9IChhbGxfdGlsZXMpID0+IHtcbiAgICBsZXQgYXJlX2FsbF90YWtlbiA9IHRydWU7XG4gICAgY29uc3QgUExBWUVSMV9TSElQUyA9IEdBTUUuUkVUVVJOX1NISVBTKDEpO1xuICAgIGZvciAobGV0IHNoaXAgaW4gUExBWUVSMV9TSElQUykge1xuICAgICAgY29uc3QgUE9TSVRJT05TID0gUExBWUVSMV9TSElQU1tzaGlwXS5wb3NpdGlvbjtcbiAgICAgIGFsbF90aWxlcy5tYXAoKHRpbGUpID0+IHtcbiAgICAgICAgaWYgKFBPU0lUSU9OUy5pbmNsdWRlcyh0aWxlKSkge1xuICAgICAgICAgIGFyZV9hbGxfdGFrZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhcmVfYWxsX3Rha2VuO1xuICB9O1xuXG4gIGNvbnN0IFNVQlNFUVVFTlRfVElMRVMgPSAoaWQpID0+IHtcbiAgICBjb25zdCBMRVRURVJfQ0hBUl9DT0RFID0gaWQuY2hhckNvZGVBdCgwKTtcbiAgICBjb25zdCBOVU1CRVIgPSBpZFsxXTtcbiAgICBsZXQgYWxsID0gW107XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IFNUT1BfQVQgPSArTlVNQkVSICsgTEVOR1RIW2N1cnJlbnRfc2hpcF9pbmRleF07XG4gICAgICBmb3IgKGxldCBpID0gTlVNQkVSOyBpIDwgU1RPUF9BVDsgaSsrKSB7XG4gICAgICAgIGFsbC5wdXNoKGAke1N0cmluZy5mcm9tQ2hhckNvZGUoTEVUVEVSX0NIQVJfQ09ERSl9JHtpfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFsbDtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBjb25zdCBTVE9QX0FUID0gTEVUVEVSX0NIQVJfQ09ERSArIExFTkdUSFtjdXJyZW50X3NoaXBfaW5kZXhdO1xuICAgICAgZm9yIChsZXQgaSA9IExFVFRFUl9DSEFSX0NPREU7IGkgPCBTVE9QX0FUOyBpKyspIHtcbiAgICAgICAgYWxsLnB1c2goYCR7U3RyaW5nLmZyb21DaGFyQ29kZShpKX0ke05VTUJFUn1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGw7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IENPTE9SX1RJTEVTID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29vcmRpbmF0ZXMubWFwKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29vcmRpbmF0ZSk7XG4gICAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3BsYWNlX3NoaXBfaG92ZXJlZCcpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IE1PVVNFX0VOVEVSX0hBTkRMRVIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBJRCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICBjb25zdCBJTkJPVU5EUyA9IElOQk9VTkRTX0VWQUxVQVRPUihJRCk7XG4gICAgY29uc3QgQUxMX0NPT1JESU5BVEVTID0gU1VCU0VRVUVOVF9USUxFUyhJRCk7XG4gICAgY29uc3QgQVJFX1NVQlNFUVVFTlRfU1BBQ0VTX0ZSRUUgPSBTUEFDRV9UQUtFTl9FVkFMVUFUT1IoQUxMX0NPT1JESU5BVEVTKTtcbiAgICBpZiAoIUlOQk9VTkRTIHx8ICFBUkVfU1VCU0VRVUVOVF9TUEFDRVNfRlJFRSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWRfc2hpcF9wbGFjZW1lbnQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQ09MT1JfVElMRVMoQUxMX0NPT1JESU5BVEVTKTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgncGxhY2Vfc2hpcF9ob3ZlcmVkJyk7XG4gIH07XG5cbiAgY29uc3QgTU9VU0VfTEVBVkVfSEFORExFUiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IEhPVkVSRURfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxhY2Vfc2hpcF9ob3ZlcmVkJylcbiAgICApO1xuICAgIEhPVkVSRURfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlX3NoaXBfaG92ZXJlZCcpO1xuICAgIH0pO1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkX3NoaXBfcGxhY2VtZW50Jyk7XG4gIH07XG5cbiAgY29uc3QgTU9VU0VfQ0xJQ0tfSEFORExFUiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IElEID0gZXZlbnQudGFyZ2V0LmlkO1xuICAgIGNvbnN0IElOQk9VTkRTID0gSU5CT1VORFNfRVZBTFVBVE9SKElEKTtcbiAgICBjb25zdCBBTExfQ09PUkRJTkFURVMgPSBTVUJTRVFVRU5UX1RJTEVTKElEKTtcbiAgICBjb25zdCBBUkVfU1VCU0VRVUVOVF9TUEFDRVNfRlJFRSA9IFNQQUNFX1RBS0VOX0VWQUxVQVRPUihBTExfQ09PUkRJTkFURVMpO1xuXG4gICAgaWYgKElOQk9VTkRTICYmIEFSRV9TVUJTRVFVRU5UX1NQQUNFU19GUkVFICYmIGN1cnJlbnRfc2hpcF9pbmRleCA8IDUpIHtcbiAgICAgIGNvbnN0IENVUlJFTlRfU0hJUCA9IFNISVBTW2N1cnJlbnRfc2hpcF9pbmRleF07XG4gICAgICBHQU1FLlBMQUNFX1NISVAoMSwgQ1VSUkVOVF9TSElQLCBBTExfQ09PUkRJTkFURVMpO1xuICAgICAgQUxMX0NPT1JESU5BVEVTLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29vcmRpbmF0ZSk7XG4gICAgICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgncGxhY2VkX3RpbGUnKTtcbiAgICAgIH0pO1xuICAgICAgY3VycmVudF9zaGlwX2luZGV4ID0gY3VycmVudF9zaGlwX2luZGV4ICsgMTtcblxuICAgICAgaWYgKGN1cnJlbnRfc2hpcF9pbmRleCA+IDQpIHtcbiAgICAgICAgY29uc3QgTUFJTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZV9zaGlwc19tYWluJyk7XG4gICAgICAgIE1BSU4ucmVtb3ZlKCk7XG4gICAgICAgIHBsYWNlX2FpX3NoaXBzKCk7XG4gICAgICAgIHJlbmRlcl9nYW1lX2JvYXJkcygpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBTUEFDRV9CQVJfSEFORExFUiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IEtFWSA9IGV2ZW50LmtleTtcbiAgICBpZiAoS0VZID09PSAnICcgJiYgb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoS0VZID09PSAnICcgJiYgb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBUSUxFUyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxhY2Vfc2hpcF90aWxlJykpO1xuICBUSUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBNT1VTRV9FTlRFUl9IQU5ETEVSKTtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBNT1VTRV9MRUFWRV9IQU5ETEVSKTtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTU9VU0VfQ0xJQ0tfSEFORExFUik7XG4gIH0pO1xuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgU1BBQ0VfQkFSX0hBTkRMRVIpO1xufVxuIiwiaW1wb3J0IHsgR0FNRSB9IGZyb20gJy4uLy4uLy4uLy4uL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxhY2VfYWlfc2hpcHMoKSB7XG4gIGxldCBjdXJyZW50X3NoaXBfaW5kZXggPSAwO1xuICBsZXQgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gIGNvbnN0IFNISVBTID0gWydjYXJyaWVyJywgJ2JhdHRsZXNoaXAnLCAnZGVzdHJveWVyJywgJ3N1YicsICdwYXRyb2xCb2F0J107XG4gIGNvbnN0IExFTkdUSCA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgY29uc3QgSU5GTyA9IHtcbiAgICAvLyB2ZXJ0aWNhbCBpcyB1c2luZyBjaGFyY29kZXNcbiAgICBjYXJyaWVyOiB7XG4gICAgICBtYXg6IDUsIC8vaG9yaXpvbnRhbFxuICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgIH0sXG4gICAgYmF0dGxlc2hpcDoge1xuICAgICAgbWF4OiA2LCAvLyB2ZXJ0aWNhbFxuICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgIH0sXG4gICAgZGVzdHJveWVyOiB7XG4gICAgICBtYXg6IDcsIC8vIGhvcml6b250YWxcbiAgICAgIGNvb3JkaW5hdGVzOiBbXSxcbiAgICB9LFxuICAgIHN1Yjoge1xuICAgICAgbWF4OiA3LCAvLyB2ZXJ0aWNhbFxuICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgIH0sXG4gICAgcGF0cm9sQm9hdDoge1xuICAgICAgbWF4OiA4LCAvLyBob3Jpem9udGFsXG4gICAgICBjb29yZGluYXRlczogW10sXG4gICAgfSxcbiAgfTtcbiAgY29uc3QgQUxMX0NPT1JESU5BVEVTID0gW107XG5cbiAgY29uc3QgTEVUVEVSUyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJywgJ2knLCAnaiddO1xuXG4gIGNvbnN0IEFMTF9USUxFUyA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgTEVUVEVSX0NIQVJfQ09ERSA9IGNvb3JkaW5hdGUuY2hhckNvZGVBdCgwKTtcbiAgICBjb25zdCBOVU1CRVIgPSBjb29yZGluYXRlWzFdO1xuICAgIGxldCBhbGwgPSBbXTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgY29uc3QgU1RPUF9BVCA9ICtOVU1CRVIgKyBMRU5HVEhbY3VycmVudF9zaGlwX2luZGV4XTtcbiAgICAgIGZvciAobGV0IGkgPSBOVU1CRVI7IGkgPCBTVE9QX0FUOyBpKyspIHtcbiAgICAgICAgYWxsLnB1c2goYCR7U3RyaW5nLmZyb21DaGFyQ29kZShMRVRURVJfQ0hBUl9DT0RFKX0ke2l9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWxsO1xuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGNvbnN0IFNUT1BfQVQgPSBMRVRURVJfQ0hBUl9DT0RFICsgTEVOR1RIW2N1cnJlbnRfc2hpcF9pbmRleF07XG4gICAgICBmb3IgKGxldCBpID0gTEVUVEVSX0NIQVJfQ09ERTsgaSA8IFNUT1BfQVQ7IGkrKykge1xuICAgICAgICBhbGwucHVzaChgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKGkpfSR7TlVNQkVSfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFsbDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgVE9HR0xFX09SSUVOVEFUSU9OID0gKCkgPT4ge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBvcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBPTkVfUkFORE9NID0gKCkgPT4ge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBSQU5ET01fTEVUVEVSID0gTEVUVEVSU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgICAgY29uc3QgUkFORE9NX05VTUJFUiA9IE1hdGguZmxvb3IoXG4gICAgICAgIE1hdGgucmFuZG9tKCkgKiAoSU5GT1tTSElQU1tjdXJyZW50X3NoaXBfaW5kZXhdXS5tYXggKyAxKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBSQU5ET01fTEVUVEVSICsgUkFORE9NX05VTUJFUjtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBjb25zdCBSQU5ET01fTEVUVEVSID1cbiAgICAgICAgTEVUVEVSU1tcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoSU5GT1tTSElQU1tjdXJyZW50X3NoaXBfaW5kZXhdXS5tYXggKyAxKSlcbiAgICAgICAgXTtcbiAgICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICByZXR1cm4gUkFORE9NX0xFVFRFUiArIFJBTkRPTV9OVU1CRVI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IEdFVF9NT1ZFID0gKCkgPT4ge1xuICAgIGNvbnN0IFJBTkRPTV9DT09SRElOQVRFID0gT05FX1JBTkRPTSgpO1xuICAgIGNvbnN0IEFMTF9DT09SRElOQVRFUyA9IEFMTF9USUxFUyhSQU5ET01fQ09PUkRJTkFURSk7XG4gICAgcmV0dXJuIEFMTF9DT09SRElOQVRFUztcbiAgfTtcblxuICAoZnVuY3Rpb24gY3JlYXRlX2Nvb3JkaW5hdGVzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBjb25zdCBVTklRVUVfTU9WRSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHVuaXF1ZSA9IHRydWU7XG4gICAgICAgIGxldCBNT1ZFID0gR0VUX01PVkUoKTtcbiAgICAgICAgTU9WRS5tYXAoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICBpZiAoQUxMX0NPT1JESU5BVEVTLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgICB1bmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodW5pcXVlID09PSBmYWxzZSkge1xuICAgICAgICAgIFVOSVFVRV9NT1ZFKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVuaXF1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIE1PVkUubWFwKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICBJTkZPW1NISVBTW2N1cnJlbnRfc2hpcF9pbmRleF1dLmNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICBBTExfQ09PUkRJTkFURVMucHVzaChjb29yZGluYXRlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIFVOSVFVRV9NT1ZFKCk7XG4gICAgICBjdXJyZW50X3NoaXBfaW5kZXgrKztcbiAgICAgIFRPR0dMRV9PUklFTlRBVElPTigpO1xuICAgIH1cbiAgfSkoKTtcblxuICAoZnVuY3Rpb24gZmlsbF9haV9ib2FyZCgpIHtcbiAgICBmb3IgKGxldCBzaGlwIGluIElORk8pIHtcbiAgICAgIGNvbnN0IFNISVBfUE9TSVRJT05TID0gSU5GT1tzaGlwXS5jb29yZGluYXRlcztcbiAgICAgIEdBTUUuUExBQ0VfU0hJUCgyLCBzaGlwLCBTSElQX1BPU0lUSU9OUyk7XG4gICAgfVxuICB9KSgpO1xufVxuIiwiaW1wb3J0IENPT1JESU5BVEVTIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvY29vcmRpbmF0ZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJfdGlsZXMoKSB7XG4gIGNvbnN0IE1BSU4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IFBMQUNFX1NISVBTX0NPTlRBSU5FUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBJTlNUUlVDVElPTlNfQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IElOU1RSVUNUSU9OUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgU1BBQ0VfS0VZID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgna2JkJyk7XG4gIGNvbnN0IENMQVNTRVMgPSBbXG4gICAgJ2JsdWUxJyxcbiAgICAnYmx1ZTInLFxuICAgICdibHVlMycsXG4gICAgJ2JsdWU0JyxcbiAgICAnYmx1ZTUnLFxuICAgICdibHVlNicsXG4gICAgJ2JsdWU3JyxcbiAgICAnYmx1ZTgnLFxuICAgICdibHVlOScsXG4gICAgJ2JsdWUxMCcsXG4gICAgJ2dyZWVuMScsXG4gIF07XG5cbiAgTUFJTi5pZCA9ICdwbGFjZV9zaGlwc19tYWluJztcbiAgUExBQ0VfU0hJUFNfQ09OVEFJTkVSLmlkID0gJ3BsYWNlX3NoaXBzX2NvbnRhaW5lcic7XG4gIElOU1RSVUNUSU9OU19DT05UQUlORVIuaWQgPSAnaW5zdHJ1Y3Rpb25zX2NvbnRhaW5lcic7XG4gIElOU1RSVUNUSU9OUy5pZCA9ICdpbnN0cnVjdGlvbnMnO1xuICBTUEFDRV9LRVkuaWQgPSAnYmtkX3NwYWNlJztcbiAgSU5TVFJVQ1RJT05TLmlubmVyVGV4dCA9ICd0byByb3RhdGUnO1xuICBTUEFDRV9LRVkuaW5uZXJUZXh0ID0gJ3NwYWNlJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM1MDA7IGkrKykge1xuICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgncGxhY2Vfc2hpcHNfYmFja2dyb3VuZF90aWxlJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKENMQVNTRVNbUkFORE9NX05VTUJFUl0pO1xuICAgIE1BSU4uYXBwZW5kKFRJTEUpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgVElMRS5pZCA9IENPT1JESU5BVEVTW2ldO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgncGxhY2Vfc2hpcF90aWxlJyk7XG4gICAgUExBQ0VfU0hJUFNfQ09OVEFJTkVSLmFwcGVuZChUSUxFKTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChNQUlOKTtcbiAgSU5TVFJVQ1RJT05TX0NPTlRBSU5FUi5hcHBlbmQoU1BBQ0VfS0VZKTtcbiAgSU5TVFJVQ1RJT05TX0NPTlRBSU5FUi5hcHBlbmQoSU5TVFJVQ1RJT05TKTtcbiAgTUFJTi5hcHBlbmQoUExBQ0VfU0hJUFNfQ09OVEFJTkVSKTtcbiAgTUFJTi5hcHBlbmQoSU5TVFJVQ1RJT05TX0NPTlRBSU5FUik7XG59XG4iLCJpbXBvcnQgcmVuZGVyX3RpbGVzIGZyb20gJy4vaGVscGVycy9yZW5kZXJfdGlsZXMuanMnO1xuaW1wb3J0IGxvZ2ljX2xpc3RlbmVycyBmcm9tICcuL2hlbHBlcnMvbG9naWNfbGlzdGVuZXJzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxhY2Vfc2hpcHMoKSB7XG4gIHJlbmRlcl90aWxlcygpO1xuICBsb2dpY19saXN0ZW5lcnMoKTtcbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVsb29wKCkge1xuICBsZXQgcGxheWVyMSA9IG5ldyBQbGF5ZXIoJ2h1bWFuJyk7XG4gIGxldCBwbGF5ZXIyID0gbmV3IFBsYXllcignYWknKTtcbiAgbGV0IHBsYXllcjFfZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICBsZXQgcGxheWVyMl9nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgUkVTRVQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyMSA9IG5ldyBQbGF5ZXIoJ2h1bWFuJyk7XG4gICAgcGxheWVyMiA9IG5ldyBQbGF5ZXIoJ2FpJyk7XG4gICAgcGxheWVyMV9nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgcGxheWVyMl9nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIH07XG5cbiAgY29uc3QgUkVUVVJOX1NISVBTID0gKHBsYXllcikgPT4ge1xuICAgIGlmIChwbGF5ZXIgPT09IDEpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIxX2dhbWVib2FyZC5zaGlwcztcbiAgICB9XG4gICAgaWYgKHBsYXllciA9PT0gMikge1xuICAgICAgcmV0dXJuIHBsYXllcjJfZ2FtZWJvYXJkLnNoaXBzO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBQTEFDRV9TSElQID0gKGJvYXJkLCBzaGlwLCBwb3NpdGlvbnMpID0+IHtcbiAgICBpZiAoYm9hcmQgPT09IDEpIHtcbiAgICAgIHBsYXllcjFfZ2FtZWJvYXJkLnBsYWNlX3NoaXAoc2hpcCwgcG9zaXRpb25zKTtcbiAgICB9XG4gICAgaWYgKGJvYXJkID09PSAyKSB7XG4gICAgICBwbGF5ZXIyX2dhbWVib2FyZC5wbGFjZV9zaGlwKHNoaXAsIHBvc2l0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IEFUVEFDSyA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgcGxheWVyMS5odW1hbl9hdHRhY2socGxheWVyMl9nYW1lYm9hcmQsIGNvb3JkaW5hdGUpO1xuICAgIHBsYXllcjIuYWlfYXR0YWNrKHBsYXllcjFfZ2FtZWJvYXJkKTtcbiAgfTtcblxuICBjb25zdCBSRVRVUk5fSElUUyA9IChib2FyZCkgPT4ge1xuICAgIGlmIChib2FyZCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHBsYXllcjFfZ2FtZWJvYXJkLmhpdHM7XG4gICAgfVxuICAgIGlmIChib2FyZCA9PT0gMikge1xuICAgICAgcmV0dXJuIHBsYXllcjJfZ2FtZWJvYXJkLmhpdHM7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFJFVFVSTl9NSVNTRVMgPSAoYm9hcmQpID0+IHtcbiAgICBpZiAoYm9hcmQgPT09IDEpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIxX2dhbWVib2FyZC5taXNzZXM7XG4gICAgfVxuICAgIGlmIChib2FyZCA9PT0gMikge1xuICAgICAgcmV0dXJuIHBsYXllcjJfZ2FtZWJvYXJkLm1pc3NlcztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgV0lOTkVSID0gKCkgPT4ge1xuICAgIGNvbnN0IEJPQVJEMSA9IHBsYXllcjFfZ2FtZWJvYXJkLmFsbF9zdW5rKCk7XG4gICAgY29uc3QgQk9BUkQyID0gcGxheWVyMl9nYW1lYm9hcmQuYWxsX3N1bmsoKTtcbiAgICBpZiAoQk9BUkQxICYmIEJPQVJEMikge1xuICAgICAgcmV0dXJuIFwiSVQnUyBBIFRJRSFcIjtcbiAgICB9XG4gICAgaWYgKEJPQVJEMSkge1xuICAgICAgcmV0dXJuICdZT1UgTE9TRSEnO1xuICAgIH1cbiAgICBpZiAoQk9BUkQyKSB7XG4gICAgICByZXR1cm4gJ1lPVSBBUkUgVEhFIFdJTk5FUiEnO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIFJFU0VULFxuICAgIFJFVFVSTl9TSElQUyxcbiAgICBQTEFDRV9TSElQLFxuICAgIEFUVEFDSyxcbiAgICBSRVRVUk5fSElUUyxcbiAgICBSRVRVUk5fTUlTU0VTLFxuICAgIFdJTk5FUixcbiAgfTtcbn1cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIHNoaXBzID0ge1xuICAgIGNhcnJpZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDUpLFxuICAgIH0sXG4gICAgYmF0dGxlc2hpcDoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoNCksXG4gICAgfSxcbiAgICBkZXN0cm95ZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDMpLFxuICAgIH0sXG4gICAgc3ViOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCgzKSxcbiAgICB9LFxuICAgIHBhdHJvbEJvYXQ6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDIpLFxuICAgIH0sXG4gIH07XG4gIGhpdHMgPSBbXTtcbiAgbWlzc2VzID0gW107XG5cbiAgcGxhY2Vfc2hpcChzaGlwLCBpbnB1dF9jb29yZGluYXRlcykge1xuICAgIHRoaXMuc2hpcHNbc2hpcF0ucG9zaXRpb24gPSBpbnB1dF9jb29yZGluYXRlcztcbiAgfVxuICAjbWlzc19yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMubWlzc2VzLCBpbnB1dF9jb29yZGluYXRlXS5zb3J0KCk7XG4gIH1cbiAgI2hpdF9yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuaGl0cywgaW5wdXRfY29vcmRpbmF0ZV0uc29ydCgpO1xuICB9XG4gIHJlY2VpdmVfYXR0YWNrKGlucHV0X2Nvb3JkaW5hdGUpIHtcbiAgICBsZXQgbWlzcyA9IHRydWU7XG4gICAgZm9yIChsZXQgc2hpcCBpbiB0aGlzLnNoaXBzKSB7XG4gICAgICBjb25zdCBXQVNfSElUID0gdGhpcy5zaGlwc1tzaGlwXS5wb3NpdGlvbi5pbmNsdWRlcyhpbnB1dF9jb29yZGluYXRlKTtcbiAgICAgIGlmIChXQVNfSElUKSB7XG4gICAgICAgIHRoaXMuaGl0cyA9IHRoaXMuI2hpdF9yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgICAgICBjb25zdCBISVRfSU5ERVggPSB0aGlzLnNoaXBzW3NoaXBdLnBvc2l0aW9uLmluZGV4T2YoaW5wdXRfY29vcmRpbmF0ZSk7XG4gICAgICAgIHRoaXMuc2hpcHNbc2hpcF0uc2hpcC5oaXQoSElUX0lOREVYKTtcbiAgICAgICAgbWlzcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobWlzcykge1xuICAgICAgdGhpcy5taXNzZXMgPSB0aGlzLiNtaXNzX3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSk7XG4gICAgfVxuICB9XG4gIGFsbF9zdW5rKCkge1xuICAgIGxldCBpc19hbGxfc3VuayA9IHRydWU7XG4gICAgZm9yIChsZXQgc2hpcCBpbiB0aGlzLnNoaXBzKSB7XG4gICAgICBjb25zdCBhbGxfc3Vua19jYWxsID0gdGhpcy5zaGlwc1tzaGlwXS5zaGlwLmlzX3N1bmsoKTtcbiAgICAgIGlmIChhbGxfc3Vua19jYWxsID09PSBmYWxzZSkge1xuICAgICAgICBpc19hbGxfc3VuayA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzX2FsbF9zdW5rO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgfVxuICBtb3ZlcyA9IFtdO1xuICByZW1haW5pbmdfbW92ZXMgPSBbXTtcblxuICAjcmVtYWluaW5nX21vdmVzX3JlZHVjZXIoY29vcmRpbmF0ZSkge1xuICAgIHRoaXMucmVtYWluaW5nX21vdmVzID0gWy4uLnRoaXMucmVtYWluaW5nX21vdmVzLCBjb29yZGluYXRlXTtcbiAgfVxuICAjZmlsbF9yZW1haW5pbmdfbW92ZXMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IExFVFRFUlMgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onXTtcbiAgICBMRVRURVJTLm1hcCgobGV0dGVyKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgdGhpcy4jcmVtYWluaW5nX21vdmVzX3JlZHVjZXIoYCR7bGV0dGVyfSR7aX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSkoKTtcbiAgI2FpX21vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVtYWluaW5nX21vdmVzW1xuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5yZW1haW5pbmdfbW92ZXMubGVuZ3RoKVxuICAgIF07XG4gIH1cbiAgI2ZpbHRlcl9yZW1haW5pbmdfbW92ZXMoY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IFJFTUFJTklOR19NT1ZFU19DT1BZID0gWy4uLnRoaXMucmVtYWluaW5nX21vdmVzXTtcbiAgICBjb25zdCBSRU1BSU5JTkcgPSBSRU1BSU5JTkdfTU9WRVNfQ09QWS5maWx0ZXIoKHJlbWFpbmluZ19tb3ZlKSA9PiB7XG4gICAgICByZXR1cm4gcmVtYWluaW5nX21vdmUgIT09IGNvb3JkaW5hdGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIFJFTUFJTklORztcbiAgfVxuICAjYXR0YWNrX3JlZHVjZXIoaW5wdXRfY29vcmRpbmF0ZSkge1xuICAgIHJldHVybiBbLi4udGhpcy5tb3ZlcywgaW5wdXRfY29vcmRpbmF0ZV07XG4gIH1cbiAgYWlfYXR0YWNrKGJvYXJkKSB7XG4gICAgaWYgKHRoaXMucGxheWVyICE9PSAnYWknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsYXllciBuZWVkcyB0byBiZSBBSScpO1xuICAgIH1cbiAgICBjb25zdCBDT09SRElOQVRFID0gdGhpcy4jYWlfbW92ZSgpO1xuICAgIHRoaXMucmVtYWluaW5nX21vdmVzID0gdGhpcy4jZmlsdGVyX3JlbWFpbmluZ19tb3ZlcyhDT09SRElOQVRFKTtcbiAgICB0aGlzLm1vdmVzID0gdGhpcy4jYXR0YWNrX3JlZHVjZXIoQ09PUkRJTkFURSk7XG4gICAgYm9hcmQucmVjZWl2ZV9hdHRhY2soQ09PUkRJTkFURSk7XG4gICAgcmV0dXJuIENPT1JESU5BVEU7XG4gIH1cbiAgaHVtYW5fYXR0YWNrKGJvYXJkLCBjb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMucGxheWVyICE9PSAnaHVtYW4nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsYXllciBuZWVkcyB0byBiZSBhIGh1bWFuJyk7XG4gICAgfVxuICAgIGNvbnN0IEZJTFRFUkVEX01PVkVTID0gdGhpcy4jZmlsdGVyX3JlbWFpbmluZ19tb3Zlcyhjb29yZGluYXRlKTtcbiAgICB0aGlzLnJlbWFpbmluZ19tb3ZlcyA9IEZJTFRFUkVEX01PVkVTO1xuICAgIHRoaXMubW92ZXMgPSB0aGlzLiNhdHRhY2tfcmVkdWNlcihjb29yZGluYXRlKTtcbiAgICBib2FyZC5yZWNlaXZlX2F0dGFjayhjb29yZGluYXRlKTtcbiAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMuaGl0cyA9IG5ldyBBcnJheShsZW5ndGgpLmZpbGwoZmFsc2UpO1xuICB9XG5cbiAgI2hpdF9yZWR1Y2VyKGhpdHNfYXJyYXksIHBvc2l0aW9uX2hpdCkge1xuICAgIGNvbnN0IEhJVFMgPSBbLi4uaGl0c19hcnJheV07XG4gICAgSElUU1twb3NpdGlvbl9oaXRdID0gdHJ1ZTtcbiAgICByZXR1cm4gSElUUztcbiAgfVxuICBoaXQocG9zaXRpb25faGl0KSB7XG4gICAgdGhpcy5oaXRzID0gdGhpcy4jaGl0X3JlZHVjZXIodGhpcy5oaXRzLCBwb3NpdGlvbl9oaXQpO1xuICB9XG4gIGlzX3N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cy5ldmVyeSgocG9zaXRpb24pID0+IHBvc2l0aW9uID09PSB0cnVlKTtcbiAgfVxufVxuIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgZ2FtZWxvb3AgZnJvbSAnLi9nYW1lL2dhbWVfbG9vcC5qcyc7XG5pbXBvcnQgaG9tZXBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hvbWVwYWdlLmpzJztcblxuY29uc3QgR0FNRSA9IGdhbWVsb29wKCk7XG5ob21lcGFnZSgpO1xuXG5leHBvcnQgeyBHQU1FIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNwYWNlK01vbm8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtaW4td2lkdGg6IDcwZW07XFxufVxcblxcbiNnYW1lX2JvYXJkcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1MCwgMWZyKTtcXG4gIGhlaWdodDogNTBlbTtcXG4gIG1pbi13aWR0aDogNzBlbTtcXG59XFxuXFxuLmdhbWVfYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDMwZW07XFxuICB3aWR0aDogMzBlbTtcXG59XFxuXFxuLmdhbWVfYm9hcmRfdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnBsYXllcl9ib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmU2MTEyO1xcbn1cXG5cXG4uYWlfYm9hcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXFxuLmFpX2JvYXJkX2hvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblxcbiNwbGF5ZXJfYm9hcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMGVtO1xcbiAgbGVmdDogMmVtO1xcbn1cXG5cXG4jYWlfYm9hcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMGVtO1xcbiAgcmlnaHQ6IDJlbTtcXG59XFxuXFxuLnBsYWNlZF9zaGlwX3RpbGUge1xcbiAgYmFja2dyb3VuZDogIzhiN2IxNTliO1xcbn1cXG5cXG4ucGxheWVyX2hpdCB7XFxuICBiYWNrZ3JvdW5kOiAjODYzZDNkYjQ7XFxufVxcblxcbi5haV9oaXQge1xcbiAgYmFja2dyb3VuZDogIzg2M2QzZDtcXG59XFxuXFxuLnBsYXllcl9taXNzIHtcXG4gIGJhY2tncm91bmQ6ICMyMjFiNzBhMTtcXG59XFxuXFxuLmFpX21pc3Mge1xcbiAgYmFja2dyb3VuZDogIzJiMjE5YjtcXG59XFxuXFxuLmF0dGFja2VkX3RpbGUge1xcbiAgYmFja2dyb3VuZDogI2YwMDtcXG59XFxuXFxuLndpbm5lcl9tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDExLjVlbTtcXG4gIGxlZnQ6IDEwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBNb25vJywgbW9ub3NwYWNlO1xcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMTRlbTtcXG4gIGJhY2tncm91bmQ6ICNhYzk3MWI7XFxufVxcblxcbi53aW5uZXJfbWVzc2FnZV9oaWdobGlnaHRlZCB7XFxuICBmb250LWZhbWlseTogJ1NwYWNlIE1vbm8nLCBtb25vc3BhY2U7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiAjYWM5NzFiO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BhY2UrTW9ubyZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gIG1pbi13aWR0aDogNzBlbTtcXG59XFxuXFxuI2dhbWVfYm9hcmRzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLCAxZnIpO1xcbiAgaGVpZ2h0OiA1MGVtO1xcbiAgbWluLXdpZHRoOiA3MGVtO1xcbn1cXG5cXG4uZ2FtZV9ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMzBlbTtcXG4gIHdpZHRoOiAzMGVtO1xcbn1cXG5cXG4uZ2FtZV9ib2FyZF90aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4ucGxheWVyX2JvYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZTYxMTI7XFxufVxcblxcbi5haV9ib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWM5NzFiO1xcbiAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG4uYWlfYm9hcmRfaG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuI3BsYXllcl9ib2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwZW07XFxuICBsZWZ0OiAyZW07XFxufVxcblxcbiNhaV9ib2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwZW07XFxuICByaWdodDogMmVtO1xcbn1cXG5cXG4ucGxhY2VkX3NoaXBfdGlsZSB7XFxuICBiYWNrZ3JvdW5kOiAjOGI3YjE1OWI7XFxufVxcblxcbi5wbGF5ZXJfaGl0IHtcXG4gIGJhY2tncm91bmQ6ICM4NjNkM2RiNDtcXG59XFxuXFxuLmFpX2hpdCB7XFxuICBiYWNrZ3JvdW5kOiAjODYzZDNkO1xcbn1cXG5cXG4ucGxheWVyX21pc3Mge1xcbiAgYmFja2dyb3VuZDogIzIyMWI3MGExO1xcbn1cXG5cXG4uYWlfbWlzcyB7XFxuICBiYWNrZ3JvdW5kOiAjMmIyMTliO1xcbn1cXG5cXG4uYXR0YWNrZWRfdGlsZSB7XFxuICBiYWNrZ3JvdW5kOiAjZjAwO1xcbn1cXG5cXG4ud2lubmVyX21lc3NhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTEuNWVtO1xcbiAgbGVmdDogMTAuNWVtO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LWZhbWlseTogJ1NwYWNlIE1vbm8nLCBtb25vc3BhY2U7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAxNGVtO1xcbiAgYmFja2dyb3VuZDogI2FjOTcxYjtcXG59XFxuXFxuLndpbm5lcl9tZXNzYWdlX2hpZ2hsaWdodGVkIHtcXG4gIGZvbnQtZmFtaWx5OiAnU3BhY2UgTW9ubycsIG1vbm9zcGFjZTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6ICNhYzk3MWI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tb3BhY2l0eS0wMDogMTtcXG4gIC0tb3BhY2l0eS0wNTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDogMC45NjtcXG4gIC0tb3BhY2l0eS0xNTogMC45NDtcXG4gIC0tb3BhY2l0eS0yMDogMC45MjtcXG4gIC0tb3BhY2l0eS0yNTogMC45O1xcbiAgLS1vcGFjaXR5LTMwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTM1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTQwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTQ1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTUwOiAwLjg7XFxuICAtLW9wYWNpdHktNTU6IDAuODI7XFxuICAtLW9wYWNpdHktNjA6IDAuODQ7XFxuICAtLW9wYWNpdHktNjU6IDAuODY7XFxuICAtLW9wYWNpdHktNzA6IDAuODg7XFxuICAtLW9wYWNpdHktNzU6IDAuOTtcXG4gIC0tb3BhY2l0eS04MDogMC45MjtcXG4gIC0tb3BhY2l0eS04NTogMC45NDtcXG4gIC0tb3BhY2l0eS05MDogMC45NjtcXG4gIC0tb3BhY2l0eS05NTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDA6IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMDApO1xcbiAgfVxcblxcbiAgNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTA1KTtcXG4gIH1cXG5cXG4gIDEwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTApO1xcbiAgfVxcblxcbiAgMTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xNSk7XFxuICB9XFxuXFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTIwKTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMjUpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zMCk7XFxuICB9XFxuXFxuICAzNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTM1KTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDApO1xcbiAgfVxcblxcbiAgNDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS00NSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTUwKTtcXG4gIH1cXG5cXG4gIDU1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNTUpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02MCk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTY1KTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzApO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS03NSk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTgwKTtcXG4gIH1cXG5cXG4gIDg1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktODUpO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05MCk7XFxuICB9XFxuXFxuICA5NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTk1KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwMCk7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9hbmltYXRvci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1vcGFjaXR5LTAwOiAxO1xcbiAgLS1vcGFjaXR5LTA1OiAwLjk4O1xcbiAgLS1vcGFjaXR5LTEwOiAwLjk2O1xcbiAgLS1vcGFjaXR5LTE1OiAwLjk0O1xcbiAgLS1vcGFjaXR5LTIwOiAwLjkyO1xcbiAgLS1vcGFjaXR5LTI1OiAwLjk7XFxuICAtLW9wYWNpdHktMzA6IDAuODg7XFxuICAtLW9wYWNpdHktMzU6IDAuODY7XFxuICAtLW9wYWNpdHktNDA6IDAuODQ7XFxuICAtLW9wYWNpdHktNDU6IDAuODI7XFxuICAtLW9wYWNpdHktNTA6IDAuODtcXG4gIC0tb3BhY2l0eS01NTogMC44MjtcXG4gIC0tb3BhY2l0eS02MDogMC44NDtcXG4gIC0tb3BhY2l0eS02NTogMC44NjtcXG4gIC0tb3BhY2l0eS03MDogMC44ODtcXG4gIC0tb3BhY2l0eS03NTogMC45O1xcbiAgLS1vcGFjaXR5LTgwOiAwLjkyO1xcbiAgLS1vcGFjaXR5LTg1OiAwLjk0O1xcbiAgLS1vcGFjaXR5LTkwOiAwLjk2O1xcbiAgLS1vcGFjaXR5LTk1OiAwLjk4O1xcbiAgLS1vcGFjaXR5LTEwMDogMTtcXG59XFxuXFxuQGtleWZyYW1lcyBvcGFjaXR5IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0wMCk7XFxuICB9XFxuXFxuICA1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMDUpO1xcbiAgfVxcblxcbiAgMTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xMCk7XFxuICB9XFxuXFxuICAxNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTE1KTtcXG4gIH1cXG5cXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMjApO1xcbiAgfVxcblxcbiAgMjUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0yNSk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTMwKTtcXG4gIH1cXG5cXG4gIDM1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzUpO1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS00MCk7XFxuICB9XFxuXFxuICA0NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTQ1KTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNTApO1xcbiAgfVxcblxcbiAgNTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS01NSk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTYwKTtcXG4gIH1cXG5cXG4gIDY1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNjUpO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS03MCk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTc1KTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktODApO1xcbiAgfVxcblxcbiAgODUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS04NSk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTkwKTtcXG4gIH1cXG5cXG4gIDk1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktOTUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTAwKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbm1haW4ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuI2JzX2hlYWRpbmcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNDAsIDFmcik7XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuI3N0YXJ0X2J1dHRvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4ud2F0ZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDE1NztcXG59XFxuXFxuLnN0YXJ0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnN0YXJ0X2JhY2tncm91bmRfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWM5NzFiO1xcbn1cXG5cXG4uc3RhcnRfdGV4dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWM5NzFiO1xcbn1cXG4uc3RhcnRfdGV4dF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbm1haW4ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuI2JzX2hlYWRpbmcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNDAsIDFmcik7XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuI3N0YXJ0X2J1dHRvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTBlbTtcXG4gIHdpZHRoOiA3MGVtO1xcbn1cXG5cXG4ud2F0ZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDE1NztcXG59XFxuXFxuLnN0YXJ0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3RhcnRfYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnN0YXJ0X2JhY2tncm91bmRfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWM5NzFiO1xcbn1cXG5cXG4uc3RhcnRfdGV4dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWM5NzFiO1xcbn1cXG4uc3RhcnRfdGV4dF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBzLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dhdGVyLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdG9yLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2hpcF90ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG59XFxuXFxuLnNoaXBfaHVsbF9vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2hpcF9odWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTU1NTU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0MjQyO1xcbn1cXG5cXG4uc2hpcF9saWdodCB7XFxuICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLmxpZ2h0X2dyYXkge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XFxufVxcblxcbi5kYXJrX2dyYXkge1xcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTI5Mjk7XFxufVxcblxcbi5zdWIge1xcbiAgYmFja2dyb3VuZDogIzFjMWMxYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZjBmMGY7XFxufVxcblxcbi5wZXJpc2NvcGVfb2ZmIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwMTAxNTc7XFxufVxcblxcbi5wZXJpc2NvcGVfb24ge1xcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTI5Mjk7XFxufVxcblxcbi5yYWRhcl9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnJhZGFyX29uIHtcXG4gIGJhY2tncm91bmQ6ICM2YzZjNmM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0NjQ2O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3Mvc2hpcHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL2FuaW1hdG9yLmNzcyc7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZkaXNwbGF5PXN3YXAnKTtcXG5cXG4uc2hpcF90ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG59XFxuXFxuLnNoaXBfaHVsbF9vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2hpcF9odWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTU1NTU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0MjQyO1xcbn1cXG5cXG4uc2hpcF9saWdodCB7XFxuICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLmxpZ2h0X2dyYXkge1xcbiAgYmFja2dyb3VuZDogIzZjNmM2YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XFxufVxcblxcbi5kYXJrX2dyYXkge1xcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTI5Mjk7XFxufVxcblxcbi5zdWIge1xcbiAgYmFja2dyb3VuZDogIzFjMWMxYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZjBmMGY7XFxufVxcblxcbi5wZXJpc2NvcGVfb2ZmIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwMTAxNTc7XFxufVxcblxcbi5wZXJpc2NvcGVfb24ge1xcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTI5Mjk7XFxufVxcblxcbi5yYWRhcl9vZmYge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzAxMDE1NztcXG59XFxuXFxuLnJhZGFyX29uIHtcXG4gIGJhY2tncm91bmQ6ICM2YzZjNmM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0NjQ2O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0b3IuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXdhdGVyMTogIzAxMDE1NztcXG4gIC0td2F0ZXIyOiAjMDYzNzQ0O1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzhjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkMGQ2MTtcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyYjE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTcxNzc1O1xcbn1cXG5cXG4uZ3JlZW4xIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMik7XFxuICBvcGFjaXR5OiA2MCU7XFxufVxcblxcbi5ibHVlMSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbn1cXG5cXG4uYmx1ZTIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDk2JTtcXG59XFxuXFxuLmJsdWUzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA5MiU7XFxufVxcblxcbi5ibHVlNCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODglO1xcbn1cXG5cXG4uYmx1ZTUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDg0JTtcXG59XFxuXFxuLmJsdWU2IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblxcbi5ibHVlNyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNzYlO1xcbn1cXG4uYmx1ZTgge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDcyJTtcXG59XFxuXFxuLmJsdWU5IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA2OCU7XFxufVxcblxcbi5ibHVlMTAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDY0JTtcXG59XFxuXFxuLmJsdWUxMCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3Mvd2F0ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL2FuaW1hdG9yLmNzcyc7XFxuXFxuOnJvb3Qge1xcbiAgLS13YXRlcjE6ICMwMTAxNTc7XFxuICAtLXdhdGVyMjogIzA2Mzc0NDtcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2Rhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTM4YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDBkNjE7XFxufVxcblxcbi5zdXJyb3VuZGluZ193YXRlcl9saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMmIxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTc3NTtcXG59XFxuXFxuLmdyZWVuMSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjIpO1xcbiAgb3BhY2l0eTogNjAlO1xcbn1cXG5cXG4uYmx1ZTEge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG59XFxuXFxuLmJsdWUyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA5NiU7XFxufVxcblxcbi5ibHVlMyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogOTIlO1xcbn1cXG5cXG4uYmx1ZTQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDg4JTtcXG59XFxuXFxuLmJsdWU1IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4NCU7XFxufVxcblxcbi5ibHVlNiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG4uYmx1ZTcge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDc2JTtcXG59XFxuLmJsdWU4IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA3MiU7XFxufVxcblxcbi5ibHVlOSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNjglO1xcbn1cXG5cXG4uYmx1ZTEwIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA2NCU7XFxufVxcblxcbi5ibHVlMTAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BhY2UrTW9ubyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1pbi13aWR0aDogNzBlbTtcXG59XFxuXFxuI3BsYWNlX3NoaXBzX21haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNTAsIDFmcik7XFxuICBtaW4td2lkdGg6IDcwZW07XFxuICBoZWlnaHQ6IDUwZW07XFxufVxcblxcbiNwbGFjZV9zaGlwc19jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNWVtO1xcbiAgYm90dG9tOiA0ZW07XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNDBlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbiNpbnN0cnVjdGlvbnNfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxZW07XFxuICBsZWZ0OiAyOWVtO1xcbiAgd2lkdGg6IDEyZW07XFxuICBoZWlnaHQ6IDNlbTtcXG4gIGJhY2tncm91bmQ6ICNhYTlmNjE7XFxuICBib3JkZXItcmFkaXVzOiAwLjEyNWVtO1xcbn1cXG5cXG4jYmtkX3NwYWNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggIzAwMDAwMDtcXG59XFxuXFxuI2luc3RydWN0aW9ucyB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtZmFtaWx5OiAnU3BhY2UgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuLnBsYWNlX3NoaXBfdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWM5NzFiO1xcbn1cXG5cXG4ucGxhY2VkX3RpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3Y2EyOTtcXG4gIGJhY2tncm91bmQ6ICNhYzk3MWI7XFxufVxcblxcbi5wbGFjZV9zaGlwX2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuLmludmFsaWRfc2hpcF9wbGFjZW1lbnQge1xcbiAgYmFja2dyb3VuZDogI2YwMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BhY2UrTW9ubyZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gIG1pbi13aWR0aDogNzBlbTtcXG59XFxuXFxuI3BsYWNlX3NoaXBzX21haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNTAsIDFmcik7XFxuICBtaW4td2lkdGg6IDcwZW07XFxuICBoZWlnaHQ6IDUwZW07XFxufVxcblxcbiNwbGFjZV9zaGlwc19jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNWVtO1xcbiAgYm90dG9tOiA0ZW07XFxuICBoZWlnaHQ6IDQwZW07XFxuICB3aWR0aDogNDBlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbiNpbnN0cnVjdGlvbnNfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxZW07XFxuICBsZWZ0OiAyOWVtO1xcbiAgd2lkdGg6IDEyZW07XFxuICBoZWlnaHQ6IDNlbTtcXG4gIGJhY2tncm91bmQ6ICNhYTlmNjE7XFxuICBib3JkZXItcmFkaXVzOiAwLjEyNWVtO1xcbn1cXG5cXG4jYmtkX3NwYWNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggIzAwMDAwMDtcXG59XFxuXFxuI2luc3RydWN0aW9ucyB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtZmFtaWx5OiAnU3BhY2UgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuLnBsYWNlX3NoaXBfdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWM5NzFiO1xcbn1cXG5cXG4ucGxhY2VkX3RpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3Y2EyOTtcXG4gIGJhY2tncm91bmQ6ICNhYzk3MWI7XFxufVxcblxcbi5wbGFjZV9zaGlwX2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZDogIzg0ZmYxNztcXG59XFxuXFxuLmludmFsaWRfc2hpcF9wbGFjZW1lbnQge1xcbiAgYmFja2dyb3VuZDogI2YwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2luZGV4LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvY3NzL2luZGV4LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMvdWkvZ2FtZV9ib2FyZHMvY3NzL2luZGV4LmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJDT09SRElOQVRFUyIsIkxFVFRFUlMiLCJOVU1CRVJTIiwibWFwIiwibGV0dGVyIiwibnVtYmVyIiwicHVzaCIsImNvbG9yX2hpdHNfbWlzc2VzIiwicGxheWVyIiwiaGl0cyIsIm1pc3NlcyIsImNvb3JkaW5hdGUiLCJUSUxFIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsIkdBTUUiLCJjb2xvcl9wbGF5ZXJfc2hpcHMiLCJTSElQUyIsIlJFVFVSTl9TSElQUyIsInNoaXAiLCJwb3NpdGlvbiIsInJlbmRlcl9nYW1lX292ZXJfbWVzc2FnZSIsImV2ZW50X2xpc3RlbmVycyIsIkFJX1RJTEVTIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIkFJX1RJTEVfQ0xJQ0tfSEFORExFUiIsImV2ZW50IiwiSUQiLCJ0YXJnZXQiLCJpZCIsInNsaWNlIiwiUkVUVVJOX01JU1NFUyIsImluY2x1ZGVzIiwiUkVUVVJOX0hJVFMiLCJBVFRBQ0siLCJXSU5ORVIiLCJ1bmRlZmluZWQiLCJ0aWxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkFJX1RJTEVfRU5URVJfSEFORExFUiIsIkFJX1RJTEVfTEVBVkVfSEFORExFUiIsInN0eWxlIiwiY3Vyc29yIiwiSElUUyIsIk1JU1NFUyIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXJfYmFja2dyb3VuZF90aWxlcyIsIk1BSU4iLCJjcmVhdGVFbGVtZW50IiwiQ0xBU1NFUyIsImkiLCJSQU5ET01fTlVNQkVSIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYXBwZW5kIiwiYm9keSIsIndpbm5lciIsIk1FU1NBR0UiLCJpbm5lclRleHQiLCJNRVNTQUdFX01PVVNFX0VOVEVSX0hBTkRMRVIiLCJNRVNTQUdFX01PVVNFX0xFQVZFX0hBTkRMRVIiLCJNRVNTQUdFX0NMSUNLX0hBTkRMRVIiLCJsb2NhdGlvbiIsInJlbG9hZCIsInJlbmRlcl9nYW1lYm9hcmRfdGlsZXMiLCJQTEFZRVJfQk9BUkQiLCJBSV9CT0FSRCIsIlBMQVlFUl9CT0FSRF9USUxFIiwiQUlfQk9BUkRfVElMRSIsInJlbmRlcl90aWxlcyIsInJlbmRlcl9nYW1lX2JvYXJkcyIsIkFOSU1BVElPTlMiLCJQRVJJU0NPUEVfU1BJTk5FUiIsIkxFRlRfVElMRSIsIlJJR0hUX1RJTEUiLCJ2YWx1ZSIsIlJBREFSX1NQSU5ORVIxIiwiUkFEQVJfU1BJTk5FUjIiLCJXQVRFUl9BTklNQVRJT04iLCJXQVRFUl9USUxFUyIsIlNVQl9BTklNQVRJT04iLCJzZXRJbnRlcnZhbCIsIkJPQVQxIiwiQk9BVDIiLCJXQVRFUiIsIklURVJBVE9SIiwiQkFUVExFU0hJUCIsIkIiLCJBIiwiVDEiLCJUMiIsIkwiLCJFIiwiUyIsIkgiLCJJIiwiUCIsImV6X2xvYWRlciIsIkVaX1RJTEVfQ09MT1JJWkVSIiwiY29sb3JfYmF0dGxlc2hpcF90aWxlcyIsIkNBUlJJRVIiLCJERVNUUk9ZRVIiLCJTVUJNQVJJTkUiLCJjb2xvcl9zaGlwX3RpbGVzIiwiY2FycmllciIsImJsYWNrX291dGxpbmUiLCJodWxsIiwiZGFya19ncmF5IiwibGlnaHRfZ3JheSIsInNoaXBfbGlnaHQiLCJzdXJyb3VuZGluZ193YXRlcl9kYXJrIiwic3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQiLCJDIiwiViIsIk4iLCJTSVgiLCJOSU5FIiwiVSIsIk4yIiwiVjIiLCJZIiwiQUxMIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwibGVmdF9wZXJpc2NvcGUiLCJyaWdodF9wZXJpc2NvcGUiLCJTVEFSVCIsImNvbG9yX3N0YXJ0X3RpbGVzIiwiYWxsIiwidGlsZV9pZCIsImNvbG9yX3dhdGVyX3RpbGVzIiwibWluIiwibWF4IiwidGFyZ2V0X2FycmF5IiwiaW5wdXRfYXJyYXkiLCJpbnB1dF9jbGFzcyIsInBsYWNlX3NoaXBzIiwibGlzdGVuZXJzX2hhbmRsZXJzIiwiU1RBUlRfQlVUVE9OIiwiU1RBUlRfQlVUVE9OX0VOVEVSX0hBTkRMRVIiLCJTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUyIsIlNUQVJUX0JVVFRPTl9URVhUX1RJTEVTIiwiU1RBUlRfQlVUVE9OX0xFQVZFX0hBTkRMRVIiLCJTVEFSVF9CVVRUT05fQ0xJQ0tfSEFORExFUiIsImludGVydmFsIiwiSU5URVJWQUwiLCJjbGVhckludGVydmFsIiwiSEVBRElORyIsImNhcnJpZXJfZXpfbG9hZGVyIiwiT1VUTElORSIsIkhVTEwiLCJEQVJLX0dSQVkiLCJMSUdIVF9HUkFZIiwiU1VSUk9VTkRJTkdfV0FURVJfREFSSyIsImRlc3Ryb3llcl9lel9sb2FkZXIiLCJzIiwidDEiLCJhIiwiciIsInQyIiwiUiIsImhvbWVwYWdlIiwicGxhY2VfYWlfc2hpcHMiLCJsb2dpY19saXN0ZW5lcnMiLCJjdXJyZW50X3NoaXBfaW5kZXgiLCJvcmllbnRhdGlvbiIsIkxFTkdUSCIsIk1BWFMiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJiYXR0bGVzaGlwIiwic3ViIiwicGF0cm9sQm9hdCIsIklOQk9VTkRTX0VWQUxVQVRPUiIsInZhbHVlX3RvX2NvbXBhcmUiLCJjaGFyQ29kZUF0IiwiTUFYIiwiU1BBQ0VfVEFLRU5fRVZBTFVBVE9SIiwiYWxsX3RpbGVzIiwiYXJlX2FsbF90YWtlbiIsIlBMQVlFUjFfU0hJUFMiLCJQT1NJVElPTlMiLCJTVUJTRVFVRU5UX1RJTEVTIiwiTEVUVEVSX0NIQVJfQ09ERSIsIk5VTUJFUiIsIlNUT1BfQVQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJDT0xPUl9USUxFUyIsImNvb3JkaW5hdGVzIiwiTU9VU0VfRU5URVJfSEFORExFUiIsIklOQk9VTkRTIiwiQUxMX0NPT1JESU5BVEVTIiwiQVJFX1NVQlNFUVVFTlRfU1BBQ0VTX0ZSRUUiLCJNT1VTRV9MRUFWRV9IQU5ETEVSIiwiSE9WRVJFRF9USUxFUyIsIk1PVVNFX0NMSUNLX0hBTkRMRVIiLCJDVVJSRU5UX1NISVAiLCJQTEFDRV9TSElQIiwiU1BBQ0VfQkFSX0hBTkRMRVIiLCJLRVkiLCJrZXkiLCJUSUxFUyIsIklORk8iLCJBTExfVElMRVMiLCJUT0dHTEVfT1JJRU5UQVRJT04iLCJPTkVfUkFORE9NIiwiUkFORE9NX0xFVFRFUiIsIkdFVF9NT1ZFIiwiUkFORE9NX0NPT1JESU5BVEUiLCJjcmVhdGVfY29vcmRpbmF0ZXMiLCJVTklRVUVfTU9WRSIsInVuaXF1ZSIsIk1PVkUiLCJmaWxsX2FpX2JvYXJkIiwiU0hJUF9QT1NJVElPTlMiLCJQTEFDRV9TSElQU19DT05UQUlORVIiLCJJTlNUUlVDVElPTlNfQ09OVEFJTkVSIiwiSU5TVFJVQ1RJT05TIiwiU1BBQ0VfS0VZIiwiR2FtZWJvYXJkIiwiUGxheWVyIiwiZ2FtZWxvb3AiLCJwbGF5ZXIxIiwicGxheWVyMiIsInBsYXllcjFfZ2FtZWJvYXJkIiwicGxheWVyMl9nYW1lYm9hcmQiLCJSRVNFVCIsInNoaXBzIiwiYm9hcmQiLCJwb3NpdGlvbnMiLCJwbGFjZV9zaGlwIiwiaHVtYW5fYXR0YWNrIiwiYWlfYXR0YWNrIiwiQk9BUkQxIiwiYWxsX3N1bmsiLCJCT0FSRDIiLCJTaGlwIiwiaW5wdXRfY29vcmRpbmF0ZXMiLCJpbnB1dF9jb29yZGluYXRlIiwibWlzcyIsIldBU19ISVQiLCJISVRfSU5ERVgiLCJpbmRleE9mIiwiaGl0IiwiaXNfYWxsX3N1bmsiLCJhbGxfc3Vua19jYWxsIiwiaXNfc3VuayIsInNvcnQiLCJFcnJvciIsIkNPT1JESU5BVEUiLCJyZW1haW5pbmdfbW92ZXMiLCJtb3ZlcyIsInJlY2VpdmVfYXR0YWNrIiwiRklMVEVSRURfTU9WRVMiLCJsZW5ndGgiLCJSRU1BSU5JTkdfTU9WRVNfQ09QWSIsIlJFTUFJTklORyIsImZpbHRlciIsInJlbWFpbmluZ19tb3ZlIiwiZmlsbCIsInBvc2l0aW9uX2hpdCIsImV2ZXJ5IiwiaGl0c19hcnJheSJdLCJzb3VyY2VSb290IjoiIn0=