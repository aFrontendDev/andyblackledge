import React from 'react';
import PropTypes from 'prop-types';

class Test extends React.Component {
  
  constructor() {
    super();
    this.createMarkup = this.createMarkup.bind(this);
  }

  // convert html string to html
  createMarkup() {
    return {__html: this.props.data.bodyCopy};
  }

  render() {
    return (
      <div className="block block--size-a test">
        <h1>{this.props.data.title}</h1>
        <div dangerouslySetInnerHTML={this.createMarkup()} />
      </div>
    )
  }
}

Test.propTypes = {
  data: PropTypes.object
}


export default Test;