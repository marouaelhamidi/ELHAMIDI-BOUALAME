import React ,{useState} from 'react';
import { ApiUserLogin} from './../api/user'
import {
  useHistory,
  useLocation
} from "react-router-dom";

function Login(props) {
 
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState();

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    
    function handleSubmit(event) {
        event.preventDefault()

        ApiUserLogin({'email':email,password:pass})
        .then(function(res) {
            console.log('-----> ',res.data)
            localStorage.setItem('user',res.data)
            history.replace(from);
        }).catch(function(error){
          console.log(error)
        })
      

      }



    return(
      
       <div className="container">
   <br/><br/><br/><br/><br/><br/>
   <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Login</h2>

            <form onSubmit={handleSubmit}>
                <center>
                <div className="form-group col-4">
                <br/>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}  />
                </div>
                <div className="form-group col-4">
              
                    <input type="password" className="form-control" placeholder="Password"  onChange={(e)=>setPass(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                </center>
            </form>
       </div>

    )
}





export default Login;