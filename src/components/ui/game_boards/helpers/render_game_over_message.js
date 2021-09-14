export default function render_game_over_message(winner) {
  const MAIN = document.getElementById('game_boards');
  const MESSAGE = document.createElement('div');

  MESSAGE.id = 'winner_message';
  MESSAGE.innerText = winner;
  // todo remove all event listeners.
  // todo add the winner text on screen
  // create button to restart game
  MAIN.append(MESSAGE);
  console.log('game over');
  console.log(document.getElementById('winner_message'));
}
