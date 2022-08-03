import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import surpluslist from "../../assets/Projects/apphome.png";
import chatify from "../../assets/Projects/chatify.png";
import wmh from "../../assets/Projects/wmh.png";
import editor from "../../assets/Projects/codeEditor.png";
import dimsecloud from "../../assets/Projects/dimse-cloud.png";
import suicide from "../../assets/Projects/suicide.png";
import spotify from "../../assets/Projects/spotify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={surpluslist}
              isBlog={false}
              title="Surplus List"
              description="The only nationwide mortgage and tax overage lead site available on the market for real-estate investors. This tool combines the power of multiple REST-APIs to enable customers to Skip Trace Person names and Addresses to obtain contact information, Auction transaction reports and much more. This application currently grosses $50,000.00/month"
              techstack="Front-end: Next.js | Back-end: AWS, REST-API's, FTP Servers"
              link="https://app.surpluslist.com/"
              githubLink="https://github.com/ForgeSolutions-JBrenner/Surplus-List-App-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dimsecloud}
              isBlog={false}
              title="DIMSE Cloud"
              description="DIMSE Cloud is a medical imaging workflow system for radiology practices. DIMSE Cloud aims to bring all of the recent advancements in medical imaging capabilities to the foreforont for use of Medical Imaging practitioners without geographic barriers or high implementation costs."
              techstack="Front-end: Vue.js | Back-end: AWS/GCP/Azure"
              link="https://www.dimsecloud.com/"
              githubLink="https://github.com/ForgeSolutions-JBrenner/dimseclouddev"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wmh}
              isBlog={false}
              title="Spotify Two Point 0"
              description="My family owns a farm in West Michigan, we produce Corn, Soybeans and Hay. This website is dedicated to our hay sales and includes functionality for hay purchases, invoicing and reservations based on current availability."
              techstack="Front-end: Next.js | Back-end: Supabase"
              link="https://github.com/ForgeSolutions-JBrenner/West-Michigan-Hay-2.0"
              githubLink="https://westmichiganhay.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify Two Point 0"
              description="My personal rendition of the most popular streaming and media services in the world. Using the Power of Next.js and the Spotify web API i generated beautiful clone of Spotify focusing on a UX/responsiveness first approach."
              techstack="Front-end: Next.js | Back-end: Spotify Web API"
              link="https://github.com/ForgeSolutions-JBrenner/spotify-clone-2.0-NextJs"
              githubLink="https://github.com/ForgeSolutions-JBrenner/spotify-clone-2.0-NextJs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              techstack="Front-end: React.js | Back-end: Firebase"
              link="https://chatify-49.web.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              techstack="Front-end: React.js | Back-end: Firebase"
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={surpluslist}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              techstack="Front-end: React.js | Back-end: Firebase"
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
