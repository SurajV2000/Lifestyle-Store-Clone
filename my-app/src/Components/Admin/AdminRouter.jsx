import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AdminManageProduct from './AdminManageProduct'
import AdminProduct from './AdminProduct'

function AdminRouter() {
  return (
        <Routes>
            <Route path="/products" element={<AdminProduct/>}></Route>
            <Route path="/manageProduct" element={<AdminManageProduct/>}></Route>
            {/* <Route path=''></Route> */}
        </Routes>
    
  )
}

export default AdminRouter