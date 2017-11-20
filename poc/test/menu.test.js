import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import Menu from '../app/components/menu';

const fakeFunc = () => {};

it('should render the menu', () => {
  const tree = renderer.create(
    <Menu onMenuAction={fakeFunc} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render the menu with menuIn prop set', () => {
  const tree = renderer.create(
    <Menu onMenuAction={fakeFunc} menuIsIn={true} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('should simulate menu close btn press', () => {
  const component = shallow(
    <Menu onMenuAction={fakeFunc} />
  );

  expect(toJson(component)).toMatchSnapshot();

  component.find('.menu__close-btn').simulate('click');
  
  expect(toJson(component)).toMatchSnapshot();
});