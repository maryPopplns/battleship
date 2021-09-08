export default function animations() {
  const PERISCOPE_SPINNER = () => {
    const LEFT_TILE = document.getElementById(759);
    const RIGHT_TILE = document.getElementById(761);
    LEFT_TILE.classList.add('antenna_off');
    RIGHT_TILE.classList.add('antenna_on');
    LEFT_TILE.classList.remove('water');
    RIGHT_TILE.classList.remove('water');
    if (LEFT_TILE.classList.value.includes('on')) {
      LEFT_TILE.classList.add('antenna_off');
      RIGHT_TILE.classList.add('antenna_on');
      LEFT_TILE.classList.remove('antenna_on');
      RIGHT_TILE.classList.remove('antenna_off');
    } else {
      LEFT_TILE.classList.add('antenna_on');
      RIGHT_TILE.classList.add('antenna_off');
      LEFT_TILE.classList.remove('antenna_off');
      RIGHT_TILE.classList.remove('antenna_on');
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

  // const WATER_FLICKER = () => {
  //   const WATER_TILES = Array.from(document.getElementsByClassName('water'));

  // };

  const SUB_ANIMATION = setInterval(PERISCOPE_SPINNER, 1000);
  const BOAT1 = setInterval(RADAR_SPINNER1, 1000);
  const BOAT2 = setInterval(RADAR_SPINNER2, 1500);
  // const WATER = setInterval(WATER_FLICKER, 500);

  return { SUB_ANIMATION, BOAT1, BOAT2 };
}
