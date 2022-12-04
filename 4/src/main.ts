const isCrossOver = (elfPair: Array<Array<number>>): boolean => {
    const firstSection = elfPair[0];
    const secondSection = elfPair[1];
    return (
        (
            (firstSection[0] >= secondSection[0]) && 
            (firstSection[1] <= secondSection[1])
        ) ||
        (
            (secondSection[0] >= firstSection[0]) && 
            (secondSection[1] <= firstSection[1])
        )
    );
}

const getCrossOverRangeCount = (elfPairs: Array<Array<Array<number>>>): number => {
    return elfPairs.reduce((crossOverCount, currentElfPair) => {
        currentElfPair;
        return isCrossOver(currentElfPair) ? crossOverCount + 1 : crossOverCount;
    }, 0);
};

export { getCrossOverRangeCount, isCrossOver };
