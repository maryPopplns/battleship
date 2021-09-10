export default function logic_listeners() {
  let current_ship_index = 0;
  let orientation = 'horizontal';
  const SHIPS = ['carrier', 'battleship', 'destroyer', 'sub', 'patrolBoat'];
  const LENGTH = [5, 4, 3, 3, 2];
  const MAXS = {
    carrier: {
      horizontal: 5,
      vertical: 'f',
    },
    battleship: {
      horizontal: 6,
      vertical: 'g',
    },
    destroyer: {
      horizontal: 7,
      vertical: 'h',
    },
    sub: {
      horizontal: 7,
      vertical: 'h',
    },
    patrolBoat: {
      horizontal: 8,
      vertical: 'i',
    },
  };

  // const SUBSEQUENT_TILES = (id) => {
  //   console.log(id);
  // };

  const INBOUNDS_DETERMINER = (id) => {
    let value_to_compare = '';
    if (orientation === 'horizontal') {
      value_to_compare = id[0];
    }
    if (orientation === 'vertical') {
      value_to_compare = id[1];
    }
    console.log(orientation);
    console.log(value_to_compare);
    console.log('');
  };

  const MOUSE_ENTER_HANDLER = (event) => {
    const ID = event.target.id;
    //TODO create outof bounds function and hand whether its in bounds or not here
    const INBOUNDS = INBOUNDS_DETERMINER(ID);
    // if the coordinate is out of bounds make the tile red
    // if the coordinate isnt out of bounds,

    event.target.classList.add('place_ship_hovered');
    // SUBSEQUENT_TILES(ID);
  };

  const MOUSE_LEAVE_HANDLER = () => {
    const HOVERED_TILES = Array.from(
      document.getElementsByClassName('place_ship_hovered')
    );
    HOVERED_TILES.map((tile) => {
      tile.classList.remove('place_ship_hovered');
    });
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
