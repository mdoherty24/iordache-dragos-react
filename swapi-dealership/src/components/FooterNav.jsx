import { useContext } from 'react';
import { AppContext } from './../contexts/AppContext';

export const FooterNav = () => {
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;

  return (
    <ul className="list-group col-md-3">
      <li className="list-group-item">
        <button
          className="btn-link p-0 border-0 bg-transparent"
          title="Home"
          type="button"
        >
          Home
        </button>
      </li>

      {cart.length > 0 ? (
        <li className="list-group-item">
          <button
            className="btn-link p-0 border-0 bg-transparent"
            type="button"
            title="Cart"
          >
            Cart
          </button>
        </li>
      ) : (
        <></>
      )}
    </ul>
  );
};

export default FooterNav;
