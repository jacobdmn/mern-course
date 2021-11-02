import styled from 'styled-components'
import { FormRow, FormRowSelect } from '../components'
import { useAppContext } from '../context/appContext'

const AddJob = () => {
  const {
    showAlert,
    displayAlert,
    alertType,
    alertText,
    position,
    company,
    location,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!position || !company || !location) {
      displayAlert()
    }
  }
  return (
    <Wrapper className='dashboard-page'>
      <div className='content'>
        <form className='form' onSubmit={handleSubmit}>
          <h3>add job </h3>
          {showAlert && (
            <div className={`alert alert-${alertType}`}>{alertText}</div>
          )}

          {/* position */}
          <div className='form-center'>
            <FormRow
              type='text'
              name='position'
              value={position}
              handleChange={handleChange}
            />
            {/* company */}
            <FormRow
              type='text'
              name='company'
              value={company}
              handleChange={handleChange}
            />
            {/* location */}
            <FormRow
              type='text'
              name='location'
              value={location}
              handleChange={handleChange}
            />
            {/* job type */}
            <FormRowSelect
              name='status'
              value={status}
              handleChange={handleChange}
              list={statusOptions}
            />
            {/* job status */}
            <FormRowSelect
              name='jobType'
              value={jobType}
              handleChange={handleChange}
              list={jobTypeOptions}
            />
            <div className='btn-container'>
              <button
                className='btn btn-block clear-btn'
                onClick={() => clearValues()}
              >
                clear
              </button>
              <button className='btn btn-block submit-btn' type='submit'>
                submit
              </button>
            </div>
          </div>
        </form>
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
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`

export default AddJob
