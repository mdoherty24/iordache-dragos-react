import { Component, Fragment } from 'react';
import Search from './components/Search';

const baseUrl = 'https://swapi.dev/api/films';

class App extends Component {
  state = {
    busy: false,
    films: [],
  };

  getFilms() {
    this.setState({
      busy: true,
    });

    // promise chaining
    fetch(baseUrl)
      .then((response) => {
        return response.json();
      })
      .then(({ results }) => {
        this.setState({
          films: results,
          busy: false,
        });
      });
  }

  renderFilms() {
    return this.state.films.map((film) => {
      return <p key={film.episode_id}>{film.title}</p>;
    });
  }

  renderMainScreen() {
    if (this.state.busy === true) {
      return <>... loading</>;
    }

    return this.renderFilms();
  }

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <Fragment>
        <header className="navbar-expand-md navbar-dark fixed-top bg-dark">
          <nav className="container d-flex justify-content-between">
            <h1 className="display-6 text-warning">Swapi Cinema</h1>

            <Search></Search>
          </nav>
        </header>

        <main className="container mt-5 pt-5">{this.renderMainScreen()}</main>
      </Fragment>
    );
  }
}

export default App;
