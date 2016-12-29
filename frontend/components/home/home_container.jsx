import { connect } from 'react-redux';
import Home from './home';
import { fetchPosts } from '../../actions/post_actions';

const mapStateToProps = ({session, allPosts}) => ({
  currentUser: session.currentUser,
  allPosts
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Home);
