import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Sidebarmenu = () => {
  const history=useHistory();
  console.log(history.location.pathname);
  return (
    <>
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
         
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-chart-pie" />
              <p>
               Pages
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              {
                history.location.pathname=='/apitesting'? 
                <li className="nav-item">
                <Link to='/apitesting' className="nav-link active">
                  <i className="far fa-circle nav-icon" />
                  <p>Api testing</p>
                </Link>
              </li>
              :
              <li className="nav-item">
                <Link to='/apitesting' className="nav-link ">
                  <i className="far fa-circle nav-icon" />
                  <p>Api testing</p>
                </Link>
              </li>
              }
             
             {
                history.location.pathname=='/todolistapi'? <li className="nav-item">
                <Link to='/todolistapi' className="nav-link active">
                  <i className="far fa-circle nav-icon" />
                  <p>Todo </p>
                </Link>
              </li>
              :
              <li className="nav-item">
              <Link to='/todolistapi' className="nav-link ">
                  <i className="far fa-circle nav-icon" />
                  <p>Todo </p>
                </Link>
            </li>
              }
            </ul>
          </li>
      
          
           </ul>
      </nav>
    </>
  )
}

export default Sidebarmenu
