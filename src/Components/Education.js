import React from "react";

const Education = React.forwardRef(({}, myref) => (
  <div ref={myref} className="education">
    <div className="education-title">
      <p>Education</p>
    </div>
    <div className="education-content">
      <div className="content-card edu-content">
        <div>
          <p>2015 - 2021</p>
          <p>University of Benin </p>
        </div>
       

        <div>
          <p>Electrical and Electronic Engineering</p>
          <p>
            Bachelor of Engineering <br/>
           <i>Grade:</i> First Class
          </p>
        </div>
      </div>
      
     
    </div>
  </div>
));

export default Education;
