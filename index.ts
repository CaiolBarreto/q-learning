import { TRAILS, ALPHA, GAMMA, REWARDS, QMATRIX, FINISHED_STATE } from './constants';
import { getBestPolicy, nextState, randomAction, update } from './auxiliar-functions';

TRAILS.forEach((trail, trailIndex) => {
  let actualState = 0;

  console.log(`========= ${trailIndex + 1}º iteraction =========\n`);

  for (const [currAction, nextAction] of trail) {
    const actionPath = randomAction(currAction);
    const nextStatePath = nextState(actualState, nextAction);

    console.log(`Is at: ${actualState + 1}, takes: ${nextAction} and goes to ${nextStatePath + 1}`);

    QMATRIX[actualState][actionPath] = update(
      actualState, actionPath, nextStatePath, REWARDS, QMATRIX, ALPHA, GAMMA
    );

    actualState = nextStatePath;

    if (actualState === FINISHED_STATE) break;
  }

  QMATRIX.forEach((lists, listIndex) => {
    lists.forEach((number, numberIndex) => {
      QMATRIX[listIndex][numberIndex] = Number(number.toFixed(2));
    });
  });

  console.log('\n#### Q Matrix ####\n')
  QMATRIX.forEach((list) => console.log(list));

  console.log(getBestPolicy(QMATRIX));
});
