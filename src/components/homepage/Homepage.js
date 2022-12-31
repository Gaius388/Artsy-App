import React from "react";
import Contact from "../Contact";
import AnimationHomepage1 from "./AnimationHomepage1";
import FeaturedHomepage from "./FeaturedHomepage";
import { IoIosArrowRoundForward } from "react-icons/io";
import creator1 from "../../images/creator_1.png";
import creator2 from "../../images/creator_2.png";
import creator3 from "../../images/creator_3.png";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <div className="home_page">
        <div className="main_container">
          <div className="intro">
            <h1 className="home_heading">
              Photography is poetry & beautiful untold stories
            </h1>
            <p className="home_description">
              Flip through more than 10,000 vintage shots, old photograghs,
              historic images and captures seamlessly in one place. Register to
              get top access.
            </p>
          </div>
          <div className="big__container">
            <AnimationHomepage1 />
            <AnimationHomepage1 />
            <AnimationHomepage1 />
            <AnimationHomepage1 />
            <AnimationHomepage1 />
            <AnimationHomepage1 />
          </div>
          <FeaturedHomepage />
          <section className="section_2">
            <h2>See Upcoming Auctions and Exhibitions</h2>
            <div className="gallery_main">
              <div>01</div>
              <div className="gallery_main-text">
                <h2>MONALISA REDEFINED IN STYLE.</h2>
                <p>Start on : 08:00 GTS . Monday</p>
                <p>
                  GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                  INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                  HIGHEST AND LOWEST BIDS
                </p>
              </div>
              <div className="gallery_main-more">
                <Link to="/auctions" style={{ color: "white" }}>
                  <p className="gallery_main-more1">See more</p>
                </Link>
                <Link
                  to="/drop"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <p className="gallery_main-more2">Set a reminder</p>
                </Link>
              </div>
            </div>
          </section>
          <section className="section_3">
            <div className="section_3-link">
              <h4>Explore Marketplace</h4>
              <Link to="/marketplace">
                <IoIosArrowRoundForward className="section_3-link-arrow" />
              </Link>
            </div>
            <div className="section_3-link">
              <h4>See auctions</h4>
              <Link to="/auctions">
                <IoIosArrowRoundForward className="section_3-link-arrow" />
              </Link>
            </div>
          </section>
          <section className="section_4">
            <div className="section_4-top">
              <h2>Top creators of the week</h2>
              <div className="creators_edit">
                <div className="creators_edit-progress"></div>
                <li>Editorials</li>
                <li>Fashion</li>
                <li>Lifestyle</li>
                <li>Blueprint</li>
              </div>
            </div>
            <p>
              “Everything always looked better in black and white. Everything
              always as if it were the first time; there’s always more people in
              a black and white photograph. It just makes it seem that there
              were more people at a gig, more people at a football match, than
              with colour photography. Everything looks more exciting.”– Jack
              Lowden
            </p>
            <div className="creators">
              <img
                src={creator1}
                alt="creator_1"
                className="creator_img img1"
              />
              <img
                src={creator2}
                alt="creator_2"
                className="creator_img img2"
              />
              <img
                src={creator3}
                alt="creator_3"
                className="creator_img img3"
              />
            </div>
            <div className="creators_circa">
              <p>CIRCA</p>
              <h2>1985</h2>
            </div>
          </section>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Homepage;
