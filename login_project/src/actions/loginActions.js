import { LOGIN_REDUCER } from "../shared/actionConstants";

export const setUserDetails = data => {
  return {
    type: LOGIN_REDUCER.SET_USER_DETAILS,
    value: data
  }
}

export const setUsernameError = () => {
  return {
    type:  LOGIN_REDUCER.SET_USERNAME_ERROR, 
    value: null
  }
}

export const setPasswordError = () => {
  return {
    type: LOGIN_REDUCER.SET_PASSWORD_ERROR, 
    value: null
  }
}

export const resetErrors = () => {
  return {
    type: LOGIN_REDUCER.RESET_ERRORS
  }
}

export const setErrors = ele => {
  return {
    type: `SET_${ele.path.toUpperCase()}_ERROR`, 
    value: ele.message
  }
}

export const setUsername = val => {
  return {
    type: LOGIN_REDUCER.SET_USERNAME, 
    value: val.target.value
  }
}

export const setPassword = val => {
  return {
    type: LOGIN_REDUCER.SET_PASSWORD, 
    value: val.target.value
  }
}