import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const SessionReducer = (state = {currentUser: null}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
