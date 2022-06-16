import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


export default function List() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers();
    },[])

    async function getUsers(){
        try {
            const users = await axios.get("https://reqres.in/api/users?page=1");
           // console.log(albums);
           setUsers(users.data.data);
        } catch (error) {
            console.log("something is wrong", error);
        }
    }
    const handleDelete = async id =>{
       console.log("delete button is clicked");
       console.log(id);
        await axios.delete(`https://reqres.in/api/users?page=1/${id}`);
         let newUsers = users.filter((user)=>{
             return user.id !== id;
         })
         setUsers(newUsers);
    }
  return (
    <>
      <table cellPadding="10px" border="2px" cellSpacing="10px" width="560px">
      <thead>
        <tr id="head">
          <th>No.</th>
          <th>Name</th>
          <th>action</th>
        </tr>
        </thead>
        <tbody>
        {
            users.map((user, index)=>{
             return(
                <tr key={index}>
          <td>{index+1}</td>
          <td>{user.first_name} {user.last_name}</td>
          <td>
           
            <button className="btn btn-primary" onClick={()=> handleDelete(user.id)}>Delete</button>
          </td>
        </tr>
             )
            })
        }
       
        </tbody>
      </table>
    </>
  );
}
