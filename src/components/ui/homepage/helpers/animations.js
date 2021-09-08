export default function animations() {
  const LEFT_TILE = document.getElementById(759);
  const RIGHT_TILE = document.getElementById(761);
  LEFT_TILE.classList.remove('water');
  LEFT_TILE.classList.add('antenna_off');
  RIGHT_TILE.classList.remove('water');
  RIGHT_TILE.classList.add('antenna_on');
  const PERISCOPE_SPINNER = () => {
    if (LEFT_TILE.classList.value.includes('on')) {
      LEFT_TILE.classList.remove('antenna_on');
      LEFT_TILE.classList.add('antenna_off');
      RIGHT_TILE.classList.remove('antenna_off');
      RIGHT_TILE.classList.add('antenna_on');
    } else {
      LEFT_TILE.classList.remove('antenna_off');
      LEFT_TILE.classList.add('antenna_on');
      RIGHT_TILE.classList.remove('antenna_on');
      RIGHT_TILE.classList.add('antenna_off');
    }
  };
  const RADAR_SPINNER1 = () => {
    const LEFT_TILE = document.getElementById(714);
    const RIGHT_TILE = document.getElementById(716);
  };
  const SUB_ANIMATION = setInterval(PERISCOPE_SPINNER, 1000);
  const BOAT1 = setInterval(RADAR_SPINNER1, 1000);
}
