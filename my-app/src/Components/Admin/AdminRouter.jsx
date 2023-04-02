import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AdminManageProduct from './AdminManageProduct'
import AdminProduct from './AdminProduct'
import AdminEdit from './AdminEdit'
import ManageUsers from './ManageUsers'

function AdminRouter() {
  return (
        <Routes>
            <Route path="/products" element={<AdminProduct/>}></Route>
            <Route path="/manageProduct" element={<AdminManageProduct/>}></Route>
            <Route path='/editProduct/:id' element={<AdminEdit/>}></Route>
            <Route path="/users" element={<ManageUsers/>}></Route>
        </Routes>
  )
}
export default AdminRouter