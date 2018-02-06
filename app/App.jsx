import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch, Route
} from 'react-router-dom';

// Routing
import Routes from './routes.jsx';

// menu, header and footer to be included on every page
import Header from './components/_header/header.jsx';
import Footer from './components/_footer/footer.jsx';
import Menu from './components/menu.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.menuClick = this.menuClick.bind(this);
  }

  menuClick(v) {
    // switch menu-in state from true to false
    this.props.onMenuAction(v);
  }

  render() {

    return (
      <div className="wrapper">

        <Menu menuIsIn={this.props.menuIsIn} onMenuAction={this.props.onMenuAction} />

        <Header menuAction={this.menuClick} />

        <main className="main" id="main">
          <Routes />
        </main>

        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  menuIsIn: PropTypes.bool,
  onMenuAction: PropTypes.func
};
