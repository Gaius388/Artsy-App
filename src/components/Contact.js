import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  return (
    <>
      <section className="section_5">
        <h4>NEWSLETTER</h4>
        <p>Subscribe to get daily updates on new drops & exciting deals</p>
        <div>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>
      <section className="section_6">
        <h1 className="navbar_logo">Artsy.</h1>
        <ul className="section_6-list">
          <li>Home</li>
          <li>Marketplace</li>
          <li>Auctions</li>
          <li>Drop</li>
          <li>Blog</li>
          <li>Wallets</li>
          <li>Rates</li>
          <li>High bids</li>
        </ul>
        <div className="section_6-contact">
          <div className="section_6-contact1">
            <AiOutlineMail />
            <p>artsystudios@gmail.com</p>
          </div>
          <div className="section_6-contact1">
            <GoLocation />
            <p>Lagos, Nigeria.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
