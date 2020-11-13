import React from 'react'
import Sidebarmenu from './Sidebarmenu'

const MainSidebar = () => {
  return (
    <>
       <aside className="main-sidebar sidebar-dark-primary elevation-2">
    {/* Brand Logo */}
   
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      
      {/* SidebarSearch Form */}
      
      {/* Sidebar Menu */}
      <Sidebarmenu></Sidebarmenu>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
    </>
  )
}

export default MainSidebar
