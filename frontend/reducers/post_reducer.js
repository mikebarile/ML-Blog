import {RECEIVE_POST, REMOVE_POST, RECEIVE_POST_ERRORS,
  CLEAR_POST_ERRORS, CLEAR_POST, CLEAR_STATE
} from '../actions/post_actions';
import { merge } from 'lodash';

const defaultState = {
  currentPost: {
    id: null,
    title: "",
    body: "",
    first_name: "",
    last_name: "",
    created_at: ""
  },
  errors: []
};

const PostReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_POST:
      return {
        currentPost: action.post,
        errors: []
      };
    case REMOVE_POST:
      if (action.post.id === state.currentPost.id){
        return defaultState;
      }
      else {
        return state;
      }
    case RECEIVE_POST_ERRORS:
      return {
        currentPost: defaultState,
        errors: action.errors
      };
    case CLEAR_POST:
      return defaultState;
    case CLEAR_POST_ERRORS:
      newState = merge({}, state);
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default PostReducer;
