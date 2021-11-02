import React, { useContext, useReducer } from 'react'
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  TOGGLE_SIDEBAR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
} from './actions'
import reducer from './reducer'

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
  showSidebar: false,
  position: '',
  company: '',
  location: '',
  jobType: 'full-time',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  status: 'pending',
  statusOptions: ['pending', 'interview', 'declined'],
}
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const displayAlert = () => {
    dispatch({
      type: DISPLAY_ALERT,
    })
    clearAlert()
  }
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      })
    }, 3000)
  }

  const registerUser = async (user) => {
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      const { data } = await axios.post('/auth/register', user)
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user: data.user, token: data.token },
      })

      addUserToLocalStorage({ user: data.user, token: data.token })
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  const loginUser = async (user) => {
    dispatch({ type: LOGIN_USER_BEGIN })
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
    clearAlert()
  }

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    removeUserFromLocalStorage()
  }
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }
  const handleChange = (e) => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: { name: e.target.name, value: e.target.value },
    })
  }
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES })
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        logoutUser,
        toggleSidebar,
        handleChange,
        clearValues,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
