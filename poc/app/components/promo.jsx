import React from 'react';
import PropTypes from 'prop-types';

import { createMarkup } from '../helpers.js';

class Promo extends React.Component {
  
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

              <article className="block block--size-a promo-test" id={jsonData.id}>
                <h1>{jsonData.title}</h1>
                <p>{jsonData.copy}</p>
                {
                  jsonData.link ?
                    <a href={jsonData.link.href}>{jsonData.link.text}</a>
                  : null
                }
              </article>

            </div>
          </div>          
        </div>
      </div>
    )
  }
}

Promo.propTypes = {
  data: PropTypes.object
}


export default Promo;