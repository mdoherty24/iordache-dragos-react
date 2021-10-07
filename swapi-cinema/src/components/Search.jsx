import { Component } from 'react';

const baseUrl = 'https://swapi.dev/api/films';

class Search extends Component {
  state = {
    busy: false,
  };

  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form
        className="d-inline-flex align-self-center"
        onSubmit={this.onSubmit}
      >
        <input
          className="form-control me-2 align-self-center"
          type="text"
          name="q"
          placeholder="Search"
          onChange={this.onInputChange}
          required
        ></input>

        <button
          className="btn btn-outline-warning"
          type="submit"
          title="Search"
        >
          Search
        </button>
      </form>
    );
  }
}

export default Search;
