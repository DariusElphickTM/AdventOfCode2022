const getTopBlocks = (initialStacks: Array<Array<string>>, moves: Array<Array<number>>): Array<string> => {
    const workingStacks = [...initialStacks];
    moves.forEach(move => {
        for(let i = 0; i < move[0]; i++) {
            const block = workingStacks[move[1] - 1].pop();
            console.log(block);
            workingStacks[move[2] - 1].push(block);
        }
    });
    return workingStacks.map((stack) => (stack.pop()));
};

export { getTopBlocks };
