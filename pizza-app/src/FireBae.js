import { useEffect, useState } from 'react';
import { db } from './firebase';
import { ProductTile } from './components/catalog';

export const FireBae = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // db.collection('courses')
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection('users')
    //   .add({
    //     first: 'Alan',
    //     last: 'Turing',
    //     middle: 'Mathison',
    //     born: 1815,
    //   })
    //   .then((docRef) => {
    //     console.log(`Doc written with `, docRef.id);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    // db.collection('users')
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       console.log(`${doc.id} =>`, doc.data());
    //     });
    //   });

    // var alovelaceDocumentRef = db
    //   .collection('users')
    //   .doc('rUc3mxnpURlJBbjNzIlD');
    // console.log(alovelaceDocumentRef);

    // set a ref that does not do any network shit
    const citiesRef = db.collection('cities');

    // citiesRef.doc('SF').set({
    //   name: 'San Francisco',
    //   state: 'CA',
    //   country: 'USA',
    //   capital: false,
    //   population: 860000,
    //   regions: ['west_coast', 'norcal'],
    // });
    // citiesRef.doc('LA').set({
    //   name: 'Los Angeles',
    //   state: 'CA',
    //   country: 'USA',
    //   capital: false,
    //   population: 3900000,
    //   regions: ['west_coast', 'socal'],
    // });
    // citiesRef.doc('DC').set({
    //   name: 'Washington, D.C.',
    //   state: null,
    //   country: 'USA',
    //   capital: true,
    //   population: 680000,
    //   regions: ['east_coast'],
    // });
    // citiesRef.doc('TOK').set({
    //   name: 'Tokyo',
    //   state: null,
    //   country: 'Japan',
    //   capital: true,
    //   population: 9000000,
    //   regions: ['kanto', 'honshu'],
    // });
    // citiesRef.doc('BJ').set({
    //   name: 'Beijing',
    //   state: null,
    //   country: 'China',
    //   capital: true,
    //   population: 21500000,
    //   regions: ['jingjinji', 'hebei'],
    // });

    // citiesRef.doc('SF').collection('landmarks').doc().set({
    //   name: 'Golden Gate Bridge',
    //   category: 'bridge',
    // });
    // citiesRef.doc('SF').collection('landmarks').doc().set({
    //   name: 'Golden Gate Park',
    //   category: 'park',
    // });

    // citiesRef.doc('DC').collection('landmarks').doc().set({
    //   name: 'National Gallery of Art',
    //   category: 'museum',
    // });
    // citiesRef.doc('DC').collection('landmarks').doc().set({
    //   name: 'National Mall',
    //   category: 'park',
    // });

    // citiesRef
    //   .doc('SF')
    //   .collection('landmarks')
    //   .where('category', 'in', ['park', 'museum'])
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       console.log(doc.data());
    //     });
    //   });

    // var cityRef = db.collection('cities').doc('LA');
    // // use this like patch
    // var setWithMerge = cityRef.set(
    //   {
    //     capital: true,
    //   },
    //   { merge: true },
    // );

    // citiesRef.doc('DC').update({
    //   capital: true,
    // });

    // citiesRef.doc('DC').update({
    //   regions: firebase.firestore.FieldValue.arrayUnion('greater_virginia'),
    // });

    // citiesRef.doc('DC').update({
    //   regions: firebase.firestore.FieldValue.arrayRemove('east_coast'),
    // });

    // citiesRef
    //   .where('capital', '==', true)
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       console.log(doc.data());
    //     });
    //   });

    // citiesRef
    //   .where('state', '==', 'CA')
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       console.log(doc.data());
    //     });
    //   });

    // db.collection('products')
    //   .doc('Srayey8bDaHlroLHt1zR')
    //   .get()
    //   .then((doc) => {
    //     console.log(doc.data());
    //   });

    db.collection('products')
      .where('category', 'array-contains', '2qSev0IcnfZEbRaKeN4T')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const productData = doc.data();
          setProduct(productData);
        });
      });
  }, []);

  return (
    <>
      {product !== null ? <ProductTile product={product}></ProductTile> : null}
    </>
  );
};

export default FireBae;
