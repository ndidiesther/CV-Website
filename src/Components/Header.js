import React, { useRef } from "react";
import Experience from "./Experience";
import Works from "./Works";
import Skills from "./Skills";
import Education from "./Education";
import Banner from "./Banner";
import Body from "./Body";

export default function Header() {
  const bannerOnClickRef = useRef(null);
  const bodyOnClickRef = useRef(null);
  const experienceOnClickRef = useRef(null);
  const educationOnClickRef = useRef(null);
  const skillsOnClickRef = useRef(null);
  const worksOnClickRef = useRef(null);
  

  const scrollEffect = (targetRef) => {
    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div>
      <div className="header col-12">
        <div className="col-3">
          <p className="p_name"> Ndidi Esther Chibogu</p>
        </div>
        <div className="col-9">
          <ul className="main-menu header-list">
            <li onClick={() => scrollEffect(bannerOnClickRef)}>Home</li>
            <li onClick={() => scrollEffect(bodyOnClickRef)}>About</li>
            <li onClick={() => scrollEffect(experienceOnClickRef)}>
              Experience
            </li>
            <li onClick={() => scrollEffect(educationOnClickRef)}>Education</li>
            <li onClick={() => scrollEffect(skillsOnClickRef)}>Skills</li>
            <li onClick={() => scrollEffect(skillsOnClickRef)}>Portfolio</li>
          </ul>
        </div>
      </div>
      <Banner ref={bannerOnClickRef} />
      <Body ref={bodyOnClickRef} />
      <Experience ref={experienceOnClickRef} />
      <Education ref={educationOnClickRef} />
      <Skills ref={skillsOnClickRef} />
      <Works ref={worksOnClickRef} />
    </div>
  );
}
