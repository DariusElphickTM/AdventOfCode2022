import { getTopBlocks } from '../src/main.js';

const testInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

//const puzzleInput = ``;

const getStacksFromInput = (input: string): Array<Array<string>> => {
  const inputArray = input.substring(0, input.indexOf('1') - 2).split('\n').reverse();
  const outputArray = [...inputArray[0].matchAll(new RegExp(/\[[A-Z]\]/, 'g'))].map(
    (currentStack) => ([currentStack[0]])
  );

  for(let i = 1; i < inputArray.length; i++) {
    const currentStackLevel = inputArray[i];
    for(let j = 0; j * 4 < currentStackLevel.length; j += 1) {
      const stringPosition = j * 4;
      const isThereABlockHere = currentStackLevel.substring(stringPosition, stringPosition + 3).match(new RegExp(/\[[A-Z]\]/));
      if(isThereABlockHere !== null) {
        outputArray[j].push(isThereABlockHere[0]);
      }
    }
  }
  return outputArray;
};

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

describe('getStacksFromInput', () => {
  it('should return a set of stacks ad a data structure', () => {
    const expectedOutput = [
      ['[Z]', '[N]'],
      ['[M]', '[C]', '[D]'],
      ['[P]']
    ];
    expect(getStacksFromInput(testInput)).toEqual(expectedOutput);
  });
});

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

describe('moveBlocks', () => {
  it('should move the blocks correctly for the test input', () => {
    expect(getTopBlocks(getStacksFromInput(testInput), getMovesFromInput(testInput))).toEqual(
      ['[C]', '[M]', '[Z]']
    );
  });
})