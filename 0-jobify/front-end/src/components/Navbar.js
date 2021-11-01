import { useState } from 'react'
import { useUserContext } from '../context/userContext'
import { useJobsContext } from '../context/jobsContext'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
const Navbar = () => {
  const { user, logoutUser } = useUserContext()
  const { toggleSidebar } = useJobsContext()
  const [showLogout, setShowLogout] = useState(false)

  return (
    <Wrapper>
      <div className='nav-center'>
        <button className='toggle-btn' onClick={() => toggleSidebar()}>
          <FaAlignLeft />
        </button>
        <img src={logo} alt='jobify' />
        {user && (
          <div className='btn-container'>
            <button className='btn' onClick={() => setShowLogout(!showLogout)}>
              <FaUserCircle />
              {user.name}
              <FaCaretDown />
            </button>
            <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
              <button onClick={() => logoutUser()} className='dropdown-btn'>
                logout
              </button>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
  }
  background: var(--white);
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
`

export default Navbar
