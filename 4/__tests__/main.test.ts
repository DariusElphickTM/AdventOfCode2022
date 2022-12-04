//import { helloWorld } from '../src/main.js';

const testInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

//const puzzleInput = ``;

const convertTestInputToArrayOfElfPairs = (input: string): Array<Array<Array<number>>> => {
  return input.split('\n').map(
    (elfPair) => (
      elfPair.split(',').map(
        (elfSection) => (
          elfSection.split('-').map(
            (digitAsString) => (+digitAsString)
          )
        )
      )
    )
  );
};

describe('convertTestInputTo...', () => {
  it('should convert the test input into an array of elf pairs', () => {
    const expectedOutput = [
      [
        [2, 4],
        [6, 8]
      ],
      [
        [2, 3],
        [4, 5]
      ],
      [
        [5, 7],
        [7, 9]
      ],
      [
        [2, 8],
        [3, 7]
      ],
      [
        [6, 6],
        [4, 6]
      ],
      [
        [2, 6],
        [4, 8]
      ]
    ];

    expect(convertTestInputToArrayOfElfPairs(testInput)).toEqual(expectedOutput);
  });
});