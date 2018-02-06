import React from 'react';
import PropTypes from 'prop-types';

import Blockquote from './blockquote.jsx';
import Buttons from './buttons.jsx';
import Form from './form.jsx';
import Headings from './headings.jsx';
import Icons from './icons.jsx';
import Lists from './lists.jsx';
import Paragraphs from './paragraphs.jsx';
import Colours from './colours.jsx';

class Styleguide extends React.Component {
  render() {
    return (
      <div className="styleguide">
        <Headings />
        <Paragraphs />
        <Colours />
        <Blockquote />
        <Lists />
        <Form />
        <Buttons />
        <Icons />
      </div>
    )
  }
}
module.exports = Styleguide;
export default Styleguide;