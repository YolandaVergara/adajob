import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import NewAccount from "./auth/NewAccount";
import Applies from "./applies/Applies";
import ProjectState from "../context/sidebar/applyState";

class App extends React.Component {
  render() {
    return (
      <ProjectState>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/NewAccount" component={NewAccount} />
          <Route exact path="/Applies" component={Applies} />
        </Switch>
      </ProjectState>
    );
  }
}
export default App;
