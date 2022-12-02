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

const correctScoreMap = {
    'X': {
        'base': 0,
        'A': 3,
        'B': 1,
        'C': 2
    },
    'Y': {
        'base': 3,
        'A': 1,
        'B': 2,
        'C': 3
    },
    'Z': {
        'base': 6,
        'A': 2,
        'B': 3,
        'C': 1
    }
};

const getCorrectRoundResult = (round: Array<string>): number => {
    const roundScores = correctScoreMap[round[1]];
    return roundScores.base + roundScores[round[0]];
};

const getCorrectStrategyScore = (strategy: Array<Array<string>>): number => {
    return strategy.reduce(
        (accumilatedScore, currentRound) => {
            return accumilatedScore + getCorrectRoundResult(currentRound);
        }, 
        0
    );
};

export { getRoundResult, getStrategyScore, getCorrectRoundResult, getCorrectStrategyScore };
