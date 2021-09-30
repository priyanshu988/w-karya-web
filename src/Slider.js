import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <div className="body">
        <center>
      <div className="content">
        <h2 className="content_title">Find job postings in top companies like</h2>
        
      </div>
        </center>
        
      <div className="slider">
        <div className="slider-track">
          <div className="slide">
            <img
              src="https://www.backbase.com/wp-content/uploads/2020/05/Microsoft-Logo-PNG-Transparent.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1280px-Walmart_logo.svg.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://design.firefox.com/product-identity/firefox/firefox-horizontal-lockup/firefox-logo-horizontal-lockup.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://www.pngkey.com/png/full/13-138700_youtube-logo-png-transparent-background-youtube-live-logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Slider;
