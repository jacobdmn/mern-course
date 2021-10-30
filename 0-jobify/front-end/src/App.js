import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Error, Register, Dashboard } from './pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
