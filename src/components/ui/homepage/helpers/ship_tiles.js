import ITERATOR from './iterator.js';

const CARRIER = {
  hull_outline: [
    2617, 2546, 2475, 2404, 2334, 2333, 2332, 2262, 2261, 2260, 2309, 2379,
    2248, 2517, 2586, 2656,
  ],
};

(function ez_loader() {
  const OUTLINE = CARRIER.hull_outline;
  ITERATOR(2190, 2239, OUTLINE);
})();

export { CARRIER };
