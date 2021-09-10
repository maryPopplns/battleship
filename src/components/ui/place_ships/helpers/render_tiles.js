import COORDINATES from './coordinates';

export default function render_tiles() {
  const MAIN = document.createElement('main');
  const PLACE_SHIPS_CONTAINER = document.createElement('div');
  const CLASSES = [
    'blue1',
    'blue2',
    'blue3',
    'blue4',
    'blue5',
    'blue6',
    'blue7',
    'blue8',
    'blue9',
    'blue10',
    'green1',
  ];

  MAIN.id = 'place_ships_main';
  PLACE_SHIPS_CONTAINER.id = 'place_ships_container';

  for (let i = 0; i < 3500; i++) {
    const RANDOM_NUMBER = Math.floor(Math.random() * 11);
    const TILE = document.createElement('div');
    TILE.classList.add('place_ships_background_tile');
    TILE.classList.add(CLASSES[RANDOM_NUMBER]);
    MAIN.append(TILE);
  }
  for (let i = 0; i < 100; i++) {
    const TILE = document.createElement('div');
    TILE.id = COORDINATES[i];
    TILE.innerText = COORDINATES[i];
    TILE.classList.add('place_ship_tile');
    PLACE_SHIPS_CONTAINER.append(TILE);
  }
  document.body.append(MAIN);
  MAIN.append(PLACE_SHIPS_CONTAINER);
}
