import { Ship, Gameboard } from './game.js';
import { describe, expect, test } from '@jest/globals';

describe('ship functionality', () => {
  test('invoking Ships "hit" method with an index updates storage correctly', () => {
    const SHIP = new Ship(5);
    SHIP.hit(0);
    expect(SHIP.hits).toStrictEqual([true, false, false, false, false]);
    SHIP.hit(1);
    expect(SHIP.hits).toStrictEqual([true, true, false, false, false]);
    SHIP.hit(2);
    expect(SHIP.hits).toStrictEqual([true, true, true, false, false]);
    SHIP.hit(3);
    expect(SHIP.hits).toStrictEqual([true, true, true, true, false]);
    SHIP.hit(4);
    expect(SHIP.hits).toStrictEqual([true, true, true, true, true]);
  });

  test('Ships "is_sunk" method returns the correct state', () => {
    const SHIP = new Ship(5);
    SHIP.hit(4);
    expect(SHIP.is_sunk()).toStrictEqual(false);
    SHIP.hit(3);
    expect(SHIP.is_sunk()).toStrictEqual(false);
    SHIP.hit(2);
    expect(SHIP.is_sunk()).toStrictEqual(false);
    SHIP.hit(1);
    expect(SHIP.is_sunk()).toStrictEqual(false);
    SHIP.hit(0);
    expect(SHIP.is_sunk()).toStrictEqual(true);
  });

  test('Ships "is_hit" method returns the correct state', () => {
    const SHIP = new Ship(5);
    SHIP.hit(0);
    expect(SHIP.is_hit(0)).toStrictEqual(true);
    SHIP.hit(1);
    expect(SHIP.is_hit(1)).toStrictEqual(true);
    SHIP.hit(2);
    expect(SHIP.is_hit(2)).toStrictEqual(true);
    SHIP.hit(3);
    expect(SHIP.is_hit(3)).toStrictEqual(true);
    SHIP.hit(4);
    expect(SHIP.is_hit(4)).toStrictEqual(true);
  });
});

describe('game_board functionality', () => {
  test('board places ships at proper coordinates', () => {
    const BOARD = new Gameboard();
    BOARD.place_ship('carrier', ['a0', 'a1', 'a2', 'a3', 'a4']);
    expect(BOARD.ships.carrier.position).toStrictEqual([
      'a0',
      'a1',
      'a2',
      'a3',
      'a4',
    ]);

    BOARD.place_ship('battleship', ['b0', 'b1', 'b2', 'b3']);
    expect(BOARD.ships.battleship.position).toStrictEqual([
      'b0',
      'b1',
      'b2',
      'b3',
    ]);

    BOARD.place_ship('destroyer', ['c0', 'c1', 'c2']);
    expect(BOARD.ships.destroyer.position).toStrictEqual(['c0', 'c1', 'c2']);

    BOARD.place_ship('sub', ['d0', 'd1', 'd2']);
    expect(BOARD.ships.sub.position).toStrictEqual(['d0', 'd1', 'd2']);

    BOARD.place_ship('patrolBoat', ['e0', 'e1']);
    expect(BOARD.ships.patrolBoat.position).toStrictEqual(['e0', 'e1']);
  });

  test('"receive attack" method records hits', () => {
    const BOARD = new Gameboard();
    BOARD.place_ship('carrier', ['a0', 'a1', 'a2', 'a3', 'a4']);
    BOARD.place_ship('battleship', ['b0', 'b1', 'b2', 'b3']);
    BOARD.place_ship('destroyer', ['c0', 'c1', 'c2']);
    BOARD.place_ship('sub', ['d0', 'd1', 'd2']);
    BOARD.place_ship('patrolBoat', ['e0', 'e1']);

    BOARD.receive_attack('a1');
    expect(BOARD.ships.carrier.ship.is_hit(1)).toStrictEqual(true);
    BOARD.receive_attack('a5');
    expect(BOARD.misses.includes('a5')).toStrictEqual(true);
    BOARD.receive_attack('b1');
    expect(BOARD.ships.battleship.ship.is_hit(1)).toStrictEqual(true);
  });

  //todo create tests for seeing if ships are sunk
  test('"all_sunk" method reports correctly', () => {
    const BOARD = new Gameboard();
    const SHIP_POSITIONS = [
      'a0',
      'a1',
      'a2',
      'a3',
      'a4',
      'b0',
      'b1',
      'b2',
      'b3',
      'c0',
      'c1',
      'c2',
      'd0',
      'd1',
      'd2',
      'e0',
      'e1',
    ];
    BOARD.place_ship('carrier', ['a0', 'a1', 'a2', 'a3', 'a4']);
    BOARD.place_ship('battleship', ['b0', 'b1', 'b2', 'b3']);
    BOARD.place_ship('destroyer', ['c0', 'c1', 'c2']);
    BOARD.place_ship('sub', ['d0', 'd1', 'd2']);
    BOARD.place_ship('patrolBoat', ['e0', 'e1']);
    expect(BOARD.all_sunk()).toStrictEqual(false);
    // for (let i = 0; i < SHIP_POSITIONS.length; i++) {
    //   BOARD.receive_attack(SHIP_POSITIONS[i]);
    // }
    // expect(BOARD.all_sunk()).toStrictEqual(true);
  });
});
