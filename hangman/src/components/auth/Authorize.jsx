import { useAuth } from '../../hooks';
import { Container } from '../common';

export const Authorize = ({ children }) => {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return (
      <Container>
        <div className="text-center">Please login first</div>
      </Container>
    );
  }

  return <>{children}</>;
};

export default Authorize;
