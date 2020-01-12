import React ,{useState} from 'react';
import {ApiAddUser} from './../api/user'
import {
    useHistory,
  } from "react-router-dom";

function Add(props) {
    
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState();
    const [pass, setPass] = useState();
    let history = useHistory();

    function handleSubmit(event) {
        event.preventDefault()

        ApiAddUser({'first_name':first_name,'last_name':last_name,'email':email,'age':age,password:pass})
        .then(function(res) {
            console.log('-----> ',res)
            history.replace('/');
        }).catch(function(error){
          console.log(error)
        })
      

      }




    return(
       <div className="container">
           <br/><br/><br/><br/>
           <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Ajouter un etudiant</h2>
           <br/><br/>
            <form onSubmit={handleSubmit}>
                <center>
                <div className="form-group  col-7">
             
                    <input  className="form-control" placeholder="Enter first_name"  type="text"  onChange={(e)=>setFirst_name(e.target.value)}/>
                </div>
                <div className="form-group  col-7">
  
                    <input  className="form-control" placeholder="Enter last_name"  type="text"  onChange={(e)=>setLast_name(e.target.value)} />
                </div>
                <div className="form-group  col-7">
         
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}  />
                </div>
                <div className="form-group  col-7">
         
                    <input type="text" className="form-control" placeholder="Enter age" onChange={(e)=>setAge(e.target.value)} />
                </div>
                <div className="form-group  col-7">
                  
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>setPass(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Ajouter un etudiant</button>
           </center> </form>
       </div>

    )
}





export default Add;