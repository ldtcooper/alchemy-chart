import { RECEIVE_CURRENT_USER } from '../actions/session_action';

const _nullUser = Object.freeze({currentUser: null});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
