export const FETCH_POST = "FETCH_POST";
export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const CLEAR_POST_ERRORS = "CLEAR_POST_ERRORS";
export const CLEAR_POST = "CLEAR_POST";
export const UPDATE_POST_FORM = "UPDATE_POST_FORM";
export const CLEAR_STATE = "CLEAR_STATE";
export const CLEAR_POST_FORM = "CLEAR_POST_FORM";

export const fetchPost = (id) => ({
  type: FETCH_POST,
  id
});

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const createPost = (post) => ({
  type: CREATE_POST,
  post
});

export const deletePost = (id) => ({
  type: CREATE_POST,
  id
});

export const editPost = (post) => ({
  type: EDIT_POST,
  post
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const receiveNewPost = (post) => ({
  type: RECEIVE_NEW_POST,
  post
});

export const removePost = (post) => ({
  type: REMOVE_POST,
  post
});

export const receivePostErrors = (errors) => ({
  type: RECEIVE_POST_ERRORS,
  errors
});

export const clearPostErrors = () => ({
  type: CLEAR_POST_ERRORS
});

export const clearPost = () => ({
  type: CLEAR_POST
});

export const updatePostForm = (formParams) => ({
  type: UPDATE_POST_FORM,
  formParams
});

export const clearState = () => ({
  type: CLEAR_STATE
});

export const clearPostForm = () => ({
  type: CLEAR_POST_FORM
});
