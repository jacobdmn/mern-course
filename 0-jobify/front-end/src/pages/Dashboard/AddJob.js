import { FormRow, FormRowSelect, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import * as S from '../../assets/css/styles'
const AddJob = () => {
  const {
    showAlert,
    displayAlert,
    position,
    company,
    location,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company) {
      displayAlert()
      return
    }
    createJob()
  }
  return (
    <S.DashboardFormPage>
      <form className='form'>
        <h3>add job </h3>
        {showAlert && <Alert />}

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
            labelText='type'
            name='jobType'
            value={jobType}
            handleChange={handleChange}
            list={jobTypeOptions}
          />
          <div className='btn-container'>
            <button
              className='btn btn-block submit-btn'
              type='submit'
              onClick={handleSubmit}
            >
              submit
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault()
                clearValues()
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </S.DashboardFormPage>
  )
}

export default AddJob
