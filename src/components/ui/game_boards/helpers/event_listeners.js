import { GAME } from '../../../../index.js';
import color_hits_misses from './color_hits_misses.js';
import render_game_over_message from './render_game_over_message.js';

export default function event_listeners() {
  const AI_TILES = Array.from(document.getElementsByClassName('ai_board'));

  const AI_TILE_CLICK_HANDLER = (event) => {
    const ID = event.target.id.slice(3);
    if (
      !GAME.RETURN_MISSES(2).includes(ID) &&
      !GAME.RETURN_HITS(2).includes(ID)
    ) {
      GAME.ATTACK(ID);
      color_hits_misses('player', GAME.RETURN_HITS(1), GAME.RETURN_MISSES(1));
      color_hits_misses('ai', GAME.RETURN_HITS(2), GAME.RETURN_MISSES(2));
      const WINNER = GAME.WINNER();
      if (WINNER !== undefined) {
        AI_TILES.map((tile) => {
          tile.removeEventListener('click', AI_TILE_CLICK_HANDLER);
          tile.removeEventListener('mouseenter', AI_TILE_ENTER_HANDLER);
          tile.removeEventListener('mouseleave', AI_TILE_LEAVE_HANDLER);
          tile.style.cursor = 'crosshair';
        });
        render_game_over_message(WINNER);
      }
    }
  };

  const AI_TILE_ENTER_HANDLER = (event) => {
    const ID = event.target.id.slice(3);
    const HITS = GAME.RETURN_HITS(2);
    const MISSES = GAME.RETURN_MISSES(2);
    const TILE = document.getElementById(`ai_${ID}`);
    if (HITS.includes(ID) || MISSES.includes(ID)) {
      TILE.classList.add('attacked_tile');
    } else {
      TILE.classList.add('ai_board_hover');
    }
  };

  const AI_TILE_LEAVE_HANDLER = (event) => {
    const ID = event.target.id.slice(3);
    const HITS = GAME.RETURN_HITS(2);
    const MISSES = GAME.RETURN_MISSES(2);
    const TILE = document.getElementById(`ai_${ID}`);
    if (HITS.includes(ID) || MISSES.includes(ID)) {
      TILE.classList.remove('attacked_tile');
    } else {
      TILE.classList.remove('ai_board_hover');
    }
  };

  AI_TILES.map((tile) => {
    tile.addEventListener('click', AI_TILE_CLICK_HANDLER);
    tile.addEventListener('mouseenter', AI_TILE_ENTER_HANDLER);
    tile.addEventListener('mouseleave', AI_TILE_LEAVE_HANDLER);
  });
}
