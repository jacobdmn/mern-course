import styled from 'styled-components'
const Profile = () => {
  return (
    <Wrapper className='dashboard-page'>
      <div className='content'>
        <h1>profile page</h1>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .content {
    padding: 2rem 0;
  }
`

export default Profile
