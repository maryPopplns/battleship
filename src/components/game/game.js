class Ship {
  #hits = [];
  constructor(length) {
    this.length = length;
  }
  hit(newHit) {
    return [...this.#hits, newHit];
  }
}

export { Ship };
