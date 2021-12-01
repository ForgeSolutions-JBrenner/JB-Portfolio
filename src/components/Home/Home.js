import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import homeLogo from "../../assets/aboutjb.svg";
import myImg from "../../assets/computerjb.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import TypeCode from "./TypeCode";
import { BsCode } from "react-icons/bs";
import About from "../About/About";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
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
                I'M
                <strong className="main-name"> JUSTIN BRENNER</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <About/>
    </section>
  );
}

export default Home;
