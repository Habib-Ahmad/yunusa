import React, { useEffect } from 'react'
import './Projects.css'
import { Col, Container, Row } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Projects() {
    
    useEffect(() => {
            Aos.init({duration: 1000})
        }, [])

    return (
        <Container className="projects">

            <Row>
                <Col></Col>
                <Col><p className="projects__heading">Projects</p></Col>
                <Col></Col>
            </Row>
            {/* 1 */}
            <Row className="mb-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h4>Jun 2012</h4>
                </Col>
                <Col sm="9">
                    <h4 style={{fontWeight:"400"}}>Antioxidant Effect of Carica papaya on Ethanol Induced Gastric Lesion in Adult Male Wistar Rats</h4>
                    <p>Authors: Okesina AkeemS. B. Mesole, J. Olusakin, E. A. Caxton-Martins, et al</p>
                    <p>
                        This study was performed to elucidate the role of some important constituents of antioxidant defence such as Glutathione Peroxidase (GPx), Thiobarbituric Acid Reaction (TBAR), the activity of the enzyme Glucose-6-Phosphate Dehydrogenase (G-6-PDH) of Carica...
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/project/Toxicity-Projects">direct Link </a></p>
                    </p>
                </Col>
            </Row>

            {/* 2 */}
            <Row className="mb-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h4>Nov 2014 - Jul 2020</h4>
                </Col>
                <Col sm="9">
                    <h4 style={{fontWeight:"400"}}>Neuroscience development in Africa</h4>
                    <p>
                        Authors: Mahmoud Bukar, MainaMG YunusaAli, Maina Bukar, Tom Baden, et al
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/project/Neuroscience-development-in-Africa">direct Link </a></p>
                    </p>
                    
                </Col>
            </Row>            
        </Container>
    )
}
