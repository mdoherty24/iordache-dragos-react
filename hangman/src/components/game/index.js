import { GameProvider } from './contexts';
import Game from './Game';

const ProvidedGame = ({ onGameEnded, onGameStarted }) => {
  return (
    <GameProvider>
      <Game onGameEnded={onGameEnded} onGameStarted={onGameStarted}></Game>
    </GameProvider>
  );
};

export default ProvidedGame;
