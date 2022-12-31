import React from "react";
import ellipse from "../../images/ellipse.svg";
import auctionImage1 from "../../images/auction1.png";
import auctionImage2 from "../../images/auction2.png";
import auctionImage3 from "../../images/auction3.png";
import red_love from "../../images/red_love.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { auctionBid } from "../../data";
import { useGlobalContext } from "../context";
import Bids from "./Bids";

const Auction = () => {
  const { showBid, setShowBid } = useGlobalContext();
  console.log(showBid);
  const bidDisplay = () => {
    setShowBid(true);
  };
  if (showBid) {
    return <Bids />;
  }
  return (
    <>
      <div className="auction_section">
        <p className="product_path">
          Home/<b>Auctions</b>
        </p>
        <h4>Here’s an overview of products actively on auction, explore!</h4>
        <div>
          <div className="auction_main-countdown">
            <div className="main_countdown-1" onClick={bidDisplay}>
              <img src={auctionImage1} alt="auction" />
              <p className="auction_countdown-livestream">
                Join livestream
                <IoIosArrowRoundForward className="feature__arrow" />
              </p>
              <p className="auction_countdown-timer">6hr : 40mins: 15s</p>
            </div>
            <div className="main_countdown-1" onClick={bidDisplay}>
              <img src={auctionImage2} alt="auction" />
              <p className="auction_countdown-livestream">
                Join livestream
                <IoIosArrowRoundForward className="feature__arrow" />
              </p>
              <p className="auction_countdown-timer">6hr : 40mins: 15s</p>
            </div>
            <div className="main_countdown-1" onClick={bidDisplay}>
              <img src={auctionImage3} alt="auction" />
              <p className="auction_countdown-livestream">
                Join livestream
                <IoIosArrowRoundForward className="feature__arrow" />
              </p>
              <p className="auction_countdown-timer">6hr : 40mins: 15s</p>
            </div>
          </div>
          <div className="auction_ellipse">
            <img src={ellipse} alt="ellipse" />
            <img src={ellipse} alt="ellipse" />
            <img src={ellipse} alt="ellipse" />
            <img src={ellipse} alt="ellipse" />
          </div>
        </div>
        <div>
          <p className="auction_topbid">Top bids from popular creators</p>
          <div className="auction_bid">
            {auctionBid.map((data, index) => {
              return (
                <div className="auction_bid-section " key={index}>
                  <div className="auction_bid-section-1">
                    <img
                      src={red_love}
                      alt="love_icon"
                      className="auction_love"
                    />
                    <img
                      src={data.img}
                      alt="out_of_the_box"
                      className="auction_bid-image"
                    />
                    <h4>{data.title}</h4>
                  </div>
                  <p>
                    Creator : <b>{data.name}</b>
                  </p>
                  <p>
                    Date : <b>{data.date}</b>
                  </p>
                  <p>
                    Highest bid : <b>{data.highest} ETH</b>
                  </p>
                  <div className="auction_place-bid">
                    <div className="auction_place-bid-1">
                      <p>Current bid</p>
                      <p>{data.current} ETH</p>
                    </div>
                    <button>Place bid</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auction;
