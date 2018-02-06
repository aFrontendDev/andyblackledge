import React from 'react';
import PropTypes from 'prop-types';

class Lists extends React.Component {
  render() {
    return (
      <section className="block block--size-a">
        <h2 className="header--stylesheet">Lists</h2>
        <h3>Unordered List</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
          <li>Nulla volutpat aliquam velit
            <ul>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
            </ul>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </ul>
        <h3>Unstyled List</h3>
        <ul className="list--unstyled">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
          <li>Nulla volutpat aliquam velit
            <ul>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
            </ul>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </ul>
        <h3>Ordered List</h3>
        <ol>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Nulla volutpat aliquam velit
            <ol>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
            </ol>
          </li>
          <li>Nulla volutpat aliquam velit</li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </ol>

        <h3>Definition List</h3>
        <dl>
          <dt>Description lists</dt>
          <dd>A description list is perfect for defining terms.</dd>
          <dt>Euismod</dt>
          <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
          <dd>Donec id elit non mi porta gravida at eget metus.</dd>
          <dt>Malesuada porta</dt>
          <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
        </dl>
      </section>

    )
  }
}

export default Lists;