import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import api from './api'


const SignUpForm = ({authUser}) =>{
    const INITIAL_STATE = {
        username:"",
        password:"",
    }
    const history = useHistory();
    const [formData, setFormData] = useState(INITIAL_STATE)
   
   

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData((data) => ({
            ...data,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const result = await api.login(formData)
        console.log(result)
        authUser(result)
        history.push('/companies')
    }

    

      
    return(
        <>
        <h1>Log In</h1>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={handleChange}></input>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" onChange={handleChange}></input>
            <button className="userSubmit">Submit</button>
        </form>
        </>
    )
}

export default SignUpForm;

