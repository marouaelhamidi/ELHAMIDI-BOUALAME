import React , {useEffect,useState} from 'react';
import  { useParams} from "react-router-dom";
import {ApiGetUser , ApiUpdatedUser} from './../api/user'
import {
    useHistory,
  } from "react-router-dom";

function Edit(props) {
     const {id} = useParams();

    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState()
    let history = useHistory();

    useEffect(() => {
        ApiGetUser(id).then(function(res) {
            console.log(res.data)
            setFirst_name(res.data.first_name);
            setLast_name(res.data.last_name);
            setEmail(res.data.email);
            setAge(res.data.age);
        }).catch(function(error) {
            console.log(error)
        })

    }, [])

    function handleSubmit(event) {
        event.preventDefault()

        let data = {'first_name':first_name,'last_name':last_name,'email':email,'age':age};
        ApiUpdatedUser(id,data).then(function (res) {
            history.replace('/');

        }).catch(function(error) {
            console.log(error)

        })
    
      }


     return(
       <div className="container">
            <br/><br/><br/><br/>
           <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Modifier un etudiant</h2>
           <br/><br/>
            <form onSubmit={handleSubmit}>
            <center>
                <div className="form-group col-7">
               
                    <input  className="form-control" placeholder="Enter first_name" name="first_name" value={first_name} type="text"  onChange={(e)=>setFirst_name(e.target.value)}/>
                </div>
                <div className="form-group col-7">
                
                    <input  className="form-control" placeholder="Enter last_name"  name="last_name" value={last_name} type="text"  onChange={(e)=>setLast_name(e.target.value)} />
                </div>
                <div className="form-group col-7">
            
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
                </div>
                <div className="form-group col-7">
             
                    <input className="form-control" placeholder="Enter age" value={age} name="age" onChange={(e)=>setAge(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Modifer</button>
                </center> </form>
       </div>

    )
}

export default Edit;