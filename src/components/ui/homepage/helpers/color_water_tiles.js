export default function color_water_tiles() {
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
  const WATER_TILES = Array.from(document.getElementsByClassName('water'));
  WATER_TILES.map((tile) => {
    const RANDOM_NUMBER = Math.floor(Math.random() * 11);
    tile.classList.add(CLASSES[RANDOM_NUMBER]);
  });
}
