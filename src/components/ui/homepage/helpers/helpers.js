const ITERATOR = (min, max, target_array) => {
  for (let i = min; i < max + 1; i++) {
    target_array.push(i);
  }
};

const EZ_TILE_COLORIZER = (input_array, input_class) => {
  input_array.map((tile_id) => {
    const TILE = document.getElementById(tile_id);
    TILE.classList.remove('water');
    TILE.classList.add('ship');
    TILE.classList.add(input_class);
  });
};

export { ITERATOR, EZ_TILE_COLORIZER };
