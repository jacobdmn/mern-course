import { useEffect } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../context/appContext'
import { StatsContainer, Alert, Loading, Chart } from '../../components'
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
    return (
      <Wrapper>
        <Alert />
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <StatsContainer />
      <Chart />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .content-loading {
    display: flex;
    justify-content: center;
  }
`

export default Stats
