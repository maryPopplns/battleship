import { CARRIER } from './helpers/ship_tiles.js';

export default function color_ship_tiles() {
  CARRIER.hull_outline.map((tile_id) => {
    const TILE = document.getElementById(tile_id);
    TILE.classList.remove('water');
    TILE.classList.add('ship');
    TILE.classList.add('ship_hull_outline');
  });
  CARRIER.hull.map((tile_id) => {
    const TILE = document.getElementById(tile_id);
    TILE.classList.remove('water');
    TILE.classList.remove('tile');
    TILE.classList.add('ship');
    TILE.classList.add('ship_hull');
  });
}
