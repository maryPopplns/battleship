import Gameboard from './gameboard.js';
import Player from './player.js';

export default function gameloop() {
  let player1 = new Player('human');
  let player2 = new Player('ai');
  let player1_gameboard = new Gameboard();
  let player2_gameboard = new Gameboard();

  const RESET = function () {
    player1 = new Player('human');
    player2 = new Player('ai');
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

  const ATTACK = (coordinate) => {
    player1.human_attack(player2_gameboard, coordinate);
    player2.ai_attack(player1_gameboard);
  };

  const RETURN_HITS = (board) => {
    if (board === 1) {
      return player1_gameboard.hits;
    }
    if (board === 2) {
      return player2_gameboard.hits;
    }
  };

  const RETURN_MISSES = (board) => {
    if (board === 1) {
      return player1_gameboard.misses;
    }
    if (board === 2) {
      return player2_gameboard.misses;
    }
  };

  const WINNER = () => {
    const BOARD1 = player1_gameboard.all_sunk();
    const BOARD2 = player2_gameboard.all_sunk();
    if (BOARD1 && BOARD2) {
      return "IT'S A TIE!";
    }
    if (BOARD1) {
      return 'YOU LOSE!';
    }
    if (BOARD2) {
      return 'YOU ARE THE WINNER!';
    }
  };

  return {
    RESET,
    RETURN_SHIPS,
    PLACE_SHIP,
    ATTACK,
    RETURN_HITS,
    RETURN_MISSES,
    WINNER,
  };
}
