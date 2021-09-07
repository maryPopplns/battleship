import START from './helpers/start_tiles.js';

export default function color_start_tiles() {
  const ALL_TILES = Array.from(
    document.getElementsByClassName('start_background')
  );
  ALL_TILES.map((tile) => {
    const ID = +tile.id.slice(6);
    const COLORED = START.all;
    if (COLORED.includes(ID)) {
      tile.classList.remove('start_background');
      tile.classList.add('start_text');
    }
  });
}
