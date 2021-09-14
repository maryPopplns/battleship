import { GAME } from '../../../../index.js';

export default function event_listeners() {
  const AI_TILES = Array.from(document.getElementsByClassName('ai_board'));
  const AI_TILE_CLICK_HANDLER = (event) => {
    const ID = event.target.id.slice(3);
    GAME.ATTACK(ID);

    // todo render the colors for hit spaces and missed
  };

  AI_TILES.map((tile) => {
    tile.addEventListener('click', AI_TILE_CLICK_HANDLER);
  });
}
