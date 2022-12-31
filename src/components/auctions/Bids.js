import React from "react";
import auctionBig1 from "../../images/auction1-big.png";
import { chats } from "../../data";
import { RiSendPlaneFill } from "react-icons/ri";
import { liveBidAnimation } from "../../data";
import red_love from "../../images/red_love.svg";
import { useGlobalContext } from "../context";

const Bids = () => {
  const { setShowBid } = useGlobalContext();
  return (
    <div class="live_bid">
      <p onClick={() => setShowBid(false)} className='live_bid-nav'>
        Home/Auctions/<b>Live bid</b>
      </p>
      <div className="live_bid-section">
        <div className="live_bid-section-1">
          <img src={auctionBig1} alt="auction1-big" />
          <p className="auction_big-img-1" onClick={() => setShowBid(false)}>
            X
          </p>
          <p className="auction_big-img-2">LIVE</p>
          <p className="auction_big-img-3">Current bid $4500</p>
          <p className="auction_big-img-4">Tag: Lost or Wither</p>
        </div>
        <div className="live_bid-section-2">
          {chats.map((data, index) => {
            return (
              <div className="live_bid-chat" key={index}>
                <img src={data.img} alt="live_bid" />
                <div className="live_bid-chat-text">
                  <p>{data.name}</p>
                  <p>{data.message}</p>
                </div>
              </div>
            );
          })}
          <div className="live_bid-chat-input">
            <div>
              <p>Creator: Stormi Rylie</p>
              <div className="input_send-container">
                <input type="text" placeholder="Place a bid..." />
                <RiSendPlaneFill className="input_send" />
              </div>
            </div>
            <div className="live_bid-big-animate">
              <div className="like_animation">
                {liveBidAnimation.map((data, index) => {
                  return (
                    <img
                      src={data}
                      alt="love_animation"
                      className={`animate${index + 1}`}
                    />
                  );
                })}
              </div>
              <img
                src={red_love}
                alt="red_love"
                className="live_bid-big-love"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bids;
