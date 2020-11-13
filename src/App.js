import React from 'react';
import logo from './logo.svg';



import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';



import Sidebar from './Sidebar';

import DashboardComponent from './DashboardComponent';
import Apitokentesting from './Apitokentesting';
import Todolist from './Todolist';
import TodolistEdit from './TodolistEdit';
import TodolistDelete from './TodolistDelete';

function App() {
  return (
    <Router>
    <div className="App">
      
    <Switch>
    
         
           <Route path="/todolistedit/:id">
             <TodolistEdit></TodolistEdit>
           </Route>

           <Route path="/todolistdelete/:id">
             <TodolistDelete></TodolistDelete>
           </Route>

           <Route path='/apitesting'>
<Apitokentesting></Apitokentesting>
           </Route>
           <Route path="/dashboard">
            
            <DashboardComponent></DashboardComponent>
          </Route>
         
         <Route path="/todolistapi">
            <Todolist></Todolist>
         </Route>
          <Route path="/">
            
            <DashboardComponent></DashboardComponent>
          </Route>
         
      </Switch>
   
    </div>
    </Router>
  );
}

export default App;
