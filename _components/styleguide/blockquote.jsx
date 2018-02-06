import React from 'react';
import PropTypes from 'prop-types';

class Blockquote extends React.Component {
  render() {
    return (
        <section className="block block--size-a">
          <h2 className="visually-hidden">Blockquote</h2>
          <blockquote className="quote">
            <div className="quote__detail">
              <p>&quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&quot;</p>
            </div>
            <footer className="quote__caption"><cite>&mdash; Person Name, Company Name</cite></footer>
          </blockquote>
        </section>

    )
  }
}

export default Blockquote;