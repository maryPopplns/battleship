import { GAME } from '../../../../index.js';

export default function color_player_ships() {
  const SHIPS = GAME.RETURN_SHIPS(1);
  for (let ship in SHIPS) {
    const COORDINATES = SHIPS[ship].position;
    COORDINATES.map((coordinate) => {
      const TILE = document.getElementById(`player_${coordinate}`);
      TILE.classList.add('placed_ship_tile');
    });
  }
}
