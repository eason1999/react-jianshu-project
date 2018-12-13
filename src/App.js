import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Header from './common/header';
import routes from './route'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Router>
          {/* <div>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/detail" component={Detail}></Route>
          </div> */}
          {renderRoutes(routes)}
        </Router>
      </Fragment>
    );
  }
}

export default App;
