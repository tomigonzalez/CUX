
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'


type Props = {}

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        
        <Route path="*" element={<div />} />
      </Routes>
  )
}