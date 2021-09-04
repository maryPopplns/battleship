import { Ship } from './ship.js';
import { describe, expect, test } from '@jest/globals';

describe('ship functionality', () => {
  test('"hit" method with an index updates storage correctly', () => {
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

  test('"is_sunk" method returns the correct state', () => {
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
