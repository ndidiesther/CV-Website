import React from "react";

const Education = React.forwardRef(({}, myref) => (
  <div ref={myref} className="education">
    <div className="education-title">
      <p>Education</p>
    </div>
    <div className="education-content">
      <div className="content-card edu-content">
        <div>
          <p>2002 - 2007</p>
          <p>L.A University of Applied Sciences </p>
        </div>
       

        <div>
          <p>Computer Science</p>
          <p>
            Bachelor of Science <br/>
           <i>Grade:</i> First Class
          </p>
        </div>
      </div>
      
     
    </div>
  </div>
));

export default Education;
