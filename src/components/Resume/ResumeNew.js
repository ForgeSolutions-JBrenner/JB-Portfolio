import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import JBresume from '../../assets/jb-nov-2021.pdf'
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
const [numPages, setnumPages] = useState(null);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Col></Col>
        <Col xs={5}>
          <Button className="dl-button">
            <AiOutlineDownload style={{ marginRight: "10px" }} />
            Download CV
          </Button>
        </Col>
        <Col></Col>
      </Row>
      <Row className="resume">
      <Document
    file={JBresume}
    onLoadSuccess={({ numPages })=>setnumPages(numPages)}
>
    {Array.apply(null, Array(numPages))
    .map((x, i)=>i+1)
    .map(page => <Page pageNumber={page}/>)}
</Document>
      </Row>
    </Container>
  );
}

export default ResumeNew;
