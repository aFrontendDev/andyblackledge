import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { menuAction } from '../actions/menuAction';
import { getPosts } from '../actions/blogAction';
import App from '../App';

const mapStateToProps = (state) => {
  return {
    menuIsIn: state.menuIsIn,
    posts: state.blogPostsSuccess
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuAction: (menuIsIn) => dispatch(menuAction(menuIsIn)),
    onGetPosts: (skip, amount) => dispatch(getPosts(skip, amount))
  };
};

const AppContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));

export default AppContainer;