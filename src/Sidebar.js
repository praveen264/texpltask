import React from 'react'
import MainContent from './MainContent'
import MainSidebar from './MainSidebar'
import Navbar from './Nabar'
import Sidebarmenu from './Sidebarmenu'

const Sidebar = () => {
  return (
<div className="wrapper">
  {/* Navbar */}
 <Navbar></Navbar>
  {/* /.navbar */}
  {/* Main Sidebar Container */}
 <MainSidebar></MainSidebar>
  {/* Content Wrapper. Contains page content */}
<MainContent></MainContent>
  {/* /.content-wrapper */}
  <footer className="main-footer">
    <strong>Copyright © 2014-2020 </strong>
    All rights reserved.
    <div className="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.1.0-pre
    </div>
  </footer>
  {/* Control Sidebar */}
  <aside className="control-sidebar control-sidebar-dark">
    {/* Control sidebar content goes here */}
  </aside>
  {/* /.control-sidebar */}
</div>


 

  )
}

export default Sidebar
