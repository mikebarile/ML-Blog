import { connect } from 'react-redux';
import AddPost from './add_post';
import { createPost } from '../../actions/post_actions';

const mapStateToProps = ({session, allPosts}) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(AddPost);
