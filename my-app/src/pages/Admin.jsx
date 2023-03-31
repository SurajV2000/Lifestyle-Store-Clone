import React from 'react'
import AdminNavbar from '../Components/Admin/AdminNavbar'
import AdminRouter from '../Components/Admin/AdminRouter'
import AdminSidebar from '../Components/Admin/AdminSidebar'



function Admin(){
  return (
    <div>
      <AdminNavbar/>
        <AdminSidebar/>
       <AdminRouter/>
    </div>
  )
}
export default Admin

