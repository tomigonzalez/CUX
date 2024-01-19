import { useState } from 'react'

import './App.css'
import Wrapper from './pages/Wrapper/Wrapper'
import { AppRoutes } from './routes/AppRoutes'
import ContextProvider from './components/Context/Context'

function App() {


  return (
   
      <Wrapper>
        <AppRoutes />
      </Wrapper>
   
  )
}

export default App
