import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.svg'
import { useJobsContext } from '../context/jobsContext'

export const SmallSidebar = () => {
  const { closeSidebar } = useJobsContext()
  return (
    <Wrapper>
      <div className='content'>
        <button className='close-btn' onClick={() => closeSidebar()}>
          <FaTimes />
        </button>
        <header>
          <img src={logo} alt='jobify' className='logo' />
        </header>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  @media (min-width: 768px) {
    display: none;
  }

  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;

  .content {
    background: var(--white);
    width: var(--fluid-width);
    height: 90vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .logo {
    margin: 0 auto;
    display: block;
  }
`

export default SmallSidebar
