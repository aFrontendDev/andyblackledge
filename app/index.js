import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';

import AppContainer from './containers/appContainer';
import { configureStore } from './store/configureStore';


const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>
), document.getElementById('react-app-component'));
