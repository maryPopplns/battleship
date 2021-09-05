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
    try {
      if (this.player === 'ai') {
        //todo get one of the coordinates from the remaining moves
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
