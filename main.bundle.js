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

  setInterval(PERISCOPE_SPINNER, 900);
  setInterval(RADAR_SPINNER1, 1100);
  setInterval(RADAR_SPINNER2, 1300);
  setInterval(WATER_ANIMATION, 1000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLHFEQUFRLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBU0csQ0FBVCxDQUFSO0FBQ0FILEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0csQ0FBWCxDQUFSO0FBRUEsTUFBTUMsRUFBRSxHQUFHSCxVQUFVLENBQUNHLEVBQXRCO0FBQ0FKLEVBQUFBLHFEQUFRLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBU0ksRUFBVCxDQUFSO0FBRUEsTUFBTUMsRUFBRSxHQUFHSixVQUFVLENBQUNJLEVBQXRCO0FBQ0FMLEVBQUFBLHFEQUFRLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBU0ssRUFBVCxDQUFSO0FBRUEsTUFBTUMsQ0FBQyxHQUFHTCxVQUFVLENBQUNLLENBQXJCO0FBQ0FOLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV00sQ0FBWCxDQUFSO0FBRUEsTUFBTUMsQ0FBQyxHQUFHTixVQUFVLENBQUNNLENBQXJCO0FBQ0FQLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV08sQ0FBWCxDQUFSO0FBQ0FQLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV08sQ0FBWCxDQUFSO0FBQ0FQLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV08sQ0FBWCxDQUFSO0FBRUEsTUFBTUMsQ0FBQyxHQUFHUCxVQUFVLENBQUNPLENBQXJCO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBQ0FSLEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1EsQ0FBWCxDQUFSO0FBRUEsTUFBTUMsQ0FBQyxHQUFHUixVQUFVLENBQUNRLENBQXJCO0FBQ0FULEVBQUFBLHFEQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV1MsQ0FBWCxDQUFSO0FBRUEsTUFBTUMsQ0FBQyxHQUFHVCxVQUFV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O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9oZWxwZXJzL2Nvb3JkaW5hdGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9oZWxwZXJzL2NvbG9yX2hpdHNfbWlzc2VzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9oZWxwZXJzL2NvbG9yX3BsYXllcl9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvZ2FtZV9ib2FyZHMvaGVscGVycy9ldmVudF9saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL2hlbHBlcnMvcmVuZGVyX2JhY2tncm91bmRfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL2hlbHBlcnMvcmVuZGVyX2dhbWVfb3Zlcl9tZXNzYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9oZWxwZXJzL3JlbmRlcl9nYW1lYm9hcmRfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9nYW1lX2JvYXJkcy9yZW5kZXJfZ2FtZV9ib2FyZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9iYXR0bGVzaGlwX3RpbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2NvbG9yX2JhdHRsZXNoaXBfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvY29sb3Jfc2hpcF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9jb2xvcl9zdGFydF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9jb2xvcl93YXRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9oZWxwZXJzL2xpc3RlbmVyc19oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9yZW5kZXJfdGlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2hlbHBlcnMvc2hpcF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaGVscGVycy9zdGFydF90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2hlbHBlcnMvbG9naWNfbGlzdGVuZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9oZWxwZXJzL3BsYWNlX2FpX3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy91aS9wbGFjZV9zaGlwcy9oZWxwZXJzL3JlbmRlcl90aWxlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvcGxhY2Vfc2hpcHMvcGxhY2Vfc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL2dhbWVfbG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvZ2FtZV9ib2FyZHMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2FuaW1hdG9yLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9zaGlwcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy93YXRlci5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09PUkRJTkFURVMgPSBbXTtcbmNvbnN0IExFVFRFUlMgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onXTtcbmNvbnN0IE5VTUJFUlMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG5MRVRURVJTLm1hcCgobGV0dGVyKSA9PiB7XG4gIE5VTUJFUlMubWFwKChudW1iZXIpID0+IHtcbiAgICBDT09SRElOQVRFUy5wdXNoKGAke2xldHRlcn0ke251bWJlcn1gKTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ09PUkRJTkFURVM7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcl9oaXRzX21pc3NlcyhwbGF5ZXIsIGhpdHMsIG1pc3Nlcykge1xuICBoaXRzLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbGF5ZXJ9XyR7Y29vcmRpbmF0ZX1gKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoYCR7cGxheWVyfV9oaXRgKTtcbiAgfSk7XG5cbiAgbWlzc2VzLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbGF5ZXJ9XyR7Y29vcmRpbmF0ZX1gKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoYCR7cGxheWVyfV9taXNzYCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgR0FNRSB9IGZyb20gJy4uLy4uLy4uLy4uL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3JfcGxheWVyX3NoaXBzKCkge1xuICBjb25zdCBTSElQUyA9IEdBTUUuUkVUVVJOX1NISVBTKDEpO1xuICBmb3IgKGxldCBzaGlwIGluIFNISVBTKSB7XG4gICAgY29uc3QgQ09PUkRJTkFURVMgPSBTSElQU1tzaGlwXS5wb3NpdGlvbjtcbiAgICBDT09SRElOQVRFUy5tYXAoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxheWVyXyR7Y29vcmRpbmF0ZX1gKTtcbiAgICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgncGxhY2VkX3NoaXBfdGlsZScpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBHQU1FIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5kZXguanMnO1xuaW1wb3J0IGNvbG9yX2hpdHNfbWlzc2VzIGZyb20gJy4vY29sb3JfaGl0c19taXNzZXMuanMnO1xuaW1wb3J0IHJlbmRlcl9nYW1lX292ZXJfbWVzc2FnZSBmcm9tICcuL3JlbmRlcl9nYW1lX292ZXJfbWVzc2FnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV2ZW50X2xpc3RlbmVycygpIHtcbiAgY29uc3QgQUlfVElMRVMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FpX2JvYXJkJykpO1xuXG4gIGNvbnN0IEFJX1RJTEVfQ0xJQ0tfSEFORExFUiA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IElEID0gZXZlbnQudGFyZ2V0LmlkLnNsaWNlKDMpO1xuICAgIGlmIChcbiAgICAgICFHQU1FLlJFVFVSTl9NSVNTRVMoMikuaW5jbHVkZXMoSUQpICYmXG4gICAgICAhR0FNRS5SRVRVUk5fSElUUygyKS5pbmNsdWRlcyhJRClcbiAgICApIHtcbiAgICAgIEdBTUUuQVRUQUNLKElEKTtcbiAgICAgIGNvbG9yX2hpdHNfbWlzc2VzKCdwbGF5ZXInLCBHQU1FLlJFVFVSTl9ISVRTKDEpLCBHQU1FLlJFVFVSTl9NSVNTRVMoMSkpO1xuICAgICAgY29sb3JfaGl0c19taXNzZXMoJ2FpJywgR0FNRS5SRVRVUk5fSElUUygyKSwgR0FNRS5SRVRVUk5fTUlTU0VTKDIpKTtcbiAgICAgIGNvbnN0IFdJTk5FUiA9IEdBTUUuV0lOTkVSKCk7XG4gICAgICBpZiAoV0lOTkVSICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgQUlfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICAgICAgdGlsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIEFJX1RJTEVfQ0xJQ0tfSEFORExFUik7XG4gICAgICAgICAgdGlsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgQUlfVElMRV9FTlRFUl9IQU5ETEVSKTtcbiAgICAgICAgICB0aWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBBSV9USUxFX0xFQVZFX0hBTkRMRVIpO1xuICAgICAgICAgIHRpbGUuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7XG4gICAgICAgIH0pO1xuICAgICAgICByZW5kZXJfZ2FtZV9vdmVyX21lc3NhZ2UoV0lOTkVSKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgQUlfVElMRV9FTlRFUl9IQU5ETEVSID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgSUQgPSBldmVudC50YXJnZXQuaWQuc2xpY2UoMyk7XG4gICAgY29uc3QgSElUUyA9IEdBTUUuUkVUVVJOX0hJVFMoMik7XG4gICAgY29uc3QgTUlTU0VTID0gR0FNRS5SRVRVUk5fTUlTU0VTKDIpO1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYWlfJHtJRH1gKTtcbiAgICBpZiAoSElUUy5pbmNsdWRlcyhJRCkgfHwgTUlTU0VTLmluY2x1ZGVzKElEKSkge1xuICAgICAgVElMRS5jbGFzc0xpc3QuYWRkKCdhdHRhY2tlZF90aWxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgnYWlfYm9hcmRfaG92ZXInKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgQUlfVElMRV9MRUFWRV9IQU5ETEVSID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgSUQgPSBldmVudC50YXJnZXQuaWQuc2xpY2UoMyk7XG4gICAgY29uc3QgSElUUyA9IEdBTUUuUkVUVVJOX0hJVFMoMik7XG4gICAgY29uc3QgTUlTU0VTID0gR0FNRS5SRVRVUk5fTUlTU0VTKDIpO1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYWlfJHtJRH1gKTtcbiAgICBpZiAoSElUUy5pbmNsdWRlcyhJRCkgfHwgTUlTU0VTLmluY2x1ZGVzKElEKSkge1xuICAgICAgVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2tlZF90aWxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFRJTEUuY2xhc3NMaXN0LnJlbW92ZSgnYWlfYm9hcmRfaG92ZXInKTtcbiAgICB9XG4gIH07XG5cbiAgQUlfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEFJX1RJTEVfQ0xJQ0tfSEFORExFUik7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgQUlfVElMRV9FTlRFUl9IQU5ETEVSKTtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBBSV9USUxFX0xFQVZFX0hBTkRMRVIpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl9iYWNrZ3JvdW5kX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBDTEFTU0VTID0gW1xuICAgICdibHVlMScsXG4gICAgJ2JsdWUyJyxcbiAgICAnYmx1ZTMnLFxuICAgICdibHVlNCcsXG4gICAgJ2JsdWU1JyxcbiAgICAnYmx1ZTYnLFxuICAgICdibHVlNycsXG4gICAgJ2JsdWU4JyxcbiAgICAnYmx1ZTknLFxuICAgICdibHVlMTAnLFxuICAgICdncmVlbjEnLFxuICBdO1xuICBNQUlOLmlkID0gJ2dhbWVfYm9hcmRzJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM1MDA7IGkrKykge1xuICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkc19iYWNrZ3JvdW5kJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKENMQVNTRVNbUkFORE9NX05VTUJFUl0pO1xuICAgIE1BSU4uYXBwZW5kKFRJTEUpO1xuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoTUFJTik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJfZ2FtZV9vdmVyX21lc3NhZ2Uod2lubmVyKSB7XG4gIGNvbnN0IE1BSU4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZV9ib2FyZHMnKTtcbiAgY29uc3QgTUVTU0FHRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIE1FU1NBR0UuY2xhc3NMaXN0LmFkZCgnd2lubmVyX21lc3NhZ2UnKTtcbiAgTUVTU0FHRS5pbm5lclRleHQgPSB3aW5uZXI7XG4gIE1BSU4uYXBwZW5kKE1FU1NBR0UpO1xuXG4gIGNvbnN0IE1FU1NBR0VfTU9VU0VfRU5URVJfSEFORExFUiA9ICgpID0+IHtcbiAgICBNRVNTQUdFLmlubmVyVGV4dCA9ICdORVcgR0FNRSc7XG4gICAgTUVTU0FHRS5jbGFzc0xpc3QuYWRkKCd3aW5uZXJfbWVzc2FnZV9oaWdobGlnaHRlZCcpO1xuICB9O1xuXG4gIGNvbnN0IE1FU1NBR0VfTU9VU0VfTEVBVkVfSEFORExFUiA9ICgpID0+IHtcbiAgICBNRVNTQUdFLmlubmVyVGV4dCA9IHdpbm5lcjtcbiAgICBNRVNTQUdFLmNsYXNzTGlzdC5yZW1vdmUoJ3dpbm5lcl9tZXNzYWdlX2hpZ2hsaWdodGVkJyk7XG4gIH07XG5cbiAgY29uc3QgTUVTU0FHRV9DTElDS19IQU5ETEVSID0gKCkgPT4ge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9O1xuXG4gIE1FU1NBR0UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIE1FU1NBR0VfTU9VU0VfRU5URVJfSEFORExFUik7XG4gIE1FU1NBR0UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIE1FU1NBR0VfTU9VU0VfTEVBVkVfSEFORExFUik7XG4gIE1FU1NBR0UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBNRVNTQUdFX0NMSUNLX0hBTkRMRVIpO1xufVxuIiwiaW1wb3J0IENPT1JESU5BVEVTIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvY29vcmRpbmF0ZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJfZ2FtZWJvYXJkX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVfYm9hcmRzJyk7XG4gIGNvbnN0IFBMQVlFUl9CT0FSRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBBSV9CT0FSRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIFBMQVlFUl9CT0FSRC5jbGFzc0xpc3QuYWRkKCdnYW1lX2JvYXJkJyk7XG4gIEFJX0JPQVJELmNsYXNzTGlzdC5hZGQoJ2dhbWVfYm9hcmQnKTtcbiAgUExBWUVSX0JPQVJELmlkID0gJ3BsYXllcl9ib2FyZCc7XG4gIEFJX0JPQVJELmlkID0gJ2FpX2JvYXJkJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIGNvbnN0IFBMQVlFUl9CT0FSRF9USUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgQUlfQk9BUkRfVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgUExBWUVSX0JPQVJEX1RJTEUuY2xhc3NMaXN0LmFkZCgnZ2FtZV9ib2FyZF90aWxlJyk7XG4gICAgUExBWUVSX0JPQVJEX1RJTEUuY2xhc3NMaXN0LmFkZCgncGxheWVyX2JvYXJkJyk7XG4gICAgUExBWUVSX0JPQVJEX1RJTEUuaWQgPSBgcGxheWVyXyR7Q09PUkRJTkFURVNbaV19YDtcbiAgICBBSV9CT0FSRF9USUxFLmNsYXNzTGlzdC5hZGQoJ2dhbWVfYm9hcmRfdGlsZScpO1xuICAgIEFJX0JPQVJEX1RJTEUuY2xhc3NMaXN0LmFkZCgnYWlfYm9hcmQnKTtcbiAgICBBSV9CT0FSRF9USUxFLmlkID0gYGFpXyR7Q09PUkRJTkFURVNbaV19YDtcblxuICAgIFBMQVlFUl9CT0FSRC5hcHBlbmQoUExBWUVSX0JPQVJEX1RJTEUpO1xuICAgIEFJX0JPQVJELmFwcGVuZChBSV9CT0FSRF9USUxFKTtcbiAgfVxuXG4gIE1BSU4uYXBwZW5kKFBMQVlFUl9CT0FSRCk7XG4gIE1BSU4uYXBwZW5kKEFJX0JPQVJEKTtcbn1cbiIsImltcG9ydCByZW5kZXJfYmFja2dyb3VuZF90aWxlcyBmcm9tICcuL3JlbmRlcl9iYWNrZ3JvdW5kX3RpbGVzLmpzJztcbmltcG9ydCByZW5kZXJfZ2FtZWJvYXJkX3RpbGVzIGZyb20gJy4vcmVuZGVyX2dhbWVib2FyZF90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl90aWxlcygpIHtcbiAgcmVuZGVyX2JhY2tncm91bmRfdGlsZXMoKTtcbiAgcmVuZGVyX2dhbWVib2FyZF90aWxlcygpO1xufVxuIiwiaW1wb3J0IHJlbmRlcl90aWxlcyBmcm9tICcuL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9wbGF5ZXJfc2hpcHMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX3BsYXllcl9zaGlwcy5qcyc7XG5pbXBvcnQgZXZlbnRfbGlzdGVuZXJzIGZyb20gJy4vaGVscGVycy9ldmVudF9saXN0ZW5lcnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJfZ2FtZV9ib2FyZHMoKSB7XG4gIHJlbmRlcl90aWxlcygpO1xuICBjb2xvcl9wbGF5ZXJfc2hpcHMoKTtcbiAgZXZlbnRfbGlzdGVuZXJzKCk7XG59XG4iLCJjb25zdCBBTklNQVRJT05TID0gKCgpID0+IHtcbiAgY29uc3QgUEVSSVNDT1BFX1NQSU5ORVIgPSAoKSA9PiB7XG4gICAgY29uc3QgTEVGVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoNzU5KTtcbiAgICBjb25zdCBSSUdIVF9USUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoNzYxKTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29mZicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29uJyk7XG4gICAgTEVGVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIGlmIChMRUZUX1RJTEUuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdvbicpKSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdwZXJpc2NvcGVfb24nKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdwZXJpc2NvcGVfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncGVyaXNjb3BlX29mZicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncGVyaXNjb3BlX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3BlcmlzY29wZV9vZmYnKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdwZXJpc2NvcGVfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3BlcmlzY29wZV9vbicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBSQURBUl9TUElOTkVSMSA9ICgpID0+IHtcbiAgICBjb25zdCBMRUZUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3MTQpO1xuICAgIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg3MTYpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCd3YXRlcicpO1xuICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBpZiAoTEVGVF9USUxFLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnb24nKSkge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29mZicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgICAgUklHSFRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb24nKTtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QucmVtb3ZlKCdyYWRhcl9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb2ZmJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFJBREFSX1NQSU5ORVIyID0gKCkgPT4ge1xuICAgIGNvbnN0IExFRlRfVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDEwOTcpO1xuICAgIGNvbnN0IFJJR0hUX1RJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxMDk5KTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgUklHSFRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgnd2F0ZXInKTtcbiAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgaWYgKExFRlRfVElMRS5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ29uJykpIHtcbiAgICAgIExFRlRfVElMRS5jbGFzc0xpc3QuYWRkKCdyYWRhcl9vZmYnKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LmFkZCgncmFkYXJfb2ZmJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb24nKTtcbiAgICAgIFJJR0hUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTEVGVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29uJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5hZGQoJ3JhZGFyX29uJyk7XG4gICAgICBMRUZUX1RJTEUuY2xhc3NMaXN0LnJlbW92ZSgncmFkYXJfb2ZmJyk7XG4gICAgICBSSUdIVF9USUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3JhZGFyX29mZicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBXQVRFUl9BTklNQVRJT04gPSAoKSA9PiB7XG4gICAgY29uc3QgV0FURVJfVElMRVMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dhdGVyJykpO1xuICAgIGNvbnN0IENMQVNTRVMgPSBbXG4gICAgICAnYmx1ZTEnLFxuICAgICAgJ2JsdWUyJyxcbiAgICAgICdibHVlMycsXG4gICAgICAnYmx1ZTQnLFxuICAgICAgJ2JsdWU1JyxcbiAgICAgICdibHVlNicsXG4gICAgICAnYmx1ZTcnLFxuICAgICAgJ2JsdWU4JyxcbiAgICAgICdibHVlOScsXG4gICAgICAnYmx1ZTEwJyxcbiAgICAgICdncmVlbjEnLFxuICAgIF07XG4gICAgV0FURVJfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICBjb25zdCBSQU5ET01fTlVNQkVSID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QgPSBgaG9tZXBlYWdlX3RpbGUgd2F0ZXIgJHtDTEFTU0VTW1JBTkRPTV9OVU1CRVJdfWA7XG4gICAgfSk7XG4gIH07XG5cbiAgc2V0SW50ZXJ2YWwoUEVSSVNDT1BFX1NQSU5ORVIsIDkwMCk7XG4gIHNldEludGVydmFsKFJBREFSX1NQSU5ORVIxLCAxMTAwKTtcbiAgc2V0SW50ZXJ2YWwoUkFEQVJfU1BJTk5FUjIsIDEzMDApO1xuICBzZXRJbnRlcnZhbChXQVRFUl9BTklNQVRJT04sIDEwMDApO1xufSkoKTtcblxuZXhwb3J0IHsgQU5JTUFUSU9OUyB9O1xuIiwiaW1wb3J0IHsgSVRFUkFUT1IgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jb25zdCBCQVRUTEVTSElQID0ge1xuICBCOiBbMTUwLCAxNTQsIDIyMCwgMjI0LCAzNjAsIDM2NCwgNDMwLCA0MzYsIDQzNF0sXG4gIEE6IFsxNTYsIDE1OSwgMjI2LCAyMjksIDM2NiwgMzY5LCA0MzYsIDQzOSwgNTA2LCA1MDldLFxuICBUMTogWzE2MiwgMTYzLCAyMzIsIDIzMywgMzAyLCAzMDMsIDM3MiwgMzczLCA0NDIsIDQ0MywgNTEyLCA1MTNdLFxuICBUMjogWzE2NywgMTY4LCAyMzcsIDIzOCwgMzA3LCAzMDgsIDM3NywgMzc4LCA0NDcsIDQ0OCwgNTE3LCA1MThdLFxuICBMOiBbMTAxLCAxNzEsIDI0MSwgMzExLCAzODEsIDQ1MV0sXG4gIEU6IFsxNzYsIDI0NiwgMzg2LCA0NTZdLFxuICBTOiBbMTgxLCAyNTEsIDM5NCwgNDY0XSxcbiAgSDogWzExNiwgMTE5LCAxODYsIDE4OSwgMjU2LCAyNTksIDM5NiwgMzk5LCA0NjYsIDQ2OSwgNTM2LCA1MzldLFxuICBJOiBbMTkyLCAxOTMsIDI2MiwgMjYzLCAzMzIsIDMzMywgNDAyLCA0MDMsIDQ3MiwgNDczXSxcbiAgUDogWzE5NiwgMTk5LCAyNjYsIDI2OSwgNDA2LCA0NzYsIDU0Nl0sXG59O1xuXG4oZnVuY3Rpb24gZXpfbG9hZGVyKCkge1xuICBjb25zdCBCID0gQkFUVExFU0hJUC5CO1xuICBJVEVSQVRPUig4MCwgODQsIEIpO1xuICBJVEVSQVRPUigyOTAsIDI5NCwgQik7XG4gIElURVJBVE9SKDUwMCwgNTA0LCBCKTtcblxuICBjb25zdCBBID0gQkFUVExFU0hJUC5BO1xuICBJVEVSQVRPUig4NiwgODksIEEpO1xuICBJVEVSQVRPUigyOTYsIDI5OSwgQSk7XG5cbiAgY29uc3QgVDEgPSBCQVRUTEVTSElQLlQxO1xuICBJVEVSQVRPUig5MSwgOTQsIFQxKTtcblxuICBjb25zdCBUMiA9IEJBVFRMRVNISVAuVDI7XG4gIElURVJBVE9SKDk2LCA5OSwgVDIpO1xuXG4gIGNvbnN0IEwgPSBCQVRUTEVTSElQLkw7XG4gIElURVJBVE9SKDUyMSwgNTI0LCBMKTtcblxuICBjb25zdCBFID0gQkFUVExFU0hJUC5FO1xuICBJVEVSQVRPUigxMDYsIDEwOSwgRSk7XG4gIElURVJBVE9SKDMxNiwgMzE4LCBFKTtcbiAgSVRFUkFUT1IoNTI2LCA1MjksIEUpO1xuXG4gIGNvbnN0IFMgPSBCQVRUTEVTSElQLlM7XG4gIElURVJBVE9SKDExMSwgMTE0LCBTKTtcbiAgSVRFUkFUT1IoMzIxLCAzMjQsIFMpO1xuICBJVEVSQVRPUig1MzEsIDUzNCwgUyk7XG5cbiAgY29uc3QgSCA9IEJBVFRMRVNISVAuSDtcbiAgSVRFUkFUT1IoMzI2LCAzMjksIEgpO1xuXG4gIGNvbnN0IEkgPSBCQVRUTEVTSElQLkk7XG4gIElURVJBVE9SKDEyMSwgMTI0LCBJKTtcbiAgSVRFUkFUT1IoNTQxLCA1NDQsIEkpO1xuXG4gIGNvbnN0IFAgPSBCQVRUTEVTSElQLlA7XG4gIElURVJBVE9SKDEyNiwgMTI5LCBQKTtcbiAgSVRFUkFUT1IoMzM2LCAzMzksIFApO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQkFUVExFU0hJUDtcbiIsImltcG9ydCB7IEVaX1RJTEVfQ09MT1JJWkVSIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCBCQVRUTEVTSElQIGZyb20gJy4vYmF0dGxlc2hpcF90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX2JhdHRsZXNoaXBfdGlsZXMoKSB7XG4gIGZvciAobGV0IGxldHRlciBpbiBCQVRUTEVTSElQKSB7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQkFUVExFU0hJUFtsZXR0ZXJdLCAndGl0bGUnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ0FSUklFUiwgREVTVFJPWUVSLCBTVUJNQVJJTkUgfSBmcm9tICcuL3NoaXBfdGlsZXMuanMnO1xuaW1wb3J0IHsgRVpfVElMRV9DT0xPUklaRVIgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcl9zaGlwX3RpbGVzKCkge1xuICAoZnVuY3Rpb24gY2FycmllcigpIHtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLmJsYWNrX291dGxpbmUsICdzaGlwX2h1bGxfb3V0bGluZScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuaHVsbCwgJ3NoaXBfaHVsbCcpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuZGFya19ncmF5LCAnZGFya19ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoQ0FSUklFUi5saWdodF9ncmF5LCAnbGlnaHRfZ3JheScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKENBUlJJRVIuc2hpcF9saWdodCwgJ3NoaXBfbGlnaHQnKTtcbiAgICBFWl9USUxFX0NPTE9SSVpFUihDQVJSSUVSLnN1cnJvdW5kaW5nX3dhdGVyX2RhcmssICdzdXJyb3VuZGluZ193YXRlcl9kYXJrJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoXG4gICAgICBDQVJSSUVSLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0LFxuICAgICAgJ3N1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0J1xuICAgICk7XG5cbiAgICBjb25zdCBDID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTc5NSk7XG4gICAgY29uc3QgViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE3OTYpO1xuICAgIGNvbnN0IE4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNzk3KTtcbiAgICBjb25zdCBTSVggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNzk5KTtcbiAgICBjb25zdCBOSU5FID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTgwMCk7XG4gICAgY29uc3QgVSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNDkpO1xuICAgIGNvbnN0IFMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgyMzUwKTtcbiAgICBjb25zdCBOMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTIpO1xuICAgIGNvbnN0IEEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgyMzUzKTtcbiAgICBjb25zdCBWMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDIzNTQpO1xuICAgIGNvbnN0IFkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgyMzU1KTtcbiAgICBjb25zdCBBTEwgPSBbQywgViwgTiwgU0lYLCBOSU5FLCBVLCBTLCBOMiwgQSwgVjIsIFldO1xuICAgIEFMTC5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc2hpcF90ZXh0Jyk7XG4gICAgfSk7XG4gICAgQy5pbm5lclRleHQgPSAnQyc7XG4gICAgVi5pbm5lclRleHQgPSAnVic7XG4gICAgTi5pbm5lclRleHQgPSAnTic7XG4gICAgU0lYLmlubmVyVGV4dCA9ICc2JztcbiAgICBOSU5FLmlubmVyVGV4dCA9ICc5JztcbiAgICBVLmlubmVyVGV4dCA9ICdVJztcbiAgICBTLmlubmVyVGV4dCA9ICdTJztcbiAgICBOMi5pbm5lclRleHQgPSAnTic7XG4gICAgQS5pbm5lclRleHQgPSAnQSc7XG4gICAgVjIuaW5uZXJUZXh0ID0gJ1YnO1xuICAgIFkuaW5uZXJUZXh0ID0gJ1knO1xuICB9KSgpO1xuXG4gIChmdW5jdGlvbiBkZXN0cm95ZXIoKSB7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLmJsYWNrX291dGxpbmUsICdzaGlwX2h1bGxfb3V0bGluZScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5odWxsLCAnc2hpcF9odWxsJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLmxpZ2h0X2dyYXksICdsaWdodF9ncmF5Jyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoREVTVFJPWUVSLmRhcmtfZ3JheSwgJ2RhcmtfZ3JheScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKERFU1RST1lFUi5zaGlwX2xpZ2h0LCAnc2hpcF9saWdodCcpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFxuICAgICAgREVTVFJPWUVSLnN1cnJvdW5kaW5nX3dhdGVyX2RhcmssXG4gICAgICAnc3Vycm91bmRpbmdfd2F0ZXJfZGFyaydcbiAgICApO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFxuICAgICAgREVTVFJPWUVSLnN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0LFxuICAgICAgJ3N1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0J1xuICAgICk7XG5cbiAgICBjb25zdCBVID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1MCk7XG4gICAgY29uc3QgUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTEpO1xuICAgIGNvbnN0IE4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTUzKTtcbiAgICBjb25zdCBBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoMTU1NCk7XG4gICAgY29uc3QgViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDE1NTUpO1xuICAgIGNvbnN0IFkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgxNTU2KTtcbiAgICBjb25zdCBBTEwgPSBbVSwgUywgTiwgQSwgViwgWV07XG4gICAgQUxMLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwX3RleHQnKTtcbiAgICB9KTtcbiAgICBVLmlubmVyVGV4dCA9ICdVJztcbiAgICBTLmlubmVyVGV4dCA9ICdTJztcbiAgICBOLmlubmVyVGV4dCA9ICdOJztcbiAgICBBLmlubmVyVGV4dCA9ICdBJztcbiAgICBWLmlubmVyVGV4dCA9ICdWJztcbiAgICBZLmlubmVyVGV4dCA9ICdZJztcbiAgfSkoKTtcblxuICAoZnVuY3Rpb24gc3VibWFyaW5lKCkge1xuICAgIC8vIEVaX1RJTEVfQ09MT1JJWkVSKFNVQk1BUklORS5odWxsLCAnc3ViJyk7XG4gICAgRVpfVElMRV9DT0xPUklaRVIoU1VCTUFSSU5FLmRhcmtfZ3JheSwgJ2RhcmtfZ3JheScpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFNVQk1BUklORS5sZWZ0X3BlcmlzY29wZSwgJ3BlcmlzY29wZV9vbicpO1xuICAgIEVaX1RJTEVfQ09MT1JJWkVSKFNVQk1BUklORS5yaWdodF9wZXJpc2NvcGUsICdwZXJpc2NvcGVfb2ZmJyk7XG4gIH0pKCk7XG59XG4iLCJpbXBvcnQgU1RBUlQgZnJvbSAnLi9zdGFydF90aWxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yX3N0YXJ0X3RpbGVzKCkge1xuICBjb25zdCBBTEwgPSBTVEFSVC5hbGw7XG4gIEFMTC5tYXAoKHRpbGVfaWQpID0+IHtcbiAgICBjb25zdCBUSUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN0YXJ0XyR7dGlsZV9pZH1gKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X2JhY2tncm91bmQnKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0X3RleHQnKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcl93YXRlcl90aWxlcygpIHtcbiAgY29uc3QgQ0xBU1NFUyA9IFtcbiAgICAnYmx1ZTEnLFxuICAgICdibHVlMicsXG4gICAgJ2JsdWUzJyxcbiAgICAnYmx1ZTQnLFxuICAgICdibHVlNScsXG4gICAgJ2JsdWU2JyxcbiAgICAnYmx1ZTcnLFxuICAgICdibHVlOCcsXG4gICAgJ2JsdWU5JyxcbiAgICAnYmx1ZTEwJyxcbiAgICAnZ3JlZW4xJyxcbiAgXTtcbiAgY29uc3QgV0FURVJfVElMRVMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dhdGVyJykpO1xuICBXQVRFUl9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICBjb25zdCBSQU5ET01fTlVNQkVSID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICAgIHRpbGUuY2xhc3NMaXN0LmFkZChDTEFTU0VTW1JBTkRPTV9OVU1CRVJdKTtcbiAgfSk7XG59XG4iLCJjb25zdCBJVEVSQVRPUiA9IChtaW4sIG1heCwgdGFyZ2V0X2FycmF5KSA9PiB7XG4gIGZvciAobGV0IGkgPSBtaW47IGkgPCBtYXggKyAxOyBpKyspIHtcbiAgICB0YXJnZXRfYXJyYXkucHVzaChpKTtcbiAgfVxufTtcblxuY29uc3QgRVpfVElMRV9DT0xPUklaRVIgPSAoaW5wdXRfYXJyYXksIGlucHV0X2NsYXNzKSA9PiB7XG4gIGlucHV0X2FycmF5Lm1hcCgodGlsZV9pZCkgPT4ge1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aWxlX2lkKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdGVyJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgVElMRS5jbGFzc0xpc3QuYWRkKGlucHV0X2NsYXNzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBJVEVSQVRPUiwgRVpfVElMRV9DT0xPUklaRVIgfTtcbiIsImltcG9ydCB7IEFOSU1BVElPTlMgfSBmcm9tICcuL2FuaW1hdGlvbnMuanMnO1xuaW1wb3J0IHBsYWNlX3NoaXBzIGZyb20gJy4uLy4uL3BsYWNlX3NoaXBzL3BsYWNlX3NoaXBzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdGVuZXJzX2hhbmRsZXJzKCkge1xuICBjb25zdCBTVEFSVF9CVVRUT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRfYnV0dG9uJyk7XG5cbiAgY29uc3QgU1RBUlRfQlVUVE9OX0VOVEVSX0hBTkRMRVIgPSAoKSA9PiB7XG4gICAgY29uc3QgU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkRfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRfYmFja2dyb3VuZCcpXG4gICAgKTtcbiAgICBTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkJyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X2JhY2tncm91bmQnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IFNUQVJUX0JVVFRPTl9URVhUX1RJTEVTID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0X3RleHQnKVxuICAgICk7XG4gICAgU1RBUlRfQlVUVE9OX1RFWFRfVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0X3RleHRfaG92ZXJlZCcpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydF90ZXh0Jyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgU1RBUlRfQlVUVE9OX0xFQVZFX0hBTkRMRVIgPSAoKSA9PiB7XG4gICAgY29uc3QgU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkRfVElMRVMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnRfYmFja2dyb3VuZF9ob3ZlcmVkJylcbiAgICApO1xuICAgIFNUQVJUX0JVVFRPTl9CQUNLR1JPVU5EX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdGFydF9iYWNrZ3JvdW5kJyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0X2JhY2tncm91bmRfaG92ZXJlZCcpO1xuICAgIH0pO1xuICAgIGNvbnN0IFNUQVJUX0JVVFRPTl9URVhUX1RJTEVTID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0X3RleHRfaG92ZXJlZCcpXG4gICAgKTtcbiAgICBTVEFSVF9CVVRUT05fVEVYVF9USUxFUy5tYXAoKHRpbGUpID0+IHtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3RhcnRfdGV4dCcpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydF90ZXh0X2hvdmVyZWQnKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgU1RBUlRfQlVUVE9OX0NMSUNLX0hBTkRMRVIgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaW50ZXJ2YWwgaW4gQU5JTUFUSU9OUykge1xuICAgICAgY29uc3QgSU5URVJWQUwgPSBBTklNQVRJT05TW2ludGVydmFsXTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoSU5URVJWQUwpO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFuZGluZ19wYWdlJykucmVtb3ZlKCk7XG4gICAgcGxhY2Vfc2hpcHMoKTtcbiAgfTtcblxuICBTVEFSVF9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFNUQVJUX0JVVFRPTl9FTlRFUl9IQU5ETEVSKTtcbiAgU1RBUlRfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTVEFSVF9CVVRUT05fTEVBVkVfSEFORExFUik7XG4gIFNUQVJUX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFNUQVJUX0JVVFRPTl9DTElDS19IQU5ETEVSKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcl90aWxlcygpIHtcbiAgY29uc3QgTUFJTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3QgSEVBRElORyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBTVEFSVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBNQUlOLmlkID0gJ2xhbmRpbmdfcGFnZSc7XG4gIEhFQURJTkcuaWQgPSAnYnNfaGVhZGluZyc7XG4gIFNUQVJULmlkID0gJ3N0YXJ0X2J1dHRvbic7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjgwMDsgaSsrKSB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuaWQgPSBpO1xuICAgIFRJTEUuY2xhc3NMaXN0ID0gJ2hvbWVwZWFnZV90aWxlIHdhdGVyJztcbiAgICBIRUFESU5HLmFwcGVuZChUSUxFKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDcwMDsgaSsrKSB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuaWQgPSBgc3RhcnRfJHtpfWA7XG4gICAgVElMRS5jbGFzc0xpc3QgPSAndGlsZSBzdGFydCBzdGFydF9iYWNrZ3JvdW5kJztcbiAgICBTVEFSVC5hcHBlbmQoVElMRSk7XG4gIH1cbiAgTUFJTi5hcHBlbmQoSEVBRElORyk7XG4gIE1BSU4uYXBwZW5kKFNUQVJUKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoTUFJTik7XG59XG4iLCJpbXBvcnQgeyBJVEVSQVRPUiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmNvbnN0IENBUlJJRVIgPSB7XG4gIGJsYWNrX291dGxpbmU6IFtcbiAgICAxNDQ2LCAxNDUwLCAxNTE2LCAxNTIwLCAxNTg2LCAxNTkwLCAxNzIzLCAxNzMzLCAxODAzLCAxODU5LCAxODczLCAxODc3LFxuICAgIDE5MjgsIDE5NDMsIDE5NDYsIDE5NDgsIDE5NTUsIDE5NTYsIDE5ODIsIDE5ODMsIDE5ODcsIDE5ODgsIDE5OTIsIDE5OTMsXG4gICAgMTk5OCwgMjAxMywgMjAyNiwgMjA1MiwgMjA1NCwgMjA1NSwgMjA1NywgMjA1OSwgMjA2MCwgMjA2MiwgMjA2NCwgMjA2NSxcbiAgICAyMDY4LCAyMDgzLCAyMDg1LCAyMDg5LCAyMDkxLCAyMDk0LCAyMDk1LCAyMTIzLCAyMTI1LCAyMTI4LCAyMTMwLCAyMTMzLFxuICAgIDIxMzUsIDIxMzgsIDIxNTMsIDIxNTUsIDIxNTksIDIxNjEsIDIxNjUsIDIyNjAsIDIyNjEsIDIyNjIsIDIzMDksIDIzMzIsXG4gICAgMjMzMywgMjMzNCwgMjM3OSwgMjQwNCwgMjQ0OCwgMjQ3NSwgMjUxNywgMjU0NiwgMjU4NiwgMjYxNywgMjY1NiwgMjY4NyxcbiAgICAyNzI2LFxuICBdLFxuICBodWxsOiBbXG4gICAgMTUxOSwgMTkzOSwgMTk0MCwgMjA3OSwgMjA4MCwgMjY4OCwgMjY4OSwgMjY5MiwgMjY5MywgMjY5NiwgMjY5NywgMjcwMCxcbiAgICAyNzAxLCAyNzA0LCAyNzA1LCAyNzA4LCAyNzA5LCAyNzEyLCAyNzEzLCAyNzE2LCAyNzE3LCAyNzIwLCAyNzIxLCAyNzI0LFxuICAgIDI3MjUsXG4gIF0sXG4gIGRhcmtfZ3JheTogW1xuICAgIDExNjgsIDEyMzgsIDEzMDgsIDE1MTcsIDE1MTgsIDE5MjksIDE5MzAsIDE5NDEsIDE5NDIsIDE5NDcsIDIwMjUsIDIwNTMsXG4gICAgMjA1OCwgMjA2MywgMjA2OSwgMjA3MCwgMjA4MSwgMjA4MiwgMjEyNCwgMjEyOSwgMjEzNCwgMjA5MiwgMjA5MyxcbiAgXSxcbiAgbGlnaHRfZ3JheTogWzEwOTcsIDEwOTldLFxuICBzaGlwX2xpZ2h0OiBbMTA5OF0sXG4gIHN1cnJvdW5kaW5nX3dhdGVyX2Rhcms6IFtcbiAgICAyNTQ1LCAyNjE2LCAyNjg2LCAyNjkwLCAyNjkxLCAyNjk0LCAyNjk1LCAyNjk4LCAyNjk5LCAyNzAyLCAyNzAzLCAyNzA2LFxuICAgIDI3MDcsIDI3MTAsIDI3MTEsIDI3MTQsIDI3MTUsIDI3MTgsIDI3MTksIDI3MjIsIDI3MjMsIDI1ODcsIDI2NTcsIDI3MjcsXG4gICAgMjQ0OSwgMjUxOCwgMjUxOSwgMjU4OCwgMjY1OCxcbiAgXSxcbiAgc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQ6IFtcbiAgICAyNTg5LCAyNjE1LCAyNjU5LCAyNjg0LCAyNjg1LCAyNzI4LCAyNzI5LCAyNzUzLCAyNzU0LCAyNzU1LCAyNzk4LCAyNzk5LFxuICBdLFxufTtcblxuY29uc3QgREVTVFJPWUVSID0ge1xuICBibGFja19vdXRsaW5lOiBbXG4gICAgMTE5NCwgMTE5OCwgMTIxMSwgMTI2NSwgMTI2OSwgMTI4MCwgMTQ3NCwgMTQ5MSwgMTQ5MiwgMTU0NSwgMTU2MSwgMTYxNixcbiAgICAxNjMxLCAxNjg3LCAxNzAxLFxuICBdLFxuICBodWxsOiBbMTY4OCwgMTY5MSwgMTY5MiwgMTY5NSwgMTY5NiwgMTY5OSwgMTcwMF0sXG4gIGRhcmtfZ3JheTogWzc4NSwgODU1LCA5MjUsIDk5NSwgMTI2NiwgMTI3MCwgMTI3MywgMTI3NCwgMTI3NiwgMTI3OV0sXG4gIGxpZ2h0X2dyYXk6IFs3MTQsIDcxNiwgMTEzMywgMTEzNywgMTI3MiwgMTI3NSwgMTI3N10sXG4gIHNoaXBfbGlnaHQ6IFs3MTVdLFxuICBzdXJyb3VuZGluZ193YXRlcl9kYXJrOiBbMTY4OSwgMTY5MCwgMTY5MywgMTY5NCwgMTY5NywgMTY5OF0sXG4gIHN1cnJvdW5kaW5nX3dhdGVyX2xpZ2h0OiBbXG4gICAgMTYzMiwgMTY4NSwgMTY4NiwgMTcwMiwgMTcwMywgMTc1NCwgMTc1NSwgMTc3MywgMTc3NCxcbiAgXSxcbn07XG5cbmNvbnN0IFNVQk1BUklORSA9IHtcbiAgaHVsbDogW10sXG4gIGRhcmtfZ3JheTogWzc2MCwgODMwLCA5MDBdLFxuICBsZWZ0X3BlcmlzY29wZTogWzc1OV0sXG4gIHJpZ2h0X3BlcmlzY29wZTogWzc2MV0sXG59O1xuXG4oZnVuY3Rpb24gY2Fycmllcl9lel9sb2FkZXIoKSB7XG4gIGNvbnN0IE9VVExJTkUgPSBDQVJSSUVSLmJsYWNrX291dGxpbmU7XG4gIElURVJBVE9SKDEzNzYsIDEzODAsIE9VVExJTkUpO1xuICBJVEVSQVRPUigxNjUzLCAxNjYzLCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMTc5MCwgMTc5MywgT1VUTElORSk7XG4gIElURVJBVE9SKDIwMTUsIDIwMTksIE9VVExJTkUpO1xuICBJVEVSQVRPUigyMDIyLCAyMDI0LCBPVVRMSU5FKTtcbiAgSVRFUkFUT1IoMjE5MCwgMjIzOSwgT1VUTElORSk7XG5cbiAgY29uc3QgSFVMTCA9IENBUlJJRVIuaHVsbDtcbiAgSVRFUkFUT1IoMTQ0NywgMTQ0OSwgSFVMTCk7XG4gIElURVJBVE9SKDE1ODcsIDE1ODksIEhVTEwpO1xuICBJVEVSQVRPUigxNzI0LCAxNzMyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMTc5NCwgMTgwMiwgSFVMTCk7XG4gIElURVJBVE9SKDE4NjAsIDE4NzIsIEhVTEwpO1xuICBJVEVSQVRPUigxOTMxLCAxOTM0LCBIVUxMKTtcbiAgSVRFUkFUT1IoMTk5OSwgMjAxMiwgSFVMTCk7XG4gIElURVJBVE9SKDIwNzEsIDIwNzQsIEhVTEwpO1xuICBJVEVSQVRPUigyMTM5LCAyMTUyLCBIVUxMKTtcbiAgSVRFUkFUT1IoMjI2MywgMjMwOCwgSFVMTCk7XG4gIElURVJBVE9SKDIzMzUsIDIzNzgsIEhVTEwpO1xuICBJVEVSQVRPUigyNDA1LCAyNDQ3LCBIVUxMKTtcbiAgSVRFUkFUT1IoMjQ3NiwgMjUxNiwgSFVMTCk7XG4gIElURVJBVE9SKDI1NDcsIDI1ODUsIEhVTEwpO1xuICBJVEVSQVRPUigyNjE4LCAyNjU1LCBIVUxMKTtcblxuICBjb25zdCBEQVJLX0dSQVkgPSBDQVJSSUVSLmRhcmtfZ3JheTtcbiAgSVRFUkFUT1IoMTEzNCwgMTEzNiwgREFSS19HUkFZKTtcbiAgSVRFUkFUT1IoMjA4NiwgMjA4OCwgREFSS19HUkFZKTtcbiAgSVRFUkFUT1IoMjE1NiwgMjE1OCwgREFSS19HUkFZKTtcbiAgSVRFUkFUT1IoMjE2MiwgMjE2NCwgREFSS19HUkFZKTtcbiAgSVRFUkFUT1IoMTkzNSwgMTkzOCwgREFSS19HUkFZKTtcbiAgSVRFUkFUT1IoMjA3NSwgMjA3OCwgREFSS19HUkFZKTtcblxuICBjb25zdCBMSUdIVF9HUkFZID0gQ0FSUklFUi5saWdodF9ncmF5O1xuICBJVEVSQVRPUigyMzM1LCAyMzc4LCBMSUdIVF9HUkFZKTtcblxuICBjb25zdCBTVVJST1VORElOR19XQVRFUl9EQVJLID0gQ0FSUklFUi5zdXJyb3VuZGluZ193YXRlcl9kYXJrO1xuICBJVEVSQVRPUigyNzU2LCAyNzk3LCBTVVJST1VORElOR19XQVRFUl9EQVJLKTtcbn0pKCk7XG5cbihmdW5jdGlvbiBkZXN0cm95ZXJfZXpfbG9hZGVyKCkge1xuICBjb25zdCBPVVRMSU5FID0gREVTVFJPWUVSLmJsYWNrX291dGxpbmU7XG4gIElURVJBVE9SKDE0MDMsIDE0MjIsIE9VVExJTkUpO1xuXG4gIGNvbnN0IEhVTEwgPSBERVNUUk9ZRVIuaHVsbDtcbiAgSVRFUkFUT1IoMTQ3NSwgMTQ5MCwgSFVMTCk7XG4gIElURVJBVE9SKDE2MTcsIDE2MzAsIEhVTEwpO1xuXG4gIGNvbnN0IExJR0hUX0dSQVkgPSBERVNUUk9ZRVIubGlnaHRfZ3JheTtcbiAgSVRFUkFUT1IoMTU0NiwgMTU2MCwgTElHSFRfR1JBWSk7XG4gIElURVJBVE9SKDEwNjMsIDEwNjcsIExJR0hUX0dSQVkpO1xuICBJVEVSQVRPUigxMjAyLCAxMjA3LCBMSUdIVF9HUkFZKTtcbiAgSVRFUkFUT1IoMTM0MiwgMTM0NywgTElHSFRfR1JBWSk7XG5cbiAgY29uc3QgREFSS19HUkFZID0gREVTVFJPWUVSLmRhcmtfZ3JheTtcbiAgSVRFUkFUT1IoMTMzNCwgMTMzNiwgREFSS19HUkFZKTtcbiAgSVRFUkFUT1IoMTMzOCwgMTM0MCwgREFSS19HUkFZKTtcbiAgSVRFUkFUT1IoMTM0OSwgMTM1MSwgREFSS19HUkFZKTtcblxuICBjb25zdCBTVVJST1VORElOR19XQVRFUl9EQVJLID0gREVTVFJPWUVSLnN1cnJvdW5kaW5nX3dhdGVyX2Rhcms7XG4gIElURVJBVE9SKDE3NTYsIDE3NzIsIFNVUlJPVU5ESU5HX1dBVEVSX0RBUkspO1xufSkoKTtcblxuZXhwb3J0IHsgQ0FSUklFUiwgREVTVFJPWUVSLCBTVUJNQVJJTkUgfTtcbiIsImltcG9ydCB7IElURVJBVE9SIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY29uc3QgU1RBUlQgPSB7XG4gIHM6IFsyMjEsIDIyMiwgNDM3LCA0MzhdLFxuICB0MTogWzIzNCwgMjM1LCAzMDQsIDMwNSwgMzc0LCAzNzUsIDQ0NCwgNDQ1LCA1MTQsIDUxNSwgNTg0LCA1ODVdLFxuICBhOiBbXG4gICAgMjQxLCAyNDIsIDI0NywgMjQ4LCA0NTEsIDQ1MiwgNDU3LCA0NTgsIDUyMSwgNTIyLCA1MjcsIDUyOCwgNTkxLCA1OTIsIDU5NyxcbiAgICA1OTgsXG4gIF0sXG4gIHI6IFtcbiAgICAyNTEsIDI1MiwgMjU3LCAyNTgsIDQ2MSwgNDYyLCA0NjcsIDQ2OCwgNTMxLCA1MzIsIDUzNywgNTM4LCA2MDEsIDYwMiwgNjA3LFxuICAgIDYwOCxcbiAgXSxcbiAgdDI6IFsyNjQsIDI2NSwgMzM0LCAzMzUsIDQwNCwgNDA1LCA0NzQsIDQ3NSwgNTQ0LCA1NDUsIDYxNCwgNjE1XSxcbiAgYWxsOiBbXSxcbn07XG5cbihmdW5jdGlvbiBlel9sb2FkZXIoKSB7XG4gIGNvbnN0IFMgPSBTVEFSVC5zO1xuICBJVEVSQVRPUig4MSwgODgsIFMpO1xuICBJVEVSQVRPUigxNTEsIDE1OCwgUyk7XG4gIElURVJBVE9SKDI5MSwgMjk4LCBTKTtcbiAgSVRFUkFUT1IoMzYxLCAzNjgsIFMpO1xuICBJVEVSQVRPUig1MDEsIDUwOCwgUyk7XG4gIElURVJBVE9SKDU3MSwgNTc4LCBTKTtcblxuICBjb25zdCBUMSA9IFNUQVJULnQxO1xuICBJVEVSQVRPUig5MSwgOTgsIFQxKTtcbiAgSVRFUkFUT1IoMTYxLCAxNjgsIFQxKTtcblxuICBjb25zdCBBID0gU1RBUlQuYTtcbiAgSVRFUkFUT1IoMTAxLCAxMDgsIEEpO1xuICBJVEVSQVRPUigxNzEsIDE3OCwgQSk7XG4gIElURVJBVE9SKDMxMSwgMzE4LCBBKTtcbiAgSVRFUkFUT1IoMzgxLCAzODgsIEEpO1xuXG4gIGNvbnN0IFIgPSBTVEFSVC5yO1xuICBJVEVSQVRPUigxMTEsIDExNiwgUik7XG4gIElURVJBVE9SKDE4MSwgMTg2LCBSKTtcbiAgSVRFUkFUT1IoMzIxLCAzMjYsIFIpO1xuICBJVEVSQVRPUigzOTEsIDM5NiwgUik7XG5cbiAgY29uc3QgVDIgPSBTVEFSVC50MjtcbiAgSVRFUkFUT1IoMTIxLCAxMjgsIFQyKTtcbiAgSVRFUkFUT1IoMTkxLCAxOTgsIFQyKTtcblxuICBmb3IgKGxldCBsZXR0ZXIgaW4gU1RBUlQpIHtcbiAgICBpZiAobGV0dGVyID09PSAnYWxsJykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIFNUQVJUW2xldHRlcl0ubWFwKChudW1iZXIpID0+IHtcbiAgICAgIFNUQVJULmFsbC5wdXNoKG51bWJlcik7XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBTVEFSVDtcbiIsImltcG9ydCByZW5kZXJfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL3JlbmRlcl90aWxlcy5qcyc7XG5pbXBvcnQgY29sb3Jfc3RhcnRfdGlsZXMgZnJvbSAnLi9oZWxwZXJzL2NvbG9yX3N0YXJ0X3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9zaGlwX3RpbGVzIGZyb20gJy4vaGVscGVycy9jb2xvcl9zaGlwX3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl9iYXR0bGVzaGlwX3RpbGVzIGZyb20gJy4vaGVscGVycy9jb2xvcl9iYXR0bGVzaGlwX3RpbGVzLmpzJztcbmltcG9ydCBjb2xvcl93YXRlcl90aWxlcyBmcm9tICcuL2hlbHBlcnMvY29sb3Jfd2F0ZXJfdGlsZXMuanMnO1xuaW1wb3J0IGxpc3RlbmVyc19oYW5kbGVycyBmcm9tICcuL2hlbHBlcnMvbGlzdGVuZXJzX2hhbmRsZXJzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZXBhZ2UoKSB7XG4gIHJlbmRlcl90aWxlcygpO1xuICBjb2xvcl9zdGFydF90aWxlcygpO1xuICBjb2xvcl9zaGlwX3RpbGVzKCk7XG4gIGNvbG9yX2JhdHRsZXNoaXBfdGlsZXMoKTtcbiAgY29sb3Jfd2F0ZXJfdGlsZXMoKTtcbiAgbGlzdGVuZXJzX2hhbmRsZXJzKCk7XG59XG4iLCJpbXBvcnQgeyBHQU1FIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW5kZXguanMnO1xuaW1wb3J0IHBsYWNlX2FpX3NoaXBzIGZyb20gJy4vcGxhY2VfYWlfc2hpcHMuanMnO1xuaW1wb3J0IHJlbmRlcl9nYW1lX2JvYXJkcyBmcm9tICcuLi8uLi9nYW1lX2JvYXJkcy9yZW5kZXJfZ2FtZV9ib2FyZHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpY19saXN0ZW5lcnMoKSB7XG4gIGxldCBjdXJyZW50X3NoaXBfaW5kZXggPSAwO1xuICBsZXQgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gIGNvbnN0IFNISVBTID0gWydjYXJyaWVyJywgJ2JhdHRsZXNoaXAnLCAnZGVzdHJveWVyJywgJ3N1YicsICdwYXRyb2xCb2F0J107XG4gIGNvbnN0IExFTkdUSCA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgY29uc3QgTUFYUyA9IHtcbiAgICAvLyB2ZXJ0aWNhbCBpcyB1c2luZyBjaGFyY29kZXNcbiAgICBjYXJyaWVyOiB7XG4gICAgICBob3Jpem9udGFsOiA1LFxuICAgICAgdmVydGljYWw6IDEwMiwgLy8gZlxuICAgIH0sXG4gICAgYmF0dGxlc2hpcDoge1xuICAgICAgaG9yaXpvbnRhbDogNixcbiAgICAgIHZlcnRpY2FsOiAxMDMsIC8vIGdcbiAgICB9LFxuICAgIGRlc3Ryb3llcjoge1xuICAgICAgaG9yaXpvbnRhbDogNyxcbiAgICAgIHZlcnRpY2FsOiAxMDQsIC8vIGhcbiAgICB9LFxuICAgIHN1Yjoge1xuICAgICAgaG9yaXpvbnRhbDogNyxcbiAgICAgIHZlcnRpY2FsOiAxMDQsIC8vIGhcbiAgICB9LFxuICAgIHBhdHJvbEJvYXQ6IHtcbiAgICAgIGhvcml6b250YWw6IDgsXG4gICAgICB2ZXJ0aWNhbDogMTA1LCAvLyBpXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBJTkJPVU5EU19FVkFMVUFUT1IgPSAoaWQpID0+IHtcbiAgICBsZXQgdmFsdWVfdG9fY29tcGFyZSA9ICcnO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB2YWx1ZV90b19jb21wYXJlID0gaWRbMV07XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdmFsdWVfdG9fY29tcGFyZSA9IGlkLmNoYXJDb2RlQXQoMCk7XG4gICAgfVxuICAgIGNvbnN0IE1BWCA9IE1BWFNbU0hJUFNbY3VycmVudF9zaGlwX2luZGV4XV1bb3JpZW50YXRpb25dO1xuICAgIHJldHVybiB2YWx1ZV90b19jb21wYXJlIDw9IE1BWDtcbiAgfTtcblxuICBjb25zdCBTUEFDRV9UQUtFTl9FVkFMVUFUT1IgPSAoYWxsX3RpbGVzKSA9PiB7XG4gICAgbGV0IGFyZV9hbGxfdGFrZW4gPSB0cnVlO1xuICAgIGNvbnN0IFBMQVlFUjFfU0hJUFMgPSBHQU1FLlJFVFVSTl9TSElQUygxKTtcbiAgICBmb3IgKGxldCBzaGlwIGluIFBMQVlFUjFfU0hJUFMpIHtcbiAgICAgIGNvbnN0IFBPU0lUSU9OUyA9IFBMQVlFUjFfU0hJUFNbc2hpcF0ucG9zaXRpb247XG4gICAgICBhbGxfdGlsZXMubWFwKCh0aWxlKSA9PiB7XG4gICAgICAgIGlmIChQT1NJVElPTlMuaW5jbHVkZXModGlsZSkpIHtcbiAgICAgICAgICBhcmVfYWxsX3Rha2VuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJlX2FsbF90YWtlbjtcbiAgfTtcblxuICBjb25zdCBTVUJTRVFVRU5UX1RJTEVTID0gKGlkKSA9PiB7XG4gICAgY29uc3QgTEVUVEVSX0NIQVJfQ09ERSA9IGlkLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3QgTlVNQkVSID0gaWRbMV07XG4gICAgbGV0IGFsbCA9IFtdO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBTVE9QX0FUID0gK05VTUJFUiArIExFTkdUSFtjdXJyZW50X3NoaXBfaW5kZXhdO1xuICAgICAgZm9yIChsZXQgaSA9IE5VTUJFUjsgaSA8IFNUT1BfQVQ7IGkrKykge1xuICAgICAgICBhbGwucHVzaChgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKExFVFRFUl9DSEFSX0NPREUpfSR7aX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGw7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgY29uc3QgU1RPUF9BVCA9IExFVFRFUl9DSEFSX0NPREUgKyBMRU5HVEhbY3VycmVudF9zaGlwX2luZGV4XTtcbiAgICAgIGZvciAobGV0IGkgPSBMRVRURVJfQ0hBUl9DT0RFOyBpIDwgU1RPUF9BVDsgaSsrKSB7XG4gICAgICAgIGFsbC5wdXNoKGAke1N0cmluZy5mcm9tQ2hhckNvZGUoaSl9JHtOVU1CRVJ9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWxsO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBDT0xPUl9USUxFUyA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvb3JkaW5hdGVzLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvb3JkaW5hdGUpO1xuICAgICAgVElMRS5jbGFzc0xpc3QuYWRkKCdwbGFjZV9zaGlwX2hvdmVyZWQnKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBNT1VTRV9FTlRFUl9IQU5ETEVSID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgSUQgPSBldmVudC50YXJnZXQuaWQ7XG4gICAgY29uc3QgSU5CT1VORFMgPSBJTkJPVU5EU19FVkFMVUFUT1IoSUQpO1xuICAgIGNvbnN0IEFMTF9DT09SRElOQVRFUyA9IFNVQlNFUVVFTlRfVElMRVMoSUQpO1xuICAgIGNvbnN0IEFSRV9TVUJTRVFVRU5UX1NQQUNFU19GUkVFID0gU1BBQ0VfVEFLRU5fRVZBTFVBVE9SKEFMTF9DT09SRElOQVRFUyk7XG4gICAgaWYgKCFJTkJPVU5EUyB8fCAhQVJFX1NVQlNFUVVFTlRfU1BBQ0VTX0ZSRUUpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkX3NoaXBfcGxhY2VtZW50Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIENPTE9SX1RJTEVTKEFMTF9DT09SRElOQVRFUyk7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BsYWNlX3NoaXBfaG92ZXJlZCcpO1xuICB9O1xuXG4gIGNvbnN0IE1PVVNFX0xFQVZFX0hBTkRMRVIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBIT1ZFUkVEX1RJTEVTID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYWNlX3NoaXBfaG92ZXJlZCcpXG4gICAgKTtcbiAgICBIT1ZFUkVEX1RJTEVTLm1hcCgodGlsZSkgPT4ge1xuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZV9zaGlwX2hvdmVyZWQnKTtcbiAgICB9KTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZF9zaGlwX3BsYWNlbWVudCcpO1xuICB9O1xuXG4gIGNvbnN0IE1PVVNFX0NMSUNLX0hBTkRMRVIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBJRCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICBjb25zdCBJTkJPVU5EUyA9IElOQk9VTkRTX0VWQUxVQVRPUihJRCk7XG4gICAgY29uc3QgQUxMX0NPT1JESU5BVEVTID0gU1VCU0VRVUVOVF9USUxFUyhJRCk7XG4gICAgY29uc3QgQVJFX1NVQlNFUVVFTlRfU1BBQ0VTX0ZSRUUgPSBTUEFDRV9UQUtFTl9FVkFMVUFUT1IoQUxMX0NPT1JESU5BVEVTKTtcblxuICAgIGlmIChJTkJPVU5EUyAmJiBBUkVfU1VCU0VRVUVOVF9TUEFDRVNfRlJFRSAmJiBjdXJyZW50X3NoaXBfaW5kZXggPCA1KSB7XG4gICAgICBjb25zdCBDVVJSRU5UX1NISVAgPSBTSElQU1tjdXJyZW50X3NoaXBfaW5kZXhdO1xuICAgICAgR0FNRS5QTEFDRV9TSElQKDEsIENVUlJFTlRfU0hJUCwgQUxMX0NPT1JESU5BVEVTKTtcbiAgICAgIEFMTF9DT09SRElOQVRFUy5tYXAoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvb3JkaW5hdGUpO1xuICAgICAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZF90aWxlJyk7XG4gICAgICB9KTtcbiAgICAgIGN1cnJlbnRfc2hpcF9pbmRleCA9IGN1cnJlbnRfc2hpcF9pbmRleCArIDE7XG5cbiAgICAgIGlmIChjdXJyZW50X3NoaXBfaW5kZXggPiA0KSB7XG4gICAgICAgIGNvbnN0IE1BSU4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Vfc2hpcHNfbWFpbicpO1xuICAgICAgICBNQUlOLnJlbW92ZSgpO1xuICAgICAgICBwbGFjZV9haV9zaGlwcygpO1xuICAgICAgICByZW5kZXJfZ2FtZV9ib2FyZHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgU1BBQ0VfQkFSX0hBTkRMRVIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBLRVkgPSBldmVudC5rZXk7XG4gICAgaWYgKEtFWSA9PT0gJyAnICYmIG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIG9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKEtFWSA9PT0gJyAnICYmIG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgVElMRVMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYWNlX3NoaXBfdGlsZScpKTtcbiAgVElMRVMubWFwKCh0aWxlKSA9PiB7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgTU9VU0VfRU5URVJfSEFORExFUik7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTU9VU0VfTEVBVkVfSEFORExFUik7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIE1PVVNFX0NMSUNLX0hBTkRMRVIpO1xuICB9KTtcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIFNQQUNFX0JBUl9IQU5ETEVSKTtcbn1cbiIsImltcG9ydCB7IEdBTUUgfSBmcm9tICcuLi8uLi8uLi8uLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYWNlX2FpX3NoaXBzKCkge1xuICBsZXQgY3VycmVudF9zaGlwX2luZGV4ID0gMDtcbiAgbGV0IG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICBjb25zdCBTSElQUyA9IFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgJ2Rlc3Ryb3llcicsICdzdWInLCAncGF0cm9sQm9hdCddO1xuICBjb25zdCBMRU5HVEggPSBbNSwgNCwgMywgMywgMl07XG4gIGNvbnN0IElORk8gPSB7XG4gICAgLy8gdmVydGljYWwgaXMgdXNpbmcgY2hhcmNvZGVzXG4gICAgY2Fycmllcjoge1xuICAgICAgbWF4OiA1LCAvL2hvcml6b250YWxcbiAgICAgIGNvb3JkaW5hdGVzOiBbXSxcbiAgICB9LFxuICAgIGJhdHRsZXNoaXA6IHtcbiAgICAgIG1heDogNiwgLy8gdmVydGljYWxcbiAgICAgIGNvb3JkaW5hdGVzOiBbXSxcbiAgICB9LFxuICAgIGRlc3Ryb3llcjoge1xuICAgICAgbWF4OiA3LCAvLyBob3Jpem9udGFsXG4gICAgICBjb29yZGluYXRlczogW10sXG4gICAgfSxcbiAgICBzdWI6IHtcbiAgICAgIG1heDogNywgLy8gdmVydGljYWxcbiAgICAgIGNvb3JkaW5hdGVzOiBbXSxcbiAgICB9LFxuICAgIHBhdHJvbEJvYXQ6IHtcbiAgICAgIG1heDogOCwgLy8gaG9yaXpvbnRhbFxuICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgIH0sXG4gIH07XG4gIGNvbnN0IEFMTF9DT09SRElOQVRFUyA9IFtdO1xuXG4gIGNvbnN0IExFVFRFUlMgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onXTtcblxuICBjb25zdCBBTExfVElMRVMgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IExFVFRFUl9DSEFSX0NPREUgPSBjb29yZGluYXRlLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3QgTlVNQkVSID0gY29vcmRpbmF0ZVsxXTtcbiAgICBsZXQgYWxsID0gW107XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IFNUT1BfQVQgPSArTlVNQkVSICsgTEVOR1RIW2N1cnJlbnRfc2hpcF9pbmRleF07XG4gICAgICBmb3IgKGxldCBpID0gTlVNQkVSOyBpIDwgU1RPUF9BVDsgaSsrKSB7XG4gICAgICAgIGFsbC5wdXNoKGAke1N0cmluZy5mcm9tQ2hhckNvZGUoTEVUVEVSX0NIQVJfQ09ERSl9JHtpfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFsbDtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBjb25zdCBTVE9QX0FUID0gTEVUVEVSX0NIQVJfQ09ERSArIExFTkdUSFtjdXJyZW50X3NoaXBfaW5kZXhdO1xuICAgICAgZm9yIChsZXQgaSA9IExFVFRFUl9DSEFSX0NPREU7IGkgPCBTVE9QX0FUOyBpKyspIHtcbiAgICAgICAgYWxsLnB1c2goYCR7U3RyaW5nLmZyb21DaGFyQ29kZShpKX0ke05VTUJFUn1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGw7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFRPR0dMRV9PUklFTlRBVElPTiA9ICgpID0+IHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgT05FX1JBTkRPTSA9ICgpID0+IHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgY29uc3QgUkFORE9NX0xFVFRFUiA9IExFVFRFUlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcbiAgICAgIGNvbnN0IFJBTkRPTV9OVU1CRVIgPSBNYXRoLmZsb29yKFxuICAgICAgICBNYXRoLnJhbmRvbSgpICogKElORk9bU0hJUFNbY3VycmVudF9zaGlwX2luZGV4XV0ubWF4ICsgMSlcbiAgICAgICk7XG4gICAgICByZXR1cm4gUkFORE9NX0xFVFRFUiArIFJBTkRPTV9OVU1CRVI7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgY29uc3QgUkFORE9NX0xFVFRFUiA9XG4gICAgICAgIExFVFRFUlNbXG4gICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKElORk9bU0hJUFNbY3VycmVudF9zaGlwX2luZGV4XV0ubWF4ICsgMSkpXG4gICAgICAgIF07XG4gICAgICBjb25zdCBSQU5ET01fTlVNQkVSID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgcmV0dXJuIFJBTkRPTV9MRVRURVIgKyBSQU5ET01fTlVNQkVSO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBHRVRfTU9WRSA9ICgpID0+IHtcbiAgICBjb25zdCBSQU5ET01fQ09PUkRJTkFURSA9IE9ORV9SQU5ET00oKTtcbiAgICBjb25zdCBBTExfQ09PUkRJTkFURVMgPSBBTExfVElMRVMoUkFORE9NX0NPT1JESU5BVEUpO1xuICAgIHJldHVybiBBTExfQ09PUkRJTkFURVM7XG4gIH07XG5cbiAgKGZ1bmN0aW9uIGNyZWF0ZV9jb29yZGluYXRlcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgY29uc3QgVU5JUVVFX01PVkUgPSAoKSA9PiB7XG4gICAgICAgIGxldCB1bmlxdWUgPSB0cnVlO1xuICAgICAgICBsZXQgTU9WRSA9IEdFVF9NT1ZFKCk7XG4gICAgICAgIE1PVkUubWFwKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgaWYgKEFMTF9DT09SRElOQVRFUy5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xuICAgICAgICAgICAgdW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHVuaXF1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBVTklRVUVfTU9WRSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmlxdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBNT1ZFLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgSU5GT1tTSElQU1tjdXJyZW50X3NoaXBfaW5kZXhdXS5jb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgQUxMX0NPT1JESU5BVEVTLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBVTklRVUVfTU9WRSgpO1xuICAgICAgY3VycmVudF9zaGlwX2luZGV4Kys7XG4gICAgICBUT0dHTEVfT1JJRU5UQVRJT04oKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uIGZpbGxfYWlfYm9hcmQoKSB7XG4gICAgZm9yIChsZXQgc2hpcCBpbiBJTkZPKSB7XG4gICAgICBjb25zdCBTSElQX1BPU0lUSU9OUyA9IElORk9bc2hpcF0uY29vcmRpbmF0ZXM7XG4gICAgICBHQU1FLlBMQUNFX1NISVAoMiwgc2hpcCwgU0hJUF9QT1NJVElPTlMpO1xuICAgIH1cbiAgfSkoKTtcbn1cbiIsImltcG9ydCBDT09SRElOQVRFUyBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2Nvb3JkaW5hdGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyX3RpbGVzKCkge1xuICBjb25zdCBNQUlOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBQTEFDRV9TSElQU19DT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgSU5TVFJVQ1RJT05TX0NPTlRBSU5FUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBJTlNUUlVDVElPTlMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IFNQQUNFX0tFWSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2tiZCcpO1xuICBjb25zdCBDTEFTU0VTID0gW1xuICAgICdibHVlMScsXG4gICAgJ2JsdWUyJyxcbiAgICAnYmx1ZTMnLFxuICAgICdibHVlNCcsXG4gICAgJ2JsdWU1JyxcbiAgICAnYmx1ZTYnLFxuICAgICdibHVlNycsXG4gICAgJ2JsdWU4JyxcbiAgICAnYmx1ZTknLFxuICAgICdibHVlMTAnLFxuICAgICdncmVlbjEnLFxuICBdO1xuXG4gIE1BSU4uaWQgPSAncGxhY2Vfc2hpcHNfbWFpbic7XG4gIFBMQUNFX1NISVBTX0NPTlRBSU5FUi5pZCA9ICdwbGFjZV9zaGlwc19jb250YWluZXInO1xuICBJTlNUUlVDVElPTlNfQ09OVEFJTkVSLmlkID0gJ2luc3RydWN0aW9uc19jb250YWluZXInO1xuICBJTlNUUlVDVElPTlMuaWQgPSAnaW5zdHJ1Y3Rpb25zJztcbiAgU1BBQ0VfS0VZLmlkID0gJ2JrZF9zcGFjZSc7XG4gIElOU1RSVUNUSU9OUy5pbm5lclRleHQgPSAndG8gcm90YXRlJztcbiAgU1BBQ0VfS0VZLmlubmVyVGV4dCA9ICdzcGFjZSc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzNTAwOyBpKyspIHtcbiAgICBjb25zdCBSQU5ET01fTlVNQkVSID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICAgIGNvbnN0IFRJTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3BsYWNlX3NoaXBzX2JhY2tncm91bmRfdGlsZScpO1xuICAgIFRJTEUuY2xhc3NMaXN0LmFkZChDTEFTU0VTW1JBTkRPTV9OVU1CRVJdKTtcbiAgICBNQUlOLmFwcGVuZChUSUxFKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgY29uc3QgVElMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFRJTEUuaWQgPSBDT09SRElOQVRFU1tpXTtcbiAgICBUSUxFLmNsYXNzTGlzdC5hZGQoJ3BsYWNlX3NoaXBfdGlsZScpO1xuICAgIFBMQUNFX1NISVBTX0NPTlRBSU5FUi5hcHBlbmQoVElMRSk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoTUFJTik7XG4gIElOU1RSVUNUSU9OU19DT05UQUlORVIuYXBwZW5kKFNQQUNFX0tFWSk7XG4gIElOU1RSVUNUSU9OU19DT05UQUlORVIuYXBwZW5kKElOU1RSVUNUSU9OUyk7XG4gIE1BSU4uYXBwZW5kKFBMQUNFX1NISVBTX0NPTlRBSU5FUik7XG4gIE1BSU4uYXBwZW5kKElOU1RSVUNUSU9OU19DT05UQUlORVIpO1xufVxuIiwiaW1wb3J0IHJlbmRlcl90aWxlcyBmcm9tICcuL2hlbHBlcnMvcmVuZGVyX3RpbGVzLmpzJztcbmltcG9ydCBsb2dpY19saXN0ZW5lcnMgZnJvbSAnLi9oZWxwZXJzL2xvZ2ljX2xpc3RlbmVycy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYWNlX3NoaXBzKCkge1xuICByZW5kZXJfdGlsZXMoKTtcbiAgbG9naWNfbGlzdGVuZXJzKCk7XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lbG9vcCgpIHtcbiAgbGV0IHBsYXllcjEgPSBuZXcgUGxheWVyKCdodW1hbicpO1xuICBsZXQgcGxheWVyMiA9IG5ldyBQbGF5ZXIoJ2FpJyk7XG4gIGxldCBwbGF5ZXIxX2dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgbGV0IHBsYXllcjJfZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IFJFU0VUID0gZnVuY3Rpb24gKCkge1xuICAgIHBsYXllcjEgPSBuZXcgUGxheWVyKCdodW1hbicpO1xuICAgIHBsYXllcjIgPSBuZXcgUGxheWVyKCdhaScpO1xuICAgIHBsYXllcjFfZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHBsYXllcjJfZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9O1xuXG4gIGNvbnN0IFJFVFVSTl9TSElQUyA9IChwbGF5ZXIpID0+IHtcbiAgICBpZiAocGxheWVyID09PSAxKSB7XG4gICAgICByZXR1cm4gcGxheWVyMV9nYW1lYm9hcmQuc2hpcHM7XG4gICAgfVxuICAgIGlmIChwbGF5ZXIgPT09IDIpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIyX2dhbWVib2FyZC5zaGlwcztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgUExBQ0VfU0hJUCA9IChib2FyZCwgc2hpcCwgcG9zaXRpb25zKSA9PiB7XG4gICAgaWYgKGJvYXJkID09PSAxKSB7XG4gICAgICBwbGF5ZXIxX2dhbWVib2FyZC5wbGFjZV9zaGlwKHNoaXAsIHBvc2l0aW9ucyk7XG4gICAgfVxuICAgIGlmIChib2FyZCA9PT0gMikge1xuICAgICAgcGxheWVyMl9nYW1lYm9hcmQucGxhY2Vfc2hpcChzaGlwLCBwb3NpdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBBVFRBQ0sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIHBsYXllcjEuaHVtYW5fYXR0YWNrKHBsYXllcjJfZ2FtZWJvYXJkLCBjb29yZGluYXRlKTtcbiAgICBwbGF5ZXIyLmFpX2F0dGFjayhwbGF5ZXIxX2dhbWVib2FyZCk7XG4gIH07XG5cbiAgY29uc3QgUkVUVVJOX0hJVFMgPSAoYm9hcmQpID0+IHtcbiAgICBpZiAoYm9hcmQgPT09IDEpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIxX2dhbWVib2FyZC5oaXRzO1xuICAgIH1cbiAgICBpZiAoYm9hcmQgPT09IDIpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIyX2dhbWVib2FyZC5oaXRzO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBSRVRVUk5fTUlTU0VTID0gKGJvYXJkKSA9PiB7XG4gICAgaWYgKGJvYXJkID09PSAxKSB7XG4gICAgICByZXR1cm4gcGxheWVyMV9nYW1lYm9hcmQubWlzc2VzO1xuICAgIH1cbiAgICBpZiAoYm9hcmQgPT09IDIpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIyX2dhbWVib2FyZC5taXNzZXM7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFdJTk5FUiA9ICgpID0+IHtcbiAgICBjb25zdCBCT0FSRDEgPSBwbGF5ZXIxX2dhbWVib2FyZC5hbGxfc3VuaygpO1xuICAgIGNvbnN0IEJPQVJEMiA9IHBsYXllcjJfZ2FtZWJvYXJkLmFsbF9zdW5rKCk7XG4gICAgaWYgKEJPQVJEMSAmJiBCT0FSRDIpIHtcbiAgICAgIHJldHVybiBcIklUJ1MgQSBUSUUhXCI7XG4gICAgfVxuICAgIGlmIChCT0FSRDEpIHtcbiAgICAgIHJldHVybiAnWU9VIExPU0UhJztcbiAgICB9XG4gICAgaWYgKEJPQVJEMikge1xuICAgICAgcmV0dXJuICdZT1UgQVJFIFRIRSBXSU5ORVIhJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBSRVNFVCxcbiAgICBSRVRVUk5fU0hJUFMsXG4gICAgUExBQ0VfU0hJUCxcbiAgICBBVFRBQ0ssXG4gICAgUkVUVVJOX0hJVFMsXG4gICAgUkVUVVJOX01JU1NFUyxcbiAgICBXSU5ORVIsXG4gIH07XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBzaGlwcyA9IHtcbiAgICBjYXJyaWVyOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCg1KSxcbiAgICB9LFxuICAgIGJhdHRsZXNoaXA6IHtcbiAgICAgIHBvc2l0aW9uOiBbXSxcbiAgICAgIHNoaXA6IG5ldyBTaGlwKDQpLFxuICAgIH0sXG4gICAgZGVzdHJveWVyOiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCgzKSxcbiAgICB9LFxuICAgIHN1Yjoge1xuICAgICAgcG9zaXRpb246IFtdLFxuICAgICAgc2hpcDogbmV3IFNoaXAoMyksXG4gICAgfSxcbiAgICBwYXRyb2xCb2F0OiB7XG4gICAgICBwb3NpdGlvbjogW10sXG4gICAgICBzaGlwOiBuZXcgU2hpcCgyKSxcbiAgICB9LFxuICB9O1xuICBoaXRzID0gW107XG4gIG1pc3NlcyA9IFtdO1xuXG4gIHBsYWNlX3NoaXAoc2hpcCwgaW5wdXRfY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLnNoaXBzW3NoaXBdLnBvc2l0aW9uID0gaW5wdXRfY29vcmRpbmF0ZXM7XG4gIH1cbiAgI21pc3NfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLm1pc3NlcywgaW5wdXRfY29vcmRpbmF0ZV0uc29ydCgpO1xuICB9XG4gICNoaXRfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmhpdHMsIGlucHV0X2Nvb3JkaW5hdGVdLnNvcnQoKTtcbiAgfVxuICByZWNlaXZlX2F0dGFjayhpbnB1dF9jb29yZGluYXRlKSB7XG4gICAgbGV0IG1pc3MgPSB0cnVlO1xuICAgIGZvciAobGV0IHNoaXAgaW4gdGhpcy5zaGlwcykge1xuICAgICAgY29uc3QgV0FTX0hJVCA9IHRoaXMuc2hpcHNbc2hpcF0ucG9zaXRpb24uaW5jbHVkZXMoaW5wdXRfY29vcmRpbmF0ZSk7XG4gICAgICBpZiAoV0FTX0hJVCkge1xuICAgICAgICB0aGlzLmhpdHMgPSB0aGlzLiNoaXRfcmVkdWNlcihpbnB1dF9jb29yZGluYXRlKTtcbiAgICAgICAgY29uc3QgSElUX0lOREVYID0gdGhpcy5zaGlwc1tzaGlwXS5wb3NpdGlvbi5pbmRleE9mKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgICAgICB0aGlzLnNoaXBzW3NoaXBdLnNoaXAuaGl0KEhJVF9JTkRFWCk7XG4gICAgICAgIG1pc3MgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1pc3MpIHtcbiAgICAgIHRoaXMubWlzc2VzID0gdGhpcy4jbWlzc19yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpO1xuICAgIH1cbiAgfVxuICBhbGxfc3VuaygpIHtcbiAgICBsZXQgaXNfYWxsX3N1bmsgPSB0cnVlO1xuICAgIGZvciAobGV0IHNoaXAgaW4gdGhpcy5zaGlwcykge1xuICAgICAgY29uc3QgYWxsX3N1bmtfY2FsbCA9IHRoaXMuc2hpcHNbc2hpcF0uc2hpcC5pc19zdW5rKCk7XG4gICAgICBpZiAoYWxsX3N1bmtfY2FsbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaXNfYWxsX3N1bmsgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc19hbGxfc3VuaztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IocGxheWVyKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gIH1cbiAgbW92ZXMgPSBbXTtcbiAgcmVtYWluaW5nX21vdmVzID0gW107XG5cbiAgI3JlbWFpbmluZ19tb3Zlc19yZWR1Y2VyKGNvb3JkaW5hdGUpIHtcbiAgICB0aGlzLnJlbWFpbmluZ19tb3ZlcyA9IFsuLi50aGlzLnJlbWFpbmluZ19tb3ZlcywgY29vcmRpbmF0ZV07XG4gIH1cbiAgI2ZpbGxfcmVtYWluaW5nX21vdmVzID0gKCgpID0+IHtcbiAgICBjb25zdCBMRVRURVJTID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnLCAnaScsICdqJ107XG4gICAgTEVUVEVSUy5tYXAoKGxldHRlcikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIHRoaXMuI3JlbWFpbmluZ19tb3Zlc19yZWR1Y2VyKGAke2xldHRlcn0ke2l9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pKCk7XG4gICNhaV9tb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ19tb3Zlc1tcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucmVtYWluaW5nX21vdmVzLmxlbmd0aClcbiAgICBdO1xuICB9XG4gICNmaWx0ZXJfcmVtYWluaW5nX21vdmVzKGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBSRU1BSU5JTkdfTU9WRVNfQ09QWSA9IFsuLi50aGlzLnJlbWFpbmluZ19tb3Zlc107XG4gICAgY29uc3QgUkVNQUlOSU5HID0gUkVNQUlOSU5HX01PVkVTX0NPUFkuZmlsdGVyKChyZW1haW5pbmdfbW92ZSkgPT4ge1xuICAgICAgcmV0dXJuIHJlbWFpbmluZ19tb3ZlICE9PSBjb29yZGluYXRlO1xuICAgIH0pO1xuICAgIHJldHVybiBSRU1BSU5JTkc7XG4gIH1cbiAgI2F0dGFja19yZWR1Y2VyKGlucHV0X2Nvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMubW92ZXMsIGlucHV0X2Nvb3JkaW5hdGVdO1xuICB9XG4gIGFpX2F0dGFjayhib2FyZCkge1xuICAgIGlmICh0aGlzLnBsYXllciAhPT0gJ2FpJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGF5ZXIgbmVlZHMgdG8gYmUgQUknKTtcbiAgICB9XG4gICAgY29uc3QgQ09PUkRJTkFURSA9IHRoaXMuI2FpX21vdmUoKTtcbiAgICB0aGlzLnJlbWFpbmluZ19tb3ZlcyA9IHRoaXMuI2ZpbHRlcl9yZW1haW5pbmdfbW92ZXMoQ09PUkRJTkFURSk7XG4gICAgdGhpcy5tb3ZlcyA9IHRoaXMuI2F0dGFja19yZWR1Y2VyKENPT1JESU5BVEUpO1xuICAgIGJvYXJkLnJlY2VpdmVfYXR0YWNrKENPT1JESU5BVEUpO1xuICAgIHJldHVybiBDT09SRElOQVRFO1xuICB9XG4gIGh1bWFuX2F0dGFjayhib2FyZCwgY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLnBsYXllciAhPT0gJ2h1bWFuJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGF5ZXIgbmVlZHMgdG8gYmUgYSBodW1hbicpO1xuICAgIH1cbiAgICBjb25zdCBGSUxURVJFRF9NT1ZFUyA9IHRoaXMuI2ZpbHRlcl9yZW1haW5pbmdfbW92ZXMoY29vcmRpbmF0ZSk7XG4gICAgdGhpcy5yZW1haW5pbmdfbW92ZXMgPSBGSUxURVJFRF9NT1ZFUztcbiAgICB0aGlzLm1vdmVzID0gdGhpcy4jYXR0YWNrX3JlZHVjZXIoY29vcmRpbmF0ZSk7XG4gICAgYm9hcmQucmVjZWl2ZV9hdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmhpdHMgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKGZhbHNlKTtcbiAgfVxuXG4gICNoaXRfcmVkdWNlcihoaXRzX2FycmF5LCBwb3NpdGlvbl9oaXQpIHtcbiAgICBjb25zdCBISVRTID0gWy4uLmhpdHNfYXJyYXldO1xuICAgIEhJVFNbcG9zaXRpb25faGl0XSA9IHRydWU7XG4gICAgcmV0dXJuIEhJVFM7XG4gIH1cbiAgaGl0KHBvc2l0aW9uX2hpdCkge1xuICAgIHRoaXMuaGl0cyA9IHRoaXMuI2hpdF9yZWR1Y2VyKHRoaXMuaGl0cywgcG9zaXRpb25faGl0KTtcbiAgfVxuICBpc19zdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhpdHMuZXZlcnkoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gdHJ1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGdhbWVsb29wIGZyb20gJy4vZ2FtZS9nYW1lX2xvb3AuanMnO1xuaW1wb3J0IGhvbWVwYWdlIGZyb20gJy4vY29tcG9uZW50cy91aS9ob21lcGFnZS9ob21lcGFnZS5qcyc7XG5cbmNvbnN0IEdBTUUgPSBnYW1lbG9vcCgpO1xuaG9tZXBhZ2UoKTtcblxuZXhwb3J0IHsgR0FNRSB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TcGFjZStNb25vJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWluLXdpZHRoOiA3MGVtO1xcbn1cXG5cXG4jZ2FtZV9ib2FyZHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNTAsIDFmcik7XFxuICBoZWlnaHQ6IDUwZW07XFxuICBtaW4td2lkdGg6IDcwZW07XFxufVxcblxcbi5nYW1lX2JvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiAzMGVtO1xcbiAgd2lkdGg6IDMwZW07XFxufVxcblxcbi5nYW1lX2JvYXJkX3RpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5wbGF5ZXJfYm9hcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzZlNjExMjtcXG59XFxuXFxuLmFpX2JvYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYzk3MWI7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbi5haV9ib2FyZF9ob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjODRmZjE3O1xcbn1cXG5cXG4jcGxheWVyX2JvYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBlbTtcXG4gIGxlZnQ6IDJlbTtcXG59XFxuXFxuI2FpX2JvYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBlbTtcXG4gIHJpZ2h0OiAyZW07XFxufVxcblxcbi5wbGFjZWRfc2hpcF90aWxlIHtcXG4gIGJhY2tncm91bmQ6ICM4YjdiMTU5YjtcXG59XFxuXFxuLnBsYXllcl9oaXQge1xcbiAgYmFja2dyb3VuZDogIzg2M2QzZGI0O1xcbn1cXG5cXG4uYWlfaGl0IHtcXG4gIGJhY2tncm91bmQ6ICM4NjNkM2Q7XFxufVxcblxcbi5wbGF5ZXJfbWlzcyB7XFxuICBiYWNrZ3JvdW5kOiAjMjIxYjcwYTE7XFxufVxcblxcbi5haV9taXNzIHtcXG4gIGJhY2tncm91bmQ6ICMyYjIxOWI7XFxufVxcblxcbi5hdHRhY2tlZF90aWxlIHtcXG4gIGJhY2tncm91bmQ6ICNmMDA7XFxufVxcblxcbi53aW5uZXJfbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMS41ZW07XFxuICBsZWZ0OiAxMC41ZW07XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnU3BhY2UgTW9ubycsIG1vbm9zcGFjZTtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDE0ZW07XFxuICBiYWNrZ3JvdW5kOiAjYWM5NzFiO1xcbn1cXG5cXG4ud2lubmVyX21lc3NhZ2VfaGlnaGxpZ2h0ZWQge1xcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBNb25vJywgbW9ub3NwYWNlO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb2xvcjogI2FjOTcxYjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdWkvZ2FtZV9ib2FyZHMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNwYWNlK01vbm8mZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICBtaW4td2lkdGg6IDcwZW07XFxufVxcblxcbiNnYW1lX2JvYXJkcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNzAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1MCwgMWZyKTtcXG4gIGhlaWdodDogNTBlbTtcXG4gIG1pbi13aWR0aDogNzBlbTtcXG59XFxuXFxuLmdhbWVfYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDMwZW07XFxuICB3aWR0aDogMzBlbTtcXG59XFxuXFxuLmdhbWVfYm9hcmRfdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnBsYXllcl9ib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmU2MTEyO1xcbn1cXG5cXG4uYWlfYm9hcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXFxuLmFpX2JvYXJkX2hvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblxcbiNwbGF5ZXJfYm9hcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMGVtO1xcbiAgbGVmdDogMmVtO1xcbn1cXG5cXG4jYWlfYm9hcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMGVtO1xcbiAgcmlnaHQ6IDJlbTtcXG59XFxuXFxuLnBsYWNlZF9zaGlwX3RpbGUge1xcbiAgYmFja2dyb3VuZDogIzhiN2IxNTliO1xcbn1cXG5cXG4ucGxheWVyX2hpdCB7XFxuICBiYWNrZ3JvdW5kOiAjODYzZDNkYjQ7XFxufVxcblxcbi5haV9oaXQge1xcbiAgYmFja2dyb3VuZDogIzg2M2QzZDtcXG59XFxuXFxuLnBsYXllcl9taXNzIHtcXG4gIGJhY2tncm91bmQ6ICMyMjFiNzBhMTtcXG59XFxuXFxuLmFpX21pc3Mge1xcbiAgYmFja2dyb3VuZDogIzJiMjE5YjtcXG59XFxuXFxuLmF0dGFja2VkX3RpbGUge1xcbiAgYmFja2dyb3VuZDogI2YwMDtcXG59XFxuXFxuLndpbm5lcl9tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDExLjVlbTtcXG4gIGxlZnQ6IDEwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBNb25vJywgbW9ub3NwYWNlO1xcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMTRlbTtcXG4gIGJhY2tncm91bmQ6ICNhYzk3MWI7XFxufVxcblxcbi53aW5uZXJfbWVzc2FnZV9oaWdobGlnaHRlZCB7XFxuICBmb250LWZhbWlseTogJ1NwYWNlIE1vbm8nLCBtb25vc3BhY2U7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiAjYWM5NzFiO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLW9wYWNpdHktMDA6IDE7XFxuICAtLW9wYWNpdHktMDU6IDAuOTg7XFxuICAtLW9wYWNpdHktMTA6IDAuOTY7XFxuICAtLW9wYWNpdHktMTU6IDAuOTQ7XFxuICAtLW9wYWNpdHktMjA6IDAuOTI7XFxuICAtLW9wYWNpdHktMjU6IDAuOTtcXG4gIC0tb3BhY2l0eS0zMDogMC44ODtcXG4gIC0tb3BhY2l0eS0zNTogMC44NjtcXG4gIC0tb3BhY2l0eS00MDogMC44NDtcXG4gIC0tb3BhY2l0eS00NTogMC44MjtcXG4gIC0tb3BhY2l0eS01MDogMC44O1xcbiAgLS1vcGFjaXR5LTU1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTYwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTY1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTcwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTc1OiAwLjk7XFxuICAtLW9wYWNpdHktODA6IDAuOTI7XFxuICAtLW9wYWNpdHktODU6IDAuOTQ7XFxuICAtLW9wYWNpdHktOTA6IDAuOTY7XFxuICAtLW9wYWNpdHktOTU6IDAuOTg7XFxuICAtLW9wYWNpdHktMTAwOiAxO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTAwKTtcXG4gIH1cXG5cXG4gIDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0wNSk7XFxuICB9XFxuXFxuICAxMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwKTtcXG4gIH1cXG5cXG4gIDE1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTUpO1xcbiAgfVxcblxcbiAgMjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0yMCk7XFxuICB9XFxuXFxuICAyNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTI1KTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzApO1xcbiAgfVxcblxcbiAgMzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zNSk7XFxuICB9XFxuXFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTQwKTtcXG4gIH1cXG5cXG4gIDQ1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDUpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS01MCk7XFxuICB9XFxuXFxuICA1NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTU1KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNjApO1xcbiAgfVxcblxcbiAgNjUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02NSk7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTcwKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzUpO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS04MCk7XFxuICB9XFxuXFxuICA4NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTg1KTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktOTApO1xcbiAgfVxcblxcbiAgOTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05NSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xMDApO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy91aS9ob21lcGFnZS9jc3MvYW5pbWF0b3IuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tb3BhY2l0eS0wMDogMTtcXG4gIC0tb3BhY2l0eS0wNTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDogMC45NjtcXG4gIC0tb3BhY2l0eS0xNTogMC45NDtcXG4gIC0tb3BhY2l0eS0yMDogMC45MjtcXG4gIC0tb3BhY2l0eS0yNTogMC45O1xcbiAgLS1vcGFjaXR5LTMwOiAwLjg4O1xcbiAgLS1vcGFjaXR5LTM1OiAwLjg2O1xcbiAgLS1vcGFjaXR5LTQwOiAwLjg0O1xcbiAgLS1vcGFjaXR5LTQ1OiAwLjgyO1xcbiAgLS1vcGFjaXR5LTUwOiAwLjg7XFxuICAtLW9wYWNpdHktNTU6IDAuODI7XFxuICAtLW9wYWNpdHktNjA6IDAuODQ7XFxuICAtLW9wYWNpdHktNjU6IDAuODY7XFxuICAtLW9wYWNpdHktNzA6IDAuODg7XFxuICAtLW9wYWNpdHktNzU6IDAuOTtcXG4gIC0tb3BhY2l0eS04MDogMC45MjtcXG4gIC0tb3BhY2l0eS04NTogMC45NDtcXG4gIC0tb3BhY2l0eS05MDogMC45NjtcXG4gIC0tb3BhY2l0eS05NTogMC45ODtcXG4gIC0tb3BhY2l0eS0xMDA6IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMDApO1xcbiAgfVxcblxcbiAgNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTA1KTtcXG4gIH1cXG5cXG4gIDEwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMTApO1xcbiAgfVxcblxcbiAgMTUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0xNSk7XFxuICB9XFxuXFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTIwKTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMjUpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zMCk7XFxuICB9XFxuXFxuICAzNSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTM1KTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNDApO1xcbiAgfVxcblxcbiAgNDUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS00NSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTUwKTtcXG4gIH1cXG5cXG4gIDU1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNTUpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS02MCk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTY1KTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktNzApO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS03NSk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTgwKTtcXG4gIH1cXG5cXG4gIDg1JSB7XFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktODUpO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS05MCk7XFxuICB9XFxuXFxuICA5NSUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTk1KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTEwMCk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5tYWluIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbiNic19oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQwLCAxZnIpO1xcbiAgaGVpZ2h0OiA0MGVtO1xcbiAgd2lkdGg6IDcwZW07XFxufVxcblxcbiNzdGFydF9idXR0b24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDEwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuLndhdGVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAxNTc7XFxufVxcblxcbi5zdGFydCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnN0YXJ0X2JhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjOTcxYjtcXG59XFxuXFxuLnN0YXJ0X3RleHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjOTcxYjtcXG59XFxuLnN0YXJ0X3RleHRfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5tYWluIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbiNic19oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQwLCAxZnIpO1xcbiAgaGVpZ2h0OiA0MGVtO1xcbiAgd2lkdGg6IDcwZW07XFxufVxcblxcbiNzdGFydF9idXR0b24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDEwZW07XFxuICB3aWR0aDogNzBlbTtcXG59XFxuXFxuLndhdGVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAxNTc7XFxufVxcblxcbi5zdGFydCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnN0YXJ0X2JhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zdGFydF9iYWNrZ3JvdW5kX2hvdmVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjOTcxYjtcXG59XFxuXFxuLnN0YXJ0X3RleHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjOTcxYjtcXG59XFxuLnN0YXJ0X3RleHRfaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwcy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93YXRlci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRvci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNoaXBfdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMC43ZW07XFxufVxcblxcbi5zaGlwX2h1bGxfb3V0bGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNoaXBfaHVsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1NTU1O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDI0MjtcXG59XFxuXFxuLnNoaXBfbGlnaHQge1xcbiAgYmFja2dyb3VuZDogI2ZmMDAwMDtcXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAwLjc1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5saWdodF9ncmF5IHtcXG4gIGJhY2tncm91bmQ6ICM2YzZjNmM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0NjQ2O1xcbn1cXG5cXG4uZGFya19ncmF5IHtcXG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjkyOTI5O1xcbn1cXG5cXG4uc3ViIHtcXG4gIGJhY2tncm91bmQ6ICMxYzFjMWM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGYwZjBmO1xcbn1cXG5cXG4ucGVyaXNjb3BlX29mZiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDEwMTU3O1xcbn1cXG5cXG4ucGVyaXNjb3BlX29uIHtcXG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjkyOTI5O1xcbn1cXG5cXG4ucmFkYXJfb2ZmIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwMTAxNTc7XFxufVxcblxcbi5yYWRhcl9vbiB7XFxuICBiYWNrZ3JvdW5kOiAjNmM2YzZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDY0NjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL3NoaXBzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi9hbmltYXRvci5jc3MnO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZGlzcGxheT1zd2FwJyk7XFxuXFxuLnNoaXBfdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMC43ZW07XFxufVxcblxcbi5zaGlwX2h1bGxfb3V0bGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNoaXBfaHVsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1NTU1O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDI0MjtcXG59XFxuXFxuLnNoaXBfbGlnaHQge1xcbiAgYmFja2dyb3VuZDogI2ZmMDAwMDtcXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAwLjc1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5saWdodF9ncmF5IHtcXG4gIGJhY2tncm91bmQ6ICM2YzZjNmM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0NjQ2O1xcbn1cXG5cXG4uZGFya19ncmF5IHtcXG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjkyOTI5O1xcbn1cXG5cXG4uc3ViIHtcXG4gIGJhY2tncm91bmQ6ICMxYzFjMWM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGYwZjBmO1xcbn1cXG5cXG4ucGVyaXNjb3BlX29mZiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDEwMTU3O1xcbn1cXG5cXG4ucGVyaXNjb3BlX29uIHtcXG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjkyOTI5O1xcbn1cXG5cXG4ucmFkYXJfb2ZmIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMwMTAxNTc7XFxufVxcblxcbi5yYWRhcl9vbiB7XFxuICBiYWNrZ3JvdW5kOiAjNmM2YzZjO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDY0NjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdG9yLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS13YXRlcjE6ICMwMTAxNTc7XFxuICAtLXdhdGVyMjogIzA2Mzc0NDtcXG59XFxuXFxuLnN1cnJvdW5kaW5nX3dhdGVyX2Rhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTM4YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDBkNjE7XFxufVxcblxcbi5zdXJyb3VuZGluZ193YXRlcl9saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMmIxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzE3MTc3NTtcXG59XFxuXFxuLmdyZWVuMSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjIpO1xcbiAgb3BhY2l0eTogNjAlO1xcbn1cXG5cXG4uYmx1ZTEge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG59XFxuXFxuLmJsdWUyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA5NiU7XFxufVxcblxcbi5ibHVlMyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogOTIlO1xcbn1cXG5cXG4uYmx1ZTQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDg4JTtcXG59XFxuXFxuLmJsdWU1IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4NCU7XFxufVxcblxcbi5ibHVlNiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG4uYmx1ZTcge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDc2JTtcXG59XFxuLmJsdWU4IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA3MiU7XFxufVxcblxcbi5ibHVlOSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNjglO1xcbn1cXG5cXG4uYmx1ZTEwIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA2NCU7XFxufVxcblxcbi5ibHVlMTAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdWkvaG9tZXBhZ2UvY3NzL3dhdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi9hbmltYXRvci5jc3MnO1xcblxcbjpyb290IHtcXG4gIC0td2F0ZXIxOiAjMDEwMTU3O1xcbiAgLS13YXRlcjI6ICMwNjM3NDQ7XFxufVxcblxcbi5zdXJyb3VuZGluZ193YXRlcl9kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzEzOGM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGQwZDYxO1xcbn1cXG5cXG4uc3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjJiMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNzE3NzU7XFxufVxcblxcbi5ncmVlbjEge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIyKTtcXG4gIG9wYWNpdHk6IDYwJTtcXG59XFxuXFxuLmJsdWUxIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxufVxcblxcbi5ibHVlMiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogOTYlO1xcbn1cXG5cXG4uYmx1ZTMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDkyJTtcXG59XFxuXFxuLmJsdWU0IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4OCU7XFxufVxcblxcbi5ibHVlNSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogODQlO1xcbn1cXG5cXG4uYmx1ZTYge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuLmJsdWU3IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA3NiU7XFxufVxcbi5ibHVlOCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNzIlO1xcbn1cXG5cXG4uYmx1ZTkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIxKTtcXG4gIG9wYWNpdHk6IDY4JTtcXG59XFxuXFxuLmJsdWUxMCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcjEpO1xcbiAgb3BhY2l0eTogNjQlO1xcbn1cXG5cXG4uYmx1ZTEwIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhdGVyMSk7XFxuICBvcGFjaXR5OiA4MCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNwYWNlK01vbm8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtaW4td2lkdGg6IDcwZW07XFxufVxcblxcbiNwbGFjZV9zaGlwc19tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLCAxZnIpO1xcbiAgbWluLXdpZHRoOiA3MGVtO1xcbiAgaGVpZ2h0OiA1MGVtO1xcbn1cXG5cXG4jcGxhY2Vfc2hpcHNfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTVlbTtcXG4gIGJvdHRvbTogNGVtO1xcbiAgaGVpZ2h0OiA0MGVtO1xcbiAgd2lkdGg6IDQwZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWM5NzFiO1xcbiAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG4jaW5zdHJ1Y3Rpb25zX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMWVtO1xcbiAgbGVmdDogMjllbTtcXG4gIHdpZHRoOiAxMmVtO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBiYWNrZ3JvdW5kOiAjYWE5ZjYxO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVlbTtcXG59XFxuXFxuI2JrZF9zcGFjZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMy41ZW07XFxuICBmb250LXNpemU6IDEuOGVtO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMnB4ICMwMDAwMDA7XFxufVxcblxcbiNpbnN0cnVjdGlvbnMge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LWZhbWlseTogJ1NwYWNlIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbi5wbGFjZV9zaGlwX3RpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG59XFxuXFxuLnBsYWNlZF90aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2NhMjk7XFxuICBiYWNrZ3JvdW5kOiAjYWM5NzFiO1xcbn1cXG5cXG4ucGxhY2Vfc2hpcF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblxcbi5pbnZhbGlkX3NoaXBfcGxhY2VtZW50IHtcXG4gIGJhY2tncm91bmQ6ICNmMDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNwYWNlK01vbm8mZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICBtaW4td2lkdGg6IDcwZW07XFxufVxcblxcbiNwbGFjZV9zaGlwc19tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3MCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUwLCAxZnIpO1xcbiAgbWluLXdpZHRoOiA3MGVtO1xcbiAgaGVpZ2h0OiA1MGVtO1xcbn1cXG5cXG4jcGxhY2Vfc2hpcHNfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTVlbTtcXG4gIGJvdHRvbTogNGVtO1xcbiAgaGVpZ2h0OiA0MGVtO1xcbiAgd2lkdGg6IDQwZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWM5NzFiO1xcbiAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG4jaW5zdHJ1Y3Rpb25zX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMWVtO1xcbiAgbGVmdDogMjllbTtcXG4gIHdpZHRoOiAxMmVtO1xcbiAgaGVpZ2h0OiAzZW07XFxuICBiYWNrZ3JvdW5kOiAjYWE5ZjYxO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVlbTtcXG59XFxuXFxuI2JrZF9zcGFjZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMy41ZW07XFxuICBmb250LXNpemU6IDEuOGVtO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMnB4ICMwMDAwMDA7XFxufVxcblxcbiNpbnN0cnVjdGlvbnMge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LWZhbWlseTogJ1NwYWNlIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbi5wbGFjZV9zaGlwX3RpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FjOTcxYjtcXG59XFxuXFxuLnBsYWNlZF90aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2NhMjk7XFxuICBiYWNrZ3JvdW5kOiAjYWM5NzFiO1xcbn1cXG5cXG4ucGxhY2Vfc2hpcF9ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQ6ICM4NGZmMTc7XFxufVxcblxcbi5pbnZhbGlkX3NoaXBfcGxhY2VtZW50IHtcXG4gIGJhY2tncm91bmQ6ICNmMDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzL3VpL2hvbWVwYWdlL2Nzcy9pbmRleC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzL3VpL3BsYWNlX3NoaXBzL2Nzcy9pbmRleC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzL3VpL2dhbWVfYm9hcmRzL2Nzcy9pbmRleC5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsiQ09PUkRJTkFURVMiLCJMRVRURVJTIiwiTlVNQkVSUyIsIm1hcCIsImxldHRlciIsIm51bWJlciIsInB1c2giLCJjb2xvcl9oaXRzX21pc3NlcyIsInBsYXllciIsImhpdHMiLCJtaXNzZXMiLCJjb29yZGluYXRlIiwiVElMRSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJHQU1FIiwiY29sb3JfcGxheWVyX3NoaXBzIiwiU0hJUFMiLCJSRVRVUk5fU0hJUFMiLCJzaGlwIiwicG9zaXRpb24iLCJyZW5kZXJfZ2FtZV9vdmVyX21lc3NhZ2UiLCJldmVudF9saXN0ZW5lcnMiLCJBSV9USUxFUyIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJBSV9USUxFX0NMSUNLX0hBTkRMRVIiLCJldmVudCIsIklEIiwidGFyZ2V0IiwiaWQiLCJzbGljZSIsIlJFVFVSTl9NSVNTRVMiLCJpbmNsdWRlcyIsIlJFVFVSTl9ISVRTIiwiQVRUQUNLIiwiV0lOTkVSIiwidW5kZWZpbmVkIiwidGlsZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJBSV9USUxFX0VOVEVSX0hBTkRMRVIiLCJBSV9USUxFX0xFQVZFX0hBTkRMRVIiLCJzdHlsZSIsImN1cnNvciIsIkhJVFMiLCJNSVNTRVMiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyX2JhY2tncm91bmRfdGlsZXMiLCJNQUlOIiwiY3JlYXRlRWxlbWVudCIsIkNMQVNTRVMiLCJpIiwiUkFORE9NX05VTUJFUiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFwcGVuZCIsImJvZHkiLCJ3aW5uZXIiLCJNRVNTQUdFIiwiaW5uZXJUZXh0IiwiTUVTU0FHRV9NT1VTRV9FTlRFUl9IQU5ETEVSIiwiTUVTU0FHRV9NT1VTRV9MRUFWRV9IQU5ETEVSIiwiTUVTU0FHRV9DTElDS19IQU5ETEVSIiwibG9jYXRpb24iLCJyZWxvYWQiLCJyZW5kZXJfZ2FtZWJvYXJkX3RpbGVzIiwiUExBWUVSX0JPQVJEIiwiQUlfQk9BUkQiLCJQTEFZRVJfQk9BUkRfVElMRSIsIkFJX0JPQVJEX1RJTEUiLCJyZW5kZXJfdGlsZXMiLCJyZW5kZXJfZ2FtZV9ib2FyZHMiLCJBTklNQVRJT05TIiwiUEVSSVNDT1BFX1NQSU5ORVIiLCJMRUZUX1RJTEUiLCJSSUdIVF9USUxFIiwidmFsdWUiLCJSQURBUl9TUElOTkVSMSIsIlJBREFSX1NQSU5ORVIyIiwiV0FURVJfQU5JTUFUSU9OIiwiV0FURVJfVElMRVMiLCJzZXRJbnRlcnZhbCIsIklURVJBVE9SIiwiQkFUVExFU0hJUCIsIkIiLCJBIiwiVDEiLCJUMiIsIkwiLCJFIiwiUyIsIkgiLCJJIiwiUCIsImV6X2xvYWRlciIsIkVaX1RJTEVfQ09MT1JJWkVSIiwiY29sb3JfYmF0dGxlc2hpcF90aWxlcyIsIkNBUlJJRVIiLCJERVNUUk9ZRVIiLCJTVUJNQVJJTkUiLCJjb2xvcl9zaGlwX3RpbGVzIiwiY2FycmllciIsImJsYWNrX291dGxpbmUiLCJodWxsIiwiZGFya19ncmF5IiwibGlnaHRfZ3JheSIsInNoaXBfbGlnaHQiLCJzdXJyb3VuZGluZ193YXRlcl9kYXJrIiwic3Vycm91bmRpbmdfd2F0ZXJfbGlnaHQiLCJDIiwiViIsIk4iLCJTSVgiLCJOSU5FIiwiVSIsIk4yIiwiVjIiLCJZIiwiQUxMIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwibGVmdF9wZXJpc2NvcGUiLCJyaWdodF9wZXJpc2NvcGUiLCJTVEFSVCIsImNvbG9yX3N0YXJ0X3RpbGVzIiwiYWxsIiwidGlsZV9pZCIsImNvbG9yX3dhdGVyX3RpbGVzIiwibWluIiwibWF4IiwidGFyZ2V0X2FycmF5IiwiaW5wdXRfYXJyYXkiLCJpbnB1dF9jbGFzcyIsInBsYWNlX3NoaXBzIiwibGlzdGVuZXJzX2hhbmRsZXJzIiwiU1RBUlRfQlVUVE9OIiwiU1RBUlRfQlVUVE9OX0VOVEVSX0hBTkRMRVIiLCJTVEFSVF9CVVRUT05fQkFDS0dST1VORF9USUxFUyIsIlNUQVJUX0JVVFRPTl9URVhUX1RJTEVTIiwiU1RBUlRfQlVUVE9OX0xFQVZFX0hBTkRMRVIiLCJTVEFSVF9CVVRUT05fQ0xJQ0tfSEFORExFUiIsImludGVydmFsIiwiSU5URVJWQUwiLCJjbGVhckludGVydmFsIiwiSEVBRElORyIsImNhcnJpZXJfZXpfbG9hZGVyIiwiT1VUTElORSIsIkhVTEwiLCJEQVJLX0dSQVkiLCJMSUdIVF9HUkFZIiwiU1VSUk9VTkRJTkdfV0FURVJfREFSSyIsImRlc3Ryb3llcl9lel9sb2FkZXIiLCJzIiwidDEiLCJhIiwiciIsInQyIiwiUiIsImhvbWVwYWdlIiwicGxhY2VfYWlfc2hpcHMiLCJsb2dpY19saXN0ZW5lcnMiLCJjdXJyZW50X3NoaXBfaW5kZXgiLCJvcmllbnRhdGlvbiIsIkxFTkdUSCIsIk1BWFMiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJiYXR0bGVzaGlwIiwic3ViIiwicGF0cm9sQm9hdCIsIklOQk9VTkRTX0VWQUxVQVRPUiIsInZhbHVlX3RvX2NvbXBhcmUiLCJjaGFyQ29kZUF0IiwiTUFYIiwiU1BBQ0VfVEFLRU5fRVZBTFVBVE9SIiwiYWxsX3RpbGVzIiwiYXJlX2FsbF90YWtlbiIsIlBMQVlFUjFfU0hJUFMiLCJQT1NJVElPTlMiLCJTVUJTRVFVRU5UX1RJTEVTIiwiTEVUVEVSX0NIQVJfQ09ERSIsIk5VTUJFUiIsIlNUT1BfQVQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJDT0xPUl9USUxFUyIsImNvb3JkaW5hdGVzIiwiTU9VU0VfRU5URVJfSEFORExFUiIsIklOQk9VTkRTIiwiQUxMX0NPT1JESU5BVEVTIiwiQVJFX1NVQlNFUVVFTlRfU1BBQ0VTX0ZSRUUiLCJNT1VTRV9MRUFWRV9IQU5ETEVSIiwiSE9WRVJFRF9USUxFUyIsIk1PVVNFX0NMSUNLX0hBTkRMRVIiLCJDVVJSRU5UX1NISVAiLCJQTEFDRV9TSElQIiwiU1BBQ0VfQkFSX0hBTkRMRVIiLCJLRVkiLCJrZXkiLCJUSUxFUyIsIklORk8iLCJBTExfVElMRVMiLCJUT0dHTEVfT1JJRU5UQVRJT04iLCJPTkVfUkFORE9NIiwiUkFORE9NX0xFVFRFUiIsIkdFVF9NT1ZFIiwiUkFORE9NX0NPT1JESU5BVEUiLCJjcmVhdGVfY29vcmRpbmF0ZXMiLCJVTklRVUVfTU9WRSIsInVuaXF1ZSIsIk1PVkUiLCJmaWxsX2FpX2JvYXJkIiwiU0hJUF9QT1NJVElPTlMiLCJQTEFDRV9TSElQU19DT05UQUlORVIiLCJJTlNUUlVDVElPTlNfQ09OVEFJTkVSIiwiSU5TVFJVQ1RJT05TIiwiU1BBQ0VfS0VZIiwiR2FtZWJvYXJkIiwiUGxheWVyIiwiZ2FtZWxvb3AiLCJwbGF5ZXIxIiwicGxheWVyMiIsInBsYXllcjFfZ2FtZWJvYXJkIiwicGxheWVyMl9nYW1lYm9hcmQiLCJSRVNFVCIsInNoaXBzIiwiYm9hcmQiLCJwb3NpdGlvbnMiLCJwbGFjZV9zaGlwIiwiaHVtYW5fYXR0YWNrIiwiYWlfYXR0YWNrIiwiQk9BUkQxIiwiYWxsX3N1bmsiLCJCT0FSRDIiLCJTaGlwIiwiaW5wdXRfY29vcmRpbmF0ZXMiLCJpbnB1dF9jb29yZGluYXRlIiwibWlzcyIsIldBU19ISVQiLCJISVRfSU5ERVgiLCJpbmRleE9mIiwiaGl0IiwiaXNfYWxsX3N1bmsiLCJhbGxfc3Vua19jYWxsIiwiaXNfc3VuayIsInNvcnQiLCJFcnJvciIsIkNPT1JESU5BVEUiLCJyZW1haW5pbmdfbW92ZXMiLCJtb3ZlcyIsInJlY2VpdmVfYXR0YWNrIiwiRklMVEVSRURfTU9WRVMiLCJsZW5ndGgiLCJSRU1BSU5JTkdfTU9WRVNfQ09QWSIsIlJFTUFJTklORyIsImZpbHRlciIsInJlbWFpbmluZ19tb3ZlIiwiZmlsbCIsInBvc2l0aW9uX2hpdCIsImV2ZXJ5IiwiaGl0c19hcnJheSJdLCJzb3VyY2VSb290IjoiIn0=