import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import { blogPostsSuccess, blogPostsError, blogPostSuccess, blogPostError} from './blogReducer';



const appReducer = combineReducers({
  menuIsIn: menuReducer,
  blogPostsSuccess,
  blogPostsError,
  blogPostSuccess,
  blogPostError
});

const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_POST') {
    state = {}
  }
  return appReducer(state, action)
}

export default rootReducer;