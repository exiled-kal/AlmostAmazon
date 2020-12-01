import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean StartUp</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        .product__rating
      </div>
    </div>
  );
}

export default Product;
