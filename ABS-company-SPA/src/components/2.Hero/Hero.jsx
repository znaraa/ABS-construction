import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  {
    src: "../../assets/istockphoto-1332532246-612x612.jpg",
    title: "Professional Machine Maintenance",
    subtitle: "Reliable technology supporting stable equipment operation",
    description:
      "Industrial equipment maintenance focusing on planning, designing, and execution (Kanto region case study)",
    link: "/project3",
  },
  {
    src: "../../assets/istockphoto-545102850-612x612.jpg",
    title: "Precision Blacksmithing Techniques",
    subtitle: "Reliable technology for grinding, cutting, and assembly",
    description:
      "Metal processing and steel frame construction emphasizing planning, designing, and execution (Chiba Prefecture case study)",
    link: "/project1",
  },
  {
    src: "../../assets/newcomer-who-got-job-architecture-work-healthy-pose-newcomer-who-got-job-architecture-work-170063785.webp",
    title: "Professional Welding Technology",
    subtitle: "Precision welding ensuring strength and safety",
    description:
      "Welding work for architectural steel frames with a focus on planning, designing, and execution (Tokyo case study)",
    link: "/project2",
  },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentImage ? "active" : ""}`}
            style={{
              backgroundImage: `url(${image.src})`,
            }}
          >
            <div className="hero-description">
              <p>{image.description}</p>
              <a href={image.link} className="details-button">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Planning, Designing, and Building Your Future
        </h1>
        <p className="hero-subtitle">
          ABS Construction Company is dedicated to creating spaces that inspire
          and endure.
        </p>
        <a
          href="#contact"
          className="cta-button"
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact us
        </a>
      </div>

      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImage ? "active" : ""}`}
            onClick={() => setCurrentImage(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
