import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import Header from '../app/components/_header/header';

const fakeFunc = () => {};

it('should render the header', () => {
  const tree = renderer.create(
    <Header menuAction={fakeFunc} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('should simulate header menu btn press', () => {
  const component = shallow(
    <Header menuAction={fakeFunc} />
  );
  const preventDefault = jest.fn();

  component.find('.header__menu-btn').simulate('click',  { preventDefault });
  expect(toJson(component)).toMatchSnapshot();
  expect(preventDefault).toBeCalled();
});