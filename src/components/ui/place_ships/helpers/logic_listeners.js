import { GAME } from '../../../../index.js';

export default function logic_listeners() {
  let current_ship_index = 0;
  let orientation = 'horizontal';
  const SHIPS = ['carrier', 'battleship', 'destroyer', 'sub', 'patrolBoat'];
  const LENGTH = [5, 4, 3, 3, 2];
  const MAXS = {
    //vertical is using charcodes to make this easier
    carrier: {
      horizontal: 5,
      vertical: 102, // f
    },
    battleship: {
      horizontal: 6,
      vertical: 103, // g
    },
    destroyer: {
      horizontal: 7,
      vertical: 104, // h
    },
    sub: {
      horizontal: 7,
      vertical: 104, // h
    },
    patrolBoat: {
      horizontal: 8,
      vertical: 105, // i
    },
  };

  const INBOUNDS_EVALUATOR = (id) => {
    let value_to_compare = '';
    if (orientation === 'horizontal') {
      value_to_compare = id[1];
    }
    if (orientation === 'vertical') {
      value_to_compare = id.charCodeAt(0);
    }
    const MAX = MAXS[SHIPS[current_ship_index]][orientation];
    return value_to_compare <= MAX;
  };

  const SPACE_TAKEN_EVALUATOR = (all_tiles) => {
    let are_all_taken = true;
    const PLAYER1_SHIPS = GAME.PLAYER1_GAMEBOARD.ships;
    for (let ship in PLAYER1_SHIPS) {
      const POSITIONS = PLAYER1_SHIPS[ship].position;
      all_tiles.map((tile) => {
        if (POSITIONS.includes(tile)) {
          are_all_taken = false;
        }
      });
    }
    return are_all_taken;
  };

  const SUBSEQUENT_TILES = (id) => {
    const LETTER_CHAR_CODE = id.charCodeAt(0);
    const NUMBER = id[1];
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

  const MOUSE_ENTER_HANDLER = (event) => {
    const ID = event.target.id;
    const INBOUNDS = INBOUNDS_EVALUATOR(ID);
    if (!INBOUNDS) {
      event.target.classList.add('invalid_ship_placement');
      return;
    }
    const ALL_TILES = SUBSEQUENT_TILES(ID);
    const ARE_SUBSEQUENT_SPACES_FREE = SPACE_TAKEN_EVALUATOR(ALL_TILES);
    console.log(ARE_ALL_FREE);
    // if the coordinate is out of bounds or a ship is in that position make the tile red
    // if the coordinate isnt out of bounds,

    event.target.classList.add('place_ship_hovered');
  };

  const MOUSE_LEAVE_HANDLER = (event) => {
    const HOVERED_TILES = Array.from(
      document.getElementsByClassName('place_ship_hovered')
    );
    HOVERED_TILES.map((tile) => {
      tile.classList.remove('place_ship_hovered');
    });
    event.target.classList.remove('invalid_ship_placement');
  };

  const MOUSE_CLICK_HANDLER = () => {
    current_ship_index = current_ship_index + 1;
  };

  const KEY_PRESS_HANDLER = (event) => {
    const KEY = event.key;
    if (KEY === ' ' && orientation === 'horizontal') {
      orientation = 'vertical';
      return;
    }
    if (KEY === ' ' && orientation === 'vertical') {
      orientation = 'horizontal';
      return;
    }
  };

  const TILES = Array.from(document.getElementsByClassName('place_ship_tile'));
  TILES.map((tile) => {
    tile.addEventListener('mouseenter', MOUSE_ENTER_HANDLER);
    tile.addEventListener('mouseleave', MOUSE_LEAVE_HANDLER);
    tile.addEventListener('click', MOUSE_CLICK_HANDLER);
  });
  document.body.addEventListener('keyup', KEY_PRESS_HANDLER);
}
