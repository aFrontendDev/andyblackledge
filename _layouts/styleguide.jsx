import React from 'react';
import PropTypes from 'prop-types';

// header and footer to be included on every page
import Header from '../_components/header.jsx';
import Footer from '../_components/footer.jsx';

// add components here
import Styleguide from '../_components/styleguide/styleguide.jsx';

class StyleguidePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const pageClass = this.props.pageClass ? this.props.pageClass : '';
    const visibleGrid = this.props.visibleGrid;

    return (
      <div>
        <Header />
        <div id="page" className={pageClass}>
          <main className="main" role="main">
            <div className="layout layout--a">
              <div className="region region--a">
                <div className="region-inner">

                  <Styleguide />                  

                </div>
              </div>
            </div>

            
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}

export default StyleguidePage;