import React from 'react';
import './Product.css';

function Product({title, image, price, rating}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean StartUp</p>
        <p className="product__price">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
        </div>
      </div>
      <img
        src="https://www.theceolibrary.com/wp-content/uploads/2020/04/tcl-The-Lean-Startup-Eric-Ries.jpg"
        alt=""
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
