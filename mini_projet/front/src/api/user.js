import axios from 'axios';
import ApiBaseUrl from './../config/config'


const ApiUsers = async ()=> {
  const url  = `${ApiBaseUrl}/users/`;

  const result = await axios({
    method: 'get',
    url: url
  });

  return result;
}

export const ApiAddUser = async (data)=> {
    const url  = `${ApiBaseUrl}/users/`;

    const result = await axios({
      method: 'post',
      data: data,
      headers:{
        "Content-Type":"application/json"
      },
      url: url
    });
  
    return result;
  }

  export const ApiRemoveUser = async (id)=> {
    const url  = `${ApiBaseUrl}/users/${id}`;

    const result = await axios({
      method: 'delete',
      url: url
    });
  
    return result;
  }

  export const ApiGetUser = async (id)=> {
    const url  = `${ApiBaseUrl}/users/${id}`;
  
    const result = await axios({
      method: 'get',
      url: url
    });
  
    return result;
  }

  export const ApiUpdatedUser = async (id,data)=> {
    const url  = `${ApiBaseUrl}/users/${id}`;
  
    const result = await axios({
      method: 'put',
      data:data,
      url: url
    });
  
    return result;
  }

  export const ApiUserLogin = async (data)=>{
    const url  = `${ApiBaseUrl}/users/login`;

    const result = await axios({
      method: 'post',
      data:data,
      url: url
    });
  
    return result;

  }

  
export default ApiUsers;