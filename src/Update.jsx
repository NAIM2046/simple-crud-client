import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadUser = useLoaderData() ;

    const handleUpdate =(e)=>{
        e.preventDefault() ;
        const form = e.target ; 
        const name = form.name.value ; 
        const email = form.email.value ; 
       
        console.log(name , email) ;
        const updateUser = {name , email}; 
        fetch(`http://localhost:5000/users/${loadUser._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                alert("successfully updateUser") 
            }
        })
       
        
      }

    return (
        <div>
            {loadUser.name} 
            {loadUser._id}

            <form onSubmit={handleUpdate} >
                <input type="text" name="name" defaultValue={loadUser?.name} /> 
                <br />
                <input type="email" name="email" defaultValue={loadUser?.email}  />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;