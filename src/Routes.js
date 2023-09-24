import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './Screens/Landing'
import Login from './Screens/Auth/Login'
const RouteConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Login />}></Route>
      </Routes>
    </Router>
  )
}
export default RouteConfig
