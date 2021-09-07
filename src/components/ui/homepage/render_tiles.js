export default function render_tiles() {
  const MAIN = document.createElement('main');
  const HEADING = document.createElement('div');
  const START = document.createElement('div');
  HEADING.id = 'bs_heading';
  START.id = 'start_button';
  for (let i = 0; i < 2800; i++) {
    const TILE = document.createElement('div');
    TILE.addEventListener('click', (e) => {
      e.target.style.backgroundColor = 'red';
    });
    TILE.addEventListener('dblclick', (e) => {
      e.target.style.backgroundColor = 'rgb(60, 86, 150)';
    });
    TILE.id = i;
    TILE.classList = 'tile';
    HEADING.append(TILE);
  }
  for (let i = 0; i < 700; i++) {
    const TILE = document.createElement('div');
    TILE.addEventListener('click', (e) => {
      e.target.style.backgroundColor = 'red';
    });
    TILE.addEventListener('dblclick', (e) => {
      e.target.style.backgroundColor = 'rgb(185, 124, 185)';
    });
    TILE.id = `start_${i}`;
    TILE.classList = 'tile start';
    START.append(TILE);
  }
  MAIN.append(HEADING);
  MAIN.append(START);
  document.body.append(MAIN);
}
