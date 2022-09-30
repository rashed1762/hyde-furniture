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
import img1 from '../../assests/Logo.png';


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
        <Navbar.Brand href="#home"><img className='logoimg' src={img1} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <NavLink><Nav.Link as={Link} className="navstyle" to="/home"   >Home</Nav.Link></NavLink>  
          <NavLink><Nav.Link as={Link} to="/service"  className="navstyle"  >Service</Nav.Link></NavLink> 
          <NavLink><Nav.Link as={Link} to="/product" className="navstyle"   >Product</Nav.Link></NavLink>  
          <NavLink><Nav.Link as={Link} to="/blog" className="navstyle"   >Blog</Nav.Link></NavLink>  
          <NavLink><Nav.Link as={Link} to="/contact"   className="navstyle"  >Contact us</Nav.Link></NavLink>  

            
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