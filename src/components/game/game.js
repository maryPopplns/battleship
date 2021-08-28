class Ship {
  constructor(length) {
    this.hits = new Array(length).fill(false);
  }

  #hitReducer(hits_array, position_hit) {
    const HITS = [...hits_array];
    HITS[position_hit] = true;
    return HITS;
  }
  hit(position_hit) {
    this.hits = this.#hitReducer(this.hits, position_hit);
  }
  is_sunk() {
    const is_sunk = this.hits.every((position) => position === true);
    return is_sunk;
  }
}

export { Ship };
