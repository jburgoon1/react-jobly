import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from './api'
const User = () =>{
    const [user, setUser] = useState();
    const {username} = useParams()
    useEffect(()=>{
        async function getUser(){
            const user = await api.getUser(username)
            setUser(user)
        }
        getUser()
    },[])
return (
    <>
<h1>{user.username}</h1>
<h3>{user.firstName}{user.lastName}</h3>
    </>
)
}

export default User;