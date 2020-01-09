import React ,{useState} from 'react';
import {ApiAddUser} from '../api/user'

function Add(props) {
    
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState()

    function handleSubmit(event) {
        event.preventDefault()

        ApiAddUser({'first_name':first_name,'last_name':last_name,'email':email,'age':age})
        .then(function(res) {
            console.log('-----> ',res)
            props.history.push('/');
        }).catch(function(error){
          console.log(error)
        })
      

      }




    return(
       <div className="container">
           <br></br>
           <center><h1>Ajouter un etudiant</h1></center>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >first_name:</label>
                    <input  className="form-control" placeholder="Enter first_name"  type="text"  onChange={(e)=>setFirst_name(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label >last_name:</label>
                    <input  className="form-control" placeholder="Enter last_name"  type="text"  onChange={(e)=>setLast_name(e.target.value)} />
                </div>
                <div className="form-group">
                    <label >Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}  />
                </div>
                <div className="form-group">
                    <label >Age :</label>
                    <input type="text" className="form-control" placeholder="Enter age" onChange={(e)=>setAge(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
       </div>

    )
}





export default Add;