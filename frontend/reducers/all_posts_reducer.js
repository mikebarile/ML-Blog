import { RECEIVE_POSTS } from '../actions/post_actions';
import { merge } from 'lodash';

const defaultState = [];

const AllPostsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    default:
      return state;
  }
};

export default AllPostsReducer;
