// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <CgCPlusPlus />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJavascript1 />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <TbBrandGolang />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiNodejs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiReact />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSolidity />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiMongodb />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiNextdotjs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiGit />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiFirebase />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiRedis />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostgresql />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiPython />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJava />
//       </Col>
//     </Row>
//   );
// }

// export default Techstack;

import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { FaJava, FaPython, FaReact, FaNodeJs, FaGit, FaDocker } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiCplusplus, SiMongodb, SiMysql, SiPhp } from "react-icons/si";
import { DiCss3, DiHtml5, DiAws, DiAngularSimple, DiVisualstudio, DiSpark } from "react-icons/di";

function Techstack() {
  // Skills with icons
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "HTML5", icon: <DiHtml5 /> },
    { name: "CSS3", icon: <DiCss3 /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "AWS", icon: <DiAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "GIT", icon: <FaGit /> },
    { name: "Apache Spark", icon: <DiSpark /> },
    { name: "AngularJS", icon: <DiAngularSimple /> },
    { name: "VS Code", icon: <DiVisualstudio /> },
  ];

  return (
    <div style={{ padding: "40px 0" }}>
      <h5
        style={{
          color: "rgb(12, 11, 11)",
          textAlign: "center",
          marginBottom: "30px",
          fontWeight: "bold",
        }}
      >
        Technologies and Tools I Work With
      </h5>
      <Row
        style={{
          justifyContent: "center",
          gap: "15px",
          padding: "0 20px",
        }}
      >
        {skills.map((skill, index) => (
          <Col xs={6} sm={4} md={3} lg={2} key={index}>
            <Card
              style={{
                backgroundColor: "#2a2a2e",
                color: "#fff",
                border: "1px solid #444",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                fontSize: "14px",
              }}
            >
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "10px",
                }}
              >
                <div style={{ fontSize: "24px", color: "#ffcc00" }}>{skill.icon}</div>
                <Card.Text style={{ fontSize: "12px", fontWeight: "500" }}>
                  {skill.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
