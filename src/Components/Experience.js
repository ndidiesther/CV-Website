import React from "react";

const Experience = React.forwardRef(({}, myref) => (
  <div ref={myref} className="experience">
    <div className="experience-title">
      <p>Experience</p>
    </div>
    <div className="experience-content details-content">
      <div className="content-card exp-content">
        <div>
          <p>June 2022 - Oct. 2022</p>
          <p>Software Engineering Intern</p>
        </div>

        <div>
          <p>Paritie Dynamic Enterprise Limited</p>
          <p>
            Proficient in building web user interfaces that are more user
            interactive using Html, CSS, Javascript, React, ES6 and typescript.
            Built an ecommerce web app with working cart functionalities and
            highly responsive user interface components using react concepts.
          </p>
        </div>
      </div>
      <div className="content-card exp-content">
        <div>
          <p>Aug. 2020 - Nov. 2021</p>
          <p>Web development Intern</p>
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
          <p>Aug. 2019 - Jan. 2020</p>
          <p>IP Intern</p>
        </div>

        <div>
          <p>Mainone</p>
          <p>
            Undertook a training on Networking devices and terminologies.
            Assisted in the provisioning of services to new customers alongside
            IP Engineers. Configuring and troubleshooting Cisco routers and
            switches. Preparing Handover documents after services has been
            provisioned and activated.
          </p>
        </div>
      </div>
    </div>
  </div>
));

export default Experience;
