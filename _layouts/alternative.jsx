import React from 'react';
import PropTypes from 'prop-types';

// header and footer to be included on every page
import Header from '../_components/header.jsx';
import Footer from '../_components/footer.jsx';

// add components here
import Test from '../_components/test.jsx';
import Promo from '../_components/promo.jsx';

// add json page files here
import PageData from '../_data/alternative.json';

class Alternative extends React.Component {

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

                  <Promo data={PageData.promo_a}/>
                  <Promo data={PageData.promo_b}/>
                  <Test data={PageData.test_a}/>

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

Alternative.propTypes = {
  pageClass: PropTypes.string
};

export default Alternative;