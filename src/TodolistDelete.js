import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
const TodolistDelete = () => {
  const history=useHistory();
    const {id}=useParams();
    useEffect(() => {
      async function fetchData() {
          const request = await axios.delete("https://toodolistapi2.herokuapp.com/todolists/"+id);
          if(request)
          {
            history.push('/todolistapi');
          }
      }
      fetchData();
  }, []);
  return (
    <>
    
    </>
  )
}

export default TodolistDelete
