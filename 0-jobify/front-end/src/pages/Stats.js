import styled from 'styled-components'
const Stats = () => {
  return (
    <Wrapper className='dashboard-page'>
      <div className='content'>
        <h3>stats</h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .content {
    padding: 2rem 0;
  }
`

export default Stats
