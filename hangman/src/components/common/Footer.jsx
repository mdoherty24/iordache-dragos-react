import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Container';

export class Footer extends Component {
  render() {
    return (
      <footer className="border border-top p-4">
        <Container>
          <section className="flex justify-between">
            <div>
              <h1>WORD GAME</h1>
              <p className="text-xs">Crafted by Pixellab</p>
            </div>

            <ul>
              <li>
                <Link to="/profile" title="Go to profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/play" title="Play now">
                  Play
                </Link>
              </li>
              <li>
                <Link to="/ranks" title="See users">
                  Ranks
                </Link>
              </li>
            </ul>
          </section>
        </Container>
      </footer>
    );
  }
}

export default Footer;
