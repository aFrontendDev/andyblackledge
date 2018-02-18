import React from 'react';
import PropTypes from 'prop-types';

class BlogPosts extends React.Component {
  
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.getPosts = this.getPosts.bind(this);
  }

  componentWillReceiveProps(newProps) {

    this.setState({
      posts: newProps.posts
    });
  }

  getPosts(skip, amount) {
    this.props.getPosts(skip, amount);
  }

  componentWillMount() {
    this.getPosts(0, 10);
  }

  render() {

    return (
      <div>
        <p>POSTS</p>
        {this.state.posts.length}
        {
          this.state.posts.map((item, index) => {
            const jsonData = item.fields;
            const postId = item.sys.id;
            const itemClick = this.props.viewPost.bind(this, postId);

            return(
              <div key={index} onClick={itemClick}>
                <h2>
                  {jsonData.title}
                </h2>
                <p>{jsonData.body}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

BlogPosts.propTypes = {
  getPosts: PropTypes.func,
  posts: PropTypes.array,
  viewPost: PropTypes.func
}


export default BlogPosts;