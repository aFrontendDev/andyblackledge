import React from 'react';
import PropTypes from 'prop-types';

class BlogPost extends React.Component {
  
  constructor(props) {
    super(props);

    this.onBack = this.onBack.bind(this);
  }

  onBack() {
    this.props.clearPost();
  }

  render() {
    const jsonData = this.props.post.fields;

    return (
      <div>
        <button onClick={this.props.clearPost}>
          BACK
        </button>
        
        <h2>
          {jsonData.title}
        </h2>
        <p>{jsonData.body}</p>
        <p>{jsonData.created}</p>
        {
          jsonData.tags.map((item, index) => {
            return(
              <span key={index}>
                {item}
              </span>
            )
          })
        }
      </div>
    )
  }
}

BlogPost.propTypes = {
  post: PropTypes.object,
  clearPost: PropTypes.func
}


export default BlogPost;