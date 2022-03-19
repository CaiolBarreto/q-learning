import { TRAILS, ALPHA, GAMMA, REWARDS, QMATRIX } from './constants';
import { getBestPolicy, nextState, randomAction, update } from './auxiliar-functions';

TRAILS.forEach((trail) => {
  let actualState = 0;

  console.log(`${TRAILS.indexOf(trail) + 1}º iteraction`);

  for (const [currAction, nextAction] of trail) {
    const actionPath = randomAction(currAction);
    const nextStatePath = nextState(actualState, nextAction);

    console.log(`${actualState + 1} | ${currAction} x ${nextAction} -> ${nextStatePath + 1}`);

    QMATRIX[actualState][actionPath] = update(
      actualState, actionPath, nextStatePath, REWARDS, QMATRIX, ALPHA, GAMMA
    );

    actualState = nextStatePath;

    if (actualState === trail.length - 1) break;

    console.log(getBestPolicy(QMATRIX));

    QMATRIX.forEach((lists) => {
      lists.forEach((numbers) => {
        QMATRIX[QMATRIX.indexOf(lists)][lists.indexOf(numbers)] = Number(numbers.toFixed(2));
      });
    });

    console.log(QMATRIX);
  }
});
