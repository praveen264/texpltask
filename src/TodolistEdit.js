import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Nabar';
import MainSidebar from './MainSidebar';
const TodolistEdit = () => {
  const history=useHistory();
    const {id}=useParams();
    const [listofdatas, listofdata] = useState([]);
    const [task,setTask]=useState("");
    const [disabled,setdisabled]=useState("false");
    const undisable = () =>{
          setdisabled("true")
    }
    useEffect(() => {
      async function fetchData() {
          const request = await axios.get("https://toodolistapi2.herokuapp.com/todolists/"+id);
          listofdata(request.data)
          setTask(request.data.task)
      }
      fetchData();
  }, []);
  const edittask = async(event) => {
    event.preventDefault();
    if (task == '' ) {
      console.log("please fill all posts");
    }
    else {
     const request= await axios.patch("https://toodolistapi2.herokuapp.com/todolists/"+id, {
        task: task
      });
      
        
      if(request)
      {
        history.push('/todolistapi');
      }
     
    }
  }
  return (
    <>
      <h1>Todolist</h1>
     
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
      <div className="form-group">
                  <label>Task</label>
                  <input type="text" value={task}   onChange={event => setTask(event.target.value)}  className="form-control" id="exampleInputEmail1"  />
                </div>
                
              
              {/* /.card-body */}
              <div>
                <button type="submit" onClick={edittask} className="btn btn-primary">Submit</button>
              </div>
      </form>
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
 

      <form>
      <div className="form-group">
                  <label>Task</label>
                  <input type="text" value={task}   onChange={event => setTask(event.target.value)}  className="form-control" id="exampleInputEmail1"  />
                </div>
                
              
              {/* /.card-body */}
              <div>
                <button type="submit" onClick={edittask} className="btn btn-primary">Submit</button>
              </div>
      </form>
    </>
  )
}

export default TodolistEdit
