import { CARRIER, DESTROYER, SUBMARINE } from './ship_tiles.js';
import { EZ_TILE_COLORIZER } from './helpers.js';

export default function color_ship_tiles() {
  (function carrier() {
    EZ_TILE_COLORIZER(CARRIER.black_outline, 'ship_hull_outline');
    EZ_TILE_COLORIZER(CARRIER.hull, 'ship_hull');
    EZ_TILE_COLORIZER(CARRIER.dark_gray, 'dark_gray');
    EZ_TILE_COLORIZER(CARRIER.light_gray, 'light_gray');
    EZ_TILE_COLORIZER(CARRIER.ship_light, 'ship_light');
    EZ_TILE_COLORIZER(CARRIER.surrounding_water_dark, 'surrounding_water_dark');
    EZ_TILE_COLORIZER(
      CARRIER.surrounding_water_light,
      'surrounding_water_light'
    );

    const C = document.getElementById(1795);
    const V = document.getElementById(1796);
    const N = document.getElementById(1797);
    const SIX = document.getElementById(1799);
    const NINE = document.getElementById(1800);
    const U = document.getElementById(2349);
    const S = document.getElementById(2350);
    const N2 = document.getElementById(2352);
    const A = document.getElementById(2353);
    const V2 = document.getElementById(2354);
    const Y = document.getElementById(2355);
    const ALL = [C, V, N, SIX, NINE, U, S, N2, A, V2, Y];
    ALL.map((tile) => {
      tile.classList.add('ship_text');
    });
    C.innerText = 'C';
    V.innerText = 'V';
    N.innerText = 'N';
    SIX.innerText = '6';
    NINE.innerText = '9';
    U.innerText = 'U';
    S.innerText = 'S';
    N2.innerText = 'N';
    A.innerText = 'A';
    V2.innerText = 'V';
    Y.innerText = 'Y';
  })();

  (function destroyer() {
    EZ_TILE_COLORIZER(DESTROYER.black_outline, 'ship_hull_outline');
    EZ_TILE_COLORIZER(DESTROYER.hull, 'ship_hull');
    EZ_TILE_COLORIZER(DESTROYER.light_gray, 'light_gray');
    EZ_TILE_COLORIZER(DESTROYER.dark_gray, 'dark_gray');
    EZ_TILE_COLORIZER(DESTROYER.ship_light, 'ship_light');
    EZ_TILE_COLORIZER(
      DESTROYER.surrounding_water_dark,
      'surrounding_water_dark'
    );
    EZ_TILE_COLORIZER(
      DESTROYER.surrounding_water_light,
      'surrounding_water_light'
    );

    const U = document.getElementById(1550);
    const S = document.getElementById(1551);
    const N = document.getElementById(1553);
    const A = document.getElementById(1554);
    const V = document.getElementById(1555);
    const Y = document.getElementById(1556);
    const ALL = [U, S, N, A, V, Y];
    ALL.map((tile) => {
      tile.classList.add('ship_text');
    });
    U.innerText = 'U';
    S.innerText = 'S';
    N.innerText = 'N';
    A.innerText = 'A';
    V.innerText = 'V';
    Y.innerText = 'Y';
  })();

  (function submarine() {
    // EZ_TILE_COLORIZER(SUBMARINE.hull, 'sub');
    EZ_TILE_COLORIZER(SUBMARINE.dark_gray, 'dark_gray');
    EZ_TILE_COLORIZER(SUBMARINE.left_periscope, 'periscope_on');
    EZ_TILE_COLORIZER(SUBMARINE.right_periscope, 'periscope_off');
  })();
}
