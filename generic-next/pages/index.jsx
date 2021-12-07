import Head from 'next/head';
import { Films } from '../components/Films';

export default function Home({ hello, films }) {
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
          <h2 className="text-2xl text-purple-900 mt-4">SSR test</h2>
          <Films films={films}></Films>
        </main>

        <footer className="container mx-auto py-4">Footer</footer>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch('https://swapi.dev/api/films');
  const data = await response.json();

  return {
    props: {
      hello: 'world',
      films: data.results,
    },
  };
};
