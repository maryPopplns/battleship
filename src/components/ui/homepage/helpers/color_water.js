export default function color_water() {
  const CLASSES = ['blue1', 'blue2', 'blue3', 'blue4', 'blue5'];
  const WATER_TILES = Array.from(document.getElementsByClassName('water'));
  WATER_TILES.map((tile) => {
    const RANDOM_NUMBER = Math.floor(Math.random() * 5);
    tile.classList.add(CLASSES[RANDOM_NUMBER]);
  });
}
