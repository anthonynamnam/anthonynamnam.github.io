import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.medium}
        className="icon-button medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-medium"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.kaggle}
        className="icon-button kaggle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-kaggle"></i>
        <span></span>
      </a>
    </div>
  );
}
