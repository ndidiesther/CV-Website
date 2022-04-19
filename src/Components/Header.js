import React, { useRef } from "react";
import Experience from "./Experience";
import Clients from "./Clients";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";
import Banner from "./Banner";
import Body from "./Body";

export default function Header() {
    const experienceOnClickRef = useRef(null);
    const educationOnClickRef = useRef(null);
    const skillsOnClickRef = useRef(null);
    const clientsOnClickRef = useRef(null);
    const contactOnClickRef = useRef(null);
  
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
                <p className="p_name">Rachel Smith</p>
            </div>
            <div className="col-9">
            <ul className="main-menu header-list">
                <li onClick={() => scrollEffect(experienceOnClickRef)}>Experience</li>
                <li onClick={() => scrollEffect(educationOnClickRef)}>Education</li>
                <li  onClick={() => scrollEffect(skillsOnClickRef)}>Skills</li>
                <li  onClick={() => scrollEffect(clientsOnClickRef)}>Clients</li>
                <li  onClick={() => scrollEffect(contactOnClickRef)}>Contact</li>
            </ul>

            </div>

          </div>
          <Banner />
          <Body />
     
        <Experience ref={experienceOnClickRef} />
        <Education ref={educationOnClickRef} />
        <Skills ref={skillsOnClickRef} />
        <Clients ref={clientsOnClickRef} />
        <Contact  ref={contactOnClickRef} />
      </div>
    );
  }
  
