import React from "react";
import banner from "../Images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="main-container" style={styles.header}>
        <div style={styles.content}>
          <div className="main-container">
            <div className="banner-container">
              <img src={banner} />
            </div>
            <div className="banner-container">
              <div className="banner-content">
                <div>
                  <p className="b-name">Rachel Smith</p>
                  <p className="b-title">Software Developer</p>
                </div>
                <div className="b-phone">
                  <p>Phone:</p>
                  <p>123-456-7890</p>
                </div>
                <div className="b-email">
                  <p>Email:</p>
                  <p>info@mysite.com</p>
                </div>
                <div className="b-address">
                  <p>Address:</p>
                  <p>
                    500 Terry Francois Street <br /> San Francisco, CA 9415
                  </p>
                </div>
                <div className="b-date">
                  <p>Date of Birth:</p>
                  <p>March 14th, 1984</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
const styles = {
  header: {
    backgroundImage:
      "url(https://static.wixstatic.com/media/813b164e6ecd49b0b09f5f9913d34577.jpg/v1/fill/w_1281,h_699,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/813b164e6ecd49b0b09f5f9913d34577.jpg)",
    height: "90vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(24,33, 83, 0.8)",
    color: "white",
  },
};
