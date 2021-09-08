import START from './start_tiles.js';

export default function color_start_tiles() {
  const ALL = START.all;
  ALL.map((tile_id) => {
    const TILE = document.getElementById(`start_${tile_id}`);
    TILE.classList.remove('start_background');
    TILE.classList.add('start_text');
  });
}
