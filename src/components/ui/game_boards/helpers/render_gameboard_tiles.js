import COORDINATES from '../../../helpers/coordinates.js';

export default function render_gameboard_tiles() {
  const MAIN = document.getElementById('game_boards');
  const PLAYER_BOARD = document.createElement('div');
  const AI_BOARD = document.createElement('div');

  PLAYER_BOARD.classList.add('game_board');
  AI_BOARD.classList.add('game_board');
  PLAYER_BOARD.id = 'player_board';
  AI_BOARD.id = 'ai_board';
  for (let i = 0; i < 100; i++) {
    const PLAYER_BOARD_TILE = document.createElement('div');
    const AI_BOARD_TILE = document.createElement('div');

    PLAYER_BOARD_TILE.classList.add('game_board_tile');
    PLAYER_BOARD_TILE.classList.add('player_board');
    PLAYER_BOARD_TILE.id = `player_${COORDINATES[i]}`;
    AI_BOARD_TILE.classList.add('game_board_tile');
    AI_BOARD_TILE.classList.add('ai_board');
    AI_BOARD_TILE.id = `ai_${COORDINATES[i]}`;

    PLAYER_BOARD.append(PLAYER_BOARD_TILE);
    AI_BOARD.append(AI_BOARD_TILE);
  }

  MAIN.append(PLAYER_BOARD);
  MAIN.append(AI_BOARD);
}
