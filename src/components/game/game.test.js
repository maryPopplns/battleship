import { Ship } from './game.js';

describe('ship functionality', () => {
  test('invoking Ships "hit" method with an index updates hits', () => {
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

  test('Ships "is_sunk" method return the correct answer', () => {
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
