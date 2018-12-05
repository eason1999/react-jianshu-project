import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Router>
          <Route exact path="/" component={Home}></Route>
        </Router>
      </Fragment>
    );
  }
}

export default App;
