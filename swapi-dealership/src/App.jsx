import { useState } from 'react';
import MetaImage from './legacy/MetaImage';

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <header className="navbar-dark fixed-top bg-dark border-bottom border-warning">
        <nav className="container d-flex justify-content-between">
          <h1 className="display-6 text-warning">Swapi Vehicles</h1>

          {/* search */}
        </nav>
      </header>

      <main className="container mt-7 mb-4">
        <button
          onClick={() => {
            setShow(false);
          }}
        >
          test
        </button>
        {show ? <MetaImage term="captain kirk"></MetaImage> : <></>}
      </main>

      <footer className="container mb-4">FOoter</footer>
    </>
  );
}

export default App;
