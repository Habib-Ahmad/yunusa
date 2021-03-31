import React, {useState} from 'react'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

export default function NavBar() {

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 80){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <Navbar sticky="top" bg="white" variant="light" expand="lg">
            {/* <Navbar.Brand href="#home">LOGO</Navbar.Brand> */}
            <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto mt-3 ">
                    <Nav.Item>
                        <Link className="navbar__link px-4" to="/">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="navbar__link px-4" to="/publications">Publications</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="navbar__link px-4" to="/projects">Projects</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
