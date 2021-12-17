import { Authorize } from '../components/auth';
import { Container } from '../components/common';
import Game from '../components/game';

export const GamePage = () => {
  return (
    <Authorize>
      <Container>
        <Game></Game>
      </Container>
    </Authorize>
  );
};

export default GamePage;
