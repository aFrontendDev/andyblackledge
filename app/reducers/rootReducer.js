import { combineReducers } from 'redux';
import menuReducer from './menuReducer';


const appReducer = combineReducers({
  menuIsIn: menuReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;