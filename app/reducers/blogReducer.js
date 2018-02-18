
export function blogPostsSuccess(state = [], action) {
  switch(action.type) {

    case 'GET_POSTS_SUCCESS':
      console.log('success - action.blog');
      console.log(action.posts);
      return action.posts;

      default:
        return state;
  }
}

export function blogPostsError(state = false, action) {
  switch(action.type) {

    case 'GET_POSTS_ERROR':
      return false;

      default:
        return state;
  }
}

export function blogPostSuccess(state = {}, action) {
  switch(action.type) {

    case 'GET_POST_SUCCESS':
      console.log('success - action.blog post');
      console.log(action.post);
      return action.post;

      default:
        return state;
  }
}

export function blogPostError(state = false, action) {
  switch(action.type) {

    case 'GET_POST_ERROR':
      return false;

      default:
        return state;
  }
}
