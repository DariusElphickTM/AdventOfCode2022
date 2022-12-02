const scoreMap = {
    'X': {
        'base': 1,
        'A': 3,
        'B': 0,
        'C': 6
    },
    'Y': {
        'base': 2,
        'A': 6,
        'B': 3,
        'C': 0
    },
    'Z': {
        'base': 3,
        'A': 0,
        'B': 6,
        'C': 3
    }
};

const getRoundResult = (round: Array<string>): number => {
    const roundScores = scoreMap[round[1]];
    return roundScores.base + roundScores[round[0]];
};

const getStrategyScore = (strategy: Array<Array<string>>): number => {
    return strategy.reduce(
        (accumilatedScore, currentRound) => {
            return accumilatedScore + getRoundResult(currentRound);
        }, 
        0
    );
};

export { getRoundResult, getStrategyScore };
