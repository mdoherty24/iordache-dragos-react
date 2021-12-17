import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Spinner } from '../ui';
import { Container } from './Container';
import { SiLetterboxd } from 'react-icons/si';
import { FaUserAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { initializeGoogleAuth } from './../../api';

class Header extends Component {
  constructor(props) {
    super(props);

    initializeGoogleAuth().then((instance) => {
      this.auth = instance;
    });
  }

  renderUserControls() {
    const { established, authenticated } = this.props.auth;

    if (!established) {
      return <Spinner></Spinner>;
    }

    if (authenticated) {
      return (
        <>
          <Link to="/profile" title="Go to profile" className="mr-2">
            <Button element="span">
              <FaUserAlt></FaUserAlt>
            </Button>
          </Link>
          <Button
            skin="primaryInverted"
            onClick={() => {
              this.auth.signOut();
            }}
          >
            Log out
          </Button>
        </>
      );
    } else {
      return (
        <Button
          onClick={() => {
            this.auth.signIn();
          }}
        >
          Log in
        </Button>
      );
    }
  }

  render() {
    return (
      <header className="shadow p-4">
        <Container>
          <div className="flex justify-between items-center">
            <h1 className="uppercase text-lg font-bold">
              <Link to="/" className="flex items-center">
                <SiLetterboxd className="mr-2"></SiLetterboxd> Word Game
              </Link>
            </h1>

            <div>{this.renderUserControls()}</div>
          </div>
        </Container>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Header);
