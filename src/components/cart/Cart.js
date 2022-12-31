import React from "react";
import { checkout } from "../../data";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="checkout_section-1">
        <div className="checkout_shopping-cart">
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
        </div>
        <div className="checkout_shopping-cart2">
          <div className="checkout_shopping-cart2-left">
            <Link to="shipping">
              <button>Proceed to Checkout</button>
            </Link>
            <Link to="/marketplace">
              <p className="drop_notify">Continue Shopping</p>
            </Link>
          </div>
          <div className="checkout_shopping-cart2-right">
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
    </>
  );
};

export default Cart;
