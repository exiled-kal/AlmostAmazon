import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct({id, image, title, price, rating}) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      .checkoutProduct
    </div>
  );
}

export default CheckoutProduct;
