import { allUsers } from '../util/user_api_util';

export const RECIEVE_USERS = 'RECIEVE_USERS';

const receiveUsers = (users) => {
  return {
    type: RECIEVE_USERS,
    users
  };
};

export const fetchUsers = () => dispatch => {
  allUsers()
  .then(
    (charts) => dispatch(receiveUsers(charts))
  );
};
