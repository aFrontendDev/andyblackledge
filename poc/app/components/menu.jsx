import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.menuClick = this.menuClick.bind(this);
  }

  menuClick(v) {
    // switch menu-in state from true to false
    this.props.onMenuAction(v);
  }

  render() {
    let menuIn = this.props.menuIsIn ? 'menu--in' : '';

    return (
      <div className={'menu ' + menuIn}>
        <button className="btn btn--unstyled menu__close-btn" onClick={this.menuClick}>Close</button>
        <ul className="nav">
          <li><a href="/">Home</a></li>
          <li><a href="/test">Test</a></li>
          <li><a href="/dynamic/123">Dynamic Page</a></li>
        </ul>
      </div>
    )
  }
}

Menu.propTypes = {
  menuIsIn: PropTypes.bool,
  onMenuAction: PropTypes.func.isRequired
};

export default Menu;