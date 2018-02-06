import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../_misc/icon.jsx';

class Icons extends React.Component {
  render() {
    const iconNames = ['search', 'check-circle', 'cross-circle', 'download', 'upload', 'exclamation-circle', 'chevron-right'];

    return (
      <section className="block block--size-a">
        <header>
          <h2 className="header--stylesheet">Icons</h2>
        </header>
        <div className="icons">
          <ul className="list--unstyled">
            {
              iconNames.map((item, index) => {
                return(
                  <li key={index}>
                    <p>Icon name: {item}</p>
                    <Icon iconName={item} />
                  </li>
                );
              })
            }
          </ul>
        </div>
    </section>
    )
  }
}

export default Icons;