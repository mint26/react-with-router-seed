import React, { Component } from 'react';
import Main from './pages/Main';
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/main/:id?" component={Main} />
          <Route path="*" component={Main}/>
        </Switch>
      </div>
    );
  }
}

export default App;

