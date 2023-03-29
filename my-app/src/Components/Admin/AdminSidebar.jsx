import React from 'react'
import "./Admin.css"
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { Link } from 'react-router-dom';
import AdminProduct from './AdminProduct';


const sidebarData=[
{title:"Products",icon:<MdOutlineProductionQuantityLimits/>,link:"/products"},
{title:"Manage Product",icon:<BsGraphUpArrow/>,link:"/manageProduct"},
{title:"Manage Product",icon:<BsGraphUpArrow/>,link:"/manageProduct"},
{title:"Manage Product",icon:<BsGraphUpArrow/>,link:"/manageProduct"},

]

function AdminSidebar() {
  return (
    <div className="AdminSideBar">
      <ul className="SidebarList">
      {
        sidebarData.map((el,id)=>{
          return(
            <Link to={el.link}>
            <li key={id}
             className="row"
             >
            <div className='icon'>{el.icon}</div>  
            <div className='title'>{el.title}</div>
            </li>
            </Link>
          )
        })}
      </ul>
    </div>
    
  )
}

export default AdminSidebar;