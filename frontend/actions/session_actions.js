import * as APIUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

// action creators

export const login = (user) => dispatch => {
  APIUtils.login(user)
    .then(
      (logUser) => (dispatch(receiveCurrentUser(logUser))),
      (error) => (dispatch(receiveErrors(error.responseJSON)))
    );
};

export const logout = () => dispatch => {
  APIUtils.logout()
    .then(
      () => (dispatch(receiveCurrentUser(null))),
      (error) => (dispatch(receiveErrors(error.responseJSON)))
    );
};

export const signup = (user) => dispatch => {
  APIUtils.signup(user)
    .then(
      (newUser) => (dispatch(receiveCurrentUser(newUser))),
      (error) => (dispatch(receiveErrors(error.responseJSON)))
    );
};
