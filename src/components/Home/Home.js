import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import girlLaptopImg from "../../Assets/anushapic.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section className="home">
      
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M ANUSHA AVULAPATI
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 20 }}>
            <br/>
            <br/>
            <br/>
              <img
                src={girlLaptopImg}
                width={400}
                height={100}
                alt="home pic"
                className="img-fluid"
                // style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      
        
      </Container>
      <Home2 />
      
    </section>
  );
}

export default Home;
