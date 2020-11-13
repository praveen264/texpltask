import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './Nabar';
import MainSidebar from './MainSidebar';
const accesstoken='ab4d368e2d84ce615242eaa67aba004311e0325a';
const apiUrl='https://owlbot.info/api/v4/dictionary';

const Apitokentesting = () => {
  
  const [listofdefinitiondatas, listofdefinitiondata] = useState([]);
  const [listofdatas, listofdata] = useState([]);
  const [search,setSearch]=useState("");
  // axios.interceptors.request.use(
  //   config=>{
  //     config.headers.authorization=`Bearer ${accesstoken}`;
  //      return config;
  //   },
  //   error=>{
  //     return Promise.reject(error);
  //   }
  // );
  const addSearch = async(event) =>{
    event.preventDefault();
    const authToken=axios.create({
    
      headers:{
       Authorization:`Token ${accesstoken}`
      }
    });
    const request = await authToken.get('https://owlbot.info/api/v4/dictionary/'+search);
    listofdefinitiondata(request.data.definitions[0])
    listofdata(request.data)
  
  }
    // useEffect(() => {
    //     async function fetchData() {
    //       const request = await authToken.get(`/owl`);
    //       listofdefinitiondata(request.data.definitions)
    //       listofdata(request.data)
    //     }
    //     fetchData();
    //   }, []);
      console.log(listofdefinitiondatas);
      console.log(listofdatas);
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
        <form>
    <input type="text"  value={search} onChange={event => setSearch(event.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Search term" />
    <button type="submit" onClick={addSearch} className="btn btn-primary">Submit</button>
             
    </form>
     Definition: {
      listofdefinitiondatas.definition
      }
      <br></br>
      Prononciation:{
        listofdatas.pronunciation
      }
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

export default Apitokentesting
