const ANIMATIONS = (() => {
  const PERISCOPE_SPINNER = () => {
    const LEFT_TILE = document.getElementById(759);
    const RIGHT_TILE = document.getElementById(761);
    LEFT_TILE.classList.add('periscope_off');
    RIGHT_TILE.classList.add('periscope_on');
    LEFT_TILE.classList.remove('water');
    RIGHT_TILE.classList.remove('water');
    if (LEFT_TILE.classList.value.includes('on')) {
      LEFT_TILE.classList.add('periscope_off');
      RIGHT_TILE.classList.add('periscope_on');
      LEFT_TILE.classList.remove('periscope_on');
      RIGHT_TILE.classList.remove('periscope_off');
    } else {
      LEFT_TILE.classList.add('periscope_on');
      RIGHT_TILE.classList.add('periscope_off');
      LEFT_TILE.classList.remove('periscope_off');
      RIGHT_TILE.classList.remove('periscope_on');
    }
  };

  const RADAR_SPINNER1 = () => {
    const LEFT_TILE = document.getElementById(714);
    const RIGHT_TILE = document.getElementById(716);
    LEFT_TILE.classList.add('radar_off');
    RIGHT_TILE.classList.add('radar_off');
    LEFT_TILE.classList.remove('water');
    RIGHT_TILE.classList.remove('water');
    if (LEFT_TILE.classList.value.includes('on')) {
      LEFT_TILE.classList.add('radar_off');
      RIGHT_TILE.classList.add('radar_off');
      LEFT_TILE.classList.remove('radar_on');
      RIGHT_TILE.classList.remove('radar_on');
    } else {
      LEFT_TILE.classList.add('radar_on');
      RIGHT_TILE.classList.add('radar_on');
      LEFT_TILE.classList.remove('radar_off');
      RIGHT_TILE.classList.remove('radar_off');
    }
  };

  const RADAR_SPINNER2 = () => {
    const LEFT_TILE = document.getElementById(1097);
    const RIGHT_TILE = document.getElementById(1099);
    LEFT_TILE.classList.add('radar_off');
    RIGHT_TILE.classList.add('radar_off');
    LEFT_TILE.classList.remove('water');
    RIGHT_TILE.classList.remove('water');
    if (LEFT_TILE.classList.value.includes('on')) {
      LEFT_TILE.classList.add('radar_off');
      RIGHT_TILE.classList.add('radar_off');
      LEFT_TILE.classList.remove('radar_on');
      RIGHT_TILE.classList.remove('radar_on');
    } else {
      LEFT_TILE.classList.add('radar_on');
      RIGHT_TILE.classList.add('radar_on');
      LEFT_TILE.classList.remove('radar_off');
      RIGHT_TILE.classList.remove('radar_off');
    }
  };

  const WATER_ANIMATION = () => {
    const WATER_TILES = Array.from(document.getElementsByClassName('water'));
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
    WATER_TILES.map((tile) => {
      const RANDOM_NUMBER = Math.floor(Math.random() * 11);
      tile.classList = `homepeage_tile water ${CLASSES[RANDOM_NUMBER]}`;
    });
  };

  const SUB_ANIMATION = setInterval(PERISCOPE_SPINNER, 1000);
  const BOAT1 = setInterval(RADAR_SPINNER1, 1000);
  const BOAT2 = setInterval(RADAR_SPINNER2, 1500);
  const WATER = setInterval(WATER_ANIMATION, 1000);

  return { SUB_ANIMATION, BOAT1, BOAT2, WATER };
})();

export { ANIMATIONS };
