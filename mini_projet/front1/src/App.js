import React from 'react';
import './App.css';
import './bootstrap.min.css';
import List from './component/list'
import Add from './component/add'
import Edit from './component/edit'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
   
      <Switch>
        <Route exact path="/">
         <List/>
        </Route>
        <Route render={(props) =>  <Add {...props} />} path="/add">
         
        </Route>
        <Route render={(props) =>  <Edit {...props} />} path="/edit/:id" >
           
        </Route>
      </Switch>
    </div>
  </Router>
   );
}

export default App;
