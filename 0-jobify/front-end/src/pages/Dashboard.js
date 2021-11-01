import { useUserContext } from '../context/userContext'
import { useJobsContext } from '../context/jobsContext'
import { Navigate } from 'react-router-dom'
import { Navbar, SmallSidebar } from '../components'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Stats from './Stats'
const Dashboard = () => {
  const { user } = useUserContext()
  const { showSidebar } = useJobsContext()
  return (
    <>
      {!user && <Navigate to='/' />}
      <Wrapper>
        <div className='dashboard'>
          {showSidebar && <SmallSidebar />}
          <div className='big-sidebar'>this is big screen sidebar</div>
          <div>
            <Navbar />
            <Routes>
              <Route path='/' element={<Stats />}></Route>
            </Routes>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .big-sidebar {
    display: none;
  }

  @media (min-width: 768px) {
    .big-sidebar {
      display: block;
      background: red;
      min-height: 100vh;
      width: 200px;
      transition: var(--transition);
    }
    .dashboard {
      grid-template-columns: auto 1fr;
    }
  } ;
`
export default Dashboard
