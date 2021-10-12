import { Component } from 'react';
import './PurchaseFilm.css';

const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
const columns = 10;
const ticketPrice = 3;

class PurchaseFilm extends Component {
  state = {
    selectedSeats: new Set(),
  };

  toggleSeatSelect(seatKey) {
    const selectedSeats = new Set(this.state.selectedSeats);

    if (selectedSeats.has(seatKey)) {
      selectedSeats.delete(seatKey);
    } else {
      selectedSeats.add(seatKey);
    }

    this.setState({
      selectedSeats,
    });
  }

  renderSeats() {
    const seats = [];
    console.log(this.state);

    for (let i = 0; i < rows.length; i++) {
      for (let j = 1; j <= 10; j++) {
        // A-1 B-4 C-8
        const seatKey = `${rows[i]}-${j}`;
        const seatSelected = this.state.selectedSeats.has(seatKey);
        const cssClasses = `btn btn-sm py-2 ${
          seatSelected ? 'btn-warning' : 'btn-outline-dark'
        }`;

        seats.push(
          <button
            className={cssClasses}
            key={seatKey}
            type="button"
            title={seatKey}
            onClick={() => {
              this.toggleSeatSelect(seatKey);
            }}
          ></button>,
        );
      }
    }

    return seats;
  }

  render() {
    return (
      <section className="row">
        <header className="col-12 d-flex mb-4 justify-content-between align-items-center">
          <h2>Purchase tickets for {this.props.film.title}</h2>
        </header>

        <div className="col-12 my-5">
          <div className="cinema">
            <div className="cinema__screen"></div>

            <div className="cinema__seats">{this.renderSeats()}</div>
          </div>
        </div>

        <div className="col-12">
          <button
            className="btn btn-outline-light d-inline float-end"
            title="Back"
            type="button"
            onClick={() => {
              this.props.cancelPurchase();
            }}
          >
            Back
          </button>
        </div>
      </section>
    );
  }
}

export default PurchaseFilm;
