export default function render_tiles() {
  const MAIN = document.createElement('main');
  const HEADING = document.createElement('div');
  const START = document.createElement('div');
  HEADING.id = 'bs_heading';
  START.id = 'start_button';
  for (let i = 0; i < 2800; i++) {
    const TILE = document.createElement('div');
    TILE.addEventListener('click', (e) => {
      e.target.classList.add('dark_gray');
    });
    TILE.addEventListener('dblclick', (e) => {
      e.target.classList.remove('dark_gray');
    });
    TILE.id = i;
    TILE.classList = 'tile water';
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
