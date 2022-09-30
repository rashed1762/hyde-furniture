import React, { useState } from 'react';
import data from './categorydata';
import Card from 'react-bootstrap/Card';

const Catagorycomp = () => {
    const [catdata,setCatdata]=useState(data);

    return (
        <div>
            <div className='container'>
            <div className="row ">
                {
                    catdata.map((value)=>{
                        const {img,price,title}=value;
                        return(
                            <div className="col-md-4 ct" >
                            <Card className='crdstyle'  style={{ width: '18rem' }}>
      <Card.Img className='crdimg' variant="top" src={img} />
      <Card.Body className='crdbody'>
       
       
      </Card.Body>
      <Card.Body className='crdbody2' >
        <Card.Title className='fs-6'>{title}</Card.Title>
        <Card.Text>
         {price}
        </Card.Text>
        
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