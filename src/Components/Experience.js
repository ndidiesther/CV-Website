import React from "react";

const Experience = React.forwardRef(({}, myref) => (
  <div ref={myref} className="experience">
    <div className="experience-title">
      <p>Experience</p>
    </div>
    <div className="experience-content">
      <div className="content-card exp-content">
        <div>
          <p>2020 - Present</p>
          <p>Senior Software Developer</p>
        </div>

        <div>
          <p>Acra Payments</p>
          <p>
            Develop, upgrade, and maintain advanced financial industry software.
            Coordinate the design and implementation of various applications,
            including collaboration with project managers, and client
            representative and development teams. Provide mentoring services to
            junior developers as needed.
          </p>
        </div>
      </div>
      <div className="content-card exp-content">
        <div>
          <p>2018 - 2020</p>
          <p>Junior web developer</p>
        </div>

        <div>
          <p>Sight Innovation</p>
          <p>
            Implemented websites, mobile applications and landing pages from
            concept through deployment. Standardized all outputs with a new,
            responsive, mobile-first approach and strategy. Developed my team
            work skills by working in close collaboration with other team
            members.
          </p>
        </div>
      </div>
      <div className="content-card exp-content">
        <div>
          <p>2015 - 2016</p>
          <p>Ip Intern</p>
        </div>

        <div>
          <p>Mainone</p>
          <p>
            Acquired basic skills in critical thinking and problem solving,
            effective professional communication, team building and creative
            writing. Worked with a team comprising of product manager, product
            designer, data scientist, frontend and backend developers in
            developing a telemedicine app. 
          </p>
        </div>
      </div>
    </div>
  </div>
));

export default Experience;
