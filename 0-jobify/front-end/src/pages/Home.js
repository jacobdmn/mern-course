import { Link } from 'react-router-dom'
import styled from 'styled-components'
import main from '../assets/main-1.svg'
import logo from '../assets/logo.svg'
import { Navigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

function Home() {
  const { user } = useAppContext()
  return (
    <>
      {user && <Navigate to='/dashboard/stats' />}
      <Wrapper>
        <nav>
          <img src={logo} alt='jobs app' />
        </nav>
        <div className='container page'>
          <div className='info'>
            <h1>
              job
              <span> tracking </span>
              app
            </h1>

            <p>
              I'm baby viral enamel pin chartreuse cliche retro af selfies
              kinfolk photo booth plaid jianbing actually squid 3 wolf moon
              lumbersexual. Hell of humblebrag gluten-free lo-fi man braid
              leggings.
            </p>

            <Link to='/register' className='btn btn-hero'>
              Login / Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  .page {
    min-height: calc(100vh - 6rem);
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: 6rem;
    display: flex;
    align-items: center;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .container {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`

export default Home
