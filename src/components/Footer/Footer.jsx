import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Sneakers is an Indian multinational corporation that is engaged in
            the design, development, manufacturing, and worldwide marketing and
            sales of footwear, apparel, equipment, accessories, and services.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Gurugram, Harayana, India</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 998887776</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: geekyprashant840@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Sneakers</div>
          <span className="text">Featured Sneakers</span>
          <span className="text">Sneakers for Men</span>
          <span className="text">Sneakers for Women</span>
          <span className="text">Sneakers for Kids</span>
        </div>
        <div className="col">
          <div className="title">Need Help</div>
          <span className="text">Contact Us</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Terms & Conditions</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">MADE WITH ❤️ BY GEEKY PRASHANT</div>
          <img className="payment" src="/assets/payments.svg" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
