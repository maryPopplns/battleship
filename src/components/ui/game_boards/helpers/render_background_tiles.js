export default function render_background_tiles() {
  const MAIN = document.createElement('main');
  const CLASSES = [
    'blue1',
    'blue2',
    'blue3',
    'blue4',
    'blue5',
    'blue6',
    'blue7',
    'blue8',
    'blue9',
    'blue10',
    'green1',
  ];
  MAIN.id = 'game_boards';

  for (let i = 0; i < 3500; i++) {
    const RANDOM_NUMBER = Math.floor(Math.random() * 11);
    const TILE = document.createElement('div');
    TILE.classList.add('gameboards_background');
    TILE.classList.add(CLASSES[RANDOM_NUMBER]);
    MAIN.append(TILE);
  }

  document.body.append(MAIN);
}
