import React from 'react'
import '../styles/main.css'

function Discover() {
  return (
    <div className='discover' id='discover'>
        <h3>Discover The Most Attractive Places</h3>
        <div className="cards">
            <div className="card1">
                <h4>Pakis Beach</h4>
                <span>Karawang, Indonesian</span>
            </div>
            <div className="card2">
                <h4>Suluban Beach</h4>
                <span>Bali, Indonesian</span>
            </div>
            <div className="card3">
                <h4>Karimun Java</h4>
                <span>Jawa Tengah, Indonesian</span>
            </div>
        </div>
    </div>
  )
}

export default Discover