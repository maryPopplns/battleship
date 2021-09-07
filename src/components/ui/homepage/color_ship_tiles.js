import { CARRIER, DESTROYER } from './helpers/ship_tiles.js';
import { EZ_TILE_COLORIZER } from './helpers/helpers.js';

export default function color_ship_tiles() {
  EZ_TILE_COLORIZER(CARRIER.black_outline, 'ship_hull_outline');
  EZ_TILE_COLORIZER(CARRIER.hull, 'ship_hull');
  EZ_TILE_COLORIZER(CARRIER.gun_barrel, 'gun_barrel');
  EZ_TILE_COLORIZER(CARRIER.dark_gray, 'dark_gray');
  EZ_TILE_COLORIZER(CARRIER.light_gray, 'light_gray');

  EZ_TILE_COLORIZER(DESTROYER.black_outline, 'ship_hull_outline');
  EZ_TILE_COLORIZER(DESTROYER.hull, 'ship_hull');
  EZ_TILE_COLORIZER(DESTROYER.light_gray, 'light_gray');
}
