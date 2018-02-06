import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Promo from '../components/promo.jsx';
import Feature from '../components/feature.jsx';

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
    console.log(urlParams);

    axios
    .get('/_temp/fake-service.json',{
      urlData: urlParams
    })
    .then(res => {
      const data = res.data;
      console.log(data);

      this.setState({
        pageComponents: data.components
      });

      document.title = data.pageTitle;
    })
    .catch((error) => {
      console.log(error);
    });   
  }

  render() {
    return (
      <section>
        <h2>Test Page</h2>
        <p>This is an example page of getting data from a webservice, the idea being that it could be integrated with a CMS webservice</p>

        <div className="components">
          {
            this.state.pageComponents ?
              this.state.pageComponents.map((component, index) => {

                switch(component.component) {
                  case 'promo':
                    return <Promo data={component} key={index}/>
                  case 'feature':
                    return <Feature data={component} key={index}/>
                }
              })
            : null
            }
        </div>
      </section>
    )
  }
}

export default ComponentSwitch;