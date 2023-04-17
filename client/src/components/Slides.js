import "./Order.css";

import React, { useState } from 'react';

function Slides() {
  const [activeIndex, setActiveIndex] = useState(0); 

  const handlePrevClick = () => {
    const index = (activeIndex + 2) % 3; 
    setActiveIndex(index);
  };

  const handleNextClick = () => {
    const index = (activeIndex + 1) % 3; 
    setActiveIndex(index);
  };

  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="carousel-inner">
          <div className={activeIndex === 0 ? "carousel-item active" : "carousel-item"}>
            <img className="d-block w-100" src="./images/Gordon.jpg" alt="First slide"/>
          </div>
          <div className={activeIndex === 1 ? "carousel-item active" : "carousel-item"}>
            <img className="d-block w-100" src="./images/kfc.jpg" alt="Second slide"/>
          </div>
          <div className={activeIndex === 2 ? "carousel-item active" : "carousel-item"}>
            <img className="d-block w-100" src="./images/Chicken.jpg" alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" onClick={handlePrevClick}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" onClick={handleNextClick}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Slides;
