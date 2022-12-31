import React from "react";
import { marketplaces } from "../../data";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import filter from "../../images/filter_icon.svg";
import Contact from "../Contact";

const Marketplace = () => {
  return (
    <>
      <div className="marketplace">
        <div className="marketplace-section">
          <div className="marketplace_section-1">
            <input type="text" className="marketplace_input" placeholder="Search" />
            <div className="marketplace_left-section">
              <div className="marketplace_filter">
                <img src={filter} alt="filter_icon" />
                <h3>Filter</h3>
              </div>
              <div className="marketplace_category">
                <div className="marketplace_category-1">
                  <p>By category</p>
                  <MdKeyboardArrowUp />
                </div>
                <ul className="marketplace_category-2">
                  <li>
                    <input type="checkbox" className="checkbox" />
                    <label for="">Editorials</label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label for="">Fashion</label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label for="">Art & Museum</label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label for="">Nature</label>
                  </li>
                </ul>
              </div>
              <div className="marketplace_price">
                <div className="marketplace_price-1">
                  <p>By price</p>
                  <MdKeyboardArrowUp />
                </div>
                <div className="marketplace_price-2">
                  <p>$100 - $150</p>
                  <input type="range" />
                </div>
              </div>
              <div className="marketplace_artist">
                <div className="marketplace_artist-1">
                  <p>By artist</p>
                  <MdKeyboardArrowUp />
                </div>
                <div className="marketplace_artist-2">
                  <p>All</p>
                  <ul>
                    <li>Below $100.00</li>
                    <li>$100.00 - $150.00</li>
                    <li>$150.00 - $200.00</li>
                    <li>Above $200.00</li>
                  </ul>
                </div>
              </div>
              <div className="marketplace_collection">
                <div className="marketplace_collection-1">
                  <p>Collection year</p>
                  <MdKeyboardArrowUp />
                </div>
              </div>
            </div>
          </div>
          <div className="marketplace_section-2">
            {/* <input type="text" className="marketplace_input" value='' /> */}
            <div className="marketplace_input-right"></div>
            <div className="marketplace_right-section">
              {marketplaces.map((data) => {
                return (
                  <div className="marketplace_right-img" key={data.id}>
                    <Link to={`/marketplace/${data.id}`} className="nav_link">
                      <img src={data.img} alt={`${data.title}img`} />
                      <div className="marketplace_right-text">
                        <p>{data.title}</p>
                        <h4>${data.price}</h4>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <button className="marketplace_btn">See More</button>
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default Marketplace;
