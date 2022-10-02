import React from 'react';
import {  useCart } from "react-use-cart";
import {
    Link
  } from "react-router-dom";
  import '../components/CssFile/Cart.css'
  import Button from 'react-bootstrap/Button';
import Footercomp from '../components/footer/Footercomp';


const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
      } = useCart();
      if (isEmpty) return <p>Your cart is empty</p>;
    return (
        <div className='container-fluid'>
        <div className="row">
            <div className="col-md-12">
                <h4>cart({totalUniqueItems}) total Items:({totalItems} )</h4>
                <ul>
    {items.map((item) => (
        <div key={item.id} >
            <div className="row crtbg">
                <div className="col-md-2">
                <img className='cart-img' src={item.img} alt="" />
                
                </div>
                <div className="col-md-2 ">
                <h5 className='title' >{item.title}</h5>
                </div>
                <div className="col-md-2">
                <h4 className='price'>{item.price}</h4>
                </div>
                <div className="col-md-2">
                <h5 className='quantity'>Quantity({item.quantity})</h5>
                </div>
                <div className="col-md-2">
                    <div className='crtbtn'>
                    <Button variant="primary"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                -
                </Button>
                <Button variant="success"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                +
                </Button>
                <Button variant="danger" onClick={() => removeItem(item.id)}>&times;</Button>
                

                    </div>
                
                </div>
            </div>
            <hr />

        </div>

     
      
    ))}
  </ul>
  
  
            </div>
        </div>
        <div>
    {/* <h4 className=''>total price:$ {cartTotal}</h4> */}
  </div>
  <div>
    <Button onClick={()=>emptyCart()}>
            clear cart
    </Button>
  </div>
        <br />

        
        
    </div>
    );
};

export default Cart;