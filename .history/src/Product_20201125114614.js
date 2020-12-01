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
        <div className="product__rating">
          <p>⭐</p>
        </div>
        <img
          src="https://s.yimg.com/fz/api/res/1.2/uoDpIdrXppEGsm0a371iPA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTM2MDtxPTgwO3c9MjM2/https://s.yimg.com/zb/imgv1/af5e8cb7-fb46-3b3a-a9da-ba3c7f33e4e9/t_500x300"
          alt=""
        />
        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
