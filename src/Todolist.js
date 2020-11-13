import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Todolist.css';
import Navbar from './Nabar';
import MainSidebar from './MainSidebar';
const Todolist = () => {
    const [task,setTask]=useState("");
    const [listofdatas, listofdata] = useState([]);
     
    useEffect(() => {
      async function fetchData() {
          const request = await axios.get("https://toodolistapi2.herokuapp.com/todolists/");
          listofdata(request.data)
      }
      fetchData();
  }, []);
   
const addtask = async(event) => {
  event.preventDefault();
  if (task == '' ) {
    console.log("please fill all posts");
  }
  else {
    await axios.post("https://toodolistapi2.herokuapp.com/todolists/", {
      task: task
    })

    async function fetchData() {
      const request = await axios.get("https://toodolistapi2.herokuapp.com/todolists/");
      listofdata(request.data)
  }
  fetchData();
  }
}
   
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
      <div className="form-group">
                  <label>Task</label>
                  <input type="text"  value={task}   onChange={event => setTask(event.target.value)}  className="form-control" id="exampleInputEmail1" placeholder="Enter Task" />
                </div>
                
              
              {/* /.card-body */}
              <div>
                <button type="submit" onClick={addtask} className="btn btn-primary">Submit</button>
              </div>
      </form>
      <table border="1" >
        <tr>
          <td>Task</td>
          <td colSpan="2" >Edit/Delete</td>
        </tr>
      {
        listofdatas!=''?
        listofdatas.map((item)=>{
        return <tr>
          <td>{item.task}</td>
        <td>
          <Link to={'/todolistedit/'+item._id} className="btn btn-primary">Edit</Link>
         
       
        <Link to={'/todolistdelete/'+item._id}  className="btn btn-danger">Delete</Link>
        </td>
        </tr>
        })
        :
        <tr>
        <td colSpan="2">'No datas found'</td>
        </tr>
      }
      </table>
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

export default Todolist
