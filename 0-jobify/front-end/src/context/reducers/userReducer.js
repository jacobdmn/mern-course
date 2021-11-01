import {
  DISPLAY_ALERT,
  HIDE_ALERT,
  SET_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from '../actions/userActions'

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return { ...state, ...action.payload }
  }
  if (action.type === HIDE_ALERT) {
    return { ...state, ...action.payload }
  }
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      showAlert: true,
      alertText: 'Success! User Created',
      alertType: 'success',
    }
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: 'danger',
    }
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      showAlert: true,
      alertText: 'Login Successful!',
      alertType: 'success',
    }
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: 'danger',
    }
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      user: null,
      token: null,
    }
  }
  throw new Error(`no such action : ${action}`)
}

export default reducer
