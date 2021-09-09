import { ANIMATIONS } from './animations.js';

export default function listeners_handlers() {
  const START_BUTTON = document.getElementById('start_button');

  const START_BUTTON_ENTER_HANDLER = () => {
    const START_BUTTON_BACKGROUND_TILES = Array.from(
      document.getElementsByClassName('start_background')
    );
    START_BUTTON_BACKGROUND_TILES.map((tile) => {
      tile.classList.add('start_background_hovered');
      tile.classList.remove('start_background');
    });

    const START_BUTTON_TEXT_TILES = Array.from(
      document.getElementsByClassName('start_text')
    );
    START_BUTTON_TEXT_TILES.map((tile) => {
      tile.classList.add('start_text_hovered');
      tile.classList.remove('start_text');
    });
  };

  const START_BUTTON_LEAVE_HANDLER = () => {
    const START_BUTTON_BACKGROUND_TILES = Array.from(
      document.getElementsByClassName('start_background_hovered')
    );
    START_BUTTON_BACKGROUND_TILES.map((tile) => {
      tile.classList.add('start_background');
      tile.classList.remove('start_background_hovered');
    });
    const START_BUTTON_TEXT_TILES = Array.from(
      document.getElementsByClassName('start_text_hovered')
    );
    START_BUTTON_TEXT_TILES.map((tile) => {
      tile.classList.add('start_text');
      tile.classList.remove('start_text_hovered');
    });
  };
  const START_BUTTON_CLICK_HANDLER = () => {
    for (let interval in ANIMATIONS) {
      const INTERVAL = ANIMATIONS[interval];
      clearInterval(INTERVAL);
    }
    document.getElementById('landing_page').remove();
    //todo render place_ship
    // MAKE NEW BRANCH
  };

  START_BUTTON.addEventListener('mouseenter', START_BUTTON_ENTER_HANDLER);
  START_BUTTON.addEventListener('mouseleave', START_BUTTON_LEAVE_HANDLER);
  START_BUTTON.addEventListener('click', START_BUTTON_CLICK_HANDLER);
}
