import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';


const Header = () => {


    return (
<header>
<Navbar className='sticky-top' bg="light" expand="lg" >
  <Container>
  <Navbar.Brand href="/"  >
        <img
            alt="حكاية ضوء"
            src="/logo.svg"
            width="90"
            height="60"
            className="d-inline-block align-top"
            style={{marginLeft:5}}
        />{' '}

    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/" className='widget20' ><i className="fas fa-home widget20"></i> الرئيسية</Nav.Link>

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


        <Nav.Link href="contact-us" className='widget20'> <i className="fas fa-comment-alt widget20"></i>   تواصل معنا </Nav.Link>
        <Nav.Link href="about-us" className='widget20'><i className="fas fa-info widget20"></i>  عن الموقع</Nav.Link>
        <Nav.Link href="goals" className='widget20'><i className="fas fa-bullseye widget20"></i>   الاهداف</Nav.Link>
        <Nav.Link href="news" className='widget20'><i className="fas fa-rss widget20"></i>   الاخبار </Nav.Link>

        <NavDropdown title="أقسام الكلية" className='widget20' id="sections-nav-dropdown" size='lg'>
            <NavDropdown.Item href="achievements" className='widget15'>انجازات كلية التربية النوعية</NavDropdown.Item>
            <NavDropdown.Item href="quality" className='widget15'>مستحدثات الجودة بالكلية</NavDropdown.Item>
            <NavDropdown.Item href="alliance" className='widget15'>تحالف وتنمية</NavDropdown.Item>
            <NavDropdown.Item href="green-leadership" className='widget15'>مشروع الريادة الخضراء</NavDropdown.Item>
            <NavDropdown.Item href="innovation" className='widget15'>الابتكار وريادة الاعمال</NavDropdown.Item>
            <NavDropdown.Item href="museum" className='widget15'>المتحف المصري الكبير</NavDropdown.Item>
        </NavDropdown>

    </Nav>
    </Navbar.Collapse>  
    </Container>
</Navbar>


<div className='  bg-image' >
        <img src="b.jpg" height="90%" width="100%" />
{/*         <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
            
      <a className='btn btn-outline-light btn-lg' href='gallery' role='button'>
          <h1 className='mb-3'>
        عرض الصور
      </h1>
      <Spinner animation="grow" />
      </a>

                </div>
            </div>
        </div>
 */}    </div>


<p style={{ paddingTop: 30 }}>  </p>


</header>
        )
}

export default Header