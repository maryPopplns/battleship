import Ship from './ship.js';

export default class Gameboard {
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

  place_ship(ship, input_coordinates) {
    this.ships[ship].position = input_coordinates;
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
    let is_all_sunk = true;
    for (let ship in this.ships) {
      const all_sunk_call = this.ships[ship].ship.is_sunk();
      if (all_sunk_call === false) {
        is_all_sunk = false;
        break;
      }
    }
    return is_all_sunk;
  }
}
