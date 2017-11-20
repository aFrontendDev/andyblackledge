import React from 'react';
import PropTypes from 'prop-types';

import { createMarkup } from '../helpers.js';

class Differential extends React.Component {

  constructor(props) {
    super(props);

    console.log(this.props);
    let preTitle = '';
    let title = '';

    this.props.data.Fields.map((item, index) => {
      switch(item.FieldName) {
        case 'pre_title':
          preTitle = item.FieldValues[0];
        case 'title':
          title = item.FieldValues[0];
      }
    });

    this.state = {
      jsonData: this.props.data,
      preTitle: preTitle,
      title: title
    }
  }

  renderPreTitle() {
    return (
      <p className="differential__pre-title">{this.state.preTitle}</p>
    );
  }

  renderTitle() {
    return (
      <h2 className="differential__title">{this.state.title}</h2>
    );
  }

  render() {
    const jsonData = this.props.data.Fields;

    return (

      <div className="section-block">

      {
        this.state.preTitle
        ? this.renderPreTitle()
        : null
      }

      {
        this.state.title
        ? this.renderTitle()
        : null
      }

      </div>
    )
  }
}

Differential.propTypes = {
  data: PropTypes.object
}


export default Differential;