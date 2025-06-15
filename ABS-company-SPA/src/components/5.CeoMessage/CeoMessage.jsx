import React, { useEffect } from "react";
import "./CeoMessage.css";
import { useLocation } from "react-router-dom";

const CeoMessage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section id="ceo-message" className="ceo-message">
      <div className="ceo-message_content">
        <div className="ceo-message_image">
          <img
            src="/public/assets/user-3296.png"
            alt="CEO"
            className="ceo-image"
          />
          <p className="ceo-name">CEO</p>
          <p className="ceo-signature">Pulldash</p>
        </div>
        <div className="ceo-message_text">
          <h2 className="ceo-message_title">Message from the CEO</h2>
          <p>
            Welcome to ABS Construction Company.
            <br />
            Our mission is to bring your vision to life through exceptional
            planning, innovative design, and quality construction.
            <br />
            We believe that every project is an opportunity to build lasting
            relationships and create spaces that inspire.
            <br />
            Thank you for trusting ABS Construction Company to shape your
            future.
            <br />
            <br />
            <strong>ABS Construction Company</strong>
          </p>
          <button
            className="ceo-button"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;
// This CeoMessage component is a section that includes a message from the CEO of the company.
// It features a title, a text message, and a signature, along with an image of the CEO.
// This structure allows for a personal touch to the company's webpage, enhancing the connection with visitors.
// The component also includes navigation functionality, allowing smooth scrolling to the section
// when the hash is present in the URL. Additionally, there's a "Contact Us" button that navigates
// the user to the contact page of the website.
