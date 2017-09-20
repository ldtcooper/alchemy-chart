import SessionErrorReducer from './session_error_reducer';
import {combineReducers} from 'redux';

const ErrorReducer = combineReducers({
  session: SessionErrorReducer
});

export default ErrorReducer;
