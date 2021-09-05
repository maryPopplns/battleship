export default class Player {
  constructor(player) {
    this.player = player;
  }
  attacks = [];
  remaining_moves = [];

  #remaining_moves_reducer(coordinate) {
    this.remaining_moves = [...this.remaining_moves, coordinate];
  }
  #fill_remaining_moves = (() => {
    const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    LETTERS.map((letter) => {
      for (let i = 0; i < 10; i++) {
        this.#remaining_moves_reducer(`${letter}${i}`);
      }
    });
  })();
  #attack_reducer(input_coordinate) {
    return [...this.attacks, input_coordinate];
  }
  ai_attack(board) {
    try {
      if (this.player === 'ai') {
        //todo get one of the coordinates from the remaining moves
        //filter that value out of the current
        this.attacks = this.#attack_reducer(coordinate);
        board.receive_attack(coordinate);
        return coordinate;
      } else {
        throw new Error('Player needs to be AI');
      }
    } catch (error) {
      console.log(error);
    }
  }
  human_attack(board, coordinate) {
    try {
      if (this.player === 'human') {
        this.attacks = this.#attack_reducer(coordinate);
        board.receive_attack(coordinate);
        return coordinate;
      } else {
        throw new Error('Player needs to be a human');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
