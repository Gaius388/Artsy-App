import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineBell, AiOutlineClose } from "react-icons/ai";
// import { FiMessageSquare } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const StyledNavBar = () => {
  const [showBar, setShowBar] = useState(false);
  return (
    <header className="header">
      <div className="navbar">
        <button className="nav-toggle" onClick={() => setShowBar(true)}>
          <FaBars />
        </button>
        <h1 className="navbar_logo">Artsy.</h1>
        <ul className="navbar_text">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav_link-active" : "nav_link"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="marketplace"
            className={({ isActive }) =>
              isActive ? "nav_link-active" : "nav_link"
            }
          >
            <li className="navbar_space">Marketplace</li>
          </NavLink>
          <NavLink
            to="auctions"
            className={({ isActive }) =>
              isActive ? "nav_link-active" : "nav_link"
            }
          >
            <li className="navbar_space">Auctions</li>
          </NavLink>
          <NavLink
            to="drop"
            className={({ isActive }) =>
              isActive ? "nav_link-active" : "nav_link"
            }
          >
            <li className="navbar_space">Drop</li>
          </NavLink>
        </ul>
        <ul className="navbar_icon">
          <li>
            <BiSearch />
          </li>
          <NavLink
            to="cart"
            className={({ isActive }) =>
              isActive ? "nav_link-active" : "nav_link"
            }
          >
            <li className="navbar_space-icon">
              <BsCart2 />
            </li>
          </NavLink>
          <li className="navbar_space-icon bell-icon">
            <AiOutlineBell />
          </li>
        </ul>
      </div>
      <div className={showBar ? "sidebar" : "hidden"}>
        <div className="sidebar_top">
          <h1 className="navbar_logo">Artsy.</h1>
          <button className="nav-close" onClick={() => setShowBar(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <ul className="sidebar_text">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav_link" : "nav_link")}
          >
            <li onClick={() => setShowBar(false)}>Home</li>
          </NavLink>
          <NavLink
            to="marketplace"
            className={({ isActive }) => (isActive ? "nav_link" : "nav_link")}
          >
            <li onClick={() => setShowBar(false)}>Marketplace</li>
          </NavLink>
          <NavLink
            to="auctions"
            className={({ isActive }) => (isActive ? "nav_link" : "nav_link")}
          >
            <li onClick={() => setShowBar(false)}>Auctions</li>
          </NavLink>
          <NavLink
            to="drop"
            className={({ isActive }) => (isActive ? "nav_link" : "nav_link")}
          >
            <li onClick={() => setShowBar(false)}>Drop</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default StyledNavBar;
