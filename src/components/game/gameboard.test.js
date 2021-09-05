import Gameboard from './gameboard.js';

describe('gameboard functionality', () => {
  test('"place_ship" method places ships at proper coordinates', () => {
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
    expect(BOARD.ships.carrier.ship.hits[1]).toStrictEqual(true);
    BOARD.receive_attack('a5');
    expect(BOARD.misses.includes('a5')).toStrictEqual(true);
    BOARD.receive_attack('b1');
    expect(BOARD.ships.battleship.ship.hits[1]).toStrictEqual(true);
  });

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

    for (let i = 0; i < SHIP_POSITIONS.length; i++) {
      expect(BOARD.all_sunk()).toStrictEqual(false);
      BOARD.receive_attack(SHIP_POSITIONS[i]);
    }
    expect(BOARD.all_sunk()).toStrictEqual(true);
  });
});
