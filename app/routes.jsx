import React from 'react';
import {
  Switch, Route
} from 'react-router-dom';

// Pages
import Home from './pages/home';
import ComponentSwitch from './pages/componentSwitch';
import DynamicPage from './pages/dynamicpage';

class Routes extends React.Component {
  render() {

    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dynamic/:anId" component={DynamicPage} />
        <Route component={ComponentSwitch} />
      </Switch>
    )
  }
}

export default Routes;