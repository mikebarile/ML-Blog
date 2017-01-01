import { connect } from 'react-redux';
import EditPost from './edit_post';
import { editPost, fetchPost } from '../../actions/post_actions';

const mapStateToProps = ({session, post}) => ({
  currentUser: session.currentUser,
  post
});

const mapDispatchToProps = dispatch => ({
  fetchPost: (title) => dispatch(fetchPost(title)),
  editPost: (post) => dispatch(editPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(EditPost);
