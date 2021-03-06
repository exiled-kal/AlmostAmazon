import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct({id, image, title, price, rating}) {

    const removeFromBasket = () => {

    }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove fro Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
