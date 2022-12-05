//import { helloWorld } from '../src/main.js';

const testInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

//const puzzleInput = ``;

const getMovesFromInput = (input: string): Array<Array<number>> => (
  [...input.matchAll(new RegExp(/move \d from \d to \d/, 'g'))].map(
    (currentMove) => (
      [...currentMove[0].matchAll(new RegExp(/\d/, 'g'))].map(
        (currentDigit) => (
          +currentDigit[0]
        )
      )
    )
  )
);

describe('getMovesFromInput', () => {
  it('should return a set of moves as a data structure', () => {
    const expectedOutput = [
      [1,2,1],
      [3,1,3],
      [2,2,1],
      [1,1,2]
    ];
    expect(getMovesFromInput(testInput)).toEqual(expectedOutput);
  });
});