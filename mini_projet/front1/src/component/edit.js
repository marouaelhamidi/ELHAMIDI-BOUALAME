import React , {useEffect,useState} from 'react';
import  { useParams} from "react-router-dom";
import {ApiGetUser , ApiUpdatedUser} from './../api/user'


function Edit(props) {
     const {id} = useParams();

    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState()

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
            props.history.push('/');

        }).catch(function(error) {
            console.log(error)

        })
    
      }


     return(
       <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >first_name:</label>
                    <input  className="form-control" placeholder="Enter first_name" name="first_name" value={first_name} type="text"  onChange={(e)=>setFirst_name(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label >last_name:</label>
                    <input  className="form-control" placeholder="Enter last_name"  name="last_name" value={last_name} type="text"  onChange={(e)=>setLast_name(e.target.value)} />
                </div>
                <div className="form-group">
                    <label >Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
                </div>
                <div className="form-group">
                    <label >Age :</label>
                    <input className="form-control" placeholder="Enter age" value={age} name="age" onChange={(e)=>setAge(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
       </div>

    )
}

export default Edit;