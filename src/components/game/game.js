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

  #ai_move(board) {
    const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const RANDOM_LETTER = LETTERS[Math.floor(Math.random() * 10)];
    const RANDOM_NUM = Math.floor(Math.random() * 10);
    const NEW_COORDINATE = `${RANDOM_LETTER}${RANDOM_NUM}`;
    if (this.attacks.includes(NEW_COORDINATE)) {
      this.#ai_move(board);
    } else {
      board.receive_attack(NEW_COORDINATE);
      this.attacks = [...this.attacks, NEW_COORDINATE];
    }
  }
  #human_move(board, input_coordinate) {
    board.receive_attack(input_coordinate);
    this.attacks = this.#attack_reducer(input_coordinate);
  }
  #attack_reducer(input_coordinate) {
    return [...this.attacks, input_coordinate];
  }
  attack(board, input_coordinate) {
    if (this.player === 'human') {
      this.#human_move(board, input_coordinate);
    }
    if (this.player === 'ai') {
      return this.#ai_move(board);
    }
  }
}

export { Ship, Gameboard, Player };
