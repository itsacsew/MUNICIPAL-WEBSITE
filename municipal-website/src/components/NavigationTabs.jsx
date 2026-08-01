import React, { useState } from "react";
import "./NavigationTabs.css";
import logo from "../assets/logo2.png";

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState("HOME");

  const tabs = [
    "HOME",
    "ABOUT US",
    "SERVICES",
    "ANNOUNCEMENTS",
    "TRANSPARENCY",
    "CONTACT",
  ];

  return (
    <nav className="navbar">

      <div className="logo-wrapper">
        <img src={logo} alt="Municipality Logo" />
      </div>

      <div className="navbar-content">

        <ul className="nav-links">
          {tabs.map((tab) => (
            <li key={tab}>
              <a
                href="/"
                className={activeTab === tab ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab);
                }}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>

        <div className="location-pill">
          📍 Southern Leyte, PH
        </div>

      </div>

    </nav>
  );
};

export default NavigationTabs;