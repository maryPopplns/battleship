export default class Player {
  constructor(player) {
    this.player = player;
  }
  moves = [];
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
  #ai_move() {
    return this.remaining_moves[
      Math.floor(Math.random() * this.remaining_moves.length)
    ];
  }
  #filter_remaining_moves(coordinate) {
    const REMAINING_MOVES_COPY = [...this.remaining_moves];
    const REMAINING = REMAINING_MOVES_COPY.filter((remaining_move) => {
      return remaining_move !== coordinate;
    });
    return REMAINING;
  }
  #attack_reducer(input_coordinate) {
    return [...this.moves, input_coordinate];
  }
  ai_attack(board) {
    if (this.player !== 'ai') {
      throw new Error('Player needs to be AI');
    }
    const COORDINATE = this.#ai_move();
    this.remaining_moves = this.#filter_remaining_moves(COORDINATE);
    this.moves = this.#attack_reducer(COORDINATE);
    board.receive_attack(COORDINATE);
    return COORDINATE;
  }
  human_attack(board, coordinate) {
    if (this.player !== 'human') {
      throw new Error('Player needs to be a human');
    }
    const FILTERED_MOVES = this.#filter_remaining_moves(coordinate);
    this.remaining_moves = FILTERED_MOVES;
    this.moves = this.#attack_reducer(coordinate);
    board.receive_attack(coordinate);
    return coordinate;
  }
}
