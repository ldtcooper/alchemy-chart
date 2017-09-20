import { connect } from 'react-redux';
import { login, logout} from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = ( state ) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  login: (user) => (dispatch(login(user))),
  logout: () => (dispatch(logout())),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
