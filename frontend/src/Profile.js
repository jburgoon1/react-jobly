import React, { useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import api from './api'


function Profile({updateCurrent}) {
    const INITIAL_STATE = {
        username:"",
        password:"",
        email:"",
        firstName:"",
        lastName:"",
    }
    const {username} = useParams()
    const [currentUser, setCurrentUser] = useState(INITIAL_STATE)
    const history = useHistory()

    const handleChange = (e) =>{
        const {name, value} = e.target
        setCurrentUser((data) => ({
            ...data,
            [name]: value,
        }))
    }
    const updateUser = async (e) =>{
        e.preventDefault()
        const result = await api.update(username, currentUser)
        history.push('/')
    }


    const getUser = async () =>{
        const userProfile= await api.getUser(username)
        delete userProfile["isAdmin"]
        delete userProfile["applications"]
        delete userProfile["username"]
        setCurrentUser(userProfile)
    }
        useEffect(() => {
            getUser()
        }, [])
        
      
    return (
        <div>
            {!currentUser ?
            <h3>Loading...</h3>:
            
                <form onSubmit={updateUser}>
                <input type="text" name="email" value={`${currentUser.email}`} onChange={handleChange}></input>
                <input type="text" name="firstName" value={`${currentUser.firstName}`} onChange={handleChange}></input>
                <input type="text" name="lastName" value={`${currentUser.lastName}`} onChange={handleChange}></input>
                {/* <input type="password" name="password" onChange={handleChange}></input> */}
                    <button>Save</button>
                
                </form>
            }
        </div>
    )
}

export default Profile;
