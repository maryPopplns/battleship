import { Ship } from './game.js';

test('contains method named "hit"', () => {
  expect(Ship()).toHaveProperty('HIT');
});

test.skip('"hit" method returns new Array', () => {
  expect(Ship().hit(1)).toStrictEqual([1]);
});
