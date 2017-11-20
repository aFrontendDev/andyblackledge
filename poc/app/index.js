import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';

import AppContainer from './containers/appContainer';
import { configureStore } from './store/configureStore';

import App from './App.jsx';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      {/*<App />*/}
      <AppContainer />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));