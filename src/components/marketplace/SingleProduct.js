import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import { marketplaces, explore } from "../../data";
import explore_love from "../../images/explore_love-icon.svg";
import love_icon from "../../images/love_icon.svg";

const SingleProduct = () => {
  const { marketplaceId } = useParams();
  const marketplace = marketplaces.find(
    (product) => product.id === marketplaceId
  );
  console.log(marketplace);
  const { img, title, views, creator, location } = marketplace;
  return (
    <div className="product_detail">
      <p className="product_path">
        <Link to="/marketplace" className="nav_link">
          Home/Marketplace/Editorials/<b>{title}</b>
        </Link>
      </p>
      <div className="product_description">
        <div className="product_img">
          <img src={img} alt={title} />
        </div>
        <div className="product_body">
          <div>
            <div className="product_body-reveal">
              <h4>{title}</h4>
              <div className="product_body-ether">
                <FaEthereum />
                <p>0.09</p>
              </div>
            </div>
            <div className="product_body-more">
              <p>Creator: {creator}</p>
              <small>Made in {location}</small>
              <p>Total views: {views}k views</p>
              <p>- 1 +</p>
              <div className="product_btn">
                <button>
                  Add to cart <IoIosArrowRoundForward />
                </button>
                <img src={love_icon} alt="love_icon" />
              </div>
            </div>
          </div>
          <div className="product_body-reveal desc">
            <h4>Description</h4>
            <IoIosArrowDown />
          </div>
          <div className="product_body-reveal">
            <h4>Listings</h4>
            <IoIosArrowDown />
          </div>
          <div className="product_body-reveal">
            <h4>Status</h4>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <div className="product_explore">
        <p>Explore more from this section</p>
        <div>
          <IoIosArrowBack className="product_explore-direction" />
          <IoIosArrowForward className="product_explore-direction" />
        </div>
      </div>
      <div className="product_explore-more">
        {explore.map((data, index) => {
          return (
            <div className="explore_product" key={index}>
              <img
                src={explore_love}
                alt="love_icon"
                className="explore_love"
              />
              <img
                src={data.img}
                alt={data.name}
                className="explore_product-img"
              />
              <div className="explore_product-price">
                <p>{data.name}</p>
                <div className="explore_product-ether">
                  <FaEthereum />
                  <p>{data.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="explore_product-btn">Explore all</button>
    </div>
  );
};

export default SingleProduct;
