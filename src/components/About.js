import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './About.css'
import { Timeline } from 'react-twitter-widgets'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function About() {

    useEffect(() => {
		Aos.init({duration: 1000})
	}, [])

    return (
        <Container className="mt-5" fluid>
            <Row className="mx-5 mb-5">
                <Col sm="3" data-aos="fade-up" data-aos-once="true">
                    <img className="about__img" src="figure-fig3.png" alt="" />
                </Col>
                <Col sm="3" data-aos="fade-up" data-aos-once="true">
                    <img className="about__img" src="Collaborations-A1-Citations-plotted-against-Journal-impact-factor-IF-for-each.png" alt="" />
                </Col>
                <Col sm="3" data-aos="fade-up" data-aos-once="true">
                    <img className="about__img" src="Figure-S2-Inter-fly-encounters-during-the-test-Related-to-Figure-2C-E.ppm" alt="" />
                </Col>
                <Col sm="3" data-aos="fade-up" data-aos-once="true">
                    <img className="about__img" src="figure-fig4.png" alt="" />
                </Col>
            </Row>


            <Row className="my-5">
                <Col></Col>
                <Col>
                    <h5>News Carousel goes here...</h5>
                </Col>
                <Col></Col>
            </Row>


            <Row className="mr-20">
                <Col md='5'>
                    <img className="about__thumbnail"  data-aos="fade-up" data-aos-once="true" data-aos-delay="300" src="Dr. Yunusa Garba.png" alt="Thumbnail"/>
                </Col>
                <Col className="about__text pr-5"  data-aos="fade-up" data-aos-once="true" data-aos-delay="500">
                    Dr. Yunusa M. Garba is the founder of Algorizmi Health Ltd, an Artificial Intelligence based diagnostic start-up and Algorizmi Tech Ltd, a medical equipment development start-up. Dr Yunusa has a B.Sc. from the University of Maiduguri, Nigeria, Masters training at Kampala International University in Uganda and a Ph.D. in Neuroscience from the Max-Planck Institute at the University of Konstanz in Germany. He is a lecturer at the College of Medical Sciences, Gombe State University, Nigeria and currently a postdoctoral fellow at the University of British Columbia, Vancouver, Canada.
                </Col>
            </Row>

            <Row className="ml-5 my-5">
                <Col sm="4" data-aos="fade-up" data-aos-once="true">
                    <h4 className="about__name">Yunusa Garba</h4>
                    <p className="about__title">Professor of Human Anatomy</p>
                    <p className="about__contactInfo">
                        University of Gombe<br />
                        +234 902 953 1521<br />
                        ygarbawala@gmail.com
                    </p>
                    
                </Col>
                <Col sm="8" data-aos="fade-up" data-aos-once="true">
                    <h4>Career Summary</h4>
                    <div style={{display: "flex"}}>
                        <div className="mr-3 about__dates">
                            2019 - <br />
                            2016 - 2017 <br />
                            2011 -  <br />
                        </div>
                        <div className="about__career">
                            Research Associate, University of Konstanz, Germany<br/>
                            Teacher at Animal Physiology Course, University of Konstanz, Germany<br/>
                            Lecturer of Human Anatomy, University of Gombe, Nigeria
                        </div>
                    </div>
                </Col>
            </Row>


            <Row className="ml-5">
                <Col sm='4' data-aos="fade-up" data-aos-once="true">
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'ygarbawala1'
                        }}
                        options={{
                            height: 400,
                            fontSize: 200
                        }}
                    />
                </Col>
            </Row>
        </Container>
    )
}
