import { useDispatch, useSelector } from 'react-redux';
import { clickClicker } from './actions/creators/ui';
import { Footer, Header } from './components/common';
// import { STH, STH } from './actions/types/ui';
// import {dispatchState} from './actions/creators/ui';

export const App = () => {
  const clicker = useSelector((state) => {
    const { ui } = state;

    return ui.clicker;
  });
  const dispatch = useDispatch();

  return (
    <>
      <Header></Header>
      <main>
        <div>Value is: {clicker}</div>
        <button
          onClick={() => {
            dispatch(clickClicker());
          }}
        >
          Test
        </button>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;

// actions -> {type: '', payload: {}}  /types /creators
// reducers
