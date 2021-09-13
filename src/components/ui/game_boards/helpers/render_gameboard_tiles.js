import COORDINATES from '../../../helpers/coordinates.js';

export default function render_gameboard_tiles() {
  const MAIN = document.getElementById('game_boards');
  const BOARD_CONTAINER = document.createElement('div');
  const PLAYER_BOARD = document.createElement('div');
  const AI_BOARD = document.createElement('div');

  PLAYER_BOARD.classList.add('game_board');
  AI_BOARD.classList.add('game_board');
  BOARD_CONTAINER.id = 'board_container';
  PLAYER_BOARD.id = 'player_board';
  AI_BOARD.id = 'ai_board';
  for (let i = 0; i < 100; i++) {
    const PLAYER_BOARD_TILE = document.createElement('div');
    const AI_BOARD_TILE = document.createElement('div');

    PLAYER_BOARD_TILE.classList.add('game_board_tile');
    AI_BOARD_TILE.classList.add('game_board_tile');
    PLAYER_BOARD_TILE.setAttribute('data-player-board', COORDINATES[i]);
    AI_BOARD_TILE.setAttribute('data-ai-board', COORDINATES[i]);

    PLAYER_BOARD.append(PLAYER_BOARD_TILE);
    AI_BOARD.append(AI_BOARD_TILE);
  }

  BOARD_CONTAINER.append(PLAYER_BOARD);
  BOARD_CONTAINER.append(AI_BOARD);
  MAIN.append(BOARD_CONTAINER);
}
