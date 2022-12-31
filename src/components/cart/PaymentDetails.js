import React from "react";
import metaMask from "../../images/MetaMask - jpeg.png";
import coinbase from "../../images/Coinbase - png.png";
import walletConnect from "../../images/WalletConnect - jpeg.png";
import phantom from "../../images/Phantom - jpeg.png";
import secure from "../../images/lock_icon.svg";
import { Link } from "react-router-dom";

const PaymentDetails = () => {
  return (
    <div className="checkout_payment">
      <div className="checkout_payment-left">
        <p className="checkout_payment-method">Payment method</p>
        <div className="checkout_payment-wallet">
          <main className="checkout_payment-wallet-1">
            <div className="secure__wallet">
              <input type="radio" />
              <p>Select your wallet</p>
            </div>
            <div>
              <img src={metaMask} alt="Metamask" />
              <img src={coinbase} alt="Coinbase" />
              <img src={walletConnect} alt="WalletConnect" />
              <img src={phantom} alt="Phantom" />
            </div>
          </main>
          <p className="connect_wallet-text">
            Connect with one of our available wallet providers or add and
            connect a new wallet.
          </p>
          <div className="checkout_shipping1">
            <label for="">Wallet type</label>
            <input type="text" className="input_ship" />
          </div>
          <div className="checkout_shipping1">
            <label for="">Key</label>
            <input type="text" className="input_ship" />
          </div>
          <div className="checkout_country-post">
            <div className="checkout_shipping1">
              <label for="">Expiry Date</label>
              <input type="text" className="input_ship" />
            </div>
            <div className="checkout_shipping1">
              <label for="">CVV</label>
              <input type="text" className="input_ship" />
            </div>
          </div>
          <div className="checkout_check-tick">
            <input type="checkbox" />
            <label for="">
              Save my wallet details & information for future transactions
            </label>
          </div>
          <div className="checkout_shipping1">
            <Link to="/congrats">
              <button className="checkout_payment-btn">Confirm</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="checkout_payment-right">
        <div className="checkout_payment-secure">
          <img src={secure} alt="lock_icon" />
          <p>Secure server</p>
        </div>
        <div>
          <p className="checkout_payment-summary">Payment summary</p>
          <div className="checkout_payment-address">
            <p>Metamask wallet : 002345KJi90pzzz3</p>
            <p>Actively linked to Yaba, Lagos Nigeria.</p>
          </div>
          <div className="checkout_payment-address">
            <p>
              Expected arrival date: Between 22nd September and 26th September
              20222
            </p>
            <div className="checkout_shipping-cart2 payment_address">
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
      </div>
    </div>
  );
};

export default PaymentDetails;
