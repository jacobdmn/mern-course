import React, { useContext, useReducer } from 'react'
import {
  DISPLAY_ALERT,
  HIDE_ALERT,
  SET_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from './actions/userActions'
import reducer from './reducers/userReducer'
import axios from 'axios'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
}
const UserContext = React.createContext()
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const displayAlert = ({
    showAlert = true,
    alertText = 'Please provide all values',
    alertType = 'danger',
  }) => {
    dispatch({
      type: DISPLAY_ALERT,
      payload: { showAlert, alertText, alertType },
    })
  }
  const hideAlert = () => {
    setTimeout(() => {
      dispatch({ type: HIDE_ALERT, payload: { showAlert: false } })
    }, 3000)
  }
  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }
  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  }

  const registerUser = async (user) => {
    // mention about REGISTER_USER_BEGIN
    setLoading()
    try {
      const { data } = await axios.post('/auth/register', user)
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user: data.user, token: data.token },
      })
      addUserToLocalStorage({ user: data.user, token: data.token })
    } catch (error) {
      // console.log(error.response)
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    hideAlert()
  }
  const loginUser = async (user) => {
    setLoading()
    try {
      const { data } = await axios.post('/auth/login', user)
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user: data.user, token: data.token },
      })
      addUserToLocalStorage({ user: data.user, token: data.token })
    } catch (error) {
      // console.log(error.response)
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    hideAlert()
  }
  const logoutUser = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    dispatch({ type: LOGOUT_USER })
  }
  return (
    <UserContext.Provider
      value={{
        ...state,

        displayAlert,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}

export { UserProvider }
