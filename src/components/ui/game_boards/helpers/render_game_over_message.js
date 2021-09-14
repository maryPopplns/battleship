export default function render_game_over_message(winner) {
  const MAIN = document.getElementById('game_boards');
  const MESSAGE = document.createElement('div');

  MESSAGE.classList.add('winner_message');
  MESSAGE.innerText = winner;
  MAIN.append(MESSAGE);

  const MESSAGE_MOUSE_ENTER_HANDLER = () => {
    MESSAGE.innerText = 'NEW GAME';
    MESSAGE.classList.add('winner_message_highlighted');
  };

  const MESSAGE_MOUSE_LEAVE_HANDLER = () => {
    MESSAGE.innerText = winner;
    MESSAGE.classList.remove('winner_message_highlighted');
  };

  const MESSAGE_CLICK_HANDLER = () => {
    location.reload();
  };

  MESSAGE.addEventListener('mouseenter', MESSAGE_MOUSE_ENTER_HANDLER);
  MESSAGE.addEventListener('mouseleave', MESSAGE_MOUSE_LEAVE_HANDLER);
  MESSAGE.addEventListener('click', MESSAGE_CLICK_HANDLER);
}
