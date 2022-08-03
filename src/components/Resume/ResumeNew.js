import React, { useState, useEffect } from "react";
import { Container, Row, Col, ProgressBar, } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/jb-aug-2022.pdf";
import Particle from "../Particle";
import skills from '../../assets/skills.svg'
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeGHlink =
  "https://github.com/ForgeSolutions-JBrenner/JB-Portfolio/blob/main/src/assets/jb-aug-2022.pdf";
  const ProfBars = [
    {
        Stack: "Front-end / Design", //Insert stack or technology you have experience in
        progressPercentage: "95", //Insert relative proficiency in percentage
    },
    {
        Stack: "Back-end Development",
        progressPercentage: "75",
    },
    {
        Stack: "Mobile Web and Desktop",
        progressPercentage: "66",
    },
    {
        Stack: "Frameworks",
        progressPercentage: "50",
    }
];
const SkillBars = [
    {
        Stack: "JavaScript", //Insert stack or technology you have experience in
        progressPercentage: "90", //Insert relative proficiency in percentage
    },
    {
        Stack: "Object Model & DOM manipulation",
        //JavaScript, object model, DOM manipulation and event handlers, data structures, algorithms, JSX, and Babel
        progressPercentage: "70",
    },
    {
        Stack: "Data Structures & Algorithms",
        progressPercentage: "60",
    },
    {
        Stack: "RESTful API's / GraphQL ",
        progressPercentage: "60",
    },
    {
        Stack: "Front-end development tools",
        progressPercentage: "60",
    },
    {
        Stack: "Performance testing (Mocha, Node + NPM)",
        progressPercentage: "60",
    },
];
function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Col></Col>
        <Col xs={5}>
          <Button className="dl-button" href={pdf} target="_blank">
            <AiOutlineDownload style={{ marginRight: "10px" }} />
            Download CV
          </Button>
        </Col>
        <Col></Col>
      </Row>
      <Row className="resume">
        <Col></Col>
      {/* <Col >
						
                        <h1 className="h1">PROFICIENCY</h1>
						{ProfBars.map((skill) => {
							return (
								<div
									className="progress-info"
									key={skill.Stack}
								>
									<div className="progress-label">
										<span>{skill.Stack}</span>
									</div>
									<div className="progress-percentage">
										<span>{skill.progressPercentage}%</span>
									</div>
									<ProgressBar
										max="100"
										now={skill.progressPercentage}
										color="info"
										role="progressbar"
										aria-label={skill.Stack}
									/>
								</div>
							);
						})}
                        
                        <hr/>
                        						<h1 className="h1">SKILLS</h1>
						{SkillBars.map((skill) => {
							return (
								<div
									className="progress-info"
									key={skill.Stack}
								>
									<div className="progress-label">
										<span>{skill.Stack}</span>
									</div>
									<div className="progress-percentage">
										<span>{skill.progressPercentage}%</span>
									</div>
									<ProgressBar
										max="100"
										now={skill.progressPercentage}
										color="info"
										role="progressbar"
										aria-label={skill.Stack}
									/>
								</div>
							);
						})}
                        
					</Col> */}
        <Col col="sm" >
          <Document
            file={pdf}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={width > 786 ? 1.7 : 0.6} />
            ))}
          </Document>
        </Col>
        <Col></Col>
      </Row>
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Col></Col>
        <Col>
          <Button className="dl-button" href={pdf} target="_blank">
            Download CV
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default ResumeNew;
