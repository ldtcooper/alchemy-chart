import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  error: ErrorReducer
});

export default RootReducer;
