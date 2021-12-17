import '../styles/index.css';

import { useStore } from '../store';
import { Provider as ReduxProvider } from 'react-redux';
import initAuth from '../auth';

// initAuth();

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
};

export default MyApp;
