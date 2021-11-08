import React from 'react'
import styled from 'styled-components'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import { useAppContext } from '../context/appContext'

export default function Chart() {
  const { monthlyApplications } = useAppContext()
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={monthlyApplications}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey='count' fill='#2cb1bc' barSize={100} />
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 4rem;
  h4 {
    text-align: center;
    margin-bottom: 2rem;
  }
`
