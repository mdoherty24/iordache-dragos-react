import { updateUserStats } from './profileActions';

export const startGame = () => {
  return async (dispatch, getState) => {
    const { profile, auth } = getState();
    const { gamesWon, gamesLost, gamesPlayed } = profile.stats;
    const userId = auth.user.id;

    dispatch(
      updateUserStats(userId, {
        gamesLost: gamesLost + 1,
        gamesPlayed: gamesPlayed + 1,
        gamesWon,
      }),
    );
  };
};

export const endGame = (gameWon) => {
  return (dispatch, getState) => {
    const { profile, auth } = getState();
    const { gamesWon, gamesLost, gamesPlayed } = profile.stats;
    const userId = auth.user.id;
    let stats = {};

    if (gameWon) {
      stats = {
        gamesWon: gamesWon + 1,
        gamesLost: gamesLost - 1,
        gamesPlayed,
      };
    } else {
      stats = {
        gamesWon,
        gamesLost,
        gamesPlayed,
      };
    }

    dispatch(updateUserStats(userId, stats));
  };
};
