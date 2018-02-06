import { actionTypes } from './actionTypes';

// export function menuAction(menuInOut) {
//   return {
//     type: actionTypes.menuIn,
//     menuInOut,
//   };
// }

export function menuAction(bool) {
  return {
    type: actionTypes.menuIn,
    menuIsIn: bool
  };
}