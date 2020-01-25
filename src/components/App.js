import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./applies/auth/Login";
import NewAccount from "./applies/auth/NewAccount";
import Applies from "./applies/Applies";
import ProjectState from "../context/applies/applyState";

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
