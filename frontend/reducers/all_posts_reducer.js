import { RECEIVE_SEARCH_POSTS, CLEAR_STATE
} from '../actions/post_actions';
import { merge } from 'lodash';

const defaultState = [];

const AllPostsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_POSTS:
      return action.posts;
    case CLEAR_STATE:
      return defaultState;
    default:
      return state;
  }
};

export default AllPostsReducer;
