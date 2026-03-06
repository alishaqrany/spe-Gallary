import { useState,} from 'react';
import Header from '../components/Header';
import ImageGridart from '../components/image-grade/ImageGrid-art';
import Modal from '../components/Modal';
import Footer from '../components/footer';
import {Nav, NavDropdown} from 'react-bootstrap';


function Art(props) {
  const [selectedImg, setSelectedImg] = useState(null);


  return (
        (<>
          <Header className="boxg" />
          <div className='container text-center alii ' style={{ paddingTop: 15}}>
            <Nav variant="pills" className='box text-white' defaultActiveKey="link-1">
              <Nav.Item>
                <Nav.Link href="gallery">الصور</Nav.Link>
              </Nav.Item>  
              <Nav.Item>
                <Nav.Link eventKey="link-1"  href="art">الفنون</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  eventKey="link-2" className='danger' href="nat">الطبيعة</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  eventKey="link-3" href="pano">بانوراما اكتوبر</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  eventKey="link-4" href="fb">فلاش باك</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link  eventKey="link-5" href="ath"> الاثار</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  eventKey="link-6" href="hand"> الحرف اليدوية </Nav.Link>
            </Nav.Item>
            
            <NavDropdown title="حياة كريمة" className="nav-basic-nav-dropdown "  className='widget20' id="basic-nav-dropdown" size='lg'> 
              <NavDropdown.Item href="hlifeBefore" className='widget15'>   قبل التنفيذ  </NavDropdown.Item>
              <NavDropdown.Item href="hlifeBet" className='widget15'>   اثناء التنفيذ  </NavDropdown.Item>
              <NavDropdown.Item href="hlifeAfter" className='widget15'>   بعد التنفيذ  </NavDropdown.Item>
            </NavDropdown>
            

            </Nav>
            <div className='container '>
              <h1 className='text-white1'>
                الفنون 
              </h1>
            </div>
            <ImageGridart setSelectedImg={setSelectedImg} />
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
          </div>
          <Footer />
        </>)
  );
}

export default Art;