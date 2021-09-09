import render_tiles from './helpers/render_tiles.js';
import logic_listeners from './helpers/logic_listeners.js';

export default function place_ships() {
  render_tiles();
  logic_listeners();
}
