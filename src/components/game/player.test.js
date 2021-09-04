import { Gameboard } from './gameboard.js';
import { Player } from './player.js';
import { describe, expect, test } from '@jest/globals';

describe('player functionality', () => {
  test('"attack" method enemy marks board correctly for human player', () => {
    // const BOARD = new Gameboard();
    // const PLAYER = new Player('human');
    // BOARD.place_ship('carrier', ['a0', 'a1', 'a2', 'a3', 'a4']);
    // BOARD.place_ship('battleship', ['b0', 'b1', 'b2', 'b3']);
    // PLAYER.attack(BOARD, 'a0');
    // PLAYER.attack(BOARD, 'a1');
    // PLAYER.attack(BOARD, 'a2');
    // expect(BOARD.ships.carrier.ship.hits[0]).toStrictEqual(true);
    // expect(BOARD.ships.carrier.ship.hits[1]).toStrictEqual(true);
    // expect(BOARD.ships.carrier.ship.hits[2]).toStrictEqual(true);
    // PLAYER.attack(BOARD, 'a5');
    // expect(BOARD.misses.includes('a5')).toStrictEqual(true);
  });
});
