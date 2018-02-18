import React from 'react';
import PropTypes from 'prop-types';

import BlogPosts from './components/blog/blogPosts.jsx';
import BlogPost from './components/blog/blogPost.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null
    };

    this.viewPost = this.viewPost.bind(this);
  }

  viewPost(id) {
    if (!id) {
      return;
    }
    console.log(id);

    this.props.getPost(id);
  }

  componentWillReceiveProps(newProps) {

    this.setState({
      post: newProps.post
    });
  }

  render() {

    return (
      <div className="wrapper">
        {
          this.state.post && this.state.post.fields
          ? <BlogPost post={this.state.post} clearPost={this.props.clearPost} />
          : <BlogPosts posts={this.props.posts} getPosts={this.props.onGetPosts} viewPost={this.viewPost} />
        }
      </div>
    );
  }
}

App.propTypes = {
  onGetPosts: PropTypes.func,
  posts: PropTypes.array,
  getPost: PropTypes.func,
  post: PropTypes.object,
  clearPost: PropTypes.func
};
