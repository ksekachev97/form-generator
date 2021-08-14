import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { AppLinks } from '../urls';
import Config from './Config/Config';
import Navigation from './Navigation/Navigation';
import Result from './Result/Result';

import './App.scss';
import { FormJson } from '../models';

function App() {
  const [formConfig, setFormConfig] = React.useState<FormJson | null>(null);

  const handleJson = (json: FormJson) => {
    setFormConfig(json);
  };

  return (
    <div className="App">
      <Navigation />
      <main className="Container">
        <Switch>
          <Route
            exact
            path={AppLinks.Config}
            render={(props) => <Config handleJson={handleJson} {...props} />}
          />
          <Route exact path={AppLinks.Result} component={Result} />
          <Route exact path="/">
            <Redirect to={AppLinks.Config} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
