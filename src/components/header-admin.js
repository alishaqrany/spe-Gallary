import React from 'react'
import { authUser } from '../firebase/config'


import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';


const Headeradmin = () => {

    const handleClick = () => {
        authUser.signOut();
    }

    return (
<Navbar bg="light" expand="lg" >
    <Container>
    <Navbar.Brand href="/">
        <img
            alt="حكاية ضوء"
            src="/logoa.svg"
            width="40"
            height="40"
            className="d-inline-block align-top"
        />{' '}
        حكاية ضوء
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/">الرئيسية</Nav.Link>
            <Nav.Link href="about-us">عن الموقع</Nav.Link>
            <Nav.Link href="contact-us">   تواصل معنا </Nav.Link>
            <NavDropdown title="المعرض" style={{font: 20}} className='widget20' id="basic-nav-dropdown" size='lg'> 
            <NavDropdown.Item href="gallery" className='widget15'>  الصور  </NavDropdown.Item>
            <NavDropdown.Item href="art" className='widget15'>الفنون</NavDropdown.Item>
            <NavDropdown.Item href="pano" className='widget15'>بانوراما اكتوبر</NavDropdown.Item>
            <NavDropdown.Item href="nat" className='widget15'>  الطبيعة </NavDropdown.Item>
            <NavDropdown.Item href="fb" className='widget15'> فلاش باك  </NavDropdown.Item>
            <NavDropdown.Item href="ath" className='widget15'> الاثار  </NavDropdown.Item>
            <NavDropdown.Item href="hand" className='widget15'> الحرف اليدوية  </NavDropdown.Item>
            <NavDropdown.Item href="hlifeBefore" className='widget15'>  حياة كريمة  </NavDropdown.Item>
        </NavDropdown>
        </Nav>
    </Navbar.Collapse>  
    <button className="btn btn-primary float-end me-2" onClick={handleClick}> تسجيل الخروج  </button>
    </Container>
    </Navbar>
)}

export default Headeradmin;