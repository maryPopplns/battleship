import render_tiles from './helpers/render_tiles.js';
import color_player_ships from './helpers/color_player_ships.js';
import event_listeners from './helpers/event_listeners.js';

export default function render_game_boards() {
  render_tiles();
  color_player_ships();
  event_listeners();
}
