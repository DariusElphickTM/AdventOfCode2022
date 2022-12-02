//import { getStrategyScore } from '../src/main.js';

const convertPuzzleInputFromStringToArray = (puzzleInput: string): Array<Array<string>> => (puzzleInput.split('\n').map((currentRound) => currentRound.trim().split(' ')));

describe('puzzleInputHelper', () => {
  it('should convert puzzle input from a string to an array', () => {
    const testInput = `A Y
    B X
    C Z`;
    const expectedOutput = [
      ['A', 'Y'],
      ['B', 'X'],
      ['C', 'Z']
    ];

    expect(convertPuzzleInputFromStringToArray(testInput)).toEqual(expectedOutput);
  });
});

describe('getStrategyScore', () => {
  /*it('should return return the correct score for the test payload', () => {
    expect(getStrategyScore(testStrategy)).toBe("Hello World!");
  });*/
});