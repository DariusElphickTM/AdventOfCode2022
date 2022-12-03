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

const getGroupedPrioritySum = (bags: Array<string>): number => {
    return bags.reduce(
        (prioritySum, currentBag) => {
            return prioritySum + getPriorityForItem(
                getDuplicateBagContent(currentBag)
                );
        }, 
        0
    );
};

export { getPrioritySum, getGroupedPrioritySum, getPriorityForItem, getDuplicateBagContent };
