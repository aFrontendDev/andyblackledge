import { actionTypes } from '../actions/actionTypes';

export default function menuReducer(state = false, action) {
  switch (action.type) {
    case actionTypes.menuIn:
      return state ? false : true;
    default:
      return state;
  }
}
