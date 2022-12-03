const getDuplicateBagContent = (bag: Array<string>): string => {
    return bag[0].match(new RegExp('[' + bag[1] + ']'))[0];
}

const getPriorityForItem = (item: string): number => {
    const itemCharCode = item.charCodeAt(0);
    return itemCharCode > 96 ? itemCharCode - 96 : itemCharCode - 38;
};

const getPrioritySum = (bagContents: Array<Array<string>>): number => {
    return bagContents.reduce(
        (prioritySum, currentBag) => {
            return prioritySum + getPriorityForItem(
                getDuplicateBagContent(currentBag)
                );
        }, 
        0
    );
};

export { getPrioritySum, getPriorityForItem, getDuplicateBagContent };
