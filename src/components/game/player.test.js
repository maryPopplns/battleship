import { expect, describe, test } from '@jest/globals';
import Player from './player.js';
import Gameboard from './gameboard.js';

const MOCK_RECIEVE_ATTACKS = jest.fn();
jest.mock('./gameboard', () => {
  return jest.fn().mockImplementation(() => {
    return { receive_attack: MOCK_RECIEVE_ATTACKS };
  });
});

describe('player functionality', () => {
  test('"attack" method enemy marks board correctly for human player', () => {
    const PLAYER = new Player('human');
    const BOARD = new Gameboard();
    PLAYER.attack(BOARD, 'a1');
    expect(MOCK_RECIEVE_ATTACKS).toHaveBeenCalledWith('a1');
    PLAYER.attack(BOARD, 'a2');
    expect(MOCK_RECIEVE_ATTACKS).toHaveBeenCalledWith('a2');
    expect(MOCK_RECIEVE_ATTACKS).toHaveBeenCalledTimes(2);
  });
});
