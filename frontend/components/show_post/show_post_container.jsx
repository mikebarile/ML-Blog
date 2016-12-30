import { connect } from 'react-redux';
import ShowPost from './show_post';
import { signup } from '../../actions/session_actions';
import { fetchPost } from '../../actions/post_actions';

const mapStateToProps = ({session, post}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  post: post
});

const mapDispatchToProps = (dispatch, { location }) => ({
  processForm: (user) => dispatch(signup(user)),
  fetchPost: (title) => dispatch(fetchPost(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowPost);
