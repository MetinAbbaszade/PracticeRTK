import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Users from './pages/Users'
import Todo from './pages/Todo'

function App() {

  return (
    <>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='users' element={<Users />} />
        <Route path='todo' element={<Todo />} />
      </Routes>
    </>
  )
}

export default App
