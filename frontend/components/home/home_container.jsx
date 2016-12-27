import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = ({session, topPicks}) => ({
  currentUser: session.currentUser,
  topPicks
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Home);
