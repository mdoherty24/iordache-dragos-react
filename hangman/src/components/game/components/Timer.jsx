import { useEffect } from 'react';
import { tickSecond, endGame } from '../contexts';
import { useGameState } from '../hooks';

export const Timer = () => {
  const {
    state: { timeLeft, paused },
    dispatch,
  } = useGameState();

  useEffect(() => {
    const timer = setInterval(() => {
      if (paused) {
        return;
      }

      dispatch(tickSecond());
    }, 1000);

    if (timeLeft <= 0) {
      dispatch(endGame());
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [dispatch, paused, timeLeft]);

  const renderTimer = (time) => {
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    const pad = (number) => {
      number = number.toFixed();
      return number > 9 ? number : `0${number}`;
    };

    return `${pad(minutes)} : ${pad(seconds)}`;
  };

  return <span>{renderTimer(timeLeft)}</span>;
};

export default Timer;
