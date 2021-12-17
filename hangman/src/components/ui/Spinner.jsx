import { Component } from 'react';
import { CgSpinnerTwo } from 'react-icons/cg';
import './Spinner.css';

export class Spinner extends Component {
  render() {
    return (
      <>
        <CgSpinnerTwo className="spinner"></CgSpinnerTwo>
      </>
    );
  }
}

export default Spinner;
