import React from 'react'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import { useAppContext } from '../context/appContext'

export default function Chart() {
  const { monthlyApplications } = useAppContext()
  return (
    <>
      <h4 style={{ textAlign: 'center', marginTop: '50px' }}>
        Monthly Applications
      </h4>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart
          width={500}
          height={300}
          data={monthlyApplications}
          margin={{
            top: 50,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey='count' fill='#2cb1bc' barSize={100} />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}
