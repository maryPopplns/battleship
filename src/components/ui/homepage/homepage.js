import render_tiles from './helpers/render_tiles.js';
import color_start_tiles from './helpers/color_start_tiles.js';
import color_ship_tiles from './helpers/color_ship_tiles.js';
import color_battleship from './helpers/color_battleship.js';
import animations from './helpers/animations.js';
import color_water from './helpers/color_water.js';

export default function homepage() {
  render_tiles();
  color_start_tiles();
  color_ship_tiles();
  color_battleship();
  color_water();
  animations();
}
