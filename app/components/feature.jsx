import React from 'react';
import PropTypes from 'prop-types';

import { createMarkup } from '../helpers.js';

class Feature extends React.Component {
  
  constructor() {
    super();
  }

  render() {
    const jsonData = this.props.data;
    
    return (

      <div className="section-block">
        <div className="layout layout--a">
          <div className="region region--a">
            <div className="region-inner">

              <article className="block block--size-a feature-test" id={jsonData.id}>
                <h1>{jsonData.title}</h1>
                <div dangerouslySetInnerHTML={createMarkup(jsonData.copy)} />
              </article>

            </div>
          </div>          
        </div>
      </div>
    )
  }
}

Feature.propTypes = {
  data: PropTypes.object
}


export default Feature;