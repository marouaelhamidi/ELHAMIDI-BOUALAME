import React ,{useEffect,useState} from 'react';

import List from './component/list'
import Add from './component/add'
import Edit from './component/edit'
import Login from './component/login'
import SignUp from './component/signUp'
import Header from './component/header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";




function App(props) {
 
  return (
    <Router >
    <Nav />
    <div>
          
      <Switch >

         <Route exact path="/">
            <Header/>
          </Route>

          <Route path="/login">
            <Login  />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>

          <PrivateRoute path="/add">
              <Add  />
          </PrivateRoute>

          <PrivateRoute path="/edit/:id">
            <Edit  />
          </PrivateRoute>

          <PrivateRoute exact path="/list">
            <List/>
          </PrivateRoute>
       
      </Switch>

    </div>
  </Router>
   );
}

function PrivateRoute({ children, ...rest }) {

  const [user, setUser] = useState( localStorage.getItem('user') || null)


  return (
    <Route
      {...rest}
      render={({ location }) =>
       user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


function AuthButton(props) {
  let history = useHistory();

  return (
    <li className="nav-item mx-0 mx-lg-1">
    <a onClick={()=>{
                    localStorage.removeItem('user');
                    history.push('login');
                    }} 
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="">Logout</a></li>
  )
}
    

function Nav(props) {
  let history = useHistory();

  const [user, setUser] = useState( localStorage.getItem('user') || null)

  

  history.listen((location, action) => {
    setUser(localStorage.getItem('user') )
  })

  return (
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav" >
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Elhamidi || Boualame</a>
      <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
     
          <li className="nav-item mx-0 mx-lg-1">
          <Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Home</Link></li>
                   {user !== null ? (
                   <>
                    <AuthButton />
                    <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/list"   className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">List users</Link>
               </li>
                  </>
                  ):
                  <>
                  <li className="nav-item mx-0 mx-lg-1">
                  <Link to="/login"  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Login</Link>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                  <Link to="/signUp"  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">sign up</Link>
                  </li>
                  </>
                  }
        </ul>
      </div>
    </div>
  </nav>
  

  )
}

export default App;
