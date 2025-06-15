import React from "react";
import Header from "../components/1.Header/Header";
import Footer from "../components/7.Footer/Footer";
import Contact from "../components/6.Contact/Contact";
import "../components/4.Project/Project.css";

const Project2 = () => {
  return (
    <>
      <Header />
      <div className="project-page">
        <h1>Professional Welding Technology</h1>
        <img
          src="/public/assets/newcomer-who-got-job-architecture-work-healthy-pose-newcomer-who-got-job-architecture-work-170063785.webp"
          alt="Professional Welding"
          className="project-page-image"
        />
        <p>
          ABS Construction excels in professional welding technology, ensuring
          strength and safety in architectural steel frames. Our approach
          integrates planning, designing, and execution to deliver superior
          results.
        </p>
        <p>Case Study: Welding work for architectural steel frames in Tokyo.</p>
        <div className="navigation-buttons">
          <a href="/" className="back-link">
            Back to Main Page
          </a>
          <a href="/project3" className="next-link">
            Next Project
          </a>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Project2;
