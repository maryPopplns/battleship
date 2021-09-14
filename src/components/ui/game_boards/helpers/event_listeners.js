import { GAME } from '../../../../index.js';
import color_hits_misses from './color_hits_misses.js';

export default function event_listeners() {
  const AI_TILES = Array.from(document.getElementsByClassName('ai_board'));
  const AI_TILE_CLICK_HANDLER = (event) => {
    const ID = event.target.id.slice(3);
    GAME.ATTACK(ID);

    const PLAYER1_HITS = GAME.RETURN_HITS(1);
    const PLAYER1_MISSES = GAME.RETURN_MISSES(1);
    const PLAYER2_HITS = GAME.RETURN_HITS(2);
    const PLAYER2_MISSES = GAME.RETURN_MISSES(2);

    color_hits_misses('player', PLAYER1_HITS, PLAYER1_MISSES);
    color_hits_misses('ai', PLAYER2_HITS, PLAYER2_MISSES);
    // todo render the colors for hit spaces and missed
  };

  AI_TILES.map((tile) => {
    tile.addEventListener('click', AI_TILE_CLICK_HANDLER);
  });
}
