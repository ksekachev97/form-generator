import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { AppLinks } from '../urls';
import Config from './Config/Config';
import Navigation from './Navigation/Navigation';
import Result from './Result/Result';

import './App.scss';
import { FormJson } from '../models';

function App() {
  const [formConfig, setFormConfig] = React.useState<FormJson>();

  const handleConfig = (json: FormJson) => {
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
            render={(props) => (
              <Config
                initialValue={formConfig}
                handleConfig={handleConfig}
                {...props}
              />
            )}
          />
          <Route
            exact
            path={AppLinks.Result}
            render={(props) => <Result formConfig={formConfig} {...props} />}
          />
          <Route exact path="/">
            <Redirect to={AppLinks.Config} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
