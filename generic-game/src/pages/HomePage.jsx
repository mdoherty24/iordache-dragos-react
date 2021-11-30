import { Link } from 'react-router-dom';
import { UserStats } from '../components/profile';
import { Button } from '../components/ui';
import { useAuth, useStats } from '../hooks';

export const HomePage = () => {
  const { authenticated, established } = useAuth();
  const stats = useStats();

  // statsExample = {
  //   gamesWon,
  //   gamesLost,
  //   gamesPlayed,
  // }

  return (
    <div className="p-4 container mx-auto">
      <h1>Welcome to Word Game</h1>
      {!established ? (
        '...add spinner here'
      ) : authenticated ? (
        <>
          <UserStats
            {...stats}
            className="mt-8"
            entryClassName="p-5"
          ></UserStats>
          <div className="mt-2 text-center">
            <Link to="/play">
              <Button title="Play nao" element="span">
                Play
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center">
          <button
            className="w-75 md:max-w-xl w-3/4 py-20 border rounded-md shadow hover:bg-gray-100"
            type="button"
            title="Login"
          >
            Login to get started
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
