import { ITERATOR } from './helpers.js';

const START = {
  s: [221, 222, 437, 438],
  t1: [234, 235, 304, 305, 374, 375, 444, 445, 514, 515, 584, 585],
  a: [
    241, 242, 247, 248, 451, 452, 457, 458, 521, 522, 527, 528, 591, 592, 597,
    598,
  ],
  r: [
    251, 252, 257, 258, 461, 462, 467, 468, 531, 532, 537, 538, 601, 602, 607,
    608,
  ],
  t2: [264, 265, 334, 335, 404, 405, 474, 475, 544, 545, 614, 615],
  all: [],
};

(function ez_loader() {
  const S = START.s;
  ITERATOR(81, 88, S);
  ITERATOR(151, 158, S);
  ITERATOR(291, 298, S);
  ITERATOR(361, 368, S);
  ITERATOR(501, 508, S);
  ITERATOR(571, 578, S);

  const T1 = START.t1;
  ITERATOR(91, 98, T1);
  ITERATOR(161, 168, T1);

  const A = START.a;
  ITERATOR(101, 108, A);
  ITERATOR(171, 178, A);
  ITERATOR(311, 318, A);
  ITERATOR(381, 388, A);

  const R = START.r;
  ITERATOR(111, 116, R);
  ITERATOR(181, 186, R);
  ITERATOR(321, 326, R);
  ITERATOR(391, 396, R);

  const T2 = START.t2;
  ITERATOR(121, 128, T2);
  ITERATOR(191, 198, T2);

  for (let letter in START) {
    if (letter === 'all') {
      break;
    }
    START[letter].map((number) => {
      START.all.push(number);
    });
  }
})();
export default START;
