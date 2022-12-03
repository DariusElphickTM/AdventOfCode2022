import { helloWorld } from '../src/main.js';

const testInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const convertTestInputToArrayOfBags = (input: string): Array<Array<string>> => {
  return input.split('\n').map((currentBagContents) => {
    const middleIndex = currentBagContents.length / 2;
    return [
      currentBagContents.slice(0, middleIndex), 
      currentBagContents.slice(middleIndex)
    ]
  });
}

describe('convertTestInputToArrayOfBags', () => {
  it('should convert the test input into an array of compartmentalised bags', () => {
    const expectedOutput = [
      [
        'vJrwpWtwJgWr',
        'hcsFMMfFFhFp'
      ],
      [
        'jqHRNqRjqzjGDLGL',
        'rsFMfFZSrLrFZsSL'
      ],
      [
        'PmmdzqPrV',
        'vPwwTWBwg'
      ],
      [
        'wMqvLMZHhHMvwLH',
        'jbvcjnnSBnvTQFn'
      ],
      [
        'ttgJtRGJ',
        'QctTZtZT'
      ],
      [
        'CrZsJsPPZsGz',
        'wwsLwLmpwMDw'
      ]
    ];

    expect(convertTestInputToArrayOfBags(testInput)).toEqual(expectedOutput);

  });
})

describe('Hello world', () => {
  it('should return Hello World', () => {
    expect(helloWorld()).toBe("Hello World!");
  });
});