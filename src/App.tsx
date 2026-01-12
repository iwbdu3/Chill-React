import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import MyList from './pages/MyList'
import Series from './pages/Series'
import Film from './pages/Film'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/myList" element={<MyList />} />
      <Route path="/series" element={<Series />} />
      <Route path="/film" element={<Film />} />
    </Routes>
  )
}

export default App
