export default class Player {
  constructor(player) {
    this.player = player;
  }
  attacks = [];

  #attack_reducer(input_coordinate) {
    return [...this.attacks, input_coordinate];
  }
  ai_attack(board) {
    const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const RANDOM_LETTER = LETTERS[Math.floor(Math.random() * 10)];
    const RANDOM_NUM = Math.floor(Math.random() * 10);
    const NEW_COORDINATE = `${RANDOM_LETTER}${RANDOM_NUM}`;
    if (this.attacks.includes(NEW_COORDINATE)) {
      this.ai_move(board);
    } else {
      return NEW_COORDINATE;
    }
  }
  human_attack(board, coordinate) {
    if (this.player === 'human') {
      this.attacks = this.#attack_reducer(coordinate);
      board.receive_attack(coordinate);
      return coordinate;
    }
  }
}
