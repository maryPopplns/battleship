import Gameboard from './gameboard.js';
import Player from './player.js';

export default function gameloop() {
  const PLAYER1 = new Player('human');
  const PLAYER2 = new Player('ai');
  let player1_gameboard = new Gameboard();
  let player2_gameboard = new Gameboard();

  const RESET = function () {
    player1_gameboard = new Gameboard();
    player2_gameboard = new Gameboard();
  };

  const RETURN_SHIPS = (player) => {
    if (player === 1) {
      return player1_gameboard.ships;
    }
    if (player === 2) {
      return player2_gameboard.ships;
    }
  };

  const PLACE_SHIP = (board, ship, positions) => {
    if (board === 1) {
      player1_gameboard.place_ship(ship, positions);
    }
    if (board === 2) {
      player2_gameboard.place_ship(ship, positions);
    }
  };

  return {
    PLAYER1,
    PLAYER2,
    RESET,
    RETURN_SHIPS,
    PLACE_SHIP,
  };
}
