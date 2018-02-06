import React from 'react';
import PropTypes from 'prop-types';

export default class AppExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="app-example">
        <p>😁</p>
      </div>
    );
  }
}

AppExample.propTypes = {
};
