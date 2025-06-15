import React from "react";
import Header from "../components/1.Header/Header";
import Footer from "../components/7.Footer/Footer";
import Contact from "../components/6.Contact/Contact";
import "../components/4.Project/Project.css";

const Project1 = () => {
  return (
    <>
      <Header />
      <div className="project-page">
        <h1>Precision Blacksmithing Techniques</h1>
        <img
          src="/public/assets/istockphoto-545102850-612x612.jpg"
          alt="Precision Blacksmithing"
          className="project-page-image"
        />
        <p>
          ABS Construction specializes in precision blacksmithing techniques,
          ensuring reliable technology for grinding, cutting, and assembly. Our
          focus is on planning, designing, and executing projects with
          exceptional quality.
        </p>
        <p>
          Case Study: Metal processing and steel frame construction in Chiba
          Prefecture.
        </p>
        <div className="navigation-buttons">
          <a href="/" className="back-link">
            Back to Main Page
          </a>
          <a href="/project2" className="next-link">
            Next Project
          </a>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Project1;
