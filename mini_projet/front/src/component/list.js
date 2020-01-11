import React , {useEffect , useState} from 'react';
import { Link } from "react-router-dom";
import ApiUsers ,{ApiRemoveUser} from './../api/user';

function List(props) {
  
  const [listUser, setListUser] = useState([]);

  useEffect(() => {

       ApiUsers().then((users)=>{
          setListUser(users.data);
       }).catch((error)=>{
         console.log(error);
       })
      
  }, []);

  function delete_(id) {

    
    ApiRemoveUser(id).then((res)=>{
        setListUser(res.data.users);
       }).catch((error)=>{
         console.log(error);
       })

  }

    return(
        <div className="container">
         <br/><br/><br/><br/>
           <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">La liste des etudiants</h2>
           <br/><br/>
         
       <div className="row" >
         <Link  to={'/add'} className="btn btn-primary">Ajouter un etudiant</Link>
       </div>
       <br/>
        <table className="table">
            <thead>
              <tr>
                <th scope="col">#id</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {listUser.map((user)=>{
                return (
                  <tr key={user._id}>
                    <th scope="row">{user._id}</th>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                    <Link to={`/edit/${user._id}`} className="btn btn-primary">Edit</Link>
                    <button  onClick={()=>{delete_(user._id)}} className="btn btn-primary">Delete</button>
                    </td>
                    
                  </tr>
                )
              })

              }
            </tbody>
          </table>
      </div>
  
    )
}





export default List;