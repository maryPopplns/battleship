import { EZ_TILE_COLORIZER } from './helpers.js';
import BATTLESHIP from './battleship_tiles.js';

export default function color_battleship() {
  for (let letter in BATTLESHIP) {
    EZ_TILE_COLORIZER(BATTLESHIP[letter], 'title');
  }
}
