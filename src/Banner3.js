import React from "react";
import "./Banner3.css";

function Banner3() {
  return (
    <div>
        <div className="banner3">
            <div className="banner-content">
                <div className="images">
                <img
                    className="emp_clip"
                    alt=""
                    src="data:image/png;base64,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"
                />
                </div>
                <div className="product">
                    <p>Effortless Joining for</p>
                    <h1 className="head1">Interviews</h1>
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>

        <div className="banner3">
            <div className="banner-content">
                
                <div className="product">
                    <p className="title_3">Effortless Joining for</p>
                    <h1 className="head1">Interviews</h1>
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="images">
                <img
                    className="emp_clip"
                    alt=""
                    src="data:image/png;base64,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"
                />
                </div>
            </div>
        </div>
        <center>
        <hr className="section_line" />
        </center>
    </div>
  );
}

export default Banner3;
