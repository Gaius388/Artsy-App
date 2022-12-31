import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const SharedCart = () => {
  return (
    <div className="checkout_section">
      <div className="checkout_navbar">
        <nav>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "nav_link" : "nav_link-active"
            }
          >
            <li>Shopping cart</li>
          </NavLink>
          <NavLink
            to="shipping"
            className={({ isActive }) =>
              isActive ? "nav_link-active" : "nav_link"
            }
          >
            <li className="checkout_navbar_space">Shipping details</li>
          </NavLink>
          <NavLink
            to="payment"
            className={({ isActive }) =>
              isActive ? "nav_link-active" : "nav_link"
            }
          >
            <li className="checkout_navbar_space">Payment details</li>
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default SharedCart;
