import { DirectionFactory } from './direction-factory';
import { Direction } from './types'

export const randomAction = (action: Direction) => {
  if (action === 'UP') {
    return 0;
  } else if (action === 'DW') {
    return 1;
  } else if (action === 'LF') {
    return 2;
  } // RG
  return 3;
};

export const update = (
  actualState: number,
  action: number,
  nextState: number,
  rewardsMatrix: number[][],
  qMatrix: number[][],
  alpha: number,
  gamma: number
) => {
  const estimateValue = (rewardsMatrix[nextState][action] + gamma) * Math.max(...qMatrix[nextState]);
  const value = (qMatrix[actualState][action] + alpha) * (estimateValue - qMatrix[actualState][action]);

  return value
};

export const getBestPolicy = (qMatrix: number[][]) => {
  const finalResult = [];

  qMatrix.forEach((line) => {
    const bestAction = line.indexOf(Math.max(...line));
    const direction = new DirectionFactory(bestAction).chooseDirection();
    finalResult.push(direction);
  })
  return `
  ${finalResult[4]}     
  ${finalResult[2]}      ${finalResult[3]}
  ${finalResult[0]}      ${finalResult[1]}
  `
}

export const nextState = (currentState: number, action: Direction): number => {
  if (action === 'LF') {
    return currentState % 2 !== 0 ? currentState - 1 : currentState;
  } else if (action === 'RG') {
    return currentState % 2 === 0 ? currentState + 1 : currentState;
  } else if (action === 'DW') {
    return currentState > 1 ? currentState - 2 : currentState;
  } else { // UP
    return currentState < 4 ? currentState + 2 : currentState;
  }
};

