export default function render_tiles() {
  const MAIN = document.createElement('main');
  const HEADING = document.createElement('div');
  const START = document.createElement('div');
  MAIN.id = 'landing_page';
  HEADING.id = 'bs_heading';
  START.id = 'start_button';
  for (let i = 0; i < 2800; i++) {
    const TILE = document.createElement('div');
    TILE.id = i;
    TILE.classList = 'homepeage_tile water';
    HEADING.append(TILE);
  }
  for (let i = 0; i < 700; i++) {
    const TILE = document.createElement('div');
    TILE.id = `start_${i}`;
    TILE.classList = 'tile start start_background';
    START.append(TILE);
  }
  MAIN.append(HEADING);
  MAIN.append(START);
  document.body.append(MAIN);
}
