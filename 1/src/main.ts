const getElfCalories = (caloricLoad: Array<Array<number>>): Array<number> => (
  caloricLoad.map(
    (currentElfPack) => currentElfPack.reduce(
      (accumulator, currentElfSnack) => (accumulator + currentElfSnack),
      0
    )
  )
);

const simpleCounter = (caloricLoad: Array<Array<number>>): number => {
  return getElfCalories(caloricLoad).sort((a, b) => (a - b)).pop();
};

const combinedCounter = (caloricLoad: Array<Array<number>>): number => {
  const sortedElfCalories = getElfCalories(caloricLoad).sort((a, b) => (a - b));
  return sortedElfCalories.pop() + sortedElfCalories.pop() + sortedElfCalories.pop();
};

export { simpleCounter, combinedCounter }; 
