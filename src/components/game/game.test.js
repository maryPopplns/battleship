import { Ship } from './game.js';

test('invoking hit with an index updates ship.SHIP.hits correctly', () => {
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

//todo make test for isSunk()
