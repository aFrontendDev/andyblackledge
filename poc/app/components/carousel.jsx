import React from 'react';
import PropTypes from 'prop-types';

import { createMarkup } from '../helpers.js';

class Carousel extends React.Component {
  
  constructor() {
    super();
  }

  render() {
    const jsonData = this.props.data;
    
    return (

      <div className="section-block">
      </div>
    )
  }
}

Carousel.propTypes = {
  data: PropTypes.object
}


export default Carousel;