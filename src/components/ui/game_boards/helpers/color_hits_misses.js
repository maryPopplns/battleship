export default function color_hits_misses(player, hits, misses) {
  hits.map((coordinate) => {
    const TILE = document.getElementById(`${player}_${coordinate}`);
    TILE.classList.add(`${player}_hit`);
  });

  misses.map((coordinate) => {
    const TILE = document.getElementById(`${player}_${coordinate}`);
    TILE.classList.add(`${player}_miss`);
  });
}
