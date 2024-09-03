import React, { useEffect } from 'react'

function AdminLogOut() {
    const remove = async () =>{
        try{
            localStorage.removeItem("token");
            window.location = "/";
        } catch (err){
            console.log(err)
        }
    }

    useEffect(()=>{remove()},[])
    
    return null;
}

export default AdminLogOut