import React from "react";

const Body = () => {
  return (
    <div className="banner-body">
      <div className="social-media">
        <ul>
          <li>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </li>
          <li>
            {" "}
            <i className="fa-brands fa-facebook-f"></i>
          </li>
          <li>
            <i className="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
      <div className="banner-bio">
          <p>Hello! I'm Rachel</p>
        <p>
          Accomplished software developer with 15 years of experience in
          development of applications. Excels in every stage of the life cycle
          of software development, including design creation, coding, debugging,
          testing, and maintenance. Expert in devising innovative and tailored
          solutions to assist businesses achieve their goals in a variety of
          industries. Advanced skills and knowledge of leading programming tools
          with a strong background in mathematics, algorithms, and
          data-processing logic.
        </p>
      </div>
    </div>
  );
};

export default Body;
