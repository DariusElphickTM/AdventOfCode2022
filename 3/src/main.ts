const getDuplicateBagContent = (bag: string): string => {
    const middleIndex = bag.length / 2;
    const bagPockets = [
        bag.slice(0, middleIndex), 
        bag.slice(middleIndex)
    ];
    return bagPockets[0].match(new RegExp('[' + bagPockets[1] + ']'))[0];
}

const getPriorityForItem = (item: string): number => {
    const itemCharCode = item.charCodeAt(0);
    return itemCharCode > 96 ? itemCharCode - 96 : itemCharCode - 38;
};

const getPrioritySum = (bags: Array<string>): number => {
    return bags.reduce(
        (prioritySum, currentBag) => {
            return prioritySum + getPriorityForItem(
                getDuplicateBagContent(currentBag)
                );
        }, 
        0
    );
};

const groupTheElves = (bags: Array<string>): Array<Array<string>> => {
    const groups = [];
    for(let i = 3; i <= bags.length; i += 3) {
        groups.push(bags.slice(i - 3, i));
    };
    return groups;
};

const getDuplicateAmongElves = (group: Array<string>): string => {
    for(let i = 0; i < group[0].length; i ++) {
        const currentItem = group[0][i];
        if(group[1].includes(currentItem) && group[2].includes(currentItem)) {
            return currentItem;
        }
    }
    return '';
}

const getGroupedPrioritySum = (bags: Array<string>): number => {
    return groupTheElves(bags).reduce(
        (prioritySum, currentGroup) => {
            return prioritySum + getPriorityForItem(
                getDuplicateAmongElves(currentGroup)
            );
        }, 
        0
    );
};

export { getPrioritySum, getGroupedPrioritySum, getPriorityForItem, getDuplicateBagContent };
