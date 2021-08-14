import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { AppLinks } from '../urls';
import Config from './Config/Config';
import Navigation from './Navigation/Navigation';
import Result from './Result/Result';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path={AppLinks.Config} component={Config} />
        <Route exact path={AppLinks.Result} component={Result} />
        <Route exact path="/">
          <Redirect to={AppLinks.Config} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
