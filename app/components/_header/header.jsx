import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  
  constructor() {
    super();

    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle(e) {
    e.preventDefault();
    this.props.menuAction();
  }

  render() {
    return (
      <header className="header" id="header" role="banner" itemScope itemType="http://schema.org/WPHeader">
        <button className="header__menu-btn btn btn--unstyled" onClick={this.clickHandle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z"/>
          </svg>
        </button>
        <h1 className="header__title" itemScope itemType="http://schema.org/WPHeader"><a href="/">Page Header</a></h1>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/test"}>Test</Link></li>
          <li><Link to={"/dynamic/123"}>Dynamic Page</Link></li>
        </ul>
      </header>
    )
  }
}

Header.propTypes = {
  menuAction: PropTypes.func.isRequired,
};

export default Header;