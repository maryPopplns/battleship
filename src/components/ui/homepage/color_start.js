import START from './start_tiles.js';

export default function color_start() {
  const ALL_TILES = Array.from(document.getElementsByClassName('start'));
  ALL_TILES.map((tile) => {
    const ID = +tile.id.slice(6);
    const COLORED = START.all;
    if (COLORED.includes(ID)) {
      tile.style.backgroundColor = 'red';
    }
  });
}
