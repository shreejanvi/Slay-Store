import { useState, useEffect } from 'react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

export default function Cart() {
  const cartitems = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      let tot = 0;
      cartitems.forEach(item => {
        tot += item.price;
      });
      setTotal(Math.floor(tot));
    };

    calculateTotal();
  }, [cartitems]);

  return (
    <>
      <h3>Cart Items</h3>
      
      <hr/>
      {cartitems.map(item => (
        <div key={item.id}>
          <div className='lineItem'>
            <div className='d-flex'>
              <img src={item.image} height="100px" width="100px" alt={item.title} />
            </div>
            <h4>{item.title}</h4>
            <h4>${item.price}</h4>
            <button className='btn btn-warning btn-sm' onClick={() => dispatch(removeFromCart({ id: item.id }))}>Remove</button>
          </div>
        </div>
      ))}
      <hr/>
      <h4 style={{float:'right',paddingTop:'20px',marginTop:'20px',marginRight:'40px'}}> Total: ${total}</h4>
    </>
  );
}
