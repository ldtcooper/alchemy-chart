import { RECIEVE_USERS } from '../actions/user_actions';

const UsersReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECIEVE_USERS:
      return action.users;
    default:
      return state;
  }
};
