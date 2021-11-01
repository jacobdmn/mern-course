import { useUserContext } from '../context/userContext'
import { Navigate } from 'react-router-dom'
import { Navbar, SmallSidebar, BigSidebar } from '../components'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Stats from './Stats'
import AllJobs from './AllJobs'
import AddJob from './AddJob'
import Profile from './Profile'
const Dashboard = () => {
  const { user } = useUserContext()
  return (
    <>
      {!user && <Navigate to='/' />}
      <Wrapper>
        <div className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <Routes>
              <Route path='stats' element={<Stats />}></Route>
              <Route path='all-jobs' element={<AllJobs />}></Route>
              <Route path='add-job' element={<AddJob />}></Route>
              <Route path='profile' element={<Profile />}></Route>
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

  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
  } ;
`
export default Dashboard
