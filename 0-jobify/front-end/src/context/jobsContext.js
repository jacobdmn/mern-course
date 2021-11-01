import React, { useContext, useReducer } from 'react'
import { TOGGLE_SIDEBAR, CLOSE_SIDEBAR } from './actions/jobsActions'
import reducer from './reducers/jobsReducer'
const JobsContext = React.createContext()

const initialState = {
  showSidebar: false,
}
const JobsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  return (
    <JobsContext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </JobsContext.Provider>
  )
}
// make sure use
export const useJobsContext = () => {
  return useContext(JobsContext)
}

export { JobsProvider }
