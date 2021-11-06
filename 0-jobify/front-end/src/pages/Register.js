import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FormRow, Alert, Logo } from '../components'
import { useAppContext } from '../context/appContext'

import { useNavigate } from 'react-router-dom'
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}
function Register() {
  const [values, setValues] = useState(initialState)

  const { isLoading, showAlert, displayAlert, registerUser, loginUser, user } =
    useAppContext()
  const navigate = useNavigate()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      // remember to pass as an object
      // showAlert({ alertText: 'something went wrong', alertType: 'success' })
      displayAlert()
      return
    }
    // create user
    const tempUser = { name, email, password }

    if (isMember) {
      loginUser(tempUser)
    } else {
      registerUser(tempUser)
    }
  }
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/dashboard/stats')
      }, 3000)
    }
  }, [user, navigate])
  return (
    <>
      <Wrapper className='page full-page'>
        <div className='container'>
          <form className='form' onSubmit={onSubmit}>
            <Logo />
            <h3>{values.isMember ? 'Login' : 'Register'}</h3>
            {/* alert */}
            {showAlert && <Alert />}
            {/* name field */}
            {!values.isMember && (
              <FormRow
                type='text'
                name='name'
                value={values.name}
                handleChange={handleChange}
              />
            )}

            {/* single form row */}
            <FormRow
              type='email'
              name='email'
              value={values.email}
              handleChange={handleChange}
            />
            {/* end of single form row */}
            {/* single form row */}
            <FormRow
              type='password'
              name='password'
              value={values.password}
              handleChange={handleChange}
            />
            {/* end of single form row */}
            <button
              type='submit'
              className='btn btn-block'
              disabled={isLoading}
            >
              {isLoading ? 'Please wait...' : 'Submit'}
            </button>
            <p>
              {values.isMember ? 'Not a member yet?' : 'Already a member?'}

              <button
                type='button'
                onClick={toggleMember}
                className='member-btn'
              >
                {values.isMember ? 'Register' : 'Login'}
              </button>
            </p>
          </form>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`

export default Register
