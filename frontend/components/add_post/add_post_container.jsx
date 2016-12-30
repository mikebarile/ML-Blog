import { connect } from 'react-redux';
import AddPost from './add_post';
import { fetchPosts } from '../../actions/post_actions';

const mapStateToProps = ({session, allPosts}) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(AddPost);
