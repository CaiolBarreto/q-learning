import { DirectionFactory } from "./direction-factory";

const randomAction = (action: string) => {
  if (action === 'UP') {
    return 0;
  } else if (action === 'DW') {
    return 1;
  } else if (action === 'LF') {
    return 2;
  }
  return 3;
}

const update = (
    actualState: number,
    action: number,
    nextState: number,
    rewardsMatrix: number[][],
    qMatrix: number[][],
    alpha: number,
    gamma: number
  ) => {
  const estimateValue = rewardsMatrix[actualState][nextState] + gamma * Math.max(...qMatrix[nextState]);
  const value = qMatrix[actualState][action] + alpha * (estimateValue - qMatrix[actualState][action]);

  return value
}

const bestPolicy = (qMatrix: number[][]) => {
  const finalResult = [];
  for (let line = 0; line < qMatrix.length; line++) {
    const bestAction = qMatrix[line].indexOf(Math.max(...qMatrix[line]));
    const direction = new DirectionFactory(bestAction).chooseDirection();
  }
  
}