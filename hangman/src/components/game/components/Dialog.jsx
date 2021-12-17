import { Component } from 'react';
import { createPortal } from 'react-dom';

const dialogsHost = document.querySelector('.dialogs');

export class Dialog extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    dialogsHost.appendChild(this.el);
  }

  componentWillUnmount() {
    this.el.remove();
  }

  renderDialog() {
    if (!this.props.show) {
      return <></>;
    }

    return (
      <div className="absolute bg-white bg-opacity-30 top-0 left-0 w-screen h-screen flex justify-center items-center">
        <div className="bg-gray-100 bg-opacity-100 shadow p-2 rounded focus:outline-none">
          <header className="text-right">
            <button
              onClick={() => {
                this.props.onClose();
              }}
              title="Close"
            >
              X
            </button>
          </header>
          <main className="p-2">{this.props.children}</main>
        </div>
      </div>
    );
  }

  render() {
    return createPortal(this.renderDialog(), this.el);
  }
}

export default Dialog;
