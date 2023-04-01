import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { Men } from '../pages/Men'

function MainRoutes() {
  return (
   
    <Routes>
        <Route path="/" element={<HomePage/>}/>
   <Route path="/men" element={<Men/>}/>
    </Routes>
  )
}

export default MainRoutes