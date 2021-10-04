import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import api from './api'


const SignUpForm = ({authUser}) =>{
    const INITIAL_STATE = {
        username:"",
        email:"",
        password:"",
        firstName:"",
        lastName:"",
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
        const result = await api.register(formData)
        console.log(result)
        authUser(result)
    }

    

      
    return(
        <>
        <h1>Sign Up</h1>
        <form className="signupForm" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={handleChange}></input>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstName" onChange={handleChange}></input>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastName" onChange={handleChange}></input>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleChange}></input>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" onChange={handleChange}></input>
            <button className="userSubmit">Submit</button>
        </form>
        </>
    )
}

export default SignUpForm;

