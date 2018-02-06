import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import Promo from '../app/components/promo';

const testData = {
  "title": "Test Promo",
  "copy": "some text for this promo",
  "id": "id789",
  "link": {
    "href": "#",
    "text": "Link to something"
  }
};

it('should render an empty promo', () => {
  const tree = renderer.create(
    <Promo data={{}} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render a promo', () => {
  const tree = renderer.create(
    <Promo data={testData} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});