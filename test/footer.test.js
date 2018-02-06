import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import Footer from '../app/components/_footer/footer';


it('should render the footer', () => {
  const tree = renderer.create(
    <Footer  />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});