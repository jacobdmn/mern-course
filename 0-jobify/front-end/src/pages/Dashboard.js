import { useGlobalContext } from '../context/appContext'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {
  const { user } = useGlobalContext()
  return (
    <>
      {!user && <Navigate to='/' />}
      <h1 style={{ margin: '1rem' }}>Welcome to Dashboard, {user?.name}</h1>
    </>
  )
}

export default Dashboard
