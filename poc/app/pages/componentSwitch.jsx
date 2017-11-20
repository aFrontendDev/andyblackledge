import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Promo from '../components/promo.jsx';
import Feature from '../components/feature.jsx';
import Differential from '../components/differential.jsx';
import Carousel from '../components/carousel.jsx';

class ComponentSwitch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pageData: null
    };

    this.getPageData = this.getPageData.bind(this);
  }

  componentDidMount() {
    this.getPageData();
  }

  getPageData() {
    const urlParams = this.props.location;
    const pathname = urlParams.pathname;
    console.log(pathname);
    const requestedPage = pathname.replace(/[\/]+/g, '');
    console.log(requestedPage);

    axios
    .get(`./_temp/${requestedPage}.json`,{
      urlData: urlParams
    })
    .then(res => {
      const data = res.data;
      console.log(data);

      this.setState({
        pageComponents: data.Content
      });

      document.title = `United Airlines | ${data.PageTitle}`;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <div className="components">
          {
            this.state.pageComponents ?
              this.state.pageComponents.map((component, index) => {

                switch(component.TemplateName) {
                  case 'Differential':
                    return <Differential data={component} key={index}/>
                  case 'Carousel':
                    return <Carousel data={component} key={index}/>
                }
              })
            : null
            }
        </div>
      </div>
    )
  }
}

export default ComponentSwitch;