import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { initializeGoogleAuth } from '../api';
import { Container } from '../components/common';
import { StatsList } from '../components/stats';
import { Button, Spinner } from '../components/ui';
import { useAuth, useStats } from '../hooks';

export const HomePage = () => {
  const { authenticated, established } = useAuth();
  const { gamesWon, gamesLost, gamesPlayed } = useStats();
  const authInstance = useRef(null);

  useEffect(() => {
    const getAuthInstance = async () => {
      authInstance.current = await initializeGoogleAuth();
    };

    getAuthInstance();
  }, []);

  const login = () => {
    authInstance.current.signIn();
  };

  return (
    <div className="p-4">
      <Container>
        <h1>Welcome to Word Game</h1>

        <div className="mt-8">
          {!established ? (
            <div className="text-center">
              <Spinner></Spinner>
            </div>
          ) : authenticated ? (
            <>
              <StatsList
                gamesLost={gamesLost}
                gamesPlayed={gamesPlayed}
                gamesWon={gamesWon}
              ></StatsList>
              <div className="mt-4 text-center">
                <Link to="/play">
                  <Button element="span">Play now!</Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center">
              <button
                className="w-75 md:max-w-xl py-20 w-9/12 border rounded-md shadow hover:bg-gray-100"
                onClick={login}
              >
                Login to get started
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
