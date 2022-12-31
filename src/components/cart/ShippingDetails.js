import React from "react";
import { Link } from "react-router-dom";
import { checkout } from "../../data";

const ShippingDetails = () => {
  return (
    <div className="checkout_shipping">
      <div>
        <div className="checkout_shipping1">
          <label for="">Your email</label>
          <input type="text" className="input_ship" />
          <div className="checkout_check-tick">
            <input type="checkbox" />
            <label for="">Get updates about new drops & exclusive offers</label>
          </div>
        </div>
        <div className="checkout_shipping1">
          <label for="">Your full name</label>
          <input type="text" className="input_ship" />
        </div>
        <div className="checkout_shipping1">
          <label for="">Choose a wallet</label>
          <input type="text" className="input_ship" />
        </div>
        <div className="checkout_shipping1">
          <label for="">City</label>
          <input type="text" className="input_ship" />
        </div>
        <div className="checkout_country-post">
          <div className="checkout_shipping1">
            <label for="">Country</label>
            <input type="text" className="input_ship" />
          </div>
          <div className="checkout_shipping1">
            <label for="">Postal code</label>
            <input type="text" className="input_ship" />
          </div>
        </div>
        <div className="checkout_shipping1">
          <label for="">Phone Number</label>
          <input type="text" className="input_ship" />
        </div>
        <div className="checkout_shipping1">
          <Link to="/cart/payment">
            <button>Proceed to payment</button>
          </Link>
        </div>
      </div>
      <div className="checkout_shopping-cart shipping_mobile">
        {checkout.map((data, index) => {
          return (
            <div className="checkout_shopping-cart1" key={index}>
              <img src={data.img} alt={data.title} />
              <div className="checkout_shopping-cart-description">
                <h4>{data.title}</h4>
                <p>{data.info}</p>
                <small>Size: {data.size}</small>
                <h2>- 1 +</h2>
              </div>
              <div className="checkout_shopping-cart-price">
                <p className="checkout_close-btn">x</p>
                <p>${data.price}</p>
              </div>
            </div>
          );
        })}
        <div className="checkout_shipping-cart2">
          <main>
            <p>Products in cart:</p>
            <p>3 items</p>
          </main>
          <main>
            <p>Shipping:</p>
            <p>$2.50</p>
          </main>
          <main>
            <p>Total:</p>
            <p>$114.00</p>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
