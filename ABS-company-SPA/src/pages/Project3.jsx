import React from "react";
import Header from "../components/1.Header/Header";
import Footer from "../components/7.Footer/Footer";
import Contact from "../components/6.Contact/Contact";
import "../components/4.Project/Project.css";

const Project3 = () => {
  return (
    <>
      <Header />
      <div className="project-page">
        <h1>Professional Machine Maintenance</h1>
        <img
          src="/public/assets/istockphoto-1332532246-612x612.jpg"
          alt="Professional Machine Maintenance"
          className="project-page-image"
        />
        <p>
          ABS Construction provides professional machine maintenance services,
          supporting stable equipment operation with reliable technology. Our
          projects are driven by meticulous planning, designing, and execution.
        </p>
        <p>Case Study: Industrial equipment maintenance in the Kanto region.</p>
        <div className="navigation-buttons">
          <a href="/" className="back-link">
            Back to Main Page
          </a>
          <a href="/project1" className="next-link">
            Next Project
          </a>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Project3;
