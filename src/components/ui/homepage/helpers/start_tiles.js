import ITERATOR from './iterator.js';

const START = {
  s: [146, 147, 216, 217, 434, 435, 504, 505],
  t1: [
    162, 163, 232, 233, 302, 303, 372, 373, 442, 443, 512, 513, 582, 583, 652,
    653,
  ],
  a: [
    170, 171, 178, 179, 240, 241, 248, 249, 450, 451, 458, 459, 520, 521, 528,
    529, 590, 591, 598, 599, 660, 661, 668, 669,
  ],
  r: [
    182, 183, 190, 191, 252, 253, 260, 261, 462, 463, 470, 471, 532, 533, 540,
    541, 602, 603, 610, 611, 672, 673, 680, 681,
  ],
  t2: [
    198, 199, 268, 269, 338, 339, 408, 409, 478, 479, 548, 549, 618, 619, 688,
    689,
  ],
  all: [],
};

(function ez_loader() {
  const S = START.s;
  ITERATOR(6, 15, S);
  ITERATOR(76, 85, S);
  ITERATOR(76, 85, S);
  ITERATOR(286, 295, S);
  ITERATOR(356, 365, S);
  ITERATOR(566, 575, S);
  ITERATOR(636, 645, S);

  const T1 = START.t1;
  ITERATOR(18, 27, T1);
  ITERATOR(88, 97, T1);

  const A = START.a;
  ITERATOR(30, 39, A);
  ITERATOR(100, 109, A);
  ITERATOR(310, 319, A);
  ITERATOR(380, 389, A);

  const R = START.r;
  ITERATOR(42, 49, R);
  ITERATOR(112, 119, R);
  ITERATOR(322, 329, R);
  ITERATOR(392, 399, R);

  const T2 = START.t2;
  ITERATOR(54, 63, T2);
  ITERATOR(124, 133, T2);

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
