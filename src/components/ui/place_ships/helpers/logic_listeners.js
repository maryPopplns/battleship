export default function logic_listeners() {
  let current_ship = 0;
  let orientation = 'horizontal';
  const SHIPS = ['carrier', 'battleship', 'destroyer', 'sub', 'patrolBoat'];
  const LENGTH = [5, 4, 3, 3, 2];

  const SUBSEQUENT_TILES = (id, current_ship, orientation) => {
    console.log(id, current_ship, orientation);
  };

  const MOUSE_ENTER_HANDLER = (event) => {
    const ID = event.target.id;
    event.target.classList.add('place_ship_hovered');
    SUBSEQUENT_TILES(ID, current_ship, orientation);
  };
  const MOUSE_LEAVE_HANDLER = () => {
    const HOVERED_TILES = Array.from(
      document.getElementsByClassName('place_ship_hovered')
    );
    HOVERED_TILES.map((tile) => {
      tile.classList.remove('place_ship_hovered');
    });
  };
  const MOUSE_CLICK_HANDLER = () => {
    current_ship = current_ship + 1;
  };

  const TILES = Array.from(document.getElementsByClassName('place_ship_tile'));
  TILES.map((tile) => {
    tile.addEventListener('mouseenter', MOUSE_ENTER_HANDLER);
    tile.addEventListener('mouseleave', MOUSE_LEAVE_HANDLER);
    tile.addEventListener('click', MOUSE_CLICK_HANDLER);
  });
}
