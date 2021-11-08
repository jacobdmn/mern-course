import { useAppContext } from '../../context/appContext'
import { Outlet, Navigate } from 'react-router-dom'
import { Navbar, SmallSidebar, BigSidebar } from '../../components'
import styled from 'styled-components'

const SharedLayout = () => {
  const { user } = useAppContext()
  return (
    <>
      {!user && <Navigate to='/landing' />}
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`
export default SharedLayout
