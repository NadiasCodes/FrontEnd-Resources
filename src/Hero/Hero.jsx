import React from "react";
import Stars from "../assets/stars.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <video src={Stars} autoPlay loop muted id="video"></video>
      <div className="content">
        <h2>Front-End Resources</h2>
        <p>• All sources in one place •</p>
      </div>
    </section>
  );
};

export default Hero;
