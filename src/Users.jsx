import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const loaderusers = useLoaderData() ;
    const [users , setUser] = useState(loaderusers)

    console.log(users)
    const handleDelete =(Id)=>{
         console.log(Id) ;
         fetch(`http://localhost:5000/users/${Id}`,{
            method: 'DELETE',
         })
         .then(res => res.json())
         .then(data =>{
            console.log(data) ;
            if(data.deletedCount >0){
                alert("successfull deleted") ;
                const remaining =  users.filter(user => user._id !== Id ) ;
                setUser(remaining) ;
            }
         })
    }
    return (
        <div>
              <h3>user {
                users.length
                }</h3>

                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email}
                    <Link to={`/update/${user._id}`}>
                     <button>updata</button>
                    </Link>
                     <button
                    onClick={ ()=>handleDelete(user._id)}
                    >X</button></p> )
                }
             
        </div>
    );
};

export default Users;