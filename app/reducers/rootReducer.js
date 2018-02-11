import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import { blogPostsSuccess, blogPostsError} from './blogReducer';



const appReducer = combineReducers({
  menuIsIn: menuReducer,
  blogPostsSuccess,
  blogPostsError
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;