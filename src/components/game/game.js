class Ship {
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
    const is_sunk = this.hits.every((position) => position === true);
    return is_sunk;
  }
}

class Gameboard {
  ships = {
    carrier: {
      position: [],
      ship: new Ship(5),
    },
    battleship: {
      position: [],
      ship: new Ship(4),
    },
    destroyer: {
      position: [],
      ship: new Ship(3),
    },
    sub: {
      position: [],
      ship: new Ship(3),
    },
    patrolBoat: {
      position: [],
      ship: new Ship(2),
    },
  };
  misses = [];

  place_ship(ship, input_coordinate) {
    this.ships[ship].position = input_coordinate;
  }
  #miss_reducer(input_coordinate) {
    return [...this.misses, input_coordinate];
  }
  receive_attack(input_coordinate) {
    let miss = true;
    for (let ship in this.ships) {
      const WAS_HIT = this.ships[ship].position.includes(input_coordinate);
      if (WAS_HIT) {
        const HIT_INDEX = this.ships[ship].position.indexOf(input_coordinate);
        this.ships[ship].ship.hit(HIT_INDEX);
        miss = false;
      }
    }
    if (miss) {
      this.misses = this.#miss_reducer(input_coordinate);
    }
  }
  all_sunk() {
    let all_sunk = true;
    for (let ship in this.ships) {
      const all_sunk_call = this.ships[ship].ship.is_sunk();
      if (all_sunk_call === false) {
        all_sunk = false;
        break;
      }
    }
    return all_sunk;
  }
}

class Player {
  constructor(player) {
    this.player = player;
  }
  attacks = [];
  #attack_reducer(input_coordinate) {
    return [...this.attacks, input_coordinate];
  }
  attack(board, input_coordinate) {
    if (!this.attacks.includes(input_coordinate) && this.player === 'human') {
      board.receive_attack(input_coordinate);
      this.attacks = this.#attack_reducer(input_coordinate);
    }
  }
}

export { Ship, Gameboard, Player };
