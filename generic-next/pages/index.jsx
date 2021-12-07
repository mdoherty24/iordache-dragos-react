import Head from 'next/head';
import { useSelector } from 'react-redux';
import { Films } from '../components/Films';

export default function Home({ hello, films }) {
  const count = useSelector(({ ui }) => {
    return ui.count;
  });

  return (
    <>
      <Head>
        <title>Hello world</title>
      </Head>

      <div className="flex flex-col">
        <header className="container mx-auto py-4">
          Menu
          {hello}
        </header>

        <main className="container mx-auto py-4 flex-grow">
          insert forms
          <div>{count}</div>
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
    },
  };
};
