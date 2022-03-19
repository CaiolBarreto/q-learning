import { TRAILS, ALPHA, GAMMA, REWARDS, QMATRIX } from './constants';
import { getBestPolicy, nextState, randomAction, update } from './auxiliar-functions';

TRAILS.forEach((trail) => {
  let actualState = 0;

  console.log(`${TRAILS.indexOf(trail) + 1}º iteraction`);
  trail.forEach((currAction, nextAction) => {
    const actionPath = randomAction(currAction[0]);
    const nextStatePath = nextState(actualState, actionPath[0]);

    console.log(`${actualState + 1} | ${currAction} x ${nextAction} -> ${nextStatePath + 1}`);

    QMATRIX[actualState][actionPath[0]] = update(
      actualState, actionPath[0], nextStatePath,
      REWARDS, QMATRIX, ALPHA, GAMMA
    );

    actualState = nextStatePath;

    if (nextAction === trail.length - 1) break;
    console.log(getBestPolicy(QMATRIX));
    QMATRIX.map((lists) => {
      lists.map((numbers) => {
        QMATRIX[QMATRIX.indexOf(lists)][lists.indexOf(numbers)] = Number(numbers.toFixed(2));
      });
    });
    console.log(QMATRIX);
  });
});
