import React from "react";
import { feature } from "../../data";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const FeaturedHomepage = () => {
  return (
    <section className="section_1">
      <h2>Featured products</h2>
      <div>
        {feature.map((data, index) => {
          return (
            <div className="feature__section" key={index}>
              <div className="featured_img">
                <img src={data.featureImg} alt="featuredImages" />
                <p className="feature_link">
                  <Link to={`/marketplace/2`} className="nav_link">
                    View product
                    <IoIosArrowRoundForward className="feature__arrow" />
                  </Link>
                </p>
              </div>
              <div className="feature__section-text">
                <h4>{data.title}</h4>
                <p>{data.info}</p>
                <div className="feature__profile">
                  <div className="feature__profile-pic">
                    {data.images.map((mov, index) => {
                      return <img src={mov} alt="profile1" key={index} />;
                    })}
                  </div>
                  <p>{data.creators}</p>
                  <Link to={`/marketplace/2`} className="nav_link">
                    <div className="feature__arrow-container">
                      <IoIosArrowRoundForward className="feature__arrow" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedHomepage;
