import React from 'react';
import './Navcomp.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faClock, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons'
import {
    NavLink,Link
  } from "react-router-dom";
  import {  useCart } from "react-use-cart";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import img1 from '../../assests/Logo.png';


const Navcomp = () => {
  const {
    totalItems,
   
  } = useCart();
  const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div>
            <div className='Navbar'>
            <Navbar  bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img className='logoimg' src={img1} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <NavLink as={Link} className="navstyle" to="/home" >Home</NavLink>  
          <NavLink  as={Link} to="/service"  className="navstyle">Service</NavLink> 
          <NavLink as={Link} to="/product" className="navstyle">Product</NavLink>  
          <NavLink as={Link} to="/blog" className="navstyle">Blog</NavLink>  
          <NavLink as={Link} to="/contact"   className="navstyle">Contact us</NavLink>  

            
          </Nav>

          <Nav>
          <NavLink className="linkstyle"><Nav.Link className='linkstyle' as={Link} to="/cart" ><FontAwesomeIcon className='iconcart' icon={faCartShopping} /> <span className='cart-total ' >{totalItems}</span> </Nav.Link></NavLink>
          </Nav>
          {
                    user ?
                    <button className='logout' onClick={handleSignOut}>Sign out </button>
                    :
                    <NavLink as={Link} to="/login"  className='loginnav'>  <FontAwesomeIcon className='iconlogin' icon={faUser} />  LogIn </NavLink>}
           
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </div>
        </div>
    );
};

export default Navcomp;