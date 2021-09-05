import { expect, describe, test } from '@jest/globals';
import Player from './player.js';
import Gameboard from './gameboard.js';

const MOCK_RECIEVE_ATTACKS = jest.fn();
jest.mock('./gameboard', () => {
  return jest.fn().mockImplementation(() => {
    return { receive_attack: MOCK_RECIEVE_ATTACKS };
  });
});
