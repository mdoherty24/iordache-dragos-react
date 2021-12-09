import Head from 'next/head';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/auth/authSlice';
import { decrement, increment } from '../store/ui/uiSlice';

export default function Home({ hello }) {
  const [formState, setFormState] = useState({
    name: '',
    password: '',
    email: '',
  });
  const count = useSelector(({ ui }) => {
    return ui.count;
  });

  const { authenticated } = useSelector(({ auth }) => {
    return auth;
  });
  const dispatch = useDispatch();

  const onFormFieldChanged = (event) => {
    const field = event.target;

    setFormState({
      ...formState,
      [field.name]: field.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(registerUser(formState));
  };

  return (
    <>
      <Head>
        <title>Hello world</title>
      </Head>

      <div className="flex flex-col">
        <header className="container mx-auto py-4">
          Menu
          {hello}
          <div className="mt-4">
            User is {authenticated ? 'logged in' : 'logged out'}
          </div>
        </header>

        <main className="container mx-auto py-4 flex-grow">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="border"
              value={formState.name}
              onChange={onFormFieldChanged}
            />
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border"
              value={formState.email}
              onChange={onFormFieldChanged}
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="border"
              value={formState.password}
              onChange={onFormFieldChanged}
            />
            <br /> <br />
            <button type="submit" className="bg-purple-500">
              Register
            </button>
          </form>

          <div className="mt-16">
            <button
              onClick={() => {
                dispatch(decrement());
              }}
            >
              Decrement
            </button>
            <div>{count}</div>
            <button
              onClick={() => {
                dispatch(increment());
              }}
            >
              Increment
            </button>
          </div>
        </main>

        <footer className="container mx-auto py-4">Footer</footer>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  // const response = await fetch('https://swapi.dev/api/films');
  // const data = await response.json();

  return {
    props: {
      hello: 'world',
      films: [],
      initialReduxState: {},
    },
  };
};
