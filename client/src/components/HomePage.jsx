import React, { useState, useEffect } from "react";
import "../styles/HomePage.css";
import { BACKEND_URL } from "../config";

const HomePage = () => {
  const [heading, setHeading] = useState("Loading...");

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/heading`)
      .then((response) => response.json())
      .then((data) => setHeading(data.text))
      .catch((error) => console.error("Error fetching heading:", error));
  }, []);

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">Company ABC</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h1 className="hero-heading">{heading}</h1>
        <p className="hero-text">
          AI solutions for revenue, marketing, and commercial growth.
        </p>
        <button className="cta-button">Get Started</button>
      </header>
    </div>
  );
};

export default HomePage;
