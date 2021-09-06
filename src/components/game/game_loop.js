import { Gameboard } from './Gameboard.js';
import { Player } from './Player.js';

const LOOP = (() => {
  const PLAYER1 = new Player('human');
  const PLAYER2 = new Player('ai');
  const PLAYER1_GAMEBOARD = new Gameboard();
  const PLAYER2_GAMEBOARD = new Gameboard();
  const BOARDS = [PLAYER1_GAMEBOARD, PLAYER2_GAMEBOARD];
  BOARDS.map((board) => {
    board.place_ship('carrier', ['a0', 'a1', 'a2', 'a3', 'a4']);
    board.place_ship('battleship', ['b0', 'b1', 'b2', 'b3']);
    board.place_ship('destroyer', ['c0', 'c1', 'c2']);
    board.place_ship('sub', ['d0', 'd1', 'd2']);
    board.place_ship('patrolBoat', ['e0', 'e1']);
  });
})();

export { LOOP };
