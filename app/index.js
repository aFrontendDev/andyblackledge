import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';

import AppContainer from './containers/appContainer';
import AppExampleContainer from './containers/appExampleContainer';
import { configureStore } from './store/configureStore';


const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <AppExampleContainer />
    </BrowserRouter>
  </Provider>
), document.getElementById('react-app-component'));
