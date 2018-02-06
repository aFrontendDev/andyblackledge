import React from 'react';
import PropTypes from 'prop-types';

class Promo extends React.Component {

  render() {
    let jsonData = this.props.data;
    let tagsLength = jsonData.tags ? jsonData.tags.length : null;
    let ctaLength = jsonData.ctas ? jsonData.ctas.length : null;
    return (
      <div className="block block--size-a promo" id={jsonData.id}>
        <h1>{jsonData.title}</h1>

        {
          tagsLength ?
          <ul>
          {
            jsonData.tags.map(function (item, index) {
              return <li key={index}>{item}</li>
            })
          }
          </ul>
          : null
        }

        {
          ctaLength ?
          <div className="ctas">
            {
              jsonData.ctas.map( (cta, index) => {
                return (
                  <p key={index}>
                    <a href={cta.href} target="_blank">
                    {cta.text}
                    </a>
                  </p>
                );
              })
            }
          </div>
          : null
        }

        <picture>
            <source media="(min-width: 1024px)" srcSet={jsonData.image.lrg} />
            <source media="(min-width: 768px)" srcSet={jsonData.image.med} />
            <img srcSet={jsonData.image.small} src={jsonData.image.lrg} alt="alt text" />
        </picture>
      </div>
    )
  }
}

Promo.propTypes = {
  data: PropTypes.object.isRequired
}


export default Promo;