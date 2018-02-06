import React from 'react';
import PropTypes from 'prop-types';

class Icon extends React.Component {
  render() {
    const iconName = this.props.iconName;

    switch(iconName) {
      case 'search':
        return (
          <svg role="presentation" aria-hidden="true" className="svg-icon svg-icon--search" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
            <g className="svg-icon__fill" fillRule="nonzero">
              <path d="M23.91 25.268a.954.954 0 0 0 1.361.003.954.954 0 0 0-.008-1.367l-5.654-5.654-1.497 1.106 5.798 5.912zm-1.42 1.41l-7.417-7.564 4.733-3.495 6.871 6.871a2.954 2.954 0 0 1 .009 4.196 2.954 2.954 0 0 1-4.196-.009z"/>
              <path d="M11 22C4.925 22 0 17.075 0 11S4.925 0 11 0s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/>
            </g>
          </svg>
        )
      case 'check-circle':
        return (
          <svg role="presentation" aria-hidden="true" className="svg-icon svg-icon--check-circle" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <g className="svg-icon__fill" fillRule="nonzero">
              <path d="M15 30C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-2c7.18 0 13-5.82 13-13S22.18 2 15 2 2 7.82 2 15s5.82 13 13 13z"/>
              <path d="M19.96 10.355l1.43 1.23-7.275 8.77-4.724-3.693 1.141-1.512 3.305 2.584z"/>
            </g>
          </svg>
        )
      case 'cross-circle':
        return (
          <svg role="presentation" aria-hidden="true" className="svg-icon svg-icon--cross-circle" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <g className="svg-icon__fill" fillRule="nonzero">
              <path d="M15 30C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-2c7.18 0 13-5.82 13-13S22.18 2 15 2 2 7.82 2 15s5.82 13 13 13z"/>
              <path d="M18.925 10l1.433 1.395-8.925 9.166L10 19.165z"/>
              <path d="M9.899 11.534l1.395-1.433 9.165 8.926-1.395 1.432z"/>
            </g>
          </svg>
        )
      case 'download':
        return (
          <svg role="presentation" aria-hidden="true" className="svg-icon svg-icon--download" viewBox="0 0 20 23" xmlns="http://www.w3.org/2000/svg">
            <g className="svg-icon__fill" fillRule="evenodd">
              <path d="M0 21h20v2H0z"/>
              <path fillRule="nonzero" d="M17.473 7.527l1.436 1.392-8.705 8.99-8.73-8.99 1.434-1.393 7.294 7.51z"/>
              <path d="M9 0h2v16H9z"/>
            </g>
          </svg>
        )
      case 'upload':
        return (
          <svg role="presentation" aria-hidden="true" className="svg-icon svg-icon--upload" viewBox="0 0 20 23" xmlns="http://www.w3.org/2000/svg">
            <g className="svg-icon__fill" fillRule="evenodd">
              <path d="M0 2h20V0H0z"/>
              <path fillRule="nonzero" d="M17.473 15.473l1.436-1.392-8.705-8.99-8.73 8.99 1.434 1.393 7.294-7.51z"/>
              <path d="M9 23h2V7H9z"/>
            </g>
          </svg>
        )
      case 'chevron-right':
        return (
          <svg role="presentation" aria-hidden="true" className="svg-icon svg-icon--chevron-right" viewBox="0 0 8 13">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g transform="translate(-777.000000, -424.000000)" className="svg-icon__stroke" strokeWidth="2">
                      <g transform="translate(712.000000, 421.000000)">
                          <polyline transform="translate(69.000000, 9.500000) rotate(-90.000000) translate(-69.000000, -9.500000) " points="64 7 69 12 74 7"></polyline>
                      </g>
                  </g>
              </g>
          </svg>
        )
      case 'exclamation-circle':
        return (
          <svg role="presentation" aria-hidden="true" fill="none" className="svg-icon svg-icon--exclamation-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <g strokeWidth="2" transform="translate(-347 -1944)">
              <circle className="svg-icon__stroke" cx="363" cy="1960" r="15"/>
              <circle className="svg-icon__fill" cx="363" cy="1964.7" r="1.2"/>
              <path className="svg-icon__stroke" d="M363 1961v-9"/>
            </g>
          </svg>
        )
      default:
        return (
          <p>no icon</p>
        )
    }
  }
}

Icon.propTypes = {
  iconName: PropTypes.string.isRequired
}

export default Icon;