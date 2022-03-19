import { TRAILS, ALPHA, GAMMA, REWARDS, QMATRIX } from './constants';
import { getBestPolicy, nextState, randomAction, update } from './auxiliar-functions';

TRAILS.forEach((trail, trailIndex) => {
  let actualState = 0;

  console.log(`${trailIndex + 1}º iteraction`);

  for (const [currAction, nextAction] of trail) {
    const actionPath = randomAction(currAction);
    const nextStatePath = nextState(actualState, nextAction);

    console.log(`${actualState + 1}: ${currAction} x ${nextAction} ----> ${nextStatePath + 1}`);

    QMATRIX[actualState][actionPath] = update(
      actualState, actionPath, nextStatePath, REWARDS, QMATRIX, ALPHA, GAMMA
    );

    actualState = nextStatePath;

    if (actualState === trail.length - 1) break;
  }
  console.log(getBestPolicy(QMATRIX));

  QMATRIX.forEach((lists, listIndex) => {
    lists.forEach((number, numberIndex) => {
      QMATRIX[listIndex][numberIndex] = Number(number.toFixed(2));
    });
  });

  console.log(QMATRIX);
});
