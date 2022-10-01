import React, { useState } from 'react';
import data from './categorydata';
import Card from 'react-bootstrap/Card';
import './Catagory.css';
import Button from 'react-bootstrap/Button';

const Catagorycomp = () => {
    const [catdata,setCatdata]=useState(data);

    return (
        <div>
            <div className='container'>
                <div >
                <h1>CATEGORY</h1>
                <p>There are some category of our furniture.we have premium quality all category furniture.you can click and show category based furniture</p>
                </div>
               
            <div className="row mt-5 ">
                {
                    catdata.map((value)=>{
                        const {img,price,title}=value;
                        return(
                            <div className="col-md-4 ct" >
                            <Card className='crdstyle'  style={{ width: '18rem' }}>
      <Card.Img className='crdimg' variant="top" src={img} />
      <Card.Body className='crdbody2' >
        <Card.Title className='crdinfo'>
        <Button className='btnstyle' variant="light">{title}</Button>{' '}
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
        </div>
    );
};

export default Catagorycomp;