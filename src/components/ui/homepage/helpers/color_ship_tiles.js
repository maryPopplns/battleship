import { CARRIER, DESTROYER, SUBMARINE } from './ship_tiles.js';
import { EZ_TILE_COLORIZER } from './helpers.js';

export default function color_ship_tiles() {
  EZ_TILE_COLORIZER(CARRIER.black_outline, 'ship_hull_outline');
  EZ_TILE_COLORIZER(CARRIER.hull, 'ship_hull');
  EZ_TILE_COLORIZER(CARRIER.dark_gray, 'dark_gray');
  EZ_TILE_COLORIZER(CARRIER.light_gray, 'light_gray');
  EZ_TILE_COLORIZER(CARRIER.ship_light, 'ship_light');
  EZ_TILE_COLORIZER(CARRIER.surrounding_water_dark, 'surrounding_water_dark');
  EZ_TILE_COLORIZER(CARRIER.surrounding_water_light, 'surrounding_water_light');

  EZ_TILE_COLORIZER(DESTROYER.black_outline, 'ship_hull_outline');
  EZ_TILE_COLORIZER(DESTROYER.hull, 'ship_hull');
  EZ_TILE_COLORIZER(DESTROYER.light_gray, 'light_gray');
  EZ_TILE_COLORIZER(DESTROYER.dark_gray, 'dark_gray');
  EZ_TILE_COLORIZER(DESTROYER.ship_light, 'ship_light');
  EZ_TILE_COLORIZER(DESTROYER.surrounding_water_dark, 'surrounding_water_dark');
  EZ_TILE_COLORIZER(
    DESTROYER.surrounding_water_light,
    'surrounding_water_light'
  );

  EZ_TILE_COLORIZER(SUBMARINE.hull, 'sub');
  EZ_TILE_COLORIZER(SUBMARINE.dark_gray, 'dark_gray');
  EZ_TILE_COLORIZER(SUBMARINE.left_periscope, 'periscope_on');
  EZ_TILE_COLORIZER(SUBMARINE.right_periscope, 'periscope_off');
}
