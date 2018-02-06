import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../_misc/icon.jsx';

class Buttons extends React.Component {
  render() {
    return (

      <div>
        <section className="block block--size-a">
          <header>
            <h2 className="header--stylesheet">Default buttons <small>(.btn)</small></h2>
          </header>
          <div className="form-actions styleguide-seperator">
            <button type="submit" className="btn btn--style-a">.btn--style-a</button>
            <button type="submit" className="btn btn--style-a btn--icon-right">
              .btn--style-a (icon)
              <Icon iconName="chevron-right" />
            </button>
            <button type="submit" className="btn btn--style-a btn--icon-right" disabled>.btn--style-a (disabled)</button>
          </div>
          <div className="form-actions styleguide-seperator">
            <button type="submit" className="btn btn--style-b">.btn--style-b</button>
            <button type="submit" className="btn btn--style-b btn--icon-right">
              .btn--style-b (icon)
              <Icon iconName="chevron-right" />
            </button>
            <button type="submit" className="btn btn--style-b btn--icon-right" disabled>.btn--style-b (disabled)</button>
          </div>
          <div className="form-actions styleguide-seperator">
            <button type="submit" className="btn btn--style-c">.btn--style-c</button>
            <button type="submit" className="btn btn--style-c btn--icon-right">
              .btn--style-c (icon)
              <Icon iconName="chevron-right" />
            </button>
            <button type="submit" className="btn btn--style-c btn--icon-right" disabled>.btn--style-c (disabled)</button>
          </div>
        </section>

        <section className="block block--size-a">
          <header>
            <h2 className="header--stylesheet">Large buttons <small>(.btn.btn--large)</small></h2>
          </header>

          <div className="form-actions styleguide-seperator">
            <button type="submit" className="btn btn--style-a btn--large">.btn--style-a.btn--large</button>
            <button type="submit" className="btn btn--style-a btn--icon-right btn--large">
              .btn--style-a.btn--large (icon)
              <Icon iconName="chevron-right" />
            </button>
            <button type="submit" className="btn btn--style-a btn--icon-right btn--large" disabled>.btn--style-a.btn--large (disabled)</button>
          </div>
          <div className="form-actions styleguide-seperator">
            <button type="submit" className="btn btn--style-b btn--large">.btn--style-b.btn--large</button>
            <button type="submit" className="btn btn--style-b btn--icon-right btn--large">
              .btn--style-b.btn--large (icon)
              <Icon iconName="chevron-right" />
            </button>
            <button type="submit" className="btn btn--style-b btn--icon-right btn--large" disabled>.btn--style-b.btn--large (disabled)</button>
          </div>
          <div className="form-actions styleguide-seperator">
            <button type="submit" className="btn btn--style-c btn--large">.btn--style-c.btn--large</button>
            <button type="submit" className="btn btn--style-c btn--icon-right btn--large">
              .btn--style-c.btn--large (icon)
              <Icon iconName="chevron-right" />
            </button>
            <button type="submit" className="btn btn--style-c btn--icon-right btn--large" disabled>.btn--style-c.btn--large (disabled)</button>
          </div>
        </section>
      </div>

    )
  }
}

export default Buttons;