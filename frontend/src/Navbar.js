import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const NavBar = ({token, user, logout}) =>{
return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
    {!token ?
        <>
         <Nav.Link as={NavLink}to="/users/login" className="navlinks">Login</Nav.Link>
        <Nav.Link as={NavLink} to="/users/register" className="navlinks">Sign Up</Nav.Link>
        </>
        :
        <>
        <Nav.Link as={NavLink} to="/companies" className="navlinks">Companies</Nav.Link>
      <Nav.Link as={NavLink} to="/jobs" className="navlinks">Jobs</Nav.Link>
    <Nav.Link as={NavLink} to={`/users/${user}`} className="navlinks">{user}</Nav.Link>
    <Nav.Link as={NavLink} to="/users/logout" onClick={logout} className="navlinks">Logout</Nav.Link>
        </>}
      
    </Nav>
    </Container>
  </Navbar>
  </>
)
}

export default NavBar;