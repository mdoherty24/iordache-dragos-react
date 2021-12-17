import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { initializeGoogleAuth } from './api';
import history from './history';
import {
  GamePage,
  HomePage,
  ProfilePage,
  NotFoundPage,
  RanksPage,
  RankPage,
} from './pages';

import { Footer, Header } from './components/common';

function App() {
  // async
  initializeGoogleAuth();

  return (
    <Router history={history}>
      <Header></Header>
      <main>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/profile" component={ProfilePage}></Route>
          <Route path="/play" component={GamePage}></Route>
          <Route path="/ranks/:id" component={RankPage}></Route>
          <Route path="/ranks" component={RanksPage}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
