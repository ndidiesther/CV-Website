import React from "react";
import Phone from "../Images/phone.png";
import Rider from "../Images/max_logo.svg";
import Clothing from "../Images/brown-cowboy.png";
import { Link } from "react-router-dom";

const Works = React.forwardRef(({}, myref) => (
  <div ref={myref} className="experience">
    <div className="experience-title">
      <p>Portfolio</p>
    </div>
    <div className="experience-content">
      <a href="https://phoneecommerce-app.netlify.app/">
        <div className="content-card">
          <div className="port_content">
            <img src={Phone} />
          </div>
          <div>Phone E-commerce Shop</div>
        </div>
      </a>

      <a href="https://ndidiesther.github.io/Max_Rider_Clone/">
        <div className="content-card ">
          <div className="port_content">
            <img className="max_rider" src={Rider} />
          </div>
          <div>Max-Rider website</div>
        </div>
      </a>

      <a href="https://delight-clothing.netlify.app/">
        <div className="content-card ">
          <div className="port_content">
            <img className="max_rider" src={Clothing} />
          </div>
          <div>Delight Clothing</div>
        </div>
      </a>
    </div>
  </div>
));

export default Works;
