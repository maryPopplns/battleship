import { Ship } from './game.js';

test('contains method named "hit"', () => {
  expect(new Ship()).toHaveProperty('hit');
});

test('Ship method "hit"', () => {
  expect(new Ship()).toHaveProperty('hits');
});
