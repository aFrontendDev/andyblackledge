import React from 'react';
import PropTypes from 'prop-types';

import BlogPosts from './components/blog/blogPosts.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="wrapper">
        <BlogPosts posts={this.props.posts} getPosts={this.props.onGetPosts} />
      </div>
    );
  }
}

App.propTypes = {
  onGetPosts: PropTypes.func,
  posts: PropTypes.array
};
