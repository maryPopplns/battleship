import { Ship } from './game.js';

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
});

describe('game_board functionality', () => {
  test('board places ships at proper coordinates', () => {
    const BOARD = new Gameboard();
    BOARD.place_ship('carrier', ['a0', 'a2', 'a3', 'a4', 'a5']);
    expect(BOARD.ships.carrier.position).toStrictEqual([
      'a0',
      'a2',
      'a3',
      'a4',
      'a5',
    ]);

    BOARD.place_ship('battleship', ['b0', 'b2', 'b3', 'b4']);
    expect(BOARD.ships.carrier.position).toStrictEqual([
      'b0',
      'b2',
      'b3',
      'b4',
    ]);
  });
});
