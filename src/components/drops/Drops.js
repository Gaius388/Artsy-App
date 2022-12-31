import React from "react";
import { drops } from "../../data";
import Contact from "../Contact";

const Drops = () => {
  return (
    <div className="drop_section">
      <p>
        Home/Auctions/Live bid/<b>Drop</b>
      </p>
      <div className="drop_section-1">
        <h2>Upcoming drops</h2>
        <p>Turn on notifications so that no drops will miss you.</p>
        <button>Notify me</button>
      </div>
      <div>
        {drops.map((data, index) => {
          return (
            <div className="drop_section-2" key={index}>
              <div>
                <img
                  src={data.img}
                  alt={data.title}
                  className="drop_section-img"
                />
              </div>
              <div className="drop_section-text">
                <button className={`drop_btn_${data.type.toLowerCase()}`}>
                  {data.type}
                </button>
                <small>{data.date}</small>
                <h3>{data.title}</h3>
                <p>{data.text}</p>
                <p>Creator : {data.creator}</p>
                <p className="drop_notify">{data.notification}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="drop_section-btn">See more</button>
      <Contact />
    </div>
  );
};

export default Drops;
