import React from 'react';
import PropTypes from 'prop-types';

class Colours extends React.Component {
  render() {
    return (
      <section className="block block--size-a">
        <header>
          <h2 className="header--stylesheet">Colours</h2>
        </header>
        <div className="box-grid">
          <div className="box">
            <p className="box__title">Brand Colour A</p>
            <div className="box__tile" style={{backgroundColor: "#ED1C24"}}>#ED1C24</div>
          </div>
          <div className="box">
            <p className="box__title">Brand Colour B</p>
            <div className="box__tile" style={{backgroundColor: "#00A650"}}>#00A650</div>
          </div>
          <div className="box">
            <p className="box__title">Brand Colour C</p>
            <div className="box__tile" style={{backgroundColor: "#2056AE"}}>#2056AE</div>
          </div>
          <div className="box">
            <p className="box__title">Brand Colour D</p>
            <div className="box__tile" style={{backgroundColor: "#FABC09"}}>#FABC09</div>
          </div>
        </div>

        <div className="box-grid">
          <div className="box">
            <p className="box__title">Secondary Colour A</p>
            <div className="box__tile" style={{backgroundColor: "#434041"}}>#434041</div>
          </div>
          <div className="box">
            <p className="box__title">Secondary Colour B</p>
            <div className="box__tile" style={{backgroundColor: "#747172"}}>#747172</div>
          </div>
          <div className="box">
            <p className="box__title">Secondary Colour C</p>
            <div className="box__tile" style={{backgroundColor: "#AEADAD"}}>#AEADAD</div>
          </div>
          <div className="box">
            <p className="box__title">Secondary Colour D</p>
            <div className="box__tile" style={{backgroundColor: "#D7D6D6"}}>#D7D6D6</div>
          </div>
        </div>
      </section>

    )
  }
}

export default Colours;