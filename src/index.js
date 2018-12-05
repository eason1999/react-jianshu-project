import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './../node_modules/antd/dist/antd.css';
import GlobalStyle from './static/reset';
import './static/fonts/iconfont.css';
import store from './store';

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />
  </Fragment>, document.getElementById('root'));

