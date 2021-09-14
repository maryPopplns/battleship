import './index.css';
import gameloop from './game/game_loop.js';
import homepage from './components/ui/homepage/homepage.js';

const GAME = gameloop();
homepage();

export { GAME };
