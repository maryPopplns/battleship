import { Ship } from './game.js';

test('contains method named "hit"', () => {
  expect(new Ship()).toHaveProperty('hit');
});

test('method "hit" adds hit to our datastructure', () => {
  expect(new Ship().hit(1)).toBe([1]);
});
