import React from "react";
import "../styles/main.css";

function Place() {
  return (
    <div className="place" id="place">
      <h3>Explore Beautiful Place</h3>
      <div className="cards">
        <div className="box1">
          <div className="card">
            <h5>Drini Beach</h5>
            <p>Yogyakarta, Indonesia</p>
          </div>
        </div>
        <div className="box2">
          <div className="card">
            <h5>Baron Beach</h5>
            <p>Yogyakarta, Indonesia</p>
          </div>
        </div>
        <div className="box3">
          <div className="card">
            <h5>Trisik Beach</h5>
            <p>Yogyakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place;
