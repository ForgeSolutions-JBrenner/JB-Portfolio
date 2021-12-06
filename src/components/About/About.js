import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Particle from '../Particle'
import computerimg from '../../assets/algorithmjb.png'
import Techstack from './Techstack'
import Toolstack from './Toolstack'

function About() {
    return (
<Container fluid className="about-section"  id="aboutsection">
    <Particle/>
    <Container>

    <h1 className="project-heading">
        Professional <strong className="purple">Skillset</strong>
    </h1>
    <Techstack/>
    <h1 className="project-heading">
        <strong className="purple">Tools</strong> I Use
    </h1>
    <Toolstack/>
    </Container>
</Container>
    )
}

export default About
