import { useAuthUser } from 'next-firebase-auth';
import { db } from './../../firebase';

export const ProductTile = ({ className = '', product }) => {
  const { price, imageUrl, description, name } = product;
  const authUser = useAuthUser();
  className = `shadow-lg	${className}`;

  const addToCart = () => {
    const uuid = authUser.firebaseUser.uid;

    db.collection('users')
      .doc(uuid)
      .set(
        {
          cart: [{ product, quantity: 1 }],
        },
        { merge: true },
      );
  };

  return (
    <article className={className}>
      <header>
        <picture>
          <img src={imageUrl} alt={name}></img>
        </picture>
        <h1>{name}</h1>
      </header>

      <main>
        <section>
          <p>{description}</p>
        </section>

        <section>
          <div>${price}</div>

          <div>
            <button onClick={addToCart}>+ Cart</button>
          </div>
        </section>
      </main>
    </article>
  );
};
