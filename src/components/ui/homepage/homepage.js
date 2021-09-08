import render_tiles from './helpers/render_tiles.js';
import color_start_tiles from './helpers/color_start_tiles.js';
import color_ship_tiles from './helpers/color_ship_tiles.js';
import color_battleship_tiles from './helpers/color_battleship_tiles.js';
import color_water_tiles from './helpers/color_water_tiles.js';
import listeners_handlers from './helpers/listeners_handlers.js';

export default function homepage() {
  render_tiles();
  color_start_tiles();
  color_ship_tiles();
  color_battleship_tiles();
  color_water_tiles();
  listeners_handlers();
}
