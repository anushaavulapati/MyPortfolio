import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imageretrieval from "../../Assets/Projects/imageretrieval.jfif";
import ocr from "../../Assets/Projects/ocr.png";
import veterinary from "../../Assets/Projects/veterinaryproj.jfif";
import parkinson from "../../Assets/Projects/parkinsonsproj.png";
import email from "../../Assets/Projects/email.jfif";
import fhrgemini from "../../Assets/Projects/fhrgemini.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h3 className="project-heading">
          <strong className="purple"> My Recent Works </strong>
        </h3>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parkinson}
              isBlog={false}
              title="Parkinson's Annotation Tool"
              description="Developed a full-stack Parkinson's Annotation Tool using React.js, Flask, and Plotly.js to visualize and annotate motion sensor data and patient video recordings, enabling detailed analysis, interactive data exploration, and streamlined CSV export for healthcare professionals."
              ghLink=""
              demoLink="https://parkinsons.compas.cs.stonybrook.edu/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fhrgemini}
              isBlog={false}
              title="Automated Medical Note Processing for Maternal Care"
              description="Developed an AI-powered system using NLP with BERT and the Gemini API to extract and streamline critical attributes from hospital notes, enhancing accessibility to structured medical data for maternal care analysis."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={veterinary}
              isBlog={false}
              title="Veterinary Management System"
              description="Developed a Veterinary Management System using React, Node.js, Express, and MySQL, enabling efficient pet and owner record management, vaccination tracking, appointment scheduling, and report generation with role-based access control."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageretrieval}
              isBlog={false}
              title="Image Retrieval using Multitexton Histograms"
              description="Developed an image retrieval application using Multitexton Histograms to identify the top 3 closest matches from a dataset of over 10,000 images, enhancing accuracy by analyzing multiple textures and patterns. Leveraged feature extraction techniques and distance metrics like Euclidean distance and cosine similarity to efficiently compare images and retrieve visually similar results."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={email}
              isBlog={false}
              title="Email Security using PGP"
              description="Implemented PGP (Pretty Good Privacy) protocols to ensure confidentiality, integrity, and authentication of email communications by generating key pairs, encrypting messages, and creating digital signatures. Established a Web of Trust model for key verification and integrated PGP into email clients, enabling secure and reliable communication channels for users."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ocr}
              isBlog={false}
              title="Optical Character Recognition"
              description="Utilized deep learning frameworks, such as TensorFlow, PyTorch, to train a model capable of accurately recognizing text from images with diverse fonts and styles. Achieved successful integration of the OCR system with a user-friendly interface, showcasing the ability to bridge theoretical AI concepts with practical application in real-world projects."
              ghLink="" //Replace Github link here 
            // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
