import React from 'react'
import {DashMenu, NavLink} from './DashboardStyle'

function Dashboard() {
  return (
    <DashMenu>
        <NavLink to='/sellerhome'>Home</NavLink>
        <NavLink to='/addproduct'>Add Product</NavLink>
    </DashMenu>
  )
}

export default Dashboard