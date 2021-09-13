import { GAME } from '../../../../index.js';

export default function place_ai_ships() {
  let current_ship_index = 0;
  let orientation = 'horizontal';
  const SHIPS = ['carrier', 'battleship', 'destroyer', 'sub', 'patrolBoat'];
  const LENGTH = [5, 4, 3, 3, 2];
  const INFO = {
    // vertical is using charcodes
    carrier: {
      max: 5, //horizontal
      coordinates: [],
    },
    battleship: {
      max: 6, // vertical
      coordinates: [],
    },
    destroyer: {
      max: 7, // horizontal
      coordinates: [],
    },
    sub: {
      max: 7, // vertical
      coordinates: [],
    },
    patrolBoat: {
      max: 8, // horizontal
      coordinates: [],
    },
  };
  const ALL_COORDINATES = [];

  const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  const ALL_TILES = (coordinate) => {
    const LETTER_CHAR_CODE = coordinate.charCodeAt(0);
    const NUMBER = coordinate[1];
    let all = [];
    if (orientation === 'horizontal') {
      const STOP_AT = +NUMBER + LENGTH[current_ship_index];
      for (let i = NUMBER; i < STOP_AT; i++) {
        all.push(`${String.fromCharCode(LETTER_CHAR_CODE)}${i}`);
      }
      return all;
    }
    if (orientation === 'vertical') {
      const STOP_AT = LETTER_CHAR_CODE + LENGTH[current_ship_index];
      for (let i = LETTER_CHAR_CODE; i < STOP_AT; i++) {
        all.push(`${String.fromCharCode(i)}${NUMBER}`);
      }
      return all;
    }
  };

  const TOGGLE_ORIENTATION = () => {
    if (orientation === 'horizontal') {
      orientation = 'vertical';
    } else {
      orientation = 'horizontal';
    }
  };

  const ONE_RANDOM = () => {
    if (orientation === 'horizontal') {
      const RANDOM_LETTER = LETTERS[Math.floor(Math.random() * 10)];
      const RANDOM_NUMBER = Math.floor(
        Math.random() * (INFO[SHIPS[current_ship_index]].max + 1)
      );
      return RANDOM_LETTER + RANDOM_NUMBER;
    }
    if (orientation === 'vertical') {
      const RANDOM_LETTER =
        LETTERS[
          Math.floor(Math.random() * (INFO[SHIPS[current_ship_index]].max + 1))
        ];
      const RANDOM_NUMBER = Math.floor(Math.random() * 10);
      return RANDOM_LETTER + RANDOM_NUMBER;
    }
  };

  const GET_MOVE = () => {
    const RANDOM_COORDINATE = ONE_RANDOM();
    const ALL_COORDINATES = ALL_TILES(RANDOM_COORDINATE);
    return ALL_COORDINATES;
  };

  (function create_coordinates() {
    for (let i = 0; i < 5; i++) {
      const UNIQUE_MOVE = () => {
        let unique = true;
        let MOVE = GET_MOVE();
        MOVE.map((coordinate) => {
          if (ALL_COORDINATES.includes(coordinate)) {
            unique = false;
          }
        });
        if (unique === false) {
          UNIQUE_MOVE();
        }
        if (unique === true) {
          MOVE.map((coordinate) => {
            INFO[SHIPS[current_ship_index]].coordinates.push(coordinate);
            ALL_COORDINATES.push(coordinate);
          });
        }
      };
      UNIQUE_MOVE();
      current_ship_index++;
      TOGGLE_ORIENTATION();
    }
  })();

  (function fill_ai_board() {
    for (let ship in INFO) {
      const SHIP_POSITIONS = INFO[ship].coordinates;
      GAME.PLACE_SHIP(2, ship, SHIP_POSITIONS);
    }
  })();
}
