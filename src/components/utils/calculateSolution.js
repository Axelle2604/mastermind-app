export const goodPlaced = (selectedColors, solution) => {
  return selectedColors.reduce((colorsWellPositonned, color, index) => {
    if (color === solution[index]) {
      return {
        ...colorsWellPositonned,
        [color]: colorsWellPositonned[color]
          ? colorsWellPositonned[color] + 1
          : 1,
      };
    }
    return colorsWellPositonned;
  }, {});
};

export const countColorInSolution = (color, solution) => {
  return solution.filter(val => val === color).length;
};

export const missPlaced = (playerColors, solution, tabColorsWellPlaced) => {
  return playerColors.reduce((missPlaced, color, index) => {
    const nbColorInSolution = countColorInSolution(color, solution);

    if (nbColorInSolution === 0 || color === solution[index]) {
      return {
        ...missPlaced,
      };
    }
    const oldMissPlacedColorCount = missPlaced[color] || 0;
    const result =
      nbColorInSolution -
      (tabColorsWellPlaced[color] || 0) -
      oldMissPlacedColorCount;
    return {
      ...missPlaced,
      [color]:
        result > 0 ? oldMissPlacedColorCount + 1 : oldMissPlacedColorCount,
    };
  }, {});
};
