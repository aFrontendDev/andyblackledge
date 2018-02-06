import React from 'react';
import PropTypes from 'prop-types';

class Headings extends React.Component {
  render() {
    return (
      <section className="block block--size-a">
        <header>
          <h2 className="header--stylesheet">Headings</h2>
        </header>
        <h1 className="title-style-a">H1.	Cras justo odio, dapibus</h1>
        <h2 className="title-style-b">H2. Cras justo odio, dapibus</h2>
        <h3 className="title-style-c">H3. Cras justo odio, dapibus</h3>
        <h4 className="title-style-d">H4/Submenu. Cras justo odio, dapibus</h4>
        <h5 className="title-style-e">H5/Caption. Cras justo odio, dapibus</h5>
      </section>

    )
  }
}

export default Headings;