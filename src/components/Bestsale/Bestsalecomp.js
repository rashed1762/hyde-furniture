import React 
, { useState }from 'react';
import './Bestsale.css';
import Bestsaledata from './Bestsakedata';

const Bestsalecomp = () => {
    const [item,setItem]=useState(Bestsaledata)
    return (
        <div>
            <div className='gallery'>
                {
                    item.map((bestsalevalue,index)=>{
                        
                        return(
                            <>
                            
                            <div key={index} className="pics">
                                <img src={bestsalevalue.img} style={{width:'100%'}} alt="" />
                            </div>
                            
                            
                            </>
                        )
                    })
                }
                
            </div>
        </div>
    );
};

export default Bestsalecomp;