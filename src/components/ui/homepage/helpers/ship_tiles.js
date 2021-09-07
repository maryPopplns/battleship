import ITERATOR from './iterator.js';

const CARRIER = {
  hull_outline: [
    2617, 2546, 2475, 2404, 2334, 2333, 2332, 2262, 2261, 2260, 2309, 2379,
    2448, 2517, 2586, 2656,
  ],
  hull: [],
};

(function ez_loader() {
  const OUTLINE = CARRIER.hull_outline;
  ITERATOR(2190, 2239, OUTLINE);

  const HULL = CARRIER.hull;
  ITERATOR(2263, 2308, HULL);
  ITERATOR(2335, 2378, HULL);
  ITERATOR(2405, 2447, HULL);
  ITERATOR(2476, 2516, HULL);
  ITERATOR(2547, 2585, HULL);
  ITERATOR(2618, 2655, HULL);
})();

export { CARRIER };
