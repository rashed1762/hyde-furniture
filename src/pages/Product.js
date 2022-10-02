import React, { useState } from 'react';
import Productedata from '../components/Product/Productdata';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {  useCart } from "react-use-cart";
import Card from 'react-bootstrap/Card';
import '../components/Product/Product.css';
import Footercomp from '../components/footer/Footercomp';

const Product = () => {
    const [prodata,SetProData]=useState(Productedata);
    const { addItem } = useCart();

    return (
        <div>
            
            <div className='container-fluid  w-100'>
            <div className="row mt-5 ">
                {
                    prodata.map((provalue)=>{
                        const {img,price,title}=provalue;
                        return(
                            <div className="col-md-3 " data-aos="zoom-in" >
                            <Card className='crdstyle'  style={{ width: '18rem' }}>
      <Card.Img className='crdimg w-100' variant="top" src={img} />
      <Card.Body className='crdbody2' >
        <Card.Title className='crdinfo'>
        <Link to={`/product/${provalue.id}`} ><Button variant="danger probtn ">View Details</Button>{' '}</Link> 
        
            <br />
            <br />
           
            
            </Card.Title>
      
        
      </Card.Body>
    </Card>
                            </div>
                        )
                    })
                }
            </div>
            </div>

            <section>
                <Footercomp></Footercomp>
            </section>
        </div>
    );
};

export default Product;