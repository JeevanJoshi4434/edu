import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './Screens/Landing'
const RouteConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
      </Routes>
    </Router>
  )
}
export default RouteConfig
