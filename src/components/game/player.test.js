import Player from './player.js';
import Gameboard from './gameboard.js';

const MOCK_RECIEVE_ATTACKS = jest.fn();
jest.mock('./gameboard', () => {
  return jest.fn().mockImplementation(() => {
    return { receive_attack: MOCK_RECIEVE_ATTACKS };
  });
});

describe('player functionality', () => {
  beforeEach(() => {
    MOCK_RECIEVE_ATTACKS.mockClear();
    Gameboard.mockClear();
  });
  test('"attack" method enemy marks board correctly for human player', () => {
    const PLAYER = new Player('human');
    const BOARD = new Gameboard();
    const FIRST_ATTACK = PLAYER.human_attack(BOARD, 'a1');
    const SECOND_ATTACK = PLAYER.human_attack(BOARD, 'a2');
    expect(MOCK_RECIEVE_ATTACKS).toHaveBeenCalledTimes(2);
    expect(FIRST_ATTACK).toMatch('a1');
    expect(SECOND_ATTACK).toMatch('a2');
  });
  test('"attack" method enemy marks board correctly for ai player', () => {
    const PLAYER = new Player('ai');
    const BOARD = new Gameboard();
    const FIRST_ATTACK = PLAYER.ai_attack(BOARD);
    const SECOND_ATTACK = PLAYER.ai_attack(BOARD);
    expect(MOCK_RECIEVE_ATTACKS).toHaveBeenCalledTimes(2);
    expect(FIRST_ATTACK).toMatch(/[a-j][0-9]/);
    expect(SECOND_ATTACK).toMatch(/[a-j][0-9]/);
  });
  test('human cant use ai_attack', () => {
    const PLAYER = new Player('human');
    expect(PLAYER.ai_attack()).toThrow();
  });
  test('ai cant use human_attack', () => {
    const PLAYER = new Player('ai');
    expect(PLAYER.human_attack()).toThrow();
  });
});
