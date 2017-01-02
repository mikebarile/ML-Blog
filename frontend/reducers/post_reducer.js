import { RECEIVE_POST, CLEAR_POST } from '../actions/post_actions';
import { RECEIVE_NEW_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';

const defaultState = {
  id: null,
  title: "",
  body: "",
  user_id: null,
  first_name: "",
  last_name: "",
  created_at: ""
};

const PostReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_POST:
      return action.post;
    case CLEAR_POST:
      return defaultState;
    case RECEIVE_NEW_COMMENT:
      newState = merge({}, state);
      newState.comments.unshift(action.comment);
      return newState;
    default:
      return state;
  }
};

export default PostReducer;
