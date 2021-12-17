import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  'pk_test_51IUeJ2ES0FdOsijHS72oGbMUneH7weuL4McmGnHGPxw5BvXSqkhq7AWdsWnFOPHOYjer23Y1bfbdJGR2sAlUBNlf00S3cSj4BW',
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   if (elements == null) {
  //     return;
  //   }

  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: 'card',
  //     card: elements.getElement(CardElement),
  //   });

  //   console.log(paymentMethod);
  // };

  return (
    <form action="/api/create_checkout_session" method="POST">
      {/* <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>*/}
      <button type="submit">Checkout</button>
    </form>
  );
};

const Order = () => {
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
      <h2>Order</h2>
      <div>you have to pay:</div>
      <div>
        {cart.reduce((total, { product, quantity }) => {
          const { price } = product;

          total += price * quantity;

          return <span>{total}</span>;
        }, 0)}
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Order);
