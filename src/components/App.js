import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './projects/auth/Login';
import NewAccount from './projects/auth/NewAccount';
import Applys from './projects/Applys';
import ProjectState from '../context/projects/projectState';

class App extends React.Component {
  render() {
    return (
      <ProjectState>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/NewAccount" component={NewAccount} />
          <Route exact path="/Applys" component={Applys} />
        </Switch>
      </ProjectState>

    );
  }
}
export default App;
