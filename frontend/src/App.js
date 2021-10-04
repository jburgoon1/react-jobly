import React, {useEffect, useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './Navbar'
import User from './User'
import Jobs from './Jobs'
import ThatJob from './ThatJob'
import Companies from './Companies'
import Profile from './Profile'
import ThatCompany from './ThatCompany'
import SignUpForm from './SignUpForm'
import LogInForm from './LoginForm'
import api from './api'
const jwt = require("jsonwebtoken");


function App() {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState()
  const [application, setApplication] = useState(null)

  console.log(2, application)
  const storedToken = () =>{
    const loggedIn = localStorage.getItem('token')
    if(loggedIn){
      newToken(loggedIn) 
    }
  }
  const newToken = (token) =>{
    setToken(token)
    const username = jwt.decode(token).username
    setUser(username)
    getUser(username)
  }
  const updateCurrentUser = (data) =>{
    setUser(data)
  }
const logout = () =>{
  setUser([])
  setToken('')
  localStorage.clear()
}

const getUser = async (username) =>{
  console.log(1, username)
  const userProfile= await api.getUser(username)
  
  setApplication(userProfile.applications)
  
  console.log(3, userProfile.applications)
}

useEffect(()=>{
storedToken()

},[])


  
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <NavBar token ={token} user={user} logout={logout}/>
      
      <Switch>
      <Route path='/users/register'>
        <SignUpForm  authUser={newToken}/>
      </Route>
      <Route path='/users/login'>
        <LogInForm authUser={newToken}/>
      </Route>
      <Route path='/users/logout' logout={logout} />
      <Route path="/users/:username">
        <Profile updateCurrent={updateCurrentUser}/>
      </Route>
      <Route path="/companies/:handle" >
        <ThatCompany/>
      </Route>
      <Route path="/companies">
        <Companies/>
      </Route>
      <Route path="/jobs/:id">
        <ThatJob currentUser={user} applications={application} getuser={getUser}/>
      </Route>
      <Route path="/jobs">
        <Jobs currentUser={user} applications={application} getuser={getUser}/>
      </Route>
      
      </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
