import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import {
    NavLink
  } from "react-router-dom";
import './Footercomp.css'

const Footercomp = () => {
    return (
        <div className='mt-5 footerstyle'>
            <div className="row container">
                <div className="col-md-6">
                    <div className='mt-5'>
                    <h1 className='hyde'>HYDE</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, adipisci?</p>
                    </div>
                    
                </div>
                <div className="col-md-2">
                    <div className='mt-5'>
                    <h5>| Links</h5>
                    <h6> <NavLink as={Link} className="navstyle" to="/home" >Home</NavLink>  </h6>
                    <h6> <NavLink   to="/service"  className="navstyle">Service</NavLink> </h6>
                    <h6><NavLink  to="/product" className="navstyle">Product</NavLink>  </h6>
                    <h6> <NavLink to="/blog" className="navstyle">Blog</NavLink>  </h6>
                    <h6> <NavLink to="/contact"   className="navstyle">Contact us</NavLink>  </h6>
                    </div>
               
                </div>
                <div className="col-md-2">
                <h5 className='mt-5'> | Others</h5>
                <div className='others'>
                    

                    <h6>Terms of Series</h6>
                    <h6>Privacy Policy</h6>
                    <h6> Something Goes Hare</h6>
                    <h6> Portfolio</h6>
                    <h6> Carporate</h6>
                    </div>
                </div>
                <div className="col-md-2">
                <div className='mt-5'>
                    <h5>| Following</h5>
                    <br />
                   <input type="text" style={{width:'200px'}} />
                   <Button className='mt-2' variant="outline-danger">Subscribe</Button>{' '}
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footercomp;