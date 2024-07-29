import React from "react";
import img1 from "../assets/image/img-1.png";
import img2 from "../assets/image/img-2.png";
import '../styles/main.css'

function About() {
  return (
    <div className="about" id="about">
      <div className="about-img">
        <img src={img1} alt="About Image" />
        <img className="img" src={img2} alt="About Image" />
      </div>
      <div className="about-texts">
        <h3>More information about the best beachs</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          otestate. Quae omnia in nostra sententia, pursuit
        </p>
        <button className="about-btn">Explore Now</button>
      </div>
    </div>
  );
}

export default About;
