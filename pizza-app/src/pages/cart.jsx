import Link from 'next/link';

import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

const Cart = () => {
  const authUser = useAuthUser();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    db.collection('users')
      .doc(authUser.id)
      .get()
      .then((doc) => {
        const { cart } = doc.data();

        setCart(cart);
      });
  }, []);

  return (
    <div className="text-red-800">
      <h2>Cart</h2>
      <section>
        {cart.length > 0 ? (
          <ul>
            {cart.map(({ product, quantity }, i) => {
              const { name, price } = product;

              return (
                <li key={i}>
                  {name} - ${price} x {quantity}
                </li>
              );
            })}
          </ul>
        ) : (
          'Loading your cart...'
        )}
      </section>

      <section>
        <Link href="/order">
          <a>Order now</a>
        </Link>
      </section>
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Cart);
