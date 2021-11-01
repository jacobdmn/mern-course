import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
import App from './App'
import { UserProvider } from './context/userContext'
import { JobsProvider } from './context/jobsContext'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <JobsProvider>
        <App />
      </JobsProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
