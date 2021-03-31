import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'

export default function Footer() {
    return (
        <Container className="footer">
            <Row>
                <Col className="footer__text py-4">
                    <footer>YUNUSA MOHAMMED GARBA © 2021</footer>
                </Col>
            </Row>
        </Container>
    )
}
