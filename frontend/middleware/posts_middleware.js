import { receivePosts, receivePost, receiveNewPost, removePost,
  receivePostErrors, updatePostForm,
  FETCH_POST, FETCH_POSTS, CREATE_POST, DELETE_POST, EDIT_POST
} from '../actions/post_actions';

import {fetchPost, fetchPosts, createPost, deletePost,
  editPost, fetchCoords, fetchSearchPosts, fetchTopPosts
} from '../util/post_api_util';

export default ({ getState, dispatch }) => next => action => {
  const receivePostSuccess = post => {
    dispatch(receivePost(post));
  };

  const receivePostsSuccess = posts => {
    dispatch(receivePosts(posts));
  };

  const removePostSuccess = post => {
    dispatch(removePost(post));
  };

  const receiveNewPostSuccess = post => {
    dispatch(receiveNewPost(post));
  };

  const receiveImageSuccess = object => {
    dispatch(updatePostForm({image_url: object.secure_url}));
  };

  const errorCallback = xhr => dispatch(receivePostErrors(xhr.responseJSON));

  switch(action.type) {
    case FETCH_POST:
      fetchPost(action.id, receivePostSuccess, errorCallback);
      return next(action);
    case FETCH_POSTS:
      fetchPosts(action.params, receivePostsSuccess);
      return next(action);
    case CREATE_POST:
      createPost(action.post, receiveNewPostSuccess);
      return next(action);
    case DELETE_POST:
      deletePost(action.id, removePostSuccess);
      return next(action);
    case EDIT_POST:
      editPost(action.post, receivePostSuccess);
      return next(action);
    default:
      return next(action);
  }
};
