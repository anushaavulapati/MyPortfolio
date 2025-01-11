import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ fontSize: "1em", textAlign: "justify" }}>
            Hi, I am Anusha Avulapati currently pursuing my master's degree in Computer Science at Stony Brook University.
            I am a software developer with expertise in MERN stack development.
            I hold a Bachelor of Technology degree in Computer Science from Vellore Institute of Technology and
            have professional experience working with Shell India Private Ltd and Sailotech as a software engineer and data analyst intern, respectively.
            I am actively seeking job opportunities to further my career.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
