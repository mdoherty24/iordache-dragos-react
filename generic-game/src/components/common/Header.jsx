import { SiLetterboxd } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../ui/Button';
import { requestSignIn } from '../../actions/creators/auth';

export const Header = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => {
    return state.auth.authenticated;
  });

  const renderUserControls = () => {
    if (authenticated) {
      return 'user is logged in';
    } else {
      return (
        <Button
          type="button"
          title="Log in"
          onClick={() => {
            dispatch(requestSignIn());
          }}
          className="drilldown demo"
        >
          Log in
        </Button>
      );
    }
  };

  return (
    <header className="shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <header>
          <h1 className="uppercase text-lg font-bold">
            <Link to="/" title="Go home" className="flex items-center">
              <SiLetterboxd className="mr-2"></SiLetterboxd>
              Word Game
            </Link>
          </h1>
        </header>

        {renderUserControls()}
      </div>
    </header>
  );
};

export default Header;
