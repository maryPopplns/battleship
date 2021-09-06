export default class Ship {
  constructor(length) {
    this.hits = new Array(length).fill(false);
  }

  #hit_reducer(hits_array, position_hit) {
    const HITS = [...hits_array];
    HITS[position_hit] = true;
    return HITS;
  }
  hit(position_hit) {
    this.hits = this.#hit_reducer(this.hits, position_hit);
  }
  is_sunk() {
    return this.hits.every((position) => position === true);
  }
}
