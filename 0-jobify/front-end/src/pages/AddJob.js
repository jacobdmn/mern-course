import { useState } from 'react'
import styled from 'styled-components'
import { FormRow } from '../components'

const initialState = {
  position: 'front-end developer',
  company: 'google',
  location: 'los angeles',
  type: 'part time',
}

const AddJob = () => {
  const [job, setJob] = useState(initialState)

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value })
  }
  return (
    <Wrapper className='dashboard-page'>
      <div className='content'>
        <div className='form'>
          <h3>add job </h3>
          {/* position */}
          <div className='form-center'>
            <FormRow
              type='text'
              name='position'
              value={job.position}
              handleChange={handleChange}
            />
            {/* company */}
            <FormRow
              type='text'
              name='company'
              value={job.company}
              handleChange={handleChange}
            />
            {/* location */}
            <FormRow
              type='text'
              name='location'
              value={job.location}
              handleChange={handleChange}
            />
            {/* type */}
            <div className='form-row'>
              <label htmlFor='type' className='form-label'>
                type
              </label>

              <select
                name='type'
                value={job.type}
                onChange={handleChange}
                className='type'
              >
                <option value='part-time'>part time</option>
                <option value='full time'>full time</option>
                <option value='freelance'>freelance </option>
                <option value='remote'>remote </option>
              </select>
            </div>
            <button className='btn btn-block submit-btn'>submit</button>
            <button className='btn btn-block clear-btn'>clear</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .content {
    border-radius: var(--border-radius);
    width: 100%;
    background: var(--white);
    border-radius: var(--borderRadius);
    padding: 2rem;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .clear-btn {
    margin-top: 1rem;
  }
  @media (min-width: 992px) {
    .form-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
    .clear-btn,
    .submit-btn {
      margin-top: 0.5rem;
    }
  }
`

export default AddJob
