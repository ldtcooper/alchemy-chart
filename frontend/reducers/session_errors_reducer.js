import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const SessionErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      console.log(action.errors);
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default SessionErrorReducer;
