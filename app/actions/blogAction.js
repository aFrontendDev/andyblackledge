const { contentfulVariables } = require('../accessDetails.js');
const contentful = require('contentful');
const client = contentful.createClient({
  space: contentfulVariables.space,
  accessToken: contentfulVariables.accessToken
});

export function getPostsSuccess(posts) {
  return {
    type: "GET_POSTS_SUCCESS",
    posts
  };
}

export function getPostSuccess(post) {
  return {
    type: "GET_POST_SUCCESS",
    post
  };
}

export function getPostsError(bool) {
  return {
    type: "GET_POSTS_ERROR",
    getPostsError: bool
  }
}

export function getPostError(bool) {
  return {
    type: "GET_POST_ERROR",
    getPostError: bool
  }
}

export function clearPost() {
  return {
    type: "CLEAR_POST"
  }
}

// get data from contentful api
export function getPosts(skip, amount, posts) {
  const skipNum = skip ? skip : 0;
  const amountNum = amount ? amount : 10;

  return (dispatch) => {

    client.getEntries({
      skip: skipNum,
      limit: amountNum,
      order: 'sys.createdAt'
    })
    .then(function (entries) {
      console.log(entries.items.length);
      dispatch(getPostsSuccess(entries.items));
    })
    .catch(err => {
      console.log(err);
      dispatch(getPostsError(true));
    });

  };
}

// get individual post from contentful api
export function getPost(id, post) {
  console.log(id);

  return (dispatch) => {

    client.getEntry(id)
      .then(entry => {
        console.log(entry);
        dispatch(getPostSuccess(entry));
      })
      .catch(err => {
        console.log(err);
        dispatch(getPostError(true));
      });
  };
}