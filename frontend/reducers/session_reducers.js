import { RECEIVE_CURRENT_USER } from '../actions/session_action';

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = action.user;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
