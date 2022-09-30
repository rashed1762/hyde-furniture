import React from 'react';
import './Navcomp.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    NavLink,Link
  } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Navcomp = () => {
  const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div>
            <div>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink><Nav.Link as={Link} to="/home"   >Home</Nav.Link></NavLink>  
          <NavLink><Nav.Link as={Link} to="/service"   >Service</Nav.Link></NavLink> 
          <NavLink><Nav.Link as={Link} to="/product"   >Product</Nav.Link></NavLink>  
          <NavLink><Nav.Link as={Link} to="/blog"   >Bloc</Nav.Link></NavLink>  
          <NavLink><Nav.Link as={Link} to="/contact"   >Contact us</Nav.Link></NavLink>  

            
          </Nav>
          {
                    user ?
                    <button onClick={handleSignOut}>Sign out</button>
                    :
                    <NavLink><Nav.Link as={Link} to="/login"   >LogIN</Nav.Link></NavLink>}
           
          <Nav>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </div>
        </div>
    );
};

export default Navcomp;