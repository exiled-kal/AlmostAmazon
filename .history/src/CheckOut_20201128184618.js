import React from 'react';
import './Checkout.css';

function CheckOut() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
      </div>
      <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
      </div>
    </div>
  );
}

export default CheckOut;
