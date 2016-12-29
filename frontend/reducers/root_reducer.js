import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PostReducer from './post_reducer';
import AllPostsReducer from './all_posts_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  post: PostReducer,
  allPosts: AllPostsReducer
});

export default RootReducer;
