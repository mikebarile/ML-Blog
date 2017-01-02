import { RECEIVE_POST, CLEAR_POST } from '../actions/post_actions';
import { RECEIVE_NEW_COMMENT, REMOVE_COMMENT, RECEIVE_EDITED_COMMENT
} from '../actions/comment_actions';
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
    case REMOVE_COMMENT:
      newState = merge({}, state);
      newState.comments = newState.comments.filter(function(comment) {
        return comment.id !== action.comment.id;
      });
      return newState;
    case RECEIVE_EDITED_COMMENT:
      newState = merge({}, state);
      newState.comments = newState.comments.map(function(comment) {
        if (comment.id === action.comment.id){
          return action.comment;
        }
        else {
          return comment;
        }
      });
      return newState;
    default:
      return state;
  }
};

export default PostReducer;
