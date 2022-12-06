const getTopBlocks = (initialStacks: Array<Array<string>>, moves: Array<Array<number>>): Array<string> => {
    const workingStacks = [...initialStacks];
    moves.forEach(move => {
        for(let i = 0; i < move[0]; i++) {
            const block = workingStacks[move[1] - 1].pop();
            workingStacks[move[2] - 1].push(block);
        }
    });
    return workingStacks.map((stack) => (stack.pop()));
};

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
    [...input.matchAll(new RegExp(/move \d+ from \d+ to \d+/, 'g'))].map(
      (currentMove) => (
        [...currentMove[0].matchAll(new RegExp(/\d+/, 'g'))].map(
          (currentDigit) => (
            +currentDigit[0]
          )
        )
      )
    )
  );

export { getTopBlocks, getMovesFromInput, getStacksFromInput };
