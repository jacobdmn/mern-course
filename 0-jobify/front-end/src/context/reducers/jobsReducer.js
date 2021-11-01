import { TOGGLE_SIDEBAR, CLOSE_SIDEBAR } from '../actions/jobsActions'

const reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar }
  }
  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, showSidebar: false }
  }
  throw new Error(`no such action : ${action}`)
}

export default reducer
