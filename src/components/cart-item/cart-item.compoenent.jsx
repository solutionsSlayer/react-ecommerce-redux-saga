import React from 'react';
import './cart-item.compoenent.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item shop picture' />
    <div className='item-details'>
      <div className='name'>{name}</div>
      <div className='price'>
        {quantity} x ${price}
      </div>
    </div>
  </div>
);

export default CartItem;