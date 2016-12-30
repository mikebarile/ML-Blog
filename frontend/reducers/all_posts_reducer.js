import { RECEIVE_POSTS, RECEIVE_NEW_POST } from '../actions/post_actions';
import { merge } from 'lodash';

const defaultState = [];

const AllPostsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_NEW_POST:
      newState = state.concat([action.post]);
      return newState;
    default:
      return state;
  }
};

export default AllPostsReducer;
