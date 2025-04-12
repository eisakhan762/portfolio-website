import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./FooterStyles.css";

import React from "react";
import { FaSquareUpwork } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <Link to="/">
            <h1 style={{marginBottom: "1.5rem"}}>Portfolio.</h1>
          </Link>
          <div className="dt-container">
            <h4>
              <FaHome
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                }}
              />
              Antop Hill, Mumbai, Maharashtra 400037
            </h4>
          </div>

          <div className="dt-container">
            <h4>
              <FaPhone
                size="20"
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 9619989717
            </h4>
          </div>
          <div className="dt-container">
            <h4>
              <FaMailBulk
                size="20"
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              khanarafat1376@gmail.com
            </h4>
            <div>
              <p></p>
            </div>
          </div>
        </div>

        <div className="right">
          <h4>Decoded: Eisa Khan</h4>
          <p>
            Beneath the pixels, I’m a 15-year-old dev who speaks JavaScript more
            fluently than Hindi.
            <br />
            Since age 11, I’ve been obsessed with turning curiosity into code —
            a spark that’s grown into full-stack fire.
            <br />
            I craft fast, fluid, and functional experiences using React,
            MongoDB, and a dash of Tailwind flair.
            <br />
            From browser tabs to mobile screens to desktop windows, I bring
            ideas to life — one keystroke closer to impact.
          </p>

          <div className="social">
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaSquareUpwork
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
