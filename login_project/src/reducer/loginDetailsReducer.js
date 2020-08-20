import { LOGIN_REDUCER } from "../shared/actionConstants";

export const initialState = {
  username: "",
  password: "",
  userDetails: {},
  usernameError: null,
  passwordError: null,
  request: {},
  loginFail: {}
};

const loginDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REDUCER.RESET_ERRORS:
      return { ...state, usernameError: null, passwordError: null }
    case LOGIN_REDUCER.SET_USERNAME:
      return { ...state, username: action.value };
    case LOGIN_REDUCER.SET_PASSWORD:
      return { ...state, password: action.value };
    case LOGIN_REDUCER.SET_USERNAME_ERROR:
      return { ...state, usernameError: action.value };
    case LOGIN_REDUCER.SET_PASSWORD_ERROR:
      return { ...state, passwordError: action.value };
    case LOGIN_REDUCER.SET_USER_DETAILS:
      return { ...state, userDetails: action.value };
    default:
      return state;
  }
};

export default loginDetailsReducer;