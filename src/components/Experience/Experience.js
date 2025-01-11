import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCards";
import Particle from "../Particle";
import imageretrieval from "../../Assets/Projects/imageretrieval.jfif";
import ocr from "../../Assets/Projects/ocr.png";
import veterinary from "../../Assets/Projects/veterinaryproj.jfif";
import shell from "../../Assets/shell.png";
import sbu from "../../Assets/sbu.png";
import sailotech from "../../Assets/sailotech.jfif";

function Experience() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Experience </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ExperienceCard
              imgPath={shell}
              header = "Shell India Pvt Ltd."
              place = " Bangalore, India"
              title="Software Engineer"
              time="Oct 2021 - Aug 2023"
              description={[
                "• Developed a MERN stack web application to enable users to create custom hierarchies and perform CRUD operations, boosting data conversion efficiency by 20%.",
                "• Led the development of the application’s core functionality, achieving 80% faster automatic XSLT creation.",
                "• Collaborated with backend engineers and QA teams, reducing project delivery time by 30% through efficient coordination and issue resolution.",
                "• Designed and implemented an enhanced UI layout, improving application visualization and user experience.",
                "• Created resilient CI/CD pipelines using Azure DevOps, reducing deployment time for over 250 scripts by 30%.",
                "• Planned, wrote, and debugged web applications with a 90% accuracy rate, adhering to industry standards and best practices."
              ]}
            />
          </Col>

          <Col md={10} className="project-card">
            <ExperienceCard
              imgPath={sbu}
              header = "Stony Brook University"
              place = "  Stony Brook, NY"
              title="Research Assistant"
              time="Jan 2024 - Dec 2024"
              description={[
                "• Built a full-stack Parkinson’s Annotation Tool with React.js and Flask, integrating motion sensor data with patient videos to enhance diagnosis and treatment planning.",
                "• Added H5 to CSV conversion for streamlined data handling and accessibility.",
                "• Developed an interactive data visualization and annotation tool using Plotly.js, allowing healthcare professionals to analyze accelerometer and gyroscope data in real time, zoom into specific time frames, and tag critical motor symptom observations for export to CSV.",
              ]}
            />
          </Col>

          <Col md={10} className="project-card">
            <ExperienceCard
              imgPath={sailotech}
              header = "Sailotech Pvt Ltd."
              place = "  Hyderabad, India"
              title="Data Analyst Intern"
              time="May 2019 - June 2019"
              description={[
                "• Conducted in-depth Customer Segmentation utilizing RFM Analysis on a comprehensive dataset containing details of online retail purchases.",
                "• Categorized customers into distinct segments such as Best Customers, Loyal Customers, and Lost Customers based on their purchasing behavior, paving the way for targeted and effective marketing strategies.",
                "• Generated reports and captivating presentations using QlikSense software to help businesses better understand customer behavior.",
              ]}
            />
          </Col>

          {/* <Col md={10} className="project-card">
            <ExperienceCard
              imgPath={fhrgemini}
              isBlog={false}
              title="Automated Medical Note Processing for Maternal Care"
              description="Developed an AI-powered system using NLP with BERT and the Gemini API to extract and streamline critical attributes from hospital notes, enhancing accessibility to structured medical data for maternal care analysis."
            />
          </Col> */}

          {/* <Col md={10} className="project-card">
            <ExperienceCard
              imgPath={veterinary}
              isBlog={false}
              title="Veterinary Management System"
              description="Developed a Veterinary Management System using React, Node.js, Express, and MySQL, enabling efficient pet and owner record management, vaccination tracking, appointment scheduling, and report generation with role-based access control."             
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageretrieval}
              isBlog={false}
              title="Image Retrieval using Multitexton Histograms"
              description="Developed an image retrieval application using Multitexton Histograms to identify the top 3 closest matches from a dataset of over 10,000 images, enhancing accuracy by analyzing multiple textures and patterns. Leveraged feature extraction techniques and distance metrics like Euclidean distance and cosine similarity to efficiently compare images and retrieve visually similar results."
              ghLink=""
              demoLink=""
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={email}
              isBlog={false}
              title="Email Security using PGP"
              description="Implemented PGP (Pretty Good Privacy) protocols to ensure confidentiality, integrity, and authentication of email communications by generating key pairs, encrypting messages, and creating digital signatures. Established a Web of Trust model for key verification and integrated PGP into email clients, enabling secure and reliable communication channels for users."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ocr}
              isBlog={false}
              title="Optical Character Recognition"
              description="Utilized deep learning frameworks, such as TensorFlow, PyTorch, to train a model capable of accurately recognizing text from images with diverse fonts and styles. Achieved successful integration of the OCR system with a user-friendly interface, showcasing the ability to bridge theoretical AI concepts with practical application in real-world projects."
              ghLink="" //Replace Github link here 
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
