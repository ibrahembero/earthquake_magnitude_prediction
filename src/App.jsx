import React from 'react'
import HomePage from './HomePage'
import { Route, Routes } from 'react-router-dom'
import EarthquakePrediction from './EarthquakePrediction'
import Header from './Components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/predict' element={<EarthquakePrediction/>}/>
      </Routes>
    </div>
  )
}

export default App