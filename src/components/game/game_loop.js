import Gameboard from './gameboard.js';
import Player from './player.js';

export default function gameloop() {
  const PLAYER1 = new Player('human');
  const PLAYER2 = new Player('ai');
  const PLAYER1_GAMEBOARD = new Gameboard();
  const PLAYER2_GAMEBOARD = new Gameboard();

  return { PLAYER1, PLAYER2, PLAYER1_GAMEBOARD, PLAYER2_GAMEBOARD };
}
