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
    // console.log('newProps');
    // console.log(newProps);

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

            return(
              <div key={index}>
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
  posts: PropTypes.array
}


export default BlogPosts;