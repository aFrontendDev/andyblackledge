import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import menuReducer from '../app/reducers/menuReducer';
import { actionTypes } from '../app/actions/actionTypes';

it('should return default val', () => {
  expect(
    menuReducer(
      undefined,
      ''
    )
  ).toEqual(false);
});

it('should return menuIn true', () => {
  expect(
    menuReducer(
      false,
      {
        type: actionTypes.menuIn
      }
    )
  ).toEqual(true);
});


it('should return menuIn false', () => {
  expect(
    menuReducer(
      true,
      {
        type: actionTypes.menuIn
      }
    )
  ).toEqual(false);
});