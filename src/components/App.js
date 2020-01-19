import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Login from './auth/Login';
import NewAccount from './auth/NewAccount';
import Applys from './projects/Applys';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/NewAccount" component={NewAccount} />
          <Route exact path="/Applys" component={Applys} />
        </Switch>
      </Fragment>

    );
  }
}
export default App;
