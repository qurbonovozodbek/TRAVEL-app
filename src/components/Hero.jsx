import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import mb from "../assets/video/7mb.mp4";
import kk from "../assets/video/4k.mp4";
import "../styles/hero.css";

function Hero() {
  return (
    <div className="hero">
      <video className="video" autoPlay loop muted>
        <source className="mpfour" src={mb} type="video/mp4" />
      </video>
      <div className="texts">
        <h3>Discover your place</h3>
        <div className="title">
          <h2>Explore The Best</h2>
          <h1>Beautiful Beachs</h1>
        </div>
        <button className="hero-btn">Explore</button>
        <div className="social">
          <FaTwitter  className="icon" />
          <AiFillFacebook className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
