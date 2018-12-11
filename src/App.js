import React, { Component } from 'react';
import Home from './pages/Home';
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Home/:id?" component={Home} />
          <Route path="*" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;

