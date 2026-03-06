import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  return (<>
    <div style={{ paddingTop:20}}>

    </div>
    <MDBFooter bgColor='dark' className='text-white text-center text-lg-left ' >
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>حكاية ضوء</h5>

            <p>  معرض التصوير لكلية التربية  النوعية لعام {new Date().getFullYear()} </p>

            <a href="/"  >
        <img
            src="/logof.svg"
            width="120"
            height="90"
        />{' '}

    </a>

          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>روابط سريعة</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/' className='te widget20 '>
                  الرئيسية
                </a>
              </li>
              <li>
                <a href='gallery' className='te widget20'>
                  المعرض
                </a>
              </li>
              <li>
                <a href='contact-us' className='te widget20'>
                  تواصل معنا
                </a>
              </li>
              <li>
              <a href='about-us' className='te widget20'>
              عن الموقع
            </a>
          </li>
          <li>
          <a href='goals' className='te widget20'>
           الاهداف
        </a>
      </li>
    </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>  تواصل معنا  </h5>

            <ul className='list-unstyled'>
                <li>
                info-lighttale2022@gmail.com
              </li>
              <li>
              gallery.lighttale2022@gmail.com
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                    <div className="widget">
                        <ul className="footer-social nav-item list-unstyled">
                            <li className="align-left ft widget30"><a href="http://twitter.com/AliShakrany"><span className="fab fa-twitter widget40"></span></a></li>
                            <li className="align-right ft widget30"><a href="http://fb.com/lighttale2022"><span className="fab fa-facebook widget40"></span></a></li>
                            <li className="animate ft "><a href="https://api.whatsapp.com/send/?phone=201555090521&text&app_absent=0"><span className="fab fa-whatsapp widget40"></span></a></li>
                        </ul>
                    </div>
                </MDBCol>



        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
         جميع الحقوق محفوظة:{' '}
         حكاية ضوء

         &copy; {new Date().getFullYear()}

      </div>
    </MDBFooter>
    </>
  );
}