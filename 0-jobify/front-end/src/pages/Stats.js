import { useEffect } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'
import { StatsContainer, Alert, Loading } from '../components'
const Stats = () => {
  const { showStats, isLoading, showAlert } = useAppContext()
  useEffect(() => {
    showStats()
  }, [])
  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    )
  }
  if (showAlert) {
    return <Alert />
  }
  return (
    <Wrapper>
      <StatsContainer />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .content-loading {
    display: flex;
    justify-content: center;
  }
`

export default Stats
