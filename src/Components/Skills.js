import React from "react";

const Skills = React.forwardRef(({}, myref) => (
  <div ref={myref} className="skills">
    <div className="main-container" style={styles.header}>
      <div style={styles.content}>
        <div className="skills-title skills-btn">
          <p>Skills</p>
        </div>
        <div className="skills-content col-12">
          <div className="sub-content col-6">
          <div>
            <p>Javascript - Intermediate</p>
          </div>
          <div>
            <p>React - Proficient</p>
          </div>
          <div>
            <p>HTML/CSS - Advanced</p>
          </div>
          </div>
           <div className=" sub-content col-6">
           <div>
            <p>TypeScript - Intermediate</p>
          </div>
          <div>
            <p>Tailwind CSS - Proficient</p>
          </div>
          <div>
            <p>Linux:Ubuntu - Proficient </p>
          </div>
          </div>
         

        </div>
      </div>
    </div>
  </div>
));

export default Skills;

const styles = {
  header: {
    backgroundImage:
      "url(https://static.wixstatic.com/media/baac51_5f3719a2964e482ebdf6c889115744c0~mv2_d_4896_3264_s_4_2.jpg/v1/fill/w_1281,h_699,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/baac51_5f3719a2964e482ebdf6c889115744c0~mv2_d_4896_3264_s_4_2.jpg)",
    height: "60vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(24,33, 83, 0.9)",
    color: "white",
  },
};
