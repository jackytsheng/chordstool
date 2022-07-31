export const WAIT =
  "I can't be reproduced in the text area, because the limit will be reach";

const generateRoundRobinPair = (values: string[]): string[][] => {
  values = JSON.parse(JSON.stringify(values));
  if (values.length % 2 !== 0) values.push(WAIT);

  const leftSide = values.slice(0, values.length / 2);
  const rightSide = values.slice(values.length / 2, values.length);

  let result = Array(values.length - 1).fill([]);
  for (let i = 0; i < values.length - 1; i++) {
    result[i] = [];
    for (let m = 0; m < values.length / 2; m++) {
      result[i] = [...result[i], leftSide[m], rightSide[m]];
    }

    // anti clockwise rotation, with last value is fixed
    const firstRightSide = rightSide[0];
    const lastLeftSide = leftSide[leftSide.length - 1];
    leftSide.pop();
    leftSide.unshift(firstRightSide);
    rightSide.shift();
    rightSide.splice(rightSide.length - 1, 0, lastLeftSide);
  }

  return result;
};

export default generateRoundRobinPair;
