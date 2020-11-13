import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts'
import MainSidebar from './MainSidebar';
import Navbar from './Nabar';
import axios from 'axios';

const DashboardComponent = () => {
  const [listofdatasmp, listofdatamp] = useState([]);
  const [listofdatasap, listofdataap] = useState([]);
  const [listoftotaldatas, listoftotaldata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requestmp = await axios.get("https://oneshotapi.herokuapp.com/colleges/statecollege/MP");
      listofdatamp(requestmp.data)

      const requestap = await axios.get("https://oneshotapi.herokuapp.com/colleges/statecollege/AP");
      listofdataap(requestap.data)


      const request2 = await axios.get("https://oneshotapi.herokuapp.com/colleges/");
      listoftotaldata(request2.data)
    }
    fetchData();
  }, []);
  console.log(listofdatasap)
  console.log(listofdatasmp)
  // console.log((listofdatasmp.length / listoftotaldatas.length) * 100)
  return (
    <>

<div className="wrapper">
      {/* Navbar */}
     <Navbar></Navbar>
      {/* /.navbar */}
      {/* Main Sidebar Container */}
     <MainSidebar></MainSidebar>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">
               
                </h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
        <h1>Welcome</h1>  
        </section>
       
        {/* /.content */}
      </div>
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
    


    
    </>
  )
}

export default DashboardComponent
