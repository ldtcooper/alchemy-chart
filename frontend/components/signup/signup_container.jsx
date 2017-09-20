import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupPage from './signup';

const mapStateToProps = ( state ) => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => (dispatch(signup(user)))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
