import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        style={{ height: "240px" }}
        src={props.imgPath}
        alt="card-img"
      />
      <Card.Body>
        <Card.Title><strong>{props.title}</strong></Card.Title>
        <Card.Text style={{ textAlign: "left", letterSpacing: "normal", width: "100%" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          <strong>Tech Stack</strong>
          <br />
          {props.techstack}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View App"}
        </Button>
        <a
                  href={props.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  style={{marginLeft: "10px", cursor: "pointer"}}
                >
                  <AiFillGithub />
                </a>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
