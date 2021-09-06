import Gameboard from './gameboard.js';
import Player from './player.js';

export default function gameloop() {
  const PLAYER1 = new Player('human');
  const PLAYER2 = new Player('ai');
  const PLAYER1_GAMEBOARD = new Gameboard();
  const PLAYER2_GAMEBOARD = new Gameboard();

  //todo remove boilerplate so ships can be manually placed
  [PLAYER1_GAMEBOARD, PLAYER2_GAMEBOARD].map((board) => {
    board.place_ship('carrier', ['a0', 'a1', 'a2', 'a3', 'a4']);
    board.place_ship('battleship', ['b0', 'b1', 'b2', 'b3']);
    board.place_ship('destroyer', ['c0', 'c1', 'c2']);
    board.place_ship('sub', ['d0', 'd1', 'd2']);
    board.place_ship('patrolBoat', ['e0', 'e1']);
  });
  //todo remove boilerplate so ships can be manually placed
}
