import React, { useRef, useState } from "react";
import Experience from "./Experience";
import Works from "./Works";
import Skills from "./Skills";
import Education from "./Education";
import Banner from "./Banner";
import Body from "./Body";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
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
        <div className="col-lg-3 col-md-4 col-sm-3">
          <p className="p_name"> Ndidi Esther Chibogu</p>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-9">
          <ul className="main-menu header-list">
            <li onClick={() => scrollEffect(bannerOnClickRef)}>Home</li>
            <li onClick={() => scrollEffect(bodyOnClickRef)}>About</li>
            <li onClick={() => scrollEffect(experienceOnClickRef)}>
              Experience
            </li>
            <li onClick={() => scrollEffect(educationOnClickRef)}>Education</li>
            <li onClick={() => scrollEffect(skillsOnClickRef)}>Skills</li>
            <li onClick={() => scrollEffect(worksOnClickRef)}>Portfolio</li>
          </ul>
        </div>
        <nav className="navigation">
          <div>
            <p className="p_name"> Ndidi Esther Chibogu</p>
          </div>

          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {/* icon from heroicons.com */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <div className="menu">
              <ul>
                <li
                  onClick={() => {
                    setIsNavExpanded(false);
                    scrollEffect(bannerOnClickRef);
                  }}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-activ" : "lin"
                    }
                    to="#"
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  onClick={() => {
                    setIsNavExpanded(false);
                    scrollEffect(bodyOnClickRef);
                  }}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "menulink-active" : "menulink"
                    }
                    to="#"
                  >
                    About
                  </NavLink>
                </li>
                <li
                  onClick={() => {
                    setIsNavExpanded(false);
                    scrollEffect(experienceOnClickRef);
                  }}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "menulink-active" : "menulink"
                    }
                    to="#"
                  >
                    Experience
                  </NavLink>
                </li>
                <li
                  onClick={() => {
                    setIsNavExpanded(false);
                    scrollEffect(educationOnClickRef);
                  }}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-activ" : "lin"
                    }
                    to="#"
                  >
                    Education
                  </NavLink>
                </li>
                <li
                  onClick={() => {
                    setIsNavExpanded(false);
                    scrollEffect(skillsOnClickRef);
                  }}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "menulink-active" : "menulink"
                    }
                    to="#"
                  >
                    Skills
                  </NavLink>
                </li>
                <li
                  onClick={() => {
                    setIsNavExpanded(false);
                    scrollEffect(worksOnClickRef)
                  }}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "menulink-active" : "menulink"
                    }
                    to="/cartitem"
                  >
                   Portfolio
                  </NavLink>
                </li>
              
              </ul>
            </div>
          </div>
        </nav>
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
