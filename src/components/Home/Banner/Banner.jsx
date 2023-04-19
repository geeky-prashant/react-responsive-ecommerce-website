import React from "react";
import "./Banner.scss";
import { BsGiftFill } from "react-icons/bs";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <Tilt className="Tilt">
          <div className="Tilt-inner">
            <img className="banner-img" src="/assets/banner-img.png" alt="" />
          </div>
        </Tilt>
        <div className="text-content">
          <h1 className="linear-animation">JORDAN</h1>
          <p>
            Crafted with brilliance, this low-cut AJ1 brings a throwback hue
            synonymous with the '90s to an all-time classic silhouette
          </p>
          <div className="ctas">
            <div className="banner-cta">
              <a className="nletter" href="#newsletter">
                <BsGiftFill /> Calim Coupon
              </a>
            </div>
            <div className="banner-cta v2">
              <Link to="/category/1">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
