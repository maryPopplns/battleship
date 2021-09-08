import render_tiles from './render_tiles.js';
import color_start_tiles from './color_start_tiles.js';
import color_ship_tiles from './color_ship_tiles.js';
import color_battleship from './color_battleship.js';

export default function homepage() {
  render_tiles();
  color_start_tiles();
  color_ship_tiles();
  color_battleship();
}
